import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import type { BatchSlot, Review, Trek } from "@/types/trek";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

// ── Helpers ──────────────────────────────────────────────────────────────────
function trekById(id: string): Trek | undefined {
  return treksData.find((t) => t.id === id || t.slug === id);
}
function diffColor(d: string) {
  const l = d.toLowerCase();
  if (l.includes("easy") && !l.includes("moderate"))
    return { bg: "#16a34a20", text: "#16a34a", border: "#16a34a40" };
  if (l.includes("moderate") && !l.includes("difficult"))
    return { bg: "#d9770620", text: "#d97706", border: "#d9770640" };
  return { bg: "#dc262620", text: "#dc2626", border: "#dc262640" };
}
function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {([0, 1, 2, 3, 4] as const).map((i) => (
        <Star
          key={`star-pos-${i}`}
          className="w-3.5 h-3.5"
          fill={i < Math.round(n) ? "#f59e0b" : "none"}
          color={i < Math.round(n) ? "#f59e0b" : "#71717a"}
        />
      ))}
    </span>
  );
}
function generateBatches(trekId: string): BatchSlot[] {
  const base = new Date("2026-06-15");
  return [0, 22, 45, 68, 91, 114].map((offset, i) => {
    const start = new Date(base);
    start.setDate(start.getDate() + offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const seats = [8, 3, 1, 12, 5, 2][i];
    const status: BatchSlot["status"] =
      seats >= 6
        ? "available"
        : seats >= 3
          ? "filling_fast"
          : seats === 1
            ? "almost_full"
            : "available";
    return {
      id: `${trekId}-b${i + 1}`,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
      totalSeats: 14,
      bookedSeats: 14 - seats,
      availableSeats: seats,
      price: 8500 + i * 300,
      status,
      meetingPoint: "Rishikesh Bus Stand, 5 AM",
      guide: "Deepak Singh (NIM)",
      discounts: { group5Plus: 5, earlyBird: 8 },
    };
  });
}
const SAMPLE_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Priya Mehta",
    rating: 5,
    dimensions: {
      food: 5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 5,
    },
    title: "Life-changing summit sunrise",
    comment:
      "Woke at 4 AM for the push and every second was worth it. Our guide Deepak shared mythological context at every step. SpO2 checked three times on Day 2. Paneer makhani at 8,500 ft — absolutely surreal. Coming back for Har Ki Dun.",
    date: "2025-12-15",
    month: 12,
    groupType: "couple",
    verified: true,
    helpful: 47,
    tripYear: 2025,
  },
  {
    id: "r2",
    author: "Arjun Krishnaswamy",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5,
    },
    title: "World-class for the price",
    comment:
      "Guides carry a Garmin InReach satellite phone — I tested it myself. Oxygen cylinders at every camp. The 360° panorama with Nanda Devi, Trishul, Kedarnath all visible at once is something I've dreamed of since childhood.",
    date: "2026-01-10",
    month: 1,
    groupType: "solo",
    verified: true,
    helpful: 31,
    tripYear: 2026,
  },
  {
    id: "r3",
    author: "Sunita Sharma",
    rating: 4,
    dimensions: {
      food: 5,
      guideExpertise: 4,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4,
    },
    title: "Perfect family trek — my 14-year-old managed it",
    comment:
      "Slightly nervous about altitude with the kids but the team monitored them constantly. Food was the star — looked forward to every meal. March rhododendron forests beyond description. Just book it.",
    date: "2026-03-20",
    month: 3,
    groupType: "family",
    verified: true,
    helpful: 28,
    tripYear: 2026,
  },
  {
    id: "r4",
    author: "Vivek Agarwal",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5,
    },
    title: "Corporate team bonding — exceeded all expectations",
    comment:
      "12 Bangalore colleagues, not a single complaint. Guide handled different fitness levels brilliantly. WhatsApp updates to families was a thoughtful touch. Summit at 4 AM with headlamps — absolute cinema.",
    date: "2025-11-08",
    month: 11,
    groupType: "corporate",
    verified: true,
    helpful: 19,
    tripYear: 2025,
  },
];
const GEAR_RENTALS = [
  {
    id: "g1",
    name: "Trekking Poles",
    icon: "🥢",
    daily: 150,
    weekly: 800,
    desc: "Carbon, anti-shock",
  },
  {
    id: "g2",
    name: "Sleeping Bag",
    icon: "🛌",
    daily: 200,
    weekly: 1100,
    desc: "-10°C down fill",
  },
  {
    id: "g3",
    name: "Rain Poncho",
    icon: "🌧️",
    daily: 100,
    weekly: 500,
    desc: "Heavy-duty",
  },
  {
    id: "g4",
    name: "Gaiters",
    icon: "🧤",
    daily: 80,
    weekly: 400,
    desc: "Snow & mud guard",
  },
  {
    id: "g5",
    name: "Headlamp",
    icon: "🔦",
    daily: 100,
    weekly: 500,
    desc: "350 lm, USB-C",
  },
  {
    id: "g6",
    name: "Trek Backpack",
    icon: "🎒",
    daily: 250,
    weekly: 1400,
    desc: "55L Osprey/Decathlon",
  },
];
const MONTH_NAMES = [
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
];

function parseNumericStr(val: string | number): number {
  if (typeof val === "number") return val;
  const m = String(val).match(/[\d,]+/);
  return m ? Number.parseInt(m[0].replace(/,/g, ""), 10) : 0;
}

// ── Quick Facts Bar ───────────────────────────────────────────────────────────
function QuickFactsBar({ trek }: { trek: Trek }) {
  const dc = diffColor(trek.difficulty);
  const maxAltNum = parseNumericStr(trek.maxAltitude);
  const _priceNum = parseNumericStr(trek.price);
  const amsLevel =
    maxAltNum < 3000 ? "low" : maxAltNum <= 4500 ? "moderate" : "high";
  const amsColor =
    amsLevel === "low"
      ? "#22c55e"
      : amsLevel === "moderate"
        ? "#f59e0b"
        : "#ef4444";
  const amsLabel =
    amsLevel === "low"
      ? "LOW ALTITUDE"
      : amsLevel === "moderate"
        ? "MODERATE ALTITUDE"
        : "HIGH ALTITUDE";
  const amsGuidance =
    amsLevel === "low"
      ? "Generally safe for most people"
      : amsLevel === "moderate"
        ? "Acclimatization advised"
        : "Medical screening recommended";

  const physicalScore =
    trek.difficulty === "Easy"
      ? 2
      : trek.difficulty === "Moderate"
        ? 3
        : trek.difficulty === "Difficult"
          ? 4
          : 5;
  const technicalScore =
    trek.difficulty === "Easy" ? 1 : trek.difficulty === "Moderate" ? 2 : 3;
  const altitudeScore =
    maxAltNum < 3000
      ? 1
      : maxAltNum < 3500
        ? 2
        : maxAltNum < 4000
          ? 3
          : maxAltNum < 4500
            ? 4
            : 5;

  function ScoreBar({ label, score }: { label: string; score: number }) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/50 w-24 shrink-0">{label}</span>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((slot) => (
            <div
              key={`${label}-slot-${slot}`}
              className="rounded-sm"
              style={{
                width: 8,
                height: 8,
                background: slot < score ? "#22c55e" : "transparent",
                border: `1px solid ${slot < score ? "#22c55e" : "rgba(255,255,255,0.15)"}`,
              }}
            />
          ))}
        </div>
        <span className="text-xs text-white/60 ml-1">{score}/5</span>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#0d1f17",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
      data-ocid="trek_detail.quick_facts_bar"
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap gap-x-5 gap-y-1.5 items-center justify-between">
        {[
          {
            icon: <Mountain className="w-3.5 h-3.5" />,
            label: "Altitude",
            value: trek.maxAltitude,
            extra: (
              <a href="#safety" className="block mt-0.5">
                <span
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{
                    background: `${amsColor}20`,
                    color: amsColor,
                    border: `1px solid ${amsColor}40`,
                  }}
                >
                  {amsLabel}
                </span>
                <span className="text-[10px] text-white/40 ml-1">
                  {amsGuidance}
                </span>
              </a>
            ),
          },
          {
            icon: <Clock className="w-3.5 h-3.5" />,
            label: "Duration",
            value: trek.duration,
          },
          {
            icon: <Zap className="w-3.5 h-3.5" />,
            label: "Difficulty",
            value: trek.difficulty,
            color: dc.text,
            extra: (
              <div className="mt-1 space-y-0.5">
                <ScoreBar label="Physical" score={physicalScore} />
                <ScoreBar label="Technical" score={technicalScore} />
                <ScoreBar label="Altitude" score={altitudeScore} />
                <span className="text-[10px] text-white/40 font-mono">
                  Overall: {trek.difficulty}
                </span>
              </div>
            ),
          },
          {
            icon: <span className="text-xs font-bold">₹</span>,
            label: "From",
            value: trek.price,
          },
          {
            icon: <Calendar className="w-3.5 h-3.5" />,
            label: "Season",
            value: trek.bestTime?.split(",")[0] ?? trek.bestTime,
          },
          {
            icon: <Users className="w-3.5 h-3.5" />,
            label: "Group",
            value: trek.groupSize,
          },
        ].map((f) => (
          <div key={f.label} className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span style={{ color: f.color ?? "#52c99a" }}>{f.icon}</span>
              <span className="text-xs text-white/40 font-mono uppercase tracking-wide">
                {f.label}:
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: f.color ?? "#e2e8f0" }}
              >
                {f.value}
              </span>
            </div>
            {f.extra}
          </div>
        ))}
        <a href={`/booking/${trek.id}/select-batch`}>
          <button
            type="button"
            className="px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            style={{ background: "#E8963A", color: "#0A0E14" }}
            data-ocid="trek_detail.quick_book_button"
          >
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
}

// ── Altitude Chart (SVG) ──────────────────────────────────────────────────────
function AltitudeChart({ trek }: { trek: Trek }) {
  const days = trek.itinerary.filter((d) => d.maxAltitude);
  if (days.length < 2) return null;
  const alts = days.map((d) => d.maxAltitude ?? 0);
  const mn = Math.min(...alts) - 500;
  const mx = Math.max(...alts) + 500;
  const W = 600;
  const H = 160;
  const px = 44;
  const py = 20;
  const tx = (i: number) => px + (i / (days.length - 1)) * (W - px * 2);
  const ty = (a: number) => H - py - ((a - mn) / (mx - mn)) * (H - py * 2);
  const line = days
    .map((d, i) => `${tx(i)},${ty(d.maxAltitude ?? 0)}`)
    .join(" ");
  const area = [
    `${tx(0)},${H - py}`,
    ...days.map((d, i) => `${tx(i)},${ty(d.maxAltitude ?? 0)}`),
    `${tx(days.length - 1)},${H - py}`,
  ].join(" ");
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl p-5 border"
      style={{ background: "#0d1f17", borderColor: "rgba(82,201,154,0.2)" }}
      data-ocid="trek_detail.altitude_chart_section"
    >
      <h2 className="font-display text-2xl italic text-white mb-4">
        Altitude Profile
      </h2>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Trek altitude profile"
      >
        <defs>
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#52c99a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#52c99a" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((f) => {
          const a = Math.round(mn + f * (mx - mn));
          const y = ty(a);
          return (
            <g key={f}>
              <line
                x1={px}
                x2={W - px}
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="4 3"
              />
              <text
                x={px - 4}
                y={y + 3}
                fill="rgba(255,255,255,0.3)"
                fontSize="8"
                textAnchor="end"
              >
                {a.toLocaleString()}ft
              </text>
            </g>
          );
        })}
        <polygon points={area} fill="url(#ag)" />
        <polyline
          points={line}
          fill="none"
          stroke="#52c99a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {days.map((d, i) => (
          <g key={d.day}>
            <circle
              cx={tx(i)}
              cy={ty(d.maxAltitude ?? 0)}
              r="4"
              fill="#E8963A"
              stroke="#0d1f17"
              strokeWidth="2"
            />
            <text
              x={tx(i)}
              y={H - 4}
              fill="rgba(255,255,255,0.45)"
              fontSize="8"
              textAnchor="middle"
            >
              D{d.day}
            </text>
          </g>
        ))}
      </svg>
    </motion.section>
  );
}

// ── Safety & AMS ──────────────────────────────────────────────────────────────
function SafetySection({ trek }: { trek: Trek }) {
  const [open, setOpen] = useState<number | null>(null);
  const sp = trek.safetyProtocol;
  const stages = sp
    ? [
        { label: "Stage 1 — Mild AMS", data: sp.amsProtocol.stage1 },
        { label: "Stage 2 — Moderate AMS", data: sp.amsProtocol.stage2 },
        { label: "Stage 3 — Severe HACE/HAPE", data: sp.amsProtocol.stage3 },
      ]
    : [
        {
          label: "Stage 1 — Mild AMS",
          data: {
            symptoms: [
              "Headache",
              "Nausea",
              "Fatigue",
              "Dizziness",
              "Loss of appetite",
            ],
            treatment:
              "Rest at same altitude. Ibuprofen. Drink 3–4L water. Monitor hourly.",
          },
        },
        {
          label: "Stage 2 — Moderate AMS",
          data: {
            symptoms: [
              "Severe headache unresponsive to meds",
              "Vomiting",
              "SpO2 <85%",
              "Extreme fatigue",
            ],
            treatment:
              "Descend 300–500m immediately. Administer Diamox 125mg. Contact guide.",
          },
        },
        {
          label: "Stage 3 — Severe HACE/HAPE",
          data: {
            symptoms: [
              "Loss of coordination (ataxia)",
              "Altered consciousness",
              "Pink frothy sputum",
              "Seizures",
            ],
            treatment:
              "EMERGENCY: Descend 1,000m+ immediately. 8L/min O₂. Call helicopter. Dexamethasone 8mg IM.",
          },
        },
      ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0a1a11",
        border: "1px solid rgba(82,201,154,0.15)",
      }}
      data-ocid="trek_detail.safety_section"
    >
      <div
        className="px-6 pt-5 pb-4 border-b"
        style={{ borderColor: "rgba(82,201,154,0.1)" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Shield className="w-5 h-5" style={{ color: "#52c99a" }} />
          <h2 className="font-display text-2xl italic text-white">
            Safety & AMS Protocol
          </h2>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          Exactly what we carry, who leads you, and what happens if something
          goes wrong.
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#52c99a" }}
          >
            Lead Guide
          </p>
          <div className="flex items-start gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-bold shrink-0"
              style={{ background: "rgba(82,201,154,0.15)", color: "#52c99a" }}
            >
              {(sp?.guideInfo.name ?? "Deepak Singh")[0]}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                {sp?.guideInfo.name ?? "Deepak Singh"}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {sp?.guideInfo.certification ??
                  "NIM Certified · WFR Level 3 · 12 years, 200+ Himalayan treks"}
              </p>
              <div className="flex gap-1.5 mt-1.5">
                {["NIM", "WFR", "WMI"].map((c) => (
                  <span
                    key={c}
                    className="text-xs px-1.5 py-0.5 rounded font-mono font-bold"
                    style={{
                      background: "rgba(82,201,154,0.12)",
                      color: "#52c99a",
                      border: "1px solid rgba(82,201,154,0.25)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {[
            {
              icon: "📡",
              label: "Satellite Phone",
              value:
                sp?.satellitePhone.model ?? "Garmin inReach Mini 2 · Global",
            },
            {
              icon: "🚁",
              label: "Helipad",
              value: sp?.helicopterLandingZone
                ? `${sp.helicopterLandingZone.location} · ${sp.helicopterLandingZone.coordinates}`
                : "Chopta village clearing · 30°24'31\"N 79°13'12\"E",
            },
            {
              icon: "🫁",
              label: "O₂ Cylinders",
              value: sp?.oxygenCylinders
                ? `${sp.oxygenCylinders.count} × ${sp.oxygenCylinders.capacity}`
                : "3 × 5L medical-grade",
            },
            {
              icon: "💊",
              label: "Team Ratio",
              value: sp?.teamRatio ?? "1 guide + 1 helper per 8 trekkers",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-2 py-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <span className="text-base shrink-0">{item.icon}</span>
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-wide"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-white/75">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#E8963A" }}
          >
            Nearest Hospital
          </p>
          <div
            className="p-3 rounded-xl"
            style={{
              background: "rgba(232,150,58,0.08)",
              border: "1px solid rgba(232,150,58,0.2)",
            }}
          >
            <p className="text-white font-semibold text-sm">
              {sp?.nearestHospital.name ?? "AIIMS Rishikesh"}
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {sp?.nearestHospital.distance ?? "190 km · 3.5 hr drive"}
            </p>
            <a
              href={`tel:${sp?.nearestHospital.phone ?? "01352462945"}`}
              className="flex items-center gap-1.5 mt-1.5 text-sm font-mono"
              style={{ color: "#E8963A" }}
              data-ocid="trek_detail.hospital_phone"
            >
              <Phone className="w-3 h-3" />
              {sp?.nearestHospital.phone ?? "+91 135 246 2945"}
            </a>
          </div>
          <p
            className="font-mono text-xs tracking-widest uppercase pt-1"
            style={{ color: "#52c99a" }}
          >
            AMS Protocol
          </p>
          <div className="space-y-1.5">
            {stages.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  style={{
                    background:
                      open === i
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(255,255,255,0.02)",
                  }}
                  onClick={() => setOpen(open === i ? null : i)}
                  data-ocid={`trek_detail.ams_stage.${i + 1}`}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      color:
                        i === 2 ? "#ef4444" : i === 1 ? "#f59e0b" : "#52c99a",
                    }}
                  >
                    {s.label}
                  </span>
                  {open === i ? (
                    <ChevronUp className="w-4 h-4 text-white/40" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  )}
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-4 py-3"
                        style={{ background: "rgba(0,0,0,0.2)" }}
                      >
                        <p
                          className="text-xs font-mono uppercase tracking-wide mb-1"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          Symptoms
                        </p>
                        <ul className="space-y-0.5 mb-2">
                          {s.data.symptoms.map((sym) => (
                            <li
                              key={sym}
                              className="text-xs text-white/65 flex items-center gap-1.5"
                            >
                              <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{
                                  background: i === 2 ? "#ef4444" : "#f59e0b",
                                }}
                              />
                              {sym}
                            </li>
                          ))}
                        </ul>
                        <p
                          className="text-xs font-mono uppercase tracking-wide mb-1"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          Treatment
                        </p>
                        <p className="text-xs text-white/65 leading-relaxed">
                          {s.data.treatment}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div
            className="p-3 rounded-lg"
            style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.18)",
            }}
          >
            <p
              className="text-xs font-mono uppercase tracking-wide mb-1"
              style={{ color: "#ef4444" }}
            >
              Evacuation
            </p>
            <p className="text-xs text-white/55 leading-relaxed">
              {sp?.evacuationProcedure ??
                "Immediate descent + O₂ + helicopter if required. Garmin InReach SOS triggers response within 90 min. AIIMS Rishikesh pre-coordinated."}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ── Batch Calendar ────────────────────────────────────────────────────────────
function BatchCalendar({ trek }: { trek: Trek }) {
  const batches = trek.batchSlots ?? generateBatches(trek.id);
  const cfg: Record<string, { bg: string; text: string; label: string }> = {
    available: { bg: "rgba(22,163,74,0.15)", text: "#16a34a", label: "Open" },
    filling_fast: {
      bg: "rgba(217,119,6,0.15)",
      text: "#d97706",
      label: "Filling Fast",
    },
    almost_full: {
      bg: "rgba(220,38,38,0.15)",
      text: "#dc2626",
      label: "Almost Full",
    },
    sold_out: {
      bg: "rgba(113,113,122,0.15)",
      text: "#71717a",
      label: "Sold Out",
    },
    limited: { bg: "rgba(217,119,6,0.15)", text: "#d97706", label: "Limited" },
    waitlist: {
      bg: "rgba(99,102,241,0.15)",
      text: "#6366f1",
      label: "Waitlist",
    },
  };
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      data-ocid="trek_detail.batch_calendar_section"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-3xl italic text-foreground">
          Upcoming Batches
        </h2>
        <a
          href={`https://wa.me/919876543210?text=Hi, I'd like to book ${encodeURIComponent(trek.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
          style={{
            background: "rgba(37,211,102,0.1)",
            color: "#25D366",
            border: "1px solid rgba(37,211,102,0.25)",
          }}
          data-ocid="trek_detail.whatsapp_button"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Us
        </a>
      </div>
      <div
        className="mb-5 p-4 rounded-xl"
        style={{
          background: "rgba(232,150,58,0.06)",
          border: "1px solid rgba(232,150,58,0.18)",
        }}
      >
        <p
          className="font-mono text-xs tracking-widest uppercase mb-2.5"
          style={{ color: "#E8963A" }}
        >
          Group Discounts
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { size: "5+ people", disc: "5% off" },
            { size: "10+ people", disc: "10% off" },
            { size: "15+ people", disc: "15% off" },
          ].map((d) => (
            <div key={d.size} className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5" style={{ color: "#E8963A" }} />
              <span className="text-sm text-foreground">{d.size}</span>
              <span
                className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(232,150,58,0.15)",
                  color: "#E8963A",
                }}
              >
                {d.disc}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          30% advance to confirm. Balance 14 days before trek.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {batches.slice(0, 6).map((b, i) => {
          const c = cfg[b.status] ?? cfg.available;
          const sold = b.status === "sold_out";
          return (
            <div
              key={b.id}
              className="rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: `${c.text}40`,
              }}
              data-ocid={`trek_detail.batch.item.${i + 1}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {fmt(b.startDate)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    to {fmt(b.endDate)}
                  </p>
                </div>
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                  style={{ background: c.bg, color: c.text }}
                >
                  {c.label}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xl font-bold text-foreground">
                  ₹{b.price.toLocaleString("en-IN")}
                </p>
                <span className="text-xs font-medium" style={{ color: c.text }}>
                  {b.availableSeats} seat{b.availableSeats !== 1 ? "s" : ""}{" "}
                  left
                </span>
              </div>
              <div
                className="w-full h-1.5 rounded-full mb-3"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(b.bookedSeats / b.totalSeats) * 100}%`,
                    background: c.text,
                  }}
                />
              </div>
              {!sold ? (
                <a href={`/booking/${trek.id}/select-batch`}>
                  <button
                    type="button"
                    className="w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
                    style={{ background: "#E8963A", color: "#0A0E14" }}
                    data-ocid={`trek_detail.batch_book.${i + 1}`}
                  >
                    Book This Batch
                  </button>
                </a>
              ) : (
                <button
                  type="button"
                  className="w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase opacity-40 cursor-not-allowed"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  disabled
                >
                  Sold Out
                </button>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

// ── Reviews ───────────────────────────────────────────────────────────────────
function ReviewsSection({ trek }: { trek: Trek }) {
  const reviews = trek.detailedReviews ?? SAMPLE_REVIEWS;
  const [filter, setFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [shown, setShown] = useState(4);
  const filtered = useMemo(
    () =>
      reviews.filter(
        (r) =>
          (filter === "all" || r.groupType === filter) &&
          (monthFilter === "all" || r.month === Number(monthFilter)),
      ),
    [reviews, filter, monthFilter],
  );
  const overall =
    reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);
  const dimLabels: Array<{ key: keyof Review["dimensions"]; label: string }> = [
    { key: "food", label: "Food" },
    { key: "guideExpertise", label: "Guide" },
    { key: "safety", label: "Safety" },
    { key: "valueForMoney", label: "Value" },
    { key: "scenery", label: "Scenery" },
  ];
  const dimAvgs = dimLabels.map((d) => ({
    ...d,
    avg:
      reviews.reduce((s, r) => s + (r.dimensions[d.key] ?? 0), 0) /
      (reviews.length || 1),
  }));
  const groups = ["all", "solo", "couple", "family", "corporate", "school"];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      data-ocid="trek_detail.reviews_section"
    >
      <h2 className="font-display text-3xl italic text-foreground mb-6">
        Trekker Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
        <div
          className="flex items-center gap-5 p-5 rounded-2xl"
          style={{
            background: "rgba(232,150,58,0.06)",
            border: "1px solid rgba(232,150,58,0.18)",
          }}
        >
          <div className="text-center shrink-0">
            <p
              className="font-display text-5xl italic font-bold"
              style={{ color: "#E8963A" }}
            >
              {overall.toFixed(1)}
            </p>
            <Stars n={overall} />
            <p className="text-xs text-muted-foreground mt-1">
              {reviews.length} verified
            </p>
          </div>
          <div className="flex-1 space-y-1.5">
            {[5, 4, 3, 2, 1].map((s) => {
              const cnt = reviews.filter(
                (r) => Math.round(r.rating) === s,
              ).length;
              return (
                <div key={s} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-3 shrink-0">
                    {s}
                  </span>
                  <Star
                    className="w-3 h-3 shrink-0"
                    fill="#f59e0b"
                    color="#f59e0b"
                  />
                  <div
                    className="flex-1 h-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${reviews.length > 0 ? (cnt / reviews.length) * 100 : 0}%`,
                        background: "#E8963A",
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-4 text-right shrink-0">
                    {cnt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="p-5 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Rating by Category
          </p>
          <div className="space-y-2.5">
            {dimAvgs.map((d) => (
              <div key={d.key}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    {d.avg.toFixed(1)}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(d.avg / 5) * 100}%`,
                      background: "linear-gradient(90deg,#52c99a,#E8963A)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-5 items-center">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setFilter(g)}
            className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all duration-200 capitalize"
            style={{
              background:
                filter === g
                  ? "rgba(232,150,58,0.18)"
                  : "rgba(255,255,255,0.04)",
              color: filter === g ? "#E8963A" : "rgba(255,255,255,0.45)",
              border: `1px solid ${filter === g ? "rgba(232,150,58,0.35)" : "rgba(255,255,255,0.07)"}`,
            }}
            data-ocid={`trek_detail.review_filter.${g}`}
          >
            {g}
          </button>
        ))}
        <select
          className="ml-auto px-3 py-1.5 rounded-full text-xs font-mono bg-transparent border"
          style={{
            borderColor: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.55)",
          }}
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          data-ocid="trek_detail.review_month_filter"
        >
          <option value="all" style={{ background: "#0d1f17" }}>
            All months
          </option>
          {MONTH_NAMES.map((m, i) => (
            <option key={m} value={i + 1} style={{ background: "#0d1f17" }}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        {filtered.slice(0, shown).map((rev, i) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl border"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
            data-ocid={`trek_detail.review.item.${i + 1}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-bold"
                  style={{
                    background: "rgba(82,201,154,0.15)",
                    color: "#52c99a",
                  }}
                >
                  {rev.author[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {rev.author}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className="text-xs font-mono px-1.5 py-0.5 rounded capitalize"
                      style={{
                        background: "rgba(82,201,154,0.1)",
                        color: "#52c99a",
                      }}
                    >
                      {rev.groupType}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {MONTH_NAMES[rev.month - 1]} {rev.tripYear}
                    </span>
                    {rev.verified && (
                      <span className="text-xs" style={{ color: "#52c99a" }}>
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Stars n={rev.rating} />
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">
              {rev.title}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
      {shown < filtered.length && (
        <button
          type="button"
          onClick={() => setShown((s) => s + 4)}
          className="mt-4 w-full py-3 rounded-xl border text-sm font-medium transition-all hover:bg-muted/10"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.55)",
          }}
          data-ocid="trek_detail.load_more_reviews"
        >
          Load More Reviews
        </button>
      )}
    </motion.section>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({
  question,
  answer,
  index,
}: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-xl overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
      data-ocid={`trek_detail.faq.item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{
          background: open
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.02)",
        }}
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-foreground text-sm">{question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-orange-400" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div
          className="px-5 py-4 text-sm text-muted-foreground leading-relaxed"
          style={{ background: "rgba(0,0,0,0.15)" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function TrekDetailPage() {
  const { trekId } = useParams({ from: "/trek/$trekId" });
  const trek = trekById(trekId);
  const [activeDay, setActiveDay] = useState<number | null>(0);
  const [checkedGear, setCheckedGear] = useState<Set<string>>(new Set());
  const [checkedPacking, setCheckedPacking] = useState<Set<string>>(new Set());

  if (!trek) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="trek_detail.not_found"
      >
        <div className="text-center">
          <h1 className="font-display text-4xl italic text-foreground mb-4">
            Trek Not Found
          </h1>
          <Link to="/treks">
            <Button style={{ background: "#E8963A", color: "#0A0E14" }}>
              View All Treks
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const heroImg =
    trek.heroImages?.[0] ??
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80";
  const gallery = trek.heroImages ?? [
    "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  ];
  const similarTreks = treksData
    .filter(
      (t) =>
        t.id !== trek.id &&
        (t.region === trek.region || t.difficulty === trek.difficulty),
    )
    .slice(0, 3);
  const dc = diffColor(trek.difficulty);

  // Categorise packing list
  const packCats: Record<string, string[]> = {
    Clothing: [],
    Equipment: [],
    Documents: [],
    Medical: [],
    Other: [],
  };
  for (const item of trek.packingList) {
    const lc = item.toLowerCase();
    if (
      [
        "jacket",
        "shirt",
        "pant",
        "thermal",
        "glove",
        "cap",
        "sock",
        "balaclava",
        "fleece",
        "rain poncho",
        "t-shirt",
      ].some((k) => lc.includes(k))
    )
      packCats.Clothing.push(item);
    else if (
      [
        "pole",
        "bag",
        "headlamp",
        "bottle",
        "gaiters",
        "shoe",
        "sunglasses",
        "torch",
      ].some((k) => lc.includes(k))
    )
      packCats.Equipment.push(item);
    else if (
      ["id", "permit", "cash", "insurance", "card"].some((k) => lc.includes(k))
    )
      packCats.Documents.push(item);
    else if (
      ["sunscreen", "lip", "medicine", "aid", "energy", "bar"].some((k) =>
        lc.includes(k),
      )
    )
      packCats.Medical.push(item);
    else packCats.Other.push(item);
  }

  return (
    <div className="bg-background pb-16 md:pb-0" data-ocid="trek_detail.page">
      {/* 1. QUICK FACTS BAR — sticky */}
      <div className="sticky top-0 z-30">
        <QuickFactsBar trek={trek} />
      </div>

      {/* 2. CINEMATIC HERO */}
      <section
        className="relative min-h-[85vh] flex items-end overflow-hidden"
        data-ocid="trek_detail.hero_section"
      >
        <img
          src={heroImg}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        {/* Floating polaroid gallery — desktop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {gallery.slice(0, 3).map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="w-28 h-20 rounded-xl overflow-hidden border-2 shadow-2xl"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                transform: `rotate(${[-4, 3, -2][i]}deg)`,
              }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        {/* Download Itinerary PDF button */}
        <div className="absolute bottom-6 left-6 z-20 hidden md:block">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            data-ocid="trek_detail.download_itinerary_button"
          >
            ⬇ Download Full Itinerary PDF
          </button>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  background: "rgba(82,201,154,0.15)",
                  color: "#52c99a",
                  border: "1px solid rgba(82,201,154,0.3)",
                }}
              >
                {trek.region}
              </span>
              {(trek.badges ?? []).map((b) => (
                <span
                  key={b}
                  className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(232,150,58,0.15)",
                    color: "#E8963A",
                    border: "1px solid rgba(232,150,58,0.3)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="font-display text-5xl md:text-7xl italic text-white mb-3 leading-tight max-w-3xl">
              {trek.name}
            </h1>
            <p className="text-white/55 text-lg mb-5 max-w-xl">
              {trek.description}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <span
                className="text-sm font-mono px-3 py-1 rounded-full"
                style={{
                  background: dc.bg,
                  color: dc.text,
                  border: `1px solid ${dc.border}`,
                }}
              >
                {trek.difficulty}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/65">
                <Mountain className="w-4 h-4" />
                {trek.maxAltitude}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/65">
                <Clock className="w-4 h-4" />
                {trek.duration}
              </span>
              <span
                className="text-2xl font-display font-bold italic"
                style={{ color: "#E8963A" }}
              >
                From {trek.price}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`/booking/${trek.id}/select-batch`}>
                <button
                  type="button"
                  className="px-7 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105"
                  style={{ background: "#E8963A", color: "#0A0E14" }}
                  data-ocid="trek_detail.hero_book_button"
                >
                  Book This Trek
                </button>
              </a>
              <a
                href="#batch-calendar"
                className="px-7 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase border border-white/30 text-white/75 transition-all duration-200 hover:border-white/60"
              >
                View Batches
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky secondary CTA */}
      <div
        className="sticky top-[42px] z-20 border-b py-2.5 px-4"
        style={{
          background: "rgba(10,14,20,0.97)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
        data-ocid="trek_detail.sticky_cta"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <span className="font-display text-base italic text-white truncate">
            {trek.name}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono" style={{ color: "#E8963A" }}>
              From {trek.price}
            </span>
            <a href={`/booking/${trek.id}/select-batch`}>
              <button
                type="button"
                className="px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                style={{ background: "#E8963A", color: "#0A0E14" }}
                data-ocid="trek_detail.book_now_button"
              >
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Sticky Booking Sidebar */}
      <div className="hidden lg:block fixed right-6 top-32 z-40 w-72">
        {(() => {
          const priceNum = parseNumericStr(trek.price);
          return (
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: "rgba(13,31,23,0.95)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(82,201,154,0.2)",
              }}
              data-ocid="trek_detail.sticky_sidebar"
            >
              <p
                className="text-2xl font-display font-bold italic"
                style={{ color: "#E8963A" }}
              >
                From {trek.price}
              </p>
              <div className="flex items-center gap-1.5 mt-1 mb-3">
                <Stars n={4.9} />
                <span className="text-xs text-white/50">4.9 (247 reviews)</span>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <label
                    htmlFor="batch-select"
                    className="text-xs text-white/40 font-mono uppercase tracking-wide"
                  >
                    Select Batch
                  </label>
                  <select
                    id="batch-select"
                    className="w-full mt-1 px-3 py-2 rounded-lg text-sm bg-white/5 border text-white/80"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ background: "#0d1f17" }}>
                      Choose dates...
                    </option>
                    {generateBatches(trek.id)
                      .slice(0, 4)
                      .map((b) => (
                        <option
                          key={b.id}
                          value={b.id}
                          style={{ background: "#0d1f17" }}
                        >
                          {b.startDate} — {b.availableSeats} seats left
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">Participants</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full border flex items-center justify-center text-white/60"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold text-white w-4 text-center">
                      2
                    </span>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full border flex items-center justify-center text-white/60"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="pt-2 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex justify-between text-xs text-white/50 mb-1">
                    <span>2 × {trek.price}</span>
                    <span>₹{(priceNum * 2).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/50 mb-1">
                    <span>GST (5%)</span>
                    <span>
                      ₹{Math.round(priceNum * 2 * 0.05).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div
                    className="flex justify-between text-sm font-bold mt-1"
                    style={{ color: "#22c55e" }}
                  >
                    <span>Total</span>
                    <span>
                      ₹{Math.round(priceNum * 2 * 1.05).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
              <a href={`/booking/${trek.id}/select-batch`}>
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity mb-2"
                  style={{ background: "#E8963A", color: "#0A0E14" }}
                  data-ocid="trek_detail.sidebar_book_button"
                >
                  Book Now
                </button>
              </a>
              <a
                href={`https://wa.me/919876543210?text=I want to book ${encodeURIComponent(trek.name)} trek`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-full py-2 rounded-lg font-mono text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity mb-3"
                  style={{ background: "#25D366", color: "#fff" }}
                  data-ocid="trek_detail.sidebar_whatsapp_button"
                >
                  💬 WhatsApp Quick Book
                </button>
              </a>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] text-white/30">🔒 Razorpay</span>
                <span className="text-[10px] text-white/30">
                  📧 Instant confirmation
                </span>
                <span className="text-[10px] text-white/30">
                  🔄 Free reschedule
                </span>
              </div>
            </div>
          );
        })()}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* 3. OVERVIEW + STATS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.overview_section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-display text-3xl italic text-foreground">
                Trek Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {trek.overview ?? trek.description}
              </p>
              {(trek.keyHighlights ?? []).length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {(trek.keyHighlights ?? []).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#52c99a" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { label: "Start Point", value: trek.startPoint, icon: "📍" },
                { label: "Max Altitude", value: trek.maxAltitude, icon: "🏔️" },
                { label: "Distance", value: trek.distance, icon: "📏" },
                { label: "Duration", value: trek.duration, icon: "⏱️" },
                { label: "Difficulty", value: trek.difficulty, icon: "⚡" },
                { label: "Best Time", value: trek.bestTime, icon: "📅" },
                { label: "Group Size", value: trek.groupSize, icon: "👥" },
                { label: "Age Group", value: trek.ageGroup, icon: "🎯" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl border"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <p className="text-base mb-0.5">{item.icon}</p>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-semibold text-foreground text-xs mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 4. DAY-BY-DAY ITINERARY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.itinerary_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-3">
            {trek.itinerary.map((day, i) => (
              <div
                key={day.day}
                className="rounded-2xl overflow-hidden border transition-all duration-200"
                style={{
                  borderColor:
                    activeDay === i
                      ? "rgba(232,150,58,0.4)"
                      : "rgba(255,255,255,0.07)",
                  background:
                    activeDay === i
                      ? "rgba(232,150,58,0.03)"
                      : "rgba(255,255,255,0.02)",
                }}
                data-ocid={`trek_detail.itinerary.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  onClick={() => setActiveDay(activeDay === i ? null : i)}
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold"
                    style={{
                      background:
                        activeDay === i
                          ? "rgba(232,150,58,0.2)"
                          : "rgba(255,255,255,0.06)",
                      color:
                        activeDay === i ? "#E8963A" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {day.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">
                      {day.title}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-0.5">
                      {day.distanceKm && (
                        <span className="text-xs text-muted-foreground">
                          {day.distanceKm} km
                        </span>
                      )}
                      {(day.walkingHours ?? 0) > 0 && (
                        <span className="text-xs text-muted-foreground">
                          {day.walkingHours}h walk
                        </span>
                      )}
                      {day.maxAltitude && (
                        <span className="text-xs text-muted-foreground">
                          ↑ {day.maxAltitude.toLocaleString()} ft
                        </span>
                      )}
                      {day.dayDifficulty && (
                        <span
                          className="text-xs font-mono px-1.5 py-0.5 rounded"
                          style={{
                            background:
                              day.difficulty === "easy"
                                ? "rgba(22,163,74,0.1)"
                                : day.difficulty === "moderate"
                                  ? "rgba(217,119,6,0.1)"
                                  : "rgba(220,38,38,0.1)",
                            color:
                              day.difficulty === "easy"
                                ? "#16a34a"
                                : day.difficulty === "moderate"
                                  ? "#d97706"
                                  : "#dc2626",
                          }}
                        >
                          {day.dayDifficulty}
                        </span>
                      )}
                    </div>
                  </div>
                  {activeDay === i ? (
                    <ChevronUp
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#E8963A" }}
                    />
                  ) : (
                    <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {activeDay === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-5 pb-5 space-y-4 border-t"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                          {day.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {day.terrain && (
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                              }}
                            >
                              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1">
                                🏔️ Terrain
                              </p>
                              <p className="text-xs text-foreground">
                                {day.terrain}
                              </p>
                            </div>
                          )}
                          {day.campsite && (
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                              }}
                            >
                              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1">
                                ⛺ Campsite
                              </p>
                              <p className="text-xs text-foreground font-semibold">
                                {day.campsite.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {day.campsite.altitude.toLocaleString()} ft
                              </p>
                              {day.campsite.amenities.length > 0 && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  {day.campsite.amenities
                                    .slice(0, 3)
                                    .join(" · ")}
                                </p>
                              )}
                            </div>
                          )}
                          {day.weatherPattern && (
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                              }}
                            >
                              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1">
                                🌤️ Weather
                              </p>
                              <p className="text-xs text-foreground">
                                {day.weatherPattern}
                              </p>
                            </div>
                          )}
                        </div>
                        {day.mealDetail && (
                          <div
                            className="p-4 rounded-xl"
                            style={{
                              background: "rgba(82,201,154,0.04)",
                              border: "1px solid rgba(82,201,154,0.12)",
                            }}
                          >
                            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2.5">
                              🍽️ Meals
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {(
                                [
                                  {
                                    label: "Breakfast",
                                    v: day.mealDetail.breakfast,
                                  },
                                  { label: "Lunch", v: day.mealDetail.lunch },
                                  { label: "Dinner", v: day.mealDetail.dinner },
                                ] as const
                              ).map((m) => (
                                <div key={m.label}>
                                  <p
                                    className="text-xs font-semibold"
                                    style={{ color: "#52c99a" }}
                                  >
                                    {m.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {m.v}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {day.mealDetail.snacks && (
                              <p
                                className="text-xs text-muted-foreground mt-2 pt-2 border-t"
                                style={{ borderColor: "rgba(82,201,154,0.12)" }}
                              >
                                <span
                                  className="font-semibold"
                                  style={{ color: "#52c99a" }}
                                >
                                  Snacks:{" "}
                                </span>
                                {day.mealDetail.snacks}
                              </p>
                            )}
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(day.waterSources ?? []).length > 0 && (
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                              }}
                            >
                              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
                                💧 Water Sources
                              </p>
                              <ul className="space-y-0.5">
                                {(day.waterSources ?? []).map((w) => (
                                  <li
                                    key={w}
                                    className="text-xs text-foreground flex items-start gap-1.5"
                                  >
                                    <span
                                      className="w-1 h-1 rounded-full shrink-0 mt-1.5"
                                      style={{ background: "#52c99a" }}
                                    />
                                    {w}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {day.emergencyExit && (
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                background: "rgba(239,68,68,0.04)",
                                border: "1px solid rgba(239,68,68,0.13)",
                              }}
                            >
                              <p
                                className="font-mono text-xs uppercase tracking-wide mb-1.5"
                                style={{ color: "#ef4444" }}
                              >
                                🚨 Emergency Exit
                              </p>
                              <p className="text-xs text-foreground">
                                {day.emergencyExit}
                              </p>
                            </div>
                          )}
                        </div>
                        {(day.photographyHighlights ?? []).length > 0 && (
                          <div>
                            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2">
                              📸 Photography Highlights
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {(day.photographyHighlights ?? []).map((h) => (
                                <span
                                  key={h}
                                  className="text-xs px-2.5 py-1 rounded-full"
                                  style={{
                                    background: "rgba(232,150,58,0.07)",
                                    color: "#E8963A",
                                    border: "1px solid rgba(232,150,58,0.18)",
                                  }}
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {(day.wildlife ?? []).length > 0 && (
                          <div>
                            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-2">
                              🦅 Wildlife
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {(day.wildlife ?? []).map((w) => (
                                <span
                                  key={w}
                                  className="text-xs px-2.5 py-1 rounded-full"
                                  style={{
                                    background: "rgba(82,201,154,0.07)",
                                    color: "#52c99a",
                                    border: "1px solid rgba(82,201,154,0.18)",
                                  }}
                                >
                                  {w}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {day.culturalNotes && (
                          <div
                            className="p-3 rounded-xl"
                            style={{
                              background: "rgba(99,102,241,0.05)",
                              border: "1px solid rgba(99,102,241,0.13)",
                            }}
                          >
                            <p
                              className="font-mono text-xs uppercase tracking-wide mb-1"
                              style={{ color: "#818cf8" }}
                            >
                              🛕 Cultural Notes
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {day.culturalNotes}
                            </p>
                          </div>
                        )}
                        {day.acclimatizationNotes && (
                          <div
                            className="p-3 rounded-xl"
                            style={{
                              background: "rgba(217,119,6,0.06)",
                              border: "1px solid rgba(217,119,6,0.18)",
                            }}
                          >
                            <p
                              className="font-mono text-xs uppercase tracking-wide mb-1"
                              style={{ color: "#d97706" }}
                            >
                              ⚕️ Acclimatization
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {day.acclimatizationNotes}
                            </p>
                          </div>
                        )}
                        {day.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {day.highlights.map((h) => (
                              <span
                                key={h}
                                className="text-xs font-mono px-2.5 py-1 rounded-full"
                                style={{
                                  background: "rgba(74,191,219,0.07)",
                                  color: "#4ABFDB",
                                  border: "1px solid rgba(74,191,219,0.18)",
                                }}
                              >
                                ✦ {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. ALTITUDE CHART */}
        <AltitudeChart trek={trek} />

        {/* 6. SAFETY & AMS */}
        <SafetySection trek={trek} />

        {/* 7. BATCH CALENDAR */}
        <div id="batch-calendar">
          <BatchCalendar trek={trek} />
        </div>

        {/* 8. REVIEWS */}
        <ReviewsSection trek={trek} />

        {/* 9. INCLUSIONS / EXCLUSIONS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.inclusions_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl border"
              style={{
                borderColor: "rgba(82,201,154,0.2)",
                background: "rgba(82,201,154,0.03)",
              }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#52c99a" }}
              >
                ✔ Included
              </h3>
              <ul className="space-y-2">
                {trek.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "#52c99a" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-6 rounded-2xl border"
              style={{
                borderColor: "rgba(220,38,38,0.2)",
                background: "rgba(220,38,38,0.03)",
              }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#dc2626" }}
              >
                ✖ Not Included
              </h3>
              <ul className="space-y-2">
                {trek.exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <X
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "#dc2626" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 10. PACKING CHECKLIST */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.packing_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            Packing Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(packCats)
              .filter(([, items]) => items.length > 0)
              .map(([cat, items]) => (
                <div
                  key={cat}
                  className="p-5 rounded-2xl border"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    {(
                      {
                        Clothing: "👕",
                        Equipment: "🎒",
                        Documents: "📄",
                        Medical: "💊",
                        Other: "📦",
                      } as Record<string, string>
                    )[cat] ?? "📦"}{" "}
                    {cat}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const n = new Set(checkedPacking);
                            n.has(item) ? n.delete(item) : n.add(item);
                            setCheckedPacking(n);
                          }}
                          className="w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all"
                          style={{
                            background: checkedPacking.has(item)
                              ? "#52c99a"
                              : "transparent",
                            borderColor: checkedPacking.has(item)
                              ? "#52c99a"
                              : "rgba(255,255,255,0.18)",
                          }}
                          aria-label={`Mark ${item}`}
                        >
                          {checkedPacking.has(item) && (
                            <Check className="w-3 h-3" color="#0a1a11" />
                          )}
                        </button>
                        <span
                          className="text-xs transition-all"
                          style={{
                            color: checkedPacking.has(item)
                              ? "rgba(255,255,255,0.25)"
                              : "rgba(255,255,255,0.65)",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </motion.section>

        {/* 11. ILLUSTRATED ROUTE MAP */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.route_map_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            Trek Route
          </h2>
          <div
            className="rounded-2xl overflow-hidden border relative"
            style={{
              borderColor: "rgba(82,201,154,0.15)",
              background: "#0a1a11",
              minHeight: "280px",
            }}
          >
            <svg
              viewBox="0 0 800 280"
              className="w-full"
              aria-label="Trek route map"
            >
              <title>Trek Route Map</title>
              {[70, 110, 150, 190, 230].map((y) => (
                <path
                  key={y}
                  d={`M 0 ${y} Q 100 ${y - 12} 200 ${y} Q 300 ${y + 12} 400 ${y} Q 500 ${y - 10} 600 ${y} Q 700 ${y + 10} 800 ${y}`}
                  fill="none"
                  stroke="rgba(82,201,154,0.06)"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M 80 220 Q 160 185 240 148 Q 320 110 380 80 Q 440 52 520 72 Q 578 88 640 125"
                fill="none"
                stroke="#E8963A"
                strokeWidth="3"
                strokeDasharray="8 4"
                strokeLinecap="round"
              />
              <path
                d="M 80 220 Q 160 185 240 148 Q 320 110 380 80 Q 440 52 520 72 Q 578 88 640 125 L 640 260 L 80 260 Z"
                fill="rgba(82,201,154,0.07)"
              />
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#52c99a" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#52c99a" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {trek.itinerary.slice(0, 5).map((day, i) => {
                const pos = [
                  [80, 220],
                  [200, 160],
                  [310, 120],
                  [430, 65],
                  [580, 95],
                ];
                const [px2, py2] = pos[i] ?? [80 + i * 100, 170];
                return (
                  <g key={day.day}>
                    <circle
                      cx={px2}
                      cy={py2}
                      r="7"
                      fill="#E8963A"
                      stroke="#0a1a11"
                      strokeWidth="2"
                    />
                    <text
                      x={px2}
                      y={py2 - 12}
                      fill="rgba(255,255,255,0.65)"
                      fontSize="9"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      Day {day.day}
                    </text>
                  </g>
                );
              })}
              <polygon
                points="380,40 392,80 368,80"
                fill="none"
                stroke="#52c99a"
                strokeWidth="1.5"
              />
              <text
                x="380"
                y="35"
                fill="#52c99a"
                fontSize="8"
                textAnchor="middle"
                fontFamily="monospace"
              >
                SUMMIT
              </text>
            </svg>
            <div className="absolute bottom-3 left-4 flex gap-4 text-xs">
              <span
                className="flex items-center gap-1.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span
                  className="w-5 border-t-2 border-dashed"
                  style={{ borderColor: "#E8963A" }}
                />
                Route
              </span>
              <span
                className="flex items-center gap-1.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#E8963A" }}
                />
                Camp
              </span>
              <span
                className="flex items-center gap-1.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span
                  className="w-2.5 h-2.5"
                  style={{
                    background: "#52c99a",
                    clipPath: "polygon(50% 0%,0% 100%,100% 100%)",
                  }}
                />
                Summit
              </span>
            </div>
          </div>
        </motion.section>

        {/* 12. GEAR RENTAL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.gear_rental_section"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-3xl italic text-foreground">
              Rent Gear for This Trek
            </h2>
            <a href="/gear">
              <button
                type="button"
                className="text-sm font-mono uppercase tracking-wide flex items-center gap-1 hover:opacity-75 transition-opacity"
                style={{ color: "#E8963A" }}
              >
                Full Catalog <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            High-quality gear available at pickup point. No investment in
            equipment you'll rarely use.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GEAR_RENTALS.map((gear, i) => (
              <button
                type="button"
                key={gear.id}
                className="p-4 rounded-2xl border text-center transition-all duration-200 hover:scale-[1.03] cursor-pointer w-full"
                style={{
                  background: checkedGear.has(gear.id)
                    ? "rgba(82,201,154,0.1)"
                    : "rgba(255,255,255,0.02)",
                  borderColor: checkedGear.has(gear.id)
                    ? "rgba(82,201,154,0.4)"
                    : "rgba(255,255,255,0.07)",
                }}
                onClick={() => {
                  const n = new Set(checkedGear);
                  n.has(gear.id) ? n.delete(gear.id) : n.add(gear.id);
                  setCheckedGear(n);
                }}
                data-ocid={`trek_detail.gear.item.${i + 1}`}
              >
                <div className="text-3xl mb-1.5">{gear.icon}</div>
                <p className="text-xs font-semibold text-foreground mb-0.5 leading-tight">
                  {gear.name}
                </p>
                <p className="text-xs text-muted-foreground mb-1.5">
                  {gear.desc}
                </p>
                <p className="text-xs font-bold" style={{ color: "#E8963A" }}>
                  ₹{gear.daily}/day
                </p>
                {checkedGear.has(gear.id) && (
                  <span
                    className="block text-xs mt-1.5 font-mono"
                    style={{ color: "#52c99a" }}
                  >
                    ✓ Added
                  </span>
                )}
              </button>
            ))}
          </div>
          {checkedGear.size > 0 && (
            <div
              className="mt-4 p-4 rounded-xl flex items-center justify-between"
              style={{
                background: "rgba(82,201,154,0.07)",
                border: "1px solid rgba(82,201,154,0.18)",
              }}
            >
              <p className="text-sm text-foreground">
                <span className="font-bold" style={{ color: "#52c99a" }}>
                  {checkedGear.size} item{checkedGear.size > 1 ? "s" : ""}
                </span>{" "}
                added to your booking
              </p>
              <a href={`/booking/${trek.id}/select-batch`}>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full font-mono text-xs font-bold tracking-wide uppercase hover:opacity-90 transition-opacity"
                  style={{ background: "#52c99a", color: "#0a1a11" }}
                  data-ocid="trek_detail.gear_proceed_button"
                >
                  Proceed to Booking
                </button>
              </a>
            </div>
          )}
        </motion.section>

        {/* How to Reach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.how_to_reach_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            How to Reach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { mode: "By Rail", icon: "🚂", detail: trek.nearestRailhead },
              { mode: "By Air", icon: "✈️", detail: trek.nearestAirport },
              { mode: "Start Point", icon: "📍", detail: trek.startPoint },
            ].map((m) => (
              <div
                key={m.mode}
                className="p-5 rounded-xl border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">
                  {m.mode}
                </p>
                <p className="text-foreground text-sm font-medium">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 13. FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="trek_detail.faqs_section"
        >
          <h2 className="font-display text-3xl italic text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {trek.faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </motion.section>

        {/* 14. SIMILAR TREKS */}
        {similarTreks.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-ocid="trek_detail.similar_treks_section"
          >
            <h2 className="font-display text-3xl italic text-foreground mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {similarTreks.map((t, i) => {
                const matchTags: {
                  label: string;
                  color: string;
                  bg: string;
                }[] = [];
                if (t.region === trek.region)
                  matchTags.push({
                    label: "Same State",
                    color: "#3b82f6",
                    bg: "rgba(59,130,246,0.12)",
                  });
                if (t.difficulty === trek.difficulty)
                  matchTags.push({
                    label: "Similar Difficulty",
                    color: "#22c55e",
                    bg: "rgba(34,197,94,0.12)",
                  });
                if (t.bestTime === trek.bestTime)
                  matchTags.push({
                    label: "Same Season",
                    color: "#f59e0b",
                    bg: "rgba(245,158,11,0.12)",
                  });
                if (
                  Math.abs(
                    parseNumericStr(t.maxAltitude) -
                      parseNumericStr(trek.maxAltitude),
                  ) <= 500
                )
                  matchTags.push({
                    label: "Similar Altitude",
                    color: "#a855f7",
                    bg: "rgba(168,85,247,0.12)",
                  });
                return (
                  <a key={t.id} href={`/trek/${t.id}`}>
                    <div
                      className="group rounded-2xl overflow-hidden border transition-all duration-200 hover:scale-[1.02]"
                      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                      data-ocid={`trek_detail.similar_trek.item.${i + 1}`}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75"
                          alt={t.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span
                          className="absolute top-2.5 left-2.5 text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            background: diffColor(t.difficulty).bg,
                            color: diffColor(t.difficulty).text,
                          }}
                        >
                          {t.difficulty}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {matchTags.slice(0, 2).map((tag) => (
                            <span
                              key={tag.label}
                              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                              style={{
                                background: tag.bg,
                                color: tag.color,
                                border: `1px solid ${tag.color}30`,
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                        <p className="font-display text-base italic text-foreground mb-1">
                          {t.name}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {t.duration}
                          </span>
                          <span
                            className="text-sm font-bold"
                            style={{ color: "#E8963A" }}
                          >
                            {t.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,150,58,0.1) 0%, rgba(82,201,154,0.07) 100%)",
            border: "1px solid rgba(232,150,58,0.22)",
          }}
          data-ocid="trek_detail.cta_section"
        >
          <Heart
            className="w-8 h-8 mx-auto mb-4"
            style={{ color: "#E8963A" }}
          />
          <h2 className="font-display text-3xl italic text-foreground mb-3">
            Ready to Answer the Mountain's Call?
          </h2>
          <p className="text-muted-foreground mb-6">
            Secure your spot on {trek.name}. Limited groups, maximum experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`/booking/${trek.id}/select-batch`}>
              <Button
                size="lg"
                className="font-mono text-xs tracking-widest uppercase"
                style={{ background: "#E8963A", color: "#0A0E14" }}
                data-ocid="trek_detail.book_trek_button"
              >
                Book This Trek
              </Button>
            </a>
            <a
              href={`https://wa.me/919876543210?text=Hi, I want to book ${encodeURIComponent(trek.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-xs tracking-wider uppercase"
                style={{ borderColor: "#25D366", color: "#25D366" }}
                data-ocid="trek_detail.whatsapp_cta_button"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
            <Link to="/treks">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-xs tracking-wider uppercase"
                data-ocid="trek_detail.view_all_button"
              >
                View All Treks <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-7">
            {[
              {
                icon: <AlertTriangle className="w-4 h-4" />,
                label: "Safety First",
                sub: "NIM/WFR certified guides",
              },
              {
                icon: <Shield className="w-4 h-4" />,
                label: "30% Advance",
                sub: "Pay rest on trek day",
              },
              {
                icon: <Users className="w-4 h-4" />,
                label: "Small Groups",
                sub: "Max 14 trekkers",
              },
              {
                icon: <MapPin className="w-4 h-4" />,
                label: "GPS Navigation",
                sub: "Satellite phone",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <span style={{ color: "#52c99a" }}>{item.icon}</span>
                <div>
                  <p className="text-foreground font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#0d1f17",
          borderTop: "1px solid rgba(82,201,154,0.2)",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr 1fr",
          height: "56px",
          alignItems: "center",
        }}
        className="md:hidden"
        data-ocid="trek_detail.mobile_sticky_bar"
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 700,
            color: "#E8963A",
          }}
        >
          From
          <br />
          {trek.price}
        </div>
        <a
          href={`/booking/${trek.id}/select-batch`}
          style={{
            background: "#E8963A",
            color: "#0A0E14",
            fontWeight: 700,
            fontSize: "14px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 4px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
          data-ocid="trek_detail.mobile_book_button"
        >
          BOOK NOW
        </a>
        <a
          href={`https://wa.me/919876543210?text=Book ${encodeURIComponent(trek.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "11px",
            color: "#25d366",
            textDecoration: "none",
          }}
          data-ocid="trek_detail.mobile_whatsapp_button"
        >
          <span style={{ fontSize: "20px" }}>💬</span>WhatsApp
        </a>
        <a
          href="tel:+919876543210"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "11px",
            color: "#52c99a",
            textDecoration: "none",
          }}
          data-ocid="trek_detail.mobile_call_button"
        >
          <span style={{ fontSize: "20px" }}>📞</span>Call
        </a>
      </div>
    </div>
  );
}
