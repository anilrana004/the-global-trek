import { c as createLucideIcon, u as useParams, n as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, a as Mountain, M as MapPin } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { C as Calendar } from "./calendar-BB9CmmUM.js";
import { U as Users } from "./users-GoUlh9qe.js";
import { C as ChevronRight } from "./chevron-right-BS-1H6f5.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { T as TrendingUp } from "./trending-up-B6L0Gg4b.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode);
const STEPS = ["Batch", "Details", "Add-ons", "Pay"];
function BookingProgress({ current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0 justify-center py-6",
      "data-ocid": "booking.progress",
      children: STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0 contents", children: [
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
      ] }, step))
    }
  );
}
function TrekSummaryBox({ slug }) {
  const trekData = {
    kedarkantha: {
      name: "Kedarkantha Trek",
      location: "Sankri, Uttarkashi",
      duration: "5 Days / 4 Nights",
      altitude: "3,810m (12,500 ft)",
      difficulty: "Easy to Moderate"
    },
    "chopta-tungnath": {
      name: "Chopta Tungnath Trek",
      location: "Chopta, Uttarakhand",
      duration: "3 Days / 2 Nights",
      altitude: "4,000m (13,123 ft)",
      difficulty: "Easy to Moderate"
    },
    "hampta-pass": {
      name: "Hampta Pass Trek",
      location: "Manali, Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      altitude: "4,270m (14,009 ft)",
      difficulty: "Moderate"
    },
    "har-ki-dun": {
      name: "Har Ki Dun Trek",
      location: "Sankri, Uttarkashi",
      duration: "8 Days / 7 Nights",
      altitude: "3,566m (11,700 ft)",
      difficulty: "Moderate"
    },
    "char-dham": {
      name: "Char Dham Yatra",
      location: "Uttarakhand",
      duration: "14 Days / 13 Nights",
      altitude: "Multiple Shrines",
      difficulty: "Pilgrimage"
    }
  };
  const trek = trekData[slug] ?? {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    location: "Himalayas",
    duration: "5 Days",
    altitude: "3,800m",
    difficulty: "Moderate"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl border border-[var(--gt-green-100)] bg-[var(--gt-green-50)] p-4 flex flex-wrap gap-4 items-center",
      "data-ocid": "booking.trek_summary",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5 text-[var(--gt-green-700)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold font-display text-[var(--gt-green-900)]", children: trek.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-[var(--gt-gray-600)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
          trek.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-[var(--gt-gray-600)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          trek.duration
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-[var(--gt-gray-600)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
          trek.altitude
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "bg-[var(--gt-green-100)] text-[var(--gt-green-800)] border-[var(--gt-green-500)]/30 font-mono",
            children: trek.difficulty
          }
        )
      ]
    }
  );
}
const BATCHES = [
  {
    id: "b1",
    trekId: "1",
    startDate: "2026-12-15",
    endDate: "2026-12-19",
    maxCapacity: 15,
    bookedCount: 15,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b2",
    trekId: "1",
    startDate: "2026-12-20",
    endDate: "2026-12-24",
    maxCapacity: 15,
    bookedCount: 7,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b3",
    trekId: "1",
    startDate: "2026-12-25",
    endDate: "2026-12-29",
    maxCapacity: 15,
    bookedCount: 3,
    basePrice: 9500,
    batchType: "Christmas"
  },
  {
    id: "b4",
    trekId: "1",
    startDate: "2026-12-30",
    endDate: "2027-01-03",
    maxCapacity: 15,
    bookedCount: 11,
    basePrice: 10500,
    batchType: "New Year"
  },
  {
    id: "b5",
    trekId: "1",
    startDate: "2027-01-05",
    endDate: "2027-01-09",
    maxCapacity: 15,
    bookedCount: 3,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b6",
    trekId: "1",
    startDate: "2027-01-15",
    endDate: "2027-01-19",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b7",
    trekId: "1",
    startDate: "2027-01-25",
    endDate: "2027-01-29",
    maxCapacity: 15,
    bookedCount: 2,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b8",
    trekId: "1",
    startDate: "2027-02-05",
    endDate: "2027-02-09",
    maxCapacity: 15,
    bookedCount: 1,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b9",
    trekId: "1",
    startDate: "2027-02-15",
    endDate: "2027-02-19",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b10",
    trekId: "1",
    startDate: "2027-02-25",
    endDate: "2027-03-01",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular"
  }
];
function getSeatsStatus(batch) {
  const left = batch.maxCapacity - batch.bookedCount;
  if (left === 0)
    return {
      label: "FULL",
      color: "bg-[var(--gt-red)]/10 text-[var(--gt-red)] border-[var(--gt-red)]/30"
    };
  if (left <= 4)
    return {
      label: `${left} left — FAST!`,
      color: "bg-amber-100 text-amber-700 border-amber-300"
    };
  return {
    label: `${left} / ${batch.maxCapacity} available`,
    color: "bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-[var(--gt-green-500)]/30"
  };
}
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function groupByMonth(batches) {
  const groups = {};
  for (const b of batches) {
    const key = new Date(b.startDate).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric"
    });
    if (!groups[key]) groups[key] = [];
    groups[key].push(b);
  }
  return groups;
}
function SelectBatch() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/select-batch" });
  const navigate = useNavigate();
  const [view, setView] = reactExports.useState("list");
  const [selectedBatch, setSelectedBatch] = reactExports.useState(null);
  const grouped = groupByMonth(BATCHES);
  function handleSelect(batchId) {
    setSelectedBatch(batchId);
  }
  function handleContinue() {
    if (!selectedBatch) return;
    void navigate({
      to: "/booking/$trekSlug/participants",
      params: { trekSlug }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[var(--gt-green-50)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingProgress, { current: 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrekSummaryBox, { slug: trekSlug }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-8 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-[var(--gt-green-900)]", children: "Select a Batch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--gt-gray-600)] text-sm mt-1", children: "Choose your departure date below" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-2 bg-white rounded-lg border border-[var(--gt-gray-200)] p-1",
          "data-ocid": "batch.view_toggle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setView("list"),
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-mono transition-colors ${view === "list" ? "bg-[var(--gt-green-700)] text-white" : "text-[var(--gt-gray-600)] hover:text-[var(--gt-green-700)]"}`,
                "data-ocid": "batch.list_view_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" }),
                  " List"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setView("calendar"),
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-mono transition-colors ${view === "calendar" ? "bg-[var(--gt-green-700)] text-white" : "text-[var(--gt-gray-600)] hover:text-[var(--gt-green-700)]"}`,
                "data-ocid": "batch.calendar_view_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                  " Calendar"
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-amber-600 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Group discount:" }),
        " Book 6 or more persons and get",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10% off" }),
        " — applied automatically at checkout."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block space-y-8", children: Object.entries(grouped).map(([month, batches]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold font-display text-[var(--gt-green-800)] mb-3 border-b border-[var(--gt-green-100)] pb-2", children: month }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-[var(--gt-gray-200)] overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-[var(--gt-green-50)] text-[var(--gt-gray-600)] font-mono text-xs uppercase tracking-wide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3", children: "Dates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Duration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Seats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3", children: "Price/Person" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[var(--gt-gray-100)]", children: batches.map((batch) => {
          const seats = getSeatsStatus(batch);
          const isFull = batch.bookedCount >= batch.maxCapacity;
          const isSelected = selectedBatch === batch.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: `transition-colors ${isFull ? "opacity-60" : isSelected ? "bg-[var(--gt-green-50)]" : "hover:bg-[var(--gt-gray-50)]"}`,
              "data-ocid": `batch.row.${batch.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 font-semibold text-[var(--gt-green-900)]", children: [
                  formatDate(batch.startDate),
                  " –",
                  " ",
                  formatDate(batch.endDate)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-[var(--gt-gray-600)]", children: "5 Days / 4 Nights" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "font-mono text-xs",
                    children: batch.batchType
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${seats.color}`,
                    children: seats.label
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-right font-bold text-[var(--gt-green-800)]", children: [
                  "₹",
                  batch.basePrice.toLocaleString("en-IN")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-center", children: isFull ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs text-[var(--gt-gray-400)]",
                    "data-ocid": `batch.full_label.${batch.id}`,
                    children: "Sold Out"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelect(batch.id),
                    className: `px-4 py-1.5 rounded-lg text-sm font-semibold font-mono transition-all ${isSelected ? "bg-[var(--gt-green-700)] text-white" : "bg-[var(--gt-green-100)] text-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] hover:text-white"}`,
                    "data-ocid": `batch.select_button.${batch.id}`,
                    children: isSelected ? "✓ Selected" : "Select"
                  }
                ) })
              ]
            },
            batch.id
          );
        }) })
      ] }) })
    ] }, month)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-8", children: Object.entries(grouped).map(([month, batches]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold font-display text-[var(--gt-green-800)] mb-3", children: month }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: batches.map((batch) => {
        const seats = getSeatsStatus(batch);
        const isFull = batch.bookedCount >= batch.maxCapacity;
        const isSelected = selectedBatch === batch.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-white rounded-xl border p-4 transition-all ${isSelected ? "border-[var(--gt-green-700)] shadow-md" : "border-[var(--gt-gray-200)]"} ${isFull ? "opacity-60" : ""}`,
            "data-ocid": `batch.card.${batch.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-green-900)] text-sm", children: [
                    formatDate(batch.startDate),
                    " –",
                    " ",
                    formatDate(batch.endDate)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[var(--gt-gray-600)] mt-0.5", children: [
                    "5 Days / 4 Nights · ",
                    batch.batchType
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-[var(--gt-green-800)] text-base", children: [
                  "₹",
                  batch.basePrice.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex px-2 py-0.5 rounded-full text-xs font-semibold border ${seats.color}`,
                    children: seats.label
                  }
                ),
                !isFull && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelect(batch.id),
                    className: `px-4 py-1.5 rounded-lg text-sm font-semibold font-mono ${isSelected ? "bg-[var(--gt-green-700)] text-white" : "bg-[var(--gt-green-100)] text-[var(--gt-green-800)]"}`,
                    "data-ocid": `batch.select_mobile.${batch.id}`,
                    children: isSelected ? "✓ Selected" : "Select"
                  }
                )
              ] })
            ]
          },
          batch.id
        );
      }) })
    ] }, month)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-6 text-sm text-[var(--gt-gray-600)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-[var(--gt-blue)]" }),
      "Don't see your dates?",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/contact",
          className: "text-[var(--gt-green-700)] underline underline-offset-2 hover:text-[var(--gt-green-600)]",
          "data-ocid": "batch.custom_request_link",
          children: "Request a Custom Batch"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: handleContinue,
        disabled: !selectedBatch,
        className: "bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white px-8 py-3 rounded-xl font-semibold font-mono text-base gap-2",
        "data-ocid": "batch.continue_button",
        children: [
          "Continue to Participant Details ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
        ]
      }
    ) })
  ] }) });
}
export {
  SelectBatch as default
};
