import { u as useParams, n as useNavigate, j as jsxRuntimeExports, a as Mountain, M as MapPin, P as Phone, B as Button } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import { C as CircleCheckBig } from "./circle-check-big-BUgPA5Mu.js";
import { C as Calendar } from "./calendar-BB9CmmUM.js";
import { U as Users } from "./users-GoUlh9qe.js";
import { C as CreditCard } from "./credit-card-C8spIcpC.js";
import { M as Mail } from "./mail-Cb81ruRl.js";
import { D as Download } from "./download-CRO17rvF.js";
import { L as LayoutDashboard } from "./layout-dashboard-hIyPUidn.js";
import { S as Share2 } from "./share-2-CUNVt0Es.js";
function Confirmation() {
  const { id } = useParams({ from: "/booking/confirmation/$id" });
  const navigate = useNavigate();
  const bookingId = id ?? "GT-2026-KK-08547";
  const trekDetails = {
    name: "Kedarkantha Trek",
    batch: "December 20–24, 2026",
    participants: 2,
    totalPaid: 22785,
    location: "Sankri, Uttarkashi, Uttarakhand"
  };
  const coordinator = {
    name: "Ankit Rawat",
    phone: "+91-98765-43210"
  };
  const whatsappMsg = encodeURIComponent(
    `🏔️ Booked Kedarkantha Trek! Booking ID: ${bookingId}
Batch: Dec 20–24, 2026
Check out Global Trek: https://globaltrek.in`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--gt-green-50)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--gt-green-800)] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", children: "Global Trek" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-300)] text-sm ml-auto", children: "Booking Confirmed" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { type: "spring", stiffness: 200, damping: 15 },
          className: "flex flex-col items-center text-center mb-8",
          "data-ocid": "confirmation.success_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-[var(--gt-green-700)] flex items-center justify-center mb-4 shadow-[0_0_0_12px_var(--gt-green-100)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-white", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "text-3xl font-bold font-display text-[var(--gt-green-900)]",
                children: "Booking Confirmed! 🏔️"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5 },
                className: "text-[var(--gt-gray-600)] mt-2 text-base",
                children: "Your Himalayan adventure is booked. Get ready for the trek of a lifetime!"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "bg-[var(--gt-green-800)] text-white rounded-2xl p-5 mb-5 flex items-center justify-between",
          "data-ocid": "confirmation.booking_id_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--gt-green-300)] text-xs font-mono uppercase tracking-wide", children: "Booking ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-mono mt-0.5", children: bookingId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[var(--gt-green-500)]/20 text-[var(--gt-green-300)] border-[var(--gt-green-500)]/30 font-mono", children: "Confirmed ✓" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 mb-5",
          "data-ocid": "confirmation.trek_details",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-[var(--gt-green-900)] mb-4", children: "Trek Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-4 h-4" }),
                label: "Trek",
                value: trekDetails.name
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                label: "Batch Dates",
                value: trekDetails.batch
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                label: "Trekkers",
                value: `${trekDetails.participants} persons`
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                label: "Base Camp",
                value: trekDetails.location
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4" }),
                label: "Amount Paid",
                value: `₹${trekDetails.totalPaid.toLocaleString("en-IN")}`
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
                label: "Status",
                value: "Confirmed & Active"
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)] mt-0.5 shrink-0", children: row.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-[var(--gt-gray-400)] uppercase", children: row.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[var(--gt-gray-900)] mt-0.5", children: row.value })
              ] })
            ] }, row.label)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 },
          className: "bg-[var(--gt-green-50)] border border-[var(--gt-green-100)] rounded-xl p-4 mb-5 space-y-2",
          "data-ocid": "confirmation.notifications",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-[var(--gt-green-700)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-700)]", children: [
                "Confirmation email sent to ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "rahul@example.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-0 font-mono text-xs ml-auto", children: "Sent ✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 text-base", children: "💬" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-700)]", children: [
                "WhatsApp confirmation sent to ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+91-XXXXXXXX" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-0 font-mono text-xs ml-auto", children: "Sent ✓" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.7 },
          className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 mb-8",
          "data-ocid": "confirmation.coordinator",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-[var(--gt-green-900)] mb-3", children: "Your Trek Coordinator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-[var(--gt-green-700)] flex items-center justify-center text-white text-xl font-bold font-display shrink-0", children: coordinator.name[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[var(--gt-green-900)] text-lg", children: coordinator.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--gt-gray-600)]", children: "Senior Trek Coordinator · Global Trek" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-amber)] font-semibold mt-1", children: "⏰ Will call you within 2 hours to confirm details" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${coordinator.phone.replace(/[^+\d]/g, "")}`,
                  className: "flex items-center justify-center gap-2 bg-[var(--gt-green-50)] border border-[var(--gt-green-200)] text-[var(--gt-green-700)] rounded-xl py-2.5 text-sm font-semibold hover:bg-[var(--gt-green-100)] transition-colors",
                  "data-ocid": "confirmation.call_coordinator",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                    " Call Coordinator"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://wa.me/${coordinator.phone.replace(/[^\d]/g, "")}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-green-600 transition-colors",
                  "data-ocid": "confirmation.whatsapp_coordinator",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "💬" }),
                    " WhatsApp"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.8 },
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
          "data-ocid": "confirmation.actions",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "border-[var(--gt-green-700)] text-[var(--gt-green-700)] hover:bg-[var(--gt-green-50)] font-mono gap-2 py-4 h-auto",
                "data-ocid": "confirmation.download_pdf_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  " Download Booking PDF"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => void navigate({ to: "/account/dashboard" }),
                className: "bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-mono gap-2 py-4 h-auto",
                "data-ocid": "confirmation.dashboard_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "w-4 h-4" }),
                  " View My Dashboard"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/?text=${whatsappMsg}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-mono text-sm py-4 transition-colors",
                "data-ocid": "confirmation.share_whatsapp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                  " Share on WhatsApp"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-[var(--gt-gray-400)] mt-8", children: [
        "Booking ID: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: bookingId }),
        " · ©",
        " ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Global Trek — globaltrek.in"
      ] })
    ] })
  ] });
}
export {
  Confirmation as default
};
