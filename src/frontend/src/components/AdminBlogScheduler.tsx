import { createActor } from "@/backend";
import type { AdminBlogPost } from "@/backend";
import { BlogPostStatus } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Clock,
  Edit2,
  Eye,
  FileText,
  Plus,
  Send,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const CATEGORIES = [
  "Trek Report",
  "Trek Guide",
  "Yatra Guide",
  "Gear & Tips",
  "Health & Safety",
  "Hidden Gem",
  "News",
];

type BlogTab = "drafts" | "scheduled" | "published";

interface PostForm {
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  heroImageUrl: string;
  tags: string;
  metaDescription: string;
  focusKeyword: string;
  content: string;
  scheduleAt: string;
}

const EMPTY_FORM: PostForm = {
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
  scheduleAt: "",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function StatusPill({ status }: { status: BlogPostStatus }) {
  const map: Record<
    BlogPostStatus,
    { bg: string; text: string; label: string }
  > = {
    [BlogPostStatus.draft]: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "Draft",
    },
    [BlogPostStatus.scheduled]: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      label: "Scheduled",
    },
    [BlogPostStatus.published]: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      label: "Published",
    },
    [BlogPostStatus.archived]: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "Archived",
    },
  };
  const s = map[status] ?? map[BlogPostStatus.draft];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}
    >
      {s.label}
    </span>
  );
}

function formatDate(ns: bigint): string {
  return new Date(Number(ns) / 1_000_000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function PostRow({
  post,
  index,
  onEdit,
  onPublish,
  onDelete,
  onSchedule,
  isBusy,
}: {
  post: AdminBlogPost;
  index: number;
  onEdit: (post: AdminBlogPost) => void;
  onPublish: (post: AdminBlogPost) => void;
  onDelete: (post: AdminBlogPost) => void;
  onSchedule?: (post: AdminBlogPost) => void;
  isBusy: boolean;
}) {
  const dateLabel =
    post.status === BlogPostStatus.published && post.publishedAt
      ? formatDate(post.publishedAt)
      : post.status === BlogPostStatus.scheduled && post.publishAt
        ? formatDate(post.publishAt)
        : formatDate(post.createdAt);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: index * 0.04 }}
      className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
      data-ocid={`admin.blog.post.item.${index + 1}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <StatusPill status={post.status} />
          <span className="text-xs text-muted-foreground font-mono">
            {post.category}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-1">
          {post.title.length > 60
            ? `${post.title.slice(0, 60)}\u2026`
            : post.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          <span className="font-medium">{post.author}</span>
          {" \u00b7 "}
          {post.status === BlogPostStatus.scheduled
            ? `Scheduled: ${dateLabel}`
            : post.status === BlogPostStatus.published
              ? `Published: ${dateLabel}`
              : `Created: ${dateLabel}`}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          type="button"
          title="Edit"
          onClick={() => onEdit(post)}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          data-ocid={`admin.blog.edit_button.${index + 1}`}
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          title="Preview"
          onClick={() => window.open(`/blog/preview/${post.slug}`, "_blank")}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          data-ocid={`admin.blog.preview_button.${index + 1}`}
        >
          <Eye className="w-4 h-4" />
        </button>
        {post.status !== BlogPostStatus.published && (
          <button
            type="button"
            title="Publish Now"
            onClick={() => onPublish(post)}
            disabled={isBusy}
            className="p-1.5 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-600 disabled:opacity-50"
            data-ocid={`admin.blog.publish_button.${index + 1}`}
          >
            <Send className="w-4 h-4" />
          </button>
        )}
        {post.status === BlogPostStatus.draft && onSchedule && (
          <button
            type="button"
            title="Schedule"
            onClick={() => onSchedule(post)}
            className="p-1.5 rounded-lg hover:bg-amber-50 transition-colors text-amber-600"
            data-ocid={`admin.blog.schedule_button.${index + 1}`}
          >
            <Clock className="w-4 h-4" />
          </button>
        )}
        <button
          type="button"
          title="Delete"
          onClick={() => onDelete(post)}
          disabled={isBusy}
          className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-red-500 disabled:opacity-50"
          data-ocid={`admin.blog.delete_button.${index + 1}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function BlogEditorPanel({
  post,
  onClose,
  onSaveDraft,
  onPublishNow,
  onSchedule,
  saving,
}: {
  post: AdminBlogPost | null;
  onClose: () => void;
  onSaveDraft: (form: PostForm, postId?: bigint) => Promise<void>;
  onPublishNow: (form: PostForm, postId?: bigint) => Promise<void>;
  onSchedule: (form: PostForm, postId?: bigint) => Promise<void>;
  saving: boolean;
}) {
  const isEdit = post !== null;
  const [form, setForm] = useState<PostForm>(
    post
      ? {
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
          scheduleAt: "",
        }
      : { ...EMPTY_FORM },
  );
  const [showSchedule, setShowSchedule] = useState(false);
  const [error, setError] = useState("");

  function update(key: keyof PostForm, val: string) {
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
    await onSaveDraft(form, post?.id);
  }

  async function handlePublishNow() {
    if (!form.title.trim() || !form.content.trim()) {
      setError("Title and content are required.");
      return;
    }
    await onPublishNow(form, post?.id);
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
    await onSchedule(form, post?.id);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ x: 640 }}
        animate={{ x: 0 }}
        exit={{ x: 640 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-full max-w-[600px] bg-background border-l border-border shadow-2xl z-50 flex flex-col"
        aria-modal="true"
        aria-label="Blog Post Editor"
        data-ocid="admin.blog.editor"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card flex-shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="font-display font-bold text-foreground">
              {isEdit ? "Edit Post" : "New Blog Post"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close editor"
            data-ocid="admin.blog.editor.close_button"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          <div>
            <label
              htmlFor="blog-title"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              id="blog-title"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Enter blog post title\u2026"
              className="text-base"
              data-ocid="admin.blog.title_input"
            />
          </div>

          <div>
            <label
              htmlFor="blog-slug"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Slug
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                /blog/
              </span>
              <Input
                id="blog-slug"
                value={form.slug}
                onChange={(e) => update("slug", slugify(e.target.value))}
                placeholder="url-friendly-slug"
                className="font-mono text-sm"
                data-ocid="admin.blog.slug_input"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="blog-category"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Category
              </label>
              <select
                id="blog-category"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                data-ocid="admin.blog.category_select"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="blog-author"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Author
              </label>
              <Input
                id="blog-author"
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                placeholder="Global Trek Team"
                data-ocid="admin.blog.author_input"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="blog-excerpt"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Excerpt
            </label>
            <textarea
              id="blog-excerpt"
              rows={2}
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="Short summary shown in card listings\u2026"
              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              data-ocid="admin.blog.excerpt_textarea"
            />
          </div>

          <div>
            <label
              htmlFor="blog-hero-img"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Hero Image URL
            </label>
            <Input
              id="blog-hero-img"
              value={form.heroImageUrl}
              onChange={(e) => update("heroImageUrl", e.target.value)}
              placeholder="https://images.unsplash.com/\u2026"
              data-ocid="admin.blog.hero_image_input"
            />
          </div>

          <div>
            <label
              htmlFor="blog-tags"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Tags{" "}
              <span className="text-xs text-muted-foreground">
                (comma-separated)
              </span>
            </label>
            <Input
              id="blog-tags"
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
              placeholder="himalaya, trekking, uttarakhand"
              data-ocid="admin.blog.tags_input"
            />
          </div>

          <div>
            <label
              htmlFor="blog-meta"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Meta Description{" "}
              <span
                className={`text-xs ${form.metaDescription.length > 160 ? "text-red-500" : "text-muted-foreground"}`}
              >
                {form.metaDescription.length}/160
              </span>
            </label>
            <textarea
              id="blog-meta"
              rows={1}
              maxLength={160}
              value={form.metaDescription}
              onChange={(e) => update("metaDescription", e.target.value)}
              placeholder="SEO meta description (max 160 chars)\u2026"
              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              data-ocid="admin.blog.meta_textarea"
            />
          </div>

          <div>
            <label
              htmlFor="blog-keyword"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Focus Keyword
            </label>
            <Input
              id="blog-keyword"
              value={form.focusKeyword}
              onChange={(e) => update("focusKeyword", e.target.value)}
              placeholder="e.g. kedarkantha trek 2026"
              data-ocid="admin.blog.keyword_input"
            />
          </div>

          <div>
            <label
              htmlFor="blog-content"
              className="text-sm font-medium text-foreground block mb-1"
            >
              Content <span className="text-red-500">*</span>{" "}
              <span className="text-xs text-muted-foreground">
                (Markdown supported)
              </span>
            </label>
            <textarea
              id="blog-content"
              rows={16}
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              placeholder="Write your post content here\u2026 ## Headings and **bold** are supported."
              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm font-mono resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring leading-relaxed"
              data-ocid="admin.blog.content_editor"
            />
          </div>

          <AnimatePresence>
            {showSchedule && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <label
                    htmlFor="blog-schedule-dt"
                    className="text-sm font-semibold text-amber-800 block mb-2"
                  >
                    <Clock className="w-4 h-4 inline mr-1" />
                    Schedule Publish Date &amp; Time
                  </label>
                  <input
                    id="blog-schedule-dt"
                    type="datetime-local"
                    value={form.scheduleAt}
                    onChange={(e) => update("scheduleAt", e.target.value)}
                    min={new Date(Date.now() + 60_000)
                      .toISOString()
                      .slice(0, 16)}
                    className="w-full h-9 px-3 rounded-md border border-amber-300 bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    data-ocid="admin.blog.schedule_datetime_input"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div
              className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
              data-ocid="admin.blog.editor.error_state"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-card flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            onClick={handleSaveDraft}
            disabled={saving}
            data-ocid="admin.blog.save_draft_button"
          >
            <FileText className="w-4 h-4 mr-1.5" /> Save Draft
          </Button>
          <Button
            type="button"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handlePublishNow}
            disabled={saving}
            data-ocid="admin.blog.publish_now_button"
          >
            <Send className="w-4 h-4 mr-1.5" /> Publish Now
          </Button>
          <Button
            type="button"
            className="bg-amber-500 hover:bg-amber-600 text-white"
            onClick={() => {
              if (showSchedule && form.scheduleAt) {
                handleSchedule();
              } else {
                setShowSchedule((v) => !v);
              }
            }}
            disabled={saving}
            data-ocid="admin.blog.schedule_toggle_button"
          >
            <Clock className="w-4 h-4 mr-1.5" />
            {showSchedule && form.scheduleAt ? "Confirm Schedule" : "Schedule"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={saving}
            data-ocid="admin.blog.cancel_button"
          >
            Cancel
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export function AdminBlogScheduler() {
  const { actor, isFetching } = useActor(createActor);
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<BlogTab>("drafts");
  const [editorPost, setEditorPost] = useState<
    AdminBlogPost | null | undefined
  >(undefined);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(msg: string, ok = true) {
    setToast({ msg, ok });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }

  const loadPosts = useCallback(async () => {
    if (!actor) return;
    try {
      const all = await actor.getAllAdminBlogPosts();
      setPosts(all);
    } finally {
      setLoading(false);
    }
  }, [actor]);

  useEffect(() => {
    if (actor && !isFetching) loadPosts();
  }, [actor, isFetching, loadPosts]);

  useEffect(() => {
    const id = setInterval(() => {
      if (actor) loadPosts();
    }, 60_000);
    return () => clearInterval(id);
  }, [actor, loadPosts]);

  const drafts = posts.filter((p) => p.status === BlogPostStatus.draft);
  const scheduled = posts.filter((p) => p.status === BlogPostStatus.scheduled);
  const published = posts.filter((p) => p.status === BlogPostStatus.published);
  const visiblePosts =
    activeTab === "drafts"
      ? drafts
      : activeTab === "scheduled"
        ? scheduled
        : published;

  async function handleSaveDraft(form: PostForm, postId?: bigint) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      if (postId !== undefined) {
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
          form.focusKeyword,
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
          form.focusKeyword,
        );
        showToast("Draft created successfully.");
      }
      await loadPosts();
      setEditorPost(undefined);
    } catch {
      showToast("Failed to save draft.", false);
    } finally {
      setSaving(false);
    }
  }

  async function handlePublishNow(form: PostForm, postId?: bigint) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      let id = postId;
      if (id !== undefined) {
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
          form.focusKeyword,
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
          form.focusKeyword,
        );
        if (res.__kind__ === "ok") {
          id = res.ok;
        } else {
          showToast(`Error: ${res.err}`, false);
          return;
        }
      }
      if (id !== undefined) {
        await actor.publishAdminBlogPost(id);
        showToast("Post published successfully! \uD83C\uDF89");
        setActiveTab("published");
      }
      await loadPosts();
      setEditorPost(undefined);
    } catch {
      showToast("Failed to publish post.", false);
    } finally {
      setSaving(false);
    }
  }

  async function handleScheduleFromEditor(form: PostForm, postId?: bigint) {
    if (!actor) return;
    setSaving(true);
    try {
      const tags = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      let id = postId;
      if (id !== undefined) {
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
          form.focusKeyword,
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
          form.focusKeyword,
        );
        if (res.__kind__ === "ok") {
          id = res.ok;
        } else {
          showToast(`Error: ${res.err}`, false);
          return;
        }
      }
      if (id !== undefined && form.scheduleAt) {
        const dtNs =
          BigInt(new Date(form.scheduleAt).getTime()) * BigInt(1_000_000);
        await actor.scheduleAdminBlogPost(id, dtNs);
        showToast("Post scheduled successfully! \u23F0");
        setActiveTab("scheduled");
      }
      await loadPosts();
      setEditorPost(undefined);
    } catch {
      showToast("Failed to schedule post.", false);
    } finally {
      setSaving(false);
    }
  }

  async function handlePublishDirect(post: AdminBlogPost) {
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

  async function handleDelete(post: AdminBlogPost) {
    if (
      !window.confirm(
        `Delete "${post.title.slice(0, 60)}"? This cannot be undone.`,
      )
    )
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

  const tabs: {
    id: BlogTab;
    label: string;
    count: number;
    icon: typeof BookOpen;
  }[] = [
    { id: "drafts", label: "Drafts", count: drafts.length, icon: FileText },
    {
      id: "scheduled",
      label: "Scheduled",
      count: scheduled.length,
      icon: Clock,
    },
    {
      id: "published",
      label: "Published",
      count: published.length,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-6" data-ocid="admin.blog.section">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">
            Blog Post Scheduler
          </h2>
          <p className="text-muted-foreground text-sm">
            {posts.length} total post{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button
          type="button"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setEditorPost(null)}
          data-ocid="admin.blog.new_post_button"
        >
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      <div className="flex gap-1 border-b border-border" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            data-ocid={`admin.blog.tab.${tab.id}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                activeTab === tab.id
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      ) : visiblePosts.length === 0 ? (
        <div className="text-center py-20" data-ocid="admin.blog.empty_state">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-30" />
          <p className="text-muted-foreground font-medium">
            No {activeTab} posts yet
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {activeTab === "drafts"
              ? 'Click "New Post" to start writing.'
              : activeTab === "scheduled"
                ? "No posts scheduled for auto-publish."
                : "No posts published yet."}
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-5"
            onClick={() => setEditorPost(null)}
          >
            <Plus className="w-4 h-4 mr-2" /> New Post
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {visiblePosts.map((post, i) => (
              <PostRow
                key={String(post.id)}
                post={post}
                index={i}
                onEdit={(p) => setEditorPost(p)}
                onPublish={handlePublishDirect}
                onDelete={handleDelete}
                onSchedule={
                  post.status === BlogPostStatus.draft
                    ? (p) => setEditorPost(p)
                    : undefined
                }
                isBusy={saving}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {editorPost !== undefined && (
          <BlogEditorPanel
            post={editorPost}
            onClose={() => setEditorPost(undefined)}
            onSaveDraft={handleSaveDraft}
            onPublishNow={handlePublishNow}
            onSchedule={handleScheduleFromEditor}
            saving={saving}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-sm font-medium ${
              toast.ok ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
            }`}
            data-ocid="admin.blog.toast"
          >
            {toast.ok ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
