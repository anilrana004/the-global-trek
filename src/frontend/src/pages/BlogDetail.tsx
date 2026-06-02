import { blogsData } from "@/data/blogs";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Copy,
  Facebook,
  Share2,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

function extractHeadings(body: string): { id: string; text: string }[] {
  return body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.replace(/^##\s+/, "");
      return { id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"), text };
    });
}

function renderBody(body: string) {
  return body
    .split("\n\n")
    .filter(Boolean)
    .map((p, i) => {
      if (p.startsWith("## ")) {
        const text = p.replace(/^##\s+/, "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h2
            key={`h-${text.slice(0, 15)}`}
            id={id}
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
          key={`p-${String(i)}`}
          className="text-muted-foreground text-base leading-[1.85] mb-5"
        >
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong
                key={part.slice(0, 8) + String(j)}
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

const _articleContent: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    imageQuery: string;
    content: string[];
  }
> = {
  "kedarkantha-winter-trek": {
    title: "10 Reasons Why Kedarkantha Is India's Greatest Winter Trek",
    category: "Trek Guides",
    date: "November 2024",
    readTime: "8 min read",
    imageQuery: "kedarkantha,winter,snow,summit",
    content: [
      "Every December through March, the forests of Govind Wildlife Sanctuary transform. The oak and pine trees of Sankri carry heavy white loads. The trail from Juda Ka Talab to the base camp becomes a pristine snow corridor. And at 12,500 feet, the Kedarkantha summit reveals a dawn panorama that has made grown trekkers weep.",
      "1. THE 360° SUMMIT PANORAMA — THE FINEST ON ANY ACCESSIBLE INDIAN TREK. From the Kedarkantha summit at 3,810m, you see Swargarohini (6,252m), Bandarpunch (6,316m), Kala Nag (6,387m), Ranglana, Kedarnath Peak, and dozens of unnamed snow giants in a complete circle. No other accessible trek in India offers this range of peaks visible from a single point.",
      "2. BEGINNER-ACCESSIBLE AT ALTITUDE. The altitude gain is gradual and manageable. Day 1 at Sankri (6,400 ft), Day 2 at Juda Ka Talab (9,100 ft), Day 3 at base camp (11,250 ft), and summit at 12,500 ft. The profile is textbook acclimatization.",
      "3. THE SNOW EXPERIENCE IS REAL. Unlike some 'winter treks' that have patchy snow, Kedarkantha in December–March has 2–4 feet of trail snow. The forest camps are fully blanketed. You walk through a snow corridor for the better part of Days 2 and 3.",
      "4. JUDA KA TALAB — A FROZEN SACRED LAKE. The camp beside Juda Ka Talab (frozen in winter) is one of India's most atmospheric camping spots. Mythology says the lake was formed from Lord Shiva's tears. In winter, it becomes a mirror of ice and stars.",
      "5. GOVIND NATIONAL PARK BIODIVERSITY. Even in winter, Himalayan griffon vultures soar overhead. Musk deer tracks cross the trail. The dense temperate forest feels primeval and untouched.",
      "6. THE MILKY WAY SUMMIT CLIMB. The 2 AM wake-up for the summit push — climbing under the Milky Way with headlamps in cold silence — is one of the most memorable moments in Indian trekking. Above the tree line, no light pollution, at 11,000+ feet.",
      "7. AFFORDABILITY. Kedarkantha offers world-class Himalayan trekking at domestic India pricing. The Global Trek's packages start from ₹7,999 per person — a fraction of comparable experiences in Nepal or Bhutan.",
      "8. SANKRI BASE VILLAGE. Sankri is one of the most charming Garhwali villages — with local guesthouses, warm pahadi hospitality, and a last-village-before-the-wild feeling.",
      "9. PHOTOGRAPHY OPPORTUNITY. Every element is a photograph: the snow-laden deodar forests, the frozen lake, the base camp under stars, the orange-pink Himalayan dawn from the summit, the ocean of peaks. Kedarkantha in winter is a photographer's paradise.",
      "10. SPIRITUAL DIMENSION. The trail passes through mythology-rich terrain — Juda Ka Talab (Shiva's tears), the Govind National Park (named after a Sikh Guru), and the route to heaven believed to be near here by local Garhwali tradition.",
    ],
  },
  "char-dham-2025-guide": {
    title:
      "Char Dham Yatra 2025 — Complete Planning Guide (Dates, Budget, Tips)",
    category: "Yatra",
    date: "January 2025",
    readTime: "12 min read",
    imageQuery: "char,dham,badrinath,temple,himalaya",
    content: [
      "The Char Dham Yatra — Yamunotri, Gangotri, Kedarnath, Badrinath — is Hinduism's most complete Himalayan pilgrimage. Every year, 2–5 million pilgrims undertake this circuit. If you're planning Char Dham 2025, here is everything you need to know.",
      "OPENING DATES 2025: All four dhams typically open on Akshaya Tritiya (usually late April / early May). Kedarnath and Badrinath also have their own specific Kapaat Kholna (opening gate) rituals determined annually by temple priests at Ukhimath (for Kedarnath) and Joshimath (for Badrinath). The Global Trek will announce exact 2025 dates when officially confirmed. Closing is around Diwali / Bhai Dooj in October / November.",
      "ROUTE AND SEQUENCE: The traditional sequence is west to east: Yamunotri → Gangotri → Kedarnath → Badrinath. This follows the 'birth to liberation' spiritual arc. Total driving distance is approximately 1,600 km from Haridwar and back.",
      "BUDGET BREAKDOWN: Budget traveler (basic dharamshalas, bus transport): ₹25,000–40,000. Mid-range (comfortable hotels, shared cab): ₹50,000–80,000. Premium (The Global Trek package with private AC transport): ₹32,999–65,000 (depending on accommodation tier). Helicopter for Kedarnath adds ₹15,000–25,000 per person.",
      "PACKING LIST FOR CHAR DHAM: Light trekking shoes for Kedarnath (19km each way), comfortable walking shoes for other dhams, thermal layers for evenings, rain poncho (May gets rain), warm hat, personal medications, prescribed blood pressure medication if needed at altitude, Personal ID (Aadhaar / Passport mandatory), Yatra registration documents, cash (card machines are unreliable at all four dhams).",
      "CROWDS: May and June post-opening and September are peak season — expect queues of 4–8 hours for Kedarnath darshan. The Global Trek recommends May 1st–15th (first two weeks after opening) or October for best experience with manageable crowds.",
      "HELICOPTER VS TREK: The 19km Kedarnath trek is the only true physical challenge in Char Dham. For elderly or medically restricted pilgrims, helicopter is the recommended option (book 3–6 months in advance for peak season). The helicopter journey is 7–10 minutes. The trek is 6–8 hours. Both are valid forms of yatra.",
      "MUST-CARRY DOCUMENTS: Aadhaar card (mandatory for Yatra registration), two passport photos, any prescription medications, emergency contact details. The Global Trek assists with biometric registration at Sonprayag for Kedarnath.",
    ],
  },
  "hampta-vs-sar-pass": {
    title: "Hampta Pass vs Sar Pass — Which Trek Is Right For You?",
    category: "Comparison Guides",
    date: "March 2025",
    readTime: "10 min read",
    imageQuery: "hampta,pass,snow,himalaya,trekkers",
    content: [
      "Both Hampta Pass and Sar Pass are Himachal Pradesh classics. Both have iconic summit moments. Both attract trekkers from across India. But they are fundamentally different experiences — and choosing the right one can make your trek the memory of a lifetime.",
      "LANDSCAPE: Hampta Pass (Kullu → Lahaul) offers the most dramatic landscape contrast in Indian trekking: lush green Kullu Valley on one side, stark barren Lahaul desert on the other. The transition happens in a single day at the 14,100 ft pass. Sar Pass (Parvati Valley) offers a classic Himachali forest-to-ridge experience, with the Parvati Valley as a consistent backdrop throughout.",
      "THE SIGNATURE MOMENT: Hampta Pass — crossing the pass and witnessing the instant landscape transformation + standing near Mt. Deo Tibba (6,001m). Sar Pass — the iconic snow slide descent, where trekkers slide down a 45-70° snowfield on their backs for 200m. Both are unforgettable, but completely different in character.",
      "DIFFICULTY: Both are rated Moderate. Hampta Pass has genuine river crossings with rope support — this adds a physical adventure element not present on Sar Pass. Sar Pass has longer daily distances but no technical elements. Hampta is slightly harder due to river crossings and altitude (14,100 ft vs 13,800 ft).",
      "SEASON: Hampta Pass — June to September. Best snow on pass: June–July. Sar Pass — May to October. Best snow: May–June (guaranteed heavy snow for the legendary slide).",
      "CROWD LEVEL: Sar Pass is significantly more crowded (runs year-round batches, popular with youth groups). Hampta Pass is moderately crowded but more spread out by season. The Global Trek limits group sizes on both for a premium experience.",
      "AGE & FITNESS: Sar Pass: 15–45 years optimal. Hampta Pass: 14–55 years. Both require moderate fitness but no prior technical skills.",
      "COST: Roughly similar — Hampta Pass: ₹11,999 with The Global Trek. Sar Pass: ₹10,999. The Hampta Pass cost includes river crossing equipment and Chandratal Lake option.",
      "OUR RECOMMENDATION: First-time Himachal trekker wanting the quintessential mountain experience — Sar Pass for the snow slide magic. Trekkers with 1–2 prior treks wanting something raw, dramatic, and landscape-changing — Hampta Pass without question.",
    ],
  },
};

export default function BlogDetailPage() {
  const { postId } = useParams({ from: "/blog/$postId" });
  const article = blogsData.find((b) => b.slug === postId || b.id === postId);
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrolled = Math.max(0, window.innerHeight - top);
      setReadProgress(Math.min(100, (scrolled / height) * 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="blog_detail.not_found"
      >
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-mono text-sm"
            style={{ background: "#145C38" }}
            data-ocid="blog_detail.back_button"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const catColor = getCategoryColor(article.category);
  const headings = extractHeadings(article.body);
  const relatedRaw = blogsData
    .filter(
      (b) =>
        b.id !== article.id &&
        (b.category === article.category || b.author === article.author),
    )
    .slice(0, 3);
  const related =
    relatedRaw.length >= 2
      ? relatedRaw
      : blogsData.filter((b) => b.id !== article.id).slice(0, 3);
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://globaltrek.in";

  return (
    <div className="bg-background min-h-screen" data-ocid="blog_detail.page">
      <div
        className="fixed top-0 left-0 right-0 z-50 h-1"
        style={{ background: "rgba(0,0,0,0.1)" }}
      >
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${readProgress}%`, background: "#145C38" }}
        />
      </div>
      <section
        className="relative overflow-hidden"
        style={{ height: "400px", marginTop: "60px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0A2E1A 0%, #22A05E 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-5xl mx-auto px-4 pb-10 w-full">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                style={{ background: catColor.bg, color: catColor.text }}
              >
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70 font-mono">
                <Calendar className="w-3 h-3" />
                {new Date(article.publishDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70 font-mono">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-10" ref={contentRef}>
        <div className="flex gap-10 items-start">
          {headings.length > 0 && (
            <aside
              className="hidden lg:block w-64 flex-shrink-0 sticky top-24"
              data-ocid="blog_detail.toc"
            >
              <div className="bg-card border border-border rounded-2xl p-5 mb-4">
                <h3
                  className="font-mono text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#145C38" }}
                >
                  In This Article
                </h3>
                <nav className="space-y-1">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 pl-3 hover:border-primary border-transparent font-mono leading-snug"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3
                  className="font-mono text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#145C38" }}
                >
                  Share
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white"
                    style={{ background: "#25D366" }}
                    data-ocid="blog_detail.share_whatsapp"
                  >
                    <Share2 className="w-3 h-3" /> WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white"
                    style={{ background: "#1877F2" }}
                    data-ocid="blog_detail.share_facebook"
                  >
                    <Facebook className="w-3 h-3" /> Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white"
                    style={{ background: "#1DA1F2" }}
                    data-ocid="blog_detail.share_twitter"
                  >
                    <Twitter className="w-3 h-3" /> Twitter
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold"
                    style={{ background: "#F0FAF4", color: "#145C38" }}
                    data-ocid="blog_detail.share_copy"
                  >
                    <Copy className="w-3 h-3" />{" "}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>
            </aside>
          )}
          <main className="flex-1 min-w-0">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono mb-8 transition-colors"
              data-ocid="blog_detail.back_to_blog"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl mb-8"
              data-ocid="blog_detail.author_card"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                style={{ background: "#145C38" }}
              >
                {article.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">
                  {article.author}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed mt-0.5 line-clamp-2">
                  {article.authorBio}
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.publishDate).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
            </div>
            <div data-ocid="blog_detail.body">{renderBody(article.body)}</div>
            {article.tags.length > 0 && (
              <div
                className="mt-8 flex flex-wrap gap-2"
                data-ocid="blog_detail.tags"
              >
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full"
                    style={{ background: "#E8F5EE", color: "#145C38" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="lg:hidden mt-8 p-5 bg-card border border-border rounded-2xl">
              <h3
                className="font-mono text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#145C38" }}
              >
                Share this article
              </h3>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-white"
                  style={{ background: "#25D366" }}
                  data-ocid="blog_detail.share_whatsapp_mobile"
                >
                  <Share2 className="w-3 h-3" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold"
                  style={{ background: "#F0FAF4", color: "#145C38" }}
                  data-ocid="blog_detail.share_copy_mobile"
                >
                  <Copy className="w-3 h-3" />{" "}
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
            <div
              className="mt-10 p-6 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #145C38, #22A05E)",
              }}
              data-ocid="blog_detail.cta"
            >
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to Experience This Trek?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Join 12,000+ trekkers who chose Global Trek for their Himalayan
                adventure.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold"
                style={{ background: "#FFFFFF", color: "#145C38" }}
                data-ocid="blog_detail.book_now_button"
              >
                Plan My Trek →
              </Link>
            </div>
          </main>
        </div>
        {related.length > 0 && (
          <section
            className="mt-16 pt-10 border-t border-border"
            data-ocid="blog_detail.related_posts"
          >
            <h2
              className="font-display text-2xl font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A",
              }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((post) => {
                const pc = getCategoryColor(post.category);
                return (
                  <Link
                    key={post.id}
                    to="/blog/$postId"
                    params={{ postId: post.slug }}
                    className="block bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
                    data-ocid="blog_detail.related.item"
                  >
                    <div
                      className="h-32 flex items-end p-3"
                      style={{
                        background: "linear-gradient(135deg, #0A2E1A, #22A05E)",
                      }}
                    >
                      <span className="text-white/60 text-xs font-mono truncate">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <span
                        className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: pc.bg, color: pc.text }}
                      >
                        {post.category}
                      </span>
                      <h4
                        className="font-display text-sm font-bold mt-2 text-foreground group-hover:text-primary transition-colors line-clamp-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        {post.readTime}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
