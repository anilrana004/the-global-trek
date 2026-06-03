import { c as createLucideIcon, h as useParams, r as reactExports, j as jsxRuntimeExports, L as Link, F as Facebook } from "./index-BO08U1_a.js";
import { b as blogsData } from "./blogs-DvKuH727.js";
import { A as ArrowLeft } from "./arrow-left-CnEIeJy8.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { C as Clock } from "./clock-DTPEDtnO.js";
import { S as Share2 } from "./share-2-0m92E4Xh.js";
import { C as Copy } from "./copy-CjT-hPXB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode);
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
function extractHeadings(body) {
  return body.split("\n").filter((l) => l.startsWith("## ")).map((l) => {
    const text = l.replace(/^##\s+/, "");
    return { id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"), text };
  });
}
function renderBody(body) {
  return body.split("\n\n").filter(Boolean).map((p, i) => {
    if (p.startsWith("## ")) {
      const text = p.replace(/^##\s+/, "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          id,
          className: "font-display text-2xl font-bold mt-10 mb-4",
          style: {
            fontFamily: "'Playfair Display', serif",
            color: "#0A2E1A"
          },
          children: text
        },
        `h-${text.slice(0, 15)}`
      );
    }
    const parts = p.split(/(\*\*[^*]+\*\*)/g);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-muted-foreground text-base leading-[1.85] mb-5",
        children: parts.map(
          (part, j) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "strong",
            {
              className: "text-foreground font-semibold",
              children: part.slice(2, -2)
            },
            part.slice(0, 8) + String(j)
          ) : part
        )
      },
      `p-${String(i)}`
    );
  });
}
function BlogDetailPage() {
  const { postId } = useParams({ from: "/blog/$postId" });
  const article = blogsData.find((b) => b.slug === postId || b.id === postId);
  const [readProgress, setReadProgress] = reactExports.useState(0);
  const [copied, setCopied] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrolled = Math.max(0, window.innerHeight - top);
      setReadProgress(Math.min(100, scrolled / height * 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  if (!article) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        "data-ocid": "blog_detail.not_found",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl text-foreground mb-4", children: "Article Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-mono text-sm",
              style: { background: "#145C38" },
              "data-ocid": "blog_detail.back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Blog"
              ]
            }
          )
        ] })
      }
    );
  }
  const catColor = getCategoryColor(article.category);
  const headings = extractHeadings(article.body);
  const relatedRaw = blogsData.filter(
    (b) => b.id !== article.id && (b.category === article.category || b.author === article.author)
  ).slice(0, 3);
  const related = relatedRaw.length >= 2 ? relatedRaw : blogsData.filter((b) => b.id !== article.id).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://globaltrek.in";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "blog_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed top-0 left-0 right-0 z-50 h-1",
        style: { background: "rgba(0,0,0,0.1)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full transition-all duration-100",
            style: { width: `${readProgress}%`, background: "#145C38" }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: { height: "400px", marginTop: "60px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, #0A2E1A 0%, #22A05E 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 h-full flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 pb-10 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-mono font-semibold px-3 py-1 rounded-full",
                  style: { background: catColor.bg, color: catColor.text },
                  children: article.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-white/70 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                new Date(article.publishDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-white/70 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                " ",
                article.readTime
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight",
                style: { fontFamily: "'Playfair Display', serif" },
                children: article.title
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10", ref: contentRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-10 items-start", children: [
        headings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "aside",
          {
            className: "hidden lg:block w-64 flex-shrink-0 sticky top-24",
            "data-ocid": "blog_detail.toc",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-mono text-xs font-bold tracking-widest uppercase mb-4",
                    style: { color: "#145C38" },
                    children: "In This Article"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: headings.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `#${h.id}`,
                    className: "block text-xs text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 pl-3 hover:border-primary border-transparent font-mono leading-snug",
                    children: h.text
                  },
                  h.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-mono text-xs font-bold tracking-widest uppercase mb-3",
                    style: { color: "#145C38" },
                    children: "Share"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white",
                      style: { background: "#25D366" },
                      "data-ocid": "blog_detail.share_whatsapp",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3 h-3" }),
                        " WhatsApp"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white",
                      style: { background: "#1877F2" },
                      "data-ocid": "blog_detail.share_facebook",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-3 h-3" }),
                        " Facebook"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white",
                      style: { background: "#1DA1F2" },
                      "data-ocid": "blog_detail.share_twitter",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-3 h-3" }),
                        " Twitter"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleCopy,
                      className: "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold",
                      style: { background: "#F0FAF4", color: "#145C38" },
                      "data-ocid": "blog_detail.share_copy",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                        " ",
                        copied ? "Copied!" : "Copy Link"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono mb-8 transition-colors",
              "data-ocid": "blog_detail.back_to_blog",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Blog"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-4 p-5 bg-card border border-border rounded-2xl mb-8",
              "data-ocid": "blog_detail.author_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0",
                    style: { background: "#145C38" },
                    children: article.author.charAt(0)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: article.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed mt-0.5 line-clamp-2", children: article.authorBio })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col items-end gap-1 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground font-mono", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                    new Date(article.publishDate).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground font-mono", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    " ",
                    article.readTime
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "blog_detail.body", children: renderBody(article.body) }),
          article.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-8 flex flex-wrap gap-2",
              "data-ocid": "blog_detail.tags",
              children: article.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "px-3 py-1 text-xs font-mono rounded-full",
                  style: { background: "#E8F5EE", color: "#145C38" },
                  children: [
                    "#",
                    tag
                  ]
                },
                tag
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden mt-8 p-5 bg-card border border-border rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-mono text-xs font-bold tracking-widest uppercase mb-3",
                style: { color: "#145C38" },
                children: "Share this article"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white",
                  style: { background: "#25D366" },
                  "data-ocid": "blog_detail.share_whatsapp_mobile",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3 h-3" }),
                    " WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleCopy,
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold",
                  style: { background: "#F0FAF4", color: "#145C38" },
                  "data-ocid": "blog_detail.share_copy_mobile",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                    " ",
                    copied ? "Copied!" : "Copy Link"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-10 p-6 rounded-2xl text-white",
              style: {
                background: "linear-gradient(135deg, #145C38, #22A05E)"
              },
              "data-ocid": "blog_detail.cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-xl font-bold mb-2",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: "Ready to Experience This Trek?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mb-4", children: "Join 12,000+ trekkers who chose Global Trek for their Himalayan adventure." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold",
                    style: { background: "#FFFFFF", color: "#145C38" },
                    "data-ocid": "blog_detail.book_now_button",
                    children: "Plan My Trek →"
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mt-16 pt-10 border-t border-border",
          "data-ocid": "blog_detail.related_posts",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-2xl font-bold mb-8",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A"
                },
                children: "You May Also Like"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: related.map((post) => {
              const pc = getCategoryColor(post.category);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/blog/$postId",
                  params: { postId: post.slug },
                  className: "block bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group",
                  "data-ocid": "blog_detail.related.item",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-32 flex items-end p-3",
                        style: {
                          background: "linear-gradient(135deg, #0A2E1A, #22A05E)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs font-mono truncate", children: post.category })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-mono font-semibold px-2 py-0.5 rounded-full",
                          style: { background: pc.bg, color: pc.text },
                          children: post.category
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h4",
                        {
                          className: "font-display text-sm font-bold mt-2 text-foreground group-hover:text-primary transition-colors line-clamp-2",
                          style: { fontFamily: "'Playfair Display', serif" },
                          children: post.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono mt-1", children: post.readTime })
                    ] })
                  ]
                },
                post.id
              );
            }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  BlogDetailPage as default
};
