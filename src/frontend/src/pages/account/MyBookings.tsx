import { ReviewSubmissionForm } from "@/components/ReviewSubmissionForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Download,
  FileText,
  MapPin,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const upcomingBookings = [
  {
    id: "GT-2026-KK-08547",
    trek: "Kedarkantha Trek",
    state: "Uttarakhand",
    dateRange: "Dec 20 – Dec 24, 2026",
    trekkers: 2,
    totalPaid: 22785,
    status: "Confirmed" as const,
    guide: "Ankit Rawat",
    altitude: "3,810m",
    daysLeft: 202,
  },
  {
    id: "GT-2027-BT-01123",
    trek: "Brahmatal Trek",
    state: "Uttarakhand",
    dateRange: "Jan 15 – Jan 20, 2027",
    trekkers: 3,
    totalPaid: 34500,
    status: "Confirmed" as const,
    guide: "Vikram Rawat",
    altitude: "3,862m",
    daysLeft: 228,
  },
];

const pastBookings = [
  {
    id: "GT-2025-CT-04210",
    trek: "Chopta Tungnath Trek",
    state: "Uttarakhand",
    dateRange: "Oct 12 – Oct 14, 2025",
    trekkers: 2,
    totalPaid: 9000,
    status: "Completed" as const,
    guide: "Priya Negi",
    altitude: "4,000m",
  },
  {
    id: "GT-2025-HP-06891",
    trek: "Hampta Pass Trek",
    state: "Himachal Pradesh",
    dateRange: "Jun 8 – Jun 12, 2025",
    trekkers: 2,
    totalPaid: 22000,
    status: "Completed" as const,
    guide: "Rohan Sharma",
    altitude: "4,270m",
  },
];

type BookingStatus = "Confirmed" | "Pending" | "Cancelled" | "Completed";

const statusStyles: Record<BookingStatus, { bg: string; text: string }> = {
  Confirmed: { bg: "#E8F5EE", text: "#145C38" },
  Pending: { bg: "#FFF8E1", text: "#F4A623" },
  Cancelled: { bg: "#FDECEA", text: "#E74C3C" },
  Completed: { bg: "#E8F5EE", text: "#145C38" },
};

type UpcomingBooking = (typeof upcomingBookings)[0];
type PastBooking = (typeof pastBookings)[0];

function getTrekSlug(trekName: string): string {
  return trekName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function hasReviewed(bookingId: string): boolean {
  try {
    return localStorage.getItem(`reviewed_${bookingId}`) === "true";
  } catch {
    return false;
  }
}

function markReviewed(bookingId: string): void {
  try {
    localStorage.setItem(`reviewed_${bookingId}`, "true");
  } catch {
    // ignore
  }
}

function BookingCard({
  booking,
  variant,
}: { booking: UpcomingBooking | PastBooking; variant: "upcoming" | "past" }) {
  const style = statusStyles[booking.status];
  const daysLeft = "daysLeft" in booking ? booking.daysLeft : null;
  const [showReview, setShowReview] = useState(false);
  const [alreadyReviewed, setAlreadyReviewed] = useState(() =>
    hasReviewed(booking.id),
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
      data-ocid={`my_bookings.${variant}.card`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
              style={{
                background: "#E8F5EE",
                color: "#145C38",
                fontFamily: "var(--gt-font-label)",
              }}
            >
              {booking.state}
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
              style={{
                background: style.bg,
                color: style.text,
                fontFamily: "var(--gt-font-label)",
              }}
            >
              {booking.status}
            </span>
            {daysLeft !== null && (
              <span className="text-xs text-muted-foreground ml-1">
                {daysLeft} days away
              </span>
            )}
          </div>
          <h3
            className="text-xl font-bold text-foreground mb-1 truncate"
            style={{ fontFamily: "var(--gt-font-display)" }}
          >
            {booking.trek}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: "#145C38" }} />
              {booking.dateRange}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" style={{ color: "#145C38" }} />
              {booking.trekkers} trekker{booking.trekkers > 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: "#145C38" }} />
              {booking.altitude}
            </span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--gt-font-label)" }}
          >
            BOOKING ID
          </p>
          <p className="text-sm font-mono font-bold text-foreground">
            {booking.id}
          </p>
          <p
            className="text-xs text-muted-foreground mt-1"
            style={{ fontFamily: "var(--gt-font-label)" }}
          >
            TOTAL PAID
          </p>
          <p className="text-lg font-bold" style={{ color: "#145C38" }}>
            ₹{booking.totalPaid.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2">
        {variant === "upcoming" ? (
          <>
            <Button
              size="sm"
              variant="outline"
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--gt-font-label)" }}
              data-ocid="my_bookings.upcoming.view_details_button"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              View Details
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--gt-font-label)" }}
              data-ocid="my_bookings.upcoming.download_itinerary_button"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download Itinerary
            </Button>
            <Button
              size="sm"
              className="text-xs font-semibold text-white"
              style={{
                background: "#145C38",
                fontFamily: "var(--gt-font-label)",
              }}
              data-ocid="my_bookings.upcoming.contact_guide_button"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              Contact Guide
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="outline"
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--gt-font-label)" }}
              data-ocid="my_bookings.past.download_certificate_button"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download Certificate
            </Button>
            {alreadyReviewed ? (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "#f0fdf4",
                  color: "#145C38",
                  fontFamily: "var(--gt-font-label)",
                }}
                data-ocid="my_bookings.past.review_submitted_badge"
              >
                <Star className="w-3 h-3" fill="#F4A623" color="#F4A623" />
                Review Submitted
              </span>
            ) : (
              <Button
                size="sm"
                className="text-xs font-semibold"
                style={{
                  background: "#F4A623",
                  color: "#0A2E1A",
                  fontFamily: "var(--gt-font-label)",
                }}
                onClick={() => setShowReview(true)}
                data-ocid="my_bookings.past.write_review_button"
              >
                <Star className="w-3.5 h-3.5 mr-1.5" />
                Write Review
              </Button>
            )}
            {showReview && (
              <ReviewSubmissionForm
                trekSlug={getTrekSlug(booking.trek)}
                trekName={booking.trek}
                onClose={() => setShowReview(false)}
                onSuccess={() => {
                  markReviewed(booking.id);
                  setAlreadyReviewed(true);
                  setShowReview(false);
                }}
              />
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20" data-ocid="my_bookings.empty_state">
      <div
        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
        style={{ background: "#E8F5EE" }}
      >
        🏔️
      </div>
      <h3
        className="text-xl font-bold text-foreground mb-2"
        style={{ fontFamily: "var(--gt-font-display)" }}
      >
        No bookings yet
      </h3>
      <p className="text-muted-foreground mb-6">
        Your booked treks will appear here.
      </p>
      <Link to="/treks">
        <Button
          className="font-bold text-white"
          style={{ background: "#145C38", fontFamily: "var(--gt-font-label)" }}
        >
          Browse Treks
        </Button>
      </Link>
    </div>
  );
}

export default function MyBookingsPage() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "90px" }}
      data-ocid="my_bookings.page"
    >
      <section
        className="py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: "#2ECC71", fontFamily: "var(--gt-font-label)" }}
          >
            Account
          </p>
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--gt-font-display)" }}
          >
            My Bookings
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            Manage your upcoming adventures and past treks
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Tabs defaultValue="upcoming" data-ocid="my_bookings.tabs">
          <TabsList className="mb-8" style={{ background: "#E8F5EE" }}>
            <TabsTrigger
              value="upcoming"
              className="font-semibold"
              style={{ fontFamily: "var(--gt-font-label)" }}
              data-ocid="my_bookings.upcoming_tab"
            >
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="font-semibold"
              style={{ fontFamily: "var(--gt-font-label)" }}
              data-ocid="my_bookings.past_tab"
            >
              Past ({pastBookings.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.length === 0 ? (
              <EmptyState />
            ) : (
              upcomingBookings.map((b) => (
                <BookingCard key={b.id} booking={b} variant="upcoming" />
              ))
            )}
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            {pastBookings.length === 0 ? (
              <EmptyState />
            ) : (
              pastBookings.map((b) => (
                <BookingCard key={b.id} booking={b} variant="past" />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
