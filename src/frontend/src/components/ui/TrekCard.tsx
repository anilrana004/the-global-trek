import type { Trek } from "@/types/trek";
import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Mountain, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface TrekCardProps {
  trek: Trek;
  index?: number;
  compact?: boolean;
}

function getDifficultyColor(difficulty: string): string {
  if (difficulty === "Easy") return "rgba(46,204,113,0.9)";
  if (difficulty === "Moderate" || difficulty === "Easy to Moderate")
    return "rgba(244,166,35,0.9)";
  return "rgba(231,76,60,0.9)";
}

const WISHLIST_KEY = "gt_wishlist";

function getWishlist(): string[] {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export function TrekCard({ trek, index = 0, compact = false }: TrekCardProps) {
  const slug = trek.slug ?? trek.id;
  const trekPath = `/trek/${slug}` as "/";
  const bookingPath = `/booking/${slug}/select-batch` as "/";

  const [wishlisted, setWishlisted] = useState(() =>
    getWishlist().includes(slug),
  );
  const imageUrl = `https://source.unsplash.com/800x600/?${trek.imageQuery ?? trek.name.toLowerCase().replace(/ /g, ",")},himalaya,trek`;

  useEffect(() => {
    const list = getWishlist();
    if (wishlisted) {
      if (!list.includes(slug)) {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify([...list, slug]));
      }
    } else {
      localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(list.filter((s) => s !== slug)),
      );
    }
  }, [wishlisted, slug]);

  if (compact) {
    return (
      <div
        className="group flex gap-3 p-2.5 rounded-xl border bg-card hover:shadow-md transition-all duration-200"
        style={{ borderColor: "rgba(26,122,76,0.15)" }}
        data-ocid={`trek_card.item.${index + 1}`}
      >
        <Link to={trekPath} className="shrink-0">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={trek.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0 space-y-0.5">
          <Link to={trekPath}>
            <h4
              className="font-display text-sm font-semibold leading-tight line-clamp-2 hover:underline"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A",
              }}
            >
              {trek.name}
            </h4>
          </Link>
          <p className="text-[10px] text-muted-foreground">
            {trek.duration} · {trek.difficulty}
          </p>
          <p className="text-xs font-bold" style={{ color: "#145C38" }}>
            {trek.price}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ borderColor: "rgba(26,122,76,0.15)" }}
      data-ocid={`trek_card.item.${index + 1}`}
    >
      {/* Image */}
      <Link to={trekPath} aria-label={trek.name}>
        <div className="relative overflow-hidden" style={{ height: "240px" }}>
          <img
            src={imageUrl}
            alt={`${trek.name} trek trail in ${trek.state} Himalayas, India`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {/* State badge */}
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full font-label text-[10px] font-bold tracking-wider uppercase text-white"
            style={{ background: "#1A7A4C" }}
          >
            {trek.state === "Himachal Pradesh" ? "Himachal" : "Uttarakhand"}
          </div>
          {/* Difficulty + duration + altitude pills */}
          <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
            <span
              className="px-2.5 py-1 rounded-full font-label text-[10px] font-semibold text-white"
              style={{ background: getDifficultyColor(trek.difficulty) }}
            >
              {trek.difficulty}
            </span>
            <span className="px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white">
              {trek.duration}
            </span>
            <span className="px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white flex items-center gap-0.5">
              <Mountain className="w-2.5 h-2.5" />
              {trek.maxAltitude}
            </span>
          </div>
        </div>
      </Link>

      {/* Wishlist heart */}
      <button
        type="button"
        className="absolute top-3 right-3 p-2 rounded-full transition-all hover:scale-110"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={() => setWishlisted(!wishlisted)}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        data-ocid={`trek_card.wishlist_button.${index + 1}`}
      >
        <Heart
          className="w-4 h-4 transition-colors"
          style={{
            color: wishlisted ? "#E74C3C" : "white",
            fill: wishlisted ? "#E74C3C" : "none",
          }}
        />
      </button>

      {/* Card content */}
      <div className="p-4 space-y-2">
        <Link to={trekPath}>
          <h3
            className="font-display text-base font-semibold leading-snug line-clamp-2 hover:underline"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#0A2E1A",
              fontSize: "16px",
            }}
          >
            {trek.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">
            {trek.district}, {trek.state}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-3 h-3"
              style={{
                fill:
                  star <= Math.round(Number(trek.rating ?? 4.8))
                    ? "#F4A623"
                    : "transparent",
                color: "#F4A623",
              }}
            />
          ))}
          <span
            className="font-label text-xs font-bold"
            style={{ color: "#145C38" }}
          >
            {trek.rating ?? "4.8"}
          </span>
          <span className="text-xs text-muted-foreground">
            ({trek.reviewCount ?? 0})
          </span>
        </div>

        <div>
          <span
            className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "#E8F5EE", color: "#145C38" }}
          >
            Best: {trek.bestSeason ?? trek.bestTime}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1.5">
          <div>
            <span className="text-xs text-muted-foreground">From </span>
            <span
              className="font-display text-lg font-bold"
              style={{
                color: "#145C38",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {trek.price}
            </span>
            <span className="text-xs text-muted-foreground">/person</span>
          </div>
          <Link
            to={bookingPath}
            className="px-4 py-1.5 rounded-full font-label text-xs font-bold transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: "#F4A623", color: "#0A2E1A" }}
            data-ocid={`trek_card.book_now.${index + 1}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
