import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const packages = [
  {
    type: "corporate",
    icon: "💼",
    title: "Corporate Trekking",
    tagline: "Transform your team with the Himalayas",
    description:
      "Bespoke team-building treks for 20\u2013200 people with professional facilitation, corporate GST invoice, and high-altitude leadership experiences.",
    features: [
      "Custom departure dates",
      "Gourmet camp meals",
      "Team-building activities",
      "Corporate GST invoice",
    ],
    cta: "Get Quote",
    cardBg: "#0A2E1A",
  },
  {
    type: "school-college",
    icon: "\uD83C\uDF93",
    title: "School & College",
    tagline: "Educational adventure for the next generation",
    description:
      "Budget-friendly NSS/NCC-compliant programs with daily parent reports, teacher coordinator portal, and CBSE activity recognition.",
    features: [
      "Budget pricing",
      "Teacher coordinator portal",
      "Daily parent reports",
      "CBSE/NSS compliant",
    ],
    cta: "Inquire Now",
    cardBg: "#145C38",
  },
  {
    type: "family",
    icon: "\uD83D\uDC68\u200D\uD83D\uDC67",
    title: "Family Treks",
    tagline: "Adventures for all ages, memories for life",
    description:
      "Family-safe trails for kids from age 8+. Easy routes, kid-friendly meals, family photographer, and a flexible pace that works for everyone.",
    features: [
      "Kids from age 8+",
      "Easy-moderate trails",
      "Kid-friendly menus",
      "Flexible pace & stops",
    ],
    cta: "Explore Packages",
    cardBg: "#1A7A4C",
  },
  {
    type: "honeymoon",
    icon: "\u2764\uFE0F",
    title: "Honeymoon / Couples",
    tagline: "Romance at 3,000 metres above sea level",
    description:
      "Private tents, candlelight camp dinners, sunrise summit hikes, flower decoration, and professional honeymoon photography included.",
    features: [
      "Private camp setup",
      "Candlelight dinners",
      "Honeymoon photography",
      "Flower decoration",
    ],
    cta: "Plan Honeymoon",
    cardBg: "#22A05E",
  },
  {
    type: "solo",
    icon: "\uD83E\uDDD7",
    title: "Solo Trekkers",
    tagline: "Never trek alone \u2014 always feel at home",
    description:
      "Join our scheduled group batches, connect with like-minded adventurers, and make lifelong friends who share your passion for the mountains.",
    features: [
      "Group WhatsApp community",
      "Safety tracking app",
      "Community events",
      "Solo room supplement",
    ],
    cta: "View Batches",
    cardBg: "#2980B9",
  },
  {
    type: "customize",
    icon: "\uD83D\uDEE0\uFE0F",
    title: "Custom Trip Builder",
    tagline: "Your dream trek, designed by experts",
    description:
      "Design your perfect Himalayan journey. Choose destination, duration, group size, and budget. We build a custom itinerary in 24 hours.",
    features: [
      "Any destination",
      "Any duration",
      "Any group size",
      "24-hour quote turnaround",
    ],
    cta: "Build Your Trip",
    cardBg: "#0A2E1A",
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background" data-ocid="packages.page">
      <section
        className="pt-36 pb-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
        }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "#2ECC71", fontFamily: "var(--gt-font-label)" }}
        >
          Trek Packages
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold italic text-white mb-4"
          style={{ fontFamily: "var(--gt-font-display)" }}
        >
          Customized Himalayan Experiences
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Something for every kind of adventurer \u2014 solo, family, corporate,
          or fully custom.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.type}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              data-ocid={`packages.${pkg.type}_card`}
            >
              <div
                className="p-6 text-white"
                style={{ background: pkg.cardBg }}
              >
                <div className="text-4xl mb-3">{pkg.icon}</div>
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--gt-font-display)" }}
                >
                  {pkg.title}
                </h2>
                <p className="text-white/70 text-sm">{pkg.tagline}</p>
              </div>
              <div className="bg-card p-6 flex-1 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-1.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black"
                        style={{ background: "#145C38" }}
                      >
                        \u2713
                      </span>
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/packages/$type"
                  params={{ type: pkg.type }}
                  className="block w-full py-3 rounded-xl text-center font-bold text-sm tracking-wide transition-opacity hover:opacity-90 text-white"
                  style={{
                    background: pkg.cardBg,
                    fontFamily: "var(--gt-font-label)",
                  }}
                  data-ocid={`packages.${pkg.type}_cta`}
                >
                  {pkg.cta} \u2192
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: "\uD83D\uDEE1\uFE0F", text: "Certified Guides" },
            { icon: "\uD83D\uDCC5", text: "Fixed Departures" },
            { icon: "\uD83D\uDCB0", text: "No Hidden Costs" },
            { icon: "\u2B50", text: "4.9\u2605 Google Rating" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#145C38", fontFamily: "var(--gt-font-label)" }}
            >
              <span className="text-xl">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
