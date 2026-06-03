import { Link } from "@tanstack/react-router";
import {
  Download,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SeatCounter } from "../../components/ui/SeatCounter";
import type { BatchSlot, Trek } from "./types";
import { batchStatusBadge, formatDate, generateBatches } from "./types";

const GT_GREEN = "#1A7A4C";
const GT_DARK = "#145C38";
const GT_AMBER = "#F4A623";

// ─── SECTION 13: STICKY BOOKING WIDGET ────────────────────────────────────────
export function StickyBookingWidget({
  trek,
  visible,
}: { trek: Trek; visible: boolean }) {
  const slug = trek.slug ?? trek.id;
  const price = trek.priceMin ?? 8500;
  const batches = trek.batchSlots ?? generateBatches(trek.id, price);
  const available = batches.filter(
    (b) => b.status !== "sold_out" && b.status !== "waitlist",
  );
  const [selectedBatch, setSelectedBatch] = useState<BatchSlot | null>(
    available[0] ?? null,
  );
  const [participants, setParticipants] = useState(2);

  const batchPrice = selectedBatch?.price ?? price;
  const subtotal = participants * batchPrice;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;
  const groupDiscount = participants >= 6 ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = total - groupDiscount;

  const _badge = selectedBatch
    ? batchStatusBadge(selectedBatch.status, selectedBatch.availableSeats)
    : null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-24 right-4 w-72 z-40 hidden xl:block"
          data-ocid="trek_booking_widget.sidebar"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border"
            style={{ borderColor: "rgba(26,122,76,0.2)", background: "white" }}
          >
            {/* Price header */}
            <div className="p-4" style={{ background: GT_DARK }}>
              <div className="flex items-end gap-1">
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ₹{batchPrice.toLocaleString()}
                </span>
                <span className="text-white/70 text-sm mb-0.5">/person</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={`ws-${s}`}
                    className="w-3 h-3"
                    style={{
                      fill:
                        s <= Math.round(trek.rating ?? 4.9)
                          ? GT_AMBER
                          : "transparent",
                      color: GT_AMBER,
                    }}
                  />
                ))}
                <span className="text-white/80 text-xs">
                  {trek.rating ?? 4.9} ({trek.reviewCount ?? 247} reviews)
                </span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {/* Batch selector */}
              <div>
                <label
                  htmlFor="select-batch-selector"
                  className="text-xs font-semibold text-gray-600 mb-1 block"
                >
                  Select Batch
                </label>
                <select
                  id="select-batch-selector"
                  value={selectedBatch?.id ?? ""}
                  onChange={(e) =>
                    setSelectedBatch(
                      available.find((b) => b.id === e.target.value) ?? null,
                    )
                  }
                  className="w-full text-sm rounded-lg px-3 py-2 border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: `${GT_GREEN}40`,
                    background: "#f9fafb",
                  }}
                  data-ocid="trek_booking_widget.batch_select"
                >
                  {available.map((b) => (
                    <option key={`opt-${b.id}`} value={b.id}>
                      {formatDate(b.startDate)} – {b.availableSeats} seats
                    </option>
                  ))}
                </select>
                <div className="mt-2">
                  <SeatCounter
                    trekSlug={slug}
                    batchDate={selectedBatch?.startDate ?? ""}
                    variant="sidebar"
                  />
                </div>
              </div>

              {/* Participants */}
              <div>
                <label
                  htmlFor="booking-widget-participants"
                  className="text-xs font-semibold text-gray-600 mb-1 block"
                >
                  Participants
                </label>
                <div
                  className="flex items-center gap-3"
                  id="booking-widget-participants"
                >
                  <button
                    type="button"
                    onClick={() => setParticipants((p) => Math.max(1, p - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all hover:opacity-80"
                    style={{ background: GT_GREEN }}
                    data-ocid="trek_booking_widget.participants_minus"
                  >
                    −
                  </button>
                  <span
                    className="text-lg font-bold"
                    style={{
                      color: GT_DARK,
                      minWidth: "2ch",
                      textAlign: "center",
                    }}
                  >
                    {participants}
                  </span>
                  <button
                    type="button"
                    onClick={() => setParticipants((p) => Math.min(15, p + 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all hover:opacity-80"
                    style={{ background: GT_GREEN }}
                    data-ocid="trek_booking_widget.participants_plus"
                  >
                    +
                  </button>
                  {participants >= 6 && (
                    <span
                      className="text-xs font-semibold"
                      style={{ color: GT_GREEN }}
                    >
                      10% group discount!
                    </span>
                  )}
                </div>
              </div>

              {/* Price breakdown */}
              <div
                className="rounded-lg p-3 text-sm"
                style={{ background: "#f8fafc" }}
              >
                <div className="flex justify-between text-gray-600">
                  <span>
                    {participants} × ₹{batchPrice.toLocaleString()}
                  </span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                {groupDiscount > 0 && (
                  <div
                    className="flex justify-between"
                    style={{ color: GT_GREEN }}
                  >
                    <span>Group discount (10%)</span>
                    <span>−₹{groupDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>GST (5%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <div
                  className="flex justify-between font-bold pt-2 mt-2 border-t"
                  style={{ color: GT_DARK, borderColor: "#e5e7eb" }}
                >
                  <span>Total</span>
                  <span>₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* CTAs */}
              <Link
                to={`/booking/${slug}/select-batch` as "/"}
                className="block w-full py-3 rounded-xl text-center font-bold text-sm tracking-wide transition-all hover:opacity-90 shadow-md"
                style={{ background: GT_AMBER, color: "#0A2E1A" }}
                data-ocid="trek_booking_widget.book_now_button"
              >
                BOOK NOW — ₹{finalTotal.toLocaleString()}
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I%27m%20interested%20in%20booking%20a%20trek."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-green-50"
                style={{ borderColor: "#25D366", color: "#16a34a" }}
                data-ocid="trek_booking_widget.whatsapp_button"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Quick Book
              </a>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-medium border transition-all hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "#374151" }}
                data-ocid="trek_booking_widget.inquiry_button"
              >
                Send Inquiry
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-1 pt-1">
                {[
                  {
                    icon: <Shield className="w-3.5 h-3.5" />,
                    label: "Secure Pay",
                  },
                  {
                    icon: <span className="text-xs">📧</span>,
                    label: "Instant Confirm",
                  },
                  {
                    icon: <span className="text-xs">🔄</span>,
                    label: "Free Reschedule",
                  },
                ].map((tb) => (
                  <div
                    key={`tb-${tb.label}`}
                    className="flex flex-col items-center gap-0.5 text-center"
                  >
                    <span style={{ color: GT_GREEN }}>{tb.icon}</span>
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontSize: "9px" }}
                    >
                      {tb.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── MOBILE STICKY BAR ────────────────────────────────────────────────────────────
export function MobileStickyBar({ trek }: { trek: Trek }) {
  const slug = trek.slug ?? trek.id;
  const price = trek.priceMin ?? 8500;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 xl:hidden safe-area-bottom"
      style={{
        background: "white",
        borderTop: "1px solid rgba(26,122,76,0.15)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
      }}
      data-ocid="trek_mobile_sticky_bar"
    >
      <div className="flex items-center gap-1 px-3 py-3 max-w-lg mx-auto">
        <div className="flex-1">
          <span className="text-xs text-gray-500">From </span>
          <span className="font-bold text-base" style={{ color: GT_DARK }}>
            &#8377;{price.toLocaleString()}
          </span>
        </div>
        <Link
          to={`/booking/${slug}/select-batch` as "/"}
          className="flex-1 py-2.5 rounded-xl text-center text-sm font-bold transition-all hover:opacity-90"
          style={{ background: GT_AMBER, color: "#0A2E1A" }}
          data-ocid="trek_mobile_sticky_bar.book_now_button"
        >
          BOOK NOW
        </Link>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
          style={{ background: "#25D366" }}
          aria-label="WhatsApp"
          data-ocid="trek_mobile_sticky_bar.whatsapp_button"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
          style={{ background: GT_GREEN }}
          aria-label="Call us"
          data-ocid="trek_mobile_sticky_bar.call_button"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
}
