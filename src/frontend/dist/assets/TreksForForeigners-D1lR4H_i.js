import { j as jsxRuntimeExports, B as Button, P as Phone, b as MessageCircle, a as Mountain, L as Link, r as reactExports } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { S as SEOHead, P as Plane } from "./SEOHead-DsSO_OEF.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import { G as Globe, I as IdCard, B as BadgeCheck } from "./id-card-DZpJYdh2.js";
import { A as ArrowRight } from "./arrow-right-ABP3TPB6.js";
import { S as Shield } from "./shield-LxBVxM2z.js";
import { F as FileText } from "./file-text-DcxFbYs8.js";
import { S as Star } from "./star-C8uGHq0g.js";
import { C as CreditCard } from "./credit-card-C8spIcpC.js";
import { C as Calendar } from "./calendar-BB9CmmUM.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { U as Users } from "./users-GoUlh9qe.js";
import { C as ChevronUp } from "./chevron-up-iVEGVy5-.js";
import { C as ChevronDown } from "./chevron-down-OeUu8U61.js";
const featuredTreks = [
  "kedarkantha",
  "hampta-pass",
  "chopta-tungnath",
  "har-ki-dun",
  "kuari-pass",
  "beas-kund"
];
const faqs = [
  {
    question: "Do I need a visa to trek in India?",
    answer: "Yes — most foreign nationals require an Indian e-Visa (valid for 60 days) or a regular tourist visa. We provide a detailed visa guide and invitation letter for your application. Citizens of Nepal and Bhutan do not need a visa."
  },
  {
    question: "Is it safe for solo female trekkers?",
    answer: "Absolutely. India is generally safe for solo female travelers, especially on organized treks. We have female trek leaders available on request, and our groups are mixed and supportive. Many of our solo female trekkers return year after year."
  },
  {
    question: "What is the best trek for first-time visitors to India?",
    answer: "Kedarkantha (5 days, Easy-Moderate) is our top recommendation for first-timers. It offers a complete Himalayan experience — snow, summit, forests, and culture — without extreme altitude or technical difficulty."
  },
  {
    question: "Do you provide airport pickup from Delhi?",
    answer: "Yes — all our international packages include Delhi IGI Airport pickup and drop. We also offer a 'Delhi to Mountains' package that includes city sightseeing, hotel stay, and transport to the trek base."
  },
  {
    question: "What vaccinations do I need?",
    answer: "No mandatory vaccinations for trekking. Recommended: Hepatitis A & B, Typhoid, Tetanus, and routine vaccinations. Consult your doctor 4–6 weeks before travel. We provide a detailed health advisory after booking."
  },
  {
    question: "Can I get a SIM card in India?",
    answer: "Yes — we assist with SIM card procurement at Delhi airport. Airtel and Jio have the best mountain coverage. Note: BSNL is the only network at most trek base camps."
  },
  {
    question: "What currency should I bring?",
    answer: "Indian Rupees (INR). USD and EUR can be exchanged at Delhi airport or authorized forex centers. ATMs are available in Dehradun, Manali, and Rishikesh but not at trek bases. Carry cash for personal expenses."
  },
  {
    question: "Do you offer private/custom treks for small groups?",
    answer: "Yes — we specialize in private treks for 2–8 people. Custom itinerary, private guide, flexible dates, and personalized service. Contact us for a custom quote."
  }
];
function TrekCard({ trek, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300",
      "data-ocid": `foreign.trek.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: `https://source.unsplash.com/800x600/?${trek.imageQuery}`,
              alt: trek.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/90 text-primary-foreground text-xs", children: trek.difficulty }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/90 text-accent-foreground text-xs", children: [
              trek.duration.split(" ")[0],
              "D"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1", children: trek.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: trek.maxAltitude })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: trek.groupSize })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-primary", children: trek.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "per person" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/trek/$trekId",
              params: { trekId: trek.id },
              className: "mt-4 block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
                  "data-ocid": "foreign.trek.view_button",
                  children: [
                    "View Details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function FAQAccordion({
  faqs: faqs2
}) {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border/60 rounded-xl overflow-hidden bg-card",
      "data-ocid": `foreign.faq.item.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenIndex(openIndex === i ? null : i),
            className: "w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors",
            "data-ocid": `foreign.faq.toggle.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground pr-4", children: faq.question }),
              openIndex === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-primary shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-muted-foreground shrink-0" })
            ]
          }
        ),
        openIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            transition: { duration: 0.2 },
            className: "px-5 pb-5 text-muted-foreground leading-relaxed",
            children: faq.answer
          }
        )
      ]
    },
    faq.question.slice(0, 30)
  )) });
}
function TreksForForeigners() {
  const resolvedTreks = featuredTreks.map((id) => treksData.find((t) => t.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Himalayan Trekking for International Visitors | India — Global Trek",
        description: "Trekking in India for foreigners. Expert-guided Himalayan treks in Uttarakhand and Himachal Pradesh. Visa-friendly packages, English-speaking certified guides, safe group departures.",
        canonical: "https://www.globaltrek.in/treks-for-foreigners",
        geoRegion: "IN",
        lat: 30.3165,
        lng: 78.0322,
        geoPlacename: "Dehradun, Uttarakhand, India"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://source.unsplash.com/1600x900/?himalaya,trekking,international",
              alt: "Himalayan trekking for international visitors",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/90 text-accent-foreground mb-4 text-sm px-4 py-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 mr-1" }),
                "International Visitors"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight", children: "Himalayan Trekking for International Visitors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 mb-2 font-medium", children: "Experience India's greatest treks with world-class hospitality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed", children: "From the snow-capped peaks of Uttarakhand to the high passes of Himachal Pradesh, we make Himalayan trekking accessible, safe, and unforgettable for travelers from every corner of the world." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#featured-treks",
                    "data-ocid": "foreign.hero.explore_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
                        children: [
                          "Explore Treks",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visa-info", "data-ocid": "foreign.hero.visa_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-white/30 text-white hover:bg-white/10 px-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "w-4 h-4 mr-2" }),
                      "Visa Guide"
                    ]
                  }
                ) })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "mb-3 text-primary border-primary/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-3 h-3 mr-1" }),
                    "Why Choose Global Trek"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Built for International Trekkers" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-primary" }),
            title: "English-Speaking Guides",
            desc: "All our trek leaders are fluent in English and trained in international hospitality standards."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary" }),
            title: "Comprehensive Insurance",
            desc: "We include travel insurance in every international package. Optional add-ons for extreme sports coverage."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
            title: "Visa Assistance",
            desc: "Invitation letters, visa guidance, and documentation support for all nationalities."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-5 h-5 text-primary" }),
            title: "Airport Transfers",
            desc: "Delhi IGI Airport pickup and drop included. VIP meet-and-greet service available."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-primary" }),
            title: "International Cuisine",
            desc: "While we serve authentic Indian meals, we accommodate all dietary restrictions — vegan, gluten-free, kosher, halal."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary" }),
            title: "24/7 Support",
            desc: "Dedicated international support line with WhatsApp, email, and emergency contact. Timezone-aware response."
          }
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow",
            "data-ocid": `foreign.why.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
            ]
          },
          item.title || `item-${i}`
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visa-info", className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "mb-3 text-primary border-primary/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3 h-3 mr-1" }),
                    "Travel Essentials"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Visa, Permits & Documents" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: "bg-card border border-border/50 rounded-xl p-8",
              "data-ocid": "foreign.visa.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "w-6 h-6 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground", children: "Indian e-Visa" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Most common for trekkers" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Apply online at",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "https://indianvisaonline.gov.in",
                          className: "text-primary underline",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "indianvisaonline.gov.in"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Valid for 60 days from arrival. Double entry for tourism." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Processing time: 3–5 business days. Apply at least 2 weeks before travel." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cost: $25–$80 depending on nationality." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "We provide an invitation letter to support your application." })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: "bg-card border border-border/50 rounded-xl p-8",
              "data-ocid": "foreign.permits.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground", children: "Trek Permits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Handled by Global Trek" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Inner Line Permits (ILP) for border areas — we handle all paperwork." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Forest Department camping permits included in all packages." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Protected Area Permits (PAP) for Ladakh/Spiti — arranged 30 days in advance." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Char Dham Yatra registration — biometric process assisted by our team." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No additional permit fees — everything included in your package price." })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "featured-treks", className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "mb-3 text-primary border-primary/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 mr-1" }),
                    "Recommended for International Trekkers"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Best Treks for First-Time Visitors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: "These treks offer the perfect balance of adventure, safety, and cultural immersion for international travelers" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: resolvedTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-primary/5 border-y border-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Certified Guides" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fixed Departures" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Instant Booking" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "Ready for Your Himalayan Adventure?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-xl mx-auto", children: "Join 500+ international trekkers who explore the Himalayas with us every year. Small groups, expert guides, and memories that last a lifetime." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#featured-treks", "data-ocid": "foreign.cta.book_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
                  children: [
                    "Book a Trek",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20an%20international%20visitor%20interested%20in%20Himalayan%20treks",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "foreign.cta.whatsapp_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-green-500/30 text-green-600 hover:bg-green-50 px-8",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 mr-2" }),
                        "WhatsApp Us"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919876543210", "data-ocid": "foreign.cta.call_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-primary/30 text-primary hover:bg-primary/5 px-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 mr-2" }),
                    "Call Now"
                  ]
                }
              ) })
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "mb-3 text-primary border-primary/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3 mr-1" }),
                    "Common Questions"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Frequently Asked Questions" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { faqs })
      ] }) })
    ] })
  ] });
}
export {
  TreksForForeigners as default
};
