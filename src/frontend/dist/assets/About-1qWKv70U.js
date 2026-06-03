import { j as jsxRuntimeExports, L as Link, B as Button } from "./index-BO08U1_a.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
const stats = [
  { value: "15 Years", label: "Of Excellence" },
  { value: "12,000+", label: "Happy Trekkers" },
  { value: "500+", label: "Treks Completed" },
  { value: "4.9★", label: "Google Rating" }
];
const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    text: "Pre-trek medical screening, satellite communication, emergency evacuation."
  },
  {
    icon: "👥",
    title: "Small Groups",
    text: "Max 12 trekkers. Personalized attention, deeper experience."
  },
  {
    icon: "🌿",
    title: "Responsible Trekking",
    text: "Zero plastic, porter welfare, village community partnerships."
  },
  {
    icon: "💰",
    title: "Fair Porter Wages",
    text: "Above-market wages, proper gear, and welfare for our trail support staff."
  },
  {
    icon: "🏧",
    title: "Community Tourism",
    text: "We invest back into mountain communities and local economies."
  },
  {
    icon: "🌍",
    title: "Conservation",
    text: "Every booking contributes to Himalayan conservation efforts."
  }
];
const team = [
  {
    name: "Arjun Rawat",
    role: "Lead Trek Guide",
    region: "Garhwal & Kumaon Himalayas",
    exp: "12 years"
  },
  {
    name: "Priyanka Negi",
    role: "Trek Operations",
    region: "Logistics & Safety",
    exp: "8 years"
  },
  {
    name: "Pandit Gopal Sharma",
    role: "Yatra Coordinator",
    region: "All four Char Dhams",
    exp: "15 years"
  },
  {
    name: "Riya Thakur",
    role: "Customer Experience",
    region: "Trekker Support & Booking",
    exp: "5 years"
  }
];
const certs = [
  "Certified by Uttarakhand Tourism Development Board",
  "ITBP (Indo-Tibetan Border Police) trained guides",
  "First Aid & Wilderness Medicine certified",
  "Leave No Trace India certified partner"
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative pt-36 pb-20 px-4 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              "aria-hidden": "true",
              className: "absolute bottom-0 w-full opacity-10",
              viewBox: "0 0 1440 200",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M0 200 L360 80 L720 140 L1080 60 L1440 100 L1440 200 Z",
                  fill: "#E8963A"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-4",
                style: { color: "#E8963A" },
                children: "Our Story"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl italic text-foreground mb-6", children: [
              "Born in the Foothills,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Raised by the Mountains"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto", children: "Founded in the Himalayan foothill town of Dehradun, The Global Trek was born from a single conviction: that the Himalayas are not just a destination but a transformative force." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", "data-ocid": "about.story_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-invert max-w-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: "Our team of certified mountain guides, cultural historians, and logistics specialists have spent decades on Uttarakhand and Himachal Pradesh's trails. We believe in small groups, meaningful experiences, responsible tourism, and zero compromise on safety." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed", children: "Every trek we design is a labor of love — walked first by our guides, tested for safety, mapped for alternate routes, and enriched with local cultural context. We are not a travel aggregator. We are mountain people who take other people to the mountains." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card py-16 px-4", "data-ocid": "about.stats_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "font-display text-3xl font-bold",
              style: { color: "#E8963A" },
              children: s.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-wider text-muted-foreground mt-1 uppercase", children: s.label })
        ]
      },
      s.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", "data-ocid": "about.team_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-mono text-xs tracking-widest uppercase mb-3",
            style: { color: "#E8963A" },
            children: "The People"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground", children: "Meet the Team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: team.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "p-6 rounded-2xl border border-border bg-card text-center",
          "data-ocid": `about.team.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-2xl font-bold",
                style: {
                  background: "rgba(232,150,58,0.15)",
                  color: "#E8963A"
                },
                children: member.name.charAt(0)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs", style: { color: "#E8963A" }, children: member.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-2", children: member.region }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
              member.exp,
              " experience"
            ] })
          ]
        },
        member.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card py-20 px-4", "data-ocid": "about.values_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-mono text-xs tracking-widest uppercase mb-3",
            style: { color: "#E8963A" },
            children: "What We Stand For"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground", children: "Our Values" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "p-6 rounded-xl border border-border bg-background",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: v.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-1", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.text })
          ]
        },
        v.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", "data-ocid": "about.certifications_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-mono text-xs tracking-widest uppercase mb-3",
          style: { color: "#E8963A" },
          children: "Accreditations"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground mb-10", children: "Certifications & Standards" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: certs.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-4 rounded-xl border border-border bg-card text-sm text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "✓" }),
            cert
          ]
        },
        cert
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 px-4 text-center",
        style: { background: "rgba(232,150,58,0.05)", border: "0" },
        "data-ocid": "about.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-4", children: "Ready to Trek with Us?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Join 10,000+ trekkers who chose The Global Trek for their Himalayan journey." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              className: "font-mono text-sm tracking-widest uppercase",
              style: { background: "#E8963A", color: "#0A0E14" },
              "data-ocid": "about.book_trek_button",
              children: "Plan My Trek"
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  AboutPage as default
};
