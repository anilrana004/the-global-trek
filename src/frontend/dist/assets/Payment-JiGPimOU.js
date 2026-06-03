import { c as createLucideIcon, t as useParams, G as useNavigate, H as useBookingStore, J as useCreateBooking, r as reactExports, j as jsxRuntimeExports, a as Mountain, B as Button } from "./index-vYOW-QfD.js";
import { B as BookingProgress } from "./BookingProgress-BCpJb6oh.js";
import { I as Input } from "./input-CgB5bWX1.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { U as Users } from "./users-DiG3WeOD.js";
import { C as CreditCard } from "./credit-card-fQ38nGLW.js";
import { C as ChevronUp } from "./chevron-up-c5oEDrdS.js";
import { C as ChevronDown } from "./chevron-down-DnTYkto-.js";
import { L as Lock } from "./lock-DfUtLvP4.js";
import { S as ShieldCheck } from "./shield-check-CV3UBcvm.js";
import { C as CircleCheckBig } from "./circle-check-big-0ZnzuCxO.js";
import { L as LoaderCircle } from "./loader-circle-C1SQwfmc.js";
import "./arrow-left-BujbnMEe.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const PROMO_CODES = {
  TREK10: { type: "percent", value: 10, label: "10% off" },
  FIRSTTIME: { type: "flat", value: 500, label: "₹500 off" },
  SUMMER2026: { type: "percent", value: 15, label: "15% off" }
};
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function Payment() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/payment" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const { selectedBatch, trekName, participants, addOns, totalAmount } = bookingState;
  const createBooking = useCreateBooking();
  const trek = reactExports.useMemo(
    () => treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug]
  );
  const [promoInput, setPromoInput] = reactExports.useState("");
  const [promoApplied, setPromoApplied] = reactExports.useState(null);
  const [promoError, setPromoError] = reactExports.useState("");
  const [promoSuccess, setPromoSuccess] = reactExports.useState("");
  const [paymentType, setPaymentType] = reactExports.useState("full");
  const [cancellationOpen, setCancellationOpen] = reactExports.useState(false);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const trekDisplayName = trekName || (trek == null ? void 0 : trek.name) || trekSlug;
  const promoDiscount = reactExports.useMemo(() => {
    if (!promoApplied) return 0;
    const code = PROMO_CODES[promoApplied];
    if (!code) return 0;
    return code.type === "percent" ? Math.round(totalAmount * code.value / 100) : code.value;
  }, [promoApplied, totalAmount]);
  const afterPromo = totalAmount - promoDiscount;
  const payableNow = paymentType === "advance" ? Math.round(afterPromo * 0.3) : afterPromo;
  const balanceDue = paymentType === "advance" ? afterPromo - payableNow : 0;
  const addOnNames = [];
  if (addOns.porter) addOnNames.push(`Porter (×${addOns.porterDays} days)`);
  if (addOns.mule) addOnNames.push(`Mule (×${addOns.muleDays} days)`);
  if (addOns.travelInsurance) addOnNames.push("Travel Insurance");
  if (addOns.gearSleepingBag) addOnNames.push("Sleeping Bag Rental");
  if (addOns.gearBoots) addOnNames.push("Boots Rental");
  if (addOns.gearTent) addOnNames.push("Tent Upgrade");
  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      setPromoError("Please enter a promo code");
      return;
    }
    if (PROMO_CODES[code]) {
      setPromoApplied(code);
      setPromoError("");
      setPromoSuccess(
        `✅ Code "${code}" applied — ${PROMO_CODES[code].label}!`
      );
    } else {
      setPromoApplied(null);
      setPromoSuccess("");
      setPromoError(
        "❌ Invalid promo code. Try TREK10, FIRSTTIME, or SUMMER2026."
      );
    }
  }
  async function handlePay() {
    setIsProcessing(true);
    try {
      await new Promise((res) => setTimeout(res, 2e3));
      const bookingId = `GT-2026-${trekSlug.slice(0, 2).toUpperCase()}-${String(Math.floor(1e4 + Math.random() * 9e4))}`;
      const bookingPayload = {
        trekSlug,
        batchDate: (selectedBatch == null ? void 0 : selectedBatch.startDate) ?? (selectedBatch == null ? void 0 : selectedBatch.id) ?? "",
        promoCode: promoApplied ?? "",
        paymentType,
        advanceAmount: paymentType === "advance" ? BigInt(Math.round(afterPromo * 0.3)) : 0n,
        totalAmount: BigInt(afterPromo),
        participants: participants.map((p) => ({
          firstName: p.firstName,
          lastName: p.lastName,
          age: BigInt(p.age ? Number(p.age) : 0),
          gender: p.gender,
          mobile: p.mobile,
          email: p.email,
          emergencyContactName: p.emergencyContactName,
          emergencyContactPhone: p.emergencyContactPhone,
          medicalConditions: p.medicalConditions ?? "",
          govtIdType: p.govtIdType,
          govtIdNumber: p.govtIdNumber
        })),
        addOns: {
          porter: addOns.porter ?? false,
          porterDays: BigInt(addOns.porterDays ?? 0),
          mule: addOns.mule ?? false,
          muleDays: BigInt(addOns.muleDays ?? 0),
          travelInsurance: addOns.travelInsurance ?? false,
          gearSleepingBag: addOns.gearSleepingBag ?? false,
          gearBoots: addOns.gearBoots ?? false,
          gearTent: addOns.gearTent ?? false
        }
      };
      await createBooking.mutateAsync(bookingPayload);
      updateBookingState({
        bookingId,
        paymentType,
        discountAmount: promoDiscount,
        totalAmount: afterPromo
      });
      navigate({ to: "/booking/confirmation/$id", params: { id: bookingId } });
    } catch {
      setIsProcessing(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#f8faf9" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingProgress,
      {
        currentStep: 4,
        trekName: trekDisplayName,
        trekSlug
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "payment.order_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pt-5 pb-4 border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-lg font-bold",
                style: { fontFamily: "'Playfair Display', serif" },
                children: "Order Summary"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Mountain,
                  {
                    className: "w-5 h-5 mt-0.5 flex-shrink-0",
                    style: { color: "#1A7A4C" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: trekDisplayName }),
                  selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-gray-500", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                      formatDate(selectedBatch.startDate),
                      " –",
                      " ",
                      formatDate(selectedBatch.endDate)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-gray-500", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                      participants.length,
                      " trekkers"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 pt-3 space-y-2 text-sm", children: [
                selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    participants.length,
                    " × ₹",
                    selectedBatch.pricePerPerson.toLocaleString("en-IN"),
                    "/person"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "₹",
                    (selectedBatch.pricePerPerson * participants.length).toLocaleString("en-IN")
                  ] })
                ] }),
                addOnNames.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Add-ons (",
                    addOnNames.join(", "),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "(included)" })
                ] }),
                promoDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between font-medium",
                    style: { color: "#1A7A4C" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Promo (",
                        promoApplied,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "−₹",
                        promoDiscount.toLocaleString("en-IN")
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base pt-2 border-t border-green-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A7A4C" }, children: [
                    "₹",
                    afterPromo.toLocaleString("en-IN")
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 p-5",
          style: { background: "white" },
          "data-ocid": "payment.promo_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4", style: { color: "#1A7A4C" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Promo Code" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: promoInput,
                  onChange: (e) => setPromoInput(e.target.value.toUpperCase()),
                  placeholder: "Enter promo code (e.g. TREK10)",
                  "data-ocid": "payment.promo_input",
                  className: "flex-1",
                  onKeyDown: (e) => {
                    if (e.key === "Enter") applyPromo();
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: applyPromo,
                  "data-ocid": "payment.promo_apply_button",
                  style: { background: "#1A7A4C", color: "white" },
                  children: "Apply"
                }
              )
            ] }),
            promoError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-red-500 mt-2",
                "data-ocid": "payment.promo_error",
                children: promoError
              }
            ),
            promoSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-medium mt-2",
                style: { color: "#1A7A4C" },
                "data-ocid": "payment.promo_success",
                children: promoSuccess
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 p-5",
          style: { background: "white" },
          "data-ocid": "payment.payment_options",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4", style: { color: "#1A7A4C" } }),
              " ",
              "Payment Options"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  className: "flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all",
                  style: {
                    border: paymentType === "full" ? "2px solid #1A7A4C" : "1px solid #e5e7eb",
                    background: paymentType === "full" ? "#f0faf4" : "white"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "radio",
                        name: "payType",
                        value: "full",
                        checked: paymentType === "full",
                        onChange: () => setPaymentType("full"),
                        "data-ocid": "payment.option_full",
                        className: "mt-1 accent-green-700"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Full Payment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: "Pay complete amount now" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold mt-1", style: { color: "#1A7A4C" }, children: [
                        "₹",
                        afterPromo.toLocaleString("en-IN")
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  className: "flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all",
                  style: {
                    border: paymentType === "advance" ? "2px solid #F4A623" : "1px solid #e5e7eb",
                    background: paymentType === "advance" ? "#fff8e6" : "white"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "radio",
                        name: "payType",
                        value: "advance",
                        checked: paymentType === "advance",
                        onChange: () => setPaymentType("advance"),
                        "data-ocid": "payment.option_advance",
                        className: "mt-1 accent-amber-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "30% Advance" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-0.5", children: [
                        "Balance ₹",
                        balanceDue.toLocaleString("en-IN"),
                        " due on trek day"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold mt-1 text-amber-600", children: [
                        "₹",
                        payableNow.toLocaleString("en-IN"),
                        " now"
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-gray-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "payment.cancellation_policy",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setCancellationOpen((p) => !p),
                "data-ocid": "payment.cancellation_toggle",
                className: "w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cancellation & Refund Policy" }),
                  cancellationOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                ]
              }
            ),
            cancellationOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-4 text-xs text-gray-600 space-y-1 border-t border-gray-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-700 mb-2 mt-3", children: "Refund Schedule:" }),
              [
                ["30+ days before trek", "80% refund"],
                ["15–29 days before", "50% refund"],
                ["7–14 days before", "25% refund"],
                ["Less than 7 days", "No refund"],
                ["Weather cancellation", "Full credit note (1 year)"],
                ["Natural disaster", "Full refund"]
              ].map(([when, what]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between py-1 border-b border-gray-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: when }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: what })
                  ]
                },
                when
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-6", children: [
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }), text: "SSL Secured" },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }),
          text: "PCI DSS Compliant"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
          text: "Razorpay Certified"
        }
      ].map(({ icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 text-xs text-gray-500",
          children: [
            icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
          ]
        },
        text
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handlePay,
          disabled: isProcessing,
          "data-ocid": "payment.pay_button",
          className: "w-full h-16 text-lg font-bold rounded-xl",
          style: {
            background: isProcessing ? "#e5e7eb" : "#F4A623",
            color: isProcessing ? "#9ca3af" : "white"
          },
          children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
            " Processing Payment..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5" }),
            " Pay ₹",
            payableNow.toLocaleString("en-IN"),
            " via Razorpay"
          ] })
        }
      ),
      paymentType === "advance" && !isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-gray-500 mt-2", children: [
        "Remaining balance ₹",
        balanceDue.toLocaleString("en-IN"),
        " to be paid on trek Day 1"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: () => navigate({
            to: "/booking/$trekSlug/addons",
            params: { trekSlug }
          }),
          "data-ocid": "payment.back_button",
          className: "flex-1 h-12 font-semibold",
          style: { borderColor: "#1A7A4C", color: "#1A7A4C" },
          children: "← Back to Add-ons"
        }
      ) })
    ] })
  ] });
}
export {
  Payment as default
};
