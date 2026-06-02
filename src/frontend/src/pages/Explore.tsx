import { TrekCard } from "@/components/ui/TrekCard";
import { treksData } from "@/data/treks";
import { yatraData } from "@/data/yatra";
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

export default function ExplorePage() {
  const [state, setState] = useState<string>("All");
  const [difficulty, setDifficulty] = useState<string>("All");
  const [duration, setDuration] = useState<string>("All");
  const [type, setType] = useState<string>("All");

  const allItems = [...treksData, ...yatraData];

  const filtered = allItems.filter((t) => {
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
  });

  return (
    <div
      className="min-h-screen"
      style={{ paddingTop: "120px" }}
      data-ocid="explore_page"
    >
      {/* Hero */}
      <div
        className="py-12 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
        }}
      >
        <h1
          className="font-display text-4xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Explore Himalayan Trails
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Find your perfect adventure by region, difficulty &amp; season
        </p>
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
