import { j as jsxRuntimeExports, r as reactExports, B as Button } from "./index-BBTrFTBe.js";
import { T as TrekCard } from "./TrekCard-DLdVrtdQ.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import "./heart-BWmixCSm.js";
import "./star-C8uGHq0g.js";
const difficultyStyles = {
  Easy: { bg: "#1A3A1A", text: "#52D45E", border: "#2D5A2D" },
  "Easy to Moderate": { bg: "#1A2E1A", text: "#7EE87E", border: "#3A6A3A" },
  Moderate: { bg: "#3A2800", text: "#F5A623", border: "#6A4A00" },
  "Moderate to Difficult": {
    bg: "#3A1500",
    text: "#FF7043",
    border: "#6A2500"
  },
  Difficult: { bg: "#3A0000", text: "#FF4444", border: "#6A0000" }
};
const defaultStyle = { bg: "#3A2800", text: "#F5A623", border: "#6A4A00" };
function DifficultyBadge({
  difficulty,
  className = ""
}) {
  const style = difficultyStyles[difficulty] ?? defaultStyle;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold border tracking-wide ${className}`,
      style: {
        background: style.bg,
        color: style.text,
        borderColor: style.border
      },
      children: difficulty
    }
  );
}
const difficulties = ["All", "Easy to Moderate", "Moderate", "Easy"];
const regions = ["All", "Uttarakhand", "Himachal Pradesh"];
function TreksPage() {
  const [difficulty, setDifficulty] = reactExports.useState("All");
  const [region, setRegion] = reactExports.useState("All");
  const filtered = treksData.filter((t) => {
    const diffMatch = difficulty === "All" || t.difficulty === difficulty;
    const regionMatch = region === "All" || t.region.includes(region === "Uttarakhand" ? "Uttarakhand" : "Himachal");
    return diffMatch && regionMatch;
  });
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
                children: "All Destinations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl italic text-foreground mb-4", children: "Our Treks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "10 meticulously curated Himalayan adventures. Choose your trail." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-4 px-4 sticky top-[84px] z-20",
        "data-ocid": "treks.filters_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-wrap gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground tracking-wider", children: "DIFFICULTY:" }),
          difficulties.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setDifficulty(d),
              className: `px-3 py-1.5 rounded-full text-xs font-mono border transition-smooth ${difficulty === d ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-foreground/40"}`,
              "data-ocid": `treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`,
              children: d === "All" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "All" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DifficultyBadge, { difficulty: d })
            },
            d
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground tracking-wider ml-4", children: "REGION:" }),
          regions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setRegion(r),
              className: `px-3 py-1.5 rounded-full text-xs font-mono border transition-smooth ${region === r ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-foreground/40"}`,
              "data-ocid": `treks.region_filter.${r.toLowerCase()}`,
              children: r
            },
            r
          ))
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", "data-ocid": "treks.grid_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground tracking-wider mb-8", children: [
        filtered.length,
        " TREK",
        filtered.length !== 1 ? "S" : "",
        " FOUND"
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "treks.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-display text-2xl italic", children: "No treks match your filters." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "mt-6 font-mono text-xs tracking-wider",
            onClick: () => {
              setDifficulty("All");
              setRegion("All");
            },
            children: "Reset Filters"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i })
        },
        trek.id
      )) })
    ] }) })
  ] });
}
export {
  TreksPage as default
};
