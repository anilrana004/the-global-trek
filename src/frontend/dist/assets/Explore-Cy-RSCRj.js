import { r as reactExports, j as jsxRuntimeExports } from "./index-BBTrFTBe.js";
import { T as TrekCard } from "./TrekCard-DLdVrtdQ.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { y as yatraData } from "./yatra-DYV3tsLc.js";
import "./heart-BWmixCSm.js";
import "./star-C8uGHq0g.js";
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
function ExplorePage() {
  const [state, setState] = reactExports.useState("All");
  const [difficulty, setDifficulty] = reactExports.useState("All");
  const [duration, setDuration] = reactExports.useState("All");
  const [type, setType] = reactExports.useState("All");
  const allItems = [...treksData, ...yatraData];
  const filtered = allItems.filter((t) => {
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
  });
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
            className: "py-12 text-center",
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl md:text-5xl font-bold text-white mb-3",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "Explore Himalayan Trails"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-xl mx-auto", children: "Find your perfect adventure by region, difficulty & season" })
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
              },
              children: "Clear filters"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.id)) }) })
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
