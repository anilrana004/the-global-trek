import { t as useParams, G as useNavigate, H as useBookingStore, r as reactExports, j as jsxRuntimeExports, a as Mountain, B as Button, M as MapPin } from "./index-vYOW-QfD.js";
import { B as BookingProgress } from "./BookingProgress-BCpJb6oh.js";
import { B as Badge } from "./badge-DuvBcwOn.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { S as Star } from "./star-BLOO0ZgP.js";
import { C as Clock } from "./clock-CncI7fGv.js";
import { T as TrendingUp } from "./trending-up-C4HVoG3E.js";
import { U as Users } from "./users-DiG3WeOD.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { S as Shield } from "./shield-DctcqSRy.js";
import { C as ChevronRight } from "./chevron-right--g-LsED4.js";
import "./arrow-left-BujbnMEe.js";
const TREK_BATCHES = [
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
    startDate: "2027-02-05",
    endDate: "2027-02-09",
    maxCapacity: 15,
    bookedCount: 1,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b8",
    trekId: "1",
    startDate: "2027-02-20",
    endDate: "2027-02-24",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular"
  },
  {
    id: "b9",
    trekId: "1",
    startDate: "2027-03-10",
    endDate: "2027-03-14",
    maxCapacity: 15,
    bookedCount: 2,
    basePrice: 7500,
    batchType: "Regular"
  },
  {
    id: "b10",
    trekId: "1",
    startDate: "2027-04-05",
    endDate: "2027-04-09",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 7500,
    batchType: "Regular"
  }
];
function getBatches(slug) {
  return TREK_BATCHES.map((b) => ({ ...b, trekId: slug }));
}
function getSeatsInfo(batch) {
  const available = batch.maxCapacity - batch.bookedCount;
  if (available === 0)
    return {
      label: "SOLD OUT",
      color: "bg-red-50 text-red-600 border-red-200",
      available: 0
    };
  if (available <= 3)
    return {
      label: `${available} seats — Almost Full!`,
      color: "bg-red-50 text-red-600 border-red-200",
      available
    };
  if (available <= 6)
    return {
      label: `${available} seats — Filling Fast`,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      available
    };
  return {
    label: `${available} / ${batch.maxCapacity} available`,
    color: "bg-green-50 text-green-700 border-green-200",
    available
  };
}
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function getDurationDays(start, end) {
  return `${Math.round((new Date(end).getTime() - new Date(start).getTime()) / 864e5) + 1} Days`;
}
function groupByMonth(batches) {
  const result = {};
  for (const b of batches) {
    const key = new Date(b.startDate).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric"
    });
    if (!result[key]) result[key] = [];
    result[key].push(b);
  }
  return result;
}
function SelectBatch() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/select-batch" });
  const navigate = useNavigate();
  const { updateBookingState } = useBookingStore();
  const trek = reactExports.useMemo(
    () => treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug]
  );
  const batches = reactExports.useMemo(() => getBatches(trekSlug), [trekSlug]);
  const grouped = reactExports.useMemo(() => groupByMonth(batches), [batches]);
  const months = Object.keys(grouped);
  const [activeMonth, setActiveMonth] = reactExports.useState(months[0] ?? "");
  const [selectedBatch, setSelectedBatch] = reactExports.useState(null);
  const [participantCount, setParticipantCount] = reactExports.useState(2);
  const visibleBatches = grouped[activeMonth] ?? [];
  const basePrice = (selectedBatch == null ? void 0 : selectedBatch.basePrice) ?? (trek == null ? void 0 : trek.priceMin) ?? 8500;
  const subtotal = basePrice * participantCount;
  const isGroupDiscount = participantCount >= 6;
  const discount = isGroupDiscount ? Math.round(subtotal * 0.1) : 0;
  const gst = Math.round((subtotal - discount) * 0.05);
  const total = subtotal - discount + gst;
  function handleContinue() {
    if (!selectedBatch || !trek) return;
    updateBookingState({
      trekSlug,
      trekName: trek.name,
      selectedBatch: {
        id: selectedBatch.id,
        trekId: selectedBatch.trekId,
        startDate: selectedBatch.startDate,
        endDate: selectedBatch.endDate,
        seatsTotal: selectedBatch.maxCapacity,
        seatsAvailable: selectedBatch.maxCapacity - selectedBatch.bookedCount,
        pricePerPerson: selectedBatch.basePrice,
        label: selectedBatch.batchType
      },
      participants: Array.from({ length: participantCount }, () => ({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        mobile: "",
        email: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        medicalConditions: "",
        govtIdType: "",
        govtIdNumber: ""
      })),
      totalAmount: total
    });
    navigate({ to: "/booking/$trekSlug/participants", params: { trekSlug } });
  }
  if (!trek) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { background: "#f8faf9" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-16 h-16 mx-auto mb-4 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Trek Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 mb-4", children: [
            'The trek "',
            trekSlug,
            `" doesn't exist.`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => navigate({ to: "/explore" }),
              style: { background: "#1A7A4C", color: "white" },
              children: "Browse All Treks"
            }
          )
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#f8faf9" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingProgress,
      {
        currentStep: 1,
        trekName: trek.name,
        trekSlug
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-8 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "select_batch.trek_card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-48 h-32 sm:h-auto bg-gradient-to-br from-green-800 to-green-600 relative overflow-hidden flex-shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-10 h-10 text-white opacity-60" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "text-xl font-bold mb-1",
                      style: {
                        fontFamily: "'Playfair Display', serif",
                        color: "#1A7A4C"
                      },
                      children: trek.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-500 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: trek.region })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: trek.rating ?? 4.9 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-xs", children: [
                    "(",
                    trek.reviewCount ?? 247,
                    ")"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                  trek.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
                  trek.maxAltitude
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                  trek.groupSize
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    style: {
                      background: "#e8f5ee",
                      color: "#1A7A4C",
                      border: "1px solid #c1e4ce"
                    },
                    children: trek.difficulty
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    style: {
                      background: "#fff8e6",
                      color: "#b8760a",
                      border: "1px solid #f4d078"
                    },
                    children: trek.bestSeason ?? trek.bestTime.split(",")[0]
                  }
                )
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 overflow-hidden",
          style: { background: "white" },
          "data-ocid": "select_batch.calendar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pt-5 pb-4 border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-lg font-bold flex items-center gap-2",
                style: { fontFamily: "'Playfair Display', serif" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-green-700" }),
                  " Available Batches"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex gap-1 px-4 pt-4 overflow-x-auto",
                "data-ocid": "select_batch.month_tabs",
                children: months.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveMonth(m),
                    "data-ocid": `select_batch.month_tab.${m.replace(/ /g, "_").toLowerCase()}`,
                    className: "px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    style: {
                      background: activeMonth === m ? "#1A7A4C" : "#f3f4f6",
                      color: activeMonth === m ? "white" : "#374151"
                    },
                    children: m
                  },
                  m
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-gray-100", children: [
                "Dates",
                "Duration",
                "Type",
                "Seats",
                "Price/Person",
                "Action"
              ].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: `py-3 px-2 font-semibold text-gray-500 text-xs uppercase tracking-wide ${i >= 4 ? "text-right" : "text-left"} ${i === 5 ? "text-center" : ""}`,
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: visibleBatches.map((batch) => {
                const seats = getSeatsInfo(batch);
                const isSoldOut = seats.available === 0;
                const isSelected = (selectedBatch == null ? void 0 : selectedBatch.id) === batch.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    "data-ocid": `select_batch.batch_row.${batch.id}`,
                    className: "border-b border-gray-50 transition-colors cursor-pointer hover:bg-green-50/30",
                    style: {
                      background: isSelected ? "#f0faf4" : isSoldOut ? "#fafafa" : "white",
                      outline: isSelected ? "2px solid #1A7A4C" : "none",
                      opacity: isSoldOut ? 0.65 : 1
                    },
                    onClick: () => {
                      if (!isSoldOut) setSelectedBatch(batch);
                    },
                    onKeyDown: (e) => {
                      if ((e.key === "Enter" || e.key === " ") && !isSoldOut) {
                        e.preventDefault();
                        setSelectedBatch(batch);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-2 font-medium", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: formatDate(batch.startDate) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-xs", children: [
                          "to ",
                          formatDate(batch.endDate)
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-2 text-gray-600", children: getDurationDays(batch.startDate, batch.endDate) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-xs",
                          style: {
                            background: batch.batchType !== "Regular" ? "#fff8e6" : "transparent",
                            color: batch.batchType !== "Regular" ? "#b8760a" : "#6b7280",
                            borderColor: batch.batchType !== "Regular" ? "#f4d078" : "#e5e7eb"
                          },
                          children: batch.batchType
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${seats.color}`,
                          children: seats.label
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "td",
                        {
                          className: "py-3.5 px-2 text-right font-bold",
                          style: { color: "#1A7A4C" },
                          children: [
                            "₹",
                            batch.basePrice.toLocaleString("en-IN")
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: isSoldOut,
                          "data-ocid": `select_batch.select_button.${batch.id}`,
                          onClick: (e) => {
                            e.stopPropagation();
                            if (!isSoldOut) setSelectedBatch(batch);
                          },
                          className: "px-4 py-1.5 rounded-lg text-sm font-semibold transition-all",
                          style: {
                            background: isSelected ? "#1A7A4C" : isSoldOut ? "#e5e7eb" : "#e8f5ee",
                            color: isSelected ? "white" : isSoldOut ? "#9ca3af" : "#1A7A4C",
                            cursor: isSoldOut ? "not-allowed" : "pointer"
                          },
                          children: isSelected ? "✓ Selected" : isSoldOut ? "Full" : "Select"
                        }
                      ) })
                    ]
                  },
                  batch.id
                );
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-4 text-xs text-gray-500 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5" }),
              " All prices include meals, accommodation, guide, permits & transport."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-green-100 mb-6 p-6",
          style: { background: "white" },
          "data-ocid": "select_batch.participants_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base mb-4", children: "Number of Participants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "select_batch.participants_minus",
                    onClick: () => setParticipantCount((c) => Math.max(1, c - 1)),
                    className: "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-colors",
                    style: {
                      background: participantCount <= 1 ? "#f3f4f6" : "#e8f5ee",
                      color: participantCount <= 1 ? "#9ca3af" : "#1A7A4C",
                      border: "1px solid #e5e7eb"
                    },
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold w-8 text-center", children: participantCount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "select_batch.participants_plus",
                    onClick: () => setParticipantCount((c) => Math.min(15, c + 1)),
                    className: "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-colors",
                    style: {
                      background: participantCount >= 15 ? "#f3f4f6" : "#e8f5ee",
                      color: participantCount >= 15 ? "#9ca3af" : "#1A7A4C",
                      border: "1px solid #e5e7eb"
                    },
                    children: "+"
                  }
                )
              ] }),
              isGroupDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-3 py-1.5 rounded-full text-sm font-medium",
                  style: { background: "#fff8e6", color: "#b8760a" },
                  children: "🎉 Group discount: 10% off for 6+ trekkers!"
                }
              ),
              !isGroupDiscount && participantCount >= 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
                "Add ",
                6 - participantCount,
                " more for a",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", style: { color: "#1A7A4C" }, children: "10% group discount" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-5 rounded-xl p-4 space-y-2",
                style: { background: "#f8faf9", border: "1px solid #e8f5ee" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      participantCount,
                      " × ₹",
                      basePrice.toLocaleString("en-IN"),
                      "/person"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      subtotal.toLocaleString("en-IN")
                    ] })
                  ] }),
                  isGroupDiscount && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex justify-between text-sm font-medium",
                      style: { color: "#1A7A4C" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Group discount (10%)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "−₹",
                          discount.toLocaleString("en-IN")
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-gray-500", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST (5%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      gst.toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base pt-2 border-t border-green-100", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A7A4C" }, children: [
                      "₹",
                      total.toLocaleString("en-IN")
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center mb-6", children: [
        "🔒 Secure Razorpay",
        "✅ 500+ Happy Trekkers",
        "🔄 Free Reschedule Once",
        "📧 Instant Confirmation"
      ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: b }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleContinue,
          disabled: !selectedBatch,
          "data-ocid": "select_batch.continue_button",
          className: "w-full h-14 text-base font-bold rounded-xl",
          style: {
            background: selectedBatch ? "#F4A623" : "#e5e7eb",
            color: selectedBatch ? "white" : "#9ca3af"
          },
          children: [
            "Continue to Participants ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-5 h-5" })
          ]
        }
      ),
      !selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-gray-500 mt-2", children: "Please select a batch above to continue" })
    ] })
  ] });
}
export {
  SelectBatch as default
};
