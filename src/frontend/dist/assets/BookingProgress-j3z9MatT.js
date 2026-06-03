import { j as jsxRuntimeExports, L as Link } from "./index-BO08U1_a.js";
import { A as ArrowLeft } from "./arrow-left-CnEIeJy8.js";
import { C as Check } from "./check-DQa8XOVj.js";
const STEPS = [
  { id: 1, label: "Select Batch", shortLabel: "Batch" },
  { id: 2, label: "Participants", shortLabel: "People" },
  { id: 3, label: "Add-ons", shortLabel: "Add-ons" },
  { id: 4, label: "Payment", shortLabel: "Pay" }
];
function BookingProgress({
  currentStep,
  trekName,
  trekSlug
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "w-full py-4 px-4 md:px-6 border-b",
      style: { background: "#0A2E1A", borderColor: "rgba(255,255,255,0.1)" },
      "data-ocid": "booking_progress",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/trek/$trekId",
              params: { trekId: trekSlug },
              className: "flex items-center gap-1.5 text-sm transition-colors",
              style: { color: "rgba(255,255,255,0.6)" },
              "aria-label": `Back to ${trekName}`,
              "data-ocid": "booking_progress.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back to Trek" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.3)" }, children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-sm font-semibold truncate",
              style: {
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "white"
              },
              children: trekName
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between relative overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-4 left-0 right-0 h-0.5",
              style: { background: "rgba(255,255,255,0.1)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-4 left-0 h-0.5 transition-all duration-500",
              style: {
                background: "#2ECC71",
                width: `${(currentStep - 1) / (STEPS.length - 1) * 100}%`
              }
            }
          ),
          STEPS.map((step) => {
            const isDone = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isFuture = step.id > currentStep;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative flex flex-col items-center gap-2 z-10",
                style: { minWidth: "60px" },
                "data-ocid": `booking_progress.step.${step.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 font-label text-xs font-bold",
                      style: {
                        background: isDone ? "#2ECC71" : isCurrent ? "#F4A623" : "rgba(255,255,255,0.1)",
                        border: isCurrent ? "2px solid #F4A623" : isDone ? "2px solid #2ECC71" : "2px solid rgba(255,255,255,0.2)",
                        boxShadow: isCurrent ? "0 0 12px rgba(244,166,35,0.5)" : "none",
                        color: isFuture ? "rgba(255,255,255,0.4)" : "white"
                      },
                      "aria-current": isCurrent ? "step" : void 0,
                      children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : step.id
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-label text-[10px] font-semibold tracking-wide text-center hidden sm:block",
                      style: {
                        color: isDone ? "#2ECC71" : isCurrent ? "#F4A623" : "rgba(255,255,255,0.4)"
                      },
                      children: step.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-label text-[10px] font-semibold tracking-wide text-center sm:hidden",
                      style: {
                        color: isDone ? "#2ECC71" : isCurrent ? "#F4A623" : "rgba(255,255,255,0.4)"
                      },
                      children: step.shortLabel
                    }
                  )
                ]
              },
              step.id
            );
          })
        ] })
      ] })
    }
  );
}
export {
  BookingProgress as B
};
