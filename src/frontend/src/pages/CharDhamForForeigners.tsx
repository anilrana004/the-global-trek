import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import type { Trek } from "@/types/trek";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Globe,
  Heart,
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

const featuredYatras = ["char-dham", "do-dham", "kedarnath-yatra"];

const faqs = [
  {
    question: "Can foreign nationals do the Char Dham Yatra?",
    answer:
      "Yes — foreign nationals are welcome at all four dhams. However, certain restricted areas near the Tibet border (like Mana Village beyond a point) require special permits. We handle all permit paperwork for international yatris.",
  },
  {
    question: "What is the best time for foreign nationals to visit?",
    answer:
      "May–June and September–October are ideal. The temples are open, weather is pleasant, and roads are accessible. Avoid July–August (monsoon landslides) and November–April (temples closed, heavy snow).",
  },
  {
    question: "Do I need to register for Char Dham Yatra?",
    answer:
      "Yes — Uttarakhand government requires biometric registration for all yatris. We complete this process on your behalf using your passport copy. No need to visit registration centers.",
  },
  {
    question: "Is the Char Dham Yatra physically demanding?",
    answer:
      "Kedarnath requires a 19 km trek (or helicopter). Yamunotri requires a 6 km trek. Gangotri and Badrinath are road-accessible. We offer pony, palki, and helicopter options for all trek sections.",
  },
  {
    question: "What should I wear at the temples?",
    answer:
      "Modest clothing covering shoulders and knees. Remove leather items (belts, wallets) before entering temples. We provide a detailed dress code and temple etiquette guide after booking.",
  },
  {
    question: "Can I take photos at the temples?",
    answer:
      "Photography is allowed outside temple complexes. Inside the sanctum sanctorum, photography is prohibited at all four dhams. Drone photography requires special permits — we can arrange this.",
  },
  {
    question: "What currency should I carry?",
    answer:
      "Indian Rupees (INR). ATMs are available at Haridwar, Rishikesh, Rudraprayag, and Joshimath but not at the dhams themselves. Carry sufficient cash for donations, prasad, and personal expenses.",
  },
  {
    question: "Do you provide vegetarian meals?",
    answer:
      "Yes — all meals on our Char Dham packages are pure vegetarian (satvik) as per temple tradition. We accommodate vegan, Jain, and gluten-free diets with advance notice.",
  },
];

function YatraCard({ trek, index }: { trek: Trek; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-lg transition-all duration-300"
      data-ocid={`foreign.yatra.item.${index + 1}`}
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
            data-ocid="foreign.yatra.view_button"
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
          data-ocid={`foreign.yatra.faq.item.${i + 1}`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            data-ocid={`foreign.yatra.faq.toggle.${i + 1}`}
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

export default function CharDhamForForeigners() {
  const resolvedYatras = featuredYatras
    .map((id) => treksData.find((t) => t.id === id))
    .filter(Boolean) as Trek[];

  return (
    <>
      <SEOHead
        title="Char Dham Yatra for Foreign Nationals 2026 | Global Trek"
        description="Char Dham Yatra packages for international visitors. Registration support, English-speaking guides, helicopter options. Kedarnath, Badrinath, Gangotri, Yamunotri 2026."
        canonical="https://www.globaltrek.in/char-dham-for-foreigners"
        geoRegion="IN-UT"
        lat={30.0668}
        lng={79.0193}
        geoPlacename="Uttarakhand, India"
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://source.unsplash.com/1600x900/?kedarnath,temple,himalaya,pilgrimage"
              alt="Char Dham Yatra for foreign nationals"
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
                International Pilgrims Welcome
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Char Dham Yatra for Foreign Nationals
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-2 font-medium">
                India's holiest pilgrimage — now accessible to devotees from
                every nation
              </p>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                The Char Dham Yatra is one of the most sacred spiritual journeys
                in Hinduism. We make it accessible, comfortable, and deeply
                meaningful for international pilgrims with complete logistics,
                visa support, and English-speaking guides.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#yatra-packages"
                  data-ocid="foreign.yatra.hero.book_button"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    View Yatra Packages
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="#visa-info" data-ocid="foreign.yatra.hero.visa_button">
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

        {/* The Four Dhams */}
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
                <Building2 className="w-3 h-3 mr-1" />
                The Sacred Circuit
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                The Four Divine Abodes
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Established by Adi Shankaracharya in the 8th century, these four
                dhams represent the spiritual heart of the Himalayas
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Yamunotri",
                  deity: "Goddess Yamuna",
                  altitude: "3,291m (10,797 ft)",
                  desc: "The source of the Yamuna River. A 6 km trek from Janki Chatti through thermal springs and mountain terrain.",
                  color: "bg-blue-500/10 text-blue-600",
                },
                {
                  name: "Gangotri",
                  deity: "Goddess Ganga",
                  altitude: "3,048m (10,000 ft)",
                  desc: "The origin of the holy Ganga. Road-accessible temple on the Bhagirathi River with stunning mountain views.",
                  color: "bg-cyan-500/10 text-cyan-600",
                },
                {
                  name: "Kedarnath",
                  deity: "Lord Shiva",
                  altitude: "3,583m (11,755 ft)",
                  desc: "The holiest Shiva shrine and one of the 12 Jyotirlingas. A 19 km trek or helicopter ride to the ancient stone temple.",
                  color: "bg-primary/10 text-primary",
                },
                {
                  name: "Badrinath",
                  deity: "Lord Vishnu",
                  altitude: "3,133m (10,279 ft)",
                  desc: "The most important Vishnu temple in India. Road-accessible with hot springs, Mana Village, and Himalayan grandeur.",
                  color: "bg-accent/10 text-accent",
                },
              ].map((dham, i) => (
                <motion.div
                  key={dham.name || `dham-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
                  data-ocid={`foreign.yatra.dham.${i + 1}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${dham.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {dham.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {dham.deity}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {dham.altitude}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dham.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-muted/30">
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
                Built for International Pilgrims
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="w-5 h-5 text-primary" />,
                  title: "Spiritual Guidance",
                  desc: "Our yatra guides explain the mythology, rituals, and significance of each dham in English. Deepen your spiritual understanding.",
                },
                {
                  icon: <Shield className="w-5 h-5 text-primary" />,
                  title: "Complete Safety",
                  desc: "Medical oxygen, first aid, satellite phone, and emergency evacuation plan at every dham. Your safety is our dharma.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  title: "Permit Handling",
                  desc: "We handle all biometric registration, temple permits, and restricted area paperwork. You focus on the pilgrimage.",
                },
                {
                  icon: <Plane className="w-5 h-5 text-primary" />,
                  title: "Airport Transfers",
                  desc: "Delhi IGI Airport pickup and drop included. VIP meet-and-greet and assistance with luggage and customs.",
                },
                {
                  icon: <Star className="w-5 h-5 text-primary" />,
                  title: "Comfortable Stays",
                  desc: "Hotels, dharamshalas, and guesthouses carefully selected for cleanliness, safety, and proximity to temples.",
                },
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  title: "24/7 Support",
                  desc: "Dedicated international support line. WhatsApp, email, and emergency contact available throughout your yatra.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title || `item-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow"
                  data-ocid={`foreign.yatra.why.item.${i + 1}`}
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

        {/* Yatra Packages */}
        <section id="yatra-packages" className="py-20 px-4">
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
                Yatra Packages
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Choose Your Sacred Journey
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                From the complete Char Dham circuit to focused pilgrimages — we
                have a package for every seeker
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resolvedYatras.map((trek, i) => (
                <YatraCard key={trek.id} trek={trek} index={i} />
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
                  <span>Safe & Sacred</span>
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
                Begin Your Sacred Journey
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join hundreds of international pilgrims who complete the Char
                Dham Yatra with us every year. Let us handle the logistics while
                you focus on the divine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#yatra-packages"
                  data-ocid="foreign.yatra.cta.book_button"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    Book Your Yatra
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I'm%20interested%20in%20Char%20Dham%20Yatra%20for%20foreign%20nationals"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="foreign.yatra.cta.whatsapp_button"
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
                <a
                  href="tel:+919876543210"
                  data-ocid="foreign.yatra.cta.call_button"
                >
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
