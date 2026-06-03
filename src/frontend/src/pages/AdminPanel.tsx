import { createActor } from "@/backend";
import type { Booking, Review, TrekPhoto } from "@/backend";
import { AdminBlogScheduler } from "@/components/AdminBlogScheduler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  BookOpen,
  Calendar,
  Camera,
  ChevronDown,
  ChevronRight,
  Download,
  Home,
  LayoutDashboard,
  Lock,
  PenSquare,
  Star,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const ADMIN_PIN = "globaltrek2026";

type TabId =
  | "dashboard"
  | "photos"
  | "reviews"
  | "waitlist"
  | "bookings"
  | "blog";

function StarRow({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-32 text-muted-foreground truncate">{label}</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3 h-3 ${
              s <= rating
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
      <span className="text-muted-foreground">{rating}/5</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    confirmed: "bg-emerald-100 text-emerald-800",
    Confirmed: "bg-emerald-100 text-emerald-800",
    pending: "bg-amber-100 text-amber-800",
    Pending: "bg-amber-100 text-amber-800",
    cancelled: "bg-red-100 text-red-800",
    Cancelled: "bg-red-100 text-red-800",
    approved: "bg-emerald-100 text-emerald-800",
    waiting: "bg-amber-100 text-amber-800",
    Waiting: "bg-amber-100 text-amber-800",
    notified: "bg-blue-100 text-blue-800",
    Notified: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
        map[status] ?? "bg-muted text-muted-foreground"
      }`}
    >
      {status}
    </span>
  );
}

function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton
          key={`skeleton-row-${i + 1}-of-${rows}`}
          className="h-24 w-full rounded-xl"
        />
      ))}
    </div>
  );
}

// --- PIN Gate ---
function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem("admin_auth", "1");
      onUnlock();
    } else {
      setError("Incorrect PIN. Authorized staff only.");
      setPin("");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <Card className="border-border shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="font-display text-2xl">
              Admin Access
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Global Trek — Authorized Staff Only
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="admin-pin"
                >
                  Enter Admin PIN
                </label>
                <Input
                  id="admin-pin"
                  type="password"
                  placeholder="••••••••••••"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError("");
                  }}
                  className="mt-1"
                  data-ocid="admin.pin_input"
                  autoFocus
                />
              </div>
              {error && (
                <p
                  className="text-destructive text-sm"
                  data-ocid="admin.error_state"
                >
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                data-ocid="admin.submit_button"
              >
                Unlock Admin Panel
              </Button>
            </form>
            <p className="text-center mt-4">
              <a
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                ← Back to Site
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// --- Dashboard Tab ---
function DashboardTab({
  pendingPhotos,
  pendingReviews,
  bookings,
  onApproveAllPhotos,
  onApproveAllReviews,
}: {
  pendingPhotos: TrekPhoto[];
  pendingReviews: Review[];
  bookings: Booking[];
  onApproveAllPhotos: () => void;
  onApproveAllReviews: () => void;
}) {
  const stats = [
    {
      label: "Pending Photos",
      value: pendingPhotos.length,
      icon: Camera,
      color: "text-blue-600",
    },
    {
      label: "Pending Reviews",
      value: pendingReviews.length,
      icon: Star,
      color: "text-amber-600",
    },
    {
      label: "Total Bookings",
      value: bookings.length,
      icon: Calendar,
      color: "text-emerald-600",
    },
    {
      label: "Total Revenue",
      value: `₹${bookings.reduce((s, b) => s + Number(b.totalAmount), 0).toLocaleString("en-IN")}`,
      icon: BookOpen,
      color: "text-primary",
    },
  ];

  const recentBookings = [...bookings]
    .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
    .slice(0, 5);

  return (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">
          Welcome, Admin
        </h1>
        <p className="text-muted-foreground">Global Trek Admin Dashboard</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {s.label}
                  </p>
                  <p className={`text-2xl font-bold mt-1 ${s.color}`}>
                    {s.value}
                  </p>
                </div>
                <s.icon className={`w-8 h-8 ${s.color} opacity-20`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            onClick={onApproveAllPhotos}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={pendingPhotos.length === 0}
            data-ocid="admin.approve_all_photos_button"
          >
            <Camera className="w-4 h-4 mr-2" />
            Approve All Pending Photos ({pendingPhotos.length})
          </Button>
          <Button
            onClick={onApproveAllReviews}
            variant="outline"
            disabled={pendingReviews.length === 0}
            data-ocid="admin.approve_all_reviews_button"
          >
            <Star className="w-4 h-4 mr-2" />
            Approve All Pending Reviews ({pendingReviews.length})
          </Button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {recentBookings.length === 0 ? (
            <p className="text-muted-foreground text-sm">No bookings yet.</p>
          ) : (
            <div className="divide-y divide-border">
              {recentBookings.map((b) => (
                <div
                  key={b.id}
                  className="py-3 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      New booking — {b.contactEmail}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {b.trekSlug} · {b.batchDate}
                    </p>
                  </div>
                  <StatusBadge status={b.status} />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// --- Photo Approvals Tab ---
function PhotoApprovalsTab({
  photos,
  onApprove,
  onReject,
  loading,
}: {
  photos: TrekPhoto[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
}) {
  const [filter, setFilter] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");

  const filtered =
    filter === "all"
      ? photos
      : photos.filter((p) => p.status.toLowerCase() === filter);

  return (
    <motion.div
      key="photos"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="space-y-5"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">
            Community Photo Approvals
          </h2>
          <p className="text-muted-foreground text-sm">
            {photos.filter((p) => p.status === "pending").length} pending
            approval
          </p>
        </div>
        <Button
          onClick={() => {
            for (const p of photos.filter((ph) => ph.status === "pending")) {
              onApprove(p.id);
            }
          }}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={photos.filter((p) => p.status === "pending").length === 0}
          data-ocid="admin.photos.approve_all_button"
        >
          Approve All Pending
        </Button>
      </div>

      <div className="flex gap-2" role="tablist">
        {(["all", "pending", "approved", "rejected"] as const).map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            data-ocid={`admin.photos.filter.${f}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingSkeleton rows={3} />
      ) : filtered.length === 0 ? (
        <div className="text-center py-16" data-ocid="admin.photos.empty_state">
          <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-muted-foreground">
            No {filter === "all" ? "" : filter} photos to review
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              data-ocid={`admin.photos.item.${i + 1}`}
            >
              <Card className="border-border overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={photo.storageUrl}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <StatusBadge status={photo.status} />
                  </div>
                </div>
                <CardContent className="p-3 space-y-2">
                  <p className="font-medium text-sm text-foreground">
                    {photo.uploaderName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {photo.uploaderEmail}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {photo.trekSlug} · {photo.dateOfTrek}
                  </p>
                  {photo.caption && (
                    <p className="text-xs text-foreground italic line-clamp-2">
                      "{photo.caption}"
                    </p>
                  )}
                  {photo.status === "pending" && (
                    <div className="flex gap-2 pt-1">
                      <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs"
                        onClick={() => onApprove(photo.id)}
                        data-ocid={`admin.photos.approve_button.${i + 1}`}
                      >
                        ✓ Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-red-300 text-red-600 hover:bg-red-50 text-xs"
                        onClick={() => onReject(photo.id)}
                        data-ocid={`admin.photos.reject_button.${i + 1}`}
                      >
                        ✗ Reject
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// --- Review Approvals Tab ---
function ReviewApprovalsTab({
  reviews,
  onApprove,
  onReject,
  loading,
}: {
  reviews: Review[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
}) {
  const [trekFilter, setTrekFilter] = useState("all");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const treks = Array.from(new Set(reviews.map((r) => r.trekId)));
  const filtered =
    trekFilter === "all"
      ? reviews
      : reviews.filter((r) => r.trekId === trekFilter);

  return (
    <motion.div
      key="reviews"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="space-y-5"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">
            Community Review Approvals
          </h2>
          <p className="text-muted-foreground text-sm">
            {reviews.length} pending review
          </p>
        </div>
        <select
          className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
          value={trekFilter}
          onChange={(e) => setTrekFilter(e.target.value)}
          data-ocid="admin.reviews.trek_filter"
        >
          <option value="all">All Treks</option>
          {treks.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <LoadingSkeleton rows={4} />
      ) : filtered.length === 0 ? (
        <div
          className="text-center py-16"
          data-ocid="admin.reviews.empty_state"
        >
          <Star className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-muted-foreground">No pending reviews to review</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((review, i) => {
            const isExpanded = expanded.has(review.id);
            const longText = review.reviewText.length > 200;
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: i * 0.04 }}
                data-ocid={`admin.reviews.item.${i + 1}`}
              >
                <Card className="border-border">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">
                          {review.reviewerName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.reviewerCity} · {review.trekId}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${
                              s <= Number(review.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <StarRow rating={Number(review.rating)} label="Overall" />
                    </div>

                    <div className="text-sm text-foreground">
                      <p
                        className={`leading-relaxed ${!isExpanded && longText ? "line-clamp-3" : ""}`}
                      >
                        {review.reviewText}
                      </p>
                      {longText && (
                        <button
                          type="button"
                          className="text-primary text-xs mt-1 underline hover:no-underline"
                          onClick={() => {
                            const next = new Set(expanded);
                            if (isExpanded) next.delete(review.id);
                            else next.add(review.id);
                            setExpanded(next);
                          }}
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                    </div>

                    {!review.verified && (
                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={() => onApprove(review.id)}
                          data-ocid={`admin.reviews.approve_button.${i + 1}`}
                        >
                          ✓ Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-300 text-red-600 hover:bg-red-50"
                          onClick={() => onReject(review.id)}
                          data-ocid={`admin.reviews.reject_button.${i + 1}`}
                        >
                          ✗ Reject
                        </Button>
                      </div>
                    )}
                    {review.verified && (
                      <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                        Already Approved
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

// --- Waitlist Tab ---
interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  phone: string;
  trekSlug: string;
  batchDate: string;
  status: "Waiting" | "Notified";
  joinedAt: number;
}

function WaitlistTab() {
  const { actor } = useActor(createActor);
  // Simulated waitlist data — in a real deployment this would come from the canister
  const [entries, setEntries] = useState<WaitlistEntry[]>([
    {
      id: "w1",
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "+91-9876543210",
      trekSlug: "kedarkantha",
      batchDate: "Dec 30, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 86400000 * 2,
    },
    {
      id: "w2",
      name: "Arjun Kapoor",
      email: "arjun@gmail.com",
      phone: "+91-9988776655",
      trekSlug: "kedarkantha",
      batchDate: "Dec 30, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 86400000,
    },
    {
      id: "w3",
      name: "Nisha Patel",
      email: "nisha@gmail.com",
      phone: "+91-9123456789",
      trekSlug: "hampta-pass",
      batchDate: "Jun 20, 2026",
      status: "Notified",
      joinedAt: Date.now() - 86400000 * 5,
    },
    {
      id: "w4",
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      phone: "+91-9012345678",
      trekSlug: "hampta-pass",
      batchDate: "Jun 20, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 3600000 * 4,
    },
  ]);

  function formatTimeAgo(ts: number) {
    const diff = Date.now() - ts;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000);
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    return "Just now";
  }

  function notify(id: string) {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status: "Notified" as const } : e,
      ),
    );
  }

  function remove(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const groups = entries.reduce<Record<string, WaitlistEntry[]>>((acc, e) => {
    const key = `${e.trekSlug}__${e.batchDate}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(e);
    return acc;
  }, {});

  return (
    <motion.div
      key="waitlist"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="space-y-5"
    >
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">
          Waitlist Management
        </h2>
        <p className="text-muted-foreground text-sm">
          {entries.length} total people across {Object.keys(groups).length}{" "}
          batches
        </p>
      </div>

      {entries.length === 0 ? (
        <div
          className="text-center py-16"
          data-ocid="admin.waitlist.empty_state"
        >
          <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-muted-foreground">No active waitlists</p>
        </div>
      ) : (
        Object.entries(groups).map(([key, groupEntries]) => {
          const [trek, batch] = key.split("__");
          return (
            <Card key={key} className="border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <CardTitle className="text-base">
                    {trek
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                    — {batch}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({groupEntries.length} waiting)
                    </span>
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs h-7 border-primary/40 text-primary hover:bg-primary/10"
                      onClick={async () => {
                        const trekName = trek
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase());
                        try {
                          await actor?.notifyWaitlistBatch(
                            trekName,
                            batch,
                            `https://globaltrek.in/treks/${trek}`,
                          );
                        } catch {
                          // best-effort
                        }
                      }}
                      data-ocid="admin.waitlist.notify_all_button"
                    >
                      Notify All (In-App)
                    </Button>
                    <p className="text-xs italic text-muted-foreground">
                      Email notifications available with plan upgrade
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        {[
                          "#",
                          "Name",
                          "Email",
                          "Phone",
                          "Joined",
                          "Status",
                          "Action",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {groupEntries.map((entry, idx) => (
                        <tr
                          key={entry.id}
                          data-ocid={`admin.waitlist.item.${idx + 1}`}
                        >
                          <td className="px-4 py-3 text-muted-foreground">
                            {idx + 1}
                          </td>
                          <td className="px-4 py-3 font-medium text-foreground">
                            {entry.name}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {entry.email}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {entry.phone}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {formatTimeAgo(entry.joinedAt)}
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={entry.status} />
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2 flex-wrap">
                              {entry.status === "Waiting" && (
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-7"
                                  onClick={() => notify(entry.id)}
                                  data-ocid={`admin.waitlist.notify_button.${idx + 1}`}
                                >
                                  Notify
                                </Button>
                              )}
                              {entry.phone && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-emerald-400 text-emerald-700 hover:bg-emerald-50 text-xs h-7"
                                  onClick={() =>
                                    window.open(
                                      `https://wa.me/91${entry.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                                        `Hi ${entry.name}! A seat has opened on ${trek
                                          .replace(/-/g, " ")
                                          .replace(/\b\w/g, (c) =>
                                            c.toUpperCase(),
                                          )} (${batch}). Book now at https://globaltrek.in`,
                                      )}`,
                                      "_blank",
                                    )
                                  }
                                  data-ocid={`admin.waitlist.whatsapp_button.${idx + 1}`}
                                >
                                  WhatsApp
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-200 text-red-600 hover:bg-red-50 text-xs h-7"
                                onClick={() => remove(entry.id)}
                                data-ocid={`admin.waitlist.remove_button.${idx + 1}`}
                              >
                                Remove
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          );
        })
      )}
    </motion.div>
  );
}

// --- Bookings Tab ---
function BookingsTab({
  bookings,
  loading,
}: {
  bookings: Booking[];
  loading: boolean;
}) {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [trekFilter, setTrekFilter] = useState("all");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const PER_PAGE = 20;

  const treks = Array.from(new Set(bookings.map((b) => b.trekSlug)));
  const filtered = bookings.filter((b) => {
    const statusOk =
      statusFilter === "all" ||
      b.status.toLowerCase() === statusFilter.toLowerCase();
    const trekOk = trekFilter === "all" || b.trekSlug === trekFilter;
    return statusOk && trekOk;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalRevenue = bookings.reduce((s, b) => s + Number(b.totalAmount), 0);

  function exportCsv() {
    const header = [
      "Booking ID",
      "Email",
      "Phone",
      "Trek",
      "Batch",
      "Participants",
      "Amount",
      "Status",
      "Date",
    ];
    const rows = bookings.map((b) => [
      b.id,
      b.contactEmail,
      b.contactPhone,
      b.trekSlug,
      b.batchDate,
      b.participants.length,
      b.totalAmount.toString(),
      b.status,
      new Date(Number(b.createdAt) / 1_000_000).toLocaleDateString("en-IN"),
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map(String).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `globaltrek-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <motion.div
      key="bookings"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="space-y-5"
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">
            All Bookings
          </h2>
          <p className="text-muted-foreground text-sm">
            {bookings.length} bookings · Total Revenue: ₹
            {totalRevenue.toLocaleString("en-IN")}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={exportCsv}
          data-ocid="admin.bookings.export_button"
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
          value={trekFilter}
          onChange={(e) => {
            setTrekFilter(e.target.value);
            setPage(1);
          }}
          data-ocid="admin.bookings.trek_filter"
        >
          <option value="all">All Treks</option>
          {treks.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          data-ocid="admin.bookings.status_filter"
        >
          <option value="all">All Statuses</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <LoadingSkeleton rows={5} />
      ) : paged.length === 0 ? (
        <div
          className="text-center py-16"
          data-ocid="admin.bookings.empty_state"
        >
          <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-muted-foreground">No bookings found</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 sticky top-0">
                <tr>
                  {[
                    "Booking ID",
                    "Trekker",
                    "Trek",
                    "Batch",
                    "Participants",
                    "Amount",
                    "Status",
                    "Date",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paged.map((b, i) => (
                  <>
                    <tr
                      key={b.id}
                      className="hover:bg-muted/30 transition-colors"
                      data-ocid={`admin.bookings.item.${i + 1}`}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                        {b.id.slice(0, 10)}…
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-foreground">
                            {b.contactEmail}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {b.contactPhone}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        {b.trekSlug}
                      </td>
                      <td className="px-4 py-3 text-foreground whitespace-nowrap">
                        {b.batchDate}
                      </td>
                      <td className="px-4 py-3 text-center text-foreground">
                        {b.participants.length}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-foreground">
                        ₹{Number(b.totalAmount).toLocaleString("en-IN")}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={b.status} />
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {new Date(
                          Number(b.createdAt) / 1_000_000,
                        ).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedRow(expandedRow === b.id ? null : b.id)
                          }
                          className="text-primary hover:text-primary/80 flex items-center gap-1 text-xs"
                          data-ocid={`admin.bookings.expand_button.${i + 1}`}
                        >
                          {expandedRow === b.id ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          )}
                          View
                        </button>
                      </td>
                    </tr>
                    {expandedRow === b.id && (
                      <tr key={`${b.id}-detail`}>
                        <td colSpan={9} className="px-4 py-4 bg-muted/20">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                Payment Type
                              </p>
                              <p className="font-medium text-foreground">
                                {b.paymentType}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                Amount Paid
                              </p>
                              <p className="font-medium text-foreground">
                                ₹{Number(b.paidAmount).toLocaleString("en-IN")}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                Promo Code
                              </p>
                              <p className="font-medium text-foreground">
                                {b.promoCode || "—"}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                Participants
                              </p>
                              <p className="font-medium text-foreground">
                                {b.participants
                                  .map((p) => `${p.firstName} ${p.lastName}`)
                                  .join(", ") || "—"}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  data-ocid="admin.bookings.pagination_prev"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  data-ocid="admin.bookings.pagination_next"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

// --- Main Admin Panel ---
export default function AdminPanel() {
  const { actor, isFetching } = useActor(createActor);
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("admin_auth") === "1",
  );
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data state
  const [photos, setPhotos] = useState<TrekPhoto[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [loadingBookings, setLoadingBookings] = useState(false);

  useEffect(() => {
    if (!authenticated || !actor || isFetching) return;

    async function loadAll() {
      if (!actor) return;
      setLoadingPhotos(true);
      setLoadingReviews(true);
      setLoadingBookings(true);

      try {
        const p = await actor.getAllPendingPhotos();
        setPhotos(p);
      } catch {
        setPhotos([]);
      } finally {
        setLoadingPhotos(false);
      }

      try {
        const r = await actor.listAllReviews();
        setReviews(r.filter((rv) => !rv.verified));
      } catch {
        setReviews([]);
      } finally {
        setLoadingReviews(false);
      }

      try {
        // Load bookings using getUserBookings with empty string to get all,
        // or fall back to listing treks and aggregating
        const b = await actor.getUserBookings("");
        setBookings(b);
      } catch {
        setBookings([]);
      } finally {
        setLoadingBookings(false);
      }
    }

    loadAll();
  }, [authenticated, actor, isFetching]);

  async function handleApprovePhoto(id: string) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    try {
      await actor?.approveTrekPhoto(id);
    } catch {
      // optimistic — already removed from UI
    }
  }

  function handleRejectPhoto(id: string) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleApproveReview(id: string) {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    try {
      await actor?.createReview({
        ...reviews.find((r) => r.id === id)!,
        verified: true,
      });
    } catch {
      // optimistic
    }
  }

  function handleRejectReview(id: string) {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  async function handleApproveAllPhotos() {
    const pending = photos.filter((p) => p.status === "pending");
    for (const p of pending) {
      await handleApprovePhoto(p.id);
    }
  }

  async function handleApproveAllReviews() {
    const pending = [...reviews];
    for (const r of pending) {
      await handleApproveReview(r.id);
    }
  }

  if (!authenticated) {
    return <PinGate onUnlock={() => setAuthenticated(true)} />;
  }

  const navItems: {
    id: TabId;
    label: string;
    icon: React.FC<{ className?: string }>;
    badge?: number;
  }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    {
      id: "photos",
      label: "Photo Approvals",
      icon: Camera,
      badge: photos.length,
    },
    {
      id: "reviews",
      label: "Review Approvals",
      icon: Star,
      badge: reviews.length,
    },
    { id: "waitlist", label: "Waitlist", icon: Users },
    {
      id: "bookings",
      label: "Bookings",
      icon: Calendar,
      badge: bookings.length,
    },
    { id: "blog", label: "Blog Scheduler", icon: PenSquare },
  ];

  const Sidebar = (
    <aside className="flex flex-col h-full bg-card border-r border-border">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Home className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground">
              Global Trek
            </p>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === item.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            data-ocid={`admin.nav.${item.id}`}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge !== undefined && item.badge > 0 && (
              <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Site
        </a>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-background flex" data-ocid="admin.page">
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col w-60 flex-shrink-0 h-screen sticky top-0">
        {Sidebar}
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              className="absolute left-0 top-0 h-full w-60"
              onClick={(e) => e.stopPropagation()}
            >
              {Sidebar}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-card border-b border-border sticky top-0 z-30">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Open navigation"
            data-ocid="admin.mobile_menu_button"
          >
            <LayoutDashboard className="w-5 h-5 text-foreground" />
          </button>
          <span className="font-display font-bold text-foreground">
            {navItems.find((n) => n.id === activeTab)?.label ?? "Admin"}
          </span>
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem("admin_auth");
              setAuthenticated(false);
            }}
            className="ml-auto p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Lock admin panel"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Content area */}
        <main className="flex-1 p-5 md:p-8 max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <DashboardTab
                pendingPhotos={photos}
                pendingReviews={reviews}
                bookings={bookings}
                onApproveAllPhotos={handleApproveAllPhotos}
                onApproveAllReviews={handleApproveAllReviews}
              />
            )}
            {activeTab === "photos" && (
              <PhotoApprovalsTab
                photos={photos}
                onApprove={handleApprovePhoto}
                onReject={handleRejectPhoto}
                loading={loadingPhotos}
              />
            )}
            {activeTab === "reviews" && (
              <ReviewApprovalsTab
                reviews={reviews}
                onApprove={handleApproveReview}
                onReject={handleRejectReview}
                loading={loadingReviews}
              />
            )}
            {activeTab === "waitlist" && <WaitlistTab />}
            {activeTab === "bookings" && (
              <BookingsTab bookings={bookings} loading={loadingBookings} />
            )}
            {activeTab === "blog" && <AdminBlogScheduler />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
