import type { Trek } from "@/types/trek";
import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Mountain, Star } from "lucide-react";
import { useState } from "react";

interface TrekCardProps {
  trek: Trek;
  index?: number;
}

export function TrekCard({ trek, index = 0 }: TrekCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const imageUrl = `https://source.unsplash.com/800x600/?${trek.imageQuery ?? trek.name.toLowerCase().replace(/ /g, ",")}`;
  const statePath =
    trek.state === "Himachal Pradesh" ? "himachal-pradesh" : "uttarakhand";

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ borderColor: "rgba(26,122,76,0.15)" }}
      data-ocid={`trek_card.item.${index + 1}`}
    >
      {/* Image */}
      <Link
        to="/treks/$state/$slug"
        params={{ state: statePath, slug: trek.slug ?? trek.id }}
        aria-label={trek.name}
      >
        <div className="relative overflow-hidden" style={{ height: "240px" }}>
          <img
            src={imageUrl}
            alt={`${trek.name} trek trail in ${trek.state} Himalayas, India`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {/* State badge — top left */}
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full font-label text-[10px] font-bold tracking-wider uppercase text-white"
            style={{ background: "#1A7A4C" }}
          >
            {trek.state === "Himachal Pradesh" ? "Himachal" : "Uttarakhand"}
          </div>
          {/* Difficulty + duration pills — bottom overlay */}
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            <span
              className="px-2.5 py-1 rounded-full font-label text-[10px] font-semibold"
              style={{
                background:
                  trek.difficulty === "Easy"
                    ? "rgba(46,204,113,0.85)"
                    : trek.difficulty === "Moderate" ||
                        trek.difficulty === "Easy to Moderate"
                      ? "rgba(244,166,35,0.85)"
                      : "rgba(231,76,60,0.85)",
                color: "white",
              }}
            >
              {trek.difficulty}
            </span>
            <span className="px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white">
              {trek.duration}
            </span>
          </div>
        </div>
      </Link>

      {/* Wishlist heart — top right */}
      <button
        type="button"
        className="absolute top-3 right-3 p-2 rounded-full transition-all"
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
      <div className="p-4 space-y-2.5">
        <Link
          to="/treks/$state/$slug"
          params={{ state: statePath, slug: trek.slug ?? trek.id }}
        >
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

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Mountain className="w-3 h-3 shrink-0" />
          <span>Max Altitude: {trek.maxAltitude}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span
            className="font-label text-xs font-bold"
            style={{ color: "#145C38" }}
          >
            {trek.rating ?? "4.8"}
          </span>
          <span className="text-xs text-muted-foreground">
            ({trek.reviewCount ?? 0} reviews)
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span
            className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "#E8F5EE", color: "#145C38" }}
          >
            Best: {trek.bestSeason ?? trek.bestTime}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1">
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
            to="/treks/$state/$slug"
            params={{ state: statePath, slug: trek.slug ?? trek.id }}
            className="px-4 py-1.5 rounded-full font-label text-xs font-bold text-white transition-colors hover:opacity-90"
            style={{ background: "#145C38" }}
            data-ocid={`trek_card.book_now.${index + 1}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
