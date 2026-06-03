import { j as jsxRuntimeExports, m as motion, L as Link, B as Button, r as reactExports } from "./index-vYOW-QfD.js";
import { C as ChevronDown } from "./chevron-down-DnTYkto-.js";
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
const yatraCards = [
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    subtitle: "One of 12 Jyotirlingas · Rudraprayag, Uttarakhand",
    duration: "4 Days",
    price: "From ₹12,000",
    opens: "Opens May 2, 2026",
    closes: "Closes Bhai Dooj (Nov)",
    altitude: "3,583m / 11,755ft",
    desc: "Trek or helicopter to Lord Shiva's most powerful abode in the Himalayas. One of 12 sacred Jyotirlingas, accessible only May–Nov.",
    icon: "🕉️",
    slug: "/yatra/kedarnath",
    highlights: [
      "Helicopter option available",
      "Priority darshan slots",
      "Medical support included"
    ]
  },
  {
    id: "badrinath",
    name: "Badrinath Yatra",
    subtitle: "Lord Vishnu's Sacred Abode · Chamoli, Uttarakhand",
    duration: "3 Days",
    price: "From ₹9,500",
    opens: "Opens April 30, 2026",
    closes: "Closes Diwali (Oct/Nov)",
    altitude: "3,133m / 10,279ft",
    desc: "Witness the majestic Badrivishal idol, Tapt Kund holy dip, and the awe-inspiring Neelkanth peak backdrop.",
    icon: "🙏",
    slug: "/yatra/badrinath",
    highlights: [
      "Tapt Kund holy dip",
      "Mana Village — last Indian village",
      "Brahma Kapal rituals"
    ]
  },
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    subtitle: "All 4 Sacred Dhams · Uttarakhand",
    duration: "12 Days",
    price: "From ₹32,000",
    opens: "Opens April 30, 2026",
    closes: "Closes Diwali (Oct/Nov)",
    altitude: "Multiple altitudes up to 3,583m",
    desc: "The ultimate Hindu pilgrimage: Yamunotri → Gangotri → Kedarnath → Badrinath. A life-changing spiritual journey.",
    icon: "✨",
    slug: "/yatra/char-dham",
    highlights: [
      "Complete 4-dham circuit",
      "Expert yatra guide throughout",
      "All permits handled"
    ]
  },
  {
    id: "do-dham",
    name: "Do Dham Yatra",
    subtitle: "Kedarnath + Badrinath · Uttarakhand",
    duration: "7 Days",
    price: "From ₹22,000",
    opens: "Opens May 2026",
    closes: "Closes Nov 2026",
    altitude: "Up to 3,583m",
    desc: "Lord Shiva at Kedarnath, Lord Vishnu at Badrinath — the divine twin pilgrimage for those with limited time.",
    icon: "🌸",
    slug: "/yatra/do-dham",
    highlights: [
      "Kedarnath + Badrinath",
      "7 days — ideal schedule",
      "Flexible transport options"
    ]
  }
];
const yatraFaqs = [
  {
    q: "What is a Char Dham Yatra?",
    a: "Char Dham refers to the four sacred shrines of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath. Completing all four in a single journey is one of the most spiritually significant acts in Hinduism, believed to cleanse all sins and grant moksha."
  },
  {
    q: "Is prior registration required for the yatra?",
    a: "Yes. The Uttarakhand government mandates biometric registration for all yatris visiting Kedarnath and Badrinath. Global Trek handles the complete registration process on your behalf as part of every yatra package."
  },
  {
    q: "When do the Char Dham temples open in 2026?",
    a: "Yamunotri and Gangotri open on Akshaya Tritiya (around May 1, 2026). Kedarnath opens May 2, 2026. Badrinath opens April 30, 2026. All temples close in October/November for winter."
  },
  {
    q: "Can senior citizens do the Kedarnath Yatra?",
    a: "Yes. Helicopter packages to Kedarnath are specifically recommended for seniors, those with joint problems, or anyone who cannot undertake the 16km trek. Global Trek pre-books helicopter seats and provides medical support throughout."
  },
  {
    q: "What is the difference between a trek and a yatra?",
    a: "A trek is primarily an outdoor adventure focused on natural landscapes and physical challenge. A yatra is a sacred pilgrimage with deep spiritual purpose — visiting holy temples, performing rituals, and seeking divine blessings. Some yatras involve a trek component (like Kedarnath), but the intent and experience are fundamentally different."
  }
];
function FaqItem({ q, a }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-between py-4 text-left gap-4",
        onClick: () => setOpen((v) => !v),
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-4 text-sm text-muted-foreground leading-relaxed", children: a })
  ] });
}
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
                    children: "Sacred Himalayan Pilgrimages"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display italic text-foreground mb-6",
                    style: { fontSize: "clamp(2.5rem, 7vw, 5rem)" },
                    children: "Sacred Himalayan Yatras"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg max-w-2xl mx-auto mb-10",
                    style: { color: "#A8B8C0" },
                    children: "Kedarnath, Badrinath, Char Dham, Do Dham — four sacred circuits where Himalayan grandeur meets divine grace. Every yatra crafted with reverence, safety, and expert guidance."
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
            children: "Sacred Pilgrimages 2026"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground", children: "Our Yatra Packages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: yatraCards.map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "rounded-2xl border border-border bg-card overflow-hidden flex flex-col",
          "data-ocid": `yatra.${y.id}_card`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-6",
                style: {
                  background: "linear-gradient(135deg, #0D1A0F 0%, #1a0a00 100%)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: y.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-mono px-2.5 py-1 rounded-full",
                        style: {
                          background: "rgba(232,150,58,0.15)",
                          color: "#E8963A"
                        },
                        children: y.opens
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl italic text-white mb-1", children: y.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs font-mono", children: y.subtitle })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: y.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: "DURATION" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-0.5", children: y.duration })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: "PRICE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-semibold mt-0.5",
                      style: { color: "#1A7A4C" },
                      children: y.price
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: "CLOSES" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-0.5", children: y.closes })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: "ALTITUDE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-0.5", children: y.altitude })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: y.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-xs text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px]",
                        style: { background: "#1A7A4C" },
                        children: "✓"
                      }
                    ),
                    h
                  ]
                },
                h
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: y.slug, className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full font-mono text-xs tracking-wider",
                  style: { background: "#E8963A", color: "#0A0E14" },
                  "data-ocid": `yatra.${y.id}_book_button`,
                  children: [
                    "Book ",
                    y.name,
                    " →"
                  ]
                }
              ) })
            ] })
          ]
        },
        y.id
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
        className: "bg-card py-20 px-4",
        "data-ocid": "yatra.educational_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-3",
                style: { color: "#E8963A" },
                children: "For First-Time Pilgrims"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground mb-4", children: "What is a Yatra?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: "A yatra (Sanskrit: यात्रा) is a sacred pilgrimage — a journey undertaken with spiritual intention. Unlike a trek, which focuses on nature and physical challenge, a yatra is about devotion, surrender, and seeking divine blessings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children: "The Char Dham yatra of Uttarakhand is considered the most sacred pilgrimage in Hinduism — believed to wash away all sins and grant liberation (moksha). Even for those without a religious background, the journey through the Himalayas to these ancient temples is deeply transformative." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
              { icon: "🙏", label: "Spiritual purpose" },
              { icon: "🏔️", label: "Himalayan settings" },
              { icon: "🛕", label: "Ancient temples" },
              { icon: "👨‍👩‍👧‍👦", label: "All ages welcome" }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
                ]
              },
              item.label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl italic text-foreground mb-4", children: "Yatra vs Trek — Which is for You?" }),
            [
              {
                label: "Choose a Yatra if...",
                color: "#E8963A",
                points: [
                  "You seek spiritual blessings & religious experience",
                  "Visiting ancient temples is a life goal",
                  "You prefer comfortable accommodation & meals",
                  "You're traveling with elders, parents, or family"
                ]
              },
              {
                label: "Choose a Trek if...",
                color: "#1A7A4C",
                points: [
                  "You love physical challenge & wilderness camping",
                  "High-altitude landscapes & summits excite you",
                  "You want to push your fitness limits",
                  "You're comfortable sleeping in tents at 3,000m+"
                ]
              }
            ].map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 rounded-xl border border-border bg-background",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-semibold text-sm mb-2",
                      style: { color: group.color },
                      children: group.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: group.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "text-xs text-muted-foreground flex gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: group.color }, children: "•" }),
                        p
                      ]
                    },
                    p
                  )) })
                ]
              },
              group.label
            ))
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", "data-ocid": "yatra.faq_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-mono text-xs tracking-widest uppercase mb-3",
            style: { color: "#E8963A" },
            children: "Common Questions"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic text-foreground", children: "Yatra FAQ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border rounded-2xl border border-border bg-card px-6", children: yatraFaqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: faq.q, a: faq.a }, faq.q)) })
    ] }) }),
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
