import { c as createLucideIcon, h as useParams, s as useNavigate, t as useBookingStore, r as reactExports, j as jsxRuntimeExports, a as Mountain, M as MapPin, P as Phone, B as Button } from "./index-BO08U1_a.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { C as CircleCheckBig } from "./circle-check-big-B38AnnjL.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { U as Users } from "./users-Cfve2YQ6.js";
import { M as Mail } from "./mail-CSh684Gg.js";
import { D as Download } from "./download-D104LaEh.js";
import { S as Share2 } from "./share-2-0m92E4Xh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
];
const ClipboardCopy = createLucideIcon("clipboard-copy", __iconNode);
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
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
  "#FF6B6B"
];
function ConfettiEffect() {
  const pieces = reactExports.useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: `${6 + Math.random() * 8}px`
    }));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: CONFETTI_STYLE }),
    pieces.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "confetti-piece",
        style: {
          left: p.left,
          width: p.size,
          height: p.size,
          background: p.color,
          animationDelay: p.delay,
          animationDuration: p.duration
        }
      },
      p.id
    ))
  ] });
}
function Confirmation() {
  var _a;
  const { id } = useParams({ from: "/booking/confirmation/$id" });
  const navigate = useNavigate();
  const { bookingState } = useBookingStore();
  const {
    trekSlug,
    trekName,
    selectedBatch,
    participants,
    paymentType,
    totalAmount
  } = bookingState;
  const bookingId = id ?? bookingState.bookingId ?? "GT-2026-KK-08547";
  const [copied, setCopied] = reactExports.useState(false);
  const [showConfetti, setShowConfetti] = reactExports.useState(true);
  const trek = reactExports.useMemo(
    () => treksData.find(
      (t) => {
        var _a2;
        return t.id === (trekSlug || ((_a2 = id == null ? void 0 : id.slice(3, 5)) == null ? void 0 : _a2.toLowerCase())) || t.slug === trekSlug;
      }
    ) ?? null,
    [trekSlug, id]
  );
  const trekDisplayName = trekName || (trek == null ? void 0 : trek.name) || "Your Trek";
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 5e3);
    return () => clearTimeout(t);
  }, []);
  function copyBookingId() {
    navigator.clipboard.writeText(bookingId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }
  const batchDisplay = selectedBatch ? `${formatDate(selectedBatch.startDate)} – ${formatDate(selectedBatch.endDate)}` : "December 20 – 24, 2026";
  const startPoint = (trek == null ? void 0 : trek.startPoint) ?? "Sankri Village";
  const coordinator = {
    name: "Ankit Rawat",
    phone: "+91-98765-43210",
    email: "ankit@globaltrek.in"
  };
  const whatsappMsg = encodeURIComponent(
    `🏔️ I just booked ${trekDisplayName} with Global Trek!
Booking ID: ${bookingId}
Dates: ${batchDisplay}
Check out globaltrek.in — Where Every Trail Tells a Story`
  );
  const calendarUrl = reactExports.useMemo(() => {
    if (!selectedBatch) return "#";
    const start = selectedBatch.startDate.replace(/-/g, "");
    const end = selectedBatch.endDate.replace(/-/g, "");
    const title = encodeURIComponent(`${trekDisplayName} Trek — Global Trek`);
    const details = encodeURIComponent(
      `Booking ID: ${bookingId}. Starting point: ${startPoint}. Meet at 5:30 AM.`
    );
    return `https://calendar.google.com/calendar/r/eventedit?text=${title}&dates=${start}/${end}&details=${details}`;
  }, [selectedBatch, trekDisplayName, bookingId, startPoint]);
  const paidAmount = paymentType === "advance" ? Math.round(totalAmount * 0.3) : totalAmount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#f8faf9" }, children: [
    showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiEffect, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.7, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { type: "spring", stiffness: 200, damping: 15 },
          className: "text-center mb-8",
          "data-ocid": "confirmation.success_banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
                style: { background: "linear-gradient(135deg, #1A7A4C, #2ECC71)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-4xl font-bold mb-2",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  color: "#1A7A4C"
                },
                children: "Booking Confirmed!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "You're all set for an amazing Himalayan adventure." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.15 },
          className: "rounded-2xl border-2 border-green-200 mb-6 p-6 text-center",
          style: { background: "white" },
          "data-ocid": "confirmation.booking_id_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Your Booking ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-3xl font-bold tracking-wider",
                  style: {
                    fontFamily: "'Playfair Display', serif",
                    color: "#1A7A4C"
                  },
                  children: bookingId
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: copyBookingId,
                  "data-ocid": "confirmation.copy_id_button",
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  style: {
                    background: copied ? "#e8f5ee" : "#f3f4f6",
                    color: copied ? "#1A7A4C" : "#374151"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopy, { className: "w-3.5 h-3.5" }),
                    copied ? "Copied!" : "Copy"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Save this ID — you'll need it for WhatsApp, email, and check-in" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.25 },
          className: "rounded-2xl border border-green-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "confirmation.trek_details_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-6 pt-5 pb-4 border-b border-gray-100",
                style: { background: "#f8faf9" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-bold text-base flex items-center gap-2",
                    style: {
                      fontFamily: "'Playfair Display', serif",
                      color: "#1A7A4C"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5" }),
                      " Trek Details"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Trek" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: trekDisplayName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                  " Dates"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: batchDisplay })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                  " Participants"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: participants.length || 2 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                  " Meeting Point"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: startPoint })
              ] }),
              participants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2", children: "Participants" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: participants.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between text-sm py-1 border-b border-gray-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                        p.firstName,
                        " ",
                        p.lastName
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-xs", children: [
                        p.govtIdType,
                        ": ",
                        p.govtIdNumber
                      ] })
                    ]
                  },
                  p.firstName ? `${p.firstName}-${p.lastName}-${i}` : `participant-${i}`
                )) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.3 },
          className: "rounded-2xl border border-green-100 mb-6 p-5",
          style: { background: "white" },
          "data-ocid": "confirmation.payment_receipt",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm mb-3", children: "Payment Receipt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Paid" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#1A7A4C" }, children: [
                  "₹",
                  paidAmount.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Razorpay" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", children: paymentType === "advance" ? "30% Advance" : "Full Payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.35 },
          className: "rounded-2xl border border-green-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "confirmation.next_steps",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-6 pt-5 pb-4 border-b border-gray-100",
                style: { background: "#f8faf9" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-bold text-base",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: "What Happens Next"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
              {
                step: 1,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" }),
                title: "Confirmation email sent",
                desc: ((_a = participants[0]) == null ? void 0 : _a.email) ? `Sent to ${participants[0].email}` : "Check your inbox for full itinerary & packing list"
              },
              {
                step: 2,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                title: "Trek Coordinator calls within 2 hours",
                desc: `${coordinator.name} will call to confirm details and answer questions`
              },
              {
                step: 3,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5" }),
                title: "Reminders at 30, 7 & 1 day before",
                desc: "Automated reminders with packing list, weather, and final details"
              },
              {
                step: 4,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }),
                title: "Trek Day 1 — Meeting Point",
                desc: `${startPoint} at 5:30 AM. Bring original ID + 2 passport photos.`
              }
            ].map(({ step, icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  style: { background: "#e8f5ee", color: "#1A7A4C" },
                  children: icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm", children: [
                  step,
                  ". ",
                  title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: desc })
              ] })
            ] }, step)) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.4 },
          className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
          "data-ocid": "confirmation.action_buttons",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                onClick: () => window.print(),
                "data-ocid": "confirmation.download_button",
                className: "h-12 font-semibold flex items-center justify-center gap-2",
                style: { background: "#F4A623", color: "white" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  " Download Itinerary PDF"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/?text=${whatsappMsg}`,
                target: "_blank",
                rel: "noreferrer",
                "data-ocid": "confirmation.whatsapp_share",
                className: "h-12 font-semibold flex items-center justify-center gap-2 rounded-md",
                style: {
                  background: "#25D366",
                  color: "white",
                  textDecoration: "none"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                  " Share on WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: calendarUrl,
                target: "_blank",
                rel: "noreferrer",
                "data-ocid": "confirmation.calendar_button",
                className: "h-12 font-semibold flex items-center justify-center gap-2 rounded-md border",
                style: {
                  borderColor: "#1A7A4C",
                  color: "#1A7A4C",
                  textDecoration: "none"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                  " Add to Google Calendar"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => navigate({ to: "/account/my-bookings" }),
                "data-ocid": "confirmation.my_bookings_button",
                className: "h-12 font-semibold",
                style: { borderColor: "#1A7A4C", color: "#1A7A4C" },
                children: "View My Bookings"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.45 },
          className: "rounded-2xl border border-green-100 mb-8 p-5",
          style: { background: "white" },
          "data-ocid": "confirmation.coordinator_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3", children: "Your Trek Coordinator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                  style: {
                    background: "linear-gradient(135deg, #1A7A4C, #2ECC71)"
                  },
                  children: coordinator.name.charAt(0)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: coordinator.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: coordinator.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: coordinator.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `tel:${coordinator.phone}`,
                    "data-ocid": "confirmation.coordinator_call",
                    className: "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    style: { background: "#e8f5ee", color: "#1A7A4C" },
                    "aria-label": "Call coordinator",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `https://wa.me/${coordinator.phone.replace(/\D/g, "")}`,
                    target: "_blank",
                    rel: "noreferrer",
                    "data-ocid": "confirmation.coordinator_whatsapp",
                    className: "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    style: { background: "#dcfce7", color: "#16a34a" },
                    "aria-label": "WhatsApp coordinator",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-3", children: "Ready for another adventure?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            onClick: () => navigate({ to: "/explore" }),
            "data-ocid": "confirmation.book_another_button",
            className: "h-12 px-8 font-semibold",
            style: { background: "#1A7A4C", color: "white" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "mr-2 w-4 h-4" }),
              " Explore More Treks"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Confirmation as default
};
