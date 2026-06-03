import { treksData } from "@/data/treks";
import { useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { StickyBookingWidget } from "./trek-detail/BookingWidget";
import {
  BatchesAndPricing,
  InclusionsExclusions,
  QuickFactsStrip,
  TrekHero,
  TrekItinerary,
  TrekOverview,
} from "./trek-detail/Sections1to7";
import {
  FaqsAndCerts,
  GearAndPacking,
  LogisticsSection,
  ReviewsSection,
  RouteIntelligence,
  SafetyAndFitness,
} from "./trek-detail/Sections8to12";

export default function TrekDetail() {
  const { trekId } = useParams({ strict: false }) as { trekId?: string };
  const trek = treksData.find((t) => t.slug === trekId || t.id === trekId);
  const heroRef = useRef<HTMLDivElement>(null);
  const [widgetVisible, setWidgetVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setWidgetVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!trek) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0A2E1A",
            }}
          >
            Trek Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The trek you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/explore"
            className="inline-block px-6 py-3 rounded-lg text-white font-semibold"
            style={{ background: "#1A7A4C" }}
          >
            Explore All Treks
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={heroRef}>
        <TrekHero trek={trek} />
      </div>
      <QuickFactsStrip trek={trek} isSticky={false} />
      <TrekOverview trek={trek} />
      <TrekItinerary trek={trek} />
      <RouteIntelligence trek={trek} />
      <BatchesAndPricing trek={trek} />
      <InclusionsExclusions trek={trek} />
      <SafetyAndFitness trek={trek} />
      <GearAndPacking trek={trek} />
      <ReviewsSection trek={trek} />
      <LogisticsSection trek={trek} />
      <FaqsAndCerts trek={trek} />
      <StickyBookingWidget trek={trek} visible={widgetVisible} />
    </div>
  );
}
