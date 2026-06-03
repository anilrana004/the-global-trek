import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  Heart,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Share2,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { BatchSlot, Trek } from "./types";
import {
  altitudeAmsLevel,
  batchStatusBadge,
  difficultyColor,
  formatDate,
  generateBatches,
  parseAltM,
} from "./types";

const GT_GREEN = "#1A7A4C";
const GT_DARK = "#145C38";
const GT_AMBER = "#F4A623";
const GT_HERO_BG =
  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.72) 100%)";

const WISHLIST_KEY = "gt_wishlist";
function getWishlist(): string[] {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

// ─── SECTION 1: HERO ─────────────────────────────────────────────────────────
export function TrekHero({ trek }: { trek: Trek }) {
  const slug = trek.slug ?? trek.id;
  const [wishlisted, setWishlisted] = useState(() =>
    getWishlist().includes(slug),
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const list = getWishlist();
    if (wishlisted) {
      if (!list.includes(slug))
        localStorage.setItem(WISHLIST_KEY, JSON.stringify([...list, slug]));
    } else {
      localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(list.filter((s) => s !== slug)),
      );
    }
  }, [wishlisted, slug]);

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const heroImage =
    trek.heroImages?.[0] ??
    `https://source.unsplash.com/1600x900/?${trek.imageQuery ?? trek.name.toLowerCase().replace(/ /g, ",")},himalaya,trek`;
  const photoImages =
    trek.images?.slice(0, 5) ??
    Array.from(
      { length: 5 },
      (_, i) =>
        `https://source.unsplash.com/400x300/?${trek.imageQuery ?? "himalaya,trek"},${i + 1}`,
    );
  const rotations = [-3, 1.5, -2, 3, -1];
  const stateLabel =
    trek.state === "Himachal Pradesh" ? "Himachal Pradesh" : "Uttarakhand";

  return (
    <section
      className="relative w-full"
      style={{ height: "90vh", minHeight: "600px" }}
      aria-label="Trek hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={`${trek.name} — Himalayan trek in ${trek.state}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: GT_HERO_BG }} />
      </div>

      {/* Award badges — top left */}
      <div
        className="absolute top-6 left-6 flex flex-wrap gap-2 z-10"
        data-ocid="trek_hero.badges"
      >
        {[
          "India\u2019s #1 Winter Trek",
          "Editor\u2019s Pick 2026",
          `${trek.rating ?? 4.9}\u2605 Rated`,
        ].map((badge) => (
          <span
            key={badge}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 shadow-md"
          >
            <span className="text-yellow-500">★</span> {badge}
          </span>
        ))}
      </div>

      {/* Share + Wishlist — top right */}
      <div className="absolute top-6 right-6 flex gap-2 z-10">
        <button
          type="button"
          onClick={handleShare}
          className="p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all"
          aria-label="Share trek"
          data-ocid="trek_hero.share_button"
        >
          <Share2 className="w-5 h-5" />
        </button>
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-12 right-0 bg-white text-gray-800 text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
            >
              Link copied!
            </motion.div>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setWishlisted((w) => !w)}
          className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 transition-all"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-ocid="trek_hero.wishlist_button"
        >
          <Heart
            className="w-5 h-5 transition-all"
            style={{
              color: wishlisted ? "#E74C3C" : "white",
              fill: wishlisted ? "#E74C3C" : "none",
            }}
          />
        </button>
      </div>

      {/* Center: Trek name + tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
            style={{ background: GT_GREEN }}
          >
            {stateLabel}
          </span>
          <h1
            className="text-white font-bold mb-3 drop-shadow-2xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              lineHeight: 1.1,
            }}
          >
            {trek.name}
          </h1>
          <p
            className="text-white/80 max-w-xl mx-auto"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "1.125rem",
            }}
          >
            {trek.description.slice(0, 120)}&hellip;
          </p>
        </motion.div>
      </div>

      {/* Breadcrumb — bottom left */}
      <nav
        className="absolute bottom-[200px] left-6 z-10 flex items-center gap-1 text-white/70 text-xs"
        aria-label="Breadcrumb"
        data-ocid="trek_hero.breadcrumb"
      >
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/treks" className="hover:text-white transition-colors">
          Treks
        </Link>
        <span>/</span>
        <Link
          to={
            trek.state === "Himachal Pradesh"
              ? "/treks/himachal-pradesh"
              : "/treks/uttarakhand"
          }
          className="hover:text-white transition-colors"
        >
          {stateLabel}
        </Link>
        <span>/</span>
        <span className="text-white">{trek.name}</span>
      </nav>

      {/* Download PDF — bottom right */}
      <button
        type="button"
        className="absolute bottom-[200px] right-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 text-white hover:bg-white/10 transition-all"
        style={{ borderColor: GT_AMBER, color: GT_AMBER }}
        aria-label="Download itinerary PDF"
        data-ocid="trek_hero.download_pdf_button"
      >
        <Download className="w-4 h-4" /> Download Itinerary PDF
      </button>

      {/* Floating Polaroid Photo Strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
        style={{ height: "180px" }}
      >
        <div className="flex items-end justify-center gap-3 px-6 pb-4 h-full">
          {photoImages.map((src, i) => (
            <div
              key={`polaroid-${trek.id}-${i}`}
              className="flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                transform: `rotate(${rotations[i]}deg)`,
                width: "110px",
                background: "white",
                padding: "5px 5px 24px",
                boxShadow: "3px 6px 18px rgba(0,0,0,0.45)",
                borderRadius: "2px",
              }}
              data-ocid={`trek_hero.photo_strip.item.${i + 1}`}
            >
              <img
                src={
                  typeof src === "string" && src.startsWith("http")
                    ? src
                    : `https://source.unsplash.com/400x300/?${trek.imageQuery ?? "himalaya,trek"},${i + 2}`
                }
                alt={`${trek.name} — view ${i + 1}`}
                className="w-full object-cover"
                style={{ height: "80px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: QUICK FACTS STRIP ────────────────────────────────────────────
export function QuickFactsStrip({
  trek,
  isSticky,
}: { trek: Trek; isSticky: boolean }) {
  const altM = trek.altitudeM ?? parseAltM(trek.maxAltitude);
  const amsLevel = altitudeAmsLevel(altM);
  const amsConfig = {
    low: {
      color: "#16a34a",
      bg: "#f0fdf4",
      label: "LOW ALTITUDE — No acclimatization required",
      icon: "✅",
    },
    moderate: {
      color: "#d97706",
      bg: "#fffbeb",
      label: "MODERATE ALTITUDE — Acclimatization advised",
      icon: "⚠️",
    },
    high: {
      color: "#dc2626",
      bg: "#fef2f2",
      label: "HIGH ALTITUDE — Medical screening recommended",
      icon: "🚨",
    },
  }[amsLevel];

  const diffBars = [
    {
      label: "Physical Demand",
      value: trek.difficulty.toLowerCase().includes("difficult")
        ? 4
        : trek.difficulty.toLowerCase().includes("moderate")
          ? 3
          : 2,
    },
    {
      label: "Technical Skill",
      value: trek.difficulty.toLowerCase().includes("difficult") ? 2 : 1,
    },
    {
      label: "Altitude",
      value: amsLevel === "high" ? 4 : amsLevel === "moderate" ? 2 : 1,
    },
  ];

  const facts = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Duration",
      value: trek.duration,
    },
    {
      icon: <Mountain className="w-4 h-4" />,
      label: "Max Altitude",
      value: trek.maxAltitude,
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Distance",
      value: trek.distance,
    },
    {
      icon: <Zap className="w-4 h-4" />,
      label: "Difficulty",
      value: trek.difficulty,
      colored: true,
    },
    {
      icon: <Star className="w-4 h-4" />,
      label: "Best Season",
      value: trek.bestSeason ?? trek.bestTime,
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Group Size",
      value: trek.groupSize,
    },
    {
      icon: <span className="text-sm font-bold">₹</span>,
      label: "From",
      value: trek.price,
    },
  ];

  return (
    <div
      className="w-full z-30 transition-all duration-300"
      style={{
        background: isSticky
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.98)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(26,122,76,0.15)",
        boxShadow: isSticky
          ? "0 4px 20px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
      }}
      data-ocid="trek_quick_facts.strip"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 7 fact chips */}
        <div className="flex flex-wrap gap-2 py-4">
          {facts.map((f, i) => (
            <div
              key={`fact-${trek.id}-${i}`}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm"
              style={{
                background: "#f0fdf4",
                border: "1px solid rgba(26,122,76,0.2)",
              }}
              data-ocid={`trek_quick_facts.chip.${i + 1}`}
            >
              <span style={{ color: GT_GREEN }}>{f.icon}</span>
              <span className="text-xs text-gray-500">{f.label}:</span>
              <span
                className="font-semibold text-xs"
                style={{
                  color: f.colored ? difficultyColor(trek.difficulty) : GT_DARK,
                }}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>
        {/* AMS context */}
        <div className="flex flex-wrap items-center gap-4 pb-4">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{
              background: amsConfig.bg,
              color: amsConfig.color,
              border: `1px solid ${amsConfig.color}40`,
            }}
          >
            <span>{amsConfig.icon}</span>
            <span>{amsConfig.label}</span>
          </div>
          <div className="flex gap-4">
            {diffBars.map((bar) => (
              <div
                key={`diffbar-${bar.label}`}
                className="flex items-center gap-2"
              >
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {bar.label}:
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={`db-${bar.label}-${i}`}
                      className="w-5 h-2 rounded-sm"
                      style={{
                        background: i <= bar.value ? GT_GREEN : "#e5e7eb",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: GT_DARK }}
                >
                  {bar.value}/5
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION 3: OVERVIEW ────────────────────────────────────────────────────
export function TrekOverview({ trek }: { trek: Trek }) {
  const highlights = trek.keyHighlights ?? [
    `Summit ${trek.maxAltitude} — magnificent Himalayan panorama`,
    "Expert NIMAS-certified trek leaders",
    `${trek.duration} fully supported itinerary`,
    "Suitable for beginners — no technical skill required",
    "4-season mountain tents, rated to -20°C",
    "All meals included — nutritious & delicious mountain cuisine",
    "Forest permits, campsite fees all included",
    "Free Dehradun to base camp & back transport",
  ];
  const sees = [
    {
      icon: "��",
      label: "Wildlife",
      items: ["Himalayan Monal", "Barking Deer", "Musk Deer"],
    },
    {
      icon: "🌿",
      label: "Flora",
      items: ["Deodar Cedar", "Rhododendron", "Oak & Birch"],
    },
    {
      icon: "⛰️",
      label: "Peaks Visible",
      items: ["Swargarohini", "Bandarpunch", "Nanda Devi"],
    },
    { icon: "🌊", label: "Rivers", items: ["Supin River", "Tons River"] },
    { icon: "🏘️", label: "Villages", items: ["Sankri", "Taluka", "Osla"] },
  ];
  const storyText = trek.overview ?? trek.description;

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16"
      data-ocid="trek_overview.section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GT_DARK,
              }}
            >
              About This Trek
            </h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {storyText.split("\n\n").map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* What You'll See */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GT_DARK,
              }}
            >
              What You&apos;ll See
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sees.map((cat) => (
                <div
                  key={`see-${cat.label}`}
                  className="p-4 rounded-xl border"
                  style={{
                    borderColor: "rgba(26,122,76,0.15)",
                    background: "#f9fafb",
                  }}
                >
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ color: GT_GREEN }}
                  >
                    {cat.label}
                  </div>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {cat.items.map((item) => (
                      <li key={`see-item-${cat.label}-${item}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights box */}
        <div className="space-y-4">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: GT_DARK }}
          >
            <div className="px-5 py-4 border-b border-white/20">
              <h3
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Trek Highlights
              </h3>
            </div>
            <div className="p-5 space-y-3">
              {highlights.map((h, i) => (
                <div
                  key={`hl-${trek.id}-${i}`}
                  className="flex gap-2 items-start"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: GT_AMBER }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div
            className="rounded-2xl p-5 space-y-3 border"
            style={{ borderColor: "rgba(26,122,76,0.2)" }}
          >
            <h3 className="font-bold text-sm" style={{ color: GT_DARK }}>
              At a Glance
            </h3>
            {[
              ["Start Point", trek.startPoint],
              ["Nearest Railhead", trek.nearestRailhead],
              ["Nearest Airport", trek.nearestAirport],
              ["Age Group", trek.ageGroup],
            ].map(([k, v]) => (
              <div key={`stat-${k}`} className="flex justify-between text-sm">
                <span className="text-gray-500">{k}</span>
                <span className="font-medium text-gray-800">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4: ITINERARY ────────────────────────────────────────────────────
const DAY_COLORS = [
  "#1A7A4C",
  "#145C38",
  "#16a34a",
  "#d97706",
  "#1A7A4C",
  "#145C38",
];

export function TrekItinerary({ trek }: { trek: Trek }) {
  const chartData = trek.itinerary.map((day) => ({
    name: `Day ${day.day}`,
    altitude:
      day.maxAltitude ??
      (day.endAltitude ? Math.round(day.endAltitude * 0.3048) : 0),
    label: day.title,
  }));

  return (
    <section
      className="py-16"
      style={{ background: "#f8fafc" }}
      data-ocid="trek_itinerary.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
          style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
        >
          Day-by-Day Itinerary
        </motion.h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Detailed day-wise plan with meals, campsites & emergency info
        </p>

        <Accordion type="multiple" className="space-y-3 mb-12">
          {trek.itinerary.map((day, idx) => (
            <AccordionItem
              key={`itinerary-day-${trek.id}-${day.day}`}
              value={`day-${day.day}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border"
              style={{
                borderColor:
                  day.day === 4 ||
                  day.highlights.some((h) => h.toLowerCase().includes("summit"))
                    ? GT_AMBER
                    : "rgba(26,122,76,0.1)",
              }}
              data-ocid={`trek_itinerary.day.${idx + 1}`}
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline [&>svg]:hidden">
                <div className="flex items-center gap-4 w-full text-left">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                    style={{ background: DAY_COLORS[idx % DAY_COLORS.length] }}
                  >
                    {day.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-800">
                        {day.title}
                      </span>
                      {day.highlights.some((h) =>
                        h.toLowerCase().includes("summit"),
                      ) && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                          style={{ background: GT_AMBER }}
                        >
                          HIGHLIGHT
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3 mt-1 text-xs text-gray-500 flex-wrap">
                      {day.maxAltitude && (
                        <span className="flex items-center gap-1">
                          <Mountain className="w-3 h-3" /> {day.maxAltitude}ft
                        </span>
                      )}
                      {day.distanceKm && <span>{day.distanceKm} km</span>}
                      {day.walkingHours && (
                        <span>
                          <Clock className="w-3 h-3 inline" />{" "}
                          {day.walkingHours}h walking
                        </span>
                      )}
                      {day.difficulty && (
                        <span className="capitalize">
                          {day.dayDifficulty ?? day.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {day.description}
                    </p>
                    {day.terrain && (
                      <p className="text-sm">
                        <span className="font-semibold text-gray-600">
                          Terrain:
                        </span>{" "}
                        <span className="text-gray-600">{day.terrain}</span>
                      </p>
                    )}
                    {day.highlights.length > 0 && (
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">
                          Highlights:
                        </p>
                        <ul className="space-y-1">
                          {day.highlights.map((h) => (
                            <li
                              key={`hl-${day.day}-${h}`}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <Check
                                className="w-3.5 h-3.5 flex-shrink-0"
                                style={{ color: GT_GREEN }}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {day.photographyHighlights && (
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">
                          📷 Photo Spots:
                        </p>
                        <ul className="space-y-0.5">
                          {day.photographyHighlights.map((p) => (
                            <li
                              key={`photo-${day.day}-${p}`}
                              className="text-xs text-gray-600"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    {day.mealDetail && (
                      <div
                        className="rounded-lg p-3"
                        style={{ background: "#f0fdf4" }}
                      >
                        <p
                          className="font-semibold text-sm mb-1"
                          style={{ color: GT_DARK }}
                        >
                          🍽 Meals
                        </p>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>
                            <span className="font-medium">Breakfast:</span>{" "}
                            {day.mealDetail.breakfast}
                          </p>
                          <p>
                            <span className="font-medium">Lunch:</span>{" "}
                            {day.mealDetail.lunch}
                          </p>
                          <p>
                            <span className="font-medium">Dinner:</span>{" "}
                            {day.mealDetail.dinner}
                          </p>
                        </div>
                      </div>
                    )}
                    {day.campsite && (
                      <div
                        className="rounded-lg p-3"
                        style={{ background: "#fef9f0" }}
                      >
                        <p
                          className="font-semibold text-sm mb-1"
                          style={{ color: "#92400e" }}
                        >
                          ⛺ Campsite: {day.campsite.name}
                        </p>
                        <p className="text-xs text-gray-600 mb-1">
                          {day.campsite.altitude} ft altitude
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {day.campsite.amenities.map((a) => (
                            <span
                              key={`amenity-${day.day}-${a}`}
                              className="text-xs px-2 py-0.5 rounded-full bg-white border text-gray-600"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {day.emergencyExit && (
                      <p className="text-xs text-gray-500 flex items-start gap-1">
                        <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0 text-amber-500" />
                        <span>
                          <strong>Emergency exit:</strong> {day.emergencyExit}
                        </span>
                      </p>
                    )}
                    {day.acclimatizationNotes && (
                      <p
                        className="text-xs px-3 py-2 rounded-lg"
                        style={{ background: "#fef2f2", color: "#7f1d1d" }}
                      >
                        🩺 {day.acclimatizationNotes}
                      </p>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Elevation chart */}
        {chartData.some((d) => d.altitude > 0) && (
          <div
            className="bg-white rounded-2xl p-6 shadow-sm border"
            style={{ borderColor: "rgba(26,122,76,0.1)" }}
          >
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GT_DARK,
              }}
            >
              Elevation Profile
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id={`altGrad-${trek.id}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor={GT_GREEN} stopOpacity={0.3} />
                    <stop
                      offset="95%"
                      stopColor={GT_GREEN}
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0fdf4" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6b7280" }}
                  tickFormatter={(v) => `${v}m`}
                />
                <Tooltip
                  formatter={(v: number) => [`${v}m`, "Altitude"]}
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="altitude"
                  stroke={GT_GREEN}
                  strokeWidth={2}
                  fill={`url(#altGrad-${trek.id})`}
                  dot={{ r: 4, fill: GT_GREEN }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── SECTION 6: BATCHES & PRICING ────────────────────────────────────────────
export function BatchesAndPricing({ trek }: { trek: Trek }) {
  const slug = trek.slug ?? trek.id;
  const price = trek.priceMin ?? 8500;
  const batches = trek.batchSlots ?? generateBatches(trek.id, price);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const months = [
    ...new Set(batches.map((b) => new Date(b.startDate).getMonth() + 1)),
  ];
  const filtered = selectedMonth
    ? batches.filter(
        (b) => new Date(b.startDate).getMonth() + 1 === selectedMonth,
      )
    : batches;
  const gst = Math.round(price * 0.05);

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16"
      data-ocid="trek_batches.section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-2"
        style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
      >
        Upcoming Batches & Pricing
      </motion.h2>
      <p className="text-gray-500 mb-8 text-sm">
        All prices include transport, meals, accommodation, permits & guide fees
      </p>

      {/* Month toggle */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          type="button"
          onClick={() => setSelectedMonth(null)}
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          style={{
            background: !selectedMonth ? GT_GREEN : "#f0fdf4",
            color: !selectedMonth ? "white" : GT_DARK,
            border: `1px solid ${GT_GREEN}40`,
          }}
          data-ocid="trek_batches.all_months_filter"
        >
          All Months
        </button>
        {months.map((m) => (
          <button
            type="button"
            key={`month-filter-${trek.id}-${m}`}
            onClick={() => setSelectedMonth(m === selectedMonth ? null : m)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background: selectedMonth === m ? GT_GREEN : "#f0fdf4",
              color: selectedMonth === m ? "white" : GT_DARK,
              border: `1px solid ${GT_GREEN}40`,
            }}
            data-ocid={`trek_batches.month_filter.${m}`}
          >
            {
              [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][m - 1]
            }
          </button>
        ))}
      </div>

      {/* Batch table */}
      <div
        className="overflow-x-auto rounded-2xl border shadow-sm mb-8"
        style={{ borderColor: "rgba(26,122,76,0.12)" }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: GT_DARK, color: "white" }}>
            <tr>
              {["Dates", "Duration", "Type", "Seats", "Price", ""].map((h) => (
                <th
                  key={`th-${h}`}
                  className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((batch, i) => {
              const badge = batchStatusBadge(
                batch.status,
                batch.availableSeats,
              );
              return (
                <tr
                  key={`batch-row-${batch.id}`}
                  className="border-b hover:bg-green-50/30 transition-colors"
                  style={{ borderColor: "rgba(26,122,76,0.08)" }}
                  data-ocid={`trek_batches.row.${i + 1}`}
                >
                  <td className="px-4 py-3 font-medium">
                    {formatDate(batch.startDate)} – {formatDate(batch.endDate)}
                  </td>
                  <td className="px-4 py-3 text-gray-600">5 Days / 4 Nights</td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: "#f0fdf4", color: GT_GREEN }}
                    >
                      Regular
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-bold"
                      style={{ background: badge.bg, color: badge.color }}
                    >
                      {batch.status === "sold_out" ? "FULL" : badge.label}
                    </span>
                  </td>
                  <td
                    className="px-4 py-3 font-bold"
                    style={{ color: GT_DARK }}
                  >
                    ₹{batch.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {batch.status === "sold_out" ? (
                      <span className="text-xs text-gray-400">Sold Out</span>
                    ) : (
                      <Link
                        to={`/booking/${slug}/select-batch` as "/"}
                        className="px-4 py-1.5 rounded-full text-xs font-bold text-white hover:opacity-90 transition-all"
                        style={{ background: GT_AMBER }}
                        data-ocid={`trek_batches.book_button.${i + 1}`}
                      >
                        Book Now
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pricing breakdown + cancellation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: "rgba(26,122,76,0.15)", background: "#f9fafb" }}
        >
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
          >
            What&apos;s Included in {trek.price}
          </h3>
          <div className="space-y-2 text-sm">
            {trek.inclusions.slice(0, 6).map((inc) => (
              <div key={`inc-price-${inc}`} className="flex items-center gap-2">
                <Check
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: GT_GREEN }}
                />
                <span className="text-gray-700">{inc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Base price (1 person)</span>
              <span className="font-medium">{trek.price}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">GST (5%)</span>
              <span className="font-medium">₹{gst}</span>
            </div>
            <div
              className="flex justify-between text-sm mt-2 pt-2 border-t font-bold"
              style={{ color: GT_DARK }}
            >
              <span>Total (per person)</span>
              <span>₹{(price + gst).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: "rgba(220,38,38,0.2)", background: "#fff5f5" }}
        >
          <h3
            className="font-bold text-lg mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#7f1d1d",
            }}
          >
            Cancellation Policy
          </h3>
          <div className="space-y-2 text-sm">
            {[
              ["30+ days before", "80% refund"],
              ["15–29 days before", "50% refund"],
              ["7–14 days before", "25% refund"],
              ["Less than 7 days", "No refund"],
              ["Weather cancellation", "Full credit note (1 year)"],
              ["Free reschedule once", "30+ days advance"],
            ].map(([timing, refund]) => (
              <div
                key={`cancel-${timing}`}
                className="flex justify-between py-1.5 border-b border-red-100"
              >
                <span className="text-gray-600">{timing}</span>
                <span
                  className="font-semibold"
                  style={{
                    color: refund.includes("No")
                      ? "#dc2626"
                      : refund.includes("80")
                        ? "#16a34a"
                        : "#d97706",
                  }}
                >
                  {refund}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: INCLUSIONS & EXCLUSIONS ─────────────────────────────────────
export function InclusionsExclusions({ trek }: { trek: Trek }) {
  return (
    <section
      className="py-12"
      style={{ background: "#f8fafc" }}
      data-ocid="trek_inclusions.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
        >
          Inclusions & Exclusions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-2xl p-6 shadow-sm border"
            style={{ borderColor: "rgba(22,163,74,0.15)" }}
          >
            <h3
              className="flex items-center gap-2 font-bold text-lg mb-4"
              style={{ color: GT_GREEN }}
            >
              <CheckCircle className="w-5 h-5" /> What&apos;s Included
            </h3>
            <div className="space-y-3">
              {trek.inclusions.map((inc) => (
                <div key={`inc-${inc}`} className="flex items-start gap-3">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: GT_GREEN }}
                  />
                  <span className="text-sm text-gray-700">{inc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border"
              style={{ borderColor: "rgba(220,38,38,0.12)" }}
            >
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-red-700">
                <X className="w-5 h-5" /> Not Included
              </h3>
              <div className="space-y-2">
                {trek.exclusions.map((exc) => (
                  <div key={`exc-${exc}`} className="flex items-start gap-3">
                    <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />
                    <span className="text-sm text-gray-600">{exc}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Porter add-on */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                borderColor: "rgba(244,166,35,0.3)",
                background: "#fffbeb",
              }}
            >
              <h4 className="font-bold mb-2" style={{ color: "#92400e" }}>
                🐴 Porter & Mule Service
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  Personal porter (up to 10 kg): <strong>₹800/day</strong>
                </p>
                <p>
                  Mule for duffel bag: <strong>₹600/day</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Must be booked 5 days before departure
                </p>
              </div>
              <Link
                to={`/booking/${trek.slug ?? trek.id}/select-batch` as "/"}
                className="inline-block mt-3 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: GT_AMBER, color: "#0A2E1A" }}
                data-ocid="trek_inclusions.add_porter_button"
              >
                Add Porter to Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
