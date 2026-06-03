import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, B as Button, P as Phone, b as MessageCircle, a as Mountain, L as Link, r as reactExports } from "./index-vYOW-QfD.js";
import { B as Badge } from "./badge-DuvBcwOn.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { S as SEOHead } from "./SEOHead-uX42wGT1.js";
import { G as Globe, I as IdCard, B as BadgeCheck } from "./id-card-C7dmUthe.js";
import { A as ArrowRight } from "./arrow-right-CYR5LsnP.js";
import { H as Heart } from "./heart-mZleXww0.js";
import { S as Shield } from "./shield-DctcqSRy.js";
import { F as FileText } from "./file-text-BLdPr0Pz.js";
import { P as Plane } from "./plane-CJiPlDoq.js";
import { S as Star } from "./star-BLOO0ZgP.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { C as Clock } from "./clock-CncI7fGv.js";
import { U as Users } from "./users-DiG3WeOD.js";
import { C as ChevronUp } from "./chevron-up-c5oEDrdS.js";
import { C as ChevronDown } from "./chevron-down-DnTYkto-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode);
const featuredYatras = ["char-dham", "do-dham", "kedarnath-yatra"];
const faqs = [
  {
    question: "Can foreign nationals do the Char Dham Yatra?",
    answer: "Yes — foreign nationals are welcome at all four dhams. However, certain restricted areas near the Tibet border (like Mana Village beyond a point) require special permits. We handle all permit paperwork for international yatris."
  },
  {
    question: "What is the best time for foreign nationals to visit?",
    answer: "May–June and September–October are ideal. The temples are open, weather is pleasant, and roads are accessible. Avoid July–August (monsoon landslides) and November–April (temples closed, heavy snow)."
  },
  {
    question: "Do I need to register for Char Dham Yatra?",
    answer: "Yes — Uttarakhand government requires biometric registration for all yatris. We complete this process on your behalf using your passport copy. No need to visit registration centers."
  },
  {
    question: "Is the Char Dham Yatra physically demanding?",
    answer: "Kedarnath requires a 19 km trek (or helicopter). Yamunotri requires a 6 km trek. Gangotri and Badrinath are road-accessible. We offer pony, palki, and helicopter options for all trek sections."
  },
  {
    question: "What should I wear at the temples?",
    answer: "Modest clothing covering shoulders and knees. Remove leather items (belts, wallets) before entering temples. We provide a detailed dress code and temple etiquette guide after booking."
  },
  {
    question: "Can I take photos at the temples?",
    answer: "Photography is allowed outside temple complexes. Inside the sanctum sanctorum, photography is prohibited at all four dhams. Drone photography requires special permits — we can arrange this."
  },
  {
    question: "What currency should I carry?",
    answer: "Indian Rupees (INR). ATMs are available at Haridwar, Rishikesh, Rudraprayag, and Joshimath but not at the dhams themselves. Carry sufficient cash for donations, prasad, and personal expenses."
  },
  {
    question: "Do you provide vegetarian meals?",
    answer: "Yes — all meals on our Char Dham packages are pure vegetarian (satvik) as per temple tradition. We accommodate vegan, Jain, and gluten-free diets with advance notice."
  }
];
function YatraCard({ trek, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300",
      "data-ocid": `foreign.yatra.item.${index + 1}`,
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
                  "data-ocid": "foreign.yatra.view_button",
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
      "data-ocid": `foreign.yatra.faq.item.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenIndex(openIndex === i ? null : i),
            className: "w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors",
            "data-ocid": `foreign.yatra.faq.toggle.${i + 1}`,
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
function CharDhamForForeigners() {
  const resolvedYatras = featuredYatras.map((id) => treksData.find((t) => t.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Char Dham Yatra for Foreign Nationals 2026 | Global Trek",
        description: "Char Dham Yatra packages for international visitors. Registration support, English-speaking guides, helicopter options. Kedarnath, Badrinath, Gangotri, Yamunotri 2026.",
        canonical: "https://www.globaltrek.in/char-dham-for-foreigners",
        geoRegion: "IN-UT",
        lat: 30.0668,
        lng: 79.0193,
        geoPlacename: "Uttarakhand, India"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://source.unsplash.com/1600x900/?kedarnath,temple,himalaya,pilgrimage",
              alt: "Char Dham Yatra for foreign nationals",
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
                "International Pilgrims Welcome"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight", children: "Char Dham Yatra for Foreign Nationals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 mb-2 font-medium", children: "India's holiest pilgrimage — now accessible to devotees from every nation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed", children: "The Char Dham Yatra is one of the most sacred spiritual journeys in Hinduism. We make it accessible, comfortable, and deeply meaningful for international pilgrims with complete logistics, visa support, and English-speaking guides." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#yatra-packages",
                    "data-ocid": "foreign.yatra.hero.book_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
                        children: [
                          "View Yatra Packages",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visa-info", "data-ocid": "foreign.yatra.hero.visa_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3 h-3 mr-1" }),
                    "The Sacred Circuit"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "The Four Divine Abodes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Established by Adi Shankaracharya in the 8th century, these four dhams represent the spiritual heart of the Himalayas" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          {
            name: "Yamunotri",
            deity: "Goddess Yamuna",
            altitude: "3,291m (10,797 ft)",
            desc: "The source of the Yamuna River. A 6 km trek from Janki Chatti through thermal springs and mountain terrain.",
            color: "bg-blue-500/10 text-blue-600"
          },
          {
            name: "Gangotri",
            deity: "Goddess Ganga",
            altitude: "3,048m (10,000 ft)",
            desc: "The origin of the holy Ganga. Road-accessible temple on the Bhagirathi River with stunning mountain views.",
            color: "bg-cyan-500/10 text-cyan-600"
          },
          {
            name: "Kedarnath",
            deity: "Lord Shiva",
            altitude: "3,583m (11,755 ft)",
            desc: "The holiest Shiva shrine and one of the 12 Jyotirlingas. A 19 km trek or helicopter ride to the ancient stone temple.",
            color: "bg-primary/10 text-primary"
          },
          {
            name: "Badrinath",
            deity: "Lord Vishnu",
            altitude: "3,133m (10,279 ft)",
            desc: "The most important Vishnu temple in India. Road-accessible with hot springs, Mana Village, and Himalayan grandeur.",
            color: "bg-accent/10 text-accent"
          }
        ].map((dham, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow text-center",
            "data-ocid": `foreign.yatra.dham.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-14 h-14 rounded-xl ${dham.color} flex items-center justify-center mx-auto mb-4`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-7 h-7" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1", children: dham.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mb-3", children: dham.deity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: dham.altitude }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: dham.desc })
            ]
          },
          dham.name || `dham-${i}`
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Built for International Pilgrims" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-primary" }),
            title: "Spiritual Guidance",
            desc: "Our yatra guides explain the mythology, rituals, and significance of each dham in English. Deepen your spiritual understanding."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary" }),
            title: "Complete Safety",
            desc: "Medical oxygen, first aid, satellite phone, and emergency evacuation plan at every dham. Your safety is our dharma."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
            title: "Permit Handling",
            desc: "We handle all biometric registration, temple permits, and restricted area paperwork. You focus on the pilgrimage."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-5 h-5 text-primary" }),
            title: "Airport Transfers",
            desc: "Delhi IGI Airport pickup and drop included. VIP meet-and-greet and assistance with luggage and customs."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-primary" }),
            title: "Comfortable Stays",
            desc: "Hotels, dharamshalas, and guesthouses carefully selected for cleanliness, safety, and proximity to temples."
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary" }),
            title: "24/7 Support",
            desc: "Dedicated international support line. WhatsApp, email, and emergency contact available throughout your yatra."
          }
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow",
            "data-ocid": `foreign.yatra.why.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
            ]
          },
          item.title || `item-${i}`
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "yatra-packages", className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
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
                    "Yatra Packages"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Choose Your Sacred Journey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: "From the complete Char Dham circuit to focused pilgrimages — we have a package for every seeker" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: resolvedYatras.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(YatraCard, { trek, index: i }, trek.id)) })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Safe & Sacred" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "Begin Your Sacred Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-xl mx-auto", children: "Join hundreds of international pilgrims who complete the Char Dham Yatra with us every year. Let us handle the logistics while you focus on the divine." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#yatra-packages",
                  "data-ocid": "foreign.yatra.cta.book_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
                      children: [
                        "Book Your Yatra",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20interested%20in%20Char%20Dham%20Yatra%20for%20foreign%20nationals",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "foreign.yatra.cta.whatsapp_button",
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:+919876543210",
                  "data-ocid": "foreign.yatra.cta.call_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
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
  CharDhamForForeigners as default
};
