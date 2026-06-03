import { type AdminBlogPost, BlogPostStatus, createActor } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { blogsData } from "@/data/blogs";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CATEGORIES = [
  "All",
  "Trek Guide",
  "Yatra Guide",
  "Trek Story",
  "Gear & Tips",
  "Health & Safety",
  "Hidden Gem",
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Trek Guide": { bg: "#E8F5EE", text: "#145C38" },
  "Yatra Guide": { bg: "#FFF8E7", text: "#B8800A" },
  "Trek Story": { bg: "#EEF5FF", text: "#1A5C9A" },
  "Gear & Tips": { bg: "#F3F0FF", text: "#5B3F9E" },
  "Health & Safety": { bg: "#FFF0F0", text: "#C0392B" },
  "Hidden Gem": { bg: "#F0FAF4", text: "#1A7A4C" },
  "Trek + Pilgrimage": { bg: "#FFF8E7", text: "#B8800A" },
  "Trek + History": { bg: "#EEF5FF", text: "#1A5C9A" },
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? { bg: "#E8F5EE", text: "#145C38" };
}

function GradientImage({
  query,
  alt,
  className,
}: { query: string; alt: string; className?: string }) {
  const colors = [
    "from-[#0A2E1A] to-[#22A05E]",
    "from-[#0A2E1A] to-[#2980B9]",
    "from-[#1A3A2A] to-[#2ECC71]",
    "from-[#1A2E3A] to-[#145C38]",
  ];
  const idx = query.length % colors.length;
  return (
    <div
      className={`bg-gradient-to-br ${colors[idx]} flex items-end p-4 ${className ?? ""}`}
    >
      <span className="text-white/60 text-xs font-mono truncate">{alt}</span>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { actor, isFetching } = useActor(createActor);
  const [canisterPosts, setCanisterPosts] = useState<AdminBlogPost[]>([]);

  useEffect(() => {
    if (!actor || isFetching) return;
    actor
      .getPublishedAdminBlogPosts()
      .then((posts) => setCanisterPosts(posts))
      .catch(() => {});
  }, [actor, isFetching]);

  const filtered =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((b) => {
          const cat = b.category.toLowerCase();
          const active = activeCategory.toLowerCase();
          return (
            cat === active || cat.includes(active.split(" ")[0].toLowerCase())
          );
        });

  return (
    <div className="bg-background min-h-screen" data-ocid="blog.page">
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #22A05E 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-5"
            style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}
          >
            <BookOpen className="w-3.5 h-3.5" /> Trek Smarter
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4 leading-tight">
            Expert Guides &amp; Stories
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Trek guides, yatra planning, safety tips, and mountain stories
            curated by our expert guides from the Himalayas.
          </p>
          <p className="mt-3 text-white/60 text-sm font-mono">
            {blogsData.length} articles · Updated for 2026
          </p>
        </div>
      </section>

      {/* Latest from Our Team — canister-published posts */}
      {canisterPosts.length > 0 && (
        <section
          className="py-12 px-4 bg-muted/30 border-b border-border"
          data-ocid="blog.latest_from_team_section"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-7 rounded-full bg-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Latest from Our Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {canisterPosts.slice(0, 6).map((post, i) => {
                const catColor = getCategoryColor(post.category);
                const formattedDate = new Date(
                  Number(post.createdAt) / 1_000_000,
                ).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                });
                return (
                  <motion.article
                    key={String(post.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.07 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                    data-ocid={`blog.team_post.item.${i + 1}`}
                  >
                    {post.heroImageUrl ? (
                      <div
                        className="relative overflow-hidden"
                        style={{ height: "200px" }}
                      >
                        <img
                          src={post.heroImageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80";
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                            style={{
                              background: catColor.bg,
                              color: catColor.text,
                            }}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative overflow-hidden"
                        style={{ height: "200px" }}
                      >
                        <GradientImage
                          query={post.category}
                          alt={post.title}
                          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                            style={{
                              background: catColor.bg,
                              color: catColor.text,
                            }}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="font-display text-lg font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ background: "#145C38" }}
                          >
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-foreground leading-none">
                              {post.author}
                            </p>
                            <p className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono mt-0.5">
                              <Calendar className="w-2.5 h-2.5" />
                              {formattedDate}
                            </p>
                          </div>
                        </div>
                        <a
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:gap-2 transition-all"
                          data-ocid={`blog.team_post.read_more.${i + 1}`}
                        >
                          Read More <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex gap-1 overflow-x-auto py-3 scrollbar-hide"
            data-ocid="blog.category_filter"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono font-semibold transition-all duration-200 whitespace-nowrap"
                style={
                  activeCategory === cat
                    ? { background: "#145C38", color: "#ffffff" }
                    : { background: "transparent", color: "#6C757D" }
                }
                data-ocid="blog.category.tab"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4" data-ocid="blog.articles_section">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground text-sm font-mono mb-8">
            Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => {
              const catColor = getCategoryColor(article.category);
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.07 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                  data-ocid={`blog.article.item.${i + 1}`}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "240px" }}
                  >
                    <GradientImage
                      query={article.imageQuery}
                      alt={article.title}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: catColor.bg,
                          color: catColor.text,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h2
                      className="font-display text-lg font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Author + Meta */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ background: "#145C38" }}
                        >
                          {article.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground leading-none">
                            {article.author}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                              <Calendar className="w-2.5 h-2.5" />
                              {new Date(article.publishDate).toLocaleDateString(
                                "en-IN",
                                { month: "short", year: "numeric" },
                              )}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                              <Clock className="w-2.5 h-2.5" />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/blog/$postId"
                        params={{ postId: article.slug }}
                        className="flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:gap-2 transition-all"
                        data-ocid={`blog.article.read_more.${i + 1}`}
                      >
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" data-ocid="blog.empty_state">
              <p className="text-4xl mb-4">📚</p>
              <h3 className="font-display text-xl text-foreground mb-2">
                No articles in this category yet
              </h3>
              <p className="text-muted-foreground text-sm">
                Check back soon — our guides are writing!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
