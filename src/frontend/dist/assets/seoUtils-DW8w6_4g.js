import { c as createLucideIcon, j as jsxRuntimeExports, M as MapPin, B as Button, a as Mountain, b as MessageCircle, P as Phone, L as Link, r as reactExports } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { m as motion } from "./proxy-C8OEbdYA.js";
import { A as ArrowRight } from "./arrow-right-ABP3TPB6.js";
import { T as TrendingUp } from "./trending-up-B6L0Gg4b.js";
import { P as Plane } from "./SEOHead-DsSO_OEF.js";
import { C as Car } from "./car-gF900-P5.js";
import { S as Star } from "./star-C8uGHq0g.js";
import { S as Shield } from "./shield-LxBVxM2z.js";
import { C as Calendar } from "./calendar-BB9CmmUM.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { U as Users } from "./users-GoUlh9qe.js";
import { C as ChevronUp } from "./chevron-up-iVEGVy5-.js";
import { C as ChevronDown } from "./chevron-down-OeUu8U61.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
];
const Bus = createLucideIcon("bus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }]
];
const TramFront = createLucideIcon("tram-front", __iconNode);
function TrekCard({ trek, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300",
      "data-ocid": `city.trek.item.${index + 1}`,
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
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-xs font-medium flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
            trek.region
          ] }) })
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
                  "data-ocid": "city.trek.view_button",
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
function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border/60 rounded-xl overflow-hidden bg-card",
      "data-ocid": `city.faq.item.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenIndex(openIndex === i ? null : i),
            className: "w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors",
            "data-ocid": `city.faq.toggle.${i + 1}`,
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
function CityTrekPage({
  cityName,
  stateName,
  heroTagline,
  heroDescription,
  whyTrekPoints,
  howToReach,
  featuredTreks,
  faqs
}) {
  const resolvedTreks = featuredTreks.map((id) => treksData.find((t) => t.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `https://source.unsplash.com/1600x900/?himalaya,trekking,${cityName.toLowerCase()}`,
            alt: `Trekking from ${cityName}`,
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 mr-1" }),
              cityName,
              ", ",
              stateName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight", children: [
              "Treks from ",
              cityName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 mb-2 font-medium", children: heroTagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed", children: heroDescription }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#featured-treks", "data-ocid": "city.hero.explore_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
                  children: [
                    "Explore Treks",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how-to-reach", "data-ocid": "city.hero.reach_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-white/30 text-white hover:bg-white/10 px-8",
                  children: "How to Reach"
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 mr-1" }),
                  "Why Trek from ",
                  cityName
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "The Gateway to the Himalayas" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [0, 1, 2, 3, 4, 5].map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: slot * 0.1 },
          className: "bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow",
          "data-ocid": `city.why.item.${slot + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium leading-relaxed", children: whyTrekPoints[slot] })
          ]
        },
        `point-slot-${slot}`
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how-to-reach", className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 mr-1" }),
                  "Getting There"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: [
              "How to Reach ",
              cityName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Multiple transport options to reach your Himalayan adventure starting point" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        howToReach.byTrain && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "bg-card border border-border/50 rounded-xl p-6",
            "data-ocid": "city.reach.train",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TramFront, { className: "w-8 h-8 text-primary mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: howToReach.byTrain.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: howToReach.byTrain.details })
            ]
          }
        ),
        howToReach.byFlight && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "bg-card border border-border/50 rounded-xl p-6",
            "data-ocid": "city.reach.flight",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-8 h-8 text-primary mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: howToReach.byFlight.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: howToReach.byFlight.details })
            ]
          }
        ),
        howToReach.byBus && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            className: "bg-card border border-border/50 rounded-xl p-6",
            "data-ocid": "city.reach.bus",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { className: "w-8 h-8 text-primary mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: howToReach.byBus.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: howToReach.byBus.details })
            ]
          }
        ),
        howToReach.byCar && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.3 },
            className: "bg-card border border-border/50 rounded-xl p-6",
            "data-ocid": "city.reach.car",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-8 h-8 text-primary mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: howToReach.byCar.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: howToReach.byCar.details })
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
                  "Featured Treks"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: [
              "Best Treks from ",
              cityName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: [
              "Hand-picked Himalayan experiences curated for trekkers starting from ",
              cityName
            ] })
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8 max-w-xl mx-auto", children: [
            "Book your trek from ",
            cityName,
            " today. Small groups, expert guides, and unforgettable memories await."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#featured-treks", "data-ocid": "city.cta.book_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20interested%20in%20treks%20from%20${cityName}",
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "city.cta.whatsapp_button",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919876543210", "data-ocid": "city.cta.call_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
  ] });
}
const CITY_DESCRIPTIONS = {
  delhi: "Weekend and long Himalayan treks from Delhi. Direct transport, expert guides, fixed departures to Kedarkantha, Hampta Pass, Chopta & more. Book 2026 batches.",
  dehradun: "Best day and overnight treks from Dehradun — the gateway to Garhwal Himalayas. Kedarkantha, Har Ki Dun, Nag Tibba & more with local expert guides.",
  rishikesh: "Himalayan adventure packages from Rishikesh. Yoga capital to mountain trails — Chopta, Valley of Flowers, Kuari Pass & Kedarnath treks.",
  manali: "Treks from Manali — Hampta Pass, Beas Kund, Sar Pass & more. Kullu and Lahaul valley expert-guided packages from ₹4,000. Book 2026.",
  chandigarh: "Himachal Pradesh & Uttarakhand trek packages from Chandigarh. Hampta Pass, Triund, Kedarkantha & more with transport included.",
  mumbai: "Himalayan treks for Mumbai trekkers. Flight + trek packages to Uttarakhand & Himachal. Group departures with Mumbai coordinators.",
  bangalore: "Himalayan treks from Bangalore. Flight + trek packages to Kedarkantha, Hampta Pass & more. South India group batches 2026."
};
function getCityTrekSEO(city, cityDisplay) {
  const key = city.toLowerCase();
  const description = CITY_DESCRIPTIONS[key] || `Himalayan trek packages from ${cityDisplay}. Expert-guided treks in Uttarakhand and Himachal Pradesh. Book 2026 batches with Global Trek.`;
  return {
    title: `Himalayan Treks from ${cityDisplay} 2026 | Group Packages | Global Trek`,
    description,
    canonical: `https://www.globaltrek.in/trek-from-${key}`,
    ogType: "website",
    geoRegion: "IN"
  };
}
export {
  CityTrekPage as C,
  getCityTrekSEO as g
};
