import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-vYOW-QfD.js";
import { T as TrekCard } from "./TrekCard-Blx3hjyo.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { y as yatraData } from "./yatra-DYV3tsLc.js";
import "./heart-mZleXww0.js";
import "./star-BLOO0ZgP.js";
const difficulties = [
  "All",
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Difficult"
];
const states = ["All", "Uttarakhand", "Himachal Pradesh"];
const durations = ["All", "1-3 Days", "4-6 Days", "7+ Days"];
const trekTypes = ["All", "Trek", "Yatra"];
const QUICK_FILTERS = [
  { label: "All", key: "all" },
  { label: "Winter Treks", key: "winter" },
  { label: "Beginner Treks", key: "beginner" },
  { label: "High Altitude", key: "altitude" },
  { label: "Heritage Walks", key: "heritage" }
];
const editorPicks = [
  "kedarkantha",
  "hampta-pass",
  "har-ki-dun",
  "chopta-tungnath"
];
function ExplorePage() {
  const [state, setState] = reactExports.useState("All");
  const [difficulty, setDifficulty] = reactExports.useState("All");
  const [duration, setDuration] = reactExports.useState("All");
  const [type, setType] = reactExports.useState("All");
  const [quickFilter, setQuickFilter] = reactExports.useState("all");
  const allItems = [...treksData, ...yatraData];
  const applyQuickFilter = (items) => {
    if (quickFilter === "winter")
      return items.filter(
        (t) => {
          var _a, _b, _c;
          return ((_a = t.bestSeason) == null ? void 0 : _a.toLowerCase().includes("winter")) || ((_b = t.bestSeason) == null ? void 0 : _b.toLowerCase().includes("dec")) || ((_c = t.bestSeason) == null ? void 0 : _c.toLowerCase().includes("jan"));
        }
      );
    if (quickFilter === "beginner")
      return items.filter(
        (t) => t.difficulty === "Easy" || t.difficulty === "Easy to Moderate"
      );
    if (quickFilter === "altitude")
      return items.filter((t) => {
        var _a;
        const m = (_a = t.maxAltitude) == null ? void 0 : _a.match(/(\d[,\d]*)/);
        if (!m) return false;
        const n = Number(m[1].replace(/,/g, ""));
        return n >= 4e3;
      });
    if (quickFilter === "heritage")
      return items.filter(
        (t) => t.trekType === "Yatra" || t.name.toLowerCase().includes("dun") || t.name.toLowerCase().includes("har ki")
      );
    return items;
  };
  const filtered = applyQuickFilter(
    allItems.filter((t) => {
      if (state !== "All" && t.state !== state) return false;
      if (difficulty !== "All" && t.difficulty !== difficulty) return false;
      if (type !== "All" && t.trekType !== type) return false;
      if (duration !== "All") {
        if (duration === "1-3 Days" && (t.durationDays ?? 0) > 3) return false;
        if (duration === "4-6 Days" && ((t.durationDays ?? 0) < 4 || (t.durationDays ?? 0) > 6))
          return false;
        if (duration === "7+ Days" && (t.durationDays ?? 0) < 7) return false;
      }
      return true;
    })
  );
  const picks = treksData.filter(
    (t) => editorPicks.includes(t.id ?? t.slug ?? "")
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { paddingTop: "120px" },
      "data-ocid": "explore_page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "py-14 px-4 text-center",
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl md:text-6xl font-bold text-white mb-3",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "Explore the Himalayas"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-xl mx-auto mb-6", children: "Find your perfect adventure by region, difficulty & season" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: QUICK_FILTERS.map((qf) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "px-4 py-2 rounded-full text-sm font-mono transition-all",
                  style: {
                    background: quickFilter === qf.key ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.15)",
                    color: quickFilter === qf.key ? "#0A2E1A" : "white"
                  },
                  onClick: () => setQuickFilter(qf.key),
                  "data-ocid": `explore.quick_filter.${qf.key}`,
                  children: qf.label
                },
                qf.key
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-30 bg-card border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterBar,
            {
              label: "State",
              options: states,
              value: state,
              onChange: setState
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterBar,
            {
              label: "Difficulty",
              options: difficulties,
              value: difficulty,
              onChange: setDifficulty
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterBar,
            {
              label: "Duration",
              options: durations,
              value: duration,
              onChange: setDuration
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterBar,
            {
              label: "Type",
              options: trekTypes,
              value: type,
              onChange: setType
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-sm text-muted-foreground font-label", children: [
            "Showing ",
            filtered.length,
            " results"
          ] })
        ] }) }),
        quickFilter === "all" && picks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "py-12 px-4",
            style: { background: "rgba(26,122,76,0.04)" },
            "data-ocid": "explore.editors_picks_section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-mono text-xs tracking-widest uppercase mb-1",
                    style: { color: "#E8963A" },
                    children: "Handpicked by Our Experts"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl italic text-foreground", children: "Editor's Picks" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: picks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.id)) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-10", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "explore.empty_state", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🏔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-muted-foreground", children: "No treks match your filters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "mt-4 px-6 py-2 rounded-full text-sm font-label font-semibold text-white",
              style: { background: "#145C38" },
              onClick: () => {
                setState("All");
                setDifficulty("All");
                setDuration("All");
                setType("All");
                setQuickFilter("all");
              },
              children: "Clear filters"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mx-4 mb-12 rounded-2xl p-8 text-center",
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #1A7A4C 100%)"
            },
            "data-ocid": "explore.delhi_cta_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 font-mono text-xs tracking-widest uppercase mb-2", children: "Travel from the capital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-2xl font-bold italic text-white mb-3",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "Starting from Delhi?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mb-5 max-w-md mx-auto", children: "Browse treks with direct Delhi departure, weekend packages, and everything you need for your first Himalayan adventure." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/trek-from-delhi",
                  className: "inline-block px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors",
                  "data-ocid": "explore.delhi_link",
                  children: "View Delhi Departures →"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function FilterBar({
  label,
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-label text-xs text-muted-foreground", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "px-3 py-1 rounded-full font-label text-xs transition-colors",
        style: {
          background: value === opt ? "#145C38" : "transparent",
          color: value === opt ? "white" : "inherit",
          border: value === opt ? "none" : "1px solid #e2e8f0"
        },
        onClick: () => onChange(opt),
        "data-ocid": `explore.filter.${label.toLowerCase()}.${opt.toLowerCase().replace(/ /g, "_")}_option`,
        children: opt
      },
      opt
    )) })
  ] });
}
export {
  ExplorePage as default
};
