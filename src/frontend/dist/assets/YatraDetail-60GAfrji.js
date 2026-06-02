import { u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BBTrFTBe.js";
import { y as yatraData } from "./yatra-DYV3tsLc.js";
function QuickFactsBadge({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center min-w-[80px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mb-0.5", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/60 uppercase tracking-wide font-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white font-label leading-tight text-center", children: value })
  ] });
}
function SectionHeading({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h2",
    {
      className: "font-display text-2xl md:text-3xl font-bold mb-6",
      style: { fontFamily: "'Playfair Display', serif", color: "#0A2E1A" },
      children
    }
  );
}
function DimBar({ value, max = 5 }) {
  const pct = value / max * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "h-full rounded-full",
      style: { width: `${pct}%`, background: "#145C38" }
    }
  ) });
}
function BatchStatusPill({ status }) {
  const map = {
    available: { label: "Available", bg: "#D1FAE5", text: "#065F46" },
    limited: { label: "Limited", bg: "#FEF3C7", text: "#92400E" },
    filling_fast: { label: "Filling Fast", bg: "#FDE68A", text: "#78350F" },
    almost_full: { label: "Almost Full", bg: "#FED7AA", text: "#C2410C" },
    sold_out: { label: "Sold Out", bg: "#FEE2E2", text: "#991B1B" },
    waitlist: { label: "Waitlist", bg: "#E0E7FF", text: "#3730A3" }
  };
  const s = map[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "px-2.5 py-1 rounded-full text-xs font-bold font-label",
      style: { background: s.bg, color: s.text },
      children: s.label
    }
  );
}
function StarRating({ value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: {
        color: s <= Math.round(value) ? "#F4A623" : "#D1D5DB",
        fontSize: 14
      },
      children: "★"
    },
    s
  )) });
}
function SafetySection({ safety }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.safety_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "🛡 Safety Protocol & AMS Management" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm leading-relaxed", children: "High-altitude pilgrimage sites present unique medical challenges, especially for first-time visitors and elderly pilgrims. Every Global Trek yatra group is supported by trained, certified staff with full emergency infrastructure." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl border border-border p-5 mb-5 flex gap-4 items-start",
        style: { background: "#F0FAF4" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0",
              style: { background: "#145C38" },
              children: "👨‍🧗"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-sm text-foreground", children: safety.guideInfo.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: safety.guideInfo.certification }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", style: { color: "#145C38" }, children: safety.guideInfo.experience }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-1 flex-wrap", children: safety.guideInfo.languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2 py-0.5 rounded-full text-xs bg-muted font-label",
                children: l
              },
              l
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5", children: [
      {
        icon: "📡",
        label: "Satellite Phone",
        value: `${safety.satellitePhone.model} — ${safety.satellitePhone.coverage}`
      },
      {
        icon: "🚁",
        label: "Helicopter LZ",
        value: `${safety.helicopterLandingZone.location} (${safety.helicopterLandingZone.coordinates})`
      },
      {
        icon: "🏥",
        label: "Nearest Hospital",
        value: `${safety.nearestHospital.name} — ${safety.nearestHospital.distance} · ${safety.nearestHospital.phone}`
      },
      {
        icon: "🧪",
        label: "Oxygen Cylinders",
        value: `${safety.oxygenCylinders.count}× ${safety.oxygenCylinders.capacity} at: ${safety.oxygenCylinders.locations.join(", ")}`
      },
      {
        icon: "💊",
        label: "Key Medications",
        value: `${safety.firstAidKit.medications.slice(0, 3).join(" · ")} +more`
      },
      { icon: "📋", label: "Team Ratio", value: safety.teamRatio }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex gap-3 p-3 rounded-xl border border-border bg-background",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: item.value })
          ] })
        ]
      },
      item.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h3",
      {
        className: "font-label font-bold text-base mb-3",
        style: { color: "#0A2E1A" },
        children: "AMS Recognition & Response Protocol"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
      {
        stage: "Stage 1 — Mild AMS",
        color: "#FEF3C7",
        border: "#F59E0B",
        text: "#78350F",
        data: safety.amsProtocol.stage1
      },
      {
        stage: "Stage 2 — Moderate AMS",
        color: "#FED7AA",
        border: "#F97316",
        text: "#C2410C",
        data: safety.amsProtocol.stage2
      },
      {
        stage: "Stage 3 — Severe (HACE/HAPE)",
        color: "#FEE2E2",
        border: "#EF4444",
        text: "#991B1B",
        data: safety.amsProtocol.stage3
      }
    ].map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "details",
      {
        className: "rounded-xl border",
        style: { borderColor: stage.border, background: stage.color },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "summary",
            {
              className: "flex items-center gap-2 p-4 cursor-pointer list-none select-none font-label font-bold text-sm",
              style: { color: stage.text },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠️" }),
                " ",
                stage.stage
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 text-xs space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-1", children: "Symptoms:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-0.5 text-muted-foreground", children: stage.data.symptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, s)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-1", children: "Treatment:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: stage.data.treatment })
            ] })
          ] })
        ]
      },
      stage.stage
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-5 p-4 rounded-xl",
        style: { background: "#FEE2E2", border: "1px solid #EF4444" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold font-label text-sm mb-3",
              style: { color: "#991B1B" },
              children: "🆘 Emergency Contacts"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: safety.emergencyContacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              " (",
              c.role,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${c.phone}`,
                className: "ml-1 font-bold",
                style: { color: "#145C38" },
                children: c.phone
              }
            )
          ] }, c.phone)) })
        ]
      }
    )
  ] });
}
function BatchCalendar({
  batches,
  yatraSlug
}) {
  const [selectedBatch, setSelectedBatch] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.batch_calendar_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "📅 Batch Calendar 2026 — Book Your Dates" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: batches.map((b, idx) => {
      const start = new Date(b.startDate);
      const end = new Date(b.endDate);
      const isSelected = selectedBatch === b.id;
      const soldOut = b.status === "sold_out";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "rounded-2xl border p-4 cursor-pointer transition-all duration-200 w-full text-left",
          style: {
            borderColor: isSelected ? "#145C38" : "#E5E7EB",
            background: isSelected ? "#F0FAF4" : "white",
            opacity: soldOut ? 0.6 : 1
          },
          onClick: () => !soldOut && setSelectedBatch(isSelected ? null : b.id),
          "data-ocid": `yatra_detail.batch.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center min-w-[52px] p-2 rounded-xl",
                    style: { background: "#145C38" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-label", children: start.toLocaleString("en-IN", { month: "short" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xl font-bold font-display", children: start.getDate() })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-label font-bold text-sm text-foreground", children: [
                    start.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long"
                    }),
                    " ",
                    "–",
                    " ",
                    end.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    "Guide: ",
                    b.guide,
                    " · ",
                    b.meetingPoint
                  ] }),
                  b.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "#145C38" },
                      children: b.notes
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BatchStatusPill, { status: b.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  b.availableSeats,
                  " seats left"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-display font-bold",
                    style: { color: "#0A2E1A" },
                    children: [
                      "₹",
                      b.price.toLocaleString()
                    ]
                  }
                )
              ] })
            ] }),
            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border space-y-3", children: [
              b.discounts && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                b.discounts.group5Plus > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs px-2.5 py-1 rounded-full font-label",
                    style: { background: "#D1FAE5", color: "#065F46" },
                    children: [
                      "👥 Group 5+ = ",
                      b.discounts.group5Plus,
                      "% off"
                    ]
                  }
                ),
                b.discounts.earlyBird > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs px-2.5 py-1 rounded-full font-label",
                    style: { background: "#E0E7FF", color: "#3730A3" },
                    children: [
                      "🐦 Early Bird = ",
                      b.discounts.earlyBird,
                      "% off"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/booking/$trekSlug/select-batch",
                    params: { trekSlug: yatraSlug },
                    className: "py-3 rounded-xl text-center font-label font-bold text-sm",
                    style: { background: "#F4A623", color: "#0A2E1A" },
                    "data-ocid": "yatra_detail.book_batch_button",
                    children: "Book This Batch →"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `https://wa.me/919876543210?text=Batch ${b.startDate} ${yatraSlug}`,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "py-3 rounded-xl text-center font-label font-bold text-sm border",
                    style: { borderColor: "#25D366", color: "#25D366" },
                    "data-ocid": "yatra_detail.whatsapp_batch_button",
                    children: "WhatsApp Enquiry"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-1", children: "Full Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "₹",
                    b.price.toLocaleString(),
                    " · Instant confirmation"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-1", children: "30% Advance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "₹",
                    Math.round(b.price * 0.3).toLocaleString(),
                    " now · Balance 7 days before"
                  ] })
                ] })
              ] })
            ] })
          ]
        },
        b.id
      );
    }) })
  ] });
}
function ReviewsSection({ reviews }) {
  const [filterMonth, setFilterMonth] = reactExports.useState(0);
  const [filterGroup, setFilterGroup] = reactExports.useState("all");
  const filtered = reviews.filter((r) => {
    if (filterMonth > 0 && r.month !== filterMonth) return false;
    if (filterGroup !== "all" && r.groupType !== filterGroup) return false;
    return true;
  });
  const avg = (key) => reviews.length > 0 ? (reviews.reduce((s, r) => s + r.dimensions[key], 0) / reviews.length).toFixed(1) : "—";
  const months = [
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
  const overallAvg = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.dimensions.overall, 0) / reviews.length).toFixed(1) : "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.reviews_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "⭐ Pilgrim Reviews" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-5 rounded-2xl border border-border mb-6",
        style: { background: "#FAFAFA" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-5xl font-bold",
                style: {
                  color: "#0A2E1A",
                  fontFamily: "'Playfair Display', serif"
                },
                children: overallAvg
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: Number.parseFloat(overallAvg) || 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              reviews.length,
              " verified pilgrims"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-2 min-w-[200px]", children: [
            "Experience",
            "Guide / Pandit",
            "Safety",
            "Food",
            "Value"
          ].map((label, i) => {
            const keys = [
              "overall",
              "guideExpertise",
              "safety",
              "food",
              "valueForMoney"
            ];
            const val = avg(keys[i]);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-28 text-muted-foreground shrink-0", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DimBar, { value: Number.parseFloat(val) || 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-right font-bold text-foreground", children: val })
            ] }, label);
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "px-3 py-1.5 rounded-lg border border-border text-sm bg-background",
          value: filterMonth,
          onChange: (e) => setFilterMonth(Number(e.target.value)),
          "data-ocid": "yatra_detail.reviews_month_filter",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "All Months" }),
            months.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i + 1, children: m }, m))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "px-3 py-1.5 rounded-lg border border-border text-sm bg-background",
          value: filterGroup,
          onChange: (e) => setFilterGroup(e.target.value),
          "data-ocid": "yatra_detail.reviews_group_filter",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Groups" }),
            ["solo", "couple", "family", "friends", "corporate", "school"].map(
              (g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, children: g.charAt(0).toUpperCase() + g.slice(1) }, g)
            )
          ]
        }
      ),
      (filterMonth > 0 || filterGroup !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setFilterMonth(0);
            setFilterGroup("all");
          },
          className: "px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground",
          children: "Clear filters"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center py-8", children: "No reviews match your filters." }) : filtered.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-2xl border border-border bg-background",
        "data-ocid": `yatra_detail.review.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0",
                  style: { background: "#145C38" },
                  children: r.author.charAt(0)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-sm text-foreground", children: r.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  new Date(r.date).toLocaleDateString("en-IN", {
                    month: "long",
                    year: "numeric"
                  }),
                  " ",
                  "· ",
                  r.groupType,
                  r.verified && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", style: { color: "#145C38" }, children: "✓ Verified" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: r.rating })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground mb-2", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.comment }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-3 pt-3 border-t border-border", children: [
            "food",
            "guideExpertise",
            "safety",
            "valueForMoney",
            "scenery"
          ].map((dim) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground capitalize", children: dim === "guideExpertise" ? "Guide" : dim === "valueForMoney" ? "Value" : dim }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#145C38" }, children: r.dimensions[dim].toFixed(1) })
          ] }, dim)) })
        ]
      },
      r.id
    )) })
  ] });
}
function YatraDetailPage() {
  var _a, _b;
  const { slug } = useParams({ from: "/yatra/$slug" });
  const yatra = yatraData.find((y) => (y.slug ?? y.id) === slug);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [pujaBooked, setPujaBooked] = reactExports.useState(null);
  if (!yatra) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { paddingTop: "120px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "🕉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Yatra not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/yatra", className: "text-primary hover:underline mt-2 block", children: "View all yatras" })
        ] })
      }
    );
  }
  const imageUrl = `https://source.unsplash.com/1600x900/?${yatra.imageQuery}`;
  const templeInfo = yatra.isYatra ? yatra.templeInfo : null;
  const darshan = yatra.isYatra ? yatra.darshan ?? [] : [];
  const pujaOptions = yatra.isYatra ? yatra.pujaOptions ?? [] : [];
  const transportOptions = yatra.isYatra ? yatra.transportOptions ?? [] : [];
  const registrationSteps = yatra.isYatra ? yatra.registrationSteps ?? [] : [];
  const batches = yatra.batchSlots ?? [];
  const reviews = yatra.detailedReviews ?? [];
  const safety = yatra.safetyProtocol;
  const diffColor = ((_a = yatra.difficulty) == null ? void 0 : _a.toLowerCase().includes("moderate")) ? "#FEF3C7" : "#D1FAE5";
  const diffText = ((_b = yatra.difficulty) == null ? void 0 : _b.toLowerCase().includes("moderate")) ? "#92400E" : "#065F46";
  const NAV_TABS = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "darshan", label: "Darshan & Puja" },
    { id: "transport", label: "Transport" },
    { id: "registration", label: "Registration" },
    { id: "safety", label: "Safety" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "yatra_detail_page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-0 z-40 border-b",
        style: {
          background: "rgba(10,46,26,0.97)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,255,255,0.1)"
        },
        "data-ocid": "yatra_detail.quick_facts_bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 md:gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuickFactsBadge,
              {
                icon: "⛰",
                label: "Altitude",
                value: (templeInfo == null ? void 0 : templeInfo.altitude) ?? yatra.maxAltitude
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFactsBadge, { icon: "⏱", label: "Duration", value: yatra.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuickFactsBadge,
              {
                icon: "📅",
                label: "Opens",
                value: (templeInfo == null ? void 0 : templeInfo.openingDate2026) ?? "May 2026"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuickFactsBadge,
              {
                icon: "🎯",
                label: "Difficulty",
                value: yatra.difficulty
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuickFactsBadge,
              {
                icon: "💰",
                label: "From",
                value: `${yatra.price}/person`
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuickFactsBadge,
              {
                icon: "📋",
                label: "Registration",
                value: "Required"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/919876543210?text=Enquiry about ${yatra.name} yatra`,
              target: "_blank",
              rel: "noreferrer",
              className: "shrink-0 px-4 py-2 rounded-xl text-sm font-label font-bold",
              style: { background: "#25D366", color: "white" },
              "data-ocid": "yatra_detail.whatsapp_cta_top",
              children: "WhatsApp Us"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex flex-col justify-end",
        style: {
          minHeight: "75vh",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(10,46,26,0.88) 100%), url(${imageUrl}) center/cover no-repeat`
        },
        "data-ocid": "yatra_detail.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 gap-2 hidden md:flex", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-16 rounded-xl overflow-hidden border-2 border-white/30",
              style: {
                background: `url(https://source.unsplash.com/200x160/?${yatra.imageQuery},${n}) center/cover`
              }
            },
            n
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 pb-10 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4 text-white/60 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Home" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/yatra", children: "Yatra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: yatra.name })
            ] }),
            templeInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-label font-bold mb-3",
                style: { background: "#F4A623", color: "#0A2E1A" },
                children: [
                  "🗓 Opens ",
                  templeInfo.openingDate2026,
                  " — Closes",
                  " ",
                  templeInfo.closingDate2026
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 2px 20px rgba(0,0,0,0.4)"
                },
                children: yatra.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-base md:text-lg max-w-2xl mb-5 leading-relaxed", children: [
              yatra.description.slice(0, 200),
              "…"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/booking/$trekSlug/select-batch",
                  params: { trekSlug: yatra.slug ?? yatra.id },
                  className: "px-6 py-3 rounded-xl text-sm font-label font-bold flex items-center gap-2",
                  style: { background: "#F4A623", color: "#0A2E1A" },
                  "data-ocid": "yatra_detail.plan_cta_button",
                  children: "🕉 Plan Your Yatra →"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://wa.me/919876543210?text=Plan ${yatra.name}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "px-6 py-3 rounded-xl text-sm font-label font-bold border-2 border-white/40 text-white",
                  "data-ocid": "yatra_detail.whatsapp_hero_button",
                  children: "WhatsApp Us"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky z-30 border-b bg-card overflow-x-auto",
        style: { top: "56px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 flex gap-0", children: NAV_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab.id),
            className: "px-4 py-3 text-sm font-label font-semibold whitespace-nowrap transition-colors",
            style: {
              borderBottom: activeTab === tab.id ? "2px solid #145C38" : "2px solid transparent",
              color: activeTab === tab.id ? "#145C38" : "#6B7280"
            },
            "data-ocid": `yatra_detail.nav_tab.${tab.id}`,
            children: tab.label
          },
          tab.id
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-14", children: [
        activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.overview_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionHeading, { children: [
            "About ",
            yatra.name
          ] }),
          templeInfo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-8", children: [
            {
              icon: "⛰",
              label: "Altitude",
              value: templeInfo.altitude
            },
            { icon: "🕉", label: "Deity", value: templeInfo.deity },
            {
              icon: "📅",
              label: "Opens 2026",
              value: templeInfo.openingDate2026
            },
            {
              icon: "📞",
              label: "Committee",
              value: templeInfo.committeePhone
            }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-2xl border border-border text-center",
              style: { background: "#F0FAF4" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl mb-1", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground mt-0.5 leading-tight", children: s.value })
              ]
            },
            s.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: (yatra.overview ?? yatra.description).split("\n\n").map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: para }, para.slice(0, 30))) }),
          yatra.keyHighlights && yatra.keyHighlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-4",
                style: { color: "#0A2E1A" },
                children: "✨ Key Highlights"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: yatra.keyHighlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-2 p-3 rounded-xl",
                style: { background: "#F0FAF4" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#145C38" }, children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: h })
                ]
              },
              h
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-label font-bold text-sm mb-3",
                  style: { color: "#065F46" },
                  children: "✅ What's Included"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: yatra.inclusions.map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 shrink-0 mt-0.5", children: "✓" }),
                    inc
                  ]
                },
                inc
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-label font-bold text-sm mb-3",
                  style: { color: "#991B1B" },
                  children: "❌ Not Included"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: yatra.exclusions.map((exc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 shrink-0 mt-0.5", children: "✗" }),
                    exc
                  ]
                },
                exc
              )) })
            ] })
          ] }),
          yatra.packingList && yatra.packingList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-sm mb-3",
                style: { color: "#0A2E1A" },
                children: "🎒 Packing List"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: yatra.packingList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1.5 rounded-full text-xs font-label bg-muted text-muted-foreground",
                children: item
              },
              item
            )) })
          ] })
        ] }),
        activeTab === "itinerary" && yatra.itinerary && yatra.itinerary.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.itinerary_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "🗺 Day-by-Day Itinerary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: yatra.itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "details",
            {
              className: "rounded-2xl border border-border overflow-hidden",
              open: day.day === 1,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center gap-4 p-5 cursor-pointer list-none select-none bg-card hover:bg-muted/20 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white shrink-0",
                      style: { background: "#145C38" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label", children: "Day" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold font-display leading-none", children: day.day })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-sm text-foreground truncate", children: day.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-1", children: [
                      day.distanceKm && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "📐 ",
                        day.distanceKm,
                        " km"
                      ] }),
                      day.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "⏱ ",
                        day.duration
                      ] }),
                      day.dayDifficulty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2 py-0.5 rounded-full font-label",
                          style: {
                            background: diffColor,
                            color: diffText
                          },
                          children: day.dayDifficulty
                        }
                      ),
                      day.startAltitude && day.endAltitude && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "⛰ ",
                        day.startAltitude.toLocaleString(),
                        "→",
                        day.endAltitude.toLocaleString(),
                        " ft"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm shrink-0", children: "▾" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-border space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: day.description }),
                  day.highlights && day.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-bold font-label mb-2",
                        style: { color: "#145C38" },
                        children: "✨ Day Highlights"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: day.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 text-xs text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F4A623" }, children: "→" }),
                          h
                        ]
                      },
                      h
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: [
                    day.campsite && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "🏕 Campsite" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: day.campsite.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs mt-0.5",
                          style: { color: "#145C38" },
                          children: [
                            day.campsite.altitude.toLocaleString(),
                            " ft"
                          ]
                        }
                      )
                    ] }),
                    day.mealDetail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "🍽 Meals" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                        "☀ ",
                        day.mealDetail.breakfast.split(" — ")[0]
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        "🌤 ",
                        day.mealDetail.lunch.split(" — ")[0]
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        "🌙 ",
                        day.mealDetail.dinner.split(" — ")[0]
                      ] })
                    ] }),
                    day.weatherPattern && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "🌤 Weather" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                        day.weatherPattern.slice(0, 100),
                        "…"
                      ] })
                    ] }),
                    day.waterSources && day.waterSources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "💧 Water Sources" }),
                      day.waterSources.slice(0, 2).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs text-muted-foreground mt-0.5",
                          children: w.slice(0, 60)
                        },
                        w
                      ))
                    ] }),
                    day.emergencyExit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "🚁 Emergency Exit" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                        day.emergencyExit.slice(0, 100),
                        "…"
                      ] })
                    ] }),
                    day.photographyHighlights && day.photographyHighlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-label text-foreground", children: "📸 Photo Spots" }),
                      day.photographyHighlights.slice(0, 2).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs text-muted-foreground mt-0.5",
                          children: p.slice(0, 60)
                        },
                        p
                      ))
                    ] })
                  ] }),
                  day.culturalNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-3 rounded-xl",
                      style: {
                        background: "#FEF9EC",
                        borderLeft: "3px solid #F4A623"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs font-bold font-label mb-1",
                            style: { color: "#92400E" },
                            children: "🏛 Cultural & Historical Notes"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: day.culturalNotes })
                      ]
                    }
                  ),
                  day.acclimatizationNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-3 rounded-xl",
                      style: {
                        background: "#FEE2E2",
                        borderLeft: "3px solid #EF4444"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs font-bold font-label mb-1",
                            style: { color: "#991B1B" },
                            children: "⚠️ Acclimatization Notes"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: day.acclimatizationNotes })
                      ]
                    }
                  ),
                  day.wildlife && day.wildlife.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-bold font-label mb-1",
                        style: { color: "#0A2E1A" },
                        children: "🦅 Wildlife Spotting"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: day.wildlife.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2 py-0.5 rounded-full bg-muted font-label",
                        children: w
                      },
                      w
                    )) })
                  ] })
                ] })
              ]
            },
            day.day
          )) })
        ] }),
        activeTab === "darshan" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.darshan_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "🔔 Darshan Timings & Puja Packages" }),
          darshan.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-3",
                style: { color: "#0A2E1A" },
                children: "Daily Darshan Schedule"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm rounded-xl overflow-hidden border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { style: { background: "#145C38", color: "white" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-label", children: "Puja / Service" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-label", children: "Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-label", children: "Description" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: darshan.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: i % 2 === 0 ? "bg-background" : "bg-muted/20",
                    "data-ocid": `yatra_detail.darshan.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold font-label", children: d.puja }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-4 py-3 font-label font-bold",
                          style: { color: "#145C38" },
                          children: d.time
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: d.description })
                    ]
                  },
                  d.puja
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 italic", children: "⚠️ Timings vary by season and festival days. Arrive 30 min early during peak season." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-3",
                style: { color: "#0A2E1A" },
                children: "Season-wise Darshan Overview"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs rounded-xl overflow-hidden border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { style: { background: "#F0FAF4" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-label", children: "Season" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-label", children: "Months" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-label", children: "Morning Darshan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-label", children: "Evening Aarti" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-label", children: "Notes" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                [
                  "Opening Season",
                  "May",
                  "4:00 AM",
                  "5:00 PM",
                  "Highest spiritual energy; snow possible"
                ],
                [
                  "Peak Summer",
                  "Jun–Aug",
                  "4:30 AM",
                  "5:30 PM",
                  "Maximum crowds; book very early"
                ],
                [
                  "Post-Monsoon",
                  "Sept–Oct",
                  "5:00 AM",
                  "5:00 PM",
                  "Clearest skies; ideal for photography"
                ],
                [
                  "Closing Season",
                  "Oct–Nov",
                  "6:00 AM",
                  "4:00 PM",
                  "Smaller crowds; cold; closes on Diwali"
                ]
              ].map(([season, months, morning, evening, notes], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: `border-t border-border ${i % 2 === 1 ? "bg-muted/10" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold", children: season }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: months }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-3 py-2",
                        style: { color: "#145C38" },
                        children: morning
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-3 py-2",
                        style: { color: "#145C38" },
                        children: evening
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: notes })
                  ]
                },
                season
              )) })
            ] }) })
          ] }),
          pujaOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-4",
                style: { color: "#0A2E1A" },
                children: "Puja Packages — Book in Advance"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: pujaOptions.map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-sm text-foreground", children: p.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: p.duration })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-display text-xl font-bold shrink-0",
                        style: {
                          color: "#145C38",
                          fontFamily: "'Playfair Display', serif"
                        },
                        children: [
                          "₹",
                          p.price.toLocaleString()
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: p.bookingNote }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPujaBooked(pujaBooked === p.name ? null : p.name),
                      className: "w-full py-2 rounded-lg text-xs font-label font-bold transition-colors",
                      style: {
                        background: pujaBooked === p.name ? "#D1FAE5" : "#145C38",
                        color: pujaBooked === p.name ? "#065F46" : "white"
                      },
                      "data-ocid": `yatra_detail.puja_book_button.${pi + 1}`,
                      children: pujaBooked === p.name ? "✓ Added to Booking" : "Book Puja Service"
                    }
                  )
                ]
              },
              p.name
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-4",
                style: { color: "#0A2E1A" },
                children: "👘 Dress Code & Temple Etiquette"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 rounded-xl",
                  style: {
                    background: "#F0FAF4",
                    border: "1px solid #D1FAE5"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-label font-bold text-sm mb-3",
                        style: { color: "#065F46" },
                        children: "✅ Recommended Attire"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
                      "Traditional dhoti/kurta for men",
                      "Saree or salwar kameez for women",
                      "Dupatta/stole to cover head inside",
                      "Warm layers underneath (mandatory above 3,000m)",
                      "Trekking shoes removed outside sanctum"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      item
                    ] }, item)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 rounded-xl",
                  style: {
                    background: "#FEF9EC",
                    border: "1px solid #FDE68A"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-label font-bold text-sm mb-3",
                        style: { color: "#92400E" },
                        children: "⚠️ Important Rules"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
                      "📵 Mobile phones — prohibited inside garbhagriha",
                      "📸 Photography — only in outer courtyard",
                      "👟 Footwear — must be removed at entrance",
                      "🍖 Non-vegetarian food — not permitted on trail",
                      "🍺 Alcohol/tobacco — strictly prohibited",
                      "🔇 Maintain silence inside sanctum"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, item)) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        activeTab === "transport" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.transport_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "🚁 Transport Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (transportOptions.length > 0 ? transportOptions : [
            {
              option: "🚁 Helicopter (Phata/Sersi → Kedarnath)",
              cost: "₹6,500–₹9,000",
              duration: "8 minutes",
              bookingNote: "Book via IRCTC Air or GMVN portal. Slots limited — book 2–3 months ahead. Baggage limit 5kg. Ideal for elderly."
            },
            {
              option: "🥾 Trek (Gaurikund → Kedarnath)",
              cost: "Included in trek fee",
              duration: "5–7 hours (16km)",
              bookingNote: "Stone-paved trail. Pony (₹2,000–₹3,500), dandi/palki (₹6,000–₹10,000) available. Trail open 5 AM–5 PM."
            },
            {
              option: "🚌 Road (Haridwar → Sonprayag)",
              cost: "₹800–₹1,800",
              duration: "8–9 hours",
              bookingNote: "Regular buses from ISBT Haridwar/Rishikesh. Private taxi ₹5,000–₹8,000. Nearest railhead: Haridwar."
            },
            {
              option: "✈️ Nearest Airport",
              cost: "Jolly Grant, Dehradun",
              duration: "250 km from base",
              bookingNote: "Flights from Delhi, Mumbai, Bengaluru. Taxi to Sonprayag: ₹5,000–₹7,000 (6–7 hrs). Ask us for bundled transfers."
            }
          ]).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-5 rounded-2xl border border-border bg-card",
              "data-ocid": `yatra_detail.transport.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-bold text-base text-foreground", children: t.option }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-label font-bold text-sm",
                      style: { color: "#145C38" },
                      children: t.cost
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-2", children: [
                  "⏱ ",
                  t.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.bookingNote })
              ]
            },
            t.option
          )) })
        ] }),
        activeTab === "registration" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.registration_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "📋 Registration Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-xl mb-6",
              style: { background: "#FEF3C7", border: "1px solid #F59E0B" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-label font-bold mb-1",
                    style: { color: "#92400E" },
                    children: "⚠️ Registration is Mandatory"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "All pilgrims must register before arriving at the base. There is a daily cap — book early to secure your date." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (registrationSteps.length > 0 ? registrationSteps.map((s) => s.instruction) : [
            "Go to registrationandtouristcare.uk.gov.in (Official Uttarakhand Tourism portal)",
            "Create an account with mobile number or email. Verify via OTP.",
            "Fill pilgrim details: name, Aadhaar number, date of birth, and emergency contact.",
            "Upload documents: Aadhaar card (both sides), recent passport-size photo, medical fitness certificate if over 60.",
            "Select your trek date and pilgrim count. Daily quotas apply — choose carefully.",
            "Pay registration fee (₹50/person). Receive RFID slip and QR-coded pass via email.",
            "Print or save the QR pass. It will be verified at Sonprayag and Gaurikund checkpoints.",
            "For offline registration: help desks at Haridwar, Rishikesh, Rudraprayag, and Sonprayag."
          ]).map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-4 p-4 rounded-xl border border-border bg-card",
              "data-ocid": `yatra_detail.registration.step.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0",
                    style: { background: "#145C38" },
                    children: i + 1
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pt-1", children: step })
              ]
            },
            step
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-4",
                style: { color: "#0A2E1A" },
                children: "📄 Documents Required"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              {
                icon: "🪪",
                doc: "Aadhaar Card (original + photocopy)",
                note: "Primary ID — mandatory"
              },
              {
                icon: "📷",
                doc: "Passport-size photographs (2 copies)",
                note: "Recent, white background"
              },
              {
                icon: "🏥",
                doc: "Medical fitness certificate",
                note: "Mandatory for 60+ years"
              },
              {
                icon: "📱",
                doc: "Registered mobile number",
                note: "For RFID + emergency alerts"
              },
              {
                icon: "💻",
                doc: "Registration QR code printout",
                note: "Checked at 3 checkpoints"
              },
              {
                icon: "💊",
                doc: "Personal medication list",
                note: "Share with guide"
              }
            ].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-3 p-3 rounded-xl border border-border bg-background",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: d.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: d.doc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: d.note })
                  ] })
                ]
              },
              d.doc
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-label font-bold text-base mb-4",
                style: { color: "#0A2E1A" },
                children: "🏨 Accommodation Options"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              {
                type: "Temple Committee Dharamshala",
                price: "₹200–₹800/night",
                note: "Basic dorm and private rooms by Badri-Kedar Temple Committee. Book via official portal 60+ days in advance.",
                badge: "Basic",
                color: "#D1FAE5"
              },
              {
                type: "GMVN Guest House / Tourist Rest House",
                price: "₹1,200–₹3,500/night",
                note: "Government-run, clean, reliable. Book via gmvnonline.com. Fills up months in advance.",
                badge: "Standard",
                color: "#E0E7FF"
              },
              {
                type: "Private Tented Camps (Seasonal)",
                price: "₹2,500–₹6,000/night",
                note: "Hot water, attached washrooms, views. Available May–Oct. Book through GlobalTrek.",
                badge: "Premium",
                color: "#FEF3C7"
              }
            ].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 rounded-xl border border-border bg-card flex items-start gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-sm text-foreground", children: a.type }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-2 py-0.5 rounded-full text-xs font-label",
                          style: { background: a.color },
                          children: a.badge
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: a.note })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold text-sm shrink-0",
                      style: { color: "#145C38" },
                      children: a.price
                    }
                  )
                ]
              },
              a.type
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "⚠️ Advance booking is essential. During peak season (Jun–Sept), accommodation books 3–6 months ahead." })
          ] })
        ] }),
        activeTab === "safety" && (safety ? /* @__PURE__ */ jsxRuntimeExports.jsx(SafetySection, { safety }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.safety_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "🛡 Safety Protocol" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Safety details will be shared on confirmation. WhatsApp us for a full briefing." })
        ] })),
        activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, { reviews }),
        activeTab === "faq" && yatra.faqs && yatra.faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "yatra_detail.faq_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "❓ Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: yatra.faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "details",
            {
              className: "rounded-2xl border border-border overflow-hidden",
              open: i === 0,
              "data-ocid": `yatra_detail.faq.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "p-5 cursor-pointer list-none font-label font-semibold text-sm text-foreground select-none flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-3", children: "▾" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4", children: faq.answer })
              ]
            },
            faq.question
          )) })
        ] }),
        batches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BatchCalendar,
          {
            batches,
            yatraSlug: yatra.slug ?? yatra.id
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky rounded-2xl border bg-card p-6 shadow-lg space-y-5",
          style: { top: "110px", borderColor: "#F4A623" },
          "data-ocid": "yatra_detail.booking_sidebar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "From " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-3xl font-bold",
                  style: {
                    color: "#F4A623",
                    fontFamily: "'Playfair Display', serif"
                  },
                  children: yatra.price
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1 p-1 rounded-xl bg-muted", children: ["Independent", "Guided", "Premium"].map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "py-1.5 rounded-lg text-xs font-label font-semibold transition-colors",
                style: {
                  background: pkg === "Guided" ? "#145C38" : "transparent",
                  color: pkg === "Guided" ? "white" : "#6B7280"
                },
                "data-ocid": `yatra_detail.pkg_tab.${pkg.toLowerCase()}`,
                children: pkg
              },
              pkg
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/booking/$trekSlug/select-batch",
                params: { trekSlug: yatra.slug ?? yatra.id },
                className: "block w-full py-3 rounded-xl text-center font-label font-bold text-sm",
                style: { background: "#F4A623", color: "#0A2E1A" },
                "data-ocid": "yatra_detail.book_now_button",
                children: "Book Yatra 2026 →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://wa.me/919876543210?text=Enquiry ${yatra.name}`,
                target: "_blank",
                rel: "noreferrer",
                className: "block w-full py-3 rounded-xl text-center font-label font-bold text-sm border",
                style: { borderColor: "#25D366", color: "#25D366" },
                "data-ocid": "yatra_detail.whatsapp_sidebar_button",
                children: "📱 WhatsApp Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 pt-2 border-t border-border", children: [
              "🕉 Expert-guided pilgrimage",
              "✓ All registrations handled",
              "✓ Accommodation pre-booked",
              "✓ 30% advance payment option",
              "✓ Helicopter service available",
              "✓ Medical support throughout"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t }, t)) }),
            templeInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-label font-semibold mb-1",
                  style: { color: "#0A2E1A" },
                  children: "🔗 Official Registration"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://${templeInfo.registrationLink}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-xs underline break-all",
                  style: { color: "#145C38" },
                  "data-ocid": "yatra_detail.registration_link",
                  children: templeInfo.registrationLink
                }
              )
            ] }),
            batches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-label font-semibold mb-2",
                  style: { color: "#0A2E1A" },
                  children: "⚡ Next Departures"
                }
              ),
              batches.slice(0, 2).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold", children: new Date(b.startDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short"
                      }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BatchStatusPill, { status: b.status })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "text-xs font-bold",
                        style: { color: "#0A2E1A" },
                        children: [
                          "₹",
                          b.price.toLocaleString()
                        ]
                      }
                    )
                  ]
                },
                b.id
              ))
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  YatraDetailPage as default
};
