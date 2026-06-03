import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BO08U1_a.js";
import { b as blogsData } from "./blogs-DvKuH727.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { C as Clock } from "./clock-DTPEDtnO.js";
import { A as ArrowRight } from "./arrow-right-Cjr1nDBz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode);
const CATEGORIES = [
  "All",
  "Trek Guide",
  "Yatra Guide",
  "Trek Story",
  "Gear & Tips",
  "Health & Safety",
  "Hidden Gem"
];
const CATEGORY_COLORS = {
  "Trek Guide": { bg: "#E8F5EE", text: "#145C38" },
  "Yatra Guide": { bg: "#FFF8E7", text: "#B8800A" },
  "Trek Story": { bg: "#EEF5FF", text: "#1A5C9A" },
  "Gear & Tips": { bg: "#F3F0FF", text: "#5B3F9E" },
  "Health & Safety": { bg: "#FFF0F0", text: "#C0392B" },
  "Hidden Gem": { bg: "#F0FAF4", text: "#1A7A4C" },
  "Trek + Pilgrimage": { bg: "#FFF8E7", text: "#B8800A" },
  "Trek + History": { bg: "#EEF5FF", text: "#1A5C9A" }
};
function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] ?? { bg: "#E8F5EE", text: "#145C38" };
}
function GradientImage({
  query,
  alt,
  className
}) {
  const colors = [
    "from-[#0A2E1A] to-[#22A05E]",
    "from-[#0A2E1A] to-[#2980B9]",
    "from-[#1A3A2A] to-[#2ECC71]",
    "from-[#1A2E3A] to-[#145C38]"
  ];
  const idx = query.length % colors.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `bg-gradient-to-br ${colors[idx]} flex items-end p-4 ${className ?? ""}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs font-mono truncate", children: alt })
    }
  );
}
function BlogPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? blogsData : blogsData.filter((b) => {
    const cat = b.category.toLowerCase();
    const active = activeCategory.toLowerCase();
    return cat === active || cat.includes(active.split(" ")[0].toLowerCase());
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "blog.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative pt-28 pb-16 px-4 text-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #22A05E 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10 pointer-events-none",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-5",
                style: { background: "rgba(255,255,255,0.15)", color: "#FFFFFF" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                  " Trek Smarter"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-white font-bold mb-4 leading-tight", children: "Expert Guides & Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg leading-relaxed max-w-2xl mx-auto", children: "Trek guides, yatra planning, safety tips, and mountain stories curated by our expert guides from the Himalayas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-white/60 text-sm font-mono", children: [
              blogsData.length,
              " articles · Updated for 2026"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border sticky top-0 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-1 overflow-x-auto py-3 scrollbar-hide",
        "data-ocid": "blog.category_filter",
        children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: "flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono font-semibold transition-all duration-200 whitespace-nowrap",
            style: activeCategory === cat ? { background: "#145C38", color: "#ffffff" } : { background: "transparent", color: "#6C757D" },
            "data-ocid": "blog.category.tab",
            children: cat
          },
          cat
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", "data-ocid": "blog.articles_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm font-mono mb-8", children: [
        "Showing ",
        filtered.length,
        " article",
        filtered.length !== 1 ? "s" : "",
        activeCategory !== "All" ? ` in ${activeCategory}` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((article, i) => {
        const catColor = getCategoryColor(article.category);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i % 6 * 0.07 },
            className: "bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col",
            "data-ocid": `blog.article.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative overflow-hidden",
                  style: { height: "240px" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GradientImage,
                      {
                        query: article.imageQuery,
                        alt: article.title,
                        className: "w-full h-full transition-transform duration-500 group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-mono font-semibold px-3 py-1 rounded-full",
                        style: {
                          background: catColor.bg,
                          color: catColor.text
                        },
                        children: article.category
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-lg font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: article.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1", children: article.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold",
                        style: { background: "#145C38" },
                        children: article.author.charAt(0)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-none", children: article.author }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground font-mono", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-2.5 h-2.5" }),
                          new Date(article.publishDate).toLocaleDateString(
                            "en-IN",
                            { month: "short", year: "numeric" }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground font-mono", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-2.5 h-2.5" }),
                          article.readTime
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/blog/$postId",
                      params: { postId: article.slug },
                      className: "flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:gap-2 transition-all",
                      "data-ocid": `blog.article.read_more.${i + 1}`,
                      children: [
                        "Read More ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          article.id
        );
      }) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "blog.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "📚" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "No articles in this category yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Check back soon — our guides are writing!" })
      ] })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
