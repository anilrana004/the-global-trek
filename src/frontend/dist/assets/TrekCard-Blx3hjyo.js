import { r as reactExports, j as jsxRuntimeExports, L as Link, a as Mountain, M as MapPin } from "./index-vYOW-QfD.js";
import { H as Heart } from "./heart-mZleXww0.js";
import { S as Star } from "./star-BLOO0ZgP.js";
function getDifficultyColor(difficulty) {
  if (difficulty === "Easy") return "rgba(46,204,113,0.9)";
  if (difficulty === "Moderate" || difficulty === "Easy to Moderate")
    return "rgba(244,166,35,0.9)";
  return "rgba(231,76,60,0.9)";
}
const WISHLIST_KEY = "gt_wishlist";
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]");
  } catch {
    return [];
  }
}
function TrekCard({ trek, index = 0, compact = false }) {
  const slug = trek.slug ?? trek.id;
  const trekPath = `/trek/${slug}`;
  const bookingPath = `/booking/${slug}/select-batch`;
  const [wishlisted, setWishlisted] = reactExports.useState(
    () => getWishlist().includes(slug)
  );
  const imageUrl = `https://source.unsplash.com/800x600/?${trek.imageQuery ?? trek.name.toLowerCase().replace(/ /g, ",")},himalaya,trek`;
  reactExports.useEffect(() => {
    const list = getWishlist();
    if (wishlisted) {
      if (!list.includes(slug)) {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify([...list, slug]));
      }
    } else {
      localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(list.filter((s) => s !== slug))
      );
    }
  }, [wishlisted, slug]);
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group flex gap-3 p-2.5 rounded-xl border bg-card hover:shadow-md transition-all duration-200",
        style: { borderColor: "rgba(26,122,76,0.15)" },
        "data-ocid": `trek_card.item.${index + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: trekPath, className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imageUrl,
              alt: trek.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
              loading: "lazy"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: trekPath, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h4",
              {
                className: "font-display text-sm font-semibold leading-tight line-clamp-2 hover:underline",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A"
                },
                children: trek.name
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
              trek.duration,
              " · ",
              trek.difficulty
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", style: { color: "#145C38" }, children: trek.price })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative rounded-2xl overflow-hidden border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
      style: { borderColor: "rgba(26,122,76,0.15)" },
      "data-ocid": `trek_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: trekPath, "aria-label": trek.name, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { height: "240px" }, children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 flex gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-full font-label text-[10px] font-semibold text-white",
                style: { background: getDifficultyColor(trek.difficulty) },
                children: trek.difficulty
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white", children: trek.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-full font-label text-[10px] font-semibold bg-black/60 text-white flex items-center gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-2.5 h-2.5" }),
              trek.maxAltitude
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-3 right-3 p-2 rounded-full transition-all hover:scale-110",
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: trekPath, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
              trek.district,
              ", ",
              trek.state
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: "w-3 h-3",
                style: {
                  fill: star <= Math.round(Number(trek.rating ?? 4.8)) ? "#F4A623" : "transparent",
                  color: "#F4A623"
                }
              },
              star
            )),
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
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1.5", children: [
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
                to: bookingPath,
                className: "px-4 py-1.5 rounded-full font-label text-xs font-bold transition-all hover:opacity-90 hover:shadow-md",
                style: { background: "#F4A623", color: "#0A2E1A" },
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
