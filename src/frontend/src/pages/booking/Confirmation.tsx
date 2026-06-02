import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle,
  CreditCard,
  Download,
  LayoutDashboard,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

export default function Confirmation() {
  const { id } = useParams({ from: "/booking/confirmation/$id" });
  const navigate = useNavigate();
  const bookingId = id ?? "GT-2026-KK-08547";

  const trekDetails = {
    name: "Kedarkantha Trek",
    batch: "December 20–24, 2026",
    participants: 2,
    totalPaid: 22785,
    trekSlug: "kedarkantha",
    location: "Sankri, Uttarkashi, Uttarakhand",
  };

  const coordinator = {
    name: "Ankit Rawat",
    phone: "+91-98765-43210",
    email: "ankit@globaltrek.in",
  };

  const whatsappMsg = encodeURIComponent(
    `🏔️ Booked Kedarkantha Trek! Booking ID: ${bookingId}\nBatch: Dec 20–24, 2026\nCheck out Global Trek: https://globaltrek.in`,
  );

  return (
    <div className="min-h-screen bg-[var(--gt-green-50)]">
      {/* Header bar */}
      <div className="bg-[var(--gt-green-800)] text-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Mountain className="w-5 h-5" />
          <span className="font-display font-bold">Global Trek</span>
          <span className="text-[var(--gt-green-300)] text-sm ml-auto">
            Booking Confirmed
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Big checkmark animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col items-center text-center mb-8"
          data-ocid="confirmation.success_section"
        >
          <div className="w-20 h-20 rounded-full bg-[var(--gt-green-700)] flex items-center justify-center mb-4 shadow-[0_0_0_12px_var(--gt-green-100)]">
            <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold font-display text-[var(--gt-green-900)]"
          >
            Booking Confirmed! 🏔️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[var(--gt-gray-600)] mt-2 text-base"
          >
            Your Himalayan adventure is booked. Get ready for the trek of a
            lifetime!
          </motion.p>
        </motion.div>

        {/* Booking ID card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[var(--gt-green-800)] text-white rounded-2xl p-5 mb-5 flex items-center justify-between"
          data-ocid="confirmation.booking_id_card"
        >
          <div>
            <p className="text-[var(--gt-green-300)] text-xs font-mono uppercase tracking-wide">
              Booking ID
            </p>
            <p className="text-2xl font-bold font-mono mt-0.5">{bookingId}</p>
          </div>
          <Badge className="bg-[var(--gt-green-500)]/20 text-[var(--gt-green-300)] border-[var(--gt-green-500)]/30 font-mono">
            Confirmed ✓
          </Badge>
        </motion.div>

        {/* Trek details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 mb-5"
          data-ocid="confirmation.trek_details"
        >
          <h3 className="font-bold font-display text-[var(--gt-green-900)] mb-4">
            Trek Details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              {
                icon: <Mountain className="w-4 h-4" />,
                label: "Trek",
                value: trekDetails.name,
              },
              {
                icon: <Calendar className="w-4 h-4" />,
                label: "Batch Dates",
                value: trekDetails.batch,
              },
              {
                icon: <Users className="w-4 h-4" />,
                label: "Trekkers",
                value: `${trekDetails.participants} persons`,
              },
              {
                icon: <MapPin className="w-4 h-4" />,
                label: "Base Camp",
                value: trekDetails.location,
              },
              {
                icon: <CreditCard className="w-4 h-4" />,
                label: "Amount Paid",
                value: `₹${trekDetails.totalPaid.toLocaleString("en-IN")}`,
              },
              {
                icon: <CheckCircle className="w-4 h-4" />,
                label: "Status",
                value: "Confirmed & Active",
              },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-2">
                <span className="text-[var(--gt-green-700)] mt-0.5 shrink-0">
                  {row.icon}
                </span>
                <div>
                  <p className="text-xs font-mono text-[var(--gt-gray-400)] uppercase">
                    {row.label}
                  </p>
                  <p className="font-semibold text-[var(--gt-gray-900)] mt-0.5">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications sent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[var(--gt-green-50)] border border-[var(--gt-green-100)] rounded-xl p-4 mb-5 space-y-2"
          data-ocid="confirmation.notifications"
        >
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-[var(--gt-green-700)]" />
            <span className="text-[var(--gt-gray-700)]">
              Confirmation email sent to <strong>rahul@example.com</strong>
            </span>
            <Badge className="bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-0 font-mono text-xs ml-auto">
              Sent ✓
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 text-base">💬</span>
            <span className="text-[var(--gt-gray-700)]">
              WhatsApp confirmation sent to <strong>+91-XXXXXXXX</strong>
            </span>
            <Badge className="bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-0 font-mono text-xs ml-auto">
              Sent ✓
            </Badge>
          </div>
        </motion.div>

        {/* Trek coordinator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 mb-8"
          data-ocid="confirmation.coordinator"
        >
          <h3 className="font-bold font-display text-[var(--gt-green-900)] mb-3">
            Your Trek Coordinator
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--gt-green-700)] flex items-center justify-center text-white text-xl font-bold font-display shrink-0">
              {coordinator.name[0]}
            </div>
            <div className="flex-1">
              <p className="font-bold text-[var(--gt-green-900)] text-lg">
                {coordinator.name}
              </p>
              <p className="text-sm text-[var(--gt-gray-600)]">
                Senior Trek Coordinator · Global Trek
              </p>
              <p className="text-xs text-[var(--gt-amber)] font-semibold mt-1">
                ⏰ Will call you within 2 hours to confirm details
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href={`tel:${coordinator.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center justify-center gap-2 bg-[var(--gt-green-50)] border border-[var(--gt-green-200)] text-[var(--gt-green-700)] rounded-xl py-2.5 text-sm font-semibold hover:bg-[var(--gt-green-100)] transition-colors"
              data-ocid="confirmation.call_coordinator"
            >
              <Phone className="w-4 h-4" /> Call Coordinator
            </a>
            <a
              href={`https://wa.me/${coordinator.phone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-green-600 transition-colors"
              data-ocid="confirmation.whatsapp_coordinator"
            >
              <span className="text-base">💬</span> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* 3 CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          data-ocid="confirmation.actions"
        >
          <Button
            variant="outline"
            className="border-[var(--gt-green-700)] text-[var(--gt-green-700)] hover:bg-[var(--gt-green-50)] font-mono gap-2 py-4 h-auto"
            data-ocid="confirmation.download_pdf_button"
          >
            <Download className="w-4 h-4" /> Download Booking PDF
          </Button>
          <Button
            onClick={() => void navigate({ to: "/account/dashboard" })}
            className="bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-mono gap-2 py-4 h-auto"
            data-ocid="confirmation.dashboard_button"
          >
            <LayoutDashboard className="w-4 h-4" /> View My Dashboard
          </Button>
          <a
            href={`https://wa.me/?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-mono text-sm py-4 transition-colors"
            data-ocid="confirmation.share_whatsapp_button"
          >
            <Share2 className="w-4 h-4" /> Share on WhatsApp
          </a>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-xs text-[var(--gt-gray-400)] mt-8">
          Booking ID: <strong>{bookingId}</strong> · ©{" "}
          {new Date().getFullYear()} Global Trek — globaltrek.in
        </p>
      </div>
    </div>
  );
}
