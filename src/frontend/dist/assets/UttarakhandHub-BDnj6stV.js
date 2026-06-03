import { j as jsxRuntimeExports, L as Link } from "./index-vYOW-QfD.js";
import { T as TrekCard } from "./TrekCard-Blx3hjyo.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import "./heart-mZleXww0.js";
import "./star-BLOO0ZgP.js";
const ukTreks = treksData.filter((t) => t.state === "Uttarakhand");
function UttarakhandHubPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { paddingTop: "120px" },
      "data-ocid": "uttarakhand_hub_page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "py-16 text-center",
            style: { background: "linear-gradient(135deg, #0A2E1A, #145C38)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl md:text-5xl font-bold text-white mb-3",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "🏔 Uttarakhand Treks"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-lg max-w-2xl mx-auto", children: [
                "The Land of Gods — Garhwal & Kumaon Himalayas.",
                " ",
                ukTreks.length,
                " treks & yatras"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/explore",
                  className: "px-6 py-2.5 rounded-full font-label text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors",
                  children: "Explore Map"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: ukTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.id)) }) })
      ]
    }
  );
}
export {
  UttarakhandHubPage as default
};
