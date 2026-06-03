import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, S as Search, M as MapPin } from "./index-BO08U1_a.js";
import { B as Badge } from "./badge-BAMot-g0.js";
import { b as blogsData } from "./blogs-DvKuH727.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { y as yatraData } from "./yatra-DYV3tsLc.js";
import { A as AnimatePresence } from "./index-drb-oQGD.js";
import { r as resolveElements, m as motion } from "./proxy-DtZzUSuL.js";
import { A as ArrowRight } from "./arrow-right-Cjr1nDBz.js";
import { S as Shield } from "./shield-YyOQzB5m.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { C as ChevronRight } from "./chevron-right-CL9bLnmI.js";
import { S as Star } from "./star-CbEESZbb.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Compass = createLucideIcon("compass", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const heroSlides = [
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    tagline: "India's #1 Winter Summit Trek at 12,500 ft",
    description: "Snow-blanketed meadows, frozen lakes, and a sunrise summit that stops time. The most iconic winter trek in India.",
    image: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg",
    badge: "🏆 India's #1 Winter Trek",
    price: "₹8,500",
    duration: "5 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/kedarkantha"
  },
  {
    id: "chopta",
    name: "Chopta Tungnath",
    tagline: "World's Highest Shiva Temple at 13,123 ft",
    description: "The Mini Switzerland of India — rhododendron forests, Tungnath temple, and 360° panoramas from Chandrashila.",
    image: "/assets/generated/hero-chopta.dim_1920x1080.jpg",
    badge: "🕉️ Sacred Mountain Trek",
    price: "₹6,500",
    duration: "3 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/chopta-tungnath"
  },
  {
    id: "hampta",
    name: "Hampta Pass",
    tagline: "The Most Dramatic Himalayan Crossover at 14,100 ft",
    description: "Trek from lush green Kullu Valley to the stark moonscapes of Lahaul — two completely different worlds in 5 days.",
    image: "/assets/generated/hero-hampta.dim_1920x1080.jpg",
    badge: "⛰️ Best HP Trek",
    price: "₹11,000",
    duration: "5 Days",
    difficulty: "Moderate",
    slug: "/treks/himachal-pradesh/hampta-pass"
  },
  {
    id: "harkidun",
    name: "Har Ki Dun Trek",
    tagline: "Valley of the Gods — Where Pandavas Walked to Heaven",
    description: "Ancient glacial valley, medieval Garhwali villages, and Swargarohini peak — mythologically rich.",
    image: "/assets/generated/hero-harkidun.dim_1920x1080.jpg",
    badge: "🏛️ Heritage Trek",
    price: "₹9,500",
    duration: "6 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/har-ki-dun"
  },
  {
    id: "chardham",
    name: "Char Dham Yatra",
    tagline: "The Ultimate Sacred Himalayan Pilgrimage",
    description: "Yamunotri, Gangotri, Kedarnath, Badrinath — four sacred dhams, one transformative journey.",
    image: "/assets/generated/hero-chardham.dim_1920x1080.jpg",
    badge: "🙏 Sacred Yatra",
    price: "₹32,000",
    duration: "12 Days",
    difficulty: "Easy",
    slug: "/yatra/char-dham"
  }
];
const statsData = [
  { value: 1e4, suffix: "+", label: "Happy Trekkers" },
  { value: 15, suffix: "+", label: "Premium Treks" },
  { value: 98, suffix: "%", label: "Safety Record" },
  { value: 15, suffix: "+", label: "Expert Guides" }
];
const upcomingBatches = [
  {
    trek: "Kedarkantha Trek",
    date: "Dec 20–24, 2026",
    duration: "5D",
    seats: 8,
    total: 15,
    price: "₹8,500",
    status: "available",
    slug: "/booking/kedarkantha/select-batch"
  },
  {
    trek: "Chopta Tungnath",
    date: "Dec 22–24, 2026",
    duration: "3D",
    seats: 5,
    total: 15,
    price: "₹6,500",
    status: "fast",
    slug: "/booking/chopta-tungnath/select-batch"
  },
  {
    trek: "Har Ki Dun Trek",
    date: "Dec 23–28, 2026",
    duration: "6D",
    seats: 12,
    total: 15,
    price: "₹9,500",
    status: "available",
    slug: "/booking/har-ki-dun/select-batch"
  },
  {
    trek: "Hampta Pass Trek",
    date: "Jun 5–9, 2027",
    duration: "5D",
    seats: 0,
    total: 15,
    price: "₹11,000",
    status: "full",
    slug: "/booking/hampta-pass/select-batch"
  },
  {
    trek: "Kedarnath Yatra",
    date: "May 4–7, 2026",
    duration: "4D",
    seats: 3,
    total: 20,
    price: "₹12,000",
    status: "fast",
    slug: "/booking/kedarnath/select-batch"
  },
  {
    trek: "Char Dham Yatra",
    date: "May 10–23, 2026",
    duration: "14D",
    seats: 10,
    total: 20,
    price: "₹45,000",
    status: "available",
    slug: "/booking/char-dham/select-batch"
  },
  {
    trek: "Brahmatal Trek",
    date: "Jan 10–15, 2027",
    duration: "6D",
    seats: 6,
    total: 15,
    price: "₹7,500",
    status: "available",
    slug: "/booking/brahmatal/select-batch"
  },
  {
    trek: "Kedarkantha Trek",
    date: "Jan 20–24, 2027",
    duration: "5D",
    seats: 15,
    total: 15,
    price: "₹8,500",
    status: "available",
    slug: "/booking/kedarkantha/select-batch"
  }
];
const reviews = [
  {
    name: "Priya Sharma",
    city: "Bengaluru",
    rating: 5,
    date: "Kedarkantha Trek — Dec 2025",
    text: "Global Trek made my first Himalayan summit an absolute dream. The guide Ankit was phenomenal — explaining the terrain, mythology of the region, and keeping everyone's spirits high even at 3 AM for the summit push. Saw the most beautiful sunrise of my life from Kedarkantha top."
  },
  {
    name: "Rahul Mehta",
    city: "Delhi",
    rating: 5,
    date: "Hampta Pass Trek — Jun 2025",
    text: "I've done 8 treks with different companies. Global Trek is on a completely different level. The food was restaurant quality at 12,000 feet, guides have deep local knowledge, and the safety systems are serious — oxygen, pulse oximeters, daily health checks."
  },
  {
    name: "Anjali Nair",
    city: "Mumbai",
    rating: 5,
    date: "Chopta Tungnath — Oct 2025",
    text: "Solo female trekker here — felt completely safe and cared for throughout. The campfire conversations at Chopta meadow, the rhododendron forest at dawn, and finally reaching Chandrashila summit... life-changing. Booking Char Dham Yatra next."
  }
];
const reels = [
  {
    title: "Kedarkantha Summit Sunrise ❄️",
    duration: "0:58",
    likes: "12.4K",
    thumbnail: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg"
  },
  {
    title: "Chopta Snow Trek 2026",
    duration: "1:12",
    likes: "8.9K",
    thumbnail: "/assets/generated/hero-chopta.dim_1920x1080.jpg"
  },
  {
    title: "Hampta Pass Crossover ⛰️",
    duration: "0:45",
    likes: "15.1K",
    thumbnail: "/assets/generated/hero-hampta.dim_1920x1080.jpg"
  },
  {
    title: "Har Ki Dun Valley of Gods",
    duration: "1:05",
    likes: "9.3K",
    thumbnail: "/assets/generated/hero-harkidun.dim_1920x1080.jpg"
  },
  {
    title: "Kedarnath Morning Aarti 🕉️",
    duration: "0:52",
    likes: "18.7K",
    thumbnail: "/assets/generated/hero-chardham.dim_1920x1080.jpg"
  },
  {
    title: "Valley of Flowers Bloom 🌸",
    duration: "1:18",
    likes: "11.2K",
    thumbnail: "/assets/generated/region-uttarakhand.dim_800x500.jpg"
  }
];
const partners = [
  { name: "Ministry of Tourism", abbr: "MOT" },
  { name: "Uttarakhand Tourism", abbr: "UK" },
  { name: "Incredible India", abbr: "II" },
  { name: "HP Tourism", abbr: "HP" },
  { name: "ISO 9001", abbr: "ISO" },
  { name: "IRCTC", abbr: "IRCTC" },
  { name: "Decathlon Partner", abbr: "DCT" },
  { name: "Razorpay Secured", abbr: "PAY" }
];
const mapPins = [
  {
    name: "Kedarkantha",
    x: 52,
    y: 38,
    price: "₹8,500",
    dur: "5D",
    slug: "/treks/uttarakhand/kedarkantha"
  },
  {
    name: "Chopta Tungnath",
    x: 46,
    y: 52,
    price: "₹6,500",
    dur: "3D",
    slug: "/treks/uttarakhand/chopta-tungnath"
  },
  {
    name: "Har Ki Dun",
    x: 44,
    y: 32,
    price: "₹9,500",
    dur: "6D",
    slug: "/treks/uttarakhand/har-ki-dun"
  },
  {
    name: "Kuari Pass",
    x: 50,
    y: 57,
    price: "₹8,000",
    dur: "5D",
    slug: "/treks/uttarakhand/kuari-pass"
  },
  {
    name: "Kedarnath",
    x: 48,
    y: 55,
    price: "₹12,000",
    dur: "4D",
    slug: "/yatra/kedarnath"
  },
  {
    name: "Hampta Pass",
    x: 30,
    y: 28,
    price: "₹11,000",
    dur: "5D",
    slug: "/treks/himachal-pradesh/hampta-pass"
  },
  {
    name: "Sar Pass",
    x: 26,
    y: 34,
    price: "₹9,500",
    dur: "5D",
    slug: "/treks/himachal-pradesh/sar-pass"
  },
  {
    name: "Triund",
    x: 24,
    y: 38,
    price: "₹4,500",
    dur: "2D",
    slug: "/treks/himachal-pradesh/triund"
  }
];
function AnimatedCounter({
  value,
  suffix,
  duration = 2
}) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-80px" });
  reactExports.useEffect(() => {
    if (!inView2) return;
    const range = value;
    const increment = range / (duration * 60);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, 1e3 / 60);
    return () => clearInterval(timer);
  }, [inView2, value, duration]);
  const display = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString("en-IN");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    display,
    suffix
  ] });
}
function DifficultyPill({ label }) {
  const color = label.includes("Easy") && !label.includes("Moderate") ? "bg-emerald-100 text-emerald-800" : label.includes("Moderate") && !label.includes("Difficult") ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${color}`,
      style: { fontFamily: "var(--gt-font-label)" },
      children: label
    }
  );
}
function SectionHeader({
  label,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3",
        style: {
          fontFamily: "var(--gt-font-label)",
          color: "var(--gt-green-700)",
          background: "var(--gt-green-50)"
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-3", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: subtitle })
  ] });
}
function DesktopHero() {
  const [active, setActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      5e3
    );
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "hidden md:flex relative h-screen min-h-[700px] overflow-hidden",
      "data-ocid": "hero.section",
      children: [
        heroSlides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 transition-opacity duration-1000",
            style: {
              opacity: i === active ? 1 : 0,
              zIndex: i === active ? 1 : 0
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: s.image,
                  alt: s.name,
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "linear-gradient(90deg, rgba(10,46,26,0.88) 0%, rgba(10,46,26,0.55) 55%, rgba(10,46,26,0.15) 100%)"
                  }
                }
              )
            ]
          },
          s.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex w-full max-w-7xl mx-auto px-8 pt-24 pb-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-[62%] pr-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.6, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full mb-5",
                      style: {
                        fontFamily: "var(--gt-font-label)",
                        background: "rgba(46,204,113,0.18)",
                        color: "#2ecc71",
                        border: "1px solid rgba(46,204,113,0.3)"
                      },
                      children: slide.badge
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "font-display font-bold text-white leading-[1.05]",
                      style: {
                        fontSize: "clamp(40px, 5vw, 72px)",
                        letterSpacing: "-2px"
                      },
                      children: "Where Every Trail"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "font-display font-bold mb-3 leading-[1.05]",
                      style: {
                        fontSize: "clamp(40px, 5vw, 72px)",
                        letterSpacing: "-2px",
                        color: "#2ecc71"
                      },
                      children: "Tells a Story"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg mb-2 leading-relaxed max-w-xl", children: "Discover the world's most pristine Himalayan treks with India's most trusted adventure brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-8 max-w-xl", children: slide.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", "data-ocid": "hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "px-8 py-3 text-base font-semibold rounded-full",
                        style: {
                          background: "var(--gt-green-700)",
                          color: "white",
                          border: "none"
                        },
                        children: [
                          "Explore Treks ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", "data-ocid": "hero.secondary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "px-8 py-3 text-base font-semibold rounded-full",
                        style: {
                          borderColor: "rgba(255,255,255,0.5)",
                          color: "white",
                          background: "rgba(255,255,255,0.08)"
                        },
                        children: "View Itineraries"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 flex-wrap", children: [
                    { icon: "⏱", val: slide.duration },
                    { icon: "🥾", val: slide.difficulty },
                    { icon: "💰", val: `From ${slide.price}` }
                  ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-sm text-white/90",
                      style: {
                        fontFamily: "var(--gt-font-label)",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)"
                      },
                      children: [
                        p.icon,
                        " ",
                        p.val
                      ]
                    },
                    p.val
                  )) })
                ]
              },
              active
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center gap-2 mt-10",
                "data-ocid": "hero.pagination",
                children: heroSlides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `hero.tab.${i + 1}`,
                    onClick: () => setActive(i),
                    className: "transition-all duration-300",
                    style: {
                      width: i === active ? 28 : 8,
                      height: 8,
                      borderRadius: 99,
                      background: i === active ? "var(--gt-green-500)" : "rgba(255,255,255,0.4)"
                    },
                    "aria-label": `Slide ${i + 1}: ${s.name}`
                  },
                  s.id
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5 w-[35%] max-w-[260px] ml-auto", children: heroSlides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: s.slug,
              "data-ocid": `hero.card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileHover: { x: -4, scale: 1.02 },
                  transition: { duration: 0.2 },
                  className: "flex items-center gap-3 rounded-xl p-2.5 cursor-pointer",
                  style: {
                    background: i === active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    border: i === active ? "1.5px solid var(--gt-green-500)" : "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(12px)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: s.image,
                        alt: s.name,
                        className: "w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-white font-semibold text-sm truncate",
                          style: { fontFamily: "var(--gt-font-label)" },
                          children: s.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-xs", children: [
                        s.duration,
                        " · ",
                        s.price
                      ] }),
                      i === active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[10px] font-semibold",
                          style: { color: "var(--gt-green-500)" },
                          children: "● Active"
                        }
                      )
                    ] })
                  ]
                }
              )
            },
            s.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 z-10",
            style: {
              background: "rgba(10,46,26,0.75)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(255,255,255,0.1)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-8 py-4 flex items-center justify-around", children: statsData.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: s.value, suffix: s.suffix }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-white/60 text-xs uppercase tracking-wider mt-0.5",
                  style: { fontFamily: "var(--gt-font-label)" },
                  children: s.label
                }
              )
            ] }, s.label)) })
          }
        )
      ]
    }
  );
}
function MobileHero() {
  const [active, setActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      5e3
    );
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "md:hidden", "data-ocid": "mobile.hero.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "px-4 pt-4 pb-3",
        style: { background: "var(--gt-green-800)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 px-4 py-2.5 rounded-full",
              style: {
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-white/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/explore",
                    className: "flex-1 text-white/60 text-sm",
                    "data-ocid": "mobile.search_input",
                    children: "Search treks, yatras..."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-3 overflow-x-auto pb-1", children: ["All", "Treks", "Yatra", "Winter", "Monsoon", "Packages"].map(
            (cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer",
                style: {
                  fontFamily: "var(--gt-font-label)",
                  background: i === 0 ? "var(--gt-green-500)" : "rgba(255,255,255,0.12)",
                  color: "white"
                },
                children: cat
              },
              cat
            )
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[55vw] min-h-[240px] max-h-[340px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: slide.image,
                alt: slide.name,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(0deg, rgba(10,46,26,0.85) 0%, transparent 60%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-xl mb-1", children: slide.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mb-2", children: slide.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "px-2 py-0.5 rounded-full text-xs font-semibold",
                    style: {
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-green-700)",
                      color: "white"
                    },
                    children: [
                      "From ",
                      slide.price
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-2 py-0.5 rounded-full text-xs font-semibold",
                    style: {
                      fontFamily: "var(--gt-font-label)",
                      background: "rgba(255,255,255,0.15)",
                      color: "white"
                    },
                    children: slide.duration
                  }
                )
              ] })
            ] })
          ]
        },
        active
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-2 right-4 flex gap-1",
          "data-ocid": "mobile.hero.pagination",
          children: heroSlides.map((slide2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActive(i),
              className: "transition-all",
              style: {
                width: i === active ? 16 : 6,
                height: 6,
                borderRadius: 99,
                background: i === active ? "var(--gt-green-500)" : "rgba(255,255,255,0.5)"
              },
              "aria-label": `Slide ${i + 1}`
            },
            slide2.name
          ))
        }
      )
    ] })
  ] });
}
function SmartSearchBar() {
  const [query, setQuery] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("");
  const [difficulty, setDifficulty] = reactExports.useState("");
  const [duration, setDuration] = reactExports.useState("");
  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (region) params.set("region", region);
    if (difficulty) params.set("difficulty", difficulty);
    if (duration) params.set("duration", duration);
    window.location.href = `/treks?${params.toString()}`;
  }
  const selectStyle = {
    background: "transparent",
    color: "inherit",
    outline: "none",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "inherit",
    border: "none"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "hidden md:block py-8 px-4",
      style: { background: "var(--gt-green-50)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSearch, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center rounded-2xl overflow-hidden shadow-lg",
            style: {
              border: "1.5px solid var(--gt-green-100)",
              background: "white"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-1 flex items-center gap-3 px-5 py-4 border-r",
                  style: { borderColor: "var(--gt-green-100)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Search,
                      {
                        className: "w-5 h-5 flex-shrink-0",
                        style: { color: "var(--gt-green-700)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] font-semibold uppercase tracking-widest mb-0.5",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            color: "var(--gt-green-700)"
                          },
                          children: "Where to trek?"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          value: query,
                          onChange: (e) => setQuery(e.target.value),
                          placeholder: "Kedarkantha, Hampta Pass, Char Dham...",
                          className: "text-sm text-foreground outline-none bg-transparent w-full placeholder:text-muted-foreground",
                          "data-ocid": "search.search_input"
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 px-5 py-4 border-r",
                  style: { borderColor: "var(--gt-green-100)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MapPin,
                      {
                        className: "w-5 h-5 flex-shrink-0",
                        style: { color: "var(--gt-green-700)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] font-semibold uppercase tracking-widest mb-0.5",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            color: "var(--gt-green-700)"
                          },
                          children: "Region"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          value: region,
                          onChange: (e) => setRegion(e.target.value),
                          style: selectStyle,
                          className: "text-sm text-muted-foreground",
                          "data-ocid": "search.region_select",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Regions" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "uttarakhand", children: "Uttarakhand" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "himachal-pradesh", children: "Himachal Pradesh" })
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 px-5 py-4 border-r",
                  style: { borderColor: "var(--gt-green-100)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Shield,
                      {
                        className: "w-5 h-5 flex-shrink-0",
                        style: { color: "var(--gt-green-700)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] font-semibold uppercase tracking-widest mb-0.5",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            color: "var(--gt-green-700)"
                          },
                          children: "Difficulty"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          value: difficulty,
                          onChange: (e) => setDifficulty(e.target.value),
                          style: selectStyle,
                          className: "text-sm text-muted-foreground",
                          "data-ocid": "search.difficulty_select",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Difficulties" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "easy", children: "Easy" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "moderate", children: "Moderate" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hard", children: "Hard" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "very-hard", children: "Very Hard" })
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Calendar,
                  {
                    className: "w-5 h-5 flex-shrink-0",
                    style: { color: "var(--gt-green-700)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[11px] font-semibold uppercase tracking-widest mb-0.5",
                      style: {
                        fontFamily: "var(--gt-font-label)",
                        color: "var(--gt-green-700)"
                      },
                      children: "Duration"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: duration,
                      onChange: (e) => setDuration(e.target.value),
                      style: selectStyle,
                      className: "text-sm text-muted-foreground",
                      "data-ocid": "search.duration_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weekend", children: "Weekend" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3-5", children: "3–5 Days" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6-8", children: "6–8 Days" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "9plus", children: "9+ Days" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "m-2 px-6 py-3 h-auto rounded-xl font-semibold text-white flex items-center gap-2 text-sm transition-smooth hover:opacity-90",
                  "data-ocid": "search.submit_button",
                  style: {
                    background: "var(--gt-green-700)",
                    border: "none",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                    " Search Treks"
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs text-muted-foreground",
              style: { fontFamily: "var(--gt-font-label)" },
              children: "Popular:"
            }
          ),
          [
            "Kedarkantha",
            "Char Dham 2026",
            "Hampta Pass",
            "Har Ki Dun",
            "Winter Treks"
          ].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", "data-ocid": "search.popular_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-3 py-1 rounded-full cursor-pointer transition-smooth hover:opacity-80",
              style: {
                fontFamily: "var(--gt-font-label)",
                background: "var(--gt-green-100)",
                color: "var(--gt-green-700)"
              },
              children: q
            }
          ) }, q))
        ] })
      ] })
    }
  );
}
function ExploreByRegion() {
  const regionCards = [
    {
      name: "Uttarakhand",
      sub: "The Land of Gods",
      count: "12 Treks",
      image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80",
      href: "/explore"
    },
    {
      name: "Himachal Pradesh",
      sub: "Valley of Mountains",
      count: "8 Treks",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80",
      href: "/explore"
    },
    {
      name: "Garhwal Himalaya",
      sub: "Sacred Peaks",
      count: "8 Treks",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
      href: "/explore"
    },
    {
      name: "Kumaon Himalaya",
      sub: "Hidden Gems",
      count: "4 Treks",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
      href: "/explore"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4",
      style: { background: "var(--gt-green-50)" },
      "data-ocid": "explore_region.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Discover",
            title: "Explore by Region",
            subtitle: "Find treks across the Indian Himalayas — by state, altitude, and season"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: regionCards.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            "data-ocid": `explore_region.card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: r.href, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: r.image,
                  alt: r.name,
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "linear-gradient(0deg, rgba(10,46,26,0.88) 0%, rgba(10,46,26,0.15) 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[10px] font-semibold uppercase tracking-widest mb-1",
                    style: {
                      color: "var(--gt-green-300)",
                      fontFamily: "var(--gt-font-label)"
                    },
                    children: r.count
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-white leading-tight mb-0.5", children: r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/65 text-xs", children: r.sub }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-smooth",
                    style: {
                      color: "var(--gt-green-400)",
                      fontFamily: "var(--gt-font-label)"
                    },
                    children: [
                      "Explore ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                    ]
                  }
                )
              ] })
            ] }) })
          },
          r.name
        )) })
      ] })
    }
  );
}
function TrendingTreks() {
  const featured = treksData.slice(0, 6);
  const [large] = featured;
  const small = featured.slice(1, 6);
  const trekImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1467692220786-88a87f2da58d?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&q=80"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-background", "data-ocid": "trending.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        label: "Curated",
        title: "Trending Himalayan Treks",
        subtitle: "Our expert guides' handpicked best treks and yatras right now"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "md:col-span-2",
          "data-ocid": "trending.card.1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/trek/${large.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group relative overflow-hidden rounded-2xl cursor-pointer",
              style: { boxShadow: "var(--gt-shadow-lg)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: trekImages[0],
                    alt: large.name,
                    className: "w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: "linear-gradient(0deg, rgba(10,46,26,0.9) 0%, transparent 50%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold px-3 py-1.5 rounded-full",
                    style: {
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-amber)",
                      color: "white"
                    },
                    children: "🔥 India's #1"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: "text-[10px]",
                        style: {
                          fontFamily: "var(--gt-font-label)",
                          background: "var(--gt-green-700)",
                          color: "white"
                        },
                        children: large.region
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DifficultyPill, { label: large.difficulty })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white mb-1", children: large.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/70 text-sm", children: [
                      "⛰ ",
                      large.maxAltitude
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/70 text-sm", children: [
                      "⏱ ",
                      large.duration
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-xl font-display", children: [
                      "From ",
                      large.price,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-white/70", children: "/person" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "text-white text-sm font-semibold flex items-center gap-1 px-3 py-1 rounded-full",
                        style: { background: "rgba(255,255,255,0.2)" },
                        children: [
                          "Book Now ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4", children: small.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          "data-ocid": `trending.card.${i + 2}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/trek/${t.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group relative overflow-hidden rounded-xl cursor-pointer",
              style: { boxShadow: "var(--gt-shadow-sm)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: trekImages[i + 1],
                    alt: t.name,
                    className: "w-full h-[196px] object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: "linear-gradient(0deg, rgba(10,46,26,0.85) 0%, transparent 60%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DifficultyPill, { label: t.difficulty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-white text-sm mt-1 leading-tight", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs", children: t.duration }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: t.price })
                  ] })
                ] })
              ]
            }
          ) })
        },
        t.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", "data-ocid": "trending.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        className: "rounded-full px-8",
        style: {
          borderColor: "var(--gt-green-700)",
          color: "var(--gt-green-700)"
        },
        children: [
          "View All Treks ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
        ]
      }
    ) }) })
  ] }) });
}
function YatraSection() {
  const yatras = yatraData.slice(0, 4);
  const yatraImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4",
      style: {
        background: "linear-gradient(135deg, oklch(0.15 0.05 150) 0%, oklch(0.22 0.07 150) 100%)"
      },
      "data-ocid": "yatra.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3",
              style: {
                fontFamily: "var(--gt-font-label)",
                color: "var(--gt-amber)",
                background: "rgba(244,166,35,0.15)"
              },
              children: "Pilgrimage"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-3", children: "Sacred Himalayan Yatras" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-lg max-w-2xl mx-auto", children: "Expert-guided pilgrimages where ancient faith meets the mountains — Opening May 2026" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: yatras.map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            "data-ocid": `yatra.card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/yatra/${y.slug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group rounded-2xl overflow-hidden cursor-pointer transition-smooth hover:scale-[1.02]",
                style: {
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(244,166,35,0.25)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: yatraImages[i],
                        alt: y.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0",
                        style: {
                          background: "linear-gradient(0deg, rgba(10,30,20,0.9) 0%, rgba(10,30,20,0.2) 100%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-bold px-2 py-0.5 rounded-full",
                        style: {
                          background: "rgba(244,166,35,0.9)",
                          color: "white"
                        },
                        children: y.difficulty ?? "Easy"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-white mb-1", children: y.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-xs mb-3",
                        style: {
                          color: "var(--gt-amber)",
                          fontFamily: "var(--gt-font-label)"
                        },
                        children: [
                          y.maxAltitude,
                          " · ",
                          y.duration
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs leading-relaxed line-clamp-2 mb-3", children: y.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center justify-between pt-3",
                        style: { borderTop: "1px solid rgba(244,166,35,0.15)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-[10px]", children: "Best Time" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs font-semibold", children: y.bestTime })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-[10px]", children: "From" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-bold text-base",
                                style: { color: "var(--gt-amber)" },
                                children: y.price
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ) })
          },
          y.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/yatra", "data-ocid": "yatra.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "rounded-full px-8 font-semibold",
            style: { background: "var(--gt-amber)", color: "white" },
            children: [
              "Explore All Yatras ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ]
          }
        ) }) })
      ] })
    }
  );
}
function HimalayanMap() {
  const [tooltip, setTooltip] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4 bg-background overflow-hidden",
      "data-ocid": "map.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Interactive",
            title: "Explore Trails on the Map",
            subtitle: "Click any pin to explore — Uttarakhand & Himachal Pradesh"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-3xl overflow-hidden",
            style: {
              background: "#e8f0e0",
              boxShadow: "var(--gt-shadow-xl)",
              border: "2px solid var(--gt-green-100)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 100 80",
                  "aria-hidden": "true",
                  className: "w-full",
                  style: { minHeight: 340, maxHeight: 520 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "bgGrad", cx: "50%", cy: "50%", r: "60%", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f0ede0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ddd8c0" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "glow", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "0.8", result: "blur" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "80", fill: "url(#bgGrad)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M0 60 L8 40 L14 50 L22 30 L30 48 L36 25 L44 45 L52 20 L60 40 L68 28 L76 45 L84 30 L92 50 L100 35 L100 80 L0 80Z",
                        fill: "#c8d5b0",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M0 65 L10 48 L18 56 L26 38 L34 52 L40 35 L48 52 L54 30 L62 48 L70 36 L78 50 L88 38 L96 55 L100 45 L100 80 L0 80Z",
                        fill: "#b5c89a",
                        opacity: "0.7"
                      }
                    ),
                    [
                      [22, 30],
                      [36, 25],
                      [52, 20],
                      [68, 28],
                      [84, 30]
                    ].map(([px, py], _i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "ellipse",
                      {
                        cx: px,
                        cy: py + 3,
                        rx: "3",
                        ry: "1.5",
                        fill: "white",
                        opacity: "0.7"
                      },
                      `${px}-${py}`
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M52 20 Q54 35 50 50 Q48 60 52 70",
                        stroke: "#6baed6",
                        strokeWidth: "0.8",
                        fill: "none",
                        opacity: "0.7",
                        strokeDasharray: "2,1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M30 28 Q32 40 36 50 Q40 60 42 70",
                        stroke: "#6baed6",
                        strokeWidth: "0.6",
                        fill: "none",
                        opacity: "0.6",
                        strokeDasharray: "2,1"
                      }
                    ),
                    [
                      [20, 55],
                      [35, 60],
                      [55, 62],
                      [70, 55],
                      [80, 60]
                    ].map(([px, py], _i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "g",
                      {
                        transform: `translate(${px},${py})`,
                        opacity: "0.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "2", fill: "#5a9e5a" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "3", cy: "1", r: "1.5", fill: "#4a8e4a" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "-2", cy: "1", r: "1.5", fill: "#6aae6a" })
                        ]
                      },
                      `tree-${px}-${py}`
                    )),
                    mapPins.slice(0, -1).map((pin, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: pin.x,
                        y1: pin.y,
                        x2: mapPins[i + 1].x,
                        y2: mapPins[i + 1].y,
                        stroke: "#f4a623",
                        strokeWidth: "0.5",
                        strokeDasharray: "1.5,1",
                        opacity: "0.6"
                      },
                      `${pin.x}-${pin.y}`
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "50",
                        y: "13",
                        textAnchor: "middle",
                        fontSize: "3",
                        fill: "#4a7a5a",
                        fontWeight: "600",
                        letterSpacing: "0.5",
                        opacity: "0.8",
                        children: "UTTARAKHAND"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "28",
                        y: "18",
                        textAnchor: "middle",
                        fontSize: "2.5",
                        fill: "#4a7a5a",
                        fontWeight: "600",
                        letterSpacing: "0.5",
                        opacity: "0.7",
                        children: "HIMACHAL PRADESH"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(90,12)", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "4", fill: "white", opacity: "0.8" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "text",
                        {
                          x: "0",
                          y: "-5",
                          textAnchor: "middle",
                          fontSize: "2",
                          fill: "#333",
                          fontWeight: "bold",
                          children: "N"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "7", textAnchor: "middle", fontSize: "1.8", fill: "#666", children: "S" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "-6", y: "1", textAnchor: "middle", fontSize: "1.8", fill: "#666", children: "W" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "6", y: "1", textAnchor: "middle", fontSize: "1.8", fill: "#666", children: "E" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "line",
                        {
                          x1: "0",
                          y1: "-3",
                          x2: "0",
                          y2: "3",
                          stroke: "#e74c3c",
                          strokeWidth: "0.6"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "line",
                        {
                          x1: "-3",
                          y1: "0",
                          x2: "3",
                          y2: "0",
                          stroke: "#333",
                          strokeWidth: "0.4"
                        }
                      )
                    ] }),
                    mapPins.map((pin, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "g",
                      {
                        style: { cursor: "pointer" },
                        onMouseEnter: () => setTooltip(i),
                        onMouseLeave: () => setTooltip(null),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { cx: pin.x, cy: pin.y, r: "4", fill: "rgba(26,122,76,0.15)", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "animate",
                              {
                                attributeName: "r",
                                values: "3;5;3",
                                dur: "2s",
                                repeatCount: "indefinite"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "animate",
                              {
                                attributeName: "opacity",
                                values: "0.3;0.0;0.3",
                                dur: "2s",
                                repeatCount: "indefinite"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "circle",
                            {
                              cx: pin.x,
                              cy: pin.y,
                              r: "2.2",
                              fill: "var(--gt-green-700)",
                              stroke: "white",
                              strokeWidth: "0.6",
                              filter: "url(#glow)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: pin.x, cy: pin.y, r: "0.8", fill: "white" }),
                          tooltip === i && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "rect",
                              {
                                x: pin.x - 12,
                                y: pin.y - 12,
                                width: "24",
                                height: "10",
                                rx: "2",
                                fill: "white",
                                stroke: "#1a7a4c",
                                strokeWidth: "0.5"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "text",
                              {
                                x: pin.x,
                                y: pin.y - 7,
                                textAnchor: "middle",
                                fontSize: "2.2",
                                fill: "#0a2e1a",
                                fontWeight: "600",
                                children: pin.name
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "text",
                              {
                                x: pin.x,
                                y: pin.y - 4,
                                textAnchor: "middle",
                                fontSize: "1.8",
                                fill: "#1a7a4c",
                                children: [
                                  pin.dur,
                                  " · ",
                                  pin.price
                                ]
                              }
                            )
                          ] })
                        ]
                      },
                      pin.name
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute bottom-4 left-4 flex items-center gap-4 p-3 rounded-xl",
                  style: {
                    background: "rgba(255,255,255,0.9)",
                    boxShadow: "var(--gt-shadow-sm)",
                    backdropFilter: "blur(8px)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-3 h-3 rounded-full",
                          style: { background: "var(--gt-green-700)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            color: "var(--gt-green-800)"
                          },
                          children: "Trek/Yatra"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-6 h-0 border-dashed border-t-2",
                          style: { borderColor: "var(--gt-amber)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            color: "var(--gt-green-800)"
                          },
                          children: "Trail"
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", "data-ocid": "map.link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "text-xs",
                  style: {
                    fontFamily: "var(--gt-font-label)",
                    background: "var(--gt-green-700)",
                    color: "white"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 mr-1" }),
                    " View Full Map"
                  ]
                }
              ) }) })
            ]
          }
        )
      ] })
    }
  );
}
function ReelsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: { background: "var(--gt-green-900)" },
      "data-ocid": "reels.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block",
                style: {
                  fontFamily: "var(--gt-font-label)",
                  background: "rgba(46,204,113,0.15)",
                  color: "var(--gt-green-500)"
                },
                children: "Watch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white", children: "Himalayas in 60 Seconds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 mt-1", children: "Real footage from our recent treks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://youtube.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden md:flex items-center gap-2 text-sm font-semibold transition-smooth hover:opacity-80",
              style: { color: "var(--gt-green-500)" },
              children: [
                "Subscribe on YouTube ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-auto pb-4", children: reels.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.07 },
            className: "flex-shrink-0 group cursor-pointer",
            style: { width: 180 },
            "data-ocid": `reels.card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-2xl overflow-hidden",
                style: { aspectRatio: "9/16" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: r.thumbnail,
                      alt: r.title,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-12 h-12 rounded-full flex items-center justify-center transition-smooth group-hover:scale-110",
                      style: {
                        background: "rgba(255,255,255,0.25)",
                        backdropFilter: "blur(4px)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 fill-white text-white ml-0.5" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                      style: {
                        fontFamily: "var(--gt-font-label)",
                        background: "rgba(0,0,0,0.6)",
                        color: "white"
                      },
                      children: r.duration
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-semibold leading-tight line-clamp-2", children: r.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-white/60 text-[10px] mt-1",
                        style: { fontFamily: "var(--gt-font-label)" },
                        children: [
                          "❤️ ",
                          r.likes
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          },
          r.title
        )) })
      ] })
    }
  );
}
function WhySection() {
  const features = [
    {
      icon: "🦺",
      title: "Safety First",
      text: "Certified guides, O2 cylinders, pulse oximeters, first aid on every trek."
    },
    {
      icon: "📅",
      title: "Fixed Departures",
      text: "Join any batch, guaranteed departures. No cancellation due to low numbers."
    },
    {
      icon: "💰",
      title: "Best Price",
      text: "No hidden costs. Group discounts auto-applied. Price match guarantee."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4",
      style: { background: "var(--gt-green-50)" },
      "data-ocid": "stats.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Trust",
            title: "Why 12,000+ Trekkers Choose Global Trek"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-14", children: statsData.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "text-center p-6 rounded-2xl",
            style: { background: "white", boxShadow: "var(--gt-shadow-sm)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-4xl font-bold font-display mb-1",
                  style: { color: "var(--gt-green-700)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: s.value, suffix: s.suffix })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm text-muted-foreground",
                  style: { fontFamily: "var(--gt-font-label)" },
                  children: s.label
                }
              )
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "p-6 rounded-2xl flex items-start gap-4",
            style: { background: "white", boxShadow: "var(--gt-shadow-sm)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl flex-shrink-0", children: f.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-semibold text-lg mb-1 font-display",
                    style: { color: "var(--gt-green-800)" },
                    children: f.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.text })
              ] })
            ]
          },
          f.title
        )) })
      ] })
    }
  );
}
function ReviewsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-background", "data-ocid": "reviews.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        label: "4.9★ Google Rating",
        title: "Our Trekkers Speak",
        subtitle: "12,000+ verified reviews from real adventurers"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
      [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-8 h-8 fill-yellow-400 text-yellow-400" }, s)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-4xl font-bold font-display ml-2",
          style: { color: "var(--gt-green-700)" },
          children: "4.9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "/5.0 · 12,000+ reviews" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.12 },
        className: "p-6 rounded-2xl",
        "data-ocid": `reviews.card.${i + 1}`,
        style: {
          background: "var(--gt-green-50)",
          border: "1px solid var(--gt-green-100)",
          boxShadow: "var(--gt-shadow-sm)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold font-display",
                style: { background: "var(--gt-green-700)" },
                children: r.name[0]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[9px]",
                    style: {
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-green-100)",
                      color: "var(--gt-green-700)"
                    },
                    children: "✓ Verified"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.city })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 mb-1", children: Array.from({ length: r.rating }, (_, j) => j).map(
            (starIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: "w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
              },
              `star-${starIdx}`
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-muted-foreground mb-3",
              style: { fontFamily: "var(--gt-font-label)" },
              children: r.date
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground", children: r.text })
        ]
      },
      r.name
    )) })
  ] }) });
}
function BatchDepartures() {
  function getStatusStyle(status, seats) {
    if (status === "full")
      return { bg: "#fee2e2", text: "#b91c1c", label: "FULL" };
    if (status === "fast" || seats <= 5)
      return { bg: "#fef3c7", text: "#b45309", label: `${seats} left — FAST!` };
    return { bg: "#dcfce7", text: "#16a34a", label: `${seats} seats` };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4",
      style: { background: "var(--gt-green-50)" },
      "data-ocid": "batches.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Book Now",
            title: "Next Departures",
            subtitle: "Book before they fill up — 2026/2027 batches"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              boxShadow: "var(--gt-shadow-md)",
              border: "1px solid var(--gt-green-100)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "hidden md:grid grid-cols-6 px-6 py-3 text-xs font-semibold uppercase tracking-widest",
                  style: {
                    fontFamily: "var(--gt-font-label)",
                    background: "var(--gt-green-800)",
                    color: "rgba(255,255,255,0.7)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trek / Yatra" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Duration" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seats" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Price/Person" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
                  ]
                }
              ),
              upcomingBatches.map((b, i) => {
                const s = getStatusStyle(b.status, b.seats);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "grid grid-cols-2 md:grid-cols-6 items-center gap-2 px-4 md:px-6 py-4 border-b transition-smooth hover:bg-green-50",
                    style: {
                      background: i % 2 === 0 ? "white" : "var(--gt-gray-50)",
                      borderColor: "var(--gt-green-100)"
                    },
                    "data-ocid": `batches.row.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-semibold text-sm",
                          style: { color: "var(--gt-green-800)" },
                          children: b.trek
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                        " ",
                        b.date
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground hidden md:block", children: b.duration }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-2.5 py-1 rounded-full text-xs font-semibold inline-block",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            background: s.bg,
                            color: s.text
                          },
                          children: s.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-bold hidden md:block",
                          style: { color: "var(--gt-green-700)" },
                          children: b.price
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: b.status !== "full" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: b.slug,
                          "data-ocid": `batches.book_button.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              className: "text-xs px-4 rounded-full w-full md:w-auto",
                              style: {
                                background: "var(--gt-green-700)",
                                color: "white"
                              },
                              children: "Book Now"
                            }
                          )
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          disabled: true,
                          className: "text-xs px-4 rounded-full w-full md:w-auto",
                          children: "Full"
                        }
                      ) })
                    ]
                  },
                  `batch-${b.trek}-${i}`
                );
              })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", "data-ocid": "batches.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "rounded-full px-8",
            style: {
              borderColor: "var(--gt-green-700)",
              color: "var(--gt-green-700)"
            },
            children: [
              "View All Batch Dates ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ]
          }
        ) }) })
      ] })
    }
  );
}
function BlogSection() {
  const posts = blogsData.slice(0, 3);
  const blogImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-background", "data-ocid": "blog.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        label: "Read",
        title: "Trek Smarter — Expert Guides & Stories",
        subtitle: "In-depth articles from our mountain experts"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: posts.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        "data-ocid": `blog.card.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${b.slug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group rounded-2xl overflow-hidden cursor-pointer transition-smooth hover:shadow-xl",
            style: {
              border: "1px solid var(--gt-green-100)",
              boxShadow: "var(--gt-shadow-sm)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-52", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: blogImages[i],
                    alt: b.title,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold px-2.5 py-1 rounded-full",
                    style: {
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-green-700)",
                      color: "white"
                    },
                    children: b.category
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs text-muted-foreground",
                      style: { fontFamily: "var(--gt-font-label)" },
                      children: b.date
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs text-muted-foreground",
                      style: { fontFamily: "var(--gt-font-label)" },
                      children: [
                        "· ",
                        b.readTime
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display font-bold text-lg mb-2 leading-snug",
                    style: { color: "var(--gt-green-800)" },
                    children: b.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2", children: b.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1 mt-4 text-sm font-semibold transition-smooth group-hover:gap-2",
                    style: { color: "var(--gt-green-700)" },
                    children: [
                      "Read Article ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      },
      b.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "blog.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        className: "rounded-full px-8",
        style: {
          borderColor: "var(--gt-green-700)",
          color: "var(--gt-green-700)"
        },
        children: [
          "Read All Articles ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
        ]
      }
    ) }) })
  ] }) });
}
function PartnersSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-12 px-4",
      style: { background: "var(--gt-green-800)" },
      "data-ocid": "partners.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-center text-sm font-semibold uppercase tracking-widest mb-8",
            style: {
              fontFamily: "var(--gt-font-label)",
              color: "rgba(255,255,255,0.5)"
            },
            children: "Trusted by & Certified With"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center flex-wrap gap-4 md:gap-8", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "px-5 py-2.5 rounded-xl text-sm font-bold transition-smooth hover:opacity-100 cursor-default",
            style: {
              fontFamily: "var(--gt-font-label)",
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            title: p.name,
            children: p.abbr
          },
          p.name
        )) })
      ] })
    }
  );
}
function NewsletterSection() {
  const [email, setEmail] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-4 bg-background",
      "data-ocid": "newsletter.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden",
          style: { boxShadow: "var(--gt-shadow-xl)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[280px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/region-uttarakhand.dim_800x500.jpg",
                  alt: "Himalayas",
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: { background: "rgba(10,46,26,0.6)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🏔️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold text-white mb-2", children: "Stay in the Loop" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Early batch access, seasonal alerts & exclusive deals" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-10 flex flex-col justify-center",
                style: { background: "var(--gt-green-50)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-2xl font-bold mb-2",
                      style: { color: "var(--gt-green-800)" },
                      children: "Get Trek Alerts"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm leading-relaxed", children: "Join 8,000+ trekkers who receive batch alerts, expert tips, and exclusive discounts every week." }),
                  submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "text-center p-6 rounded-xl",
                      style: { background: "var(--gt-green-100)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "✅" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-semibold",
                            style: { color: "var(--gt-green-700)" },
                            children: "You're subscribed!"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Watch your inbox for trek updates." })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: (e) => {
                        e.preventDefault();
                        if (email) setSubmitted(true);
                      },
                      className: "space-y-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "email",
                            value: email,
                            onChange: (e) => setEmail(e.target.value),
                            placeholder: "your@email.com",
                            className: "w-full px-4 py-3 rounded-xl border outline-none text-sm transition-smooth",
                            style: {
                              borderColor: "var(--gt-green-200, #c8e6d4)",
                              background: "white"
                            },
                            "data-ocid": "newsletter.input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "submit",
                            className: "w-full rounded-xl py-3 font-semibold",
                            "data-ocid": "newsletter.submit_button",
                            style: { background: "var(--gt-green-700)", color: "white" },
                            children: "Subscribe — It's Free 🏔️"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "No spam. Unsubscribe anytime." })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
function MobileFeed() {
  const trendingMobile = treksData.slice(0, 6);
  const yatraMobile = yatraData.slice(0, 3);
  const blogMobile = blogsData.slice(0, 3);
  const mobileImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1467692220786-88a87f2da58d?w=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&q=80"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "px-4 py-6",
        style: { background: "var(--gt-green-50)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display font-bold text-xl",
                style: { color: "var(--gt-green-800)" },
                children: "Featured Destinations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/treks",
                className: "text-xs font-semibold",
                style: {
                  fontFamily: "var(--gt-font-label)",
                  color: "var(--gt-green-700)"
                },
                children: "See All →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: trendingMobile.slice(0, 4).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/trek/${t.id}`,
              "data-ocid": `mobile.featured.card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-xl aspect-square", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: mobileImages[i],
                    alt: t.name,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: "linear-gradient(0deg, rgba(10,46,26,0.8) 0%, transparent 60%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-xs leading-tight", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-white/70 text-[10px]",
                      style: { fontFamily: "var(--gt-font-label)" },
                      children: [
                        t.duration,
                        " · ",
                        t.price
                      ]
                    }
                  )
                ] })
              ] })
            },
            t.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display font-bold text-xl",
            style: { color: "var(--gt-green-800)" },
            children: "Trending This Week"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/treks",
            className: "text-xs font-semibold",
            style: {
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)"
            },
            children: "See All →"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto px-4 pb-2", children: trendingMobile.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/trek/${t.id}`,
          "data-ocid": `mobile.trending.card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-shrink-0 rounded-xl overflow-hidden",
              style: { width: 160 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: mobileImages[i % mobileImages.length],
                      alt: t.name,
                      className: "w-full h-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(0deg,rgba(10,46,26,0.7) 0%,transparent 70%)"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-2.5",
                    style: {
                      background: "white",
                      border: "1px solid var(--gt-green-100)",
                      borderTop: "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs text-foreground", children: t.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-[10px] text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: t.duration
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs font-bold",
                            style: { color: "var(--gt-green-700)" },
                            children: t.price
                          }
                        )
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        },
        t.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "px-4 py-6",
        style: { background: "var(--gt-green-50)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display font-bold text-xl",
                style: { color: "var(--gt-green-800)" },
                children: "Upcoming Batches"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/treks",
                className: "text-xs font-semibold",
                style: {
                  fontFamily: "var(--gt-font-label)",
                  color: "var(--gt-green-700)"
                },
                children: "See All →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: upcomingBatches.slice(0, 5).map((b, i) => {
            const s = b.status === "full" ? { bg: "#fee2e2", text: "#b91c1c", label: "FULL" } : b.status === "fast" ? { bg: "#fef3c7", text: "#b45309", label: `${b.seats} left` } : {
              bg: "#dcfce7",
              text: "#16a34a",
              label: `${b.seats} seats`
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: b.slug,
                "data-ocid": `mobile.batch.row.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between px-3 py-3 rounded-xl mb-2",
                    style: {
                      background: "white",
                      border: "1px solid var(--gt-green-100)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-semibold",
                            style: { color: "var(--gt-green-800)" },
                            children: b.trek
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "text-xs text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: [
                              b.date,
                              " · ",
                              b.duration
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs font-bold",
                            style: { color: "var(--gt-green-700)" },
                            children: b.price
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "px-2 py-0.5 rounded-full text-[9px] font-semibold",
                            style: {
                              fontFamily: "var(--gt-font-label)",
                              background: s.bg,
                              color: s.text
                            },
                            children: s.label
                          }
                        )
                      ] })
                    ]
                  }
                )
              },
              `mobile-batch-${b.trek}-${i}`
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-6", style: { background: "#fdf6e3" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display font-bold text-xl",
            style: { color: "var(--gt-green-800)" },
            children: "Yatra 2026 🙏"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/yatra",
            className: "text-xs font-semibold",
            style: {
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)"
            },
            children: "See All →"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto px-4 pb-2", children: yatraMobile.map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/yatra/${y.slug}`,
          "data-ocid": `mobile.yatra.card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-shrink-0 rounded-xl p-4",
              style: {
                width: 200,
                background: "white",
                border: "1px solid #f0e6c8"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🕉️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display font-bold text-sm",
                    style: { color: "var(--gt-green-800)" },
                    children: y.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-2 mt-1", children: y.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-bold text-sm",
                    style: { color: "var(--gt-green-700)" },
                    children: [
                      "From ",
                      y.price
                    ]
                  }
                )
              ]
            }
          )
        },
        y.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-6 px-4",
        style: { background: "var(--gt-green-50)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display font-bold text-xl",
                style: { color: "var(--gt-green-800)" },
                children: "Trek Guides & Stories"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog",
                className: "text-xs font-semibold",
                style: {
                  fontFamily: "var(--gt-font-label)",
                  color: "var(--gt-green-700)"
                },
                children: "See All →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: blogMobile.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/blog/${b.slug}`,
              "data-ocid": `mobile.blog.card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex gap-3 rounded-xl overflow-hidden",
                  style: {
                    background: "white",
                    border: "1px solid var(--gt-green-100)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: mobileImages[i],
                        alt: b.title,
                        className: "w-20 h-20 object-cover flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[9px] font-bold px-2 py-0.5 rounded-full",
                          style: {
                            fontFamily: "var(--gt-font-label)",
                            background: "var(--gt-green-100)",
                            color: "var(--gt-green-700)"
                          },
                          children: b.category
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-semibold text-xs mt-1 line-clamp-2",
                          style: { color: "var(--gt-green-800)" },
                          children: b.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[10px] text-muted-foreground mt-1",
                          style: { fontFamily: "var(--gt-font-label)" },
                          children: b.readTime
                        }
                      )
                    ] })
                  ]
                }
              )
            },
            b.id
          )) })
        ]
      }
    )
  ] });
}
function FloatingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed z-50 flex flex-col gap-3",
      style: { bottom: "5.5rem", right: "1rem" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/911234567890",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl transition-smooth hover:scale-110",
            style: { background: "#25D366" },
            "data-ocid": "floating.whatsapp_button",
            "aria-label": "Chat on WhatsApp",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "WhatsApp Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  className: "w-6 h-6 fill-current",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl transition-smooth hover:scale-110",
            style: { background: "var(--gt-green-700)" },
            "data-ocid": "floating.callback_button",
            "aria-label": "Request callback",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                className: "w-5 h-5 fill-current",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" })
              }
            )
          }
        )
      ]
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmartSearchBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExploreByRegion, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingTreks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YatraSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HimalayanMap, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReelsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BatchDepartures, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFeed, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButtons, {})
  ] });
}
export {
  Home as default
};
