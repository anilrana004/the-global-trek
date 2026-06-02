import { TrekCard } from "@/components/ui/TrekCard";
import { treksData } from "@/data/treks";
import { Link } from "@tanstack/react-router";

const hpTreks = treksData.filter((t) => t.state === "Himachal Pradesh");

export default function HimachalHubPage() {
  return (
    <div
      className="min-h-screen"
      style={{ paddingTop: "120px" }}
      data-ocid="himachal_hub_page"
    >
      <div
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #0A2E1A, #1A7A4C)" }}
      >
        <h1
          className="font-display text-4xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          🏔 Himachal Pradesh Treks
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          The Mountain State &mdash; Kullu, Lahaul, Spiti &amp; Parvati Valley.{" "}
          {hpTreks.length} treks
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <Link
            to="/explore"
            className="px-6 py-2.5 rounded-full font-label text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
          >
            Explore Map
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hpTreks.map((trek, i) => (
            <TrekCard key={trek.id} trek={trek} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
