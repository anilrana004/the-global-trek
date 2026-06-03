import { c as createLucideIcon, e as useActor, r as reactExports, K as BlogPostStatus, j as jsxRuntimeExports, B as Button, S as Skeleton, A as AnimatePresence, m as motion, N as Send, T as Trash2, X, f as createActor, d as cn, O as House } from "./index-vYOW-QfD.js";
import { I as Input } from "./input-CgB5bWX1.js";
import { F as FileText } from "./file-text-BLdPr0Pz.js";
import { C as Clock } from "./clock-CncI7fGv.js";
import { B as BookOpen } from "./book-open-qrQFDH__.js";
import { E as Eye } from "./eye-CHEv7npW.js";
import { B as Badge } from "./badge-DuvBcwOn.js";
import { L as LayoutDashboard } from "./layout-dashboard-DuxfIgbo.js";
import { C as Camera } from "./camera-wsqr0FH7.js";
import { S as Star } from "./star-BLOO0ZgP.js";
import { U as Users } from "./users-DiG3WeOD.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { C as ChevronRight } from "./chevron-right--g-LsED4.js";
import { L as Lock } from "./lock-DfUtLvP4.js";
import { D as Download } from "./download-D7ekxGRG.js";
import { C as ChevronDown } from "./chevron-down-DnTYkto-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode);
const CATEGORIES = [
  "Trek Report",
  "Trek Guide",
  "Yatra Guide",
  "Gear & Tips",
  "Health & Safety",
  "Hidden Gem",
  "News"
];
const EMPTY_FORM = {
  title: "",
  slug: "",
  category: "Trek Report",
  author: "Global Trek Team",
  excerpt: "",
  heroImageUrl: "",
  tags: "",
  metaDescription: "",
  focusKeyword: "",
  content: "",
  scheduleAt: ""
};
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function StatusPill({ status }) {
  const map = {
    [BlogPostStatus.draft]: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "Draft"
    },
    [BlogPostStatus.scheduled]: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      label: "Scheduled"
    },
    [BlogPostStatus.published]: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      label: "Published"
    },
    [BlogPostStatus.archived]: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "Archived"
    }
  };
  const s = map[status] ?? map[BlogPostStatus.draft];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${s.bg} ${s.text}`,
      children: s.label
    }
  );
}
function formatDate(ns) {
  return new Date(Number(ns) / 1e6).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function PostRow({
  post,
  index,
  onEdit,
  onPublish,
  onDelete,
  onSchedule,
  isBusy
}) {
  const dateLabel = post.status === BlogPostStatus.published && post.publishedAt ? formatDate(post.publishedAt) : post.status === BlogPostStatus.scheduled && post.publishAt ? formatDate(post.publishAt) : formatDate(post.createdAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.98 },
      transition: { delay: index * 0.04 },
      className: "flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all",
      "data-ocid": `admin.blog.post.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: post.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: post.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground leading-snug line-clamp-1", children: post.title.length > 60 ? `${post.title.slice(0, 60)}…` : post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: post.author }),
            " · ",
            post.status === BlogPostStatus.scheduled ? `Scheduled: ${dateLabel}` : post.status === BlogPostStatus.published ? `Published: ${dateLabel}` : `Created: ${dateLabel}`
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: "Edit",
              onClick: () => onEdit(post),
              className: "p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
              "data-ocid": `admin.blog.edit_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: "Preview",
              onClick: () => window.open(`/blog/preview/${post.slug}`, "_blank"),
              className: "p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
              "data-ocid": `admin.blog.preview_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          ),
          post.status !== BlogPostStatus.published && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: "Publish Now",
              onClick: () => onPublish(post),
              disabled: isBusy,
              className: "p-1.5 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-600 disabled:opacity-50",
              "data-ocid": `admin.blog.publish_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
            }
          ),
          post.status === BlogPostStatus.draft && onSchedule && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: "Schedule",
              onClick: () => onSchedule(post),
              className: "p-1.5 rounded-lg hover:bg-amber-50 transition-colors text-amber-600",
              "data-ocid": `admin.blog.schedule_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: "Delete",
              onClick: () => onDelete(post),
              disabled: isBusy,
              className: "p-1.5 rounded-lg hover:bg-red-50 transition-colors text-red-500 disabled:opacity-50",
              "data-ocid": `admin.blog.delete_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  );
}
function BlogEditorPanel({
  post,
  onClose,
  onSaveDraft,
  onPublishNow,
  onSchedule,
  saving
}) {
  const isEdit = post !== null;
  const [form, setForm] = reactExports.useState(
    post ? {
      title: post.title,
      slug: post.slug,
      category: post.category,
      author: post.author,
      excerpt: post.excerpt,
      heroImageUrl: post.heroImageUrl,
      tags: post.tags.join(", "),
      metaDescription: post.metaDescription,
      focusKeyword: post.focusKeyword,
      content: post.content,
      scheduleAt: ""
    } : { ...EMPTY_FORM }
  );
  const [showSchedule, setShowSchedule] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  function update(key, val) {
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      if (key === "title" && !isEdit) next.slug = slugify(val);
      return next;
    });
    setError("");
  }
  async function handleSaveDraft() {
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    await onSaveDraft(form, post == null ? void 0 : post.id);
  }
  async function handlePublishNow() {
    if (!form.title.trim() || !form.content.trim()) {
      setError("Title and content are required.");
      return;
    }
    await onPublishNow(form, post == null ? void 0 : post.id);
  }
  async function handleSchedule() {
    if (!form.scheduleAt) {
      setError("Please select a schedule date & time.");
      return;
    }
    if (new Date(form.scheduleAt).getTime() <= Date.now()) {
      setError("Scheduled time must be in the future.");
      return;
    }
    await onSchedule(form, post == null ? void 0 : post.id);
  }
  reactExports.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 z-40",
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { x: 640 },
        animate: { x: 0 },
        exit: { x: 640 },
        transition: { type: "spring", damping: 28, stiffness: 300 },
        className: "fixed right-0 top-0 h-full w-full max-w-[600px] bg-background border-l border-border shadow-2xl z-50 flex flex-col",
        "aria-modal": "true",
        "aria-label": "Blog Post Editor",
        "data-ocid": "admin.blog.editor",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-card flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: isEdit ? "Edit Post" : "New Blog Post" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "p-2 rounded-lg hover:bg-muted transition-colors",
                "aria-label": "Close editor",
                "data-ocid": "admin.blog.editor.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-5 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "blog-title",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: [
                    "Title ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "blog-title",
                  value: form.title,
                  onChange: (e) => update("title", e.target.value),
                  placeholder: "Enter blog post title\\u2026",
                  className: "text-base",
                  "data-ocid": "admin.blog.title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "blog-slug",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: "Slug"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono whitespace-nowrap", children: "/blog/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "blog-slug",
                    value: form.slug,
                    onChange: (e) => update("slug", slugify(e.target.value)),
                    placeholder: "url-friendly-slug",
                    className: "font-mono text-sm",
                    "data-ocid": "admin.blog.slug_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "blog-category",
                    className: "text-sm font-medium text-foreground block mb-1",
                    children: "Category"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    id: "blog-category",
                    value: form.category,
                    onChange: (e) => update("category", e.target.value),
                    className: "w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "data-ocid": "admin.blog.category_select",
                    children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "blog-author",
                    className: "text-sm font-medium text-foreground block mb-1",
                    children: "Author"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "blog-author",
                    value: form.author,
                    onChange: (e) => update("author", e.target.value),
                    placeholder: "Global Trek Team",
                    "data-ocid": "admin.blog.author_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "blog-excerpt",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: "Excerpt"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "blog-excerpt",
                  rows: 2,
                  value: form.excerpt,
                  onChange: (e) => update("excerpt", e.target.value),
                  placeholder: "Short summary shown in card listings\\u2026",
                  className: "w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "data-ocid": "admin.blog.excerpt_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "blog-hero-img",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: "Hero Image URL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "blog-hero-img",
                  value: form.heroImageUrl,
                  onChange: (e) => update("heroImageUrl", e.target.value),
                  placeholder: "https://images.unsplash.com/\\u2026",
                  "data-ocid": "admin.blog.hero_image_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "blog-tags",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: [
                    "Tags",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "(comma-separated)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "blog-tags",
                  value: form.tags,
                  onChange: (e) => update("tags", e.target.value),
                  placeholder: "himalaya, trekking, uttarakhand",
                  "data-ocid": "admin.blog.tags_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "blog-meta",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: [
                    "Meta Description",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `text-xs ${form.metaDescription.length > 160 ? "text-red-500" : "text-muted-foreground"}`,
                        children: [
                          form.metaDescription.length,
                          "/160"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "blog-meta",
                  rows: 1,
                  maxLength: 160,
                  value: form.metaDescription,
                  onChange: (e) => update("metaDescription", e.target.value),
                  placeholder: "SEO meta description (max 160 chars)\\u2026",
                  className: "w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "data-ocid": "admin.blog.meta_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "blog-keyword",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: "Focus Keyword"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "blog-keyword",
                  value: form.focusKeyword,
                  onChange: (e) => update("focusKeyword", e.target.value),
                  placeholder: "e.g. kedarkantha trek 2026",
                  "data-ocid": "admin.blog.keyword_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "blog-content",
                  className: "text-sm font-medium text-foreground block mb-1",
                  children: [
                    "Content ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "(Markdown supported)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "blog-content",
                  rows: 16,
                  value: form.content,
                  onChange: (e) => update("content", e.target.value),
                  placeholder: "Write your post content here\\u2026 ## Headings and **bold** are supported.",
                  className: "w-full px-3 py-2 rounded-md border border-input bg-background text-sm font-mono resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring leading-relaxed",
                  "data-ocid": "admin.blog.content_editor"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSchedule && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-amber-50 border border-amber-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "blog-schedule-dt",
                      className: "text-sm font-semibold text-amber-800 block mb-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 inline mr-1" }),
                        "Schedule Publish Date & Time"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "blog-schedule-dt",
                      type: "datetime-local",
                      value: form.scheduleAt,
                      onChange: (e) => update("scheduleAt", e.target.value),
                      min: new Date(Date.now() + 6e4).toISOString().slice(0, 16),
                      className: "w-full h-9 px-3 rounded-md border border-amber-300 bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                      "data-ocid": "admin.blog.schedule_datetime_input"
                    }
                  )
                ] })
              }
            ) }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2",
                "data-ocid": "admin.blog.editor.error_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 flex-shrink-0" }),
                  error
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 px-6 py-4 border-t border-border bg-card flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary/5",
                onClick: handleSaveDraft,
                disabled: saving,
                "data-ocid": "admin.blog.save_draft_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mr-1.5" }),
                  " Save Draft"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                onClick: handlePublishNow,
                disabled: saving,
                "data-ocid": "admin.blog.publish_now_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-1.5" }),
                  " Publish Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "bg-amber-500 hover:bg-amber-600 text-white",
                onClick: () => {
                  if (showSchedule && form.scheduleAt) {
                    handleSchedule();
                  } else {
                    setShowSchedule((v) => !v);
                  }
                },
                disabled: saving,
                "data-ocid": "admin.blog.schedule_toggle_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1.5" }),
                  showSchedule && form.scheduleAt ? "Confirm Schedule" : "Schedule"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                onClick: onClose,
                disabled: saving,
                "data-ocid": "admin.blog.cancel_button",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function AdminBlogScheduler() {
  const { actor, isFetching } = useActor(createActor);
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [activeTab, setActiveTab] = reactExports.useState("drafts");
  const [editorPost, setEditorPost] = reactExports.useState(void 0);
  const [saving, setSaving] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(null);
  const toastTimer = reactExports.useRef(null);
  function showToast(msg, ok = true) {
    setToast({ msg, ok });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }
  const loadPosts = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const all = await actor.getAllAdminBlogPosts();
      setPosts(all);
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    if (actor && !isFetching) loadPosts();
  }, [actor, isFetching, loadPosts]);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      if (actor) loadPosts();
    }, 6e4);
    return () => clearInterval(id);
  }, [actor, loadPosts]);
  const drafts = posts.filter((p) => p.status === BlogPostStatus.draft);
  const scheduled = posts.filter((p) => p.status === BlogPostStatus.scheduled);
  const published = posts.filter((p) => p.status === BlogPostStatus.published);
  const visiblePosts = activeTab === "drafts" ? drafts : activeTab === "scheduled" ? scheduled : published;
  async function handleSaveDraft(form, postId) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (postId !== void 0) {
        await actor.updateAdminBlogPost(
          postId,
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
        showToast("Draft updated successfully.");
      } else {
        await actor.createAdminBlogPost(
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
        showToast("Draft created successfully.");
      }
      await loadPosts();
      setEditorPost(void 0);
    } catch {
      showToast("Failed to save draft.", false);
    } finally {
      setSaving(false);
    }
  }
  async function handlePublishNow(form, postId) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
      let id = postId;
      if (id !== void 0) {
        await actor.updateAdminBlogPost(
          id,
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
      } else {
        const res = await actor.createAdminBlogPost(
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
        if (res.__kind__ === "ok") {
          id = res.ok;
        } else {
          showToast(`Error: ${res.err}`, false);
          return;
        }
      }
      if (id !== void 0) {
        await actor.publishAdminBlogPost(id);
        showToast("Post published successfully! 🎉");
        setActiveTab("published");
      }
      await loadPosts();
      setEditorPost(void 0);
    } catch {
      showToast("Failed to publish post.", false);
    } finally {
      setSaving(false);
    }
  }
  async function handleScheduleFromEditor(form, postId) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
      let id = postId;
      if (id !== void 0) {
        await actor.updateAdminBlogPost(
          id,
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
      } else {
        const res = await actor.createAdminBlogPost(
          form.title,
          form.slug,
          form.excerpt,
          form.content,
          form.heroImageUrl,
          form.author,
          form.category,
          tags,
          form.metaDescription,
          form.focusKeyword
        );
        if (res.__kind__ === "ok") {
          id = res.ok;
        } else {
          showToast(`Error: ${res.err}`, false);
          return;
        }
      }
      if (id !== void 0 && form.scheduleAt) {
        const dtNs = BigInt(new Date(form.scheduleAt).getTime()) * BigInt(1e6);
        await actor.scheduleAdminBlogPost(id, dtNs);
        showToast("Post scheduled successfully! ⏰");
        setActiveTab("scheduled");
      }
      await loadPosts();
      setEditorPost(void 0);
    } catch {
      showToast("Failed to schedule post.", false);
    } finally {
      setSaving(false);
    }
  }
  async function handlePublishDirect(post) {
    if (!actor) return;
    setSaving(true);
    try {
      await actor.publishAdminBlogPost(post.id);
      showToast(`"${post.title.slice(0, 40)}" published!`);
      setActiveTab("published");
      await loadPosts();
    } catch {
      showToast("Failed to publish.", false);
    } finally {
      setSaving(false);
    }
  }
  async function handleDelete(post) {
    if (!window.confirm(
      `Delete "${post.title.slice(0, 60)}"? This cannot be undone.`
    ))
      return;
    if (!actor) return;
    setSaving(true);
    try {
      await actor.deleteAdminBlogPost(post.id);
      showToast("Post deleted.");
      await loadPosts();
    } catch {
      showToast("Failed to delete.", false);
    } finally {
      setSaving(false);
    }
  }
  const tabs = [
    { id: "drafts", label: "Drafts", count: drafts.length, icon: FileText },
    {
      id: "scheduled",
      label: "Scheduled",
      count: scheduled.length,
      icon: Clock
    },
    {
      id: "published",
      label: "Published",
      count: published.length,
      icon: CircleCheck
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "admin.blog.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Blog Post Scheduler" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          posts.length,
          " total post",
          posts.length !== 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          className: "bg-primary hover:bg-primary/90 text-primary-foreground",
          onClick: () => setEditorPost(null),
          "data-ocid": "admin.blog.new_post_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            " New Post"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 border-b border-border", role: "tablist", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": activeTab === tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
        "data-ocid": `admin.blog.tab.${tab.id}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "w-4 h-4" }),
          tab.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs px-1.5 py-0.5 rounded-full font-semibold ${activeTab === tab.id ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`,
              children: tab.count
            }
          )
        ]
      },
      tab.id
    )) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-xl" }, n)) }) : visiblePosts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "admin.blog.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-medium", children: [
        "No ",
        activeTab,
        " posts yet"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: activeTab === "drafts" ? 'Click "New Post" to start writing.' : activeTab === "scheduled" ? "No posts scheduled for auto-publish." : "No posts published yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "mt-5",
          onClick: () => setEditorPost(null),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            " New Post"
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visiblePosts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PostRow,
      {
        post,
        index: i,
        onEdit: (p) => setEditorPost(p),
        onPublish: handlePublishDirect,
        onDelete: handleDelete,
        onSchedule: post.status === BlogPostStatus.draft ? (p) => setEditorPost(p) : void 0,
        isBusy: saving
      },
      String(post.id)
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: editorPost !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      BlogEditorPanel,
      {
        post: editorPost,
        onClose: () => setEditorPost(void 0),
        onSaveDraft: handleSaveDraft,
        onPublishNow: handlePublishNow,
        onSchedule: handleScheduleFromEditor,
        saving
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: toast && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40 },
        className: `fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-sm font-medium ${toast.ok ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`,
        "data-ocid": "admin.blog.toast",
        children: [
          toast.ok ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
          toast.msg
        ]
      }
    ) })
  ] });
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const ADMIN_PIN = "globaltrek2026";
function StarRow({ rating, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-32 text-muted-foreground truncate", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `w-3 h-3 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
      },
      s
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      rating,
      "/5"
    ] })
  ] });
}
function StatusBadge({ status }) {
  const map = {
    confirmed: "bg-emerald-100 text-emerald-800",
    Confirmed: "bg-emerald-100 text-emerald-800",
    pending: "bg-amber-100 text-amber-800",
    Pending: "bg-amber-100 text-amber-800",
    cancelled: "bg-red-100 text-red-800",
    Cancelled: "bg-red-100 text-red-800",
    approved: "bg-emerald-100 text-emerald-800",
    waiting: "bg-amber-100 text-amber-800",
    Waiting: "bg-amber-100 text-amber-800",
    notified: "bg-blue-100 text-blue-800",
    Notified: "bg-blue-100 text-blue-800"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `px-2 py-0.5 rounded-full text-xs font-medium ${map[status] ?? "bg-muted text-muted-foreground"}`,
      children: status
    }
  );
}
function LoadingSkeleton({ rows = 3 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Skeleton,
    {
      className: "h-24 w-full rounded-xl"
    },
    `skeleton-row-${i + 1}-of-${rows}`
  )) });
}
function PinGate({ onUnlock }) {
  const [pin, setPin] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem("admin_auth", "1");
      onUnlock();
    } else {
      setError("Incorrect PIN. Authorized staff only.");
      setPin("");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      className: "w-full max-w-sm",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-2xl", children: "Admin Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Global Trek — Authorized Staff Only" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  className: "text-sm font-medium text-foreground",
                  htmlFor: "admin-pin",
                  children: "Enter Admin PIN"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "admin-pin",
                  type: "password",
                  placeholder: "••••••••••••",
                  value: pin,
                  onChange: (e) => {
                    setPin(e.target.value);
                    setError("");
                  },
                  className: "mt-1",
                  "data-ocid": "admin.pin_input",
                  autoFocus: true
                }
              )
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-destructive text-sm",
                "data-ocid": "admin.error_state",
                children: error
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                "data-ocid": "admin.submit_button",
                children: "Unlock Admin Panel"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/",
              className: "text-sm text-muted-foreground hover:text-foreground underline",
              children: "← Back to Site"
            }
          ) })
        ] })
      ] })
    }
  ) });
}
function DashboardTab({
  pendingPhotos,
  pendingReviews,
  bookings,
  onApproveAllPhotos,
  onApproveAllReviews
}) {
  const stats = [
    {
      label: "Pending Photos",
      value: pendingPhotos.length,
      icon: Camera,
      color: "text-blue-600"
    },
    {
      label: "Pending Reviews",
      value: pendingReviews.length,
      icon: Star,
      color: "text-amber-600"
    },
    {
      label: "Total Bookings",
      value: bookings.length,
      icon: Calendar,
      color: "text-emerald-600"
    },
    {
      label: "Total Revenue",
      value: `₹${bookings.reduce((s, b) => s + Number(b.totalAmount), 0).toLocaleString("en-IN")}`,
      icon: BookOpen,
      color: "text-primary"
    }
  ];
  const recentBookings = [...bookings].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Welcome, Admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Global Trek Admin Dashboard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mt-1 ${s.color}`, children: s.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `w-8 h-8 ${s.color} opacity-20` })
        ] }) }) }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Quick Actions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: onApproveAllPhotos,
                className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                disabled: pendingPhotos.length === 0,
                "data-ocid": "admin.approve_all_photos_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 mr-2" }),
                  "Approve All Pending Photos (",
                  pendingPhotos.length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: onApproveAllReviews,
                variant: "outline",
                disabled: pendingReviews.length === 0,
                "data-ocid": "admin.approve_all_reviews_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 mr-2" }),
                  "Approve All Pending Reviews (",
                  pendingReviews.length,
                  ")"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Recent Bookings" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: recentBookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No bookings yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentBookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "py-3 flex items-center justify-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
                    "New booking — ",
                    b.contactEmail
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    b.trekSlug,
                    " · ",
                    b.batchDate
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: b.status })
              ]
            },
            b.id
          )) }) })
        ] })
      ]
    },
    "dashboard"
  );
}
function PhotoApprovalsTab({
  photos,
  onApprove,
  onReject,
  loading
}) {
  const [filter, setFilter] = reactExports.useState("pending");
  const filtered = filter === "all" ? photos : photos.filter((p) => p.status.toLowerCase() === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Community Photo Approvals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              photos.filter((p) => p.status === "pending").length,
              " pending approval"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                for (const p of photos.filter((ph) => ph.status === "pending")) {
                  onApprove(p.id);
                }
              },
              className: "bg-primary hover:bg-primary/90 text-primary-foreground",
              disabled: photos.filter((p) => p.status === "pending").length === 0,
              "data-ocid": "admin.photos.approve_all_button",
              children: "Approve All Pending"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", role: "tablist", children: ["all", "pending", "approved", "rejected"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": filter === f,
            onClick: () => setFilter(f),
            className: `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
            "data-ocid": `admin.photos.filter.${f}`,
            children: f.charAt(0).toUpperCase() + f.slice(1)
          },
          f
        )) }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, { rows: 3 }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "admin.photos.empty_state", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            "No ",
            filter === "all" ? "" : filter,
            " photos to review"
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: filtered.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { delay: i * 0.05 },
            "data-ocid": `admin.photos.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-muted relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: photo.storageUrl,
                    alt: photo.caption,
                    className: "w-full h-full object-cover",
                    onError: (e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: photo.status }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: photo.uploaderName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: photo.uploaderEmail }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  photo.trekSlug,
                  " · ",
                  photo.dateOfTrek
                ] }),
                photo.caption && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground italic line-clamp-2", children: [
                  '"',
                  photo.caption,
                  '"'
                ] }),
                photo.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs",
                      onClick: () => onApprove(photo.id),
                      "data-ocid": `admin.photos.approve_button.${i + 1}`,
                      children: "✓ Approve"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "flex-1 border-red-300 text-red-600 hover:bg-red-50 text-xs",
                      onClick: () => onReject(photo.id),
                      "data-ocid": `admin.photos.reject_button.${i + 1}`,
                      children: "✗ Reject"
                    }
                  )
                ] })
              ] })
            ] })
          },
          photo.id
        )) })
      ]
    },
    "photos"
  );
}
function ReviewApprovalsTab({
  reviews,
  onApprove,
  onReject,
  loading
}) {
  const [trekFilter, setTrekFilter] = reactExports.useState("all");
  const [expanded, setExpanded] = reactExports.useState(/* @__PURE__ */ new Set());
  const treks = Array.from(new Set(reviews.map((r) => r.trekId)));
  const filtered = trekFilter === "all" ? reviews : reviews.filter((r) => r.trekId === trekFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Community Review Approvals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              reviews.length,
              " pending review"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground",
              value: trekFilter,
              onChange: (e) => setTrekFilter(e.target.value),
              "data-ocid": "admin.reviews.trek_filter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Treks" }),
                treks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              ]
            }
          )
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, { rows: 4 }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16",
            "data-ocid": "admin.reviews.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No pending reviews to review" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.map((review, i) => {
          const isExpanded = expanded.has(review.id);
          const longText = review.reviewText.length > 200;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, scale: 0.97 },
              transition: { delay: i * 0.04 },
              "data-ocid": `admin.reviews.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: review.reviewerName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      review.reviewerCity,
                      " · ",
                      review.trekId
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Star,
                    {
                      className: `w-4 h-4 ${s <= Number(review.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
                    },
                    s
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRow, { rating: Number(review.rating), label: "Overall" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `leading-relaxed ${!isExpanded && longText ? "line-clamp-3" : ""}`,
                      children: review.reviewText
                    }
                  ),
                  longText && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-primary text-xs mt-1 underline hover:no-underline",
                      onClick: () => {
                        const next = new Set(expanded);
                        if (isExpanded) next.delete(review.id);
                        else next.add(review.id);
                        setExpanded(next);
                      },
                      children: isExpanded ? "Show less" : "Read more"
                    }
                  )
                ] }),
                !review.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "bg-emerald-600 hover:bg-emerald-700 text-white",
                      onClick: () => onApprove(review.id),
                      "data-ocid": `admin.reviews.approve_button.${i + 1}`,
                      children: "✓ Approve"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "border-red-300 text-red-600 hover:bg-red-50",
                      onClick: () => onReject(review.id),
                      "data-ocid": `admin.reviews.reject_button.${i + 1}`,
                      children: "✗ Reject"
                    }
                  )
                ] }),
                review.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-100 text-emerald-800 text-xs", children: "Already Approved" })
              ] }) })
            },
            review.id
          );
        }) })
      ]
    },
    "reviews"
  );
}
function WaitlistTab() {
  const { actor } = useActor(createActor);
  const [entries, setEntries] = reactExports.useState([
    {
      id: "w1",
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "+91-9876543210",
      trekSlug: "kedarkantha",
      batchDate: "Dec 30, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 864e5 * 2
    },
    {
      id: "w2",
      name: "Arjun Kapoor",
      email: "arjun@gmail.com",
      phone: "+91-9988776655",
      trekSlug: "kedarkantha",
      batchDate: "Dec 30, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 864e5
    },
    {
      id: "w3",
      name: "Nisha Patel",
      email: "nisha@gmail.com",
      phone: "+91-9123456789",
      trekSlug: "hampta-pass",
      batchDate: "Jun 20, 2026",
      status: "Notified",
      joinedAt: Date.now() - 864e5 * 5
    },
    {
      id: "w4",
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      phone: "+91-9012345678",
      trekSlug: "hampta-pass",
      batchDate: "Jun 20, 2026",
      status: "Waiting",
      joinedAt: Date.now() - 36e5 * 4
    }
  ]);
  function formatTimeAgo(ts) {
    const diff = Date.now() - ts;
    const days = Math.floor(diff / 864e5);
    const hours = Math.floor(diff / 36e5);
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    return "Just now";
  }
  function notify(id) {
    setEntries(
      (prev) => prev.map(
        (e) => e.id === id ? { ...e, status: "Notified" } : e
      )
    );
  }
  function remove(id) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }
  const groups = entries.reduce((acc, e) => {
    const key = `${e.trekSlug}__${e.batchDate}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(e);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Waitlist Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
            entries.length,
            " total people across ",
            Object.keys(groups).length,
            " ",
            "batches"
          ] })
        ] }),
        entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16",
            "data-ocid": "admin.waitlist.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No active waitlists" })
            ]
          }
        ) : Object.entries(groups).map(([key, groupEntries]) => {
          const [trek, batch] = key.split("__");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base", children: [
                trek.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
                " ",
                "— ",
                batch,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-normal text-muted-foreground", children: [
                  "(",
                  groupEntries.length,
                  " waiting)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "text-xs h-7 border-primary/40 text-primary hover:bg-primary/10",
                    onClick: async () => {
                      const trekName = trek.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                      try {
                        await (actor == null ? void 0 : actor.notifyWaitlistBatch(
                          trekName,
                          batch,
                          `https://globaltrek.in/treks/${trek}`
                        ));
                      } catch {
                      }
                    },
                    "data-ocid": "admin.waitlist.notify_all_button",
                    children: "Notify All (In-App)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: "Email notifications available with plan upgrade" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                "#",
                "Name",
                "Email",
                "Phone",
                "Joined",
                "Status",
                "Action"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "text-left px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: groupEntries.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  "data-ocid": `admin.waitlist.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: idx + 1 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: entry.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: entry.email }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: entry.phone }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: formatTimeAgo(entry.joinedAt) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: entry.status }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
                      entry.status === "Waiting" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-7",
                          onClick: () => notify(entry.id),
                          "data-ocid": `admin.waitlist.notify_button.${idx + 1}`,
                          children: "Notify"
                        }
                      ),
                      entry.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "border-emerald-400 text-emerald-700 hover:bg-emerald-50 text-xs h-7",
                          onClick: () => window.open(
                            `https://wa.me/91${entry.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                              `Hi ${entry.name}! A seat has opened on ${trek.replace(/-/g, " ").replace(
                                /\b\w/g,
                                (c) => c.toUpperCase()
                              )} (${batch}). Book now at https://globaltrek.in`
                            )}`,
                            "_blank"
                          ),
                          "data-ocid": `admin.waitlist.whatsapp_button.${idx + 1}`,
                          children: "WhatsApp"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "border-red-200 text-red-600 hover:bg-red-50 text-xs h-7",
                          onClick: () => remove(entry.id),
                          "data-ocid": `admin.waitlist.remove_button.${idx + 1}`,
                          children: "Remove"
                        }
                      )
                    ] }) })
                  ]
                },
                entry.id
              )) })
            ] }) }) })
          ] }, key);
        })
      ]
    },
    "waitlist"
  );
}
function BookingsTab({
  bookings,
  loading
}) {
  const [page, setPage] = reactExports.useState(1);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [trekFilter, setTrekFilter] = reactExports.useState("all");
  const [expandedRow, setExpandedRow] = reactExports.useState(null);
  const PER_PAGE = 20;
  const treks = Array.from(new Set(bookings.map((b) => b.trekSlug)));
  const filtered = bookings.filter((b) => {
    const statusOk = statusFilter === "all" || b.status.toLowerCase() === statusFilter.toLowerCase();
    const trekOk = trekFilter === "all" || b.trekSlug === trekFilter;
    return statusOk && trekOk;
  });
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalRevenue = bookings.reduce((s, b) => s + Number(b.totalAmount), 0);
  function exportCsv() {
    const header = [
      "Booking ID",
      "Email",
      "Phone",
      "Trek",
      "Batch",
      "Participants",
      "Amount",
      "Status",
      "Date"
    ];
    const rows = bookings.map((b) => [
      b.id,
      b.contactEmail,
      b.contactPhone,
      b.trekSlug,
      b.batchDate,
      b.participants.length,
      b.totalAmount.toString(),
      b.status,
      new Date(Number(b.createdAt) / 1e6).toLocaleDateString("en-IN")
    ]);
    const csv = [header, ...rows].map((r) => r.map(String).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `globaltrek-bookings-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "All Bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              bookings.length,
              " bookings · Total Revenue: ₹",
              totalRevenue.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: exportCsv,
              "data-ocid": "admin.bookings.export_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Export CSV"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground",
              value: trekFilter,
              onChange: (e) => {
                setTrekFilter(e.target.value);
                setPage(1);
              },
              "data-ocid": "admin.bookings.trek_filter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Treks" }),
                treks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground",
              value: statusFilter,
              onChange: (e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              },
              "data-ocid": "admin.bookings.status_filter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
              ]
            }
          )
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, { rows: 5 }) : paged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16",
            "data-ocid": "admin.bookings.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No bookings found" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 sticky top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
              "Booking ID",
              "Trekker",
              "Trek",
              "Batch",
              "Participants",
              "Amount",
              "Status",
              "Date",
              ""
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: paged.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "hover:bg-muted/30 transition-colors",
                  "data-ocid": `admin.bookings.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: [
                      b.id.slice(0, 10),
                      "…"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: b.contactEmail }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: b.contactPhone })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: b.trekSlug }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground whitespace-nowrap", children: b.batchDate }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center text-foreground", children: b.participants.length }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-medium text-foreground", children: [
                      "₹",
                      Number(b.totalAmount).toLocaleString("en-IN")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: b.status }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground whitespace-nowrap", children: new Date(
                      Number(b.createdAt) / 1e6
                    ).toLocaleDateString("en-IN") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setExpandedRow(expandedRow === b.id ? null : b.id),
                        className: "text-primary hover:text-primary/80 flex items-center gap-1 text-xs",
                        "data-ocid": `admin.bookings.expand_button.${i + 1}`,
                        children: [
                          expandedRow === b.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
                          "View"
                        ]
                      }
                    ) })
                  ]
                },
                b.id
              ),
              expandedRow === b.id && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "px-4 py-4 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Payment Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: b.paymentType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Amount Paid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-foreground", children: [
                    "₹",
                    Number(b.paidAmount).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Promo Code" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: b.promoCode || "—" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Participants" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: b.participants.map((p) => `${p.firstName} ${p.lastName}`).join(", ") || "—" })
                ] })
              ] }) }) }, `${b.id}-detail`)
            ] })) })
          ] }) }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Page ",
              page,
              " of ",
              totalPages
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  disabled: page === 1,
                  onClick: () => setPage((p) => p - 1),
                  "data-ocid": "admin.bookings.pagination_prev",
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  disabled: page === totalPages,
                  onClick: () => setPage((p) => p + 1),
                  "data-ocid": "admin.bookings.pagination_next",
                  children: "Next"
                }
              )
            ] })
          ] })
        ] })
      ]
    },
    "bookings"
  );
}
function AdminPanel() {
  var _a;
  const { actor, isFetching } = useActor(createActor);
  const [authenticated, setAuthenticated] = reactExports.useState(
    sessionStorage.getItem("admin_auth") === "1"
  );
  const [activeTab, setActiveTab] = reactExports.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [photos, setPhotos] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [bookings, setBookings] = reactExports.useState([]);
  const [loadingPhotos, setLoadingPhotos] = reactExports.useState(false);
  const [loadingReviews, setLoadingReviews] = reactExports.useState(false);
  const [loadingBookings, setLoadingBookings] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!authenticated || !actor || isFetching) return;
    async function loadAll() {
      if (!actor) return;
      setLoadingPhotos(true);
      setLoadingReviews(true);
      setLoadingBookings(true);
      try {
        const p = await actor.getAllPendingPhotos();
        setPhotos(p);
      } catch {
        setPhotos([]);
      } finally {
        setLoadingPhotos(false);
      }
      try {
        const r = await actor.listAllReviews();
        setReviews(r.filter((rv) => !rv.verified));
      } catch {
        setReviews([]);
      } finally {
        setLoadingReviews(false);
      }
      try {
        const b = await actor.getUserBookings("");
        setBookings(b);
      } catch {
        setBookings([]);
      } finally {
        setLoadingBookings(false);
      }
    }
    loadAll();
  }, [authenticated, actor, isFetching]);
  async function handleApprovePhoto(id) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    try {
      await (actor == null ? void 0 : actor.approveTrekPhoto(id));
    } catch {
    }
  }
  function handleRejectPhoto(id) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  }
  async function handleApproveReview(id) {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    try {
      await (actor == null ? void 0 : actor.createReview({
        ...reviews.find((r) => r.id === id),
        verified: true
      }));
    } catch {
    }
  }
  function handleRejectReview(id) {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }
  async function handleApproveAllPhotos() {
    const pending = photos.filter((p) => p.status === "pending");
    for (const p of pending) {
      await handleApprovePhoto(p.id);
    }
  }
  async function handleApproveAllReviews() {
    const pending = [...reviews];
    for (const r of pending) {
      await handleApproveReview(r.id);
    }
  }
  if (!authenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PinGate, { onUnlock: () => setAuthenticated(true) });
  }
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    {
      id: "photos",
      label: "Photo Approvals",
      icon: Camera,
      badge: photos.length
    },
    {
      id: "reviews",
      label: "Review Approvals",
      icon: Star,
      badge: reviews.length
    },
    { id: "waitlist", label: "Waitlist", icon: Users },
    {
      id: "bookings",
      label: "Bookings",
      icon: Calendar,
      badge: bookings.length
    },
    { id: "blog", label: "Blog Scheduler", icon: SquarePen }
  ];
  const Sidebar = /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex flex-col h-full bg-card border-r border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground", children: "Global Trek" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Admin Panel" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 space-y-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          setActiveTab(item.id);
          setSidebarOpen(false);
        },
        className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
        "data-ocid": `admin.nav.${item.id}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: item.label }),
          item.badge !== void 0 && item.badge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center", children: item.badge })
        ]
      },
      item.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/",
        className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 rotate-180" }),
          "Back to Site"
        ]
      }
    ) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex", "data-ocid": "admin.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex flex-col w-60 flex-shrink-0 h-screen sticky top-0", children: Sidebar }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-40 md:hidden",
        onClick: () => setSidebarOpen(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { x: -240 },
              animate: { x: 0 },
              exit: { x: -240 },
              className: "absolute left-0 top-0 h-full w-60",
              onClick: (e) => e.stopPropagation(),
              children: Sidebar
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-3 px-4 py-3 bg-card border-b border-border sticky top-0 z-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSidebarOpen(true),
            className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
            "aria-label": "Open navigation",
            "data-ocid": "admin.mobile_menu_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "w-5 h-5 text-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: ((_a = navItems.find((n) => n.id === activeTab)) == null ? void 0 : _a.label) ?? "Admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              sessionStorage.removeItem("admin_auth");
              setAuthenticated(false);
            },
            className: "ml-auto p-1.5 rounded-lg hover:bg-muted transition-colors",
            "aria-label": "Lock admin panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-5 md:p-8 max-w-7xl w-full mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          DashboardTab,
          {
            pendingPhotos: photos,
            pendingReviews: reviews,
            bookings,
            onApproveAllPhotos: handleApproveAllPhotos,
            onApproveAllReviews: handleApproveAllReviews
          }
        ),
        activeTab === "photos" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoApprovalsTab,
          {
            photos,
            onApprove: handleApprovePhoto,
            onReject: handleRejectPhoto,
            loading: loadingPhotos
          }
        ),
        activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReviewApprovalsTab,
          {
            reviews,
            onApprove: handleApproveReview,
            onReject: handleRejectReview,
            loading: loadingReviews
          }
        ),
        activeTab === "waitlist" && /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistTab, {}),
        activeTab === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsx(BookingsTab, { bookings, loading: loadingBookings }),
        activeTab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminBlogScheduler, {})
      ] }) })
    ] })
  ] });
}
export {
  AdminPanel as default
};
