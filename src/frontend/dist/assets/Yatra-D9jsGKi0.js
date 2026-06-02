import { j as jsxRuntimeExports, L as Link, B as Button } from "./index-BBTrFTBe.js";
import { T as TrekCard } from "./TrekCard-DLdVrtdQ.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import "./heart-BWmixCSm.js";
import "./star-C8uGHq0g.js";
const yatraFeatures = [
  {
    icon: "👏",
    title: "Puja Coordination",
    text: "Expert yatra guide with religious background. Abhishek puja, darshan priority, temple briefings."
  },
  {
    icon: "⏺️",
    title: "Priority Darshan",
    text: "Skip the queues. Our teams coordinate early morning Brahma Muhurta darshan slots."
  },
  {
    icon: "🚁",
    title: "Helicopter Options",
    text: "Comfortable helicopter packages for Kedarnath. Pre-booked seats, seamless experience."
  },
  {
    icon: "🏥",
    title: "Medical Support",
    text: "Doctor on call for senior yatris. Oxygen cylinders, medical kit, emergency evacuation."
  },
  {
    icon: "🏛️",
    title: "Expert Yatra Guide",
    text: "Guides with deep religious and historical knowledge of each dham's mythology and significance."
  },
  {
    icon: "📝",
    title: "Yatra Registration",
    text: "Complete biometric Yatra registration assistance. All permits handled by our team."
  }
];
const yataraTestimonials = [
  {
    name: "Vikram Singh",
    city: "Jaipur",
    yatra: "Char Dham",
    text: "As a first-time yatri, I was nervous. The Global Trek's yatra team held our hand through every dham. Their pandit briefings added so much depth."
  },
  {
    name: "Savita Agarwal",
    city: "Indore",
    yatra: "Kedarnath",
    text: "The evening Aarti at Kedarnath is something I'll carry in my heart forever. The Global Trek made it accessible even at 72 years with helicopter support."
  },
  {
    name: "Suresh Iyer",
    city: "Chennai",
    yatra: "Do Dham",
    text: "Badrinath at Brahma Muhurta. Tapt Kund dip. Mana village at sunset. The Global Trek crafted a journey that touched the divine."
  }
];
const yatrasInTreks = treksData.filter(
  (t) => ["kedarnath-yatra", "do-dham", "char-dham"].includes(t.id)
);
function YatraPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "yatra.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[70vh] flex items-center justify-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0D1A0F 0%, #0A0E14 60%, #1a0a00 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              "aria-hidden": "true",
              viewBox: "0 0 1440 500",
              className: "absolute bottom-0 w-full opacity-20",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M0 500 L240 200 L480 350 L720 150 L960 280 L1200 100 L1440 220 L1440 500 Z",
                  fill: "#E8963A"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-mono text-xs tracking-widest uppercase mb-4",
                    style: { color: "#E8963A" },
                    children: "Sacred Journeys"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "font-display italic text-foreground mb-6",
                    style: { fontSize: "clamp(2.5rem, 7vw, 5rem)" },
                    children: [
                      "Devbhoomi —",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8963A" }, children: "Land of the Gods" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg max-w-2xl mx-auto mb-10",
                    style: { color: "#A8B8C0" },
                    children: "Sacred Journeys to Kedarnath, Badrinath, Yamunotri & Gangotri. Where devotion meets the Himalayan sky."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "font-mono text-sm tracking-widest uppercase",
                    style: { background: "#E8963A", color: "#0A0E14" },
                    "data-ocid": "yatra.book_yatra_button",
                    children: "Plan My Yatra"
                  }
                ) })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", "data-ocid": "yatra.packages_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-mono text-xs tracking-widest uppercase mb-3",
            style: { color: "#E8963A" },
            children: "Sacred Pilgrimages"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground", children: "Our Yatra Packages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: yatrasInTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i })
        },
        trek.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card py-20 px-4",
        "data-ocid": "yatra.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-3",
                style: { color: "#E8963A" },
                children: "The Difference"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground", children: "What Makes Our Yatra Special" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: yatraFeatures.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "p-6 rounded-2xl border border-border bg-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: f.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2", children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: f.text })
              ]
            },
            f.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4",
        "data-ocid": "yatra.calendar_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-3",
                style: { color: "#E8963A" },
                children: "Temple Dates 2025"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground", children: "Yatra Calendar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "yatra.calendar_table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground", children: "DHAM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground", children: "OPENS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground", children: "CLOSES" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground", children: "ALTITUDE" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: [
              {
                dham: "Yamunotri",
                opens: "Akshaya Tritiya (Apr/May)",
                closes: "Diwali (Oct/Nov)",
                altitude: "3,291m"
              },
              {
                dham: "Gangotri",
                opens: "Akshaya Tritiya (Apr/May)",
                closes: "Diwali (Oct/Nov)",
                altitude: "3,048m"
              },
              {
                dham: "Kedarnath",
                opens: "Akshaya Tritiya (Apr/May)",
                closes: "Bhai Dooj (Nov)",
                altitude: "3,583m"
              },
              {
                dham: "Badrinath",
                opens: "Akshaya Tritiya (Apr/May)",
                closes: "Diwali (Oct/Nov)",
                altitude: "3,133m"
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-card transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 font-display italic text-foreground text-base", children: row.dham }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-muted-foreground", children: row.opens }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-muted-foreground", children: row.closes }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-4 px-4 font-mono text-xs",
                      style: { color: "#4ABFDB" },
                      children: row.altitude
                    }
                  )
                ]
              },
              row.dham
            )) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card py-20 px-4",
        "data-ocid": "yatra.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground", children: "Yatri Voices" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: yataraTestimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "p-6 rounded-2xl border border-border bg-background",
              "data-ocid": `yatra.testimonial.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic leading-relaxed mb-4", children: [
                  "“",
                  t.text,
                  "”"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.city })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-mono px-2.5 py-1 rounded-full",
                      style: {
                        background: "rgba(232,150,58,0.1)",
                        color: "#E8963A"
                      },
                      children: t.yatra
                    }
                  )
                ] })
              ]
            },
            t.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 text-center",
        style: {
          background: "linear-gradient(135deg, rgba(232,150,58,0.15) 0%, rgba(232,150,58,0.05) 100%)"
        },
        "data-ocid": "yatra.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground mb-4", children: "Begin Your Sacred Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Talk to our yatra specialists. We'll plan every detail — from registration to darshan." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              className: "font-mono text-sm tracking-widest uppercase",
              style: { background: "#E8963A", color: "#0A0E14" },
              "data-ocid": "yatra.contact_button",
              children: "Plan My Yatra"
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  YatraPage as default
};
