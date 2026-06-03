import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import type { WaitlistInput } from "@/declarations/backend.did.d";
import { useSeatAvailability } from "@/hooks/useSeatAvailability";
import { useActor } from "@caffeineai/core-infrastructure";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface WaitlistModalProps {
  trekSlug: string;
  batchDate: string;
  waitlistCount: number;
  onClose: () => void;
}

function WaitlistModal({
  trekSlug,
  batchDate,
  waitlistCount,
  onClose,
}: WaitlistModalProps) {
  const { actor } = useActor(createActor);
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [position, setPosition] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    setError("");
    try {
      const input: WaitlistInput = { name, email, phone, trekSlug, batchDate };
      const result = await actor.joinWaitlist(input);
      setPosition(result);
    } catch {
      setError(t("common_error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      data-ocid="waitlist.dialog"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Join the Waitlist
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {waitlistCount > 0
                ? `${waitlistCount} others already on waitlist`
                : "Be first on the waitlist"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            data-ocid="waitlist.close_button"
            className="rounded-full p-1 text-gray-400 transition-colors hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        {position ? (
          <div className="rounded-xl bg-green-50 p-4 text-center">
            <div className="text-3xl">🎉</div>
            <p className="mt-2 font-semibold text-green-800">
              You're on the waitlist!
            </p>
            <p className="mt-1 text-sm text-green-700">
              Reference: <strong>{position}</strong>
            </p>
            <p className="mt-2 text-xs text-green-600">
              We'll notify you by email if a seat opens up.
            </p>
            <Button
              type="button"
              onClick={onClose}
              className="mt-4 w-full"
              data-ocid="waitlist.confirm_button"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="wl-name">Full Name</Label>
              <Input
                id="wl-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Mehta"
                required
                data-ocid="waitlist.name_input"
              />
            </div>
            <div>
              <Label htmlFor="wl-email">Email</Label>
              <Input
                id="wl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@email.com"
                required
                data-ocid="waitlist.email_input"
              />
            </div>
            <div>
              <Label htmlFor="wl-phone">Phone / WhatsApp</Label>
              <Input
                id="wl-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                required
                data-ocid="waitlist.phone_input"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-700 hover:bg-green-800"
              data-ocid="waitlist.submit_button"
            >
              {submitting ? "Joining..." : t("trek_join_waitlist")}
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

interface SeatCounterProps {
  trekSlug: string;
  batchDate: string;
  variant?: "sidebar" | "card" | "calendar";
}

export function SeatCounter({
  trekSlug,
  batchDate,
  variant = "sidebar",
}: SeatCounterProps) {
  const { available, total, isLow, isFull, recentViewers, isLoading } =
    useSeatAvailability(trekSlug, batchDate);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const { actor } = useActor(createActor);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const { t } = useLanguage();

  const handleWaitlistOpen = async () => {
    if (actor) {
      try {
        const count = await actor.getWaitlistCount(trekSlug, batchDate);
        setWaitlistCount(Number(count));
      } catch {
        /* ignore */
      }
    }
    setShowWaitlist(true);
  };

  const colorClass = isFull
    ? "text-red-600"
    : available <= 3
      ? "text-red-500"
      : available <= 8
        ? "text-amber-500"
        : "text-green-600";
  const dotColor = isFull
    ? "bg-red-500"
    : available <= 3
      ? "bg-red-400"
      : available <= 8
        ? "bg-amber-400"
        : "bg-green-500";
  const capacityPct =
    total > 0 ? Math.round(((total - available) / total) * 100) : 0;

  if (isLoading) {
    return (
      <div
        className={`animate-pulse rounded-lg bg-gray-100 ${variant === "card" ? "h-5 w-20" : "h-10 w-full"}`}
      />
    );
  }

  if (variant === "card") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold shadow-sm ${colorClass}`}
        data-ocid="seat_counter.card"
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
        {isFull ? t("trek_sold_out") : `${available} ${t("trek_seats_left")}`}
      </span>
    );
  }

  if (variant === "calendar") {
    return (
      <div
        className="flex items-center gap-2"
        data-ocid="seat_counter.calendar"
      >
        <div className="h-1.5 flex-1 rounded-full bg-gray-200">
          <div
            className={`h-full rounded-full transition-all ${capacityPct >= 90 ? "bg-red-500" : capacityPct >= 65 ? "bg-amber-400" : "bg-green-500"}`}
            style={{ width: `${capacityPct}%` }}
          />
        </div>
        <span className={`text-xs font-medium ${colorClass}`}>
          {isFull ? t("trek_sold_out") : `${available}/${total}`}
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        className="rounded-xl border border-gray-100 bg-gray-50 p-3"
        data-ocid="seat_counter.sidebar"
      >
        {isFull ? (
          <div className="text-center">
            <p className="font-bold text-red-600">SOLD OUT</p>
            {waitlistCount > 0 && (
              <p className="mt-0.5 text-xs text-gray-500">
                {waitlistCount} on waitlist
              </p>
            )}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleWaitlistOpen}
              className="mt-2 w-full border-red-200 text-red-600 hover:bg-red-50"
              data-ocid="seat_counter.join_waitlist_button"
            >
              {t("trek_join_waitlist")}
            </Button>
          </div>
        ) : (
          <div>
            <AnimatePresence mode="wait">
              {isLow ? (
                <motion.div
                  key="low"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                    className="text-base"
                  >
                    ⚡
                  </motion.span>
                  <span className={`text-sm font-bold ${colorClass}`}>
                    {t("trek_almost_full")}! Only {available} seats remain
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="normal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                  <span className={`text-sm font-semibold ${colorClass}`}>
                    ⚡ {available} of {total} {t("trek_seats_left")}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
              <motion.div
                className={`h-full rounded-full ${capacityPct >= 90 ? "bg-red-500" : capacityPct >= 65 ? "bg-amber-400" : "bg-green-500"}`}
                initial={{ width: 0 }}
                animate={{ width: `${capacityPct}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        )}
        {recentViewers > 1 && (
          <p className="mt-2 text-center text-xs text-gray-500">
            👁 {recentViewers} {t("seat_counter_viewing")}
          </p>
        )}
      </div>
      <AnimatePresence>
        {showWaitlist && (
          <WaitlistModal
            trekSlug={trekSlug}
            batchDate={batchDate}
            waitlistCount={waitlistCount}
            onClose={() => setShowWaitlist(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default SeatCounter;
