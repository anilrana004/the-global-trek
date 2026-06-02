import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import type { Trek } from "@/types/trek";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bus,
  Calendar,
  Car,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Plane,
  Shield,
  Star,
  Train,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface CityTrekPageProps {
  cityName: string;
  stateName: string;
  metaTitle: string;
  metaDescription: string;
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  heroTagline: string;
  heroDescription: string;
  whyTrekPoints: string[];
  howToReach: {
    byTrain?: { title: string; details: string };
    byFlight?: { title: string; details: string };
    byBus?: { title: string; details: string };
    byCar?: { title: string; details: string };
  };
  featuredTreks: string[];
  faqs: FAQItem[];
}

function TrekCard({ trek, index }: { trek: Trek; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300"
      data-ocid={`city.trek.item.${index + 1}`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={`https://source.unsplash.com/800x600/?${trek.imageQuery}`}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary/90 text-primary-foreground text-xs">
            {trek.difficulty}
          </Badge>
          <Badge className="bg-accent/90 text-accent-foreground text-xs">
            {trek.duration.split(" ")[0]}D
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/80 text-xs font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {trek.region}
          </p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {trek.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Mountain className="w-4 h-4 text-primary" />
            <span>{trek.maxAltitude}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{trek.groupSize}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{trek.price}</span>
          <span className="text-xs text-muted-foreground">per person</span>
        </div>
        <Link
          to="/trek/$trekId"
          params={{ trekId: trek.id }}
          className="mt-4 block"
        >
          <Button
            variant="outline"
            className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            data-ocid="city.trek.view_button"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question.slice(0, 30)}
          className="border border-border/60 rounded-xl overflow-hidden bg-card"
          data-ocid={`city.faq.item.${i + 1}`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            data-ocid={`city.faq.toggle.${i + 1}`}
          >
            <span className="font-semibold text-foreground pr-4">
              {faq.question}
            </span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="px-5 pb-5 text-muted-foreground leading-relaxed"
            >
              {faq.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CityTrekPage({
  cityName,
  stateName,
  heroTagline,
  heroDescription,
  whyTrekPoints,
  howToReach,
  featuredTreks,
  faqs,
}: CityTrekPageProps) {
  const resolvedTreks = featuredTreks
    .map((id) => treksData.find((t) => t.id === id))
    .filter(Boolean) as Trek[];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://source.unsplash.com/1600x900/?himalaya,trekking,${cityName.toLowerCase()}`}
            alt={`Trekking from ${cityName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-accent/90 text-accent-foreground mb-4 text-sm px-4 py-1">
              <MapPin className="w-3 h-3 mr-1" />
              {cityName}, {stateName}
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Treks from {cityName}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-2 font-medium">
              {heroTagline}
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#featured-treks" data-ocid="city.hero.explore_button">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  Explore Treks
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#how-to-reach" data-ocid="city.hero.reach_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  How to Reach
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trek from City */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              Why Trek from {cityName}
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The Gateway to the Himalayas
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((slot) => (
              <motion.div
                key={`point-slot-${slot}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: slot * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow"
                data-ocid={`city.why.item.${slot + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {whyTrekPoints[slot]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section id="how-to-reach" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              <MapPin className="w-3 h-3 mr-1" />
              Getting There
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How to Reach {cityName}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Multiple transport options to reach your Himalayan adventure
              starting point
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToReach.byTrain && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-6"
                data-ocid="city.reach.train"
              >
                <Train className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {howToReach.byTrain.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {howToReach.byTrain.details}
                </p>
              </motion.div>
            )}
            {howToReach.byFlight && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6"
                data-ocid="city.reach.flight"
              >
                <Plane className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {howToReach.byFlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {howToReach.byFlight.details}
                </p>
              </motion.div>
            )}
            {howToReach.byBus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border/50 rounded-xl p-6"
                data-ocid="city.reach.bus"
              >
                <Bus className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {howToReach.byBus.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {howToReach.byBus.details}
                </p>
              </motion.div>
            )}
            {howToReach.byCar && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border/50 rounded-xl p-6"
                data-ocid="city.reach.car"
              >
                <Car className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {howToReach.byCar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {howToReach.byCar.details}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section id="featured-treks" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              <Star className="w-3 h-3 mr-1" />
              Featured Treks
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Best Treks from {cityName}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Hand-picked Himalayan experiences curated for trekkers starting
              from {cityName}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedTreks.map((trek, i) => (
              <TrekCard key={trek.id} trek={trek} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Strip */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Certified Guides</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Fixed Departures</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Instant Booking</span>
              </div>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready for Your Himalayan Adventure?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book your trek from {cityName} today. Small groups, expert guides,
              and unforgettable memories await.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#featured-treks" data-ocid="city.cta.book_button">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  Book a Trek
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20interested%20in%20treks%20from%20${cityName}"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="city.cta.whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/30 text-green-600 hover:bg-green-50 px-8"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919876543210" data-ocid="city.cta.call_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 px-8"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              Common Questions
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
