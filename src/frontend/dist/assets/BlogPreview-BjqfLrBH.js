import { t as useParams, e as useActor, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, N as Send, f as createActor } from "./index-vYOW-QfD.js";
import { T as TriangleAlert } from "./triangle-alert-CpbQD4jz.js";
import { A as ArrowLeft } from "./arrow-left-BujbnMEe.js";
const CAT_COLORS = {
  "Trek Report": { bg: "#E8F5EE", text: "#145C38" },
  "Trek Guide": { bg: "#E8F5EE", text: "#145C38" },
  "Yatra Guide": { bg: "#FFF8E7", text: "#B8800A" },
  "Gear & Tips": { bg: "#F3F0FF", text: "#5B3F9E" },
  "Health & Safety": { bg: "#FFF0F0", text: "#C0392B" },
  "Hidden Gem": { bg: "#F0FAF4", text: "#1A7A4C" },
  News: { bg: "#EEF5FF", text: "#1A5C9A" }
};
function renderBody(body) {
  return body.split("\n\n").filter(Boolean).map((p, _i) => {
    if (p.startsWith("## ")) {
      const text = p.replace(/^##\s+/, "");
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          className: "font-display text-2xl font-bold mt-10 mb-4",
          style: {
            fontFamily: "'Playfair Display', serif",
            color: "#0A2E1A"
          },
          children: text
        },
        text.slice(0, 20)
      );
    }
    const parts = p.split(/(\*\*[^*]+\*\*)/g);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-muted-foreground text-base leading-[1.85] mb-5",
        children: parts.map(
          (part) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "strong",
            {
              className: "text-foreground font-semibold",
              children: part.slice(2, -2)
            },
            part.slice(0, 20)
          ) : part
        )
      },
      p.slice(0, 30)
    );
  });
}
function NoIndex() {
  reactExports.useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  return null;
}
function BlogPreviewPage() {
  const { slug } = useParams({ from: "/blog/preview/$slug" });
  const { actor, isFetching } = useActor(createActor);
  const [post, setPost] = reactExports.useState(void 0);
  const [publishing, setPublishing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    actor.getAllAdminBlogPosts().then((all) => {
      const found = all.find((p) => p.slug === slug);
      setPost(found ?? null);
    });
  }, [actor, isFetching, slug]);
  async function handlePublishNow() {
    if (!actor || !post) return;
    setPublishing(true);
    try {
      await actor.publishAdminBlogPost(post.id);
      window.close();
    } finally {
      setPublishing(false);
    }
  }
  if (post === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 w-full max-w-2xl px-8", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-muted rounded animate-pulse" }, n)) }) });
  }
  if (post === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center gap-4",
        "data-ocid": "blog.preview.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-16 h-16 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "Post Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            'No post with slug "',
            slug,
            '" exists.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/admin",
              className: "text-primary hover:underline flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Admin"
              ]
            }
          )
        ]
      }
    );
  }
  const catColor = CAT_COLORS[post.category] ?? {
    bg: "#E8F5EE",
    text: "#145C38"
  };
  const formattedDate = new Date(
    Number(post.createdAt) / 1e6
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "blog.preview.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NoIndex, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-30 pointer-events-none flex items-center justify-center overflow-hidden",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[12vw] font-black tracking-widest uppercase select-none",
            style: {
              transform: "rotate(-35deg)",
              color: "rgba(0,0,0,0.04)",
              fontFamily: "'Playfair Display', serif",
              whiteSpace: "nowrap"
            },
            children: "PREVIEW"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-3 px-5 py-3",
        style: { background: "#FDE68A", borderBottom: "2px solid #F59E0B" },
        "data-ocid": "blog.preview.banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-amber-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
            "PREVIEW MODE \\u2014 This post is not yet published"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                size: "sm",
                className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                onClick: handlePublishNow,
                disabled: publishing,
                "data-ocid": "blog.preview.publish_now_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 mr-1.5" }),
                  " Publish Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admin",
                className: "text-xs font-medium text-amber-800 hover:text-amber-900 underline",
                children: "\\u2190 Back to Admin"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-14", children: post.heroImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-80 md:h-[420px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: post.heroImageUrl,
          alt: post.title,
          className: "w-full h-full object-cover",
          onError: (e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80";
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-6 right-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-3",
            style: { background: catColor.bg, color: catColor.text },
            children: post.category
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-3xl md:text-5xl font-bold text-white leading-tight",
            style: { fontFamily: "'Playfair Display', serif" },
            children: post.title
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "h-56 flex flex-col items-center justify-end pb-8 px-6",
        style: {
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #22A05E 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-3",
              style: { background: catColor.bg, color: catColor.text },
              children: post.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl md:text-5xl font-bold text-white text-center leading-tight",
              style: { fontFamily: "'Playfair Display', serif" },
              children: post.title
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6 mb-8 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold",
              style: { background: "#145C38" },
              children: post.author.charAt(0)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: post.author })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "\\u00b7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formattedDate }),
        post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "\\u00b7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: post.tags.slice(0, 4).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground",
              children: [
                "#",
                tag
              ]
            },
            tag
          )) })
        ] })
      ] }),
      post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 mb-8", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { children: renderBody(post.content) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 pb-20 border-t border-border pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/admin",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Admin Panel"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  BlogPreviewPage as default
};
