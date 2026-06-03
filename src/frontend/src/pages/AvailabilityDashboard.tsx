import { createActor } from "@/backend";
import type { BatchAvailability } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Calendar,
  Filter,
  RefreshCw,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// --------------- Trek metadata ---------------
const TREK_META: Record<
  string,
  {
    name: string;
    state: "Uttarakhand" | "Himachal Pradesh";
    difficulty: string;
    duration: string;
    price: string;
    image: string;
  }
> = {
  kedarkantha: {
    name: "Kedarkantha",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "5 Days",
    price: "₹8,500",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  "chopta-tungnath": {
    name: "Chopta Tungnath",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "3 Days",
    price: "₹6,500",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  "har-ki-dun": {
    name: "Har Ki Dun",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "6 Days",
    price: "₹9,500",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
  },
  "kuari-pass": {
    name: "Kuari Pass",
    state: "Uttarakhand",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹9,000",
    image:
      "https://images.unsplash.com/photo-1543728069-a3f97c5a2f34?w=600&q=80",
  },
  "phulara-ridge": {
    name: "Phulara Ridge",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "4 Days",
    price: "₹7,500",
    image:
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=600&q=80",
  },
  "valley-of-flowers": {
    name: "Valley of Flowers",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: "₹10,500",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  },
  roopkund: {
    name: "Roopkund",
    state: "Uttarakhand",
    difficulty: "Difficult",
    duration: "8 Days",
    price: "₹14,500",
    image:
      "https://images.unsplash.com/photo-1526773347046-cdb28cebe39b?w=600&q=80",
  },
  brahmatal: {
    name: "Brahmatal",
    state: "Uttarakhand",
    difficulty: "Moderate",
    duration: "6 Days",
    price: "₹10,000",
    image:
      "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=600&q=80",
  },
  "dayara-bugyal": {
    name: "Dayara Bugyal",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "4 Days",
    price: "₹7,800",
    image:
      "https://images.unsplash.com/photo-1560435417-e3a24c784f79?w=600&q=80",
  },
  "nag-tibba": {
    name: "Nag Tibba",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹3,500",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
  },
  "hampta-pass": {
    name: "Hampta Pass",
    state: "Himachal Pradesh",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹11,500",
    image:
      "https://images.unsplash.com/photo-1494496195158-c3bc5b4ff02d?w=600&q=80",
  },
  "sar-pass": {
    name: "Sar Pass",
    state: "Himachal Pradesh",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹9,800",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  },
  kheerganga: {
    name: "Kheerganga",
    state: "Himachal Pradesh",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹4,500",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
  },
  triund: {
    name: "Triund",
    state: "Himachal Pradesh",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹3,800",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  "beas-kund": {
    name: "Beas Kund",
    state: "Himachal Pradesh",
    difficulty: "Easy–Moderate",
    duration: "3 Days",
    price: "₹6,200",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80",
  },
};

// --------------- Types ---------------
interface TrekGroup {
  trekSlug: string;
  batches: BatchAvailability[];
}

interface Filters {
  states: Set<string>;
  availability: "all" | "available" | "almostFull" | "soldOut";
  durations: Set<string>;
  minPrice: number;
  maxPrice: number;
}

const ALL_TREK_SLUGS = Object.keys(TREK_META);
const DURATION_OPTIONS = [
  "2 Days",
  "3 Days",
  "4 Days",
  "5 Days",
  "6 Days",
  "6+ Days",
];

function getDurationDays(dur: string): number {
  const m = dur.match(/(\d+)/);
  return m ? Number.parseInt(m[1], 10) : 0;
}

function matchesDurationFilter(
  trekSlug: string,
  durations: Set<string>,
): boolean {
  if (durations.size === 0) return true;
  const meta = TREK_META[trekSlug];
  if (!meta) return true;
  const days = getDurationDays(meta.duration);
  for (const d of durations) {
    if (d === "6+ Days" && days >= 6) return true;
    const filterDays = getDurationDays(d);
    if (filterDays === days) return true;
  }
  return false;
}

function getPriceNumber(trekSlug: string): number {
  const meta = TREK_META[trekSlug];
  if (!meta) return 0;
  const m = meta.price.replace(/[₹,]/g, "");
  return Number.parseInt(m, 10) || 0;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// --------------- Stats ---------------
function computeStats(groups: TrekGroup[]) {
  let totalSeats = 0;
  let soldOutCount = 0;
  let nextBatch: { date: string; trekName: string; seats: number } | null =
    null;
  let maxSeats = 0;
  let mostAvailableTrek = "";

  for (const g of groups) {
    const meta = TREK_META[g.trekSlug];
    let trekSeats = 0;
    for (const b of g.batches) {
      const avail = Number(b.availableSeats);
      totalSeats += avail;
      trekSeats += avail;
      if (avail === 0) soldOutCount++;
      if (avail > 0 && b.batchDate) {
        if (!nextBatch || b.batchDate < nextBatch.date) {
          nextBatch = {
            date: b.batchDate,
            trekName: meta?.name ?? g.trekSlug,
            seats: avail,
          };
        }
      }
    }
    if (trekSeats > maxSeats) {
      maxSeats = trekSeats;
      mostAvailableTrek = meta?.name ?? g.trekSlug;
    }
  }

  return { totalSeats, soldOutCount, nextBatch, mostAvailableTrek, maxSeats };
}

// --------------- Sub-components ---------------
function SeatChip({ avail, total }: { avail: number; total: number }) {
  if (avail === 0)
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-900/40 text-red-300 border border-red-700/40">
        SOLD OUT
      </span>
    );
  if (avail <= 5)
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-900/40 text-amber-300 border border-amber-600/40">
        {avail} of {total}
      </span>
    );
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">
      {avail} of {total}
    </span>
  );
}

function StatusBadge({ avail }: { avail: number }) {
  if (avail === 0)
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-900/40 text-red-300 border border-red-700/30">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Sold Out
      </span>
    );
  if (avail <= 5)
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-900/40 text-amber-300 border border-amber-600/30">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />{" "}
        Almost Full
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/30">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Available
    </span>
  );
}

function BatchTableRow({
  batch,
  trekSlug,
}: { batch: BatchAvailability; trekSlug: string }) {
  const avail = Number(batch.availableSeats);
  const total = Number(batch.totalSeats);
  const price = Number(batch.price);

  return (
    <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
      <td className="px-4 py-3 text-sm text-white/80">
        <span className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-white/30 shrink-0" />
          {formatDate(batch.batchDate)}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-white/60">
        {TREK_META[trekSlug]?.duration ?? "—"}
      </td>
      <td className="px-4 py-3">
        <SeatChip avail={avail} total={total > 0 ? total : 15} />
      </td>
      <td className="px-4 py-3 text-sm font-semibold text-white">
        {price > 0
          ? `₹${price.toLocaleString("en-IN")}`
          : (TREK_META[trekSlug]?.price ?? "—")}
        <span className="text-white/40 font-normal">/person</span>
      </td>
      <td className="px-4 py-3">
        <StatusBadge avail={avail} />
      </td>
      <td className="px-4 py-3">
        {avail > 0 ? (
          <Link
            to="/booking/$trekSlug/select-batch"
            params={{ trekSlug }}
            data-ocid={`availability.book_now.${trekSlug}`}
          >
            <Button
              size="sm"
              className="font-label text-xs tracking-wide rounded-full h-7 px-4"
              style={{ background: "#F4A623", color: "#0A2E1A" }}
            >
              Book Now
            </Button>
          </Link>
        ) : (
          <Link
            to="/trek/$trekId"
            params={{ trekId: trekSlug }}
            hash="batches"
            data-ocid={`availability.waitlist.${trekSlug}`}
          >
            <Button
              size="sm"
              variant="outline"
              className="font-label text-xs tracking-wide rounded-full h-7 px-4 text-white/50 border-white/20 hover:text-white"
            >
              Join Waitlist
            </Button>
          </Link>
        )}
      </td>
    </tr>
  );
}

function MobileBatchChip({
  batch,
  trekSlug,
}: { batch: BatchAvailability; trekSlug: string }) {
  const avail = Number(batch.availableSeats);
  const price = Number(batch.price);
  const displayPrice =
    price > 0
      ? `₹${price.toLocaleString("en-IN")}`
      : (TREK_META[trekSlug]?.price ?? "");
  const chipStyle =
    avail === 0
      ? "border-red-700/40 bg-red-900/20"
      : avail <= 5
        ? "border-amber-600/40 bg-amber-900/20"
        : "border-emerald-700/40 bg-emerald-900/20";

  return (
    <div
      className={`shrink-0 border rounded-xl px-3 py-2 flex flex-col gap-1 min-w-[140px] ${chipStyle}`}
    >
      <span className="text-white/60 text-[11px]">
        {formatDate(batch.batchDate)}
      </span>
      <span className="text-white text-xs font-semibold">
        {avail > 0 ? `${avail} seats · ` : ""}
        {displayPrice}
      </span>
      {avail > 0 ? (
        <Link to="/booking/$trekSlug/select-batch" params={{ trekSlug }}>
          <span className="text-[11px] font-bold" style={{ color: "#F4A623" }}>
            Book →
          </span>
        </Link>
      ) : (
        <span className="text-red-400 text-[11px] font-bold">Sold Out</span>
      )}
    </div>
  );
}

function TrekGroupCard({ group }: { group: TrekGroup }) {
  const meta = TREK_META[group.trekSlug];
  if (!meta) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "rgba(10,46,26,0.7)" }}
      data-ocid={`availability.trek_card.${group.trekSlug}`}
    >
      {/* Trek header */}
      <div
        className="flex items-center gap-4 p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,122,76,0.5), rgba(20,92,56,0.8))",
        }}
      >
        <img
          src={meta.image}
          alt={meta.name}
          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display text-lg font-bold text-white">
              {meta.name}
            </h3>
            <Badge className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20">
              {meta.state}
            </Badge>
            <Badge className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
              {meta.difficulty}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
            <span>⏱ {meta.duration}</span>
            <span className="font-semibold" style={{ color: "#F4A623" }}>
              From {meta.price}
            </span>
          </div>
        </div>
        <Link
          to="/treks/$state/$slug"
          params={{
            state:
              meta.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh",
            slug: group.trekSlug,
          }}
          className="shrink-0 text-xs text-white/40 hover:text-white/80 transition-colors hidden sm:block"
        >
          View Trek →
        </Link>
      </div>

      {/* Desktop batch table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[11px] font-label text-white/30 uppercase tracking-widest">
              <th className="px-4 py-2 text-left">Batch Dates</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Seats</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {group.batches.map((b) => (
              <BatchTableRow
                key={`${b.trekSlug}-${b.batchDate}`}
                batch={b}
                trekSlug={group.trekSlug}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile chips */}
      <div className="md:hidden px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
        {group.batches.map((b) => (
          <MobileBatchChip
            key={`${b.trekSlug}-${b.batchDate}-mobile`}
            batch={b}
            trekSlug={group.trekSlug}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FilterPanel({
  filters,
  onFiltersChange,
  onClear,
}: {
  filters: Filters;
  onFiltersChange: (f: Partial<Filters>) => void;
  onClear: () => void;
}) {
  const toggleState = (s: string) => {
    const next = new Set(filters.states);
    if (next.has(s)) next.delete(s);
    else next.add(s);
    onFiltersChange({ states: next });
  };

  const toggleDuration = (d: string) => {
    const next = new Set(filters.durations);
    if (next.has(d)) next.delete(d);
    else next.add(d);
    onFiltersChange({ durations: next });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-label text-sm font-bold text-white uppercase tracking-widest">
          Filter Batches
        </h3>
        <button
          type="button"
          onClick={onClear}
          className="text-xs text-white/40 hover:text-white/80 transition-colors"
          data-ocid="availability.clear_filters_button"
        >
          Clear All
        </button>
      </div>

      {/* State */}
      <div>
        <p className="text-[11px] font-label text-white/40 uppercase tracking-widest mb-3">
          State
        </p>
        {(["Uttarakhand", "Himachal Pradesh"] as const).map((s) => (
          <label
            key={s}
            className="flex items-center gap-2.5 mb-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={filters.states.has(s)}
              onChange={() => toggleState(s)}
              className="w-4 h-4 rounded border-white/20 bg-white/10 accent-emerald-500"
              data-ocid={`availability.filter_state.${s.toLowerCase().replace(" ", "_")}_checkbox`}
            />
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
              {s}
            </span>
          </label>
        ))}
      </div>

      {/* Availability */}
      <div>
        <p className="text-[11px] font-label text-white/40 uppercase tracking-widest mb-3">
          Availability
        </p>
        {(
          [
            { val: "all", label: "All Batches" },
            { val: "available", label: "Available" },
            { val: "almostFull", label: "Almost Full (≤5)" },
            { val: "soldOut", label: "Sold Out" },
          ] as const
        ).map(({ val, label }) => (
          <label
            key={val}
            className="flex items-center gap-2.5 mb-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="availability"
              value={val}
              checked={filters.availability === val}
              onChange={() => onFiltersChange({ availability: val })}
              className="w-4 h-4 accent-emerald-500"
              data-ocid={`availability.filter_avail.${val}_radio`}
            />
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
              {label}
            </span>
          </label>
        ))}
      </div>

      {/* Duration */}
      <div>
        <p className="text-[11px] font-label text-white/40 uppercase tracking-widest mb-3">
          Duration
        </p>
        {DURATION_OPTIONS.map((d) => (
          <label
            key={d}
            className="flex items-center gap-2.5 mb-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={filters.durations.has(d)}
              onChange={() => toggleDuration(d)}
              className="w-4 h-4 rounded border-white/20 bg-white/10 accent-emerald-500"
              data-ocid={`availability.filter_duration.${d.replace(" ", "_").toLowerCase()}_checkbox`}
            />
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
              {d}
            </span>
          </label>
        ))}
      </div>

      {/* Price range */}
      <div>
        <p className="text-[11px] font-label text-white/40 uppercase tracking-widest mb-3">
          Price Range (₹/person)
        </p>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              onFiltersChange({ minPrice: Number(e.target.value) })
            }
            placeholder="Min"
            className="w-full px-3 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/10 outline-none focus:border-emerald-500/60 placeholder:text-white/30"
            min={0}
            data-ocid="availability.filter_price_min_input"
          />
          <span className="text-white/30 text-xs">–</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              onFiltersChange({ maxPrice: Number(e.target.value) })
            }
            placeholder="Max"
            className="w-full px-3 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/10 outline-none focus:border-emerald-500/60 placeholder:text-white/30"
            min={0}
            data-ocid="availability.filter_price_max_input"
          />
        </div>
      </div>
    </div>
  );
}

// --------------- Main Dashboard ---------------
export default function AvailabilityDashboard() {
  const { actor, isFetching } = useActor(createActor);
  const [groups, setGroups] = useState<TrekGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    states: new Set(),
    availability: "all",
    durations: new Set(),
    minPrice: 3000,
    maxPrice: 25000,
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchAll = useCallback(async () => {
    if (!actor) return;
    setIsLoading(true);
    const result: TrekGroup[] = [];
    for (const slug of ALL_TREK_SLUGS) {
      try {
        const batches = await actor.getBatchAvailability(slug);
        if (batches.length > 0) {
          result.push({ trekSlug: slug, batches });
        }
      } catch {
        // skip unavailable treks
      }
    }
    // If no data from backend, seed with mock data for demo
    if (result.length === 0) {
      const mockGroups: TrekGroup[] = ALL_TREK_SLUGS.slice(0, 6).map(
        (slug) => ({
          trekSlug: slug,
          batches: [
            {
              trekSlug: slug,
              batchDate: "2026-12-20",
              batchType: "Regular",
              totalSeats: 15n,
              bookedSeats: 7n,
              availableSeats: 8n,
              price: BigInt(getPriceNumber(slug)),
            },
            {
              trekSlug: slug,
              batchDate: "2026-12-27",
              batchType: "Regular",
              totalSeats: 15n,
              bookedSeats: 13n,
              availableSeats: 2n,
              price: BigInt(getPriceNumber(slug)),
            },
            {
              trekSlug: slug,
              batchDate: "2027-01-03",
              batchType: "New Year",
              totalSeats: 15n,
              bookedSeats: 15n,
              availableSeats: 0n,
              price: BigInt(getPriceNumber(slug) + 1000),
            },
          ],
        }),
      );
      setGroups(mockGroups);
    } else {
      setGroups(result);
    }
    setLastUpdated(new Date());
    setIsLoading(false);
  }, [actor]);

  useEffect(() => {
    if (!actor || isFetching) return;
    fetchAll();
  }, [actor, isFetching, fetchAll]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (autoRefresh && actor && !isFetching) {
      intervalRef.current = setInterval(fetchAll, 30_000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRefresh, actor, isFetching, fetchAll]);

  const updateFilters = (partial: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const clearFilters = () => {
    setFilters({
      states: new Set(),
      availability: "all",
      durations: new Set(),
      minPrice: 3000,
      maxPrice: 25000,
    });
  };

  const filteredGroups = groups
    .filter((g) => {
      const meta = TREK_META[g.trekSlug];
      if (!meta) return false;
      // State filter
      if (filters.states.size > 0 && !filters.states.has(meta.state))
        return false;
      // Duration filter
      if (!matchesDurationFilter(g.trekSlug, filters.durations)) return false;
      // Price filter
      const price = getPriceNumber(g.trekSlug);
      if (price < filters.minPrice || price > filters.maxPrice) return false;
      // Availability filter — filter batches
      return true;
    })
    .map((g) => {
      const filteredBatches = g.batches.filter((b) => {
        const avail = Number(b.availableSeats);
        if (filters.availability === "available") return avail > 0;
        if (filters.availability === "almostFull")
          return avail > 0 && avail <= 5;
        if (filters.availability === "soldOut") return avail === 0;
        return true;
      });
      return { ...g, batches: filteredBatches };
    })
    .filter((g) => g.batches.length > 0);

  const stats = computeStats(groups);
  const totalBatches = filteredGroups.reduce(
    (acc, g) => acc + g.batches.length,
    0,
  );

  return (
    <main
      className="min-h-screen"
      style={{ background: "#060E08" }}
      data-ocid="availability.page"
    >
      {/* SEO title */}
      <title>Live Trek Availability 2026 | Global Trek</title>

      {/* Hero */}
      <section
        className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4"
        style={{
          background:
            "linear-gradient(160deg, #0A2E1A 0%, #145C38 50%, #0A2E1A 100%)",
        }}
        data-ocid="availability.hero"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p
                className="font-label text-xs uppercase tracking-widest mb-2"
                style={{ color: "#2ECC71" }}
              >
                ⚡ Live Dashboard
              </p>
              <h1
                className="font-display text-4xl md:text-5xl font-bold text-white mb-3"
                style={{ lineHeight: 1.15 }}
              >
                Find Your Perfect Trek Batch
              </h1>
              <p className="text-white/60 text-base md:text-lg max-w-xl">
                Live seat availability across all 15 treks and 50+ batches for
                2026
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={fetchAll}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all"
                data-ocid="availability.manual_refresh_button"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
              {lastUpdated && (
                <p className="text-xs text-white/40">
                  Updated{" "}
                  {lastUpdated.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
            {[
              {
                icon: (
                  <Users className="w-5 h-5" style={{ color: "#2ECC71" }} />
                ),
                label: "Available Seats",
                value: isLoading
                  ? "—"
                  : stats.totalSeats.toLocaleString("en-IN"),
                sub: "across all batches",
                ocid: "availability.stat_total_seats",
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
                label: "Sold Out Batches",
                value: isLoading ? "—" : String(stats.soldOutCount),
                sub: "no seats remaining",
                ocid: "availability.stat_soldout",
              },
              {
                icon: <Calendar className="w-5 h-5 text-amber-400" />,
                label: "Next Batch",
                value: isLoading
                  ? "—"
                  : stats.nextBatch
                    ? stats.nextBatch.trekName
                    : "No batches",
                sub: stats.nextBatch
                  ? `${formatDate(stats.nextBatch.date)} · ${stats.nextBatch.seats} seats`
                  : "",
                ocid: "availability.stat_next_batch",
              },
              {
                icon: (
                  <TrendingUp
                    className="w-5 h-5"
                    style={{ color: "#F4A623" }}
                  />
                ),
                label: "Most Available",
                value: isLoading ? "—" : stats.mostAvailableTrek || "—",
                sub: isLoading ? "" : `${stats.maxSeats} total seats`,
                ocid: "availability.stat_most_available",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-white/10 p-4"
                style={{ background: "rgba(255,255,255,0.06)" }}
                data-ocid={card.ocid}
              >
                <div className="flex items-center gap-2 mb-2">
                  {card.icon}
                  <span className="font-label text-[11px] uppercase tracking-widest text-white/40">
                    {card.label}
                  </span>
                </div>
                <p className="font-display text-2xl font-bold text-white truncate">
                  {card.value}
                </p>
                {card.sub && (
                  <p className="text-[11px] text-white/40 mt-0.5 truncate">
                    {card.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="max-w-6xl mx-auto px-4 py-8"
        data-ocid="availability.main_section"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop sidebar */}
          <aside
            className="hidden md:block w-72 shrink-0 self-start sticky top-24 rounded-2xl border border-white/10 p-5"
            style={{ background: "rgba(10,46,26,0.8)" }}
            data-ocid="availability.filter_sidebar"
          >
            <FilterPanel
              filters={filters}
              onFiltersChange={updateFilters}
              onClear={clearFilters}
            />
          </aside>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
              <p className="text-white/50 text-sm">
                Showing{" "}
                <span className="text-white font-semibold">{totalBatches}</span>{" "}
                batches across{" "}
                <span className="text-white font-semibold">
                  {filteredGroups.length}
                </span>{" "}
                treks
              </p>
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:text-white transition-colors"
                  data-ocid="availability.mobile_filter_button"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                {/* Auto-refresh */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/50">Auto-refresh</span>
                  <Switch
                    checked={autoRefresh}
                    onCheckedChange={setAutoRefresh}
                    data-ocid="availability.auto_refresh_toggle"
                  />
                </div>
              </div>
            </div>

            {/* Loading state */}
            {isLoading && (
              <div className="space-y-4" data-ocid="availability.loading_state">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <div
                      className="p-4 flex gap-4"
                      style={{ background: "rgba(26,122,76,0.2)" }}
                    >
                      <Skeleton className="w-16 h-16 rounded-xl" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {!isLoading && filteredGroups.length === 0 && (
              <div
                className="flex flex-col items-center justify-center py-20 rounded-2xl border border-white/10"
                style={{ background: "rgba(10,46,26,0.4)" }}
                data-ocid="availability.empty_state"
              >
                <div className="text-5xl mb-4">🏔</div>
                <h3 className="font-display text-xl text-white mb-2">
                  No matching batches
                </h3>
                <p className="text-white/50 text-sm text-center max-w-xs">
                  Try adjusting your filters or clearing them to see all
                  available batches.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{ background: "#1A7A4C", color: "white" }}
                  data-ocid="availability.empty_clear_filters_button"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Trek groups */}
            {!isLoading && (
              <AnimatePresence mode="wait">
                <div className="space-y-5">
                  {filteredGroups.map((group) => (
                    <TrekGroupCard key={group.trekSlug} group={group} />
                  ))}
                </div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.6)" }}
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl p-6 overflow-y-auto max-h-[85vh]"
              style={{ background: "#0A2E1A" }}
              data-ocid="availability.mobile_filter_drawer"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-label text-base font-bold text-white uppercase tracking-widest">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  aria-label="Close filter drawer"
                  data-ocid="availability.mobile_filter_close_button"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>
              <FilterPanel
                filters={filters}
                onFiltersChange={updateFilters}
                onClear={clearFilters}
              />
              <Button
                className="w-full mt-6 rounded-full font-label tracking-widest uppercase"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
                onClick={() => setMobileFilterOpen(false)}
                data-ocid="availability.apply_filters_button"
              >
                Show Results ({totalBatches})
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
