import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { TrekCard } from "@/components/ui/TrekCard";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import { motion } from "motion/react";
import { useState } from "react";

const difficulties = ["All", "Easy to Moderate", "Moderate", "Easy"];
const regions = ["All", "Uttarakhand", "Himachal Pradesh"];

export default function TreksPage() {
  const [difficulty, setDifficulty] = useState("All");
  const [region, setRegion] = useState("All");

  const filtered = treksData.filter((t) => {
    const diffMatch = difficulty === "All" || t.difficulty === difficulty;
    const regionMatch =
      region === "All" ||
      t.region.includes(region === "Uttarakhand" ? "Uttarakhand" : "Himachal");
    return diffMatch && regionMatch;
  });

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
            All Destinations
          </p>
          <h1 className="font-display text-5xl md:text-7xl italic text-foreground mb-4">
            Our Treks
          </h1>
          <p className="text-muted-foreground text-lg">
            10 meticulously curated Himalayan adventures. Choose your trail.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        className="bg-card border-b border-border py-4 px-4 sticky top-[84px] z-20"
        data-ocid="treks.filters_section"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center">
          <span className="font-mono text-xs text-muted-foreground tracking-wider">
            DIFFICULTY:
          </span>
          {difficulties.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficulty(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-smooth ${
                difficulty === d
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              }`}
              data-ocid={`treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`}
            >
              {d === "All" ? (
                <span>All</span>
              ) : (
                <DifficultyBadge difficulty={d} />
              )}
            </button>
          ))}
          <span className="font-mono text-xs text-muted-foreground tracking-wider ml-4">
            REGION:
          </span>
          {regions.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-smooth ${
                region === r
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              }`}
              data-ocid={`treks.region_filter.${r.toLowerCase()}`}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* Trek Grid */}
      <section className="py-16 px-4" data-ocid="treks.grid_section">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-muted-foreground tracking-wider mb-8">
            {filtered.length} TREK{filtered.length !== 1 ? "S" : ""} FOUND
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="treks.empty_state">
              <p className="text-muted-foreground font-display text-2xl italic">
                No treks match your filters.
              </p>
              <Button
                variant="outline"
                className="mt-6 font-mono text-xs tracking-wider"
                onClick={() => {
                  setDifficulty("All");
                  setRegion("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((trek, i) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <TrekCard trek={trek} index={i} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
