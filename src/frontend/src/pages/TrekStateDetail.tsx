import { TrekCard } from "@/components/ui/TrekCard";
import { treksData } from "@/data/treks";
import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Mountain, Star, Users } from "lucide-react";

export default function TrekStateDetailPage() {
  const { state, slug } = useParams({ from: "/treks/$state/$slug" });
  const trek = treksData.find((t) => (t.slug ?? t.id) === slug);

  if (!trek) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ paddingTop: "120px" }}
      >
        <div className="text-center space-y-4">
          <p className="text-6xl">🏔</p>
          <h1 className="font-display text-2xl">Trek not found</h1>
          <Link to="/treks" className="text-primary hover:underline">
            View all treks
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = `https://source.unsplash.com/1600x900/?${trek.imageQuery}`;
  const similarTreks = treksData
    .filter(
      (t) =>
        (trek.similarTreks ?? []).includes(t.id) ||
        (trek.relatedTrekIds ?? []).includes(t.id),
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen" data-ocid="trek_detail_page">
      {/* Hero */}
      <div
        className="relative flex items-end"
        style={{
          height: "70vh",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,46,26,0.9)), url(${imageUrl}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <div className="flex gap-2 mb-3 text-white/60 text-sm">
            <Link to="/">Home</Link> /<Link to="/treks">Treks</Link> /
            <Link to={`/treks/${state}` as "/"}>{trek.state}</Link> /
            <span className="text-white">{trek.name}</span>
          </div>
          <h1
            className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-1px",
            }}
          >
            {trek.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {[
              `📍 ${trek.altitudeM}m`,
              `⏱ ${trek.duration}`,
              `🥾 ${trek.difficulty}`,
              `📅 Best: ${trek.bestSeason}`,
              `🛑 ${trek.startPoint}`,
            ].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 rounded-full text-xs font-label font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Overview */}
          <section>
            <h2
              className="font-display text-2xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A",
              }}
            >
              About This Trek
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {trek.overview ?? trek.description}
            </p>
          </section>

          {/* Key highlights */}
          {trek.keyHighlights && trek.keyHighlights.length > 0 && (
            <section>
              <h2
                className="font-display text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A",
                }}
              >
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trek.keyHighlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 p-3 rounded-xl"
                    style={{ background: "#E8F5EE" }}
                  >
                    <span className="mt-0.5">✅</span>
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Itinerary */}
          {trek.itinerary && trek.itinerary.length > 0 && (
            <section>
              <h2
                className="font-display text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A",
                }}
              >
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-3">
                {trek.itinerary.map((day) => (
                  <details
                    key={day.day}
                    className="rounded-xl border border-border group"
                  >
                    <summary
                      className="flex items-center gap-3 p-4 cursor-pointer list-none select-none"
                      data-ocid={`trek_detail.itinerary_day.${day.day}`}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                        style={{ background: "#145C38" }}
                      >
                        D{day.day}
                      </span>
                      <span className="font-label font-semibold text-foreground">
                        {day.title}
                      </span>
                      {day.altitude && (
                        <span className="ml-auto text-xs text-muted-foreground font-label">
                          {day.altitude}
                        </span>
                      )}
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {day.description}
                      </p>
                      {day.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {day.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-2.5 py-0.5 rounded-full text-xs font-label"
                              style={{
                                background: "#E8F5EE",
                                color: "#145C38",
                              }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Inclusions / Exclusions */}
          <section>
            <h2
              className="font-display text-2xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A",
              }}
            >
              Inclusions &amp; Exclusions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl" style={{ background: "#E8F5EE" }}>
                <h3
                  className="font-label font-bold text-sm mb-3"
                  style={{ color: "#145C38" }}
                >
                  ✅ Included
                </h3>
                <ul className="space-y-1.5">
                  {trek.inclusions.map((inc) => (
                    <li key={inc} className="text-sm flex gap-2">
                      <span>✓</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-muted/30">
                <h3 className="font-label font-bold text-sm mb-3 text-destructive">
                  ❌ Not Included
                </h3>
                <ul className="space-y-1.5">
                  {trek.exclusions.map((exc) => (
                    <li
                      key={exc}
                      className="text-sm flex gap-2 text-muted-foreground"
                    >
                      <span>–</span>
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          {trek.faqs && trek.faqs.length > 0 && (
            <section>
              <h2
                className="font-display text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A",
                }}
              >
                FAQ
              </h2>
              <div className="space-y-2">
                {trek.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-xl border border-border"
                  >
                    <summary
                      className="p-4 cursor-pointer list-none font-label font-semibold text-sm select-none"
                      data-ocid="trek_detail.faq_item"
                    >
                      {faq.question}
                    </summary>
                    <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Similar treks */}
          {similarTreks.length > 0 && (
            <section>
              <h2
                className="font-display text-2xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A",
                }}
              >
                You Might Also Love
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {similarTreks.map((t, i) => (
                  <TrekCard key={t.id} trek={t} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div
            className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg space-y-5"
            data-ocid="trek_detail.booking_sidebar"
          >
            <div>
              <span className="text-sm text-muted-foreground">From </span>
              <span
                className="font-display text-3xl font-bold"
                style={{
                  color: "#145C38",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {trek.price}
              </span>
              <span className="text-sm text-muted-foreground">/person</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-label font-bold text-sm">
                {trek.rating ?? "4.8"}
              </span>
              <span className="text-sm text-muted-foreground">
                ({trek.reviewCount ?? 0} reviews)
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Duration
                </span>
                <span className="font-semibold">{trek.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Mountain className="w-3.5 h-3.5" /> Max Altitude
                </span>
                <span className="font-semibold">{trek.maxAltitude}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Start Point
                </span>
                <span className="font-semibold">{trek.startPoint}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Group Size
                </span>
                <span className="font-semibold">{trek.groupSize}</span>
              </div>
            </div>
            <Link
              to="/booking/$trekSlug/select-batch"
              params={{ trekSlug: trek.slug ?? trek.id }}
              className="block w-full py-3 rounded-xl text-center font-label font-bold text-white text-sm tracking-wide transition-colors hover:opacity-90"
              style={{ background: "#145C38" }}
              data-ocid="trek_detail.book_now_button"
            >
              Book Now →
            </Link>
            <button
              type="button"
              className="block w-full py-3 rounded-xl text-center font-label font-bold text-sm tracking-wide border transition-colors hover:bg-muted/30"
              style={{ borderColor: "#145C38", color: "#145C38" }}
              data-ocid="trek_detail.send_inquiry_button"
            >
              Send Inquiry
            </button>
            <div className="space-y-1.5 text-xs text-muted-foreground pt-2">
              <p>✓ Certified expert guide</p>
              <p>✓ Safe &amp; insured</p>
              <p>✓ Best price guaranteed</p>
              <p>🔒 Secure Razorpay payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
