import { u as useParams, j as jsxRuntimeExports, L as Link, a as Mountain, M as MapPin } from "./index-BBTrFTBe.js";
import { T as TrekCard } from "./TrekCard-DLdVrtdQ.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { S as Star } from "./star-C8uGHq0g.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { U as Users } from "./users-GoUlh9qe.js";
import "./heart-BWmixCSm.js";
function TrekStateDetailPage() {
  const { state, slug } = useParams({ from: "/treks/$state/$slug" });
  const trek = treksData.find((t) => (t.slug ?? t.id) === slug);
  if (!trek) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { paddingTop: "120px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-6xl", children: "🏔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Trek not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", className: "text-primary hover:underline", children: "View all treks" })
        ] })
      }
    );
  }
  const imageUrl = `https://source.unsplash.com/1600x900/?${trek.imageQuery}`;
  const similarTreks = treksData.filter(
    (t) => (trek.similarTreks ?? []).includes(t.id) || (trek.relatedTrekIds ?? []).includes(t.id)
  ).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", "data-ocid": "trek_detail_page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative flex items-end",
        style: {
          height: "70vh",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,46,26,0.9)), url(${imageUrl}) center/cover no-repeat`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3 text-white/60 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Home" }),
            " /",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: "Treks" }),
            " /",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/treks/${state}`, children: trek.state }),
            " /",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: trek.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "-1px"
              },
              children: trek.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            `📍 ${trek.altitudeM}m`,
            `⏱ ${trek.duration}`,
            `🥾 ${trek.difficulty}`,
            `📅 Best: ${trek.bestSeason}`,
            `🛑 ${trek.startPoint}`
          ].map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-3 py-1.5 rounded-full text-xs font-label font-semibold text-white",
              style: { background: "rgba(255,255,255,0.15)" },
              children: pill
            },
            pill
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "About This Trek"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: trek.overview ?? trek.description })
        ] }),
        trek.keyHighlights && trek.keyHighlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "Key Highlights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: trek.keyHighlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-2 p-3 rounded-xl",
              style: { background: "#E8F5EE" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5", children: "✅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: h })
              ]
            },
            h
          )) })
        ] }),
        trek.itinerary && trek.itinerary.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "Day-by-Day Itinerary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: trek.itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "details",
            {
              className: "rounded-xl border border-border group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "summary",
                  {
                    className: "flex items-center gap-3 p-4 cursor-pointer list-none select-none",
                    "data-ocid": `trek_detail.itinerary_day.${day.day}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0",
                          style: { background: "#145C38" },
                          children: [
                            "D",
                            day.day
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label font-semibold text-foreground", children: day.title }),
                      day.altitude && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground font-label", children: day.altitude })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: day.description }),
                  day.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: day.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2.5 py-0.5 rounded-full text-xs font-label",
                      style: {
                        background: "#E8F5EE",
                        color: "#145C38"
                      },
                      children: h
                    },
                    h
                  )) })
                ] })
              ]
            },
            day.day
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "Inclusions & Exclusions"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl", style: { background: "#E8F5EE" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-label font-bold text-sm mb-3",
                  style: { color: "#145C38" },
                  children: "✅ Included"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: trek.inclusions.map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✓" }),
                inc
              ] }, inc)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-bold text-sm mb-3 text-destructive", children: "❌ Not Included" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: trek.exclusions.map((exc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "text-sm flex gap-2 text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "–" }),
                    exc
                  ]
                },
                exc
              )) })
            ] })
          ] })
        ] }),
        trek.faqs && trek.faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-4",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "FAQ"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: trek.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "details",
            {
              className: "rounded-xl border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "summary",
                  {
                    className: "p-4 cursor-pointer list-none font-label font-semibold text-sm select-none",
                    "data-ocid": "trek_detail.faq_item",
                    children: faq.question
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 pb-4 text-sm text-muted-foreground leading-relaxed", children: faq.answer })
              ]
            },
            faq.question
          )) })
        ] }),
        similarTreks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold mb-6",
              style: {
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A"
              },
              children: "You Might Also Love"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: similarTreks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg space-y-5",
          "data-ocid": "trek_detail.booking_sidebar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "From " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-3xl font-bold",
                  style: {
                    color: "#145C38",
                    fontFamily: "'Playfair Display', serif"
                  },
                  children: trek.price
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label font-bold text-sm", children: trek.rating ?? "4.8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "(",
                trek.reviewCount ?? 0,
                " reviews)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  " Duration"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: trek.duration })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-3.5 h-3.5" }),
                  " Max Altitude"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: trek.maxAltitude })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                  " Start Point"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: trek.startPoint })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                  " Group Size"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: trek.groupSize })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/booking/$trekSlug/select-batch",
                params: { trekSlug: trek.slug ?? trek.id },
                className: "block w-full py-3 rounded-xl text-center font-label font-bold text-white text-sm tracking-wide transition-colors hover:opacity-90",
                style: { background: "#145C38" },
                "data-ocid": "trek_detail.book_now_button",
                children: "Book Now →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "block w-full py-3 rounded-xl text-center font-label font-bold text-sm tracking-wide border transition-colors hover:bg-muted/30",
                style: { borderColor: "#145C38", color: "#145C38" },
                "data-ocid": "trek_detail.send_inquiry_button",
                children: "Send Inquiry"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-muted-foreground pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Certified expert guide" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Safe & insured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Best price guaranteed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔒 Secure Razorpay payment" })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  TrekStateDetailPage as default
};
