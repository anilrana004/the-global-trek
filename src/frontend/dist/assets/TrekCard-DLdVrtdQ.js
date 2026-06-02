import { r as reactExports, j as jsxRuntimeExports, L as Link, M as MapPin, a as Mountain } from "./index-BBTrFTBe.js";
import { H as Heart } from "./heart-BWmixCSm.js";
import { S as Star } from "./star-C8uGHq0g.js";
function TrekCard({ trek, index = 0 }) {
  const [wishlisted, setWishlisted] = reactExports.useState(false);
  const imageUrl = `https://source.unsplash.com/800x600/?${trek.imageQuery ?? trek.name.toLowerCase().replace(/ /g, ",")}`;
  const statePath = trek.state === "Himachal Pradesh" ? "himachal-pradesh" : "uttarakhand";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative rounded-2xl overflow-hidden border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
      style: { borderColor: "rgba(26,122,76,0.15)" },
      "data-ocid": `trek_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/treks/$state/$slug",
            params: { state: statePath, slug: trek.slug ?? trek.id },
            "aria-label": trek.name,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { height: "240px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imageUrl,
                  alt: `${trek.name} trek trail in ${trek.state} Himalayas, India`,
                  className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-3 left-3 px-2.5 py-1 rounded-full font-label text-[10px] font-bold tracking-wider uppercase text-white",
                  style: { background: "#1A7A4C" },
                  children: trek.state === "Himachal Pradesh" ? "Himachal" : "Uttarakhand"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-2.5 py-1 rounded-full font-label text-[10px] font-semibold",
                    style: {
                      background: trek.difficulty === "Easy" ? "rgba(46,204,113,0.85)" : trek.difficulty === "Moderate" || trek.difficulty === "Easy to Moderate" ? "rgba(244,166,35,0.85)" : "rgba(231,76,60,0.85)",
                      color: "white"
                    },
                    children: trek.difficulty
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white", children: trek.duration })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-3 right-3 p-2 rounded-full transition-all",
            style: { background: "rgba(0,0,0,0.5)" },
            onClick: () => setWishlisted(!wishlisted),
            "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
            "data-ocid": `trek_card.wishlist_button.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                className: "w-4 h-4 transition-colors",
                style: {
                  color: wishlisted ? "#E74C3C" : "white",
                  fill: wishlisted ? "#E74C3C" : "none"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks/$state/$slug",
              params: { state: statePath, slug: trek.slug ?? trek.id },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display text-base font-semibold leading-snug line-clamp-2 hover:underline",
                  style: {
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#0A2E1A",
                    fontSize: "16px"
                  },
                  children: trek.name
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
              trek.district,
              ", ",
              trek.state
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-3 h-3 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Max Altitude: ",
              trek.maxAltitude
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-label text-xs font-bold",
                style: { color: "#145C38" },
                children: trek.rating ?? "4.8"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              trek.reviewCount ?? 0,
              " reviews)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
              style: { background: "#E8F5EE", color: "#145C38" },
              children: [
                "Best: ",
                trek.bestSeason ?? trek.bestTime
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "From " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-lg font-bold",
                  style: {
                    color: "#145C38",
                    fontFamily: "'Playfair Display', serif"
                  },
                  children: trek.price
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/treks/$state/$slug",
                params: { state: statePath, slug: trek.slug ?? trek.id },
                className: "px-4 py-1.5 rounded-full font-label text-xs font-bold text-white transition-colors hover:opacity-90",
                style: { background: "#145C38" },
                "data-ocid": `trek_card.book_now.${index + 1}`,
                children: "Book Now"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  TrekCard as T
};
