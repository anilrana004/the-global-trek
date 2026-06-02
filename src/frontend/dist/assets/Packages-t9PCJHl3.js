import { j as jsxRuntimeExports, L as Link } from "./index-BBTrFTBe.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
const packages = [
  {
    type: "corporate",
    icon: "💼",
    title: "Corporate Trekking",
    tagline: "Transform your team with the Himalayas",
    description: "Bespoke team-building treks for 20–200 people with professional facilitation, corporate GST invoice, and high-altitude leadership experiences.",
    features: [
      "Custom departure dates",
      "Gourmet camp meals",
      "Team-building activities",
      "Corporate GST invoice"
    ],
    cta: "Get Quote",
    cardBg: "#0A2E1A"
  },
  {
    type: "school-college",
    icon: "🎓",
    title: "School & College",
    tagline: "Educational adventure for the next generation",
    description: "Budget-friendly NSS/NCC-compliant programs with daily parent reports, teacher coordinator portal, and CBSE activity recognition.",
    features: [
      "Budget pricing",
      "Teacher coordinator portal",
      "Daily parent reports",
      "CBSE/NSS compliant"
    ],
    cta: "Inquire Now",
    cardBg: "#145C38"
  },
  {
    type: "family",
    icon: "👨‍👧",
    title: "Family Treks",
    tagline: "Adventures for all ages, memories for life",
    description: "Family-safe trails for kids from age 8+. Easy routes, kid-friendly meals, family photographer, and a flexible pace that works for everyone.",
    features: [
      "Kids from age 8+",
      "Easy-moderate trails",
      "Kid-friendly menus",
      "Flexible pace & stops"
    ],
    cta: "Explore Packages",
    cardBg: "#1A7A4C"
  },
  {
    type: "honeymoon",
    icon: "❤️",
    title: "Honeymoon / Couples",
    tagline: "Romance at 3,000 metres above sea level",
    description: "Private tents, candlelight camp dinners, sunrise summit hikes, flower decoration, and professional honeymoon photography included.",
    features: [
      "Private camp setup",
      "Candlelight dinners",
      "Honeymoon photography",
      "Flower decoration"
    ],
    cta: "Plan Honeymoon",
    cardBg: "#22A05E"
  },
  {
    type: "solo",
    icon: "🧗",
    title: "Solo Trekkers",
    tagline: "Never trek alone — always feel at home",
    description: "Join our scheduled group batches, connect with like-minded adventurers, and make lifelong friends who share your passion for the mountains.",
    features: [
      "Group WhatsApp community",
      "Safety tracking app",
      "Community events",
      "Solo room supplement"
    ],
    cta: "View Batches",
    cardBg: "#2980B9"
  },
  {
    type: "customize",
    icon: "🛠️",
    title: "Custom Trip Builder",
    tagline: "Your dream trek, designed by experts",
    description: "Design your perfect Himalayan journey. Choose destination, duration, group size, and budget. We build a custom itinerary in 24 hours.",
    features: [
      "Any destination",
      "Any duration",
      "Any group size",
      "24-hour quote turnaround"
    ],
    cta: "Build Your Trip",
    cardBg: "#0A2E1A"
  }
];
function PackagesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "packages.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "pt-36 pb-20 px-4 text-center",
        style: {
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs tracking-widest uppercase mb-4",
              style: { color: "#2ECC71", fontFamily: "var(--gt-font-label)" },
              children: "Trek Packages"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-4xl md:text-5xl font-bold italic text-white mb-4",
              style: { fontFamily: "var(--gt-font-display)" },
              children: "Customized Himalayan Experiences"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-xl mx-auto", children: "Something for every kind of adventurer \\u2014 solo, family, corporate, or fully custom." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: packages.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow flex flex-col",
        "data-ocid": `packages.${pkg.type}_card`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-6 text-white",
              style: { background: pkg.cardBg },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: pkg.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-xl font-bold mb-1",
                    style: { fontFamily: "var(--gt-font-display)" },
                    children: pkg.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: pkg.tagline })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 flex-1 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: pkg.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 flex-1", children: pkg.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black",
                  style: { background: "#145C38" },
                  children: "\\u2713"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: f })
            ] }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/packages/$type",
                params: { type: pkg.type },
                className: "block w-full py-3 rounded-xl text-center font-bold text-sm tracking-wide transition-opacity hover:opacity-90 text-white",
                style: {
                  background: pkg.cardBg,
                  fontFamily: "var(--gt-font-label)"
                },
                "data-ocid": `packages.${pkg.type}_cta`,
                children: [
                  pkg.cta,
                  " \\u2192"
                ]
              }
            )
          ] })
        ]
      },
      pkg.type
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-4 bg-card border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center", children: [
      { icon: "🛡️", text: "Certified Guides" },
      { icon: "📅", text: "Fixed Departures" },
      { icon: "💰", text: "No Hidden Costs" },
      { icon: "⭐", text: "4.9★ Google Rating" }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 text-sm font-semibold",
        style: { color: "#145C38", fontFamily: "var(--gt-font-label)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: item.icon }),
          item.text
        ]
      },
      item.text
    )) }) })
  ] });
}
export {
  PackagesPage as default
};
