import { TrekCard } from "@/components/ui/TrekCard";
import { treksData } from "@/data/treks";
import { yatraData } from "@/data/yatra";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const difficulties = [
  "All",
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Difficult",
] as const;
const states = ["All", "Uttarakhand", "Himachal Pradesh"] as const;
const durations = ["All", "1-3 Days", "4-6 Days", "7+ Days"] as const;
const trekTypes = ["All", "Trek", "Yatra"] as const;

const QUICK_FILTERS = [
  { label: "All", key: "all" },
  { label: "Winter Treks", key: "winter" },
  { label: "Beginner Treks", key: "beginner" },
  { label: "High Altitude", key: "altitude" },
  { label: "Heritage Walks", key: "heritage" },
] as const;

const editorPicks = [
  "kedarkantha",
  "hampta-pass",
  "har-ki-dun",
  "chopta-tungnath",
];

type QuickFilter = (typeof QUICK_FILTERS)[number]["key"];

export default function ExplorePage() {
  const [state, setState] = useState<string>("All");
  const [difficulty, setDifficulty] = useState<string>("All");
  const [duration, setDuration] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("all");

  const allItems = [...treksData, ...yatraData];

  const applyQuickFilter = (items: typeof allItems) => {
    if (quickFilter === "winter")
      return items.filter(
        (t) =>
          t.bestSeason?.toLowerCase().includes("winter") ||
          t.bestSeason?.toLowerCase().includes("dec") ||
          t.bestSeason?.toLowerCase().includes("jan"),
      );
    if (quickFilter === "beginner")
      return items.filter(
        (t) => t.difficulty === "Easy" || t.difficulty === "Easy to Moderate",
      );
    if (quickFilter === "altitude")
      return items.filter((t) => {
        const m = t.maxAltitude?.match(/(\d[,\d]*)/);
        if (!m) return false;
        const n = Number(m[1].replace(/,/g, ""));
        return n >= 4000;
      });
    if (quickFilter === "heritage")
      return items.filter(
        (t) =>
          t.trekType === "Yatra" ||
          t.name.toLowerCase().includes("dun") ||
          t.name.toLowerCase().includes("har ki"),
      );
    return items;
  };

  const filtered = applyQuickFilter(
    allItems.filter((t) => {
      if (state !== "All" && t.state !== state) return false;
      if (difficulty !== "All" && t.difficulty !== difficulty) return false;
      if (type !== "All" && t.trekType !== type) return false;
      if (duration !== "All") {
        if (duration === "1-3 Days" && (t.durationDays ?? 0) > 3) return false;
        if (
          duration === "4-6 Days" &&
          ((t.durationDays ?? 0) < 4 || (t.durationDays ?? 0) > 6)
        )
          return false;
        if (duration === "7+ Days" && (t.durationDays ?? 0) < 7) return false;
      }
      return true;
    }),
  );

  const picks = treksData.filter((t) =>
    editorPicks.includes(t.id ?? t.slug ?? ""),
  );

  return (
    <div
      className="min-h-screen"
      style={{ paddingTop: "120px" }}
      data-ocid="explore_page"
    >
      {/* Hero */}
      <div
        className="py-14 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
        }}
      >
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Explore the Himalayas
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-6">
          Find your perfect adventure by region, difficulty &amp; season
        </p>
        {/* Quick filter pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_FILTERS.map((qf) => (
            <button
              key={qf.key}
              type="button"
              className="px-4 py-2 rounded-full text-sm font-mono transition-all"
              style={{
                background:
                  quickFilter === qf.key
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.15)",
                color: quickFilter === qf.key ? "#0A2E1A" : "white",
              }}
              onClick={() => setQuickFilter(qf.key)}
              data-ocid={`explore.quick_filter.${qf.key}`}
            >
              {qf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
          <FilterBar
            label="State"
            options={states}
            value={state}
            onChange={setState}
          />
          <FilterBar
            label="Difficulty"
            options={difficulties}
            value={difficulty}
            onChange={setDifficulty}
          />
          <FilterBar
            label="Duration"
            options={durations}
            value={duration}
            onChange={setDuration}
          />
          <FilterBar
            label="Type"
            options={trekTypes}
            value={type}
            onChange={setType}
          />
          <span className="ml-auto text-sm text-muted-foreground font-label">
            Showing {filtered.length} results
          </span>
        </div>
      </div>

      {/* Editor's Picks */}
      {quickFilter === "all" && picks.length > 0 && (
        <div
          className="py-12 px-4"
          style={{ background: "rgba(26,122,76,0.04)" }}
          data-ocid="explore.editors_picks_section"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: "#E8963A" }}
                >
                  Handpicked by Our Experts
                </p>
                <h2 className="font-display text-2xl italic text-foreground">
                  Editor&apos;s Picks
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {picks.map((t, i) => (
                <TrekCard key={t.id} trek={t} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20" data-ocid="explore.empty_state">
            <p className="text-4xl mb-4">🏔</p>
            <p className="font-display text-xl text-muted-foreground">
              No treks match your filters.
            </p>
            <button
              type="button"
              className="mt-4 px-6 py-2 rounded-full text-sm font-label font-semibold text-white"
              style={{ background: "#145C38" }}
              onClick={() => {
                setState("All");
                setDifficulty("All");
                setDuration("All");
                setType("All");
                setQuickFilter("all");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((trek, i) => (
              <TrekCard key={trek.id} trek={trek} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Starting from Delhi CTA */}
      <div
        className="mx-4 mb-12 rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #1A7A4C 100%)",
        }}
        data-ocid="explore.delhi_cta_section"
      >
        <p className="text-white/70 font-mono text-xs tracking-widest uppercase mb-2">
          Travel from the capital
        </p>
        <h3
          className="text-2xl font-bold italic text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Starting from Delhi?
        </h3>
        <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
          Browse treks with direct Delhi departure, weekend packages, and
          everything you need for your first Himalayan adventure.
        </p>
        <Link
          to="/trek-from-delhi"
          className="inline-block px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
          data-ocid="explore.delhi_link"
        >
          View Delhi Departures →
        </Link>
      </div>
    </div>
  );
}

function FilterBar({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Readonly<string[]>;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-label text-xs text-muted-foreground">{label}:</span>
      <div className="flex gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className="px-3 py-1 rounded-full font-label text-xs transition-colors"
            style={{
              background: value === opt ? "#145C38" : "transparent",
              color: value === opt ? "white" : "inherit",
              border: value === opt ? "none" : "1px solid #e2e8f0",
            }}
            onClick={() => onChange(opt)}
            data-ocid={`explore.filter.${label.toLowerCase()}.${opt.toLowerCase().replace(/ /g, "_")}_option`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
