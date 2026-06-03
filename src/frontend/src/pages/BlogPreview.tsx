import { createActor } from "@/backend";
import type { AdminBlogPost } from "@/backend";
import { Button } from "@/components/ui/button";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useParams } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Send } from "lucide-react";
import { useEffect, useState } from "react";

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "Trek Report": { bg: "#E8F5EE", text: "#145C38" },
  "Trek Guide": { bg: "#E8F5EE", text: "#145C38" },
  "Yatra Guide": { bg: "#FFF8E7", text: "#B8800A" },
  "Gear & Tips": { bg: "#F3F0FF", text: "#5B3F9E" },
  "Health & Safety": { bg: "#FFF0F0", text: "#C0392B" },
  "Hidden Gem": { bg: "#F0FAF4", text: "#1A7A4C" },
  News: { bg: "#EEF5FF", text: "#1A5C9A" },
};

function renderBody(body: string) {
  return body
    .split("\n\n")
    .filter(Boolean)
    .map((p, _i) => {
      if (p.startsWith("## ")) {
        const text = p.replace(/^##\s+/, "");
        return (
          <h2
            key={text.slice(0, 20)}
            id={text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="font-display text-2xl font-bold mt-10 mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0A2E1A",
            }}
          >
            {text}
          </h2>
        );
      }
      const parts = p.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p
          key={p.slice(0, 30)}
          className="text-muted-foreground text-base leading-[1.85] mb-5"
        >
          {parts.map((part) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong
                key={part.slice(0, 20)}
                className="text-foreground font-semibold"
              >
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
      );
    });
}

function NoIndex() {
  useEffect(() => {
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

export default function BlogPreviewPage() {
  const { slug } = useParams({ from: "/blog/preview/$slug" });
  const { actor, isFetching } = useActor(createActor);
  const [post, setPost] = useState<AdminBlogPost | null | undefined>(undefined);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
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

  if (post === undefined) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="space-y-3 w-full max-w-2xl px-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-6 bg-muted rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (post === null) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center gap-4"
        data-ocid="blog.preview.not_found"
      >
        <AlertTriangle className="w-16 h-16 text-muted-foreground" />
        <h2 className="font-display text-2xl text-foreground">
          Post Not Found
        </h2>
        <p className="text-muted-foreground">
          No post with slug "{slug}" exists.
        </p>
        <Link
          to="/admin"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Admin
        </Link>
      </div>
    );
  }

  const catColor = CAT_COLORS[post.category] ?? {
    bg: "#E8F5EE",
    text: "#145C38",
  };
  const formattedDate = new Date(
    Number(post.createdAt) / 1_000_000,
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background" data-ocid="blog.preview.page">
      <NoIndex />

      {/* Watermark */}
      <div
        className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[12vw] font-black tracking-widest uppercase select-none"
          style={{
            transform: "rotate(-35deg)",
            color: "rgba(0,0,0,0.04)",
            fontFamily: "'Playfair Display', serif",
            whiteSpace: "nowrap",
          }}
        >
          PREVIEW
        </span>
      </div>

      {/* Warning banner */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-3 px-5 py-3"
        style={{ background: "#FDE68A", borderBottom: "2px solid #F59E0B" }}
        data-ocid="blog.preview.banner"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
          <AlertTriangle className="w-4 h-4" />
          PREVIEW MODE \u2014 This post is not yet published
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handlePublishNow}
            disabled={publishing}
            data-ocid="blog.preview.publish_now_button"
          >
            <Send className="w-3.5 h-3.5 mr-1.5" /> Publish Now
          </Button>
          <Link
            to="/admin"
            className="text-xs font-medium text-amber-800 hover:text-amber-900 underline"
          >
            \u2190 Back to Admin
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-14">
        {post.heroImageUrl ? (
          <div className="relative h-80 md:h-[420px] overflow-hidden">
            <img
              src={post.heroImageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute bottom-8 left-6 right-6">
              <span
                className="inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: catColor.bg, color: catColor.text }}
              >
                {post.category}
              </span>
              <h1
                className="text-3xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h1>
            </div>
          </div>
        ) : (
          <div
            className="h-56 flex flex-col items-center justify-end pb-8 px-6"
            style={{
              background:
                "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #22A05E 100%)",
            }}
          >
            <span
              className="inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-3"
              style={{ background: catColor.bg, color: catColor.text }}
            >
              {post.category}
            </span>
            <h1
              className="text-3xl md:text-5xl font-bold text-white text-center leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {post.title}
            </h1>
          </div>
        )}
      </div>

      {/* Article meta + body */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "#145C38" }}
            >
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <span>\u00b7</span>
          <span>{formattedDate}</span>
          {post.tags.length > 0 && (
            <>
              <span>\u00b7</span>
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {post.excerpt && (
          <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 mb-8">
            {post.excerpt}
          </p>
        )}

        <article>{renderBody(post.content)}</article>

        <div className="mt-16 pb-20 border-t border-border pt-8">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
}
