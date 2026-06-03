import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

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
      {/* Hero */}
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
          For Every Kind of Adventurer
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold italic text-white mb-4"
          style={{ fontFamily: "var(--gt-font-display)" }}
        >
          Custom & Group Trek Packages
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Solo, family, corporate, school or fully bespoke — we craft the
          perfect Himalayan experience for every kind of group.
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

      {/* Why Package Section */}
      <section
        className="py-14 px-4 bg-card border-t border-border"
        data-ocid="packages.why_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold italic"
              style={{
                fontFamily: "var(--gt-font-display)",
                color: "var(--foreground)",
              }}
            >
              Package vs Individual Trek — Why Choose a Package?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Better Value",
                desc: "Group packages include exclusive campsites, professional facilitation, custom menus, and add-ons not available on standard batches.",
              },
              {
                icon: "📅",
                title: "Your Dates",
                desc: "Don't fit a fixed batch? Private packages depart on your chosen date — weekend, holiday, or any date that works for your group.",
              },
              {
                icon: "⭐",
                title: "Bespoke Experience",
                desc: "Tailored difficulty, route, meals, accommodation, activities, and photography — designed specifically for your group's needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-border bg-background"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--gt-font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <CustomQuoteForm />

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

function CustomQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", requirements: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-16 px-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(26,122,76,0.08) 0%, rgba(232,150,58,0.05) 100%)",
      }}
      data-ocid="packages.custom_quote_section"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "#E8963A" }}
          >
            Can&apos;t find what you need?
          </p>
          <h2
            className="text-3xl font-bold italic"
            style={{ fontFamily: "var(--gt-font-display)" }}
          >
            Get a Custom Quote
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Tell us your dream trek — we&apos;ll build a custom itinerary and
            quote in 24 hours.
          </p>
        </div>
        {submitted ? (
          <div
            className="text-center py-12 px-6 rounded-2xl border border-border bg-card"
            data-ocid="packages.quote_success_state"
          >
            <p className="text-4xl mb-3">✅</p>
            <h3 className="font-bold text-lg mb-2">Request Received!</h3>
            <p className="text-sm text-muted-foreground">
              Our trek experts will get back to you within 24 hours with a
              custom quote.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 space-y-5"
            data-ocid="packages.custom_quote_form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-xs font-mono text-muted-foreground mb-1"
                >
                  FULL NAME
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2"
                  style={{ focusRingColor: "#1A7A4C" } as React.CSSProperties}
                  placeholder="Your name"
                  data-ocid="packages.quote_name_input"
                />
              </div>
              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-xs font-mono text-muted-foreground mb-1"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2"
                  placeholder="you@example.com"
                  data-ocid="packages.quote_email_input"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="quote-req"
                className="block text-xs font-mono text-muted-foreground mb-1"
              >
                YOUR REQUIREMENTS
              </label>
              <textarea
                id="quote-req"
                required
                rows={4}
                value={form.requirements}
                onChange={(e) =>
                  setForm((f) => ({ ...f, requirements: e.target.value }))
                }
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 resize-none"
                placeholder="e.g. Corporate team of 25, want a 3-day Kedarkantha experience in December 2026, budget ₹15,000/person, need GST invoice..."
                data-ocid="packages.quote_requirements_textarea"
              />
            </div>
            <Button
              type="submit"
              className="w-full font-mono text-sm tracking-wider"
              style={{ background: "#E8963A", color: "#0A0E14" }}
              data-ocid="packages.quote_submit_button"
            >
              Send Custom Quote Request
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
