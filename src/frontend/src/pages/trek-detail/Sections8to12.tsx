import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Check,
  CheckCircle,
  Download,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Review, Trek } from "./types";
import { GEAR_RENTALS, MONTH_NAMES, SAMPLE_REVIEWS } from "./types";

const GT_GREEN = "#1A7A4C";
const GT_DARK = "#145C38";
const GT_AMBER = "#F4A623";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={`star-${i}`}
          className="w-3.5 h-3.5"
          fill={i < Math.round(n) ? "#f59e0b" : "none"}
          color={i < Math.round(n) ? "#f59e0b" : "#71717a"}
        />
      ))}
    </span>
  );
}

function DimBar({ label, val }: { label: string; val: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 w-28 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${(val / 5) * 100}%`, background: GT_GREEN }}
        />
      </div>
      <span className="text-xs font-bold w-4" style={{ color: GT_DARK }}>
        {val}
      </span>
    </div>
  );
}

// ─── SECTION 8: SAFETY & FITNESS ───────────────────────────────────────────────
export function SafetyAndFitness({ trek }: { trek: Trek }) {
  const weather = [
    {
      month: "Dec",
      day: "-2 to 5°C",
      night: "-10 to -5°C",
      snow: "Heavy",
      risk: "Low",
    },
    {
      month: "Jan",
      day: "-5 to 2°C",
      night: "-15 to -8°C",
      snow: "Deep",
      risk: "Moderate",
    },
    {
      month: "Feb",
      day: "-3 to 4°C",
      night: "-12 to -6°C",
      snow: "Heavy",
      risk: "Low",
    },
    {
      month: "Mar",
      day: "2 to 10°C",
      night: "-5 to 0°C",
      snow: "Medium",
      risk: "Low",
    },
    {
      month: "Apr",
      day: "8 to 15°C",
      night: "0 to 5°C",
      snow: "Light",
      risk: "Very Low",
    },
    {
      month: "May",
      day: "12 to 20°C",
      night: "5 to 10°C",
      snow: "None",
      risk: "Very Low",
    },
    {
      month: "Sep",
      day: "8 to 18°C",
      night: "2 to 8°C",
      snow: "None",
      risk: "Very Low",
    },
    {
      month: "Oct",
      day: "4 to 14°C",
      night: "-2 to 4°C",
      snow: "Patches",
      risk: "Low",
    },
    {
      month: "Nov",
      day: "-1 to 8°C",
      night: "-8 to -2°C",
      snow: "Light",
      risk: "Low",
    },
  ];

  const sp = trek.safetyProtocol;

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16"
      data-ocid="trek_safety.section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
      >
        Safety, Fitness & AMS Protocol
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Fitness requirements */}
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: "rgba(26,122,76,0.15)", background: "#f9fafb" }}
        >
          <h3
            className="font-bold text-lg mb-4 flex items-center gap-2"
            style={{ color: GT_DARK }}
          >
            <Shield className="w-5 h-5" /> Fitness Requirements
          </h3>
          <div className="space-y-2 mb-4">
            {[
              "Can walk 8–10 km on flat ground without stopping",
              "Comfortable climbing stairs (10 floors, 3×/day)",
              `Age ${trek.quickFacts?.minAge ?? 14}+ (below with parent, case-by-case)`,
              "No major cardiac or respiratory conditions",
              "BMI under 35 recommended",
            ].map((r) => (
              <div key={`fit-${r}`} className="flex items-start gap-2 text-sm">
                <Check
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: GT_GREEN }}
                />
                <span className="text-gray-700">{r}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p
              className="text-xs font-semibold mb-2"
              style={{ color: GT_DARK }}
            >
              8-Week Preparation Plan:
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>Weeks 1–2: 5 km brisk walk daily</li>
              <li>Weeks 3–4: Add 10-floor stair climbing, 3×/day</li>
              <li>Weeks 5–6: 8–10 km weekend hikes</li>
              <li>Weeks 7–8: Full-pack hike (10 kg), hill training</li>
            </ul>
          </div>
        </div>

        {/* AMS protocol */}
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: "rgba(220,38,38,0.15)", background: "#fff5f5" }}
        >
          <h3
            className="font-bold text-lg mb-4 flex items-center gap-2"
            style={{ color: "#7f1d1d" }}
          >
            <AlertTriangle className="w-5 h-5" /> AMS & Altitude Safety Protocol
          </h3>
          {sp ? (
            <Accordion type="multiple" className="space-y-2">
              <AccordionItem value="prevention" className="border-0">
                <AccordionTrigger
                  className="text-sm font-semibold py-2 hover:no-underline"
                  style={{ color: GT_DARK }}
                >
                  Prevention
                </AccordionTrigger>
                <AccordionContent className="text-xs text-gray-600 pb-3">
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Night 1 at {trek.startPoint} for acclimatization</li>
                    <li>Ascent rate never exceeds 600m/day above 2,500m</li>
                    <li>
                      &quot;Climb high, sleep low&quot; principle followed
                    </li>
                    <li>Minimum 3 litres water/day enforced</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="monitoring" className="border-0">
                <AccordionTrigger
                  className="text-sm font-semibold py-2 hover:no-underline"
                  style={{ color: GT_DARK }}
                >
                  Monitoring
                </AccordionTrigger>
                <AccordionContent className="text-xs text-gray-600 pb-3">
                  <p>
                    Pulse oximeter readings every morning. SpO2 &lt; 85% =
                    immediate rest day at lower altitude.
                  </p>
                  <p className="mt-1">Check frequency: {sp.checkInFrequency}</p>
                  <p className="mt-1">Team ratio: {sp.teamRatio}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="emergency" className="border-0">
                <AccordionTrigger
                  className="text-sm font-semibold py-2 hover:no-underline"
                  style={{ color: GT_DARK }}
                >
                  Emergency Evacuation
                </AccordionTrigger>
                <AccordionContent className="text-xs text-gray-600 pb-3">
                  <p>{sp.evacuationProcedure}</p>
                  <p className="mt-1">
                    Helipad: {sp.helicopterLandingZone.location}
                  </p>
                  <p className="mt-1">
                    Nearest hospital: {sp.nearestHospital.name} (
                    {sp.nearestHospital.distance})
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Satellite phone (Garmin InReach) carried at all times</p>
              <p>• Portable oxygen cylinders at every camp</p>
              <p>• Pulse oximeter: mandatory morning checks</p>
              <p>• SpO2 &lt; 85% → immediate descent protocol</p>
              <p>• Emergency evacuation via helicopter (Sankri LZ)</p>
              <p>
                • 24/7 emergency: <strong>+91-9876543210</strong>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Weather table */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-sm border"
        style={{ borderColor: "rgba(26,122,76,0.1)" }}
      >
        <div className="px-6 py-4" style={{ background: GT_DARK }}>
          <h3 className="font-bold text-white">Typical Weather by Month</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#f0fdf4" }}>
                {["Month", "Day Temp", "Night Temp", "Snow", "Risk"].map(
                  (h) => (
                    <th
                      key={`wh-${h}`}
                      className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {weather.map((row, i) => (
                <tr
                  key={`weather-${row.month}`}
                  className="border-b"
                  style={{
                    borderColor: "rgba(26,122,76,0.05)",
                    background: i % 2 === 0 ? "white" : "#fafafa",
                  }}
                >
                  <td
                    className="px-4 py-2.5 font-semibold"
                    style={{ color: GT_DARK }}
                  >
                    {row.month}
                  </td>
                  <td className="px-4 py-2.5 text-gray-600">{row.day}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.night}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.snow}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{
                        background:
                          row.risk === "Very Low"
                            ? "#f0fdf4"
                            : row.risk === "Low"
                              ? "#f0fdf4"
                              : row.risk === "Moderate"
                                ? "#fffbeb"
                                : "#fef2f2",
                        color:
                          row.risk === "Very Low"
                            ? "#16a34a"
                            : row.risk === "Low"
                              ? "#15803d"
                              : row.risk === "Moderate"
                                ? "#d97706"
                                : "#dc2626",
                      }}
                    >
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 9: GEAR & PACKING LIST ──────────────────────────────────────────
export function GearAndPacking({ trek }: { trek: Trek }) {
  const PACK_KEY = `gt_packing_${trek.id}`;
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(PACK_KEY) ?? "{}") as Record<
        string,
        boolean
      >;
    } catch {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem(PACK_KEY, JSON.stringify(checked));
  }, [checked, PACK_KEY]);

  const categories: { name: string; emoji: string; items: string[] }[] = [
    {
      name: "Clothing",
      emoji: "👕",
      items: [
        "Thermal base layer (top+bottom)",
        "Fleece mid layer",
        "Waterproof hardshell jacket",
        "Trekking pants (2 pairs)",
        "Thermal socks (3 pairs)",
        "Waterproof gloves",
        "Warm beanie / balaclava",
        "Gaiters (winter treks)",
      ],
    },
    {
      name: "Footwear",
      emoji: "🥾",
      items: [
        "Waterproof trekking boots (ankle support)",
        "Camp sandals / crocs",
        "Crampons (6-point strap-on, ₹100/day rental available)",
      ],
    },
    {
      name: "Documents",
      emoji: "📊",
      items: [
        "Original Govt photo ID (Aadhaar/Passport)",
        "2 passport-size photos",
        "Booking confirmation",
        "Travel insurance document",
      ],
    },
    {
      name: "Electronics",
      emoji: "🔦",
      items: [
        "Headlamp + 2 sets spare batteries",
        "Power bank (10,000mAh)",
        "Camera + extra batteries",
      ],
    },
    {
      name: "Personal Medicine",
      emoji: "💊",
      items: [
        "Personal prescription medicines",
        "Diamox (125mg — consult doctor first)",
        "Lip balm SPF 30+",
        "Sunscreen SPF 50+",
        "Blister kit",
        "Ibuprofen / Paracetamol",
      ],
    },
    {
      name: "Backpack",
      emoji: "🎒",
      items: [
        "40–50L trekking backpack",
        "60–70L duffel bag (for porter/mule)",
        "Waterproof rain cover",
      ],
    },
    {
      name: "Water & Food",
      emoji: "💧",
      items: [
        "2L water bottle or hydration bladder",
        "Water purification tablets",
        "Energy bars, nuts, chocolate (personal)",
      ],
    },
  ];

  const totalItems = categories.flatMap((c) => c.items).length;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <section
      className="py-12"
      style={{ background: "#f8fafc" }}
      data-ocid="trek_gear.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
          >
            Gear & Packing List
          </motion.h2>
          <div className="flex items-center gap-4">
            <div className="text-sm" style={{ color: GT_DARK }}>
              <span className="font-bold">
                {checkedCount}/{totalItems}
              </span>{" "}
              items packed
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(checkedCount / totalItems) * 100}%`,
                  background: GT_GREEN,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((cat) => (
            <div
              key={`pack-cat-${cat.name}`}
              className="bg-white rounded-2xl p-5 shadow-sm border"
              style={{ borderColor: "rgba(26,122,76,0.1)" }}
            >
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span>{cat.emoji}</span>{" "}
                <span style={{ color: GT_DARK }}>{cat.name}</span>
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const key = `${cat.name}::${item}`;
                  return (
                    <label
                      key={key}
                      className="flex items-start gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 accent-green-700"
                        checked={!!checked[key]}
                        onChange={(e) =>
                          setChecked((prev) => ({
                            ...prev,
                            [key]: e.target.checked,
                          }))
                        }
                        data-ocid="trek_gear.checkbox"
                      />
                      <span
                        className={`text-xs ${checked[key] ? "line-through text-gray-400" : "text-gray-700"} transition-all`}
                      >
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Gear rental */}
        <div className="mb-8">
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
          >
            Gear Rental
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {GEAR_RENTALS.map((gear) => (
              <div
                key={`gear-${gear.id}`}
                className="bg-white rounded-xl p-4 border text-center hover:shadow-md transition-all"
                style={{ borderColor: "rgba(26,122,76,0.12)" }}
                data-ocid={`trek_gear.rental_card.${gear.id}`}
              >
                <div className="text-3xl mb-2">{gear.icon}</div>
                <p
                  className="text-xs font-bold mb-1"
                  style={{ color: GT_DARK }}
                >
                  {gear.name}
                </p>
                <p className="text-xs text-gray-500 mb-1">{gear.desc}</p>
                <p
                  className="text-xs font-semibold"
                  style={{ color: GT_GREEN }}
                >
                  ₹{gear.daily}/day
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: GT_GREEN }}
            data-ocid="trek_gear.download_pdf_button"
          >
            <Download className="w-4 h-4" /> Download Packing List PDF
          </button>
          <a
            href="https://www.amazon.in/s?k=trekking+gear"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
            style={{ borderColor: GT_GREEN, color: GT_GREEN }}
            data-ocid="trek_gear.amazon_link"
          >
            Buy on Amazon India
          </a>
          <a
            href="https://www.decathlon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
            style={{ borderColor: GT_GREEN, color: GT_GREEN }}
            data-ocid="trek_gear.decathlon_link"
          >
            Buy on Decathlon
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 10: REVIEWS ──────────────────────────────────────────────────────
export function ReviewsSection({ trek }: { trek: Trek }) {
  const reviews: Review[] = trek.detailedReviews?.length
    ? trek.detailedReviews
    : SAMPLE_REVIEWS;
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterGroup, setFilterGroup] = useState<string | null>(null);
  const [filterMonth, _setFilterMonth] = useState<number | null>(null);

  const filtered = reviews.filter((r) => {
    if (filterRating && r.rating !== filterRating) return false;
    if (filterGroup && r.groupType !== filterGroup) return false;
    if (filterMonth && r.month !== filterMonth) return false;
    return true;
  });

  const avgRating = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);
  const dimLabels: Array<[keyof (typeof reviews)[0]["dimensions"], string]> = [
    ["guideExpertise", "Guide Expertise"],
    ["food", "Food Quality"],
    ["safety", "Safety"],
    ["valueForMoney", "Value for Money"],
    ["scenery", "Scenery & Route"],
    ["overall", "Overall"],
  ];
  const dimAvgs: Record<string, number> = {};
  for (const [key] of dimLabels) {
    dimAvgs[key] = Number.parseFloat(
      (
        reviews.reduce((s, r) => s + r.dimensions[key], 0) / reviews.length
      ).toFixed(1),
    );
  }

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16"
      data-ocid="trek_reviews.section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
      >
        Trekker Reviews & Community
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Rating summary */}
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: GT_DARK }}
          >
            <div
              className="text-6xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {avgRating}
            </div>
            <div className="flex justify-center my-2">
              <Stars n={Number.parseFloat(avgRating)} />
            </div>
            <p className="text-white/70 text-sm">
              {reviews.length} verified reviews
            </p>
          </div>
          <div className="mt-4 space-y-2">
            {dimLabels.map(([key, label]) => (
              <DimBar
                key={`dimavg-${key}`}
                label={label}
                val={dimAvgs[key] ?? 0}
              />
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {[5, 4, 3].map((r) => (
              <button
                type="button"
                key={`filter-rating-${r}`}
                onClick={() => setFilterRating(filterRating === r ? null : r)}
                className="px-3 py-1 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: filterRating === r ? GT_AMBER : "#f0fdf4",
                  color: filterRating === r ? "#0A2E1A" : GT_DARK,
                  border: `1px solid ${GT_AMBER}60`,
                }}
                data-ocid={`trek_reviews.filter_rating.${r}`}
              >
                {r}★
              </button>
            ))}
            {["solo", "couple", "family", "corporate"].map((g) => (
              <button
                type="button"
                key={`filter-group-${g}`}
                onClick={() => setFilterGroup(filterGroup === g ? null : g)}
                className="px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all"
                style={{
                  background: filterGroup === g ? GT_GREEN : "#f0fdf4",
                  color: filterGroup === g ? "white" : GT_DARK,
                  border: `1px solid ${GT_GREEN}40`,
                }}
                data-ocid={`trek_reviews.filter_group.${g}`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Review cards */}
          <div className="space-y-4">
            {filtered.slice(0, 4).map((review, i) => (
              <div
                key={`review-${review.id}`}
                className="bg-white rounded-2xl p-5 shadow-sm border"
                style={{ borderColor: "rgba(26,122,76,0.12)" }}
                data-ocid={`trek_reviews.card.${i + 1}`}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: GT_GREEN }}
                  >
                    {review.author[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="font-semibold text-gray-800">
                          {review.author}
                        </span>
                        {review.verified && (
                          <span
                            className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                            style={{ background: "#f0fdf4", color: GT_GREEN }}
                          >
                            ✅ Verified
                          </span>
                        )}
                      </div>
                      <Stars n={review.rating} />
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500">
                      <span>
                        {MONTH_NAMES[(review.month ?? 1) - 1]} {review.tripYear}
                      </span>
                      <span>•</span>
                      <span
                        className="capitalize px-1.5 py-0.5 rounded-full"
                        style={{ background: "#f8fafc", color: GT_DARK }}
                      >
                        {review.groupType}
                      </span>
                    </div>
                  </div>
                </div>
                <h4
                  className="font-semibold text-sm mb-1"
                  style={{ color: GT_DARK }}
                >
                  {review.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.comment}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {Object.entries(review.dimensions)
                    .slice(0, 3)
                    .map(([k, v]) => (
                      <span
                        key={`rdim-${review.id}-${k}`}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "#f0fdf4", color: GT_DARK }}
                      >
                        {k === "guideExpertise"
                          ? "Guide"
                          : k === "valueForMoney"
                            ? "Value"
                            : k.charAt(0).toUpperCase() + k.slice(1)}
                        : {v}/5
                      </span>
                    ))}
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  👍 {review.helpful} found this helpful
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Q&A section */}
      <div
        className="rounded-2xl p-6 bg-white border"
        style={{ borderColor: "rgba(26,122,76,0.12)" }}
      >
        <h3
          className="font-bold text-lg mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
        >
          Community Q&A
        </h3>
        <div className="space-y-4">
          {[
            {
              q: `Is ${trek.name} suitable for first-timers?`,
              a: `Yes! ${trek.difficulty} grade makes it accessible. Basic fitness — ability to walk 8–10 km/day — is all you need. No technical climbing skills required.`,
            },
            {
              q: "What is included in the package?",
              a: `All meals from Day 1 dinner to Day ${trek.itinerary.length} breakfast, camping equipment, certified trek leader, transport from ${trek.startPoint}, and all forest permits.`,
            },
            {
              q: "Can children join this trek?",
              a: `Yes, children ${trek.quickFacts?.minAge ?? 14}+ can participate. Kids 10–13 on a case-by-case basis with parental consent and medical clearance.`,
            },
          ].map((qa) => (
            <div
              key={qa.q.slice(0, 30)}
              className="pb-4 border-b last:border-0"
              style={{ borderColor: "rgba(26,122,76,0.1)" }}
            >
              <p
                className="font-semibold text-sm mb-1"
                style={{ color: GT_DARK }}
              >
                Q: {qa.q}
              </p>
              <p className="text-sm text-gray-600">A: {qa.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 11: LOGISTICS ─────────────────────────────────────────────────────
export function LogisticsSection({ trek }: { trek: Trek }) {
  const cities = [
    {
      label: "From Delhi",
      content: [
        "Train: Dehradun Express (12017) or Shatabdi Express — 5–6 hrs",
        "Bus: ISBT Kashmere Gate → Dehradun — 6 hrs, ₹300–500",
        "Our vehicle departs from Dehradun at 5:30 AM on Day 1",
      ],
    },
    {
      label: "From Dehradun",
      content: [
        "Our vehicle departs Clock Tower, Dehradun at 5:30 AM on Day 1",
        `Drive to ${trek.startPoint} — 7–9 hours`,
        "Included in package price",
      ],
    },
    {
      label: "From Mumbai",
      content: [
        "Fly to Dehradun (via Delhi) — 2.5 hrs",
        "Or train: Mumbai Rajdhani to Haridwar + bus to Dehradun",
        "Recommend arriving Dehradun evening before Day 1",
      ],
    },
    {
      label: "From Bangalore",
      content: [
        "Fly to Dehradun (via Delhi) — 2.5 hrs",
        "Or IndiGo / Air India direct sometimes available",
        "Recommend arriving Dehradun evening before Day 1",
      ],
    },
  ];

  const hotels = [
    { name: "Hotel Accord Inn", price: "₹1,200/night", stars: 3 },
    { name: "The Orchid Hotel", price: "₹2,500/night", stars: 4 },
    { name: "FabHotel Prime", price: "₹900/night", stars: 3 },
  ];

  return (
    <section
      className="py-12"
      style={{ background: "#f8fafc" }}
      data-ocid="trek_logistics.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
        >
          How to Reach & Stay
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="Delhi">
              <TabsList className="flex flex-wrap h-auto gap-1 mb-4 bg-transparent p-0">
                {cities.map((c) => (
                  <TabsTrigger
                    key={`tab-${c.label}`}
                    value={c.label.replace("From ", "")}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    data-ocid={`trek_logistics.city_tab.${c.label.replace("From ", "").toLowerCase()}`}
                  >
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {cities.map((c) => (
                <TabsContent
                  key={`tabcontent-${c.label}`}
                  value={c.label.replace("From ", "")}
                >
                  <div
                    className="bg-white rounded-2xl p-5 border"
                    style={{ borderColor: "rgba(26,122,76,0.12)" }}
                  >
                    <ul className="space-y-3">
                      {c.content.map((line, i) => (
                        <li
                          key={`logistic-${c.label}-${i}`}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span style={{ color: GT_AMBER }} className="mt-1">
                            •
                          </span>
                          <span className="text-gray-700">{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                      <strong>Nearest Railhead:</strong> {trek.nearestRailhead}{" "}
                      &nbsp;| &nbsp;<strong>Nearest Airport:</strong>{" "}
                      {trek.nearestAirport}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold" style={{ color: GT_DARK }}>
              Pre-Trek Stay in Dehradun
            </h3>
            {hotels.map((h) => (
              <div
                key={`hotel-${h.name}`}
                className="bg-white rounded-xl p-4 border flex items-center gap-3"
                style={{ borderColor: "rgba(26,122,76,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f0fdf4" }}
                >
                  <span className="text-lg">🏨</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: GT_DARK }}
                  >
                    {h.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {"\u2605".repeat(h.stars)} · {h.price}
                  </p>
                </div>
              </div>
            ))}

            {/* Emergency contacts */}
            <div
              className="bg-white rounded-xl p-4 border"
              style={{ borderColor: "rgba(220,38,38,0.15)" }}
            >
              <h4
                className="font-bold text-sm mb-3"
                style={{ color: "#7f1d1d" }}
              >
                Emergency Contacts
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Global Trek 24/7", num: "+91-9876543210" },
                  { label: "Trek Coordinator", num: "+91-9876543211" },
                  { label: "SDRF Helicopter", num: "9411112985" },
                ].map((ec) => (
                  <div
                    key={`ec-${ec.label}`}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-600">{ec.label}</span>
                    <a
                      href={`tel:${ec.num}`}
                      className="font-semibold flex items-center gap-1"
                      style={{ color: GT_GREEN }}
                      data-ocid="trek_logistics.emergency_phone"
                    >
                      <Phone className="w-3 h-3" /> {ec.num}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 12: FAQs & CERTIFICATIONS ─────────────────────────────────────────
export function FaqsAndCerts({ trek }: { trek: Trek }) {
  const faqs = trek.faqs?.length
    ? trek.faqs
    : [
        {
          question: `Is ${trek.name} suitable for beginners?`,
          answer: `Yes. ${trek.difficulty} grade requires no technical climbing skills. Basic fitness is sufficient.`,
        },
        {
          question: `What is the best time to do ${trek.name}?`,
          answer: trek.bestTime,
        },
        {
          question: "How do I reach the base camp?",
          answer: `Our vehicle departs from ${trek.nearestRailhead.split(" ")[0]} at 5:30 AM on Day 1. Drive to ${trek.startPoint} included.`,
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "30+ days: 80% refund. 15–29 days: 50%. 7–14 days: 25%. Under 7 days: no refund. Weather cancellations: full credit note.",
        },
        {
          question: "What fitness level is required?",
          answer:
            "Ability to walk 8–10 km/day at altitude. Start preparation 8 weeks before with daily 5km walks and stair climbing.",
        },
        {
          question: "Is AMS a concern?",
          answer: `Max altitude is ${trek.maxAltitude}. AMS risk is ${trek.altitudeM && trek.altitudeM > 4500 ? "significant — medical screening required" : trek.altitudeM && trek.altitudeM > 3000 ? "moderate — acclimatization day included" : "low — standard hydration suffices"}.`,
        },
        {
          question: "Can I do this solo?",
          answer:
            "Absolutely. We form small groups of 6–15 trekkers, so solo trekkers join a like-minded group. No solo-only premium.",
        },
        {
          question: "What is accommodation like?",
          answer:
            "4-season mountain tents (twin sharing) rated to -20°C at campsites. Guesthouse on first night.",
        },
      ];

  const certs = [
    {
      name: "Ministry of Tourism",
      detail: "Govt of India Approved",
      emoji: "🇮🇳",
    },
    { name: "ISO 9001:2015", detail: "Quality Certified", emoji: "🏆" },
    { name: "NIMAS Certified", detail: "Mountain Guides", emoji: "⛰️" },
    { name: "UK Tourism", detail: "Uttarakhand Registered", emoji: "🌿" },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16"
      data-ocid="trek_faqs.section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="multiple" className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`faq-${trek.id}-${i}`}
                value={`faq-${i}`}
                className="bg-white rounded-xl border shadow-sm"
                style={{ borderColor: "rgba(26,122,76,0.1)" }}
                data-ocid={`trek_faqs.item.${i + 1}`}
              >
                <AccordionTrigger
                  className="px-5 py-3 text-sm font-semibold hover:no-underline text-left"
                  style={{ color: GT_DARK }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="space-y-6">
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GT_DARK,
              }}
            >
              Our Certifications
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {certs.map((cert) => (
                <div
                  key={`cert-${cert.name}`}
                  className="rounded-xl p-4 text-center border"
                  style={{
                    borderColor: "rgba(26,122,76,0.15)",
                    background: "#f0fdf4",
                  }}
                  data-ocid="trek_certs.item"
                >
                  <div className="text-2xl mb-1">{cert.emoji}</div>
                  <p className="text-xs font-bold" style={{ color: GT_DARK }}>
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-500">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-xl p-5 border"
            style={{
              borderColor: "rgba(26,122,76,0.15)",
              background: "#f0fdf4",
            }}
          >
            <h4 className="font-bold mb-2" style={{ color: GT_DARK }}>
              🌱 Eco Commitments
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✅ Zero plastic policy on all treks</li>
              <li>✅ Leave No Trace strictly enforced</li>
              <li>✅ All waste carried back for disposal</li>
              <li>✅ ₹50/trekker donated to reforestation fund</li>
              <li>✅ 1 tree planted per booking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: ROUTE INTELLIGENCE ──────────────────────────────────────────────
export function RouteIntelligence({ trek }: { trek: Trek }) {
  const waypoints = trek.itinerary.map((day, i) => ({
    label: `Day ${day.day}`,
    sublabel: day.title
      .split("\u2192")
      [day.title.includes("\u2192") ? 1 : 0].trim()
      .split(" ")[0],
    alt: day.maxAltitude
      ? `${day.maxAltitude}ft`
      : day.endAltitude
        ? `${day.endAltitude}ft`
        : "",
    x: 50 + i * (700 / Math.max(trek.itinerary.length - 1, 1)),
    highlight: day.highlights.some((h) => h.toLowerCase().includes("summit")),
  }));

  const svgW = 800;
  const svgH = 120;
  const pathD = waypoints
    .map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x} ${svgH * 0.5}`)
    .join(" ");

  return (
    <section
      className="py-12"
      style={{ background: "#f8fafc" }}
      data-ocid="trek_route.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: GT_DARK }}
        >
          Route Intelligence
        </motion.h2>

        <div
          className="bg-white rounded-2xl overflow-hidden shadow-sm border"
          style={{ borderColor: "rgba(26,122,76,0.12)" }}
        >
          <div className="p-6">
            {/* SVG route map */}
            <div className="w-full overflow-x-auto mb-6">
              <svg
                viewBox={`0 0 ${svgW} ${svgH}`}
                className="w-full"
                style={{ minWidth: "500px", height: "100px" }}
                role="img"
                aria-label="Trek route elevation diagram"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="4"
                    refX="6"
                    refY="2"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 2, 0 4" fill={GT_GREEN} />
                  </marker>
                </defs>
                {/* Trail path */}
                <path
                  d={pathD}
                  stroke={GT_GREEN}
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Waypoints */}
                {waypoints.map((pt) => (
                  <g key={`wp-${pt.label}`}>
                    <circle
                      cx={pt.x}
                      cy={svgH * 0.5}
                      r={pt.highlight ? 8 : 5}
                      fill={pt.highlight ? GT_AMBER : GT_GREEN}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x={pt.x}
                      y={svgH * 0.5 - 15}
                      textAnchor="middle"
                      fontSize="10"
                      fill={GT_DARK}
                      fontWeight={pt.highlight ? "bold" : "normal"}
                    >
                      {pt.sublabel}
                    </text>
                    <text
                      x={pt.x}
                      y={svgH * 0.5 + 22}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#6b7280"
                    >
                      {pt.alt}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  const content = trek.itinerary
                    .map(
                      (d) =>
                        `${d.title} | Alt: ${d.maxAltitude ?? d.endAltitude ?? ""}ft | ${d.distanceKm ?? ""}km`,
                    )
                    .join("\n");
                  const blob = new Blob([content], { type: "text/plain" });
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(blob);
                  a.download = `${trek.id}-route.gpx`;
                  a.click();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: GT_GREEN }}
                data-ocid="trek_route.gpx_download_button"
              >
                <Download className="w-4 h-4" /> Download GPX File
              </button>
            </div>
          </div>

          {/* Terrain table */}
          <div
            className="border-t"
            style={{ borderColor: "rgba(26,122,76,0.08)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#f0fdf4" }}>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">
                      Day
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">
                      Terrain
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">
                      Distance
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">
                      Difficulty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trek.itinerary.map((day, i) => (
                    <tr
                      key={`terrain-${day.day}`}
                      className="border-b"
                      style={{
                        borderColor: "rgba(26,122,76,0.05)",
                        background: i % 2 === 0 ? "white" : "#fafafa",
                      }}
                    >
                      <td
                        className="px-4 py-2.5 font-medium"
                        style={{ color: GT_DARK }}
                      >
                        Day {day.day}
                      </td>
                      <td className="px-4 py-2.5 text-gray-600 text-xs">
                        {day.terrain ?? "Mountain trail"}
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        {day.distanceKm ? `${day.distanceKm} km` : "—"}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full capitalize"
                          style={{
                            background:
                              day.difficulty === "hard" ||
                              day.difficulty === "very_hard"
                                ? "#fef2f2"
                                : day.difficulty === "moderate"
                                  ? "#fffbeb"
                                  : "#f0fdf4",
                            color:
                              day.difficulty === "hard" ||
                              day.difficulty === "very_hard"
                                ? "#dc2626"
                                : day.difficulty === "moderate"
                                  ? "#d97706"
                                  : "#16a34a",
                          }}
                        >
                          {day.dayDifficulty ?? day.difficulty ?? "Easy"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
