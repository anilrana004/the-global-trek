import { c as createLucideIcon, h as useParams, s as useNavigate, t as useBookingStore, r as reactExports, j as jsxRuntimeExports, a as Mountain, B as Button } from "./index-BO08U1_a.js";
import { B as BookingProgress } from "./BookingProgress-j3z9MatT.js";
import { B as Badge } from "./badge-BAMot-g0.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { U as Users } from "./users-Cfve2YQ6.js";
import { C as ChevronRight } from "./chevron-right-CL9bLnmI.js";
import { S as ShieldCheck } from "./shield-check-wsdofBUt.js";
import "./arrow-left-CnEIeJy8.js";
import "./check-DQa8XOVj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", key: "1ol0lm" }
  ],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }],
  ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" }],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }]
];
const Backpack = createLucideIcon("backpack", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
];
const Tent = createLucideIcon("tent", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
];
const Wind = createLucideIcon("wind", __iconNode);
const ADDONS = [
  {
    id: "porter",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Backpack, { className: "w-5 h-5" }),
    title: "Porter Service",
    description: "Carry your backpack (up to 10 kg) to camps",
    priceLabel: "₹800/day per porter",
    unitPrice: 800,
    hasDays: true
  },
  {
    id: "mule",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5" }),
    title: "Mule/Pony Service",
    description: "Duffel bag carried by mule to camps",
    priceLabel: "₹600/day per mule",
    unitPrice: 600,
    hasDays: true
  },
  {
    id: "travelInsurance",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5" }),
    title: "Travel Insurance",
    description: "Covers trip cancellation, medical evacuation & more",
    priceLabel: "₹500/person",
    unitPrice: 500,
    perPerson: true
  },
  {
    id: "gearSleepingBag",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "w-5 h-5" }),
    title: "Sleeping Bag Rental",
    description: "-10°C rated sleeping bag (Dhaulagiri DW300)",
    priceLabel: "₹150/day",
    unitPrice: 150,
    hasDays: true
  },
  {
    id: "gearBoots",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5" }),
    title: "Hiking Boots Rental",
    description: "Waterproof high-ankle trekking boots",
    priceLabel: "₹200/day",
    unitPrice: 200,
    hasDays: true
  },
  {
    id: "gearTent",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "w-5 h-5" }),
    title: "Premium Tent Upgrade",
    description: "Upgrade to 4-season private tent (1 person)",
    priceLabel: "₹200/day",
    unitPrice: 200,
    hasDays: true
  }
];
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function Addons() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/addons" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const { selectedBatch, trekName, participants, addOns } = bookingState;
  const trek = reactExports.useMemo(
    () => treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug]
  );
  const trekDays = selectedBatch ? Math.round(
    (new Date(selectedBatch.endDate).getTime() - new Date(selectedBatch.startDate).getTime()) / 864e5
  ) + 1 : 5;
  const [enabled, setEnabled] = reactExports.useState({
    porter: addOns.porter,
    mule: addOns.mule,
    travelInsurance: addOns.travelInsurance,
    gearSleepingBag: addOns.gearSleepingBag,
    gearBoots: addOns.gearBoots,
    gearTent: addOns.gearTent
  });
  const [days, setDays] = reactExports.useState({
    porter: addOns.porterDays || trekDays,
    mule: addOns.muleDays || trekDays,
    gearSleepingBag: trekDays,
    gearBoots: trekDays,
    gearTent: trekDays
  });
  function toggleAddon(id) {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  function setDay(id, val) {
    setDays((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(trekDays, val))
    }));
  }
  function calcAddonCost(addon) {
    if (!enabled[addon.id]) return 0;
    if (addon.perPerson) return addon.unitPrice * participants.length;
    const d = days[addon.id] ?? trekDays;
    return addon.unitPrice * d;
  }
  const addonTotal = ADDONS.reduce((sum, a) => sum + calcAddonCost(a), 0);
  const baseTotal = bookingState.totalAmount;
  const gst = Math.round(addonTotal * 0.05);
  const grandTotal = baseTotal + addonTotal + gst;
  const trekDisplayName = trekName || (trek == null ? void 0 : trek.name) || trekSlug;
  function handleContinue() {
    updateBookingState({
      addOns: {
        porter: enabled.porter,
        mule: enabled.mule,
        travelInsurance: enabled.travelInsurance,
        gearSleepingBag: enabled.gearSleepingBag,
        gearBoots: enabled.gearBoots,
        gearTent: enabled.gearTent,
        porterDays: days.porter ?? trekDays,
        muleDays: days.mule ?? trekDays
      },
      totalAmount: grandTotal
    });
    navigate({ to: "/booking/$trekSlug/payment", params: { trekSlug } });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#f8faf9" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingProgress,
      {
        currentStep: 3,
        trekName: trekDisplayName,
        trekSlug
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
      selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-green-100 p-4 mb-6 flex flex-wrap gap-4 items-center",
          style: { background: "white" },
          "data-ocid": "addons.booking_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5", style: { color: "#1A7A4C" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: trekDisplayName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              formatDate(selectedBatch.startDate),
              " –",
              " ",
              formatDate(selectedBatch.endDate)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
              participants.length,
              " participant",
              participants.length !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                style: {
                  background: "#e8f5ee",
                  color: "#1A7A4C",
                  border: "1px solid #c1e4ce"
                },
                children: [
                  "Base: ₹",
                  baseTotal.toLocaleString("en-IN")
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "addons.addons_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-5 pb-4 border-b border-gray-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-lg font-bold",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "Optional Add-ons"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: "Enhance your trek experience. All add-ons can be removed later." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-50", children: ADDONS.map((addon) => {
              const cost = calcAddonCost(addon);
              const isOn = enabled[addon.id];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": `addons.addon_card.${addon.id}`,
                  className: "p-5 transition-colors",
                  style: { background: isOn ? "#f0faf4" : "white" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: {
                          background: isOn ? "#1A7A4C" : "#f3f4f6",
                          color: isOn ? "white" : "#6b7280"
                        },
                        children: addon.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: addon.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: addon.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-medium mt-1",
                              style: { color: "#1A7A4C" },
                              children: addon.priceLabel
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `addons.toggle.${addon.id}`,
                            onClick: () => toggleAddon(addon.id),
                            className: "relative flex-shrink-0 w-12 h-6 rounded-full transition-all",
                            style: { background: isOn ? "#1A7A4C" : "#e5e7eb" },
                            "aria-label": isOn ? `Disable ${addon.title}` : `Enable ${addon.title}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all",
                                style: {
                                  left: isOn ? "calc(100% - 1.375rem)" : "0.125rem"
                                }
                              }
                            )
                          }
                        )
                      ] }),
                      isOn && addon.hasDays && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Days:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setDay(
                                addon.id,
                                (days[addon.id] ?? trekDays) - 1
                              ),
                              className: "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold",
                              style: {
                                background: "#e8f5ee",
                                color: "#1A7A4C"
                              },
                              children: "−"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm w-6 text-center", children: days[addon.id] ?? trekDays }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setDay(
                                addon.id,
                                (days[addon.id] ?? trekDays) + 1
                              ),
                              className: "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold",
                              style: {
                                background: "#e8f5ee",
                                color: "#1A7A4C"
                              },
                              children: "+"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-xs font-semibold ml-1",
                            style: { color: "#1A7A4C" },
                            children: [
                              "₹",
                              cost.toLocaleString("en-IN")
                            ]
                          }
                        )
                      ] }),
                      isOn && addon.perPerson && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-gray-600", children: [
                        participants.length,
                        " person",
                        participants.length !== 1 ? "s" : "",
                        " × ₹",
                        addon.unitPrice,
                        " =",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-semibold",
                            style: { color: "#1A7A4C" },
                            children: [
                              "₹",
                              cost.toLocaleString("en-IN")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] })
                },
                addon.id
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 p-6",
          style: { background: "white" },
          "data-ocid": "addons.pricing_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base mb-4", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trek base price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  baseTotal.toLocaleString("en-IN")
                ] })
              ] }),
              ADDONS.filter((a) => enabled[a.id]).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  a.title,
                  a.hasDays ? ` (×${days[a.id] ?? trekDays} days)` : a.perPerson ? ` (×${participants.length} people)` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "+₹",
                  calcAddonCost(a).toLocaleString("en-IN")
                ] })
              ] }, a.id)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add-ons GST (5%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "+₹",
                  gst.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base pt-3 border-t border-green-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A7A4C" }, children: [
                  "₹",
                  grandTotal.toLocaleString("en-IN")
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => navigate({
              to: "/booking/$trekSlug/participants",
              params: { trekSlug }
            }),
            "data-ocid": "addons.back_button",
            className: "flex-1 h-12 font-semibold",
            style: { borderColor: "#1A7A4C", color: "#1A7A4C" },
            children: "← Back"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleContinue,
            "data-ocid": "addons.continue_button",
            className: "flex-[2] h-12 text-base font-bold rounded-xl",
            style: { background: "#F4A623", color: "white" },
            children: [
              "Continue to Payment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-5 h-5" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Addons as default
};
