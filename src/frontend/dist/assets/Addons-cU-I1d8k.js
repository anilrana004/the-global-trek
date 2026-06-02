import { c as createLucideIcon, u as useParams, n as useNavigate, r as reactExports, j as jsxRuntimeExports, a as Mountain, M as MapPin, X, B as Button } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { C as Checkbox } from "./checkbox-CSMXl8k2.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { T as TrendingUp } from "./trending-up-B6L0Gg4b.js";
import { C as Car } from "./car-gF900-P5.js";
import { C as ChevronDown } from "./chevron-down-OeUu8U61.js";
import { S as Shield } from "./shield-LxBVxM2z.js";
import { C as Camera } from "./camera-404cj8X1.js";
import { C as ChevronRight } from "./chevron-right-BS-1H6f5.js";
import "./index-CrXichEr.js";
import "./index-DTH3kros.js";
import "./index-BqRH8AsL.js";
import "./check-ZN2a9OhL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", key: "1ol0lm" }
  ],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }],
  ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" }],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }]
];
const Backpack = createLucideIcon("backpack", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
];
const Tent = createLucideIcon("tent", __iconNode);
const STEPS = ["Batch", "Details", "Add-ons", "Pay"];
function BookingProgress({ current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0 justify-center py-6", children: STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-mono border-2 transition-colors ${i < current ? "bg-[var(--gt-green-700)] border-[var(--gt-green-700)] text-white" : i === current ? "bg-[var(--gt-green-800)] border-[var(--gt-green-800)] text-white" : "bg-transparent border-[var(--gt-gray-400)] text-[var(--gt-gray-600)]"}`,
          children: i < current ? "✓" : i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-xs font-mono ${i <= current ? "text-[var(--gt-green-700)] font-semibold" : "text-[var(--gt-gray-600)]"}`,
          children: step
        }
      )
    ] }),
    i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-0.5 w-16 mx-1 mb-5 ${i < current ? "bg-[var(--gt-green-700)]" : "bg-[var(--gt-gray-200)]"}`
      }
    )
  ] }, step)) });
}
const PICKUPS = [
  {
    id: "dehradun",
    label: "Dehradun Clock Tower",
    detail: "Dec 19, 10:00 PM",
    price: 1200
  },
  {
    id: "haridwar",
    label: "Haridwar Bus Stand",
    detail: "Dec 19, 8:00 PM",
    price: 1500
  },
  {
    id: "delhi",
    label: "Delhi ISBT Kashmere Gate",
    detail: "Dec 19, 2:00 PM",
    price: 2500
  },
  {
    id: "rishikesh",
    label: "Rishikesh",
    detail: "Dec 19, 9:00 PM",
    price: 1300
  }
];
const GEAR_ITEMS = [
  { id: "poles", name: "Trekking Poles (pair)", pricePerDay: 80, days: 5 },
  { id: "bag", name: "Sleeping Bag (-10°C)", pricePerDay: 150, days: 5 },
  { id: "poncho", name: "Rain Poncho", pricePerDay: 50, days: 5 },
  { id: "crampons", name: "Crampons (6-point)", pricePerDay: 100, days: 5 },
  { id: "gaiters", name: "Gaiters", pricePerDay: 60, days: 5 },
  { id: "backpack", name: "Backpack 50L", pricePerDay: 120, days: 5 },
  { id: "headlamp", name: "Headlamp (Petzl)", pricePerDay: 60, days: 5 },
  { id: "jacket", name: "Trekking Jacket", pricePerDay: 120, days: 5 },
  { id: "boots", name: "Trekking Boots", pricePerDay: 150, days: 5 },
  { id: "thermals", name: "Thermal Set", pricePerDay: 80, days: 5 }
];
const ESSENTIAL_KIT = ["poles", "bag", "poncho", "headlamp"];
const FULL_KIT = GEAR_ITEMS.map((g) => g.id);
const BASE_PRICE = 8500;
const PARTICIPANTS = 2;
const GST_RATE = 0.05;
function CartSummary({
  state,
  onContinue
}) {
  const pickup = PICKUPS.find((p) => p.id === state.pickup);
  const gearCost = state.gearKit === "essential" ? 650 * PARTICIPANTS : state.gearKit === "full" ? 1100 * PARTICIPANTS : state.individualGear.reduce((acc, id) => {
    const item = GEAR_ITEMS.find((g) => g.id === id);
    return acc + (item ? item.pricePerDay * item.days * PARTICIPANTS : 0);
  }, 0);
  const pickupCost = pickup ? pickup.price * PARTICIPANTS : 0;
  const insuranceCost = state.insurance ? 500 * PARTICIPANTS : 0;
  const premiumCost = state.premiumTents ? 800 * PARTICIPANTS : 0;
  const photoCost = state.photography ? 2500 : 0;
  const baseCost = BASE_PRICE * PARTICIPANTS;
  const subtotal = baseCost + pickupCost + gearCost + insuranceCost + premiumCost + photoCost;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] shadow-md p-5 space-y-3 sticky top-20",
      "data-ocid": "addons.cart",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-[var(--gt-green-900)] text-lg", children: "Your Trek Package" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm border-t border-[var(--gt-gray-100)] pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-600)]", children: [
              PARTICIPANTS,
              "× Kedarkantha Base"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              baseCost.toLocaleString("en-IN")
            ] })
          ] }),
          pickupCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-600)]", children: [
              PARTICIPANTS,
              "× Pickup (",
              pickup == null ? void 0 : pickup.label,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              pickupCost.toLocaleString("en-IN")
            ] })
          ] }),
          gearCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-600)]", children: "Gear Rental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              gearCost.toLocaleString("en-IN")
            ] })
          ] }),
          insuranceCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-600)]", children: [
              PARTICIPANTS,
              "× Trek Insurance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              insuranceCost.toLocaleString("en-IN")
            ] })
          ] }),
          premiumCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-600)]", children: "Premium Tents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              premiumCost.toLocaleString("en-IN")
            ] })
          ] }),
          photoCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-600)]", children: "Photography Package" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              photoCost.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--gt-gray-200)] pt-3 space-y-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-gray-600)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              subtotal.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-gray-600)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST (5%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              gst.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-green-900)] font-bold text-base pt-1 border-t border-[var(--gt-gray-100)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              total.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: onContinue,
            className: "w-full bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-semibold font-mono rounded-xl gap-2",
            "data-ocid": "addons.continue_button",
            children: [
              "Continue to Payment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        )
      ]
    }
  );
}
function SectionCard({
  icon,
  title,
  badge,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-4 border-b border-[var(--gt-gray-100)] bg-[var(--gt-green-50)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)]", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold font-display text-[var(--gt-green-900)]", children: title }),
      badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[var(--gt-amber)] text-white border-0 font-mono text-xs ml-auto", children: badge })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
  ] });
}
function AddOns() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/addons" });
  const navigate = useNavigate();
  const [state, setState] = reactExports.useState({
    pickup: "",
    gearKit: "none",
    individualGear: [],
    insurance: false,
    premiumTents: false,
    photography: false
  });
  const [mobileCartOpen, setMobileCartOpen] = reactExports.useState(false);
  function toggleIndividualGear(id) {
    setState((s) => ({
      ...s,
      gearKit: "none",
      individualGear: s.individualGear.includes(id) ? s.individualGear.filter((g) => g !== id) : [...s.individualGear, id]
    }));
  }
  function setGearKit(kit) {
    setState((s) => ({
      ...s,
      gearKit: kit,
      individualGear: kit === "none" ? [] : kit === "essential" ? ESSENTIAL_KIT : FULL_KIT
    }));
  }
  function handleContinue() {
    void navigate({ to: "/booking/$trekSlug/payment", params: { trekSlug } });
  }
  const gearCost = state.gearKit === "essential" ? 650 * PARTICIPANTS : state.gearKit === "full" ? 1100 * PARTICIPANTS : state.individualGear.reduce((acc, id) => {
    const item = GEAR_ITEMS.find((g) => g.id === id);
    return acc + (item ? item.pricePerDay * item.days * PARTICIPANTS : 0);
  }, 0);
  const pickupObj = PICKUPS.find((p) => p.id === state.pickup);
  const extras = (pickupObj ? pickupObj.price * PARTICIPANTS : 0) + gearCost + (state.insurance ? 500 * PARTICIPANTS : 0) + (state.premiumTents ? 800 * PARTICIPANTS : 0) + (state.photography ? 2500 : 0);
  const base = BASE_PRICE * PARTICIPANTS;
  const subtotal = base + extras;
  const total = Math.round(subtotal * 1.05);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--gt-green-50)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-white border-b border-[var(--gt-green-100)] shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-4 h-4 text-[var(--gt-green-700)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold font-display text-[var(--gt-green-900)] text-sm", children: [
        trekSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        " ",
        "Trek"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
        "Dec 20–24, 2026"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        "5 Days"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
        "3,810m"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingProgress, { current: 2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-[var(--gt-green-900)]", children: "Add-Ons & Customization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--gt-gray-600)] text-sm mt-1", children: "Enhance your trek experience with these optional upgrades" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-5", "data-ocid": "addons.sections", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-5 h-5" }),
              title: "Transport Pickup (Optional)",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: PICKUPS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 cursor-pointer group",
                  "data-ocid": `addon.pickup.${p.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        id: `pickup-${p.id}`,
                        checked: state.pickup === p.id,
                        onCheckedChange: (v) => setState((s) => ({ ...s, pickup: v ? p.id : "" })),
                        className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: `pickup-${p.id}`,
                        className: "flex-1 flex items-start gap-2 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[var(--gt-gray-900)] group-hover:text-[var(--gt-green-700)]", children: p.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)]", children: p.detail })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-[var(--gt-green-700)]", children: [
                            "+₹",
                            p.price.toLocaleString("en-IN"),
                            "/pp"
                          ] })
                        ]
                      }
                    )
                  ]
                },
                p.id
              )) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Backpack, { className: "w-5 h-5" }),
              title: "Gear Rental",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: ["none", "essential", "full"].map((kit) => {
                  const labels = {
                    none: "No Gear",
                    essential: "Essential Kit ₹650/pp",
                    full: "Full Kit ₹1,100/pp"
                  };
                  const descs = {
                    none: "I own my gear",
                    essential: "Poles · Bag · Poncho · Headlamp",
                    full: "All 10 items"
                  };
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setGearKit(kit),
                      className: `border-2 rounded-xl p-3 text-left transition-all ${state.gearKit === kit ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]" : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"}`,
                      "data-ocid": `addon.gear_kit.${kit}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[var(--gt-green-900)]", children: labels[kit] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)] mt-0.5", children: descs[kit] })
                      ]
                    },
                    kit
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer text-sm text-[var(--gt-green-700)] font-semibold flex items-center gap-1 list-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 group-open:rotate-180 transition-transform" }),
                    " ",
                    "Pick individual items"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3", children: GEAR_ITEMS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-sm",
                      "data-ocid": `addon.gear.${g.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Checkbox,
                          {
                            id: `gear-${g.id}`,
                            checked: state.individualGear.includes(g.id),
                            onCheckedChange: () => toggleIndividualGear(g.id),
                            className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)]"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: `gear-${g.id}`,
                            className: "flex-1 flex items-center gap-2 cursor-pointer",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-800)]", children: g.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] ml-auto", children: [
                                "₹",
                                g.pricePerDay,
                                "/d"
                              ] })
                            ]
                          }
                        )
                      ]
                    },
                    g.id
                  )) })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
              title: "Trek Insurance",
              badge: "HIGHLY RECOMMENDED",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-4",
                  "data-ocid": "addon.insurance",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        id: "addon-insurance",
                        checked: state.insurance,
                        onCheckedChange: (v) => setState((s) => ({ ...s, insurance: !!v })),
                        className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "addon-insurance",
                        className: "flex-1 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-gray-900)]", children: [
                            "Trek Insurance —",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)]", children: "₹500/person" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--gt-gray-600)] mt-1", children: "Covers medical evacuation up to ₹5 lakhs. Provider: New India Assurance. 24/7 claim support." })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "w-5 h-5" }),
              title: "Accommodation Upgrade",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3",
                    "data-ocid": "addon.standard_tent",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Checkbox,
                        {
                          id: "addon-standard-tent",
                          checked: true,
                          disabled: true,
                          className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-600)] mt-0.5"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "addon-standard-tent",
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[var(--gt-gray-900)]", children: [
                              "Standard Camping",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Badge,
                                {
                                  variant: "outline",
                                  className: "font-mono text-xs ml-2",
                                  children: "Included"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)]", children: "3-person tents, standard insulation" })
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3",
                    "data-ocid": "addon.premium_tent",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Checkbox,
                        {
                          id: "addon-premium-tent",
                          checked: state.premiumTents,
                          onCheckedChange: (v) => setState((s) => ({ ...s, premiumTents: !!v })),
                          className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "addon-premium-tent",
                          className: "flex-1 cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[var(--gt-gray-900)]", children: [
                              "Premium Tents",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)]", children: "+₹800/person" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)]", children: "2-person tents, 3-layer insulated, higher warmth rating" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-5 h-5" }),
              title: "Photography Package",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-4",
                  "data-ocid": "addon.photography",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        id: "addon-photography",
                        checked: state.photography,
                        onCheckedChange: (v) => setState((s) => ({ ...s, photography: !!v })),
                        className: "border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "addon-photography", className: "cursor-pointer", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-gray-900)]", children: [
                        "Professional Trek Photography —",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)]", children: "₹2,500/group" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--gt-gray-600)] mt-1", children: "100+ edited photos delivered within 7 days. Drone shots included on eligible days." })
                    ] })
                  ]
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-80 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartSummary, { state, onContinue: handleContinue }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[var(--gt-gray-200)] shadow-lg", children: [
      mobileCartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-[var(--gt-gray-100)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold font-display text-[var(--gt-green-900)]", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setMobileCartOpen(false),
              "data-ocid": "addons.cart_close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--gt-gray-600)]", children: [
              PARTICIPANTS,
              "× Base"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              base.toLocaleString("en-IN")
            ] })
          ] }),
          extras > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-600)]", children: "Add-ons" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              extras.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total (incl. GST)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              total.toLocaleString("en-IN")
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setMobileCartOpen(!mobileCartOpen),
            className: "flex-1 text-left",
            "data-ocid": "addons.cart_toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)]", children: "Total (incl. GST)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-[var(--gt-green-900)] text-lg", children: [
                "₹",
                total.toLocaleString("en-IN")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleContinue,
            className: "bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-semibold font-mono rounded-xl gap-1 shrink-0",
            "data-ocid": "addons.continue_mobile_button",
            children: [
              "Continue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden h-20" })
  ] });
}
export {
  AddOns as default
};
