import { yatraData } from "@/data/yatra";
import type { BatchSlot, Review, SafetyProtocol } from "@/types/trek";
import { Link, useParams } from "@tanstack/react-router";
import type React from "react";
import { useState } from "react";

// ─── Sub-components ────────────────────────────────────────────────────────────

function QuickFactsBadge({
  icon,
  label,
  value,
}: { icon: string; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center min-w-[80px]">
      <span className="text-xl mb-0.5">{icon}</span>
      <span className="text-xs text-white/60 uppercase tracking-wide font-label">
        {label}
      </span>
      <span className="text-sm font-bold text-white font-label leading-tight text-center">
        {value}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display text-2xl md:text-3xl font-bold mb-6"
      style={{ fontFamily: "'Playfair Display', serif", color: "#0A2E1A" }}
    >
      {children}
    </h2>
  );
}

function DimBar({ value, max = 5 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="h-1.5 rounded-full bg-muted flex-1">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, background: "#145C38" }}
      />
    </div>
  );
}

function BatchStatusPill({ status }: { status: BatchSlot["status"] }) {
  const map: Record<
    BatchSlot["status"],
    { label: string; bg: string; text: string }
  > = {
    available: { label: "Available", bg: "#D1FAE5", text: "#065F46" },
    limited: { label: "Limited", bg: "#FEF3C7", text: "#92400E" },
    filling_fast: { label: "Filling Fast", bg: "#FDE68A", text: "#78350F" },
    almost_full: { label: "Almost Full", bg: "#FED7AA", text: "#C2410C" },
    sold_out: { label: "Sold Out", bg: "#FEE2E2", text: "#991B1B" },
    waitlist: { label: "Waitlist", bg: "#E0E7FF", text: "#3730A3" },
  };
  const s = map[status];
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-bold font-label"
      style={{ background: s.bg, color: s.text }}
    >
      {s.label}
    </span>
  );
}

function StarRating({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            color: s <= Math.round(value) ? "#F4A623" : "#D1D5DB",
            fontSize: 14,
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

function SafetySection({ safety }: { safety: SafetyProtocol }) {
  return (
    <section data-ocid="yatra_detail.safety_section">
      <SectionHeading>🛡 Safety Protocol & AMS Management</SectionHeading>
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
        High-altitude pilgrimage sites present unique medical challenges,
        especially for first-time visitors and elderly pilgrims. Every Global
        Trek yatra group is supported by trained, certified staff with full
        emergency infrastructure.
      </p>
      {/* Guide card */}
      <div
        className="rounded-2xl border border-border p-5 mb-5 flex gap-4 items-start"
        style={{ background: "#F0FAF4" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0"
          style={{ background: "#145C38" }}
        >
          👨‍🧗
        </div>
        <div>
          <p className="font-label font-bold text-sm text-foreground">
            {safety.guideInfo.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {safety.guideInfo.certification}
          </p>
          <p className="text-xs mt-1" style={{ color: "#145C38" }}>
            {safety.guideInfo.experience}
          </p>
          <div className="flex gap-1 mt-1 flex-wrap">
            {safety.guideInfo.languages.map((l) => (
              <span
                key={l}
                className="px-2 py-0.5 rounded-full text-xs bg-muted font-label"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Equipment grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {[
          {
            icon: "📡",
            label: "Satellite Phone",
            value: `${safety.satellitePhone.model} — ${safety.satellitePhone.coverage}`,
          },
          {
            icon: "🚁",
            label: "Helicopter LZ",
            value: `${safety.helicopterLandingZone.location} (${safety.helicopterLandingZone.coordinates})`,
          },
          {
            icon: "🏥",
            label: "Nearest Hospital",
            value: `${safety.nearestHospital.name} — ${safety.nearestHospital.distance} · ${safety.nearestHospital.phone}`,
          },
          {
            icon: "🧪",
            label: "Oxygen Cylinders",
            value: `${safety.oxygenCylinders.count}× ${safety.oxygenCylinders.capacity} at: ${safety.oxygenCylinders.locations.join(", ")}`,
          },
          {
            icon: "💊",
            label: "Key Medications",
            value: `${safety.firstAidKit.medications.slice(0, 3).join(" · ")} +more`,
          },
          { icon: "📋", label: "Team Ratio", value: safety.teamRatio },
        ].map((item) => (
          <div
            key={item.label}
            className="flex gap-3 p-3 rounded-xl border border-border bg-background"
          >
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-xs font-bold font-label text-foreground">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3
        className="font-label font-bold text-base mb-3"
        style={{ color: "#0A2E1A" }}
      >
        AMS Recognition & Response Protocol
      </h3>
      <div className="space-y-3">
        {[
          {
            stage: "Stage 1 — Mild AMS",
            color: "#FEF3C7",
            border: "#F59E0B",
            text: "#78350F",
            data: safety.amsProtocol.stage1,
          },
          {
            stage: "Stage 2 — Moderate AMS",
            color: "#FED7AA",
            border: "#F97316",
            text: "#C2410C",
            data: safety.amsProtocol.stage2,
          },
          {
            stage: "Stage 3 — Severe (HACE/HAPE)",
            color: "#FEE2E2",
            border: "#EF4444",
            text: "#991B1B",
            data: safety.amsProtocol.stage3,
          },
        ].map((stage) => (
          <details
            key={stage.stage}
            className="rounded-xl border"
            style={{ borderColor: stage.border, background: stage.color }}
          >
            <summary
              className="flex items-center gap-2 p-4 cursor-pointer list-none select-none font-label font-bold text-sm"
              style={{ color: stage.text }}
            >
              <span>⚠️</span> {stage.stage}
            </summary>
            <div className="px-4 pb-4 text-xs space-y-2">
              <div>
                <p className="font-bold text-foreground mb-1">Symptoms:</p>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  {stage.data.symptoms.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Treatment:</p>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.data.treatment}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>
      <div
        className="mt-5 p-4 rounded-xl"
        style={{ background: "#FEE2E2", border: "1px solid #EF4444" }}
      >
        <p
          className="font-bold font-label text-sm mb-3"
          style={{ color: "#991B1B" }}
        >
          🆘 Emergency Contacts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {safety.emergencyContacts.map((c) => (
            <div key={c.phone} className="text-xs">
              <span className="font-bold text-foreground">{c.name}</span>
              <span className="text-muted-foreground"> ({c.role})</span>
              <a
                href={`tel:${c.phone}`}
                className="ml-1 font-bold"
                style={{ color: "#145C38" }}
              >
                {c.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BatchCalendar({
  batches,
  yatraSlug,
}: { batches: BatchSlot[]; yatraSlug: string }) {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  return (
    <section data-ocid="yatra_detail.batch_calendar_section">
      <SectionHeading>📅 Batch Calendar 2026 — Book Your Dates</SectionHeading>
      <div className="space-y-3">
        {batches.map((b, idx) => {
          const start = new Date(b.startDate);
          const end = new Date(b.endDate);
          const isSelected = selectedBatch === b.id;
          const soldOut = b.status === "sold_out";
          return (
            <button
              type="button"
              key={b.id}
              className="rounded-2xl border p-4 cursor-pointer transition-all duration-200 w-full text-left"
              style={{
                borderColor: isSelected ? "#145C38" : "#E5E7EB",
                background: isSelected ? "#F0FAF4" : "white",
                opacity: soldOut ? 0.6 : 1,
              }}
              onClick={() =>
                !soldOut && setSelectedBatch(isSelected ? null : b.id)
              }
              data-ocid={`yatra_detail.batch.item.${idx + 1}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="text-center min-w-[52px] p-2 rounded-xl"
                    style={{ background: "#145C38" }}
                  >
                    <p className="text-white text-xs font-label">
                      {start.toLocaleString("en-IN", { month: "short" })}
                    </p>
                    <p className="text-white text-xl font-bold font-display">
                      {start.getDate()}
                    </p>
                  </div>
                  <div>
                    <p className="font-label font-bold text-sm text-foreground">
                      {start.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                      })}{" "}
                      –{" "}
                      {end.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Guide: {b.guide} · {b.meetingPoint}
                    </p>
                    {b.notes && (
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "#145C38" }}
                      >
                        {b.notes}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <BatchStatusPill status={b.status} />
                  <span className="text-xs text-muted-foreground">
                    {b.availableSeats} seats left
                  </span>
                  <span
                    className="font-display font-bold"
                    style={{ color: "#0A2E1A" }}
                  >
                    ₹{b.price.toLocaleString()}
                  </span>
                </div>
              </div>
              {isSelected && (
                <div className="mt-4 pt-4 border-t border-border space-y-3">
                  {b.discounts && (
                    <div className="flex flex-wrap gap-2">
                      {b.discounts.group5Plus > 0 && (
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-label"
                          style={{ background: "#D1FAE5", color: "#065F46" }}
                        >
                          👥 Group 5+ = {b.discounts.group5Plus}% off
                        </span>
                      )}
                      {b.discounts.earlyBird > 0 && (
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-label"
                          style={{ background: "#E0E7FF", color: "#3730A3" }}
                        >
                          🐦 Early Bird = {b.discounts.earlyBird}% off
                        </span>
                      )}
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/booking/$trekSlug/select-batch"
                      params={{ trekSlug: yatraSlug }}
                      className="py-3 rounded-xl text-center font-label font-bold text-sm"
                      style={{ background: "#F4A623", color: "#0A2E1A" }}
                      data-ocid="yatra_detail.book_batch_button"
                    >
                      Book This Batch →
                    </Link>
                    <a
                      href={`https://wa.me/919876543210?text=Batch ${b.startDate} ${yatraSlug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 rounded-xl text-center font-label font-bold text-sm border"
                      style={{ borderColor: "#25D366", color: "#25D366" }}
                      data-ocid="yatra_detail.whatsapp_batch_button"
                    >
                      WhatsApp Enquiry
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="p-3 rounded-xl bg-muted/30">
                      <p className="font-bold text-foreground mb-1">
                        Full Payment
                      </p>
                      <p>₹{b.price.toLocaleString()} · Instant confirmation</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30">
                      <p className="font-bold text-foreground mb-1">
                        30% Advance
                      </p>
                      <p>
                        ₹{Math.round(b.price * 0.3).toLocaleString()} now ·
                        Balance 7 days before
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [filterMonth, setFilterMonth] = useState<number>(0);
  const [filterGroup, setFilterGroup] = useState<string>("all");
  const filtered = reviews.filter((r) => {
    if (filterMonth > 0 && r.month !== filterMonth) return false;
    if (filterGroup !== "all" && r.groupType !== filterGroup) return false;
    return true;
  });
  const avg = (key: keyof Review["dimensions"]) =>
    reviews.length > 0
      ? (
          reviews.reduce((s, r) => s + r.dimensions[key], 0) / reviews.length
        ).toFixed(1)
      : "—";
  const months = [
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
  const overallAvg =
    reviews.length > 0
      ? (
          reviews.reduce((s, r) => s + r.dimensions.overall, 0) / reviews.length
        ).toFixed(1)
      : "—";
  return (
    <section data-ocid="yatra_detail.reviews_section">
      <SectionHeading>⭐ Pilgrim Reviews</SectionHeading>
      <div
        className="p-5 rounded-2xl border border-border mb-6"
        style={{ background: "#FAFAFA" }}
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <p
              className="font-display text-5xl font-bold"
              style={{
                color: "#0A2E1A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {overallAvg}
            </p>
            <StarRating value={Number.parseFloat(overallAvg) || 0} />
            <p className="text-xs text-muted-foreground mt-1">
              {reviews.length} verified pilgrims
            </p>
          </div>
          <div className="flex-1 space-y-2 min-w-[200px]">
            {(
              [
                "Experience",
                "Guide / Pandit",
                "Safety",
                "Food",
                "Value",
              ] as const
            ).map((label, i) => {
              const keys: Array<keyof Review["dimensions"]> = [
                "overall",
                "guideExpertise",
                "safety",
                "food",
                "valueForMoney",
              ];
              const val = avg(keys[i]);
              return (
                <div key={label} className="flex items-center gap-2 text-xs">
                  <span className="w-28 text-muted-foreground shrink-0">
                    {label}
                  </span>
                  <DimBar value={Number.parseFloat(val) || 0} />
                  <span className="w-6 text-right font-bold text-foreground">
                    {val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        <select
          className="px-3 py-1.5 rounded-lg border border-border text-sm bg-background"
          value={filterMonth}
          onChange={(e) => setFilterMonth(Number(e.target.value))}
          data-ocid="yatra_detail.reviews_month_filter"
        >
          <option value={0}>All Months</option>
          {months.map((m, i) => (
            <option key={m} value={i + 1}>
              {m}
            </option>
          ))}
        </select>
        <select
          className="px-3 py-1.5 rounded-lg border border-border text-sm bg-background"
          value={filterGroup}
          onChange={(e) => setFilterGroup(e.target.value)}
          data-ocid="yatra_detail.reviews_group_filter"
        >
          <option value="all">All Groups</option>
          {["solo", "couple", "family", "friends", "corporate", "school"].map(
            (g) => (
              <option key={g} value={g}>
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </option>
            ),
          )}
        </select>
        {(filterMonth > 0 || filterGroup !== "all") && (
          <button
            type="button"
            onClick={() => {
              setFilterMonth(0);
              setFilterGroup("all");
            }}
            className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center py-8">
            No reviews match your filters.
          </p>
        ) : (
          filtered.map((r, i) => (
            <div
              key={r.id}
              className="p-5 rounded-2xl border border-border bg-background"
              data-ocid={`yatra_detail.review.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: "#145C38" }}
                  >
                    {r.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-label font-bold text-sm text-foreground">
                      {r.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(r.date).toLocaleDateString("en-IN", {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      · {r.groupType}
                      {r.verified && (
                        <span className="ml-1" style={{ color: "#145C38" }}>
                          ✓ Verified
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <StarRating value={r.rating} />
              </div>
              <p className="font-label font-semibold text-sm text-foreground mb-2">
                {r.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.comment}
              </p>
              <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-border">
                {(
                  [
                    "food",
                    "guideExpertise",
                    "safety",
                    "valueForMoney",
                    "scenery",
                  ] as const
                ).map((dim) => (
                  <div key={dim} className="flex items-center gap-1 text-xs">
                    <span className="text-muted-foreground capitalize">
                      {dim === "guideExpertise"
                        ? "Guide"
                        : dim === "valueForMoney"
                          ? "Value"
                          : dim}
                    </span>
                    <span className="font-bold" style={{ color: "#145C38" }}>
                      {r.dimensions[dim].toFixed(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default function YatraDetailPage() {
  const { slug } = useParams({ from: "/yatra/$slug" });
  const yatra = yatraData.find((y) => (y.slug ?? y.id) === slug);

  const [activeTab, setActiveTab] = useState<string>("overview");
  const [pujaBooked, setPujaBooked] = useState<string | null>(null);

  if (!yatra) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ paddingTop: "120px" }}
      >
        <div className="text-center">
          <p className="text-5xl mb-4">🕉</p>
          <h1 className="font-display text-2xl">Yatra not found</h1>
          <Link to="/yatra" className="text-primary hover:underline mt-2 block">
            View all yatras
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = `https://source.unsplash.com/1600x900/?${yatra.imageQuery}`;
  const templeInfo = yatra.isYatra ? yatra.templeInfo : null;
  const darshan = yatra.isYatra
    ? ((
        yatra as unknown as {
          darshan?: Array<{ puja: string; time: string; description: string }>;
        }
      ).darshan ?? [])
    : [];
  const pujaOptions = yatra.isYatra
    ? ((
        yatra as unknown as {
          pujaOptions?: Array<{
            name: string;
            price: number;
            duration: string;
            bookingNote: string;
          }>;
        }
      ).pujaOptions ?? [])
    : [];
  const transportOptions = yatra.isYatra
    ? ((
        yatra as unknown as {
          transportOptions?: Array<{
            option: string;
            cost: string;
            duration: string;
            bookingNote: string;
          }>;
        }
      ).transportOptions ?? [])
    : [];
  const registrationSteps = yatra.isYatra
    ? ((
        yatra as unknown as {
          registrationSteps?: Array<{ step: number; instruction: string }>;
        }
      ).registrationSteps ?? [])
    : [];
  const batches = yatra.batchSlots ?? [];
  const reviews = yatra.detailedReviews ?? [];
  const safety = yatra.safetyProtocol;
  const diffColor = yatra.difficulty?.toLowerCase().includes("moderate")
    ? "#FEF3C7"
    : "#D1FAE5";
  const diffText = yatra.difficulty?.toLowerCase().includes("moderate")
    ? "#92400E"
    : "#065F46";

  const NAV_TABS = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "darshan", label: "Darshan & Puja" },
    { id: "transport", label: "Transport" },
    { id: "registration", label: "Registration" },
    { id: "safety", label: "Safety" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-background" data-ocid="yatra_detail_page">
      {/* ── Quick Facts Sticky Bar ───────────────────────────────── */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(10,46,26,0.97)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
        data-ocid="yatra_detail.quick_facts_bar"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-4 md:gap-8">
            <QuickFactsBadge
              icon="⛰"
              label="Altitude"
              value={templeInfo?.altitude ?? yatra.maxAltitude}
            />
            <QuickFactsBadge icon="⏱" label="Duration" value={yatra.duration} />
            <QuickFactsBadge
              icon="📅"
              label="Opens"
              value={templeInfo?.openingDate2026 ?? "May 2026"}
            />
            <QuickFactsBadge
              icon="🎯"
              label="Difficulty"
              value={yatra.difficulty}
            />
            <div className="hidden md:block">
              <QuickFactsBadge
                icon="💰"
                label="From"
                value={`${yatra.price}/person`}
              />
            </div>
            <div className="hidden md:block">
              <QuickFactsBadge
                icon="📋"
                label="Registration"
                value="Required"
              />
            </div>
          </div>
          <a
            href={`https://wa.me/919876543210?text=Enquiry about ${yatra.name} yatra`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl text-sm font-label font-bold"
            style={{ background: "#25D366", color: "white" }}
            data-ocid="yatra_detail.whatsapp_cta_top"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── Cinematic Hero ──────────────────────────────────────── */}
      <div
        className="relative flex flex-col justify-end"
        style={{
          minHeight: "75vh",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(10,46,26,0.88) 100%), url(${imageUrl}) center/cover no-repeat`,
        }}
        data-ocid="yatra_detail.hero"
      >
        {/* Thumbnail gallery strip */}
        <div className="absolute top-6 right-6 gap-2 hidden md:flex">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="w-20 h-16 rounded-xl overflow-hidden border-2 border-white/30"
              style={{
                background: `url(https://source.unsplash.com/200x160/?${yatra.imageQuery},${n}) center/cover`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-10 w-full">
          <div className="flex gap-2 mb-4 text-white/60 text-sm">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/yatra">Yatra</Link>
            <span>/</span>
            <span className="text-white">{yatra.name}</span>
          </div>
          {templeInfo && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-label font-bold mb-3"
              style={{ background: "#F4A623", color: "#0A2E1A" }}
            >
              🗓 Opens {templeInfo.openingDate2026} — Closes{" "}
              {templeInfo.closingDate2026}
            </div>
          )}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            {yatra.name}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-5 leading-relaxed">
            {yatra.description.slice(0, 200)}…
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/booking/$trekSlug/select-batch"
              params={{ trekSlug: yatra.slug ?? yatra.id }}
              className="px-6 py-3 rounded-xl text-sm font-label font-bold flex items-center gap-2"
              style={{ background: "#F4A623", color: "#0A2E1A" }}
              data-ocid="yatra_detail.plan_cta_button"
            >
              🕉 Plan Your Yatra →
            </Link>
            <a
              href={`https://wa.me/919876543210?text=Plan ${yatra.name}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-label font-bold border-2 border-white/40 text-white"
              data-ocid="yatra_detail.whatsapp_hero_button"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Section Nav Tabs ──────────────────────────────────── */}
      <div
        className="sticky z-30 border-b bg-card overflow-x-auto"
        style={{ top: "56px" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex gap-0">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-3 text-sm font-label font-semibold whitespace-nowrap transition-colors"
              style={{
                borderBottom:
                  activeTab === tab.id
                    ? "2px solid #145C38"
                    : "2px solid transparent",
                color: activeTab === tab.id ? "#145C38" : "#6B7280",
              }}
              data-ocid={`yatra_detail.nav_tab.${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-14">
          {/* 1. OVERVIEW */}
          {activeTab === "overview" && (
            <section data-ocid="yatra_detail.overview_section">
              <SectionHeading>About {yatra.name}</SectionHeading>
              {templeInfo && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    {
                      icon: "⛰",
                      label: "Altitude",
                      value: templeInfo.altitude,
                    },
                    { icon: "🕉", label: "Deity", value: templeInfo.deity },
                    {
                      icon: "📅",
                      label: "Opens 2026",
                      value: templeInfo.openingDate2026,
                    },
                    {
                      icon: "📞",
                      label: "Committee",
                      value: templeInfo.committeePhone,
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-2xl border border-border text-center"
                      style={{ background: "#F0FAF4" }}
                    >
                      <p className="text-2xl mb-1">{s.icon}</p>
                      <p className="text-xs text-muted-foreground font-label">
                        {s.label}
                      </p>
                      <p className="text-sm font-bold text-foreground mt-0.5 leading-tight">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {(yatra.overview ?? yatra.description)
                  .split("\n\n")
                  .map((para) => (
                    <p key={para.slice(0, 30)} className="text-sm">
                      {para}
                    </p>
                  ))}
              </div>
              {yatra.keyHighlights && yatra.keyHighlights.length > 0 && (
                <div className="mt-8">
                  <h3
                    className="font-label font-bold text-base mb-4"
                    style={{ color: "#0A2E1A" }}
                  >
                    ✨ Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {yatra.keyHighlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 p-3 rounded-xl"
                        style={{ background: "#F0FAF4" }}
                      >
                        <span style={{ color: "#145C38" }}>✓</span>
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3
                    className="font-label font-bold text-sm mb-3"
                    style={{ color: "#065F46" }}
                  >
                    ✅ What's Included
                  </h3>
                  <ul className="space-y-1.5">
                    {yatra.inclusions.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-green-600 shrink-0 mt-0.5">
                          ✓
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="font-label font-bold text-sm mb-3"
                    style={{ color: "#991B1B" }}
                  >
                    ❌ Not Included
                  </h3>
                  <ul className="space-y-1.5">
                    {yatra.exclusions.map((exc) => (
                      <li
                        key={exc}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                        {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {yatra.packingList && yatra.packingList.length > 0 && (
                <div className="mt-8">
                  <h3
                    className="font-label font-bold text-sm mb-3"
                    style={{ color: "#0A2E1A" }}
                  >
                    🎒 Packing List
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {yatra.packingList.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs font-label bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* 2. ITINERARY */}
          {activeTab === "itinerary" &&
            yatra.itinerary &&
            yatra.itinerary.length > 0 && (
              <section data-ocid="yatra_detail.itinerary_section">
                <SectionHeading>🗺 Day-by-Day Itinerary</SectionHeading>
                <div className="space-y-4">
                  {yatra.itinerary.map((day) => (
                    <details
                      key={day.day}
                      className="rounded-2xl border border-border overflow-hidden"
                      open={day.day === 1}
                    >
                      <summary className="flex items-center gap-4 p-5 cursor-pointer list-none select-none bg-card hover:bg-muted/20 transition-colors">
                        <div
                          className="w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white shrink-0"
                          style={{ background: "#145C38" }}
                        >
                          <span className="text-xs font-label">Day</span>
                          <span className="text-lg font-bold font-display leading-none">
                            {day.day}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-label font-bold text-sm text-foreground truncate">
                            {day.title}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-1">
                            {day.distanceKm && (
                              <span className="text-xs text-muted-foreground">
                                📐 {day.distanceKm} km
                              </span>
                            )}
                            {day.duration && (
                              <span className="text-xs text-muted-foreground">
                                ⏱ {day.duration}
                              </span>
                            )}
                            {day.dayDifficulty && (
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-label"
                                style={{
                                  background: diffColor,
                                  color: diffText,
                                }}
                              >
                                {day.dayDifficulty}
                              </span>
                            )}
                            {day.startAltitude && day.endAltitude && (
                              <span className="text-xs text-muted-foreground">
                                ⛰ {day.startAltitude.toLocaleString()}→
                                {day.endAltitude.toLocaleString()} ft
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-muted-foreground text-sm shrink-0">
                          ▾
                        </span>
                      </summary>
                      <div className="p-5 border-t border-border space-y-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {day.description}
                        </p>
                        {day.highlights && day.highlights.length > 0 && (
                          <div>
                            <p
                              className="text-xs font-bold font-label mb-2"
                              style={{ color: "#145C38" }}
                            >
                              ✨ Day Highlights
                            </p>
                            <ul className="space-y-1">
                              {day.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span style={{ color: "#F4A623" }}>→</span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {day.campsite && (
                            <div className="p-3 rounded-xl bg-muted/30">
                              <p className="text-xs font-bold font-label text-foreground">
                                🏕 Campsite
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {day.campsite.name}
                              </p>
                              <p
                                className="text-xs mt-0.5"
                                style={{ color: "#145C38" }}
                              >
                                {day.campsite.altitude.toLocaleString()} ft
                              </p>
                            </div>
                          )}
                          {day.mealDetail && (
                            <div className="p-3 rounded-xl bg-muted/30">
                              <p className="text-xs font-bold font-label text-foreground">
                                🍽 Meals
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                ☀ {day.mealDetail.breakfast.split(" — ")[0]}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                🌤 {day.mealDetail.lunch.split(" — ")[0]}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                🌙 {day.mealDetail.dinner.split(" — ")[0]}
                              </p>
                            </div>
                          )}
                          {day.weatherPattern && (
                            <div className="p-3 rounded-xl bg-muted/30">
                              <p className="text-xs font-bold font-label text-foreground">
                                🌤 Weather
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {day.weatherPattern.slice(0, 100)}…
                              </p>
                            </div>
                          )}
                          {day.waterSources && day.waterSources.length > 0 && (
                            <div className="p-3 rounded-xl bg-muted/30">
                              <p className="text-xs font-bold font-label text-foreground">
                                💧 Water Sources
                              </p>
                              {day.waterSources.slice(0, 2).map((w) => (
                                <p
                                  key={w}
                                  className="text-xs text-muted-foreground mt-0.5"
                                >
                                  {w.slice(0, 60)}
                                </p>
                              ))}
                            </div>
                          )}
                          {day.emergencyExit && (
                            <div className="p-3 rounded-xl bg-muted/30">
                              <p className="text-xs font-bold font-label text-foreground">
                                🚁 Emergency Exit
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {day.emergencyExit.slice(0, 100)}…
                              </p>
                            </div>
                          )}
                          {day.photographyHighlights &&
                            day.photographyHighlights.length > 0 && (
                              <div className="p-3 rounded-xl bg-muted/30">
                                <p className="text-xs font-bold font-label text-foreground">
                                  📸 Photo Spots
                                </p>
                                {day.photographyHighlights
                                  .slice(0, 2)
                                  .map((p) => (
                                    <p
                                      key={p}
                                      className="text-xs text-muted-foreground mt-0.5"
                                    >
                                      {p.slice(0, 60)}
                                    </p>
                                  ))}
                              </div>
                            )}
                        </div>
                        {day.culturalNotes && (
                          <div
                            className="p-3 rounded-xl"
                            style={{
                              background: "#FEF9EC",
                              borderLeft: "3px solid #F4A623",
                            }}
                          >
                            <p
                              className="text-xs font-bold font-label mb-1"
                              style={{ color: "#92400E" }}
                            >
                              🏛 Cultural & Historical Notes
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {day.culturalNotes}
                            </p>
                          </div>
                        )}
                        {day.acclimatizationNotes && (
                          <div
                            className="p-3 rounded-xl"
                            style={{
                              background: "#FEE2E2",
                              borderLeft: "3px solid #EF4444",
                            }}
                          >
                            <p
                              className="text-xs font-bold font-label mb-1"
                              style={{ color: "#991B1B" }}
                            >
                              ⚠️ Acclimatization Notes
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {day.acclimatizationNotes}
                            </p>
                          </div>
                        )}
                        {day.wildlife && day.wildlife.length > 0 && (
                          <div>
                            <p
                              className="text-xs font-bold font-label mb-1"
                              style={{ color: "#0A2E1A" }}
                            >
                              🦅 Wildlife Spotting
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {day.wildlife.map((w) => (
                                <span
                                  key={w}
                                  className="text-xs px-2 py-0.5 rounded-full bg-muted font-label"
                                >
                                  {w}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          {/* 3. DARSHAN & PUJA */}
          {activeTab === "darshan" && (
            <section data-ocid="yatra_detail.darshan_section">
              <SectionHeading>
                🔔 Darshan Timings & Puja Packages
              </SectionHeading>
              {darshan.length > 0 && (
                <>
                  <h3
                    className="font-label font-bold text-base mb-3"
                    style={{ color: "#0A2E1A" }}
                  >
                    Daily Darshan Schedule
                  </h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm rounded-xl overflow-hidden border border-border">
                      <thead style={{ background: "#145C38", color: "white" }}>
                        <tr>
                          <th className="text-left px-4 py-3 font-label">
                            Puja / Service
                          </th>
                          <th className="text-left px-4 py-3 font-label">
                            Time
                          </th>
                          <th className="text-left px-4 py-3 font-label">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {darshan.map((d, i) => (
                          <tr
                            key={d.puja}
                            className={
                              i % 2 === 0 ? "bg-background" : "bg-muted/20"
                            }
                            data-ocid={`yatra_detail.darshan.item.${i + 1}`}
                          >
                            <td className="px-4 py-3 font-semibold font-label">
                              {d.puja}
                            </td>
                            <td
                              className="px-4 py-3 font-label font-bold"
                              style={{ color: "#145C38" }}
                            >
                              {d.time}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {d.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      ⚠️ Timings vary by season and festival days. Arrive 30 min
                      early during peak season.
                    </p>
                  </div>
                </>
              )}
              <div className="mb-8">
                <h3
                  className="font-label font-bold text-base mb-3"
                  style={{ color: "#0A2E1A" }}
                >
                  Season-wise Darshan Overview
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs rounded-xl overflow-hidden border border-border">
                    <thead style={{ background: "#F0FAF4" }}>
                      <tr>
                        <th className="text-left px-3 py-2 font-label">
                          Season
                        </th>
                        <th className="text-left px-3 py-2 font-label">
                          Months
                        </th>
                        <th className="text-left px-3 py-2 font-label">
                          Morning Darshan
                        </th>
                        <th className="text-left px-3 py-2 font-label">
                          Evening Aarti
                        </th>
                        <th className="text-left px-3 py-2 font-label">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Opening Season",
                          "May",
                          "4:00 AM",
                          "5:00 PM",
                          "Highest spiritual energy; snow possible",
                        ],
                        [
                          "Peak Summer",
                          "Jun–Aug",
                          "4:30 AM",
                          "5:30 PM",
                          "Maximum crowds; book very early",
                        ],
                        [
                          "Post-Monsoon",
                          "Sept–Oct",
                          "5:00 AM",
                          "5:00 PM",
                          "Clearest skies; ideal for photography",
                        ],
                        [
                          "Closing Season",
                          "Oct–Nov",
                          "6:00 AM",
                          "4:00 PM",
                          "Smaller crowds; cold; closes on Diwali",
                        ],
                      ].map(([season, months, morning, evening, notes], i) => (
                        <tr
                          key={season}
                          className={`border-t border-border ${i % 2 === 1 ? "bg-muted/10" : ""}`}
                        >
                          <td className="px-3 py-2 font-semibold">{season}</td>
                          <td className="px-3 py-2 text-muted-foreground">
                            {months}
                          </td>
                          <td
                            className="px-3 py-2"
                            style={{ color: "#145C38" }}
                          >
                            {morning}
                          </td>
                          <td
                            className="px-3 py-2"
                            style={{ color: "#145C38" }}
                          >
                            {evening}
                          </td>
                          <td className="px-3 py-2 text-muted-foreground">
                            {notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {pujaOptions.length > 0 && (
                <>
                  <h3
                    className="font-label font-bold text-base mb-4"
                    style={{ color: "#0A2E1A" }}
                  >
                    Puja Packages — Book in Advance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pujaOptions.map((p, pi) => (
                      <div
                        key={p.name}
                        className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <p className="font-label font-bold text-sm text-foreground">
                              {p.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {p.duration}
                            </p>
                          </div>
                          <span
                            className="font-display text-xl font-bold shrink-0"
                            style={{
                              color: "#145C38",
                              fontFamily: "'Playfair Display', serif",
                            }}
                          >
                            ₹{p.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">
                          {p.bookingNote}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setPujaBooked(pujaBooked === p.name ? null : p.name)
                          }
                          className="w-full py-2 rounded-lg text-xs font-label font-bold transition-colors"
                          style={{
                            background:
                              pujaBooked === p.name ? "#D1FAE5" : "#145C38",
                            color: pujaBooked === p.name ? "#065F46" : "white",
                          }}
                          data-ocid={`yatra_detail.puja_book_button.${pi + 1}`}
                        >
                          {pujaBooked === p.name
                            ? "✓ Added to Booking"
                            : "Book Puja Service"}
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div className="mt-10">
                <h3
                  className="font-label font-bold text-base mb-4"
                  style={{ color: "#0A2E1A" }}
                >
                  👘 Dress Code & Temple Etiquette
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "#F0FAF4",
                      border: "1px solid #D1FAE5",
                    }}
                  >
                    <p
                      className="font-label font-bold text-sm mb-3"
                      style={{ color: "#065F46" }}
                    >
                      ✅ Recommended Attire
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {[
                        "Traditional dhoti/kurta for men",
                        "Saree or salwar kameez for women",
                        "Dupatta/stole to cover head inside",
                        "Warm layers underneath (mandatory above 3,000m)",
                        "Trekking shoes removed outside sanctum",
                      ].map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "#FEF9EC",
                      border: "1px solid #FDE68A",
                    }}
                  >
                    <p
                      className="font-label font-bold text-sm mb-3"
                      style={{ color: "#92400E" }}
                    >
                      ⚠️ Important Rules
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {[
                        "📵 Mobile phones — prohibited inside garbhagriha",
                        "📸 Photography — only in outer courtyard",
                        "👟 Footwear — must be removed at entrance",
                        "🍖 Non-vegetarian food — not permitted on trail",
                        "🍺 Alcohol/tobacco — strictly prohibited",
                        "🔇 Maintain silence inside sanctum",
                      ].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 4. TRANSPORT */}
          {activeTab === "transport" && (
            <section data-ocid="yatra_detail.transport_section">
              <SectionHeading>🚁 Transport Options</SectionHeading>
              <div className="space-y-4">
                {(transportOptions.length > 0
                  ? transportOptions
                  : [
                      {
                        option: "🚁 Helicopter (Phata/Sersi → Kedarnath)",
                        cost: "₹6,500–₹9,000",
                        duration: "8 minutes",
                        bookingNote:
                          "Book via IRCTC Air or GMVN portal. Slots limited — book 2–3 months ahead. Baggage limit 5kg. Ideal for elderly.",
                      },
                      {
                        option: "🥾 Trek (Gaurikund → Kedarnath)",
                        cost: "Included in trek fee",
                        duration: "5–7 hours (16km)",
                        bookingNote:
                          "Stone-paved trail. Pony (₹2,000–₹3,500), dandi/palki (₹6,000–₹10,000) available. Trail open 5 AM–5 PM.",
                      },
                      {
                        option: "🚌 Road (Haridwar → Sonprayag)",
                        cost: "₹800–₹1,800",
                        duration: "8–9 hours",
                        bookingNote:
                          "Regular buses from ISBT Haridwar/Rishikesh. Private taxi ₹5,000–₹8,000. Nearest railhead: Haridwar.",
                      },
                      {
                        option: "✈️ Nearest Airport",
                        cost: "Jolly Grant, Dehradun",
                        duration: "250 km from base",
                        bookingNote:
                          "Flights from Delhi, Mumbai, Bengaluru. Taxi to Sonprayag: ₹5,000–₹7,000 (6–7 hrs). Ask us for bundled transfers.",
                      },
                    ]
                ).map((t, i) => (
                  <div
                    key={t.option}
                    className="p-5 rounded-2xl border border-border bg-card"
                    data-ocid={`yatra_detail.transport.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-label font-bold text-base text-foreground">
                        {t.option}
                      </h3>
                      <span
                        className="font-label font-bold text-sm"
                        style={{ color: "#145C38" }}
                      >
                        {t.cost}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      ⏱ {t.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.bookingNote}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. REGISTRATION */}
          {activeTab === "registration" && (
            <section data-ocid="yatra_detail.registration_section">
              <SectionHeading>📋 Registration Guide</SectionHeading>
              <div
                className="p-4 rounded-xl mb-6"
                style={{ background: "#FEF3C7", border: "1px solid #F59E0B" }}
              >
                <p
                  className="text-sm font-label font-bold mb-1"
                  style={{ color: "#92400E" }}
                >
                  ⚠️ Registration is Mandatory
                </p>
                <p className="text-sm text-muted-foreground">
                  All pilgrims must register before arriving at the base. There
                  is a daily cap — book early to secure your date.
                </p>
              </div>
              <div className="space-y-3">
                {(registrationSteps.length > 0
                  ? registrationSteps.map((s) => s.instruction)
                  : [
                      "Go to registrationandtouristcare.uk.gov.in (Official Uttarakhand Tourism portal)",
                      "Create an account with mobile number or email. Verify via OTP.",
                      "Fill pilgrim details: name, Aadhaar number, date of birth, and emergency contact.",
                      "Upload documents: Aadhaar card (both sides), recent passport-size photo, medical fitness certificate if over 60.",
                      "Select your trek date and pilgrim count. Daily quotas apply — choose carefully.",
                      "Pay registration fee (₹50/person). Receive RFID slip and QR-coded pass via email.",
                      "Print or save the QR pass. It will be verified at Sonprayag and Gaurikund checkpoints.",
                      "For offline registration: help desks at Haridwar, Rishikesh, Rudraprayag, and Sonprayag.",
                    ]
                ).map((step, i) => (
                  <div
                    key={step}
                    className="flex gap-4 p-4 rounded-xl border border-border bg-card"
                    data-ocid={`yatra_detail.registration.step.${i + 1}`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ background: "#145C38" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3
                  className="font-label font-bold text-base mb-4"
                  style={{ color: "#0A2E1A" }}
                >
                  📄 Documents Required
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: "🪪",
                      doc: "Aadhaar Card (original + photocopy)",
                      note: "Primary ID — mandatory",
                    },
                    {
                      icon: "📷",
                      doc: "Passport-size photographs (2 copies)",
                      note: "Recent, white background",
                    },
                    {
                      icon: "🏥",
                      doc: "Medical fitness certificate",
                      note: "Mandatory for 60+ years",
                    },
                    {
                      icon: "📱",
                      doc: "Registered mobile number",
                      note: "For RFID + emergency alerts",
                    },
                    {
                      icon: "💻",
                      doc: "Registration QR code printout",
                      note: "Checked at 3 checkpoints",
                    },
                    {
                      icon: "💊",
                      doc: "Personal medication list",
                      note: "Share with guide",
                    },
                  ].map((d) => (
                    <div
                      key={d.doc}
                      className="flex gap-3 p-3 rounded-xl border border-border bg-background"
                    >
                      <span className="text-xl shrink-0">{d.icon}</span>
                      <div>
                        <p className="text-sm font-label font-semibold text-foreground">
                          {d.doc}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {d.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <h3
                  className="font-label font-bold text-base mb-4"
                  style={{ color: "#0A2E1A" }}
                >
                  🏨 Accommodation Options
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      type: "Temple Committee Dharamshala",
                      price: "₹200–₹800/night",
                      note: "Basic dorm and private rooms by Badri-Kedar Temple Committee. Book via official portal 60+ days in advance.",
                      badge: "Basic",
                      color: "#D1FAE5",
                    },
                    {
                      type: "GMVN Guest House / Tourist Rest House",
                      price: "₹1,200–₹3,500/night",
                      note: "Government-run, clean, reliable. Book via gmvnonline.com. Fills up months in advance.",
                      badge: "Standard",
                      color: "#E0E7FF",
                    },
                    {
                      type: "Private Tented Camps (Seasonal)",
                      price: "₹2,500–₹6,000/night",
                      note: "Hot water, attached washrooms, views. Available May–Oct. Book through GlobalTrek.",
                      badge: "Premium",
                      color: "#FEF3C7",
                    },
                  ].map((a) => (
                    <div
                      key={a.type}
                      className="p-4 rounded-xl border border-border bg-card flex items-start gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-label font-bold text-sm text-foreground">
                            {a.type}
                          </p>
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-label"
                            style={{ background: a.color }}
                          >
                            {a.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {a.note}
                        </p>
                      </div>
                      <p
                        className="font-display font-bold text-sm shrink-0"
                        style={{ color: "#145C38" }}
                      >
                        {a.price}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  ⚠️ Advance booking is essential. During peak season (Jun–Sept),
                  accommodation books 3–6 months ahead.
                </p>
              </div>
            </section>
          )}

          {/* 6. SAFETY */}
          {activeTab === "safety" &&
            (safety ? (
              <SafetySection safety={safety} />
            ) : (
              <section data-ocid="yatra_detail.safety_section">
                <SectionHeading>🛡 Safety Protocol</SectionHeading>
                <p className="text-muted-foreground">
                  Safety details will be shared on confirmation. WhatsApp us for
                  a full briefing.
                </p>
              </section>
            ))}

          {/* 7. REVIEWS */}
          {activeTab === "reviews" && <ReviewsSection reviews={reviews} />}

          {/* 8. FAQ */}
          {activeTab === "faq" && yatra.faqs && yatra.faqs.length > 0 && (
            <section data-ocid="yatra_detail.faq_section">
              <SectionHeading>❓ Frequently Asked Questions</SectionHeading>
              <div className="space-y-3">
                {yatra.faqs.map((faq, i) => (
                  <details
                    key={faq.question}
                    className="rounded-2xl border border-border overflow-hidden"
                    open={i === 0}
                    data-ocid={`yatra_detail.faq.item.${i + 1}`}
                  >
                    <summary className="p-5 cursor-pointer list-none font-label font-semibold text-sm text-foreground select-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-muted-foreground ml-3">▾</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Batch Calendar — always visible */}
          {batches.length > 0 && (
            <BatchCalendar
              batches={batches}
              yatraSlug={yatra.slug ?? yatra.id}
            />
          )}
        </div>

        {/* ── SIDEBAR ──────────────────────────────────────────── */}
        <div>
          <div
            className="sticky rounded-2xl border bg-card p-6 shadow-lg space-y-5"
            style={{ top: "110px", borderColor: "#F4A623" }}
            data-ocid="yatra_detail.booking_sidebar"
          >
            <div>
              <span className="text-sm text-muted-foreground">From </span>
              <span
                className="font-display text-3xl font-bold"
                style={{
                  color: "#F4A623",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {yatra.price}
              </span>
              <span className="text-sm text-muted-foreground">/person</span>
            </div>
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-muted">
              {["Independent", "Guided", "Premium"].map((pkg) => (
                <button
                  key={pkg}
                  type="button"
                  className="py-1.5 rounded-lg text-xs font-label font-semibold transition-colors"
                  style={{
                    background: pkg === "Guided" ? "#145C38" : "transparent",
                    color: pkg === "Guided" ? "white" : "#6B7280",
                  }}
                  data-ocid={`yatra_detail.pkg_tab.${pkg.toLowerCase()}`}
                >
                  {pkg}
                </button>
              ))}
            </div>
            <Link
              to="/booking/$trekSlug/select-batch"
              params={{ trekSlug: yatra.slug ?? yatra.id }}
              className="block w-full py-3 rounded-xl text-center font-label font-bold text-sm"
              style={{ background: "#F4A623", color: "#0A2E1A" }}
              data-ocid="yatra_detail.book_now_button"
            >
              Book Yatra 2026 →
            </Link>
            <a
              href={`https://wa.me/919876543210?text=Enquiry ${yatra.name}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 rounded-xl text-center font-label font-bold text-sm border"
              style={{ borderColor: "#25D366", color: "#25D366" }}
              data-ocid="yatra_detail.whatsapp_sidebar_button"
            >
              📱 WhatsApp Us
            </a>
            <div className="space-y-2 pt-2 border-t border-border">
              {[
                "🕉 Expert-guided pilgrimage",
                "✓ All registrations handled",
                "✓ Accommodation pre-booked",
                "✓ 30% advance payment option",
                "✓ Helicopter service available",
                "✓ Medical support throughout",
              ].map((t) => (
                <p key={t} className="text-xs text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
            {templeInfo && (
              <div className="pt-2 border-t border-border">
                <p
                  className="text-xs font-label font-semibold mb-1"
                  style={{ color: "#0A2E1A" }}
                >
                  🔗 Official Registration
                </p>
                <a
                  href={`https://${templeInfo.registrationLink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs underline break-all"
                  style={{ color: "#145C38" }}
                  data-ocid="yatra_detail.registration_link"
                >
                  {templeInfo.registrationLink}
                </a>
              </div>
            )}
            {batches.length > 0 && (
              <div className="pt-2 border-t border-border">
                <p
                  className="text-xs font-label font-semibold mb-2"
                  style={{ color: "#0A2E1A" }}
                >
                  ⚡ Next Departures
                </p>
                {batches.slice(0, 2).map((b) => (
                  <div
                    key={b.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <div>
                      <p className="text-xs font-label font-semibold">
                        {new Date(b.startDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                      <BatchStatusPill status={b.status} />
                    </div>
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#0A2E1A" }}
                    >
                      ₹{b.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
