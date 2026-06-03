import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import { useBookingStore } from "@/hooks/useBackend";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle,
  ClipboardCopy,
  Download,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// CSS confetti keyframes are added via a style tag
const CONFETTI_STYLE = `
@keyframes confetti-fall {
  0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.confetti-piece {
  position: fixed;
  top: -10px;
  width: 10px;
  height: 10px;
  animation: confetti-fall linear forwards;
  z-index: 999;
  pointer-events: none;
  border-radius: 2px;
}
`;

const CONFETTI_COLORS = [
  "#1A7A4C",
  "#F4A623",
  "#2ECC71",
  "#fff",
  "#FFD700",
  "#FF6B6B",
];

function ConfettiEffect() {
  const pieces = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
      color:
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: `${6 + Math.random() * 8}px`,
    }));
  }, []);

  return (
    <>
      <style>{CONFETTI_STYLE}</style>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}

export default function Confirmation() {
  const { id } = useParams({ from: "/booking/confirmation/$id" });
  const navigate = useNavigate();
  const { bookingState } = useBookingStore();
  const {
    trekSlug,
    trekName,
    selectedBatch,
    participants,
    paymentType,
    totalAmount,
  } = bookingState;

  const bookingId = id ?? bookingState.bookingId ?? "GT-2026-KK-08547";
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const trek = useMemo(
    () =>
      treksData.find(
        (t) =>
          t.id === (trekSlug || id?.slice(3, 5)?.toLowerCase()) ||
          t.slug === trekSlug,
      ) ?? null,
    [trekSlug, id],
  );

  const trekDisplayName = trekName || trek?.name || "Your Trek";

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  function copyBookingId() {
    navigator.clipboard.writeText(bookingId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const batchDisplay = selectedBatch
    ? `${formatDate(selectedBatch.startDate)} – ${formatDate(selectedBatch.endDate)}`
    : "December 20 – 24, 2026";

  const startPoint = trek?.startPoint ?? "Sankri Village";

  const coordinator = {
    name: "Ankit Rawat",
    phone: "+91-98765-43210",
    email: "ankit@globaltrek.in",
  };

  const whatsappMsg = encodeURIComponent(
    `🏔️ I just booked ${trekDisplayName} with Global Trek!\nBooking ID: ${bookingId}\nDates: ${batchDisplay}\nCheck out globaltrek.in — Where Every Trail Tells a Story`,
  );

  const calendarUrl = useMemo(() => {
    if (!selectedBatch) return "#";
    const start = selectedBatch.startDate.replace(/-/g, "");
    const end = selectedBatch.endDate.replace(/-/g, "");
    const title = encodeURIComponent(`${trekDisplayName} Trek — Global Trek`);
    const details = encodeURIComponent(
      `Booking ID: ${bookingId}. Starting point: ${startPoint}. Meet at 5:30 AM.`,
    );
    return `https://calendar.google.com/calendar/r/eventedit?text=${title}&dates=${start}/${end}&details=${details}`;
  }, [selectedBatch, trekDisplayName, bookingId, startPoint]);

  const paidAmount =
    paymentType === "advance" ? Math.round(totalAmount * 0.3) : totalAmount;

  return (
    <div className="min-h-screen" style={{ background: "#f8faf9" }}>
      {showConfetti && <ConfettiEffect />}

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Success Banner */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mb-8"
          data-ocid="confirmation.success_banner"
        >
          <div
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1A7A4C, #2ECC71)" }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1
            className="text-4xl font-bold mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A7A4C",
            }}
          >
            Booking Confirmed!
          </h1>
          <p className="text-gray-600">
            You're all set for an amazing Himalayan adventure.
          </p>
        </motion.div>

        {/* Booking ID */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border-2 border-green-200 mb-6 p-6 text-center"
          style={{ background: "white" }}
          data-ocid="confirmation.booking_id_card"
        >
          <p className="text-sm text-gray-500 mb-1">Your Booking ID</p>
          <div className="flex items-center justify-center gap-3">
            <span
              className="text-3xl font-bold tracking-wider"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1A7A4C",
              }}
            >
              {bookingId}
            </span>
            <button
              type="button"
              onClick={copyBookingId}
              data-ocid="confirmation.copy_id_button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: copied ? "#e8f5ee" : "#f3f4f6",
                color: copied ? "#1A7A4C" : "#374151",
              }}
            >
              <ClipboardCopy className="w-3.5 h-3.5" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Save this ID — you'll need it for WhatsApp, email, and check-in
          </p>
        </motion.div>

        {/* Trek Details Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl border border-green-100 mb-6 overflow-hidden"
          style={{ background: "white" }}
          data-ocid="confirmation.trek_details_card"
        >
          <div
            className="px-6 pt-5 pb-4 border-b border-gray-100"
            style={{ background: "#f8faf9" }}
          >
            <h2
              className="font-bold text-base flex items-center gap-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1A7A4C",
              }}
            >
              <Mountain className="w-5 h-5" /> Trek Details
            </h2>
          </div>
          <div className="p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Trek</span>
              <span className="font-semibold">{trekDisplayName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Dates
              </span>
              <span className="font-semibold">{batchDisplay}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Participants
              </span>
              <span className="font-semibold">{participants.length || 2}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Meeting Point
              </span>
              <span className="font-semibold">{startPoint}</span>
            </div>

            {participants.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Participants
                </p>
                <div className="space-y-1">
                  {participants.map((p, i) => (
                    <div
                      key={
                        p.firstName
                          ? `${p.firstName}-${p.lastName}-${i}`
                          : `participant-${i}`
                      }
                      className="flex justify-between text-sm py-1 border-b border-gray-50"
                    >
                      <span className="font-medium">
                        {p.firstName} {p.lastName}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {p.govtIdType}: {p.govtIdNumber}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Payment Receipt */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-green-100 mb-6 p-5"
          style={{ background: "white" }}
          data-ocid="confirmation.payment_receipt"
        >
          <h3 className="font-bold text-sm mb-3">Payment Receipt</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Amount Paid</span>
              <span className="font-bold" style={{ color: "#1A7A4C" }}>
                ₹{paidAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Payment Method</span>
              <span className="font-medium">Razorpay</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Payment Type</span>
              <span className="font-medium capitalize">
                {paymentType === "advance" ? "30% Advance" : "Full Payment"}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Date</span>
              <span className="font-medium">
                {new Date().toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl border border-green-100 mb-6 overflow-hidden"
          style={{ background: "white" }}
          data-ocid="confirmation.next_steps"
        >
          <div
            className="px-6 pt-5 pb-4 border-b border-gray-100"
            style={{ background: "#f8faf9" }}
          >
            <h2
              className="font-bold text-base"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Happens Next
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  icon: <Mail className="w-5 h-5" />,
                  title: "Confirmation email sent",
                  desc: participants[0]?.email
                    ? `Sent to ${participants[0].email}`
                    : "Check your inbox for full itinerary & packing list",
                },
                {
                  step: 2,
                  icon: <Phone className="w-5 h-5" />,
                  title: "Trek Coordinator calls within 2 hours",
                  desc: `${coordinator.name} will call to confirm details and answer questions`,
                },
                {
                  step: 3,
                  icon: <Calendar className="w-5 h-5" />,
                  title: "Reminders at 30, 7 & 1 day before",
                  desc: "Automated reminders with packing list, weather, and final details",
                },
                {
                  step: 4,
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Trek Day 1 — Meeting Point",
                  desc: `${startPoint} at 5:30 AM. Bring original ID + 2 passport photos.`,
                },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "#e8f5ee", color: "#1A7A4C" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {step}. {title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
          data-ocid="confirmation.action_buttons"
        >
          <Button
            type="button"
            onClick={() => window.print()}
            data-ocid="confirmation.download_button"
            className="h-12 font-semibold flex items-center justify-center gap-2"
            style={{ background: "#F4A623", color: "white" }}
          >
            <Download className="w-4 h-4" /> Download Itinerary PDF
          </Button>
          <a
            href={`https://wa.me/?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            data-ocid="confirmation.whatsapp_share"
            className="h-12 font-semibold flex items-center justify-center gap-2 rounded-md"
            style={{
              background: "#25D366",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Share2 className="w-4 h-4" /> Share on WhatsApp
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            data-ocid="confirmation.calendar_button"
            className="h-12 font-semibold flex items-center justify-center gap-2 rounded-md border"
            style={{
              borderColor: "#1A7A4C",
              color: "#1A7A4C",
              textDecoration: "none",
            }}
          >
            <Calendar className="w-4 h-4" /> Add to Google Calendar
          </a>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate({ to: "/account/my-bookings" })}
            data-ocid="confirmation.my_bookings_button"
            className="h-12 font-semibold"
            style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
          >
            View My Bookings
          </Button>
        </motion.div>

        {/* Coordinator Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="rounded-2xl border border-green-100 mb-8 p-5"
          style={{ background: "white" }}
          data-ocid="confirmation.coordinator_card"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Your Trek Coordinator
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: "linear-gradient(135deg, #1A7A4C, #2ECC71)",
              }}
            >
              {coordinator.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{coordinator.name}</p>
              <p className="text-sm text-gray-500">{coordinator.phone}</p>
              <p className="text-sm text-gray-500">{coordinator.email}</p>
            </div>
            <div className="ml-auto flex gap-2">
              <a
                href={`tel:${coordinator.phone}`}
                data-ocid="confirmation.coordinator_call"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#e8f5ee", color: "#1A7A4C" }}
                aria-label="Call coordinator"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${coordinator.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                data-ocid="confirmation.coordinator_whatsapp"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#dcfce7", color: "#16a34a" }}
                aria-label="WhatsApp coordinator"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Book Another Trek CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-3">
            Ready for another adventure?
          </p>
          <Button
            type="button"
            onClick={() => navigate({ to: "/explore" })}
            data-ocid="confirmation.book_another_button"
            className="h-12 px-8 font-semibold"
            style={{ background: "#1A7A4C", color: "white" }}
          >
            <Mountain className="mr-2 w-4 h-4" /> Explore More Treks
          </Button>
        </div>
      </div>
    </div>
  );
}
