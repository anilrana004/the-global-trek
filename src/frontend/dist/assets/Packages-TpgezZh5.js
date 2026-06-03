import { j as jsxRuntimeExports, L as Link, r as reactExports, B as Button } from "./index-BO08U1_a.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
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
              children: "For Every Kind of Adventurer"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-4xl md:text-5xl font-bold italic text-white mb-4",
              style: { fontFamily: "var(--gt-font-display)" },
              children: "Custom & Group Trek Packages"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-xl mx-auto", children: "Solo, family, corporate, school or fully bespoke — we craft the perfect Himalayan experience for every kind of group." })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 px-4 bg-card border-t border-border",
        "data-ocid": "packages.why_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-3xl font-bold italic",
              style: {
                fontFamily: "var(--gt-font-display)",
                color: "var(--foreground)"
              },
              children: "Package vs Individual Trek — Why Choose a Package?"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            {
              icon: "💰",
              title: "Better Value",
              desc: "Group packages include exclusive campsites, professional facilitation, custom menus, and add-ons not available on standard batches."
            },
            {
              icon: "📅",
              title: "Your Dates",
              desc: "Don't fit a fixed batch? Private packages depart on your chosen date — weekend, holiday, or any date that works for your group."
            },
            {
              icon: "⭐",
              title: "Bespoke Experience",
              desc: "Tailored difficulty, route, meals, accommodation, activities, and photography — designed specifically for your group's needs."
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center p-6 rounded-2xl border border-border bg-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold text-lg mb-2",
                    style: { fontFamily: "var(--gt-font-display)" },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
              ]
            },
            item.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomQuoteForm, {}),
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
function CustomQuoteForm() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", email: "", requirements: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-16 px-4",
      style: {
        background: "linear-gradient(135deg, rgba(26,122,76,0.08) 0%, rgba(232,150,58,0.05) 100%)"
      },
      "data-ocid": "packages.custom_quote_section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono text-xs tracking-widest uppercase mb-3",
              style: { color: "#E8963A" },
              children: "Can't find what you need?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-3xl font-bold italic",
              style: { fontFamily: "var(--gt-font-display)" },
              children: "Get a Custom Quote"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Tell us your dream trek — we'll build a custom itinerary and quote in 24 hours." })
        ] }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-12 px-6 rounded-2xl border border-border bg-card",
            "data-ocid": "packages.quote_success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-3", children: "✅" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Request Received!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Our trek experts will get back to you within 24 hours with a custom quote." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "bg-card border border-border rounded-2xl p-8 space-y-5",
            "data-ocid": "packages.custom_quote_form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "quote-name",
                      className: "block text-xs font-mono text-muted-foreground mb-1",
                      children: "FULL NAME"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "quote-name",
                      type: "text",
                      required: true,
                      value: form.name,
                      onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                      className: "w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2",
                      style: { focusRingColor: "#1A7A4C" },
                      placeholder: "Your name",
                      "data-ocid": "packages.quote_name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "quote-email",
                      className: "block text-xs font-mono text-muted-foreground mb-1",
                      children: "EMAIL ADDRESS"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "quote-email",
                      type: "email",
                      required: true,
                      value: form.email,
                      onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                      className: "w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2",
                      placeholder: "you@example.com",
                      "data-ocid": "packages.quote_email_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "quote-req",
                    className: "block text-xs font-mono text-muted-foreground mb-1",
                    children: "YOUR REQUIREMENTS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "quote-req",
                    required: true,
                    rows: 4,
                    value: form.requirements,
                    onChange: (e) => setForm((f) => ({ ...f, requirements: e.target.value })),
                    className: "w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 resize-none",
                    placeholder: "e.g. Corporate team of 25, want a 3-day Kedarkantha experience in December 2026, budget ₹15,000/person, need GST invoice...",
                    "data-ocid": "packages.quote_requirements_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full font-mono text-sm tracking-wider",
                  style: { background: "#E8963A", color: "#0A0E14" },
                  "data-ocid": "packages.quote_submit_button",
                  children: "Send Custom Quote Request"
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
export {
  PackagesPage as default
};
