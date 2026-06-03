import { r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, X } from "./index-vYOW-QfD.js";
import { T as TrekCard } from "./TrekCard-Blx3hjyo.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import "./heart-mZleXww0.js";
import "./star-BLOO0ZgP.js";
const STATES = ["All", "Uttarakhand", "Himachal Pradesh"];
const DIFFICULTIES = [
  "All",
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Difficult"
];
const DURATIONS = ["All", "1-3D", "4-5D", "6+D"];
const SEASONS = ["All", "Winter", "Spring", "Summer", "Autumn"];
const SORTS = [
  "Featured",
  "Price: Low",
  "Price: High",
  "Duration",
  "Difficulty"
];
function parsePriceNum(price) {
  return Number(price.replace(/[^0-9]/g, "")) || 0;
}
function matchDuration(days, filter) {
  if (filter === "All") return true;
  const d = days ?? 0;
  if (filter === "1-3D") return d >= 1 && d <= 3;
  if (filter === "4-5D") return d >= 4 && d <= 5;
  if (filter === "6+D") return d >= 6;
  return true;
}
function FilterPill({
  active,
  onClick,
  children,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      "data-ocid": ocid,
      className: `px-3 py-1 rounded-full text-xs font-mono border transition-all ${active ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`,
      children
    }
  );
}
function FilterGroup({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground tracking-wider", children: [
      label.toUpperCase(),
      ":"
    ] }),
    children
  ] });
}
function ActiveChip({
  label,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono",
      style: { background: "rgba(26,122,76,0.15)", color: "#1A7A4C" },
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onRemove,
            "aria-label": `Remove ${label} filter`,
            className: "hover:opacity-70",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}
function TreksPage() {
  const [stateFilter, setStateFilter] = reactExports.useState("All");
  const [diffFilter, setDiffFilter] = reactExports.useState("All");
  const [durFilter, setDurFilter] = reactExports.useState("All");
  const [seasonFilter, setSeasonFilter] = reactExports.useState("All");
  const [sort, setSort] = reactExports.useState("Featured");
  const hasActiveFilters = stateFilter !== "All" || diffFilter !== "All" || durFilter !== "All" || seasonFilter !== "All";
  let filtered = treksData.filter((t) => {
    if (stateFilter !== "All" && t.state !== stateFilter) return false;
    if (diffFilter !== "All" && t.difficulty !== diffFilter) return false;
    if (!matchDuration(t.durationDays, durFilter)) return false;
    if (seasonFilter !== "All" && t.bestSeason && !t.bestSeason.toLowerCase().includes(seasonFilter.toLowerCase()))
      return false;
    return true;
  });
  if (sort === "Price: Low")
    filtered = [...filtered].sort(
      (a, b) => parsePriceNum(a.price) - parsePriceNum(b.price)
    );
  if (sort === "Price: High")
    filtered = [...filtered].sort(
      (a, b) => parsePriceNum(b.price) - parsePriceNum(a.price)
    );
  if (sort === "Duration")
    filtered = [...filtered].sort(
      (a, b) => (a.durationDays ?? 0) - (b.durationDays ?? 0)
    );
  if (sort === "Difficulty") {
    const order = {
      Easy: 1,
      "Easy to Moderate": 2,
      Moderate: 3,
      Difficult: 4
    };
    filtered = [...filtered].sort(
      (a, b) => (order[a.difficulty] ?? 3) - (order[b.difficulty] ?? 3)
    );
  }
  const resetAll = () => {
    setStateFilter("All");
    setDiffFilter("All");
    setDurFilter("All");
    setSeasonFilter("All");
    setSort("Featured");
  };
  const utt = filtered.filter((t) => t.state === "Uttarakhand");
  const hp = filtered.filter((t) => t.state === "Himachal Pradesh");
  const showSections = stateFilter === "All";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "treks.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative pt-32 pb-16 px-4 text-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 w-full h-full opacity-20",
              viewBox: "0 0 1440 300",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M0 300 L200 120 L400 200 L720 60 L1000 160 L1200 80 L1440 140 L1440 300 Z",
                  fill: "#2D5A3D"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-4",
                style: { color: "#E8963A" },
                children: "15 Expert-Guided Adventures"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl italic text-foreground mb-4", children: "Himalayan Treks 2026" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Uttarakhand & Himachal Pradesh — hand-picked routes from beginner ridges to advanced high-altitude crossings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks/uttarakhand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "font-mono text-xs tracking-wider border-white/20 text-foreground hover:bg-white/10",
                  "data-ocid": "treks.uttarakhand_hub_link",
                  children: "Uttarakhand Hub →"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks/himachal-pradesh", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "font-mono text-xs tracking-wider border-white/20 text-foreground hover:bg-white/10",
                  "data-ocid": "treks.himachal_hub_link",
                  children: "Himachal Pradesh Hub →"
                }
              ) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-3 px-4 sticky top-[84px] z-20",
        "data-ocid": "treks.filters_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { label: "State", children: STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                active: stateFilter === s,
                onClick: () => setStateFilter(s),
                ocid: `treks.state_filter.${s.toLowerCase().replace(/ /g, "_")}`,
                children: s
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { label: "Difficulty", children: DIFFICULTIES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                active: diffFilter === d,
                onClick: () => setDiffFilter(d),
                ocid: `treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`,
                children: d
              },
              d
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { label: "Duration", children: DURATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                active: durFilter === d,
                onClick: () => setDurFilter(d),
                ocid: `treks.duration_filter.${d.toLowerCase().replace(/ /g, "_")}`,
                children: d
              },
              d
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { label: "Season", children: SEASONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                active: seasonFilter === s,
                onClick: () => setSeasonFilter(s),
                ocid: `treks.season_filter.${s.toLowerCase()}`,
                children: s
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "SORT:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: sort,
                  onChange: (e) => setSort(e.target.value),
                  className: "text-xs font-mono bg-background border border-border rounded-lg px-2 py-1.5 text-foreground",
                  "data-ocid": "treks.sort_select",
                  children: SORTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s))
                }
              )
            ] })
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-2 pt-2 border-t border-border items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Active:" }),
            stateFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ActiveChip,
              {
                label: stateFilter,
                onRemove: () => setStateFilter("All")
              }
            ),
            diffFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ActiveChip,
              {
                label: diffFilter,
                onRemove: () => setDiffFilter("All")
              }
            ),
            durFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ActiveChip,
              {
                label: durFilter,
                onRemove: () => setDurFilter("All")
              }
            ),
            seasonFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ActiveChip,
              {
                label: seasonFilter,
                onRemove: () => setSeasonFilter("All")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: resetAll,
                className: "text-xs font-mono text-muted-foreground hover:text-foreground underline",
                "data-ocid": "treks.reset_filters_button",
                children: "Clear all"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", "data-ocid": "treks.grid_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground tracking-wider mb-8", children: [
        "SHOWING ",
        filtered.length,
        " OF ",
        treksData.length,
        " TREKS"
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "treks.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🏔" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-display text-2xl italic mb-2", children: "No treks match your filters." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Try adjusting the filters above." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "font-mono text-xs tracking-wider",
            onClick: resetAll,
            children: "Reset Filters"
          }
        )
      ] }) : showSections ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        utt.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground", children: "Uttarakhand Treks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                "Garhwal & Kumaon Himalayas — ",
                utt.length,
                " treks"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/treks/uttarakhand",
                className: "font-mono text-xs text-primary hover:underline",
                "data-ocid": "treks.view_all_uttarakhand_link",
                children: "View All →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: utt.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.id)) })
        ] }),
        hp.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground", children: "Himachal Pradesh Treks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                "Kullu, Lahaul & Parvati Valley — ",
                hp.length,
                " treks"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/treks/himachal-pradesh",
                className: "font-mono text-xs text-primary hover:underline",
                "data-ocid": "treks.view_all_himachal_link",
                children: "View All →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: hp.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.id)) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.id)) })
    ] }) })
  ] });
}
export {
  TreksPage as default
};
