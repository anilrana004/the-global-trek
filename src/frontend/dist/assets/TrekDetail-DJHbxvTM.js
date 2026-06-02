import { c as createLucideIcon, u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, a as Mountain, X, b as MessageCircle, M as MapPin, P as Phone } from "./index-BBTrFTBe.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { C as ChevronUp } from "./chevron-up-iVEGVy5-.js";
import { C as ChevronDown } from "./chevron-down-OeUu8U61.js";
import { A as AnimatePresence } from "./index-Mo7rC_ty.js";
import { C as Check } from "./check-ZN2a9OhL.js";
import { A as ArrowRight } from "./arrow-right-ABP3TPB6.js";
import { H as Heart } from "./heart-BWmixCSm.js";
import { T as TriangleAlert } from "./triangle-alert-DUnhcN9j.js";
import { S as Shield } from "./shield-LxBVxM2z.js";
import { U as Users } from "./users-GoUlh9qe.js";
import { C as Calendar } from "./calendar-BB9CmmUM.js";
import { S as Star } from "./star-C8uGHq0g.js";
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function trekById(id) {
  return treksData.find((t) => t.id === id || t.slug === id);
}
function diffColor(d) {
  const l = d.toLowerCase();
  if (l.includes("easy") && !l.includes("moderate"))
    return { bg: "#16a34a20", text: "#16a34a", border: "#16a34a40" };
  if (l.includes("moderate") && !l.includes("difficult"))
    return { bg: "#d9770620", text: "#d97706", border: "#d9770640" };
  return { bg: "#dc262620", text: "#dc2626", border: "#dc262640" };
}
function Stars({ n }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-0.5", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: "w-3.5 h-3.5",
      fill: i < Math.round(n) ? "#f59e0b" : "none",
      color: i < Math.round(n) ? "#f59e0b" : "#71717a"
    },
    `star-pos-${i}`
  )) });
}
function generateBatches(trekId) {
  const base = /* @__PURE__ */ new Date("2026-06-15");
  return [0, 22, 45, 68, 91, 114].map((offset, i) => {
    const start = new Date(base);
    start.setDate(start.getDate() + offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const seats = [8, 3, 1, 12, 5, 2][i];
    const status = seats >= 6 ? "available" : seats >= 3 ? "filling_fast" : seats === 1 ? "almost_full" : "available";
    return {
      id: `${trekId}-b${i + 1}`,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
      totalSeats: 14,
      bookedSeats: 14 - seats,
      availableSeats: seats,
      price: 8500 + i * 300,
      status,
      meetingPoint: "Rishikesh Bus Stand, 5 AM",
      guide: "Deepak Singh (NIM)",
      discounts: { group5Plus: 5, earlyBird: 8 }
    };
  });
}
const SAMPLE_REVIEWS = [
  {
    id: "r1",
    author: "Priya Mehta",
    rating: 5,
    dimensions: {
      food: 5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 5
    },
    title: "Life-changing summit sunrise",
    comment: "Woke at 4 AM for the push and every second was worth it. Our guide Deepak shared mythological context at every step. SpO2 checked three times on Day 2. Paneer makhani at 8,500 ft — absolutely surreal. Coming back for Har Ki Dun.",
    date: "2025-12-15",
    month: 12,
    groupType: "couple",
    verified: true,
    helpful: 47,
    tripYear: 2025
  },
  {
    id: "r2",
    author: "Arjun Krishnaswamy",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "World-class for the price",
    comment: "Guides carry a Garmin InReach satellite phone — I tested it myself. Oxygen cylinders at every camp. The 360° panorama with Nanda Devi, Trishul, Kedarnath all visible at once is something I've dreamed of since childhood.",
    date: "2026-01-10",
    month: 1,
    groupType: "solo",
    verified: true,
    helpful: 31,
    tripYear: 2026
  },
  {
    id: "r3",
    author: "Sunita Sharma",
    rating: 4,
    dimensions: {
      food: 5,
      guideExpertise: 4,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4
    },
    title: "Perfect family trek — my 14-year-old managed it",
    comment: "Slightly nervous about altitude with the kids but the team monitored them constantly. Food was the star — looked forward to every meal. March rhododendron forests beyond description. Just book it.",
    date: "2026-03-20",
    month: 3,
    groupType: "family",
    verified: true,
    helpful: 28,
    tripYear: 2026
  },
  {
    id: "r4",
    author: "Vivek Agarwal",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "Corporate team bonding — exceeded all expectations",
    comment: "12 Bangalore colleagues, not a single complaint. Guide handled different fitness levels brilliantly. WhatsApp updates to families was a thoughtful touch. Summit at 4 AM with headlamps — absolute cinema.",
    date: "2025-11-08",
    month: 11,
    groupType: "corporate",
    verified: true,
    helpful: 19,
    tripYear: 2025
  }
];
const GEAR_RENTALS = [
  {
    id: "g1",
    name: "Trekking Poles",
    icon: "🥢",
    daily: 150,
    weekly: 800,
    desc: "Carbon, anti-shock"
  },
  {
    id: "g2",
    name: "Sleeping Bag",
    icon: "🛌",
    daily: 200,
    weekly: 1100,
    desc: "-10°C down fill"
  },
  {
    id: "g3",
    name: "Rain Poncho",
    icon: "🌧️",
    daily: 100,
    weekly: 500,
    desc: "Heavy-duty"
  },
  {
    id: "g4",
    name: "Gaiters",
    icon: "🧤",
    daily: 80,
    weekly: 400,
    desc: "Snow & mud guard"
  },
  {
    id: "g5",
    name: "Headlamp",
    icon: "🔦",
    daily: 100,
    weekly: 500,
    desc: "350 lm, USB-C"
  },
  {
    id: "g6",
    name: "Trek Backpack",
    icon: "🎒",
    daily: 250,
    weekly: 1400,
    desc: "55L Osprey/Decathlon"
  }
];
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function parseNumericStr(val) {
  if (typeof val === "number") return val;
  const m = String(val).match(/[\d,]+/);
  return m ? Number.parseInt(m[0].replace(/,/g, ""), 10) : 0;
}
function QuickFactsBar({ trek }) {
  var _a;
  const dc = diffColor(trek.difficulty);
  const maxAltNum = parseNumericStr(trek.maxAltitude);
  parseNumericStr(trek.price);
  const amsLevel = maxAltNum < 3e3 ? "low" : maxAltNum <= 4500 ? "moderate" : "high";
  const amsColor = amsLevel === "low" ? "#22c55e" : amsLevel === "moderate" ? "#f59e0b" : "#ef4444";
  const amsLabel = amsLevel === "low" ? "LOW ALTITUDE" : amsLevel === "moderate" ? "MODERATE ALTITUDE" : "HIGH ALTITUDE";
  const amsGuidance = amsLevel === "low" ? "Generally safe for most people" : amsLevel === "moderate" ? "Acclimatization advised" : "Medical screening recommended";
  const physicalScore = trek.difficulty === "Easy" ? 2 : trek.difficulty === "Moderate" ? 3 : trek.difficulty === "Difficult" ? 4 : 5;
  const technicalScore = trek.difficulty === "Easy" ? 1 : trek.difficulty === "Moderate" ? 2 : 3;
  const altitudeScore = maxAltNum < 3e3 ? 1 : maxAltNum < 3500 ? 2 : maxAltNum < 4e3 ? 3 : maxAltNum < 4500 ? 4 : 5;
  function ScoreBar({ label, score }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50 w-24 shrink-0", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-sm",
          style: {
            width: 8,
            height: 8,
            background: slot < score ? "#22c55e" : "transparent",
            border: `1px solid ${slot < score ? "#22c55e" : "rgba(255,255,255,0.15)"}`
          }
        },
        `${label}-slot-${slot}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/60 ml-1", children: [
        score,
        "/5"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        background: "#0d1f17",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      },
      "data-ocid": "trek_detail.quick_facts_bar",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap gap-x-5 gap-y-1.5 items-center justify-between", children: [
        [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-3.5 h-3.5" }),
            label: "Altitude",
            value: trek.maxAltitude,
            extra: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#safety", className: "block mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",
                  style: {
                    background: `${amsColor}20`,
                    color: amsColor,
                    border: `1px solid ${amsColor}40`
                  },
                  children: amsLabel
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/40 ml-1", children: amsGuidance })
            ] })
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            label: "Duration",
            value: trek.duration
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
            label: "Difficulty",
            value: trek.difficulty,
            color: dc.text,
            extra: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreBar, { label: "Physical", score: physicalScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreBar, { label: "Technical", score: technicalScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreBar, { label: "Altitude", score: altitudeScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-white/40 font-mono", children: [
                "Overall: ",
                trek.difficulty
              ] })
            ] })
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "₹" }),
            label: "From",
            value: trek.price
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
            label: "Season",
            value: ((_a = trek.bestTime) == null ? void 0 : _a.split(",")[0]) ?? trek.bestTime
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
            label: "Group",
            value: trek.groupSize
          }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: f.color ?? "#52c99a" }, children: f.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/40 font-mono uppercase tracking-wide", children: [
              f.label,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold",
                style: { color: f.color ?? "#e2e8f0" },
                children: f.value
              }
            )
          ] }),
          f.extra
        ] }, f.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity",
            style: { background: "#E8963A", color: "#0A0E14" },
            "data-ocid": "trek_detail.quick_book_button",
            children: "Book Now"
          }
        ) })
      ] })
    }
  );
}
function AltitudeChart({ trek }) {
  const days = trek.itinerary.filter((d) => d.maxAltitude);
  if (days.length < 2) return null;
  const alts = days.map((d) => d.maxAltitude ?? 0);
  const mn = Math.min(...alts) - 500;
  const mx = Math.max(...alts) + 500;
  const W = 600;
  const H = 160;
  const px = 44;
  const py = 20;
  const tx = (i) => px + i / (days.length - 1) * (W - px * 2);
  const ty = (a) => H - py - (a - mn) / (mx - mn) * (H - py * 2);
  const line = days.map((d, i) => `${tx(i)},${ty(d.maxAltitude ?? 0)}`).join(" ");
  const area = [
    `${tx(0)},${H - py}`,
    ...days.map((d, i) => `${tx(i)},${ty(d.maxAltitude ?? 0)}`),
    `${tx(days.length - 1)},${H - py}`
  ].join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "rounded-2xl p-5 border",
      style: { background: "#0d1f17", borderColor: "rgba(82,201,154,0.2)" },
      "data-ocid": "trek_detail.altitude_chart_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl italic text-white mb-4", children: "Altitude Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            viewBox: `0 0 ${W} ${H}`,
            className: "w-full",
            role: "img",
            "aria-label": "Trek altitude profile",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ag", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#52c99a", stopOpacity: "0.45" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#52c99a", stopOpacity: "0.02" })
              ] }) }),
              [0.25, 0.5, 0.75, 1].map((f) => {
                const a = Math.round(mn + f * (mx - mn));
                const y = ty(a);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1: px,
                      x2: W - px,
                      y1: y,
                      y2: y,
                      stroke: "rgba(255,255,255,0.06)",
                      strokeDasharray: "4 3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "text",
                    {
                      x: px - 4,
                      y: y + 3,
                      fill: "rgba(255,255,255,0.3)",
                      fontSize: "8",
                      textAnchor: "end",
                      children: [
                        a.toLocaleString(),
                        "ft"
                      ]
                    }
                  )
                ] }, f);
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: area, fill: "url(#ag)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "polyline",
                {
                  points: line,
                  fill: "none",
                  stroke: "#52c99a",
                  strokeWidth: "2.5",
                  strokeLinejoin: "round"
                }
              ),
              days.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: tx(i),
                    cy: ty(d.maxAltitude ?? 0),
                    r: "4",
                    fill: "#E8963A",
                    stroke: "#0d1f17",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "text",
                  {
                    x: tx(i),
                    y: H - 4,
                    fill: "rgba(255,255,255,0.45)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: [
                      "D",
                      d.day
                    ]
                  }
                )
              ] }, d.day))
            ]
          }
        )
      ]
    }
  );
}
function SafetySection({ trek }) {
  const [open, setOpen] = reactExports.useState(null);
  const sp = trek.safetyProtocol;
  const stages = sp ? [
    { label: "Stage 1 — Mild AMS", data: sp.amsProtocol.stage1 },
    { label: "Stage 2 — Moderate AMS", data: sp.amsProtocol.stage2 },
    { label: "Stage 3 — Severe HACE/HAPE", data: sp.amsProtocol.stage3 }
  ] : [
    {
      label: "Stage 1 — Mild AMS",
      data: {
        symptoms: [
          "Headache",
          "Nausea",
          "Fatigue",
          "Dizziness",
          "Loss of appetite"
        ],
        treatment: "Rest at same altitude. Ibuprofen. Drink 3–4L water. Monitor hourly."
      }
    },
    {
      label: "Stage 2 — Moderate AMS",
      data: {
        symptoms: [
          "Severe headache unresponsive to meds",
          "Vomiting",
          "SpO2 <85%",
          "Extreme fatigue"
        ],
        treatment: "Descend 300–500m immediately. Administer Diamox 125mg. Contact guide."
      }
    },
    {
      label: "Stage 3 — Severe HACE/HAPE",
      data: {
        symptoms: [
          "Loss of coordination (ataxia)",
          "Altered consciousness",
          "Pink frothy sputum",
          "Seizures"
        ],
        treatment: "EMERGENCY: Descend 1,000m+ immediately. 8L/min O₂. Call helicopter. Dexamethasone 8mg IM."
      }
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "rounded-2xl overflow-hidden",
      style: {
        background: "#0a1a11",
        border: "1px solid rgba(82,201,154,0.15)"
      },
      "data-ocid": "trek_detail.safety_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-6 pt-5 pb-4 border-b",
            style: { borderColor: "rgba(82,201,154,0.1)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5", style: { color: "#52c99a" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl italic text-white", children: "Safety & AMS Protocol" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "rgba(255,255,255,0.45)" }, children: "Exactly what we carry, who leads you, and what happens if something goes wrong." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase",
                style: { color: "#52c99a" },
                children: "Lead Guide"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-11 h-11 rounded-full flex items-center justify-center font-bold shrink-0",
                  style: { background: "rgba(82,201,154,0.15)", color: "#52c99a" },
                  children: ((sp == null ? void 0 : sp.guideInfo.name) ?? "Deepak Singh")[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm", children: (sp == null ? void 0 : sp.guideInfo.name) ?? "Deepak Singh" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs mt-0.5",
                    style: { color: "rgba(255,255,255,0.45)" },
                    children: (sp == null ? void 0 : sp.guideInfo.certification) ?? "NIM Certified · WFR Level 3 · 12 years, 200+ Himalayan treks"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mt-1.5", children: ["NIM", "WFR", "WMI"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-1.5 py-0.5 rounded font-mono font-bold",
                    style: {
                      background: "rgba(82,201,154,0.12)",
                      color: "#52c99a",
                      border: "1px solid rgba(82,201,154,0.25)"
                    },
                    children: c
                  },
                  c
                )) })
              ] })
            ] }),
            [
              {
                icon: "📡",
                label: "Satellite Phone",
                value: (sp == null ? void 0 : sp.satellitePhone.model) ?? "Garmin inReach Mini 2 · Global"
              },
              {
                icon: "🚁",
                label: "Helipad",
                value: (sp == null ? void 0 : sp.helicopterLandingZone) ? `${sp.helicopterLandingZone.location} · ${sp.helicopterLandingZone.coordinates}` : `Chopta village clearing · 30°24'31"N 79°13'12"E`
              },
              {
                icon: "🫁",
                label: "O₂ Cylinders",
                value: (sp == null ? void 0 : sp.oxygenCylinders) ? `${sp.oxygenCylinders.count} × ${sp.oxygenCylinders.capacity}` : "3 × 5L medical-grade"
              },
              {
                icon: "💊",
                label: "Team Ratio",
                value: (sp == null ? void 0 : sp.teamRatio) ?? "1 guide + 1 helper per 8 trekkers"
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-2 py-2 border-b",
                style: { borderColor: "rgba(255,255,255,0.05)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-mono uppercase tracking-wide",
                        style: { color: "rgba(255,255,255,0.35)" },
                        children: item.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75", children: item.value })
                  ] })
                ]
              },
              item.label
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase",
                style: { color: "#E8963A" },
                children: "Nearest Hospital"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-xl",
                style: {
                  background: "rgba(232,150,58,0.08)",
                  border: "1px solid rgba(232,150,58,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm", children: (sp == null ? void 0 : sp.nearestHospital.name) ?? "AIIMS Rishikesh" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "rgba(255,255,255,0.45)" },
                      children: (sp == null ? void 0 : sp.nearestHospital.distance) ?? "190 km · 3.5 hr drive"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${(sp == null ? void 0 : sp.nearestHospital.phone) ?? "01352462945"}`,
                      className: "flex items-center gap-1.5 mt-1.5 text-sm font-mono",
                      style: { color: "#E8963A" },
                      "data-ocid": "trek_detail.hospital_phone",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                        (sp == null ? void 0 : sp.nearestHospital.phone) ?? "+91 135 246 2945"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase pt-1",
                style: { color: "#52c99a" },
                children: "AMS Protocol"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: stages.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl overflow-hidden",
                style: { border: "1px solid rgba(255,255,255,0.07)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full flex items-center justify-between px-4 py-3 text-left",
                      style: {
                        background: open === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)"
                      },
                      onClick: () => setOpen(open === i ? null : i),
                      "data-ocid": `trek_detail.ams_stage.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-sm font-medium",
                            style: {
                              color: i === 2 ? "#ef4444" : i === 1 ? "#f59e0b" : "#52c99a"
                            },
                            children: s.label
                          }
                        ),
                        open === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-white/40" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-white/40" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.2 },
                      className: "overflow-hidden",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "px-4 py-3",
                          style: { background: "rgba(0,0,0,0.2)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-xs font-mono uppercase tracking-wide mb-1",
                                style: { color: "rgba(255,255,255,0.35)" },
                                children: "Symptoms"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5 mb-2", children: s.data.symptoms.map((sym) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "li",
                              {
                                className: "text-xs text-white/65 flex items-center gap-1.5",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: "w-1 h-1 rounded-full shrink-0",
                                      style: {
                                        background: i === 2 ? "#ef4444" : "#f59e0b"
                                      }
                                    }
                                  ),
                                  sym
                                ]
                              },
                              sym
                            )) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-xs font-mono uppercase tracking-wide mb-1",
                                style: { color: "rgba(255,255,255,0.35)" },
                                children: "Treatment"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/65 leading-relaxed", children: s.data.treatment })
                          ]
                        }
                      )
                    }
                  ) })
                ]
              },
              s.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-lg",
                style: {
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.18)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs font-mono uppercase tracking-wide mb-1",
                      style: { color: "#ef4444" },
                      children: "Evacuation"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/55 leading-relaxed", children: (sp == null ? void 0 : sp.evacuationProcedure) ?? "Immediate descent + O₂ + helicopter if required. Garmin InReach SOS triggers response within 90 min. AIIMS Rishikesh pre-coordinated." })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function BatchCalendar({ trek }) {
  const batches = trek.batchSlots ?? generateBatches(trek.id);
  const cfg = {
    available: { bg: "rgba(22,163,74,0.15)", text: "#16a34a", label: "Open" },
    filling_fast: {
      bg: "rgba(217,119,6,0.15)",
      text: "#d97706",
      label: "Filling Fast"
    },
    almost_full: {
      bg: "rgba(220,38,38,0.15)",
      text: "#dc2626",
      label: "Almost Full"
    },
    sold_out: {
      bg: "rgba(113,113,122,0.15)",
      text: "#71717a",
      label: "Sold Out"
    },
    limited: { bg: "rgba(217,119,6,0.15)", text: "#d97706", label: "Limited" },
    waitlist: {
      bg: "rgba(99,102,241,0.15)",
      text: "#6366f1",
      label: "Waitlist"
    }
  };
  const fmt = (iso) => new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "2-digit"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      "data-ocid": "trek_detail.batch_calendar_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground", children: "Upcoming Batches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/919876543210?text=Hi, I'd like to book ${encodeURIComponent(trek.name)}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-opacity hover:opacity-80",
              style: {
                background: "rgba(37,211,102,0.1)",
                color: "#25D366",
                border: "1px solid rgba(37,211,102,0.25)"
              },
              "data-ocid": "trek_detail.whatsapp_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                "WhatsApp Us"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mb-5 p-4 rounded-xl",
            style: {
              background: "rgba(232,150,58,0.06)",
              border: "1px solid rgba(232,150,58,0.18)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-mono text-xs tracking-widest uppercase mb-2.5",
                  style: { color: "#E8963A" },
                  children: "Group Discounts"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: [
                { size: "5+ people", disc: "5% off" },
                { size: "10+ people", disc: "10% off" },
                { size: "15+ people", disc: "15% off" }
              ].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5", style: { color: "#E8963A" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: d.size }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-mono font-bold px-2 py-0.5 rounded",
                    style: {
                      background: "rgba(232,150,58,0.15)",
                      color: "#E8963A"
                    },
                    children: d.disc
                  }
                )
              ] }, d.size)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2", style: { color: "rgba(255,255,255,0.35)" }, children: "30% advance to confirm. Balance 14 days before trek." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: batches.slice(0, 6).map((b, i) => {
          const c = cfg[b.status] ?? cfg.available;
          const sold = b.status === "sold_out";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02]",
              style: {
                background: "rgba(255,255,255,0.02)",
                borderColor: `${c.text}40`
              },
              "data-ocid": `trek_detail.batch.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: fmt(b.startDate) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "to ",
                      fmt(b.endDate)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-mono font-bold px-2 py-0.5 rounded-full",
                      style: { background: c.bg, color: c.text },
                      children: c.label
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold text-foreground", children: [
                    "₹",
                    b.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium", style: { color: c.text }, children: [
                    b.availableSeats,
                    " seat",
                    b.availableSeats !== 1 ? "s" : "",
                    " ",
                    "left"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full h-1.5 rounded-full mb-3",
                    style: { background: "rgba(255,255,255,0.07)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full",
                        style: {
                          width: `${b.bookedSeats / b.totalSeats * 100}%`,
                          background: c.text
                        }
                      }
                    )
                  }
                ),
                !sold ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity",
                    style: { background: "#E8963A", color: "#0A0E14" },
                    "data-ocid": `trek_detail.batch_book.${i + 1}`,
                    children: "Book This Batch"
                  }
                ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase opacity-40 cursor-not-allowed",
                    style: {
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.4)"
                    },
                    disabled: true,
                    children: "Sold Out"
                  }
                )
              ]
            },
            b.id
          );
        }) })
      ]
    }
  );
}
function ReviewsSection({ trek }) {
  const reviews = trek.detailedReviews ?? SAMPLE_REVIEWS;
  const [filter, setFilter] = reactExports.useState("all");
  const [monthFilter, setMonthFilter] = reactExports.useState("all");
  const [shown, setShown] = reactExports.useState(4);
  const filtered = reactExports.useMemo(
    () => reviews.filter(
      (r) => (filter === "all" || r.groupType === filter) && (monthFilter === "all" || r.month === Number(monthFilter))
    ),
    [reviews, filter, monthFilter]
  );
  const overall = reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);
  const dimLabels = [
    { key: "food", label: "Food" },
    { key: "guideExpertise", label: "Guide" },
    { key: "safety", label: "Safety" },
    { key: "valueForMoney", label: "Value" },
    { key: "scenery", label: "Scenery" }
  ];
  const dimAvgs = dimLabels.map((d) => ({
    ...d,
    avg: reviews.reduce((s, r) => s + (r.dimensions[d.key] ?? 0), 0) / (reviews.length || 1)
  }));
  const groups = ["all", "solo", "couple", "family", "corporate", "school"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      "data-ocid": "trek_detail.reviews_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "Trekker Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-5 p-5 rounded-2xl",
              style: {
                background: "rgba(232,150,58,0.06)",
                border: "1px solid rgba(232,150,58,0.18)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-5xl italic font-bold",
                      style: { color: "#E8963A" },
                      children: overall.toFixed(1)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { n: overall }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    reviews.length,
                    " verified"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-1.5", children: [5, 4, 3, 2, 1].map((s) => {
                  const cnt = reviews.filter(
                    (r) => Math.round(r.rating) === s
                  ).length;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-3 shrink-0", children: s }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "w-3 h-3 shrink-0",
                        fill: "#f59e0b",
                        color: "#f59e0b"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex-1 h-1.5 rounded-full",
                        style: { background: "rgba(255,255,255,0.07)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full rounded-full",
                            style: {
                              width: `${reviews.length > 0 ? cnt / reviews.length * 100 : 0}%`,
                              background: "#E8963A"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-4 text-right shrink-0", children: cnt })
                  ] }, s);
                }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-5 rounded-2xl",
              style: {
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3", children: "Rating by Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: dimAvgs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: d.avg.toFixed(1) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 rounded-full",
                      style: { background: "rgba(255,255,255,0.07)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full rounded-full transition-all duration-700",
                          style: {
                            width: `${d.avg / 5 * 100}%`,
                            background: "linear-gradient(90deg,#52c99a,#E8963A)"
                          }
                        }
                      )
                    }
                  )
                ] }, d.key)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-5 items-center", children: [
          groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFilter(g),
              className: "px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all duration-200 capitalize",
              style: {
                background: filter === g ? "rgba(232,150,58,0.18)" : "rgba(255,255,255,0.04)",
                color: filter === g ? "#E8963A" : "rgba(255,255,255,0.45)",
                border: `1px solid ${filter === g ? "rgba(232,150,58,0.35)" : "rgba(255,255,255,0.07)"}`
              },
              "data-ocid": `trek_detail.review_filter.${g}`,
              children: g
            },
            g
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "ml-auto px-3 py-1.5 rounded-full text-xs font-mono bg-transparent border",
              style: {
                borderColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.55)"
              },
              value: monthFilter,
              onChange: (e) => setMonthFilter(e.target.value),
              "data-ocid": "trek_detail.review_month_filter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", style: { background: "#0d1f17" }, children: "All months" }),
                MONTH_NAMES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i + 1, style: { background: "#0d1f17" }, children: m }, m))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.slice(0, shown).map((rev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-2xl border",
            style: {
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.07)"
            },
            "data-ocid": `trek_detail.review.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-bold",
                      style: {
                        background: "rgba(82,201,154,0.15)",
                        color: "#52c99a"
                      },
                      children: rev.author[0]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: rev.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-mono px-1.5 py-0.5 rounded capitalize",
                          style: {
                            background: "rgba(82,201,154,0.1)",
                            color: "#52c99a"
                          },
                          children: rev.groupType
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        MONTH_NAMES[rev.month - 1],
                        " ",
                        rev.tripYear
                      ] }),
                      rev.verified && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#52c99a" }, children: "✓ Verified" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { n: rev.rating })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: rev.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: rev.comment })
            ]
          },
          rev.id
        )) }),
        shown < filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShown((s) => s + 4),
            className: "mt-4 w-full py-3 rounded-xl border text-sm font-medium transition-all hover:bg-muted/10",
            style: {
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.55)"
            },
            "data-ocid": "trek_detail.load_more_reviews",
            children: "Load More Reviews"
          }
        )
      ]
    }
  );
}
function FAQItem({
  question,
  answer,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border rounded-xl overflow-hidden",
      style: { borderColor: "rgba(255,255,255,0.08)" },
      "data-ocid": `trek_detail.faq.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-5 py-4 text-left transition-colors",
            style: {
              background: open ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)"
            },
            onClick: () => setOpen(!open),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: question }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 shrink-0 text-orange-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 shrink-0 text-muted-foreground" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "px-5 py-4 text-sm text-muted-foreground leading-relaxed",
            style: { background: "rgba(0,0,0,0.15)" },
            children: answer
          }
        )
      ]
    }
  );
}
function TrekDetailPage() {
  var _a;
  const { trekId } = useParams({ from: "/trek/$trekId" });
  const trek = trekById(trekId);
  const [activeDay, setActiveDay] = reactExports.useState(0);
  const [checkedGear, setCheckedGear] = reactExports.useState(/* @__PURE__ */ new Set());
  const [checkedPacking, setCheckedPacking] = reactExports.useState(/* @__PURE__ */ new Set());
  if (!trek) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        "data-ocid": "trek_detail.not_found",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl italic text-foreground mb-4", children: "Trek Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { style: { background: "#E8963A", color: "#0A0E14" }, children: "View All Treks" }) })
        ] })
      }
    );
  }
  const heroImg = ((_a = trek.heroImages) == null ? void 0 : _a[0]) ?? "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80";
  const gallery = trek.heroImages ?? [
    "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80"
  ];
  const similarTreks = treksData.filter(
    (t) => t.id !== trek.id && (t.region === trek.region || t.difficulty === trek.difficulty)
  ).slice(0, 3);
  const dc = diffColor(trek.difficulty);
  const packCats = {
    Clothing: [],
    Equipment: [],
    Documents: [],
    Medical: [],
    Other: []
  };
  for (const item of trek.packingList) {
    const lc = item.toLowerCase();
    if ([
      "jacket",
      "shirt",
      "pant",
      "thermal",
      "glove",
      "cap",
      "sock",
      "balaclava",
      "fleece",
      "rain poncho",
      "t-shirt"
    ].some((k) => lc.includes(k)))
      packCats.Clothing.push(item);
    else if ([
      "pole",
      "bag",
      "headlamp",
      "bottle",
      "gaiters",
      "shoe",
      "sunglasses",
      "torch"
    ].some((k) => lc.includes(k)))
      packCats.Equipment.push(item);
    else if (["id", "permit", "cash", "insurance", "card"].some((k) => lc.includes(k)))
      packCats.Documents.push(item);
    else if (["sunscreen", "lip", "medicine", "aid", "energy", "bar"].some(
      (k) => lc.includes(k)
    ))
      packCats.Medical.push(item);
    else packCats.Other.push(item);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background pb-16 md:pb-0", "data-ocid": "trek_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFactsBar, { trek }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[85vh] flex items-end overflow-hidden",
        "data-ocid": "trek_detail.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: trek.name,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3", children: gallery.slice(0, 3).map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 + i * 0.15, duration: 0.5 },
              className: "w-28 h-20 rounded-xl overflow-hidden border-2 shadow-2xl",
              style: {
                borderColor: "rgba(255,255,255,0.2)",
                transform: `rotate(${[-4, 3, -2][i]}deg)`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img,
                  alt: `Gallery ${i + 1}`,
                  className: "w-full h-full object-cover"
                }
              )
            },
            img
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 z-20 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => window.print(),
              className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all",
              style: { borderColor: "rgba(255,255,255,0.3)", color: "#fff" },
              "data-ocid": "trek_detail.download_itinerary_button",
              children: "⬇ Download Full Itinerary PDF"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-4 pb-16 pt-32 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full",
                      style: {
                        background: "rgba(82,201,154,0.15)",
                        color: "#52c99a",
                        border: "1px solid rgba(82,201,154,0.3)"
                      },
                      children: trek.region
                    }
                  ),
                  (trek.badges ?? []).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full",
                      style: {
                        background: "rgba(232,150,58,0.15)",
                        color: "#E8963A",
                        border: "1px solid rgba(232,150,58,0.3)"
                      },
                      children: b
                    },
                    b
                  ))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl italic text-white mb-3 leading-tight max-w-3xl", children: trek.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 text-lg mb-5 max-w-xl", children: trek.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-sm font-mono px-3 py-1 rounded-full",
                      style: {
                        background: dc.bg,
                        color: dc.text,
                        border: `1px solid ${dc.border}`
                      },
                      children: trek.difficulty
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-white/65", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-4 h-4" }),
                    trek.maxAltitude
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-white/65", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                    trek.duration
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-2xl font-display font-bold italic",
                      style: { color: "#E8963A" },
                      children: [
                        "From ",
                        trek.price
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "px-7 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105",
                      style: { background: "#E8963A", color: "#0A0E14" },
                      "data-ocid": "trek_detail.hero_book_button",
                      children: "Book This Trek"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#batch-calendar",
                      className: "px-7 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase border border-white/30 text-white/75 transition-all duration-200 hover:border-white/60",
                      children: "View Batches"
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-[42px] z-20 border-b py-2.5 px-4",
        style: {
          background: "rgba(10,14,20,0.97)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.07)"
        },
        "data-ocid": "trek_detail.sticky_cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base italic text-white truncate", children: trek.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono", style: { color: "#E8963A" }, children: [
              "From ",
              trek.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity",
                style: { background: "#E8963A", color: "#0A0E14" },
                "data-ocid": "trek_detail.book_now_button",
                children: "Book Now"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block fixed right-6 top-32 z-40 w-72", children: (() => {
      const priceNum = parseNumericStr(trek.price);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-5 border",
          style: {
            background: "rgba(13,31,23,0.95)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(82,201,154,0.2)"
          },
          "data-ocid": "trek_detail.sticky_sidebar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-2xl font-display font-bold italic",
                style: { color: "#E8963A" },
                children: [
                  "From ",
                  trek.price
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { n: 4.9 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50", children: "4.9 (247 reviews)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "batch-select",
                    className: "text-xs text-white/40 font-mono uppercase tracking-wide",
                    children: "Select Batch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "batch-select",
                    className: "w-full mt-1 px-3 py-2 rounded-lg text-sm bg-white/5 border text-white/80",
                    style: { borderColor: "rgba(255,255,255,0.1)" },
                    defaultValue: "",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, style: { background: "#0d1f17" }, children: "Choose dates..." }),
                      generateBatches(trek.id).slice(0, 4).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "option",
                        {
                          value: b.id,
                          style: { background: "#0d1f17" },
                          children: [
                            b.startDate,
                            " — ",
                            b.availableSeats,
                            " seats left"
                          ]
                        },
                        b.id
                      ))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50", children: "Participants" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-7 h-7 rounded-full border flex items-center justify-center text-white/60",
                      style: { borderColor: "rgba(255,255,255,0.15)" },
                      children: "-"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-white w-4 text-center", children: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-7 h-7 rounded-full border flex items-center justify-center text-white/60",
                      style: { borderColor: "rgba(255,255,255,0.15)" },
                      children: "+"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "pt-2 border-t",
                  style: { borderColor: "rgba(255,255,255,0.07)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/50 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "2 × ",
                        trek.price
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "₹",
                        (priceNum * 2).toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/50 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST (5%)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "₹",
                        Math.round(priceNum * 2 * 0.05).toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex justify-between text-sm font-bold mt-1",
                        style: { color: "#22c55e" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            "₹",
                            Math.round(priceNum * 2 * 1.05).toLocaleString("en-IN")
                          ] })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-full py-2.5 rounded-lg font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity mb-2",
                style: { background: "#E8963A", color: "#0A0E14" },
                "data-ocid": "trek_detail.sidebar_book_button",
                children: "Book Now"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://wa.me/919876543210?text=I want to book ${encodeURIComponent(trek.name)} trek`,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity mb-3",
                    style: { background: "#25D366", color: "#fff" },
                    "data-ocid": "trek_detail.sidebar_whatsapp_button",
                    children: "💬 WhatsApp Quick Book"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/30", children: "🔒 Razorpay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/30", children: "📧 Instant confirmation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/30", children: "🔄 Free reschedule" })
            ] })
          ]
        }
      );
    })() }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-16 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.overview_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground", children: "Trek Overview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: trek.overview ?? trek.description }),
              (trek.keyHighlights ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2", children: (trek.keyHighlights ?? []).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                        style: { background: "#52c99a" }
                      }
                    ),
                    h
                  ]
                },
                h
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 grid grid-cols-2 gap-3", children: [
              { label: "Start Point", value: trek.startPoint, icon: "📍" },
              { label: "Max Altitude", value: trek.maxAltitude, icon: "🏔️" },
              { label: "Distance", value: trek.distance, icon: "📏" },
              { label: "Duration", value: trek.duration, icon: "⏱️" },
              { label: "Difficulty", value: trek.difficulty, icon: "⚡" },
              { label: "Best Time", value: trek.bestTime, icon: "📅" },
              { label: "Group Size", value: trek.groupSize, icon: "👥" },
              { label: "Age Group", value: trek.ageGroup, icon: "🎯" }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-xl border",
                style: {
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-0.5", children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-xs mt-0.5", children: item.value })
                ]
              },
              item.label
            )) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.itinerary_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "Day-by-Day Itinerary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: trek.itinerary.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl overflow-hidden border transition-all duration-200",
                style: {
                  borderColor: activeDay === i ? "rgba(232,150,58,0.4)" : "rgba(255,255,255,0.07)",
                  background: activeDay === i ? "rgba(232,150,58,0.03)" : "rgba(255,255,255,0.02)"
                },
                "data-ocid": `trek_detail.itinerary.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full flex items-center gap-4 px-5 py-4 text-left",
                      onClick: () => setActiveDay(activeDay === i ? null : i),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold",
                            style: {
                              background: activeDay === i ? "rgba(232,150,58,0.2)" : "rgba(255,255,255,0.06)",
                              color: activeDay === i ? "#E8963A" : "rgba(255,255,255,0.45)"
                            },
                            children: day.day
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: day.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-0.5", children: [
                            day.distanceKm && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              day.distanceKm,
                              " km"
                            ] }),
                            (day.walkingHours ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              day.walkingHours,
                              "h walk"
                            ] }),
                            day.maxAltitude && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              "↑ ",
                              day.maxAltitude.toLocaleString(),
                              " ft"
                            ] }),
                            day.dayDifficulty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-xs font-mono px-1.5 py-0.5 rounded",
                                style: {
                                  background: day.difficulty === "easy" ? "rgba(22,163,74,0.1)" : day.difficulty === "moderate" ? "rgba(217,119,6,0.1)" : "rgba(220,38,38,0.1)",
                                  color: day.difficulty === "easy" ? "#16a34a" : day.difficulty === "moderate" ? "#d97706" : "#dc2626"
                                },
                                children: day.dayDifficulty
                              }
                            )
                          ] })
                        ] }),
                        activeDay === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronUp,
                          {
                            className: "w-4 h-4 shrink-0",
                            style: { color: "#E8963A" }
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 shrink-0 text-muted-foreground" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeDay === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.22 },
                      className: "overflow-hidden",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "px-5 pb-5 space-y-4 border-t",
                          style: { borderColor: "rgba(255,255,255,0.06)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pt-4", children: day.description }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
                              day.terrain && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "p-3 rounded-xl",
                                  style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "🏔️ Terrain" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: day.terrain })
                                  ]
                                }
                              ),
                              day.campsite && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "p-3 rounded-xl",
                                  style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "⛺ Campsite" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-semibold", children: day.campsite.name }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                                      day.campsite.altitude.toLocaleString(),
                                      " ft"
                                    ] }),
                                    day.campsite.amenities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: day.campsite.amenities.slice(0, 3).join(" · ") })
                                  ]
                                }
                              ),
                              day.weatherPattern && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "p-3 rounded-xl",
                                  style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "🌤️ Weather" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: day.weatherPattern })
                                  ]
                                }
                              )
                            ] }),
                            day.mealDetail && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "p-4 rounded-xl",
                                style: {
                                  background: "rgba(82,201,154,0.04)",
                                  border: "1px solid rgba(82,201,154,0.12)"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2.5", children: "🍽️ Meals" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                                    {
                                      label: "Breakfast",
                                      v: day.mealDetail.breakfast
                                    },
                                    { label: "Lunch", v: day.mealDetail.lunch },
                                    { label: "Dinner", v: day.mealDetail.dinner }
                                  ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "p",
                                      {
                                        className: "text-xs font-semibold",
                                        style: { color: "#52c99a" },
                                        children: m.label
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: m.v })
                                  ] }, m.label)) }),
                                  day.mealDetail.snacks && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "p",
                                    {
                                      className: "text-xs text-muted-foreground mt-2 pt-2 border-t",
                                      style: { borderColor: "rgba(82,201,154,0.12)" },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "span",
                                          {
                                            className: "font-semibold",
                                            style: { color: "#52c99a" },
                                            children: [
                                              "Snacks:",
                                              " "
                                            ]
                                          }
                                        ),
                                        day.mealDetail.snacks
                                      ]
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                              (day.waterSources ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "p-3 rounded-xl",
                                  style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1.5", children: "💧 Water Sources" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: (day.waterSources ?? []).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "li",
                                      {
                                        className: "text-xs text-foreground flex items-start gap-1.5",
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className: "w-1 h-1 rounded-full shrink-0 mt-1.5",
                                              style: { background: "#52c99a" }
                                            }
                                          ),
                                          w
                                        ]
                                      },
                                      w
                                    )) })
                                  ]
                                }
                              ),
                              day.emergencyExit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "p-3 rounded-xl",
                                  style: {
                                    background: "rgba(239,68,68,0.04)",
                                    border: "1px solid rgba(239,68,68,0.13)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "p",
                                      {
                                        className: "font-mono text-xs uppercase tracking-wide mb-1.5",
                                        style: { color: "#ef4444" },
                                        children: "🚨 Emergency Exit"
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: day.emergencyExit })
                                  ]
                                }
                              )
                            ] }),
                            (day.photographyHighlights ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2", children: "📸 Photography Highlights" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: (day.photographyHighlights ?? []).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs px-2.5 py-1 rounded-full",
                                  style: {
                                    background: "rgba(232,150,58,0.07)",
                                    color: "#E8963A",
                                    border: "1px solid rgba(232,150,58,0.18)"
                                  },
                                  children: h
                                },
                                h
                              )) })
                            ] }),
                            (day.wildlife ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2", children: "🦅 Wildlife" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: (day.wildlife ?? []).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs px-2.5 py-1 rounded-full",
                                  style: {
                                    background: "rgba(82,201,154,0.07)",
                                    color: "#52c99a",
                                    border: "1px solid rgba(82,201,154,0.18)"
                                  },
                                  children: w
                                },
                                w
                              )) })
                            ] }),
                            day.culturalNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "p-3 rounded-xl",
                                style: {
                                  background: "rgba(99,102,241,0.05)",
                                  border: "1px solid rgba(99,102,241,0.13)"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      className: "font-mono text-xs uppercase tracking-wide mb-1",
                                      style: { color: "#818cf8" },
                                      children: "🛕 Cultural Notes"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: day.culturalNotes })
                                ]
                              }
                            ),
                            day.acclimatizationNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "p-3 rounded-xl",
                                style: {
                                  background: "rgba(217,119,6,0.06)",
                                  border: "1px solid rgba(217,119,6,0.18)"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      className: "font-mono text-xs uppercase tracking-wide mb-1",
                                      style: { color: "#d97706" },
                                      children: "⚕️ Acclimatization"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: day.acclimatizationNotes })
                                ]
                              }
                            ),
                            day.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: day.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                className: "text-xs font-mono px-2.5 py-1 rounded-full",
                                style: {
                                  background: "rgba(74,191,219,0.07)",
                                  color: "#4ABFDB",
                                  border: "1px solid rgba(74,191,219,0.18)"
                                },
                                children: [
                                  "✦ ",
                                  h
                                ]
                              },
                              h
                            )) })
                          ]
                        }
                      )
                    }
                  ) })
                ]
              },
              day.day
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AltitudeChart, { trek }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SafetySection, { trek }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "batch-calendar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BatchCalendar, { trek }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, { trek }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.inclusions_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "What's Included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-6 rounded-2xl border",
                  style: {
                    borderColor: "rgba(82,201,154,0.2)",
                    background: "rgba(82,201,154,0.03)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-mono text-xs tracking-widest uppercase mb-4",
                        style: { color: "#52c99a" },
                        children: "✔ Included"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: trek.inclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Check,
                            {
                              className: "w-4 h-4 shrink-0 mt-0.5",
                              style: { color: "#52c99a" }
                            }
                          ),
                          item
                        ]
                      },
                      item
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-6 rounded-2xl border",
                  style: {
                    borderColor: "rgba(220,38,38,0.2)",
                    background: "rgba(220,38,38,0.03)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-mono text-xs tracking-widest uppercase mb-4",
                        style: { color: "#dc2626" },
                        children: "✖ Not Included"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: trek.exclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            X,
                            {
                              className: "w-4 h-4 shrink-0 mt-0.5",
                              style: { color: "#dc2626" }
                            }
                          ),
                          item
                        ]
                      },
                      item
                    )) })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.packing_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "Packing Checklist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: Object.entries(packCats).filter(([, items]) => items.length > 0).map(([cat, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-5 rounded-2xl border",
                style: {
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3", children: [
                    {
                      Clothing: "👕",
                      Equipment: "🎒",
                      Documents: "📄",
                      Medical: "💊",
                      Other: "📦"
                    }[cat] ?? "📦",
                    " ",
                    cat
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const n = new Set(checkedPacking);
                          n.has(item) ? n.delete(item) : n.add(item);
                          setCheckedPacking(n);
                        },
                        className: "w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all",
                        style: {
                          background: checkedPacking.has(item) ? "#52c99a" : "transparent",
                          borderColor: checkedPacking.has(item) ? "#52c99a" : "rgba(255,255,255,0.18)"
                        },
                        "aria-label": `Mark ${item}`,
                        children: checkedPacking.has(item) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", color: "#0a1a11" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs transition-all",
                        style: {
                          color: checkedPacking.has(item) ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.65)"
                        },
                        children: item
                      }
                    )
                  ] }, item)) })
                ]
              },
              cat
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.route_map_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "Trek Route" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl overflow-hidden border relative",
                style: {
                  borderColor: "rgba(82,201,154,0.15)",
                  background: "#0a1a11",
                  minHeight: "280px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      viewBox: "0 0 800 280",
                      className: "w-full",
                      "aria-label": "Trek route map",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Trek Route Map" }),
                        [70, 110, 150, 190, 230].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: `M 0 ${y} Q 100 ${y - 12} 200 ${y} Q 300 ${y + 12} 400 ${y} Q 500 ${y - 10} 600 ${y} Q 700 ${y + 10} 800 ${y}`,
                            fill: "none",
                            stroke: "rgba(82,201,154,0.06)",
                            strokeWidth: "1"
                          },
                          y
                        )),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M 80 220 Q 160 185 240 148 Q 320 110 380 80 Q 440 52 520 72 Q 578 88 640 125",
                            fill: "none",
                            stroke: "#E8963A",
                            strokeWidth: "3",
                            strokeDasharray: "8 4",
                            strokeLinecap: "round"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M 80 220 Q 160 185 240 148 Q 320 110 380 80 Q 440 52 520 72 Q 578 88 640 125 L 640 260 L 80 260 Z",
                            fill: "rgba(82,201,154,0.07)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "mg", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#52c99a", stopOpacity: "0.15" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#52c99a", stopOpacity: "0.02" })
                        ] }) }),
                        trek.itinerary.slice(0, 5).map((day, i) => {
                          const pos = [
                            [80, 220],
                            [200, 160],
                            [310, 120],
                            [430, 65],
                            [580, 95]
                          ];
                          const [px2, py2] = pos[i] ?? [80 + i * 100, 170];
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: px2,
                                cy: py2,
                                r: "7",
                                fill: "#E8963A",
                                stroke: "#0a1a11",
                                strokeWidth: "2"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "text",
                              {
                                x: px2,
                                y: py2 - 12,
                                fill: "rgba(255,255,255,0.65)",
                                fontSize: "9",
                                textAnchor: "middle",
                                fontFamily: "monospace",
                                children: [
                                  "Day ",
                                  day.day
                                ]
                              }
                            )
                          ] }, day.day);
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "polygon",
                          {
                            points: "380,40 392,80 368,80",
                            fill: "none",
                            stroke: "#52c99a",
                            strokeWidth: "1.5"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "text",
                          {
                            x: "380",
                            y: "35",
                            fill: "#52c99a",
                            fontSize: "8",
                            textAnchor: "middle",
                            fontFamily: "monospace",
                            children: "SUMMIT"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-4 flex gap-4 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1.5",
                        style: { color: "rgba(255,255,255,0.45)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-5 border-t-2 border-dashed",
                              style: { borderColor: "#E8963A" }
                            }
                          ),
                          "Route"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1.5",
                        style: { color: "rgba(255,255,255,0.45)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-2.5 h-2.5 rounded-full",
                              style: { background: "#E8963A" }
                            }
                          ),
                          "Camp"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1.5",
                        style: { color: "rgba(255,255,255,0.45)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-2.5 h-2.5",
                              style: {
                                background: "#52c99a",
                                clipPath: "polygon(50% 0%,0% 100%,100% 100%)"
                              }
                            }
                          ),
                          "Summit"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.gear_rental_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground", children: "Rent Gear for This Trek" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gear", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "text-sm font-mono uppercase tracking-wide flex items-center gap-1 hover:opacity-75 transition-opacity",
                  style: { color: "#E8963A" },
                  children: [
                    "Full Catalog ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "High-quality gear available at pickup point. No investment in equipment you'll rarely use." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: GEAR_RENTALS.map((gear, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "p-4 rounded-2xl border text-center transition-all duration-200 hover:scale-[1.03] cursor-pointer w-full",
                style: {
                  background: checkedGear.has(gear.id) ? "rgba(82,201,154,0.1)" : "rgba(255,255,255,0.02)",
                  borderColor: checkedGear.has(gear.id) ? "rgba(82,201,154,0.4)" : "rgba(255,255,255,0.07)"
                },
                onClick: () => {
                  const n = new Set(checkedGear);
                  n.has(gear.id) ? n.delete(gear.id) : n.add(gear.id);
                  setCheckedGear(n);
                },
                "data-ocid": `trek_detail.gear.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1.5", children: gear.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-0.5 leading-tight", children: gear.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: gear.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold", style: { color: "#E8963A" }, children: [
                    "₹",
                    gear.daily,
                    "/day"
                  ] }),
                  checkedGear.has(gear.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "block text-xs mt-1.5 font-mono",
                      style: { color: "#52c99a" },
                      children: "✓ Added"
                    }
                  )
                ]
              },
              gear.id
            )) }),
            checkedGear.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-4 p-4 rounded-xl flex items-center justify-between",
                style: {
                  background: "rgba(82,201,154,0.07)",
                  border: "1px solid rgba(82,201,154,0.18)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#52c99a" }, children: [
                      checkedGear.size,
                      " item",
                      checkedGear.size > 1 ? "s" : ""
                    ] }),
                    " ",
                    "added to your booking"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "px-4 py-2 rounded-full font-mono text-xs font-bold tracking-wide uppercase hover:opacity-90 transition-opacity",
                      style: { background: "#52c99a", color: "#0a1a11" },
                      "data-ocid": "trek_detail.gear_proceed_button",
                      children: "Proceed to Booking"
                    }
                  ) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.how_to_reach_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "How to Reach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              { mode: "By Rail", icon: "🚂", detail: trek.nearestRailhead },
              { mode: "By Air", icon: "✈️", detail: trek.nearestAirport },
              { mode: "Start Point", icon: "📍", detail: trek.startPoint }
            ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-5 rounded-xl border",
                style: {
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: m.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1", children: m.mode }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: m.detail })
                ]
              },
              m.mode
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.faqs_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: trek.faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FAQItem,
              {
                question: faq.question,
                answer: faq.answer,
                index: i
              },
              faq.question
            )) })
          ]
        }
      ),
      similarTreks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          "data-ocid": "trek_detail.similar_treks_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-6", children: "You Might Also Like" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: similarTreks.map((t, i) => {
              const matchTags = [];
              if (t.region === trek.region)
                matchTags.push({
                  label: "Same State",
                  color: "#3b82f6",
                  bg: "rgba(59,130,246,0.12)"
                });
              if (t.difficulty === trek.difficulty)
                matchTags.push({
                  label: "Similar Difficulty",
                  color: "#22c55e",
                  bg: "rgba(34,197,94,0.12)"
                });
              if (t.bestTime === trek.bestTime)
                matchTags.push({
                  label: "Same Season",
                  color: "#f59e0b",
                  bg: "rgba(245,158,11,0.12)"
                });
              if (Math.abs(
                parseNumericStr(t.maxAltitude) - parseNumericStr(trek.maxAltitude)
              ) <= 500)
                matchTags.push({
                  label: "Similar Altitude",
                  color: "#a855f7",
                  bg: "rgba(168,85,247,0.12)"
                });
              return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/trek/${t.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "group rounded-2xl overflow-hidden border transition-all duration-200 hover:scale-[1.02]",
                  style: { border: "1px solid rgba(255,255,255,0.07)" },
                  "data-ocid": `trek_detail.similar_trek.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75",
                          alt: t.name,
                          className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute top-2.5 left-2.5 text-xs font-mono px-2 py-0.5 rounded",
                          style: {
                            background: diffColor(t.difficulty).bg,
                            color: diffColor(t.difficulty).text
                          },
                          children: t.difficulty
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: matchTags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full",
                          style: {
                            background: tag.bg,
                            color: tag.color,
                            border: `1px solid ${tag.color}30`
                          },
                          children: tag.label
                        },
                        tag.label
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base italic text-foreground mb-1", children: t.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t.duration }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-sm font-bold",
                            style: { color: "#E8963A" },
                            children: t.price
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }, t.id);
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "rounded-2xl p-10 text-center",
          style: {
            background: "linear-gradient(135deg, rgba(232,150,58,0.1) 0%, rgba(82,201,154,0.07) 100%)",
            border: "1px solid rgba(232,150,58,0.22)"
          },
          "data-ocid": "trek_detail.cta_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                className: "w-8 h-8 mx-auto mb-4",
                style: { color: "#E8963A" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-3", children: "Ready to Answer the Mountain's Call?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
              "Secure your spot on ",
              trek.name,
              ". Limited groups, maximum experience."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/booking/${trek.id}/select-batch`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  className: "font-mono text-xs tracking-widest uppercase",
                  style: { background: "#E8963A", color: "#0A0E14" },
                  "data-ocid": "trek_detail.book_trek_button",
                  children: "Book This Trek"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://wa.me/919876543210?text=Hi, I want to book ${encodeURIComponent(trek.name)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "font-mono text-xs tracking-wider uppercase",
                      style: { borderColor: "#25D366", color: "#25D366" },
                      "data-ocid": "trek_detail.whatsapp_cta_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 w-4 h-4" }),
                        "WhatsApp Us"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "font-mono text-xs tracking-wider uppercase",
                  "data-ocid": "trek_detail.view_all_button",
                  children: [
                    "View All Treks ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6 justify-center mt-7", children: [
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
                label: "Safety First",
                sub: "NIM/WFR certified guides"
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
                label: "30% Advance",
                sub: "Pay rest on trek day"
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                label: "Small Groups",
                sub: "Max 14 trekkers"
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                label: "GPS Navigation",
                sub: "Satellite phone"
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#52c99a" }, children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.sub })
              ] })
            ] }, item.label)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#0d1f17",
          borderTop: "1px solid rgba(82,201,154,0.2)",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr 1fr",
          height: "56px",
          alignItems: "center"
        },
        className: "md:hidden",
        "data-ocid": "trek_detail.mobile_sticky_bar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#E8963A"
              },
              children: [
                "From",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                trek.price
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `/booking/${trek.id}/select-batch`,
              style: {
                background: "#E8963A",
                color: "#0A0E14",
                fontWeight: 700,
                fontSize: "14px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 4px",
                borderRadius: "8px",
                textDecoration: "none"
              },
              "data-ocid": "trek_detail.mobile_book_button",
              children: "BOOK NOW"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/919876543210?text=Book ${encodeURIComponent(trek.name)}`,
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "11px",
                color: "#25d366",
                textDecoration: "none"
              },
              "data-ocid": "trek_detail.mobile_whatsapp_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "20px" }, children: "💬" }),
                "WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+919876543210",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "11px",
                color: "#52c99a",
                textDecoration: "none"
              },
              "data-ocid": "trek_detail.mobile_call_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "20px" }, children: "📞" }),
                "Call"
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  TrekDetailPage as default
};
