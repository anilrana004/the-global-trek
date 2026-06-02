import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogsData } from "@/data/blogs";
import { treksData } from "@/data/treks";
import { yatraData } from "@/data/yatra";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Compass,
  MapPin,
  Mountain,
  Play,
  Search,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    tagline: "India's #1 Winter Summit Trek at 12,500 ft",
    description:
      "Snow-blanketed meadows, frozen lakes, and a sunrise summit that stops time. The most iconic winter trek in India.",
    image: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg",
    badge: "🏆 India's #1 Winter Trek",
    price: "₹8,500",
    duration: "5 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/kedarkantha",
  },
  {
    id: "chopta",
    name: "Chopta Tungnath",
    tagline: "World's Highest Shiva Temple at 13,123 ft",
    description:
      "The Mini Switzerland of India — rhododendron forests, Tungnath temple, and 360° panoramas from Chandrashila.",
    image: "/assets/generated/hero-chopta.dim_1920x1080.jpg",
    badge: "🕉️ Sacred Mountain Trek",
    price: "₹6,500",
    duration: "3 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/chopta-tungnath",
  },
  {
    id: "hampta",
    name: "Hampta Pass",
    tagline: "The Most Dramatic Himalayan Crossover at 14,100 ft",
    description:
      "Trek from lush green Kullu Valley to the stark moonscapes of Lahaul — two completely different worlds in 5 days.",
    image: "/assets/generated/hero-hampta.dim_1920x1080.jpg",
    badge: "⛰️ Best HP Trek",
    price: "₹11,000",
    duration: "5 Days",
    difficulty: "Moderate",
    slug: "/treks/himachal-pradesh/hampta-pass",
  },
  {
    id: "harkidun",
    name: "Har Ki Dun Trek",
    tagline: "Valley of the Gods — Where Pandavas Walked to Heaven",
    description:
      "Ancient glacial valley, medieval Garhwali villages, and Swargarohini peak — mythologically rich.",
    image: "/assets/generated/hero-harkidun.dim_1920x1080.jpg",
    badge: "🏛️ Heritage Trek",
    price: "₹9,500",
    duration: "6 Days",
    difficulty: "Easy-Moderate",
    slug: "/treks/uttarakhand/har-ki-dun",
  },
  {
    id: "chardham",
    name: "Char Dham Yatra",
    tagline: "The Ultimate Sacred Himalayan Pilgrimage",
    description:
      "Yamunotri, Gangotri, Kedarnath, Badrinath — four sacred dhams, one transformative journey.",
    image: "/assets/generated/hero-chardham.dim_1920x1080.jpg",
    badge: "🙏 Sacred Yatra",
    price: "₹32,000",
    duration: "12 Days",
    difficulty: "Easy",
    slug: "/yatra/char-dham",
  },
];

const statsData = [
  { value: 10000, suffix: "+", label: "Happy Trekkers" },
  { value: 15, suffix: "+", label: "Premium Treks" },
  { value: 98, suffix: "%", label: "Safety Record" },
  { value: 15, suffix: "+", label: "Expert Guides" },
];

const _trendingTreks = [
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    state: "Uttarakhand",
    duration: "5D",
    price: "₹8,500",
    altitude: "12,500 ft",
    difficulty: "Easy-Moderate",
    rating: 4.9,
    badge: "🔥 India's #1 Winter Trek",
    image: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg",
    slug: "/treks/uttarakhand/kedarkantha",
  },
  {
    id: "chopta",
    name: "Chopta Tungnath",
    state: "Uttarakhand",
    duration: "3D",
    price: "₹6,500",
    altitude: "13,123 ft",
    difficulty: "Easy-Moderate",
    rating: 4.8,
    badge: undefined as string | undefined,
    image: "/assets/generated/hero-chopta.dim_1920x1080.jpg",
    slug: "/treks/uttarakhand/chopta-tungnath",
  },
  {
    id: "chardham",
    name: "Char Dham Yatra",
    state: "Uttarakhand",
    duration: "12D",
    price: "₹32,000",
    altitude: "Multiple",
    difficulty: "Easy",
    rating: 5.0,
    badge: undefined as string | undefined,
    image: "/assets/generated/hero-chardham.dim_1920x1080.jpg",
    slug: "/yatra/char-dham",
  },
  {
    id: "hampta",
    name: "Hampta Pass",
    state: "Himachal Pradesh",
    duration: "5D",
    price: "₹11,000",
    altitude: "14,100 ft",
    difficulty: "Moderate",
    rating: 4.8,
    badge: undefined as string | undefined,
    image: "/assets/generated/hero-hampta.dim_1920x1080.jpg",
    slug: "/treks/himachal-pradesh/hampta-pass",
  },
  {
    id: "harkidun",
    name: "Har Ki Dun",
    state: "Uttarakhand",
    duration: "6D",
    price: "₹9,500",
    altitude: "11,700 ft",
    difficulty: "Easy-Moderate",
    rating: 4.9,
    badge: undefined as string | undefined,
    image: "/assets/generated/hero-harkidun.dim_1920x1080.jpg",
    slug: "/treks/uttarakhand/har-ki-dun",
  },
];

const _yatraCards = [
  {
    name: "Kedarnath Yatra",
    subtitle: "One of 12 Jyotirlingas | 3,583m",
    opens: "Opens May 2, 2026",
    duration: "4 Days",
    price: "₹12,000",
    desc: "Trek or helicopter to the most powerful Shiva shrine in the Himalayas, perched at 3,583m in Rudraprayag.",
    slug: "/yatra/kedarnath",
    icon: "🕉️",
  },
  {
    name: "Do Dham Yatra",
    subtitle: "Kedarnath + Badrinath",
    opens: "Opens May 2026",
    duration: "7 Days",
    price: "₹25,000",
    desc: "The divine twin pilgrimage — Lord Shiva at Kedarnath and Lord Vishnu at Badrinath in one sacred journey.",
    slug: "/yatra/do-dham",
    icon: "🙏",
  },
  {
    name: "Char Dham Yatra",
    subtitle: "All 4 Sacred Dhams",
    opens: "Opens April 30, 2026",
    duration: "14 Days",
    price: "₹45,000",
    desc: "The complete pilgrimage: Yamunotri → Gangotri → Kedarnath → Badrinath. A journey of a lifetime.",
    slug: "/yatra/char-dham",
    icon: "✨",
  },
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
    slug: "/booking/kedarkantha/select-batch",
  },
  {
    trek: "Chopta Tungnath",
    date: "Dec 22–24, 2026",
    duration: "3D",
    seats: 5,
    total: 15,
    price: "₹6,500",
    status: "fast",
    slug: "/booking/chopta-tungnath/select-batch",
  },
  {
    trek: "Har Ki Dun Trek",
    date: "Dec 23–28, 2026",
    duration: "6D",
    seats: 12,
    total: 15,
    price: "₹9,500",
    status: "available",
    slug: "/booking/har-ki-dun/select-batch",
  },
  {
    trek: "Hampta Pass Trek",
    date: "Jun 5–9, 2027",
    duration: "5D",
    seats: 0,
    total: 15,
    price: "₹11,000",
    status: "full",
    slug: "/booking/hampta-pass/select-batch",
  },
  {
    trek: "Kedarnath Yatra",
    date: "May 4–7, 2026",
    duration: "4D",
    seats: 3,
    total: 20,
    price: "₹12,000",
    status: "fast",
    slug: "/booking/kedarnath/select-batch",
  },
  {
    trek: "Char Dham Yatra",
    date: "May 10–23, 2026",
    duration: "14D",
    seats: 10,
    total: 20,
    price: "₹45,000",
    status: "available",
    slug: "/booking/char-dham/select-batch",
  },
  {
    trek: "Brahmatal Trek",
    date: "Jan 10–15, 2027",
    duration: "6D",
    seats: 6,
    total: 15,
    price: "₹7,500",
    status: "available",
    slug: "/booking/brahmatal/select-batch",
  },
  {
    trek: "Kedarkantha Trek",
    date: "Jan 20–24, 2027",
    duration: "5D",
    seats: 15,
    total: 15,
    price: "₹8,500",
    status: "available",
    slug: "/booking/kedarkantha/select-batch",
  },
];

const reviews = [
  {
    name: "Priya Sharma",
    city: "Bengaluru",
    rating: 5,
    date: "Kedarkantha Trek — Dec 2025",
    text: "Global Trek made my first Himalayan summit an absolute dream. The guide Ankit was phenomenal — explaining the terrain, mythology of the region, and keeping everyone's spirits high even at 3 AM for the summit push. Saw the most beautiful sunrise of my life from Kedarkantha top.",
  },
  {
    name: "Rahul Mehta",
    city: "Delhi",
    rating: 5,
    date: "Hampta Pass Trek — Jun 2025",
    text: "I've done 8 treks with different companies. Global Trek is on a completely different level. The food was restaurant quality at 12,000 feet, guides have deep local knowledge, and the safety systems are serious — oxygen, pulse oximeters, daily health checks.",
  },
  {
    name: "Anjali Nair",
    city: "Mumbai",
    rating: 5,
    date: "Chopta Tungnath — Oct 2025",
    text: "Solo female trekker here — felt completely safe and cared for throughout. The campfire conversations at Chopta meadow, the rhododendron forest at dawn, and finally reaching Chandrashila summit... life-changing. Booking Char Dham Yatra next.",
  },
];

const _blogPosts = [
  {
    id: "kedarkantha-december",
    title: "Kedarkantha in December — India's Most Magical Snow Experience",
    category: "Trek Guide",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    excerpt:
      "Why December is the best month to summit Kedarkantha — complete guide on conditions, gear, and what to expect at 12,500 feet.",
    image: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg",
    slug: "kedarkantha-december",
  },
  {
    id: "chopta-tungnath",
    title: "Chopta Tungnath: Where Lord Shiva Lives Above the Clouds",
    category: "Trek Story",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    excerpt:
      "The mythology, the landscape, and the spiritual experience of reaching the world's highest Shiva temple on foot through rhododendron forests.",
    image: "/assets/generated/hero-chopta.dim_1920x1080.jpg",
    slug: "chopta-tungnath-story",
  },
  {
    id: "char-dham-2026",
    title: "Char Dham Yatra 2026 — Complete Registration Guide & Cost",
    category: "Yatra Guide",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    excerpt:
      "Opening dates, registration steps, helicopter options, budget breakdown — everything you need for Char Dham 2026.",
    image: "/assets/generated/hero-chardham.dim_1920x1080.jpg",
    slug: "char-dham-2026-guide",
  },
];

const reels = [
  {
    title: "Kedarkantha Summit Sunrise ❄️",
    duration: "0:58",
    likes: "12.4K",
    thumbnail: "/assets/generated/hero-kedarkantha.dim_1920x1080.jpg",
  },
  {
    title: "Chopta Snow Trek 2026",
    duration: "1:12",
    likes: "8.9K",
    thumbnail: "/assets/generated/hero-chopta.dim_1920x1080.jpg",
  },
  {
    title: "Hampta Pass Crossover ⛰️",
    duration: "0:45",
    likes: "15.1K",
    thumbnail: "/assets/generated/hero-hampta.dim_1920x1080.jpg",
  },
  {
    title: "Har Ki Dun Valley of Gods",
    duration: "1:05",
    likes: "9.3K",
    thumbnail: "/assets/generated/hero-harkidun.dim_1920x1080.jpg",
  },
  {
    title: "Kedarnath Morning Aarti 🕉️",
    duration: "0:52",
    likes: "18.7K",
    thumbnail: "/assets/generated/hero-chardham.dim_1920x1080.jpg",
  },
  {
    title: "Valley of Flowers Bloom 🌸",
    duration: "1:18",
    likes: "11.2K",
    thumbnail: "/assets/generated/region-uttarakhand.dim_800x500.jpg",
  },
];

const partners = [
  { name: "Ministry of Tourism", abbr: "MOT" },
  { name: "Uttarakhand Tourism", abbr: "UK" },
  { name: "Incredible India", abbr: "II" },
  { name: "HP Tourism", abbr: "HP" },
  { name: "ISO 9001", abbr: "ISO" },
  { name: "IRCTC", abbr: "IRCTC" },
  { name: "Decathlon Partner", abbr: "DCT" },
  { name: "Razorpay Secured", abbr: "PAY" },
];

const mapPins = [
  {
    name: "Kedarkantha",
    x: 52,
    y: 38,
    price: "₹8,500",
    dur: "5D",
    slug: "/treks/uttarakhand/kedarkantha",
  },
  {
    name: "Chopta Tungnath",
    x: 46,
    y: 52,
    price: "₹6,500",
    dur: "3D",
    slug: "/treks/uttarakhand/chopta-tungnath",
  },
  {
    name: "Har Ki Dun",
    x: 44,
    y: 32,
    price: "₹9,500",
    dur: "6D",
    slug: "/treks/uttarakhand/har-ki-dun",
  },
  {
    name: "Kuari Pass",
    x: 50,
    y: 57,
    price: "₹8,000",
    dur: "5D",
    slug: "/treks/uttarakhand/kuari-pass",
  },
  {
    name: "Kedarnath",
    x: 48,
    y: 55,
    price: "₹12,000",
    dur: "4D",
    slug: "/yatra/kedarnath",
  },
  {
    name: "Hampta Pass",
    x: 30,
    y: 28,
    price: "₹11,000",
    dur: "5D",
    slug: "/treks/himachal-pradesh/hampta-pass",
  },
  {
    name: "Sar Pass",
    x: 26,
    y: 34,
    price: "₹9,500",
    dur: "5D",
    slug: "/treks/himachal-pradesh/sar-pass",
  },
  {
    name: "Triund",
    x: 24,
    y: 38,
    price: "₹4,500",
    dur: "2D",
    slug: "/treks/himachal-pradesh/triund",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
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
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  const display =
    value % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count).toLocaleString("en-IN");
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function DifficultyPill({ label }: { label: string }) {
  const color =
    label.includes("Easy") && !label.includes("Moderate")
      ? "bg-emerald-100 text-emerald-800"
      : label.includes("Moderate") && !label.includes("Difficult")
        ? "bg-amber-100 text-amber-800"
        : "bg-red-100 text-red-800";
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${color}`}
      style={{ fontFamily: "var(--gt-font-label)" }}
    >
      {label}
    </span>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      {label && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
          style={{
            fontFamily: "var(--gt-font-label)",
            color: "var(--gt-green-700)",
            background: "var(--gt-green-50)",
          }}
        >
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Desktop Hero ─────────────────────────────────────────────────────────────

function DesktopHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[active];

  return (
    <section
      className="hidden md:flex relative h-screen min-h-[700px] overflow-hidden"
      data-ocid="hero.section"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={s.image}
            alt={s.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,46,26,0.88) 0%, rgba(10,46,26,0.55) 55%, rgba(10,46,26,0.15) 100%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-8 pt-24 pb-16 items-center">
        {/* Left content */}
        <div className="flex-1 max-w-[62%] pr-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full mb-5"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  background: "rgba(46,204,113,0.18)",
                  color: "#2ecc71",
                  border: "1px solid rgba(46,204,113,0.3)",
                }}
              >
                {slide.badge}
              </span>
              <h1
                className="font-display font-bold text-white leading-[1.05]"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  letterSpacing: "-2px",
                }}
              >
                Where Every Trail
              </h1>
              <h1
                className="font-display font-bold mb-3 leading-[1.05]"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  letterSpacing: "-2px",
                  color: "#2ecc71",
                }}
              >
                Tells a Story
              </h1>
              <p className="text-white/80 text-lg mb-2 leading-relaxed max-w-xl">
                Discover the world's most pristine Himalayan treks with India's
                most trusted adventure brand
              </p>
              <p className="text-white/60 text-sm mb-8 max-w-xl">
                {slide.tagline}
              </p>
              <div className="flex items-center gap-4 mb-10">
                <Link to="/treks" data-ocid="hero.primary_button">
                  <Button
                    size="lg"
                    className="px-8 py-3 text-base font-semibold rounded-full"
                    style={{
                      background: "var(--gt-green-700)",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Explore Treks <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/treks" data-ocid="hero.secondary_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-3 text-base font-semibold rounded-full"
                    style={{
                      borderColor: "rgba(255,255,255,0.5)",
                      color: "white",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    View Itineraries
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: "⏱", val: slide.duration },
                  { icon: "🥾", val: slide.difficulty },
                  { icon: "💰", val: `From ${slide.price}` },
                ].map((p) => (
                  <span
                    key={p.val}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm text-white/90"
                    style={{
                      fontFamily: "var(--gt-font-label)",
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {p.icon} {p.val}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="flex items-center gap-2 mt-10"
            data-ocid="hero.pagination"
          >
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                data-ocid={`hero.tab.${i + 1}`}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  background:
                    i === active
                      ? "var(--gt-green-500)"
                      : "rgba(255,255,255,0.4)",
                }}
                aria-label={`Slide ${i + 1}: ${s.name}`}
              />
            ))}
          </div>
        </div>

        {/* Right — 5 portrait trek cards */}
        <div className="flex flex-col gap-2.5 w-[35%] max-w-[260px] ml-auto">
          {heroSlides.map((s, i) => (
            <Link
              key={s.id}
              to={s.slug as "/"}
              data-ocid={`hero.card.${i + 1}`}
            >
              <motion.div
                whileHover={{ x: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl p-2.5 cursor-pointer"
                style={{
                  background:
                    i === active
                      ? "rgba(255,255,255,0.18)"
                      : "rgba(255,255,255,0.08)",
                  border:
                    i === active
                      ? "1.5px solid var(--gt-green-500)"
                      : "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p
                    className="text-white font-semibold text-sm truncate"
                    style={{ fontFamily: "var(--gt-font-label)" }}
                  >
                    {s.name}
                  </p>
                  <p className="text-white/60 text-xs">
                    {s.duration} · {s.price}
                  </p>
                  {i === active && (
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: "var(--gt-green-500)" }}
                    >
                      ● Active
                    </span>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: "rgba(10,46,26,0.75)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-around">
          {statsData.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold font-display text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div
                className="text-white/60 text-xs uppercase tracking-wider mt-0.5"
                style={{ fontFamily: "var(--gt-font-label)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mobile Hero ──────────────────────────────────────────────────────────────

function MobileHero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[active];

  return (
    <section className="md:hidden" data-ocid="mobile.hero.section">
      <div
        className="px-4 pt-4 pb-3"
        style={{ background: "var(--gt-green-800)" }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Search className="w-4 h-4 text-white/60" />
          <Link
            to="/explore"
            className="flex-1 text-white/60 text-sm"
            data-ocid="mobile.search_input"
          >
            Search treks, yatras...
          </Link>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {["All", "Treks", "Yatra", "Winter", "Monsoon", "Packages"].map(
            (cat, i) => (
              <span
                key={cat}
                className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  background:
                    i === 0 ? "var(--gt-green-500)" : "rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                {cat}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="relative h-[55vw] min-h-[240px] max-h-[340px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,46,26,0.85) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-display font-bold text-xl mb-1">
                {slide.name}
              </p>
              <p className="text-white/70 text-xs mb-2">{slide.tagline}</p>
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    background: "var(--gt-green-700)",
                    color: "white",
                  }}
                >
                  From {slide.price}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                  }}
                >
                  {slide.duration}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute bottom-2 right-4 flex gap-1"
          data-ocid="mobile.hero.pagination"
        >
          {heroSlides.map((slide, i) => (
            <button
              key={slide.name}
              type="button"
              onClick={() => setActive(i)}
              className="transition-all"
              style={{
                width: i === active ? 16 : 6,
                height: 6,
                borderRadius: 99,
                background:
                  i === active
                    ? "var(--gt-green-500)"
                    : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Smart Search Bar ─────────────────────────────────────────────────────────

function SmartSearchBar() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (region) params.set("region", region);
    if (difficulty) params.set("difficulty", difficulty);
    if (duration) params.set("duration", duration);
    window.location.href = `/treks?${params.toString()}`;
  }

  const selectStyle: React.CSSProperties = {
    background: "transparent",
    color: "inherit",
    outline: "none",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "inherit",
    border: "none",
  };

  return (
    <section
      className="hidden md:block py-8 px-4"
      style={{ background: "var(--gt-green-50)" }}
    >
      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSearch}>
          <div
            className="flex items-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              border: "1.5px solid var(--gt-green-100)",
              background: "white",
            }}
          >
            {/* Trek search */}
            <div
              className="flex-1 flex items-center gap-3 px-5 py-4 border-r"
              style={{ borderColor: "var(--gt-green-100)" }}
            >
              <Search
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--gt-green-700)" }}
              />
              <div className="flex-1">
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    color: "var(--gt-green-700)",
                  }}
                >
                  Where to trek?
                </p>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Kedarkantha, Hampta Pass, Char Dham..."
                  className="text-sm text-foreground outline-none bg-transparent w-full placeholder:text-muted-foreground"
                  data-ocid="search.search_input"
                />
              </div>
            </div>

            {/* Region */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-r"
              style={{ borderColor: "var(--gt-green-100)" }}
            >
              <MapPin
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--gt-green-700)" }}
              />
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    color: "var(--gt-green-700)",
                  }}
                >
                  Region
                </p>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  style={selectStyle}
                  className="text-sm text-muted-foreground"
                  data-ocid="search.region_select"
                >
                  <option value="">All Regions</option>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="himachal-pradesh">Himachal Pradesh</option>
                </select>
              </div>
            </div>

            {/* Difficulty */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-r"
              style={{ borderColor: "var(--gt-green-100)" }}
            >
              <Shield
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--gt-green-700)" }}
              />
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    color: "var(--gt-green-700)",
                  }}
                >
                  Difficulty
                </p>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  style={selectStyle}
                  className="text-sm text-muted-foreground"
                  data-ocid="search.difficulty_select"
                >
                  <option value="">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="hard">Hard</option>
                  <option value="very-hard">Very Hard</option>
                </select>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3 px-5 py-4">
              <Calendar
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--gt-green-700)" }}
              />
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    color: "var(--gt-green-700)",
                  }}
                >
                  Duration
                </p>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={selectStyle}
                  className="text-sm text-muted-foreground"
                  data-ocid="search.duration_select"
                >
                  <option value="">All</option>
                  <option value="weekend">Weekend</option>
                  <option value="3-5">3–5 Days</option>
                  <option value="6-8">6–8 Days</option>
                  <option value="9plus">9+ Days</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="m-2 px-6 py-3 h-auto rounded-xl font-semibold text-white flex items-center gap-2 text-sm transition-smooth hover:opacity-90"
              data-ocid="search.submit_button"
              style={{
                background: "var(--gt-green-700)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Search className="w-4 h-4" /> Search Treks
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2 mt-3 justify-center">
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--gt-font-label)" }}
          >
            Popular:
          </span>
          {[
            "Kedarkantha",
            "Char Dham 2026",
            "Hampta Pass",
            "Har Ki Dun",
            "Winter Treks",
          ].map((q) => (
            <Link key={q} to="/treks" data-ocid="search.popular_link">
              <span
                className="text-xs px-3 py-1 rounded-full cursor-pointer transition-smooth hover:opacity-80"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  background: "var(--gt-green-100)",
                  color: "var(--gt-green-700)",
                }}
              >
                {q}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Explore by Region ────────────────────────────────────────────────────────

function ExploreByRegion() {
  const regionCards = [
    {
      name: "Uttarakhand",
      sub: "The Land of Gods",
      count: "12 Treks",
      image:
        "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80",
      href: "/explore",
    },
    {
      name: "Himachal Pradesh",
      sub: "Valley of Mountains",
      count: "8 Treks",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80",
      href: "/explore",
    },
    {
      name: "Garhwal Himalaya",
      sub: "Sacred Peaks",
      count: "8 Treks",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
      href: "/explore",
    },
    {
      name: "Kumaon Himalaya",
      sub: "Hidden Gems",
      count: "4 Treks",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
      href: "/explore",
    },
  ];
  return (
    <section
      className="py-20 px-4"
      style={{ background: "var(--gt-green-50)" }}
      data-ocid="explore_region.section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Discover"
          title="Explore by Region"
          subtitle="Find treks across the Indian Himalayas — by state, altitude, and season"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {regionCards.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`explore_region.card.${i + 1}`}
            >
              <Link to={r.href as "/"}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(10,46,26,0.88) 0%, rgba(10,46,26,0.15) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                      style={{
                        color: "var(--gt-green-300)",
                        fontFamily: "var(--gt-font-label)",
                      }}
                    >
                      {r.count}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white leading-tight mb-0.5">
                      {r.name}
                    </h3>
                    <p className="text-white/65 text-xs">{r.sub}</p>
                    <div
                      className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-smooth"
                      style={{
                        color: "var(--gt-green-400)",
                        fontFamily: "var(--gt-font-label)",
                      }}
                    >
                      Explore <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trending Treks ───────────────────────────────────────────────────────────

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
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&q=80",
  ];

  return (
    <section className="py-20 px-4 bg-background" data-ocid="trending.section">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Curated"
          title="Trending Himalayan Treks"
          subtitle="Our expert guides' handpicked best treks and yatras right now"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
            data-ocid="trending.card.1"
          >
            <Link to={`/trek/${large.id}` as "/"}>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ boxShadow: "var(--gt-shadow-lg)" }}
              >
                <img
                  src={trekImages[0]}
                  alt={large.name}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(10,46,26,0.9) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-amber)",
                      color: "white",
                    }}
                  >
                    🔥 India's #1
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      className="text-[10px]"
                      style={{
                        fontFamily: "var(--gt-font-label)",
                        background: "var(--gt-green-700)",
                        color: "white",
                      }}
                    >
                      {large.region}
                    </Badge>
                    <DifficultyPill label={large.difficulty} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {large.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-white/70 text-sm">
                      ⛰ {large.maxAltitude}
                    </span>
                    <span className="text-white/70 text-sm">
                      ⏱ {large.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white font-bold text-xl font-display">
                      From {large.price}
                      <span className="text-sm font-normal text-white/70">
                        /person
                      </span>
                    </span>
                    <span
                      className="text-white text-sm font-semibold flex items-center gap-1 px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {small.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`trending.card.${i + 2}`}
              >
                <Link to={`/trek/${t.id}` as "/"}>
                  <div
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    style={{ boxShadow: "var(--gt-shadow-sm)" }}
                  >
                    <img
                      src={trekImages[i + 1]}
                      alt={t.name}
                      className="w-full h-[196px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(10,46,26,0.85) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <DifficultyPill label={t.difficulty} />
                      <h4 className="font-display font-bold text-white text-sm mt-1 leading-tight">
                        {t.name}
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-white/70 text-xs">
                          {t.duration}
                        </span>
                        <span className="text-white font-semibold text-sm">
                          {t.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/treks" data-ocid="trending.view_all_link">
            <Button
              variant="outline"
              className="rounded-full px-8"
              style={{
                borderColor: "var(--gt-green-700)",
                color: "var(--gt-green-700)",
              }}
            >
              View All Treks <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Yatra Section ────────────────────────────────────────────────────────────

function YatraSection() {
  const yatras = yatraData.slice(0, 4);
  const yatraImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80",
  ];

  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.15 0.05 150) 0%, oklch(0.22 0.07 150) 100%)",
      }}
      data-ocid="yatra.section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-amber)",
              background: "rgba(244,166,35,0.15)",
            }}
          >
            Pilgrimage
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Sacred Himalayan Yatras
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Expert-guided pilgrimages where ancient faith meets the mountains —
            Opening May 2026
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {yatras.map((y, i) => (
            <motion.div
              key={y.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`yatra.card.${i + 1}`}
            >
              <Link to={`/yatra/${y.slug}` as "/"}>
                <div
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-smooth hover:scale-[1.02]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(244,166,35,0.25)",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={yatraImages[i]}
                      alt={y.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(10,30,20,0.9) 0%, rgba(10,30,20,0.2) 100%)",
                      }}
                    />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(244,166,35,0.9)",
                          color: "white",
                        }}
                      >
                        {y.difficulty ?? "Easy"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {y.name}
                    </h3>
                    <p
                      className="text-xs mb-3"
                      style={{
                        color: "var(--gt-amber)",
                        fontFamily: "var(--gt-font-label)",
                      }}
                    >
                      {y.maxAltitude} · {y.duration}
                    </p>
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
                      {y.description}
                    </p>
                    <div
                      className="flex items-center justify-between pt-3"
                      style={{ borderTop: "1px solid rgba(244,166,35,0.15)" }}
                    >
                      <div>
                        <p className="text-white/50 text-[10px]">Best Time</p>
                        <p className="text-white/80 text-xs font-semibold">
                          {y.bestTime}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/50 text-[10px]">From</p>
                        <p
                          className="font-bold text-base"
                          style={{ color: "var(--gt-amber)" }}
                        >
                          {y.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/yatra" data-ocid="yatra.view_all_link">
            <Button
              className="rounded-full px-8 font-semibold"
              style={{ background: "var(--gt-amber)", color: "white" }}
            >
              Explore All Yatras <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Himalayan Map ────────────────────────────────────────────────────────────

function HimalayanMap() {
  const [tooltip, setTooltip] = useState<number | null>(null);
  return (
    <section
      className="py-20 px-4 bg-background overflow-hidden"
      data-ocid="map.section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Interactive"
          title="Explore Trails on the Map"
          subtitle="Click any pin to explore — Uttarakhand & Himachal Pradesh"
        />
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "#e8f0e0",
            boxShadow: "var(--gt-shadow-xl)",
            border: "2px solid var(--gt-green-100)",
          }}
        >
          <svg
            viewBox="0 0 100 80"
            aria-hidden="true"
            className="w-full"
            style={{ minHeight: 340, maxHeight: 520 }}
          >
            <defs>
              <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#f0ede0" />
                <stop offset="100%" stopColor="#ddd8c0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="100" height="80" fill="url(#bgGrad)" />
            <path
              d="M0 60 L8 40 L14 50 L22 30 L30 48 L36 25 L44 45 L52 20 L60 40 L68 28 L76 45 L84 30 L92 50 L100 35 L100 80 L0 80Z"
              fill="#c8d5b0"
              opacity="0.6"
            />
            <path
              d="M0 65 L10 48 L18 56 L26 38 L34 52 L40 35 L48 52 L54 30 L62 48 L70 36 L78 50 L88 38 L96 55 L100 45 L100 80 L0 80Z"
              fill="#b5c89a"
              opacity="0.7"
            />
            {(
              [
                [22, 30],
                [36, 25],
                [52, 20],
                [68, 28],
                [84, 30],
              ] as [number, number][]
            ).map(([px, py], _i) => (
              <ellipse
                key={`${px}-${py}`}
                cx={px}
                cy={py + 3}
                rx="3"
                ry="1.5"
                fill="white"
                opacity="0.7"
              />
            ))}
            <path
              d="M52 20 Q54 35 50 50 Q48 60 52 70"
              stroke="#6baed6"
              strokeWidth="0.8"
              fill="none"
              opacity="0.7"
              strokeDasharray="2,1"
            />
            <path
              d="M30 28 Q32 40 36 50 Q40 60 42 70"
              stroke="#6baed6"
              strokeWidth="0.6"
              fill="none"
              opacity="0.6"
              strokeDasharray="2,1"
            />
            {(
              [
                [20, 55],
                [35, 60],
                [55, 62],
                [70, 55],
                [80, 60],
              ] as [number, number][]
            ).map(([px, py], _i) => (
              <g
                key={`tree-${px}-${py}`}
                transform={`translate(${px},${py})`}
                opacity="0.5"
              >
                <circle cx="0" cy="0" r="2" fill="#5a9e5a" />
                <circle cx="3" cy="1" r="1.5" fill="#4a8e4a" />
                <circle cx="-2" cy="1" r="1.5" fill="#6aae6a" />
              </g>
            ))}
            {mapPins.slice(0, -1).map((pin, i) => (
              <line
                key={`${pin.x}-${pin.y}`}
                x1={pin.x}
                y1={pin.y}
                x2={mapPins[i + 1].x}
                y2={mapPins[i + 1].y}
                stroke="#f4a623"
                strokeWidth="0.5"
                strokeDasharray="1.5,1"
                opacity="0.6"
              />
            ))}
            <text
              x="50"
              y="13"
              textAnchor="middle"
              fontSize="3"
              fill="#4a7a5a"
              fontWeight="600"
              letterSpacing="0.5"
              opacity="0.8"
            >
              UTTARAKHAND
            </text>
            <text
              x="28"
              y="18"
              textAnchor="middle"
              fontSize="2.5"
              fill="#4a7a5a"
              fontWeight="600"
              letterSpacing="0.5"
              opacity="0.7"
            >
              HIMACHAL PRADESH
            </text>
            <g transform="translate(90,12)">
              <circle cx="0" cy="0" r="4" fill="white" opacity="0.8" />
              <text
                x="0"
                y="-5"
                textAnchor="middle"
                fontSize="2"
                fill="#333"
                fontWeight="bold"
              >
                N
              </text>
              <text x="0" y="7" textAnchor="middle" fontSize="1.8" fill="#666">
                S
              </text>
              <text x="-6" y="1" textAnchor="middle" fontSize="1.8" fill="#666">
                W
              </text>
              <text x="6" y="1" textAnchor="middle" fontSize="1.8" fill="#666">
                E
              </text>
              <line
                x1="0"
                y1="-3"
                x2="0"
                y2="3"
                stroke="#e74c3c"
                strokeWidth="0.6"
              />
              <line
                x1="-3"
                y1="0"
                x2="3"
                y2="0"
                stroke="#333"
                strokeWidth="0.4"
              />
            </g>
            {mapPins.map((pin, i) => (
              <g
                key={pin.name}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setTooltip(i)}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle cx={pin.x} cy={pin.y} r="4" fill="rgba(26,122,76,0.15)">
                  <animate
                    attributeName="r"
                    values="3;5;3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.0;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r="2.2"
                  fill="var(--gt-green-700)"
                  stroke="white"
                  strokeWidth="0.6"
                  filter="url(#glow)"
                />
                <circle cx={pin.x} cy={pin.y} r="0.8" fill="white" />
                {tooltip === i && (
                  <>
                    <rect
                      x={pin.x - 12}
                      y={pin.y - 12}
                      width="24"
                      height="10"
                      rx="2"
                      fill="white"
                      stroke="#1a7a4c"
                      strokeWidth="0.5"
                    />
                    <text
                      x={pin.x}
                      y={pin.y - 7}
                      textAnchor="middle"
                      fontSize="2.2"
                      fill="#0a2e1a"
                      fontWeight="600"
                    >
                      {pin.name}
                    </text>
                    <text
                      x={pin.x}
                      y={pin.y - 4}
                      textAnchor="middle"
                      fontSize="1.8"
                      fill="#1a7a4c"
                    >
                      {pin.dur} · {pin.price}
                    </text>
                  </>
                )}
              </g>
            ))}
          </svg>
          <div
            className="absolute bottom-4 left-4 flex items-center gap-4 p-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: "var(--gt-shadow-sm)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "var(--gt-green-700)" }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  color: "var(--gt-green-800)",
                }}
              >
                Trek/Yatra
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-6 h-0 border-dashed border-t-2"
                style={{ borderColor: "var(--gt-amber)" }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  color: "var(--gt-green-800)",
                }}
              >
                Trail
              </span>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <Link to="/explore" data-ocid="map.link">
              <Button
                size="sm"
                className="text-xs"
                style={{
                  fontFamily: "var(--gt-font-label)",
                  background: "var(--gt-green-700)",
                  color: "white",
                }}
              >
                <Compass className="w-3.5 h-3.5 mr-1" /> View Full Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reels ────────────────────────────────────────────────────────────────────

function ReelsSection() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--gt-green-900)" }}
      data-ocid="reels.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
              style={{
                fontFamily: "var(--gt-font-label)",
                background: "rgba(46,204,113,0.15)",
                color: "var(--gt-green-500)",
              }}
            >
              Watch
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Himalayas in 60 Seconds
            </h2>
            <p className="text-white/60 mt-1">
              Real footage from our recent treks
            </p>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-smooth hover:opacity-80"
            style={{ color: "var(--gt-green-500)" }}
          >
            Subscribe on YouTube <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {reels.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: 180 }}
              data-ocid={`reels.card.${i + 1}`}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "9/16" }}
              >
                <img
                  src={r.thumbnail}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-smooth group-hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.25)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{
                      fontFamily: "var(--gt-font-label)",
                      background: "rgba(0,0,0,0.6)",
                      color: "white",
                    }}
                  >
                    {r.duration}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                    {r.title}
                  </p>
                  <p
                    className="text-white/60 text-[10px] mt-1"
                    style={{ fontFamily: "var(--gt-font-label)" }}
                  >
                    ❤️ {r.likes}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────

function WhySection() {
  const features = [
    {
      icon: "🦺",
      title: "Safety First",
      text: "Certified guides, O2 cylinders, pulse oximeters, first aid on every trek.",
    },
    {
      icon: "📅",
      title: "Fixed Departures",
      text: "Join any batch, guaranteed departures. No cancellation due to low numbers.",
    },
    {
      icon: "💰",
      title: "Best Price",
      text: "No hidden costs. Group discounts auto-applied. Price match guarantee.",
    },
  ];
  return (
    <section
      className="py-20 px-4"
      style={{ background: "var(--gt-green-50)" }}
      data-ocid="stats.section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Trust"
          title="Why 12,000+ Trekkers Choose Global Trek"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {statsData.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{ background: "white", boxShadow: "var(--gt-shadow-sm)" }}
            >
              <div
                className="text-4xl font-bold font-display mb-1"
                style={{ color: "var(--gt-green-700)" }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--gt-font-label)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl flex items-start gap-4"
              style={{ background: "white", boxShadow: "var(--gt-shadow-sm)" }}
            >
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3
                  className="font-semibold text-lg mb-1 font-display"
                  style={{ color: "var(--gt-green-800)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-background" data-ocid="reviews.section">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="4.9★ Google Rating"
          title="Our Trekkers Speak"
          subtitle="12,000+ verified reviews from real adventurers"
        />
        <div className="flex items-center justify-center gap-3 mb-12">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          ))}
          <span
            className="text-4xl font-bold font-display ml-2"
            style={{ color: "var(--gt-green-700)" }}
          >
            4.9
          </span>
          <span className="text-muted-foreground text-sm">
            /5.0 · 12,000+ reviews
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 rounded-2xl"
              data-ocid={`reviews.card.${i + 1}`}
              style={{
                background: "var(--gt-green-50)",
                border: "1px solid var(--gt-green-100)",
                boxShadow: "var(--gt-shadow-sm)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold font-display"
                  style={{ background: "var(--gt-green-700)" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{r.name}</p>
                    <Badge
                      className="text-[9px]"
                      style={{
                        fontFamily: "var(--gt-font-label)",
                        background: "var(--gt-green-100)",
                        color: "var(--gt-green-700)",
                      }}
                    >
                      ✓ Verified
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: r.rating }, (_, j) => j).map(
                  (starIdx) => (
                    <Star
                      key={`star-${starIdx}`}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ),
                )}
              </div>
              <p
                className="text-xs text-muted-foreground mb-3"
                style={{ fontFamily: "var(--gt-font-label)" }}
              >
                {r.date}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Batch Departures ─────────────────────────────────────────────────────────

function BatchDepartures() {
  function getStatusStyle(status: string, seats: number) {
    if (status === "full")
      return { bg: "#fee2e2", text: "#b91c1c", label: "FULL" };
    if (status === "fast" || seats <= 5)
      return { bg: "#fef3c7", text: "#b45309", label: `${seats} left — FAST!` };
    return { bg: "#dcfce7", text: "#16a34a", label: `${seats} seats` };
  }
  return (
    <section
      className="py-20 px-4"
      style={{ background: "var(--gt-green-50)" }}
      data-ocid="batches.section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Book Now"
          title="Next Departures"
          subtitle="Book before they fill up — 2026/2027 batches"
        />
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            boxShadow: "var(--gt-shadow-md)",
            border: "1px solid var(--gt-green-100)",
          }}
        >
          <div
            className="hidden md:grid grid-cols-6 px-6 py-3 text-xs font-semibold uppercase tracking-widest"
            style={{
              fontFamily: "var(--gt-font-label)",
              background: "var(--gt-green-800)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span>Trek / Yatra</span>
            <span>Date</span>
            <span>Duration</span>
            <span>Seats</span>
            <span>Price/Person</span>
            <span />
          </div>
          {upcomingBatches.map((b, i) => {
            const s = getStatusStyle(b.status, b.seats);
            return (
              <div
                key={`batch-${b.trek}-${i}`}
                className="grid grid-cols-2 md:grid-cols-6 items-center gap-2 px-4 md:px-6 py-4 border-b transition-smooth hover:bg-green-50"
                style={{
                  background: i % 2 === 0 ? "white" : "var(--gt-gray-50)",
                  borderColor: "var(--gt-green-100)",
                }}
                data-ocid={`batches.row.${i + 1}`}
              >
                <span
                  className="font-semibold text-sm"
                  style={{ color: "var(--gt-green-800)" }}
                >
                  {b.trek}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {b.date}
                </span>
                <span className="text-sm text-muted-foreground hidden md:block">
                  {b.duration}
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold inline-block"
                  style={{
                    fontFamily: "var(--gt-font-label)",
                    background: s.bg,
                    color: s.text,
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="font-bold hidden md:block"
                  style={{ color: "var(--gt-green-700)" }}
                >
                  {b.price}
                </span>
                <div>
                  {b.status !== "full" ? (
                    <Link
                      to={b.slug as "/"}
                      data-ocid={`batches.book_button.${i + 1}`}
                    >
                      <Button
                        size="sm"
                        className="text-xs px-4 rounded-full w-full md:w-auto"
                        style={{
                          background: "var(--gt-green-700)",
                          color: "white",
                        }}
                      >
                        Book Now
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="text-xs px-4 rounded-full w-full md:w-auto"
                    >
                      Full
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <Link to="/treks" data-ocid="batches.view_all_link">
            <Button
              variant="outline"
              className="rounded-full px-8"
              style={{
                borderColor: "var(--gt-green-700)",
                color: "var(--gt-green-700)",
              }}
            >
              View All Batch Dates <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

function BlogSection() {
  const posts = blogsData.slice(0, 3);
  const blogImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&q=80",
  ];

  return (
    <section className="py-20 px-4 bg-background" data-ocid="blog.section">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Read"
          title="Trek Smarter — Expert Guides & Stories"
          subtitle="In-depth articles from our mountain experts"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`blog.card.${i + 1}`}
            >
              <Link to={`/blog/${b.slug}` as "/"}>
                <div
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-smooth hover:shadow-xl"
                  style={{
                    border: "1px solid var(--gt-green-100)",
                    boxShadow: "var(--gt-shadow-sm)",
                  }}
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={blogImages[i]}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          fontFamily: "var(--gt-font-label)",
                          background: "var(--gt-green-700)",
                          color: "white",
                        }}
                      >
                        {b.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "var(--gt-font-label)" }}
                      >
                        {b.date}
                      </span>
                      <span
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "var(--gt-font-label)" }}
                      >
                        · {b.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold text-lg mb-2 leading-snug"
                      style={{ color: "var(--gt-green-800)" }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {b.excerpt}
                    </p>
                    <div
                      className="flex items-center gap-1 mt-4 text-sm font-semibold transition-smooth group-hover:gap-2"
                      style={{ color: "var(--gt-green-700)" }}
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" data-ocid="blog.view_all_link">
            <Button
              variant="outline"
              className="rounded-full px-8"
              style={{
                borderColor: "var(--gt-green-700)",
                color: "var(--gt-green-700)",
              }}
            >
              Read All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Partners ─────────────────────────────────────────────────────────────────

function PartnersSection() {
  return (
    <section
      className="py-12 px-4"
      style={{ background: "var(--gt-green-800)" }}
      data-ocid="partners.section"
    >
      <div className="max-w-7xl mx-auto">
        <p
          className="text-center text-sm font-semibold uppercase tracking-widest mb-8"
          style={{
            fontFamily: "var(--gt-font-label)",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Trusted by & Certified With
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-smooth hover:opacity-100 cursor-default"
              style={{
                fontFamily: "var(--gt-font-label)",
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              title={p.name}
            >
              {p.abbr}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      className="py-20 px-4 bg-background"
      data-ocid="newsletter.section"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
          style={{ boxShadow: "var(--gt-shadow-xl)" }}
        >
          <div className="relative min-h-[280px]">
            <img
              src="/assets/generated/region-uttarakhand.dim_800x500.jpg"
              alt="Himalayas"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(10,46,26,0.6)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  Stay in the Loop
                </h3>
                <p className="text-white/70 text-sm">
                  Early batch access, seasonal alerts & exclusive deals
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-10 flex flex-col justify-center"
            style={{ background: "var(--gt-green-50)" }}
          >
            <h3
              className="font-display text-2xl font-bold mb-2"
              style={{ color: "var(--gt-green-800)" }}
            >
              Get Trek Alerts
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Join 8,000+ trekkers who receive batch alerts, expert tips, and
              exclusive discounts every week.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-6 rounded-xl"
                style={{ background: "var(--gt-green-100)" }}
              >
                <div className="text-3xl mb-2">✅</div>
                <p
                  className="font-semibold"
                  style={{ color: "var(--gt-green-700)" }}
                >
                  You're subscribed!
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Watch your inbox for trek updates.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-smooth"
                  style={{
                    borderColor: "var(--gt-green-200, #c8e6d4)",
                    background: "white",
                  }}
                  data-ocid="newsletter.input"
                />
                <Button
                  type="submit"
                  className="w-full rounded-xl py-3 font-semibold"
                  data-ocid="newsletter.submit_button"
                  style={{ background: "var(--gt-green-700)", color: "white" }}
                >
                  Subscribe — It's Free 🏔️
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile Content Feed ──────────────────────────────────────────────────────

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
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&q=80",
  ];

  return (
    <div className="md:hidden">
      <section
        className="px-4 py-6"
        style={{ background: "var(--gt-green-50)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display font-bold text-xl"
            style={{ color: "var(--gt-green-800)" }}
          >
            Featured Destinations
          </h2>
          <Link
            to="/treks"
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)",
            }}
          >
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {trendingMobile.slice(0, 4).map((t, i) => (
            <Link
              key={t.id}
              to={`/trek/${t.id}` as "/"}
              data-ocid={`mobile.featured.card.${i + 1}`}
            >
              <div className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={mobileImages[i]}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(10,46,26,0.8) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-white font-semibold text-xs leading-tight">
                    {t.name}
                  </p>
                  <p
                    className="text-white/70 text-[10px]"
                    style={{ fontFamily: "var(--gt-font-label)" }}
                  >
                    {t.duration} · {t.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="px-4 flex items-center justify-between mb-4">
          <h2
            className="font-display font-bold text-xl"
            style={{ color: "var(--gt-green-800)" }}
          >
            Trending This Week
          </h2>
          <Link
            to="/treks"
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)",
            }}
          >
            See All →
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2">
          {trendingMobile.map((t, i) => (
            <Link
              key={t.id}
              to={`/trek/${t.id}` as "/"}
              data-ocid={`mobile.trending.card.${i + 1}`}
            >
              <div
                className="flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: 160 }}
              >
                <div className="relative h-24">
                  <img
                    src={mobileImages[i % mobileImages.length]}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg,rgba(10,46,26,0.7) 0%,transparent 70%)",
                    }}
                  />
                </div>
                <div
                  className="p-2.5"
                  style={{
                    background: "white",
                    border: "1px solid var(--gt-green-100)",
                    borderTop: "none",
                  }}
                >
                  <p className="font-semibold text-xs text-foreground">
                    {t.name}
                  </p>
                  <div className="flex justify-between mt-1">
                    <span
                      className="text-[10px] text-muted-foreground"
                      style={{ fontFamily: "var(--gt-font-label)" }}
                    >
                      {t.duration}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--gt-green-700)" }}
                    >
                      {t.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="px-4 py-6"
        style={{ background: "var(--gt-green-50)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display font-bold text-xl"
            style={{ color: "var(--gt-green-800)" }}
          >
            Upcoming Batches
          </h2>
          <Link
            to="/treks"
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)",
            }}
          >
            See All →
          </Link>
        </div>
        <div className="space-y-2">
          {upcomingBatches.slice(0, 5).map((b, i) => {
            const s =
              b.status === "full"
                ? { bg: "#fee2e2", text: "#b91c1c", label: "FULL" }
                : b.status === "fast"
                  ? { bg: "#fef3c7", text: "#b45309", label: `${b.seats} left` }
                  : {
                      bg: "#dcfce7",
                      text: "#16a34a",
                      label: `${b.seats} seats`,
                    };
            return (
              <Link
                key={`mobile-batch-${b.trek}-${i}`}
                to={b.slug as "/"}
                data-ocid={`mobile.batch.row.${i + 1}`}
              >
                <div
                  className="flex items-center justify-between px-3 py-3 rounded-xl mb-2"
                  style={{
                    background: "white",
                    border: "1px solid var(--gt-green-100)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--gt-green-800)" }}
                    >
                      {b.trek}
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "var(--gt-font-label)" }}
                    >
                      {b.date} · {b.duration}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--gt-green-700)" }}
                    >
                      {b.price}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                      style={{
                        fontFamily: "var(--gt-font-label)",
                        background: s.bg,
                        color: s.text,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-6" style={{ background: "#fdf6e3" }}>
        <div className="px-4 flex items-center justify-between mb-4">
          <h2
            className="font-display font-bold text-xl"
            style={{ color: "var(--gt-green-800)" }}
          >
            Yatra 2026 🙏
          </h2>
          <Link
            to="/yatra"
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)",
            }}
          >
            See All →
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2">
          {yatraMobile.map((y, i) => (
            <Link
              key={y.id}
              to={`/yatra/${y.slug}` as "/"}
              data-ocid={`mobile.yatra.card.${i + 1}`}
            >
              <div
                className="flex-shrink-0 rounded-xl p-4"
                style={{
                  width: 200,
                  background: "white",
                  border: "1px solid #f0e6c8",
                }}
              >
                <div className="text-2xl mb-2">🕉️</div>
                <h3
                  className="font-display font-bold text-sm"
                  style={{ color: "var(--gt-green-800)" }}
                >
                  {y.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2 mt-1">
                  {y.description}
                </p>
                <p
                  className="font-bold text-sm"
                  style={{ color: "var(--gt-green-700)" }}
                >
                  From {y.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="py-6 px-4"
        style={{ background: "var(--gt-green-50)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display font-bold text-xl"
            style={{ color: "var(--gt-green-800)" }}
          >
            Trek Guides & Stories
          </h2>
          <Link
            to="/blog"
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--gt-font-label)",
              color: "var(--gt-green-700)",
            }}
          >
            See All →
          </Link>
        </div>
        <div className="space-y-3">
          {blogMobile.map((b, i) => (
            <Link
              key={b.id}
              to={`/blog/${b.slug}` as "/"}
              data-ocid={`mobile.blog.card.${i + 1}`}
            >
              <div
                className="flex gap-3 rounded-xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid var(--gt-green-100)",
                }}
              >
                <img
                  src={mobileImages[i]}
                  alt={b.title}
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="p-3 min-w-0">
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      fontFamily: "var(--gt-font-label)",
                      background: "var(--gt-green-100)",
                      color: "var(--gt-green-700)",
                    }}
                  >
                    {b.category}
                  </span>
                  <p
                    className="font-semibold text-xs mt-1 line-clamp-2"
                    style={{ color: "var(--gt-green-800)" }}
                  >
                    {b.title}
                  </p>
                  <p
                    className="text-[10px] text-muted-foreground mt-1"
                    style={{ fontFamily: "var(--gt-font-label)" }}
                  >
                    {b.readTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Floating Buttons ─────────────────────────────────────────────────────────

function FloatingButtons() {
  return (
    <div
      className="fixed z-50 flex flex-col gap-3"
      style={{ bottom: "5.5rem", right: "1rem" }}
    >
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl transition-smooth hover:scale-110"
        style={{ background: "#25D366" }}
        data-ocid="floating.whatsapp_button"
        aria-label="Chat on WhatsApp"
      >
        <span className="sr-only">WhatsApp Us</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-6 h-6 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <button
        type="button"
        className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl transition-smooth hover:scale-110"
        style={{ background: "var(--gt-green-700)" }}
        data-ocid="floating.callback_button"
        aria-label="Request callback"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-5 h-5 fill-current"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
      <SmartSearchBar />
      <ExploreByRegion />
      <TrendingTreks />
      <YatraSection />
      <HimalayanMap />
      <ReelsSection />
      <WhySection />
      <ReviewsSection />
      <BatchDepartures />
      <BlogSection />
      <PartnersSection />
      <MobileFeed />
      <NewsletterSection />
      <FloatingButtons />
    </>
  );
}
