import { TrekCard } from "@/components/ui/TrekCard";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

const STATES = ["All", "Uttarakhand", "Himachal Pradesh"] as const;
const DIFFICULTIES = [
  "All",
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Difficult",
] as const;
const DURATIONS = ["All", "1-3D", "4-5D", "6+D"] as const;
const SEASONS = ["All", "Winter", "Spring", "Summer", "Autumn"] as const;
const SORTS = [
  "Featured",
  "Price: Low",
  "Price: High",
  "Duration",
  "Difficulty",
] as const;

type StateFilter = (typeof STATES)[number];
type DiffFilter = (typeof DIFFICULTIES)[number];
type DurFilter = (typeof DURATIONS)[number];
type SeasonFilter = (typeof SEASONS)[number];
type SortFilter = (typeof SORTS)[number];

function parsePriceNum(price: string): number {
  return Number(price.replace(/[^0-9]/g, "")) || 0;
}

function matchDuration(days: number | undefined, filter: DurFilter): boolean {
  if (filter === "All") return true;
  const d = days ?? 0;
  if (filter === "1-3D") return d >= 1 && d <= 3;
  if (filter === "4-5D") return d >= 4 && d <= 5;
  if (filter === "6+D") return d >= 6;
  return true;
}

function FilterPill({
  active,
  onClick,
  children,
  ocid,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  ocid: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={ocid}
      className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function FilterGroup({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="font-mono text-xs text-muted-foreground tracking-wider">
        {label.toUpperCase()}:
      </span>
      {children}
    </div>
  );
}

function ActiveChip({
  label,
  onRemove,
}: { label: string; onRemove: () => void }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
      style={{ background: "rgba(26,122,76,0.15)", color: "#1A7A4C" }}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label} filter`}
        className="hover:opacity-70"
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

export default function TreksPage() {
  const [stateFilter, setStateFilter] = useState<StateFilter>("All");
  const [diffFilter, setDiffFilter] = useState<DiffFilter>("All");
  const [durFilter, setDurFilter] = useState<DurFilter>("All");
  const [seasonFilter, setSeasonFilter] = useState<SeasonFilter>("All");
  const [sort, setSort] = useState<SortFilter>("Featured");

  const hasActiveFilters =
    stateFilter !== "All" ||
    diffFilter !== "All" ||
    durFilter !== "All" ||
    seasonFilter !== "All";

  let filtered = treksData.filter((t) => {
    if (stateFilter !== "All" && t.state !== stateFilter) return false;
    if (diffFilter !== "All" && t.difficulty !== diffFilter) return false;
    if (!matchDuration(t.durationDays, durFilter)) return false;
    if (
      seasonFilter !== "All" &&
      t.bestSeason &&
      !t.bestSeason.toLowerCase().includes(seasonFilter.toLowerCase())
    )
      return false;
    return true;
  });

  if (sort === "Price: Low")
    filtered = [...filtered].sort(
      (a, b) => parsePriceNum(a.price) - parsePriceNum(b.price),
    );
  if (sort === "Price: High")
    filtered = [...filtered].sort(
      (a, b) => parsePriceNum(b.price) - parsePriceNum(a.price),
    );
  if (sort === "Duration")
    filtered = [...filtered].sort(
      (a, b) => (a.durationDays ?? 0) - (b.durationDays ?? 0),
    );
  if (sort === "Difficulty") {
    const order: Record<string, number> = {
      Easy: 1,
      "Easy to Moderate": 2,
      Moderate: 3,
      Difficult: 4,
    };
    filtered = [...filtered].sort(
      (a, b) => (order[a.difficulty] ?? 3) - (order[b.difficulty] ?? 3),
    );
  }

  const resetAll = () => {
    setStateFilter("All");
    setDiffFilter("All");
    setDurFilter("All");
    setSeasonFilter("All");
    setSort("Featured");
  };

  const utt = filtered.filter((t) => t.state === "Uttarakhand");
  const hp = filtered.filter((t) => t.state === "Himachal Pradesh");
  const showSections = stateFilter === "All";

  return (
    <div className="bg-background min-h-screen" data-ocid="treks.page">
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 L200 120 L400 200 L720 60 L1000 160 L1200 80 L1440 140 L1440 300 Z"
            fill="#2D5A3D"
          />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#E8963A" }}
          >
            15 Expert-Guided Adventures
          </p>
          <h1 className="font-display text-5xl md:text-7xl italic text-foreground mb-4">
            Himalayan Treks 2026
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Uttarakhand &amp; Himachal Pradesh — hand-picked routes from
            beginner ridges to advanced high-altitude crossings.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/treks/uttarakhand">
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs tracking-wider border-white/20 text-foreground hover:bg-white/10"
                data-ocid="treks.uttarakhand_hub_link"
              >
                Uttarakhand Hub →
              </Button>
            </Link>
            <Link to="/treks/himachal-pradesh">
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs tracking-wider border-white/20 text-foreground hover:bg-white/10"
                data-ocid="treks.himachal_hub_link"
              >
                Himachal Pradesh Hub →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section
        className="bg-card border-b border-border py-3 px-4 sticky top-[84px] z-20"
        data-ocid="treks.filters_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <FilterGroup label="State">
              {STATES.map((s) => (
                <FilterPill
                  key={s}
                  active={stateFilter === s}
                  onClick={() => setStateFilter(s)}
                  ocid={`treks.state_filter.${s.toLowerCase().replace(/ /g, "_")}`}
                >
                  {s}
                </FilterPill>
              ))}
            </FilterGroup>
            <div className="h-5 w-px bg-border hidden md:block" />
            <FilterGroup label="Difficulty">
              {DIFFICULTIES.map((d) => (
                <FilterPill
                  key={d}
                  active={diffFilter === d}
                  onClick={() => setDiffFilter(d)}
                  ocid={`treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`}
                >
                  {d}
                </FilterPill>
              ))}
            </FilterGroup>
            <div className="h-5 w-px bg-border hidden md:block" />
            <FilterGroup label="Duration">
              {DURATIONS.map((d) => (
                <FilterPill
                  key={d}
                  active={durFilter === d}
                  onClick={() => setDurFilter(d)}
                  ocid={`treks.duration_filter.${d.toLowerCase().replace(/ /g, "_")}`}
                >
                  {d}
                </FilterPill>
              ))}
            </FilterGroup>
            <div className="h-5 w-px bg-border hidden md:block" />
            <FilterGroup label="Season">
              {SEASONS.map((s) => (
                <FilterPill
                  key={s}
                  active={seasonFilter === s}
                  onClick={() => setSeasonFilter(s)}
                  ocid={`treks.season_filter.${s.toLowerCase()}`}
                >
                  {s}
                </FilterPill>
              ))}
            </FilterGroup>
            <div className="ml-auto flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                SORT:
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortFilter)}
                className="text-xs font-mono bg-background border border-border rounded-lg px-2 py-1.5 text-foreground"
                data-ocid="treks.sort_select"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-border items-center">
              <span className="font-mono text-xs text-muted-foreground">
                Active:
              </span>
              {stateFilter !== "All" && (
                <ActiveChip
                  label={stateFilter}
                  onRemove={() => setStateFilter("All")}
                />
              )}
              {diffFilter !== "All" && (
                <ActiveChip
                  label={diffFilter}
                  onRemove={() => setDiffFilter("All")}
                />
              )}
              {durFilter !== "All" && (
                <ActiveChip
                  label={durFilter}
                  onRemove={() => setDurFilter("All")}
                />
              )}
              {seasonFilter !== "All" && (
                <ActiveChip
                  label={seasonFilter}
                  onRemove={() => setSeasonFilter("All")}
                />
              )}
              <button
                type="button"
                onClick={resetAll}
                className="text-xs font-mono text-muted-foreground hover:text-foreground underline"
                data-ocid="treks.reset_filters_button"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trek Grid */}
      <section className="py-12 px-4" data-ocid="treks.grid_section">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-muted-foreground tracking-wider mb-8">
            SHOWING {filtered.length} OF {treksData.length} TREKS
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="treks.empty_state">
              <p className="text-4xl mb-4">🏔</p>
              <p className="text-muted-foreground font-display text-2xl italic mb-2">
                No treks match your filters.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Try adjusting the filters above.
              </p>
              <Button
                variant="outline"
                className="font-mono text-xs tracking-wider"
                onClick={resetAll}
              >
                Reset Filters
              </Button>
            </div>
          ) : showSections ? (
            <>
              {utt.length > 0 && (
                <div className="mb-14">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display text-3xl italic text-foreground">
                        Uttarakhand Treks
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Garhwal &amp; Kumaon Himalayas — {utt.length} treks
                      </p>
                    </div>
                    <Link
                      to="/treks/uttarakhand"
                      className="font-mono text-xs text-primary hover:underline"
                      data-ocid="treks.view_all_uttarakhand_link"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {utt.map((t, i) => (
                      <TrekCard key={t.id} trek={t} index={i} />
                    ))}
                  </div>
                </div>
              )}
              {hp.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display text-3xl italic text-foreground">
                        Himachal Pradesh Treks
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Kullu, Lahaul &amp; Parvati Valley — {hp.length} treks
                      </p>
                    </div>
                    <Link
                      to="/treks/himachal-pradesh"
                      className="font-mono text-xs text-primary hover:underline"
                      data-ocid="treks.view_all_himachal_link"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hp.map((t, i) => (
                      <TrekCard key={t.id} trek={t} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t, i) => (
                <TrekCard key={t.id} trek={t} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
