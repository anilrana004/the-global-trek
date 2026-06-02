import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import type { Trek } from "@/types/trek";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  FileText,
  Globe,
  IdCard,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SEOHead } from "../components/SEOHead";

const featuredTreks = [
  "kedarkantha",
  "hampta-pass",
  "chopta-tungnath",
  "har-ki-dun",
  "kuari-pass",
  "beas-kund",
];

const faqs = [
  {
    question: "Do I need a visa to trek in India?",
    answer:
      "Yes — most foreign nationals require an Indian e-Visa (valid for 60 days) or a regular tourist visa. We provide a detailed visa guide and invitation letter for your application. Citizens of Nepal and Bhutan do not need a visa.",
  },
  {
    question: "Is it safe for solo female trekkers?",
    answer:
      "Absolutely. India is generally safe for solo female travelers, especially on organized treks. We have female trek leaders available on request, and our groups are mixed and supportive. Many of our solo female trekkers return year after year.",
  },
  {
    question: "What is the best trek for first-time visitors to India?",
    answer:
      "Kedarkantha (5 days, Easy-Moderate) is our top recommendation for first-timers. It offers a complete Himalayan experience — snow, summit, forests, and culture — without extreme altitude or technical difficulty.",
  },
  {
    question: "Do you provide airport pickup from Delhi?",
    answer:
      "Yes — all our international packages include Delhi IGI Airport pickup and drop. We also offer a 'Delhi to Mountains' package that includes city sightseeing, hotel stay, and transport to the trek base.",
  },
  {
    question: "What vaccinations do I need?",
    answer:
      "No mandatory vaccinations for trekking. Recommended: Hepatitis A & B, Typhoid, Tetanus, and routine vaccinations. Consult your doctor 4–6 weeks before travel. We provide a detailed health advisory after booking.",
  },
  {
    question: "Can I get a SIM card in India?",
    answer:
      "Yes — we assist with SIM card procurement at Delhi airport. Airtel and Jio have the best mountain coverage. Note: BSNL is the only network at most trek base camps.",
  },
  {
    question: "What currency should I bring?",
    answer:
      "Indian Rupees (INR). USD and EUR can be exchanged at Delhi airport or authorized forex centers. ATMs are available in Dehradun, Manali, and Rishikesh but not at trek bases. Carry cash for personal expenses.",
  },
  {
    question: "Do you offer private/custom treks for small groups?",
    answer:
      "Yes — we specialize in private treks for 2–8 people. Custom itinerary, private guide, flexible dates, and personalized service. Contact us for a custom quote.",
  },
];

function TrekCard({ trek, index }: { trek: Trek; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300"
      data-ocid={`foreign.trek.item.${index + 1}`}
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
            data-ocid="foreign.trek.view_button"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

function FAQAccordion({
  faqs,
}: { faqs: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question.slice(0, 30)}
          className="border border-border/60 rounded-xl overflow-hidden bg-card"
          data-ocid={`foreign.faq.item.${i + 1}`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            data-ocid={`foreign.faq.toggle.${i + 1}`}
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

export default function TreksForForeigners() {
  const resolvedTreks = featuredTreks
    .map((id) => treksData.find((t) => t.id === id))
    .filter(Boolean) as Trek[];

  return (
    <>
      <SEOHead
        title="Himalayan Trekking for International Visitors | India — Global Trek"
        description="Trekking in India for foreigners. Expert-guided Himalayan treks in Uttarakhand and Himachal Pradesh. Visa-friendly packages, English-speaking certified guides, safe group departures."
        canonical="https://www.globaltrek.in/treks-for-foreigners"
        geoRegion="IN"
        lat={30.3165}
        lng={78.0322}
        geoPlacename="Dehradun, Uttarakhand, India"
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://source.unsplash.com/1600x900/?himalaya,trekking,international"
              alt="Himalayan trekking for international visitors"
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
                <Globe className="w-3 h-3 mr-1" />
                International Visitors
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Himalayan Trekking for International Visitors
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-2 font-medium">
                Experience India's greatest treks with world-class hospitality
              </p>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                From the snow-capped peaks of Uttarakhand to the high passes of
                Himachal Pradesh, we make Himalayan trekking accessible, safe,
                and unforgettable for travelers from every corner of the world.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#featured-treks"
                  data-ocid="foreign.hero.explore_button"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    Explore Treks
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="#visa-info" data-ocid="foreign.hero.visa_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    <IdCard className="w-4 h-4 mr-2" />
                    Visa Guide
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Trek with Us */}
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
                <BadgeCheck className="w-3 h-3 mr-1" />
                Why Choose Global Trek
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Built for International Trekkers
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-primary" />,
                  title: "English-Speaking Guides",
                  desc: "All our trek leaders are fluent in English and trained in international hospitality standards.",
                },
                {
                  icon: <Shield className="w-5 h-5 text-primary" />,
                  title: "Comprehensive Insurance",
                  desc: "We include travel insurance in every international package. Optional add-ons for extreme sports coverage.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  title: "Visa Assistance",
                  desc: "Invitation letters, visa guidance, and documentation support for all nationalities.",
                },
                {
                  icon: <Plane className="w-5 h-5 text-primary" />,
                  title: "Airport Transfers",
                  desc: "Delhi IGI Airport pickup and drop included. VIP meet-and-greet service available.",
                },
                {
                  icon: <Star className="w-5 h-5 text-primary" />,
                  title: "International Cuisine",
                  desc: "While we serve authentic Indian meals, we accommodate all dietary restrictions — vegan, gluten-free, kosher, halal.",
                },
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  title: "24/7 Support",
                  desc: "Dedicated international support line with WhatsApp, email, and emergency contact. Timezone-aware response.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title || `item-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow"
                  data-ocid={`foreign.why.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa & Documents */}
        <section id="visa-info" className="py-20 px-4 bg-muted/30">
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
                <CreditCard className="w-3 h-3 mr-1" />
                Travel Essentials
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Visa, Permits & Documents
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-8"
                data-ocid="foreign.visa.card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IdCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Indian e-Visa
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Most common for trekkers
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Apply online at{" "}
                      <a
                        href="https://indianvisaonline.gov.in"
                        className="text-primary underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        indianvisaonline.gov.in
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Valid for 60 days from arrival. Double entry for tourism.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Processing time: 3–5 business days. Apply at least 2 weeks
                      before travel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Cost: $25–$80 depending on nationality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      We provide an invitation letter to support your
                      application.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-8"
                data-ocid="foreign.permits.card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Trek Permits
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Handled by Global Trek
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>
                      Inner Line Permits (ILP) for border areas — we handle all
                      paperwork.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>
                      Forest Department camping permits included in all
                      packages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>
                      Protected Area Permits (PAP) for Ladakh/Spiti — arranged
                      30 days in advance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>
                      Char Dham Yatra registration — biometric process assisted
                      by our team.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>
                      No additional permit fees — everything included in your
                      package price.
                    </span>
                  </li>
                </ul>
              </motion.div>
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
                Recommended for International Trekkers
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Best Treks for First-Time Visitors
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                These treks offer the perfect balance of adventure, safety, and
                cultural immersion for international travelers
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resolvedTreks.map((trek, i) => (
                <TrekCard key={trek.id} trek={trek} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
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
                Join 500+ international trekkers who explore the Himalayas with
                us every year. Small groups, expert guides, and memories that
                last a lifetime.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#featured-treks" data-ocid="foreign.cta.book_button">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    Book a Trek
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20an%20international%20visitor%20interested%20in%20Himalayan%20treks"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="foreign.cta.whatsapp_button"
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
                <a href="tel:+919876543210" data-ocid="foreign.cta.call_button">
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
    </>
  );
}
