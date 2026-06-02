import { TrekCard } from "@/components/ui/TrekCard";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const yatraFeatures = [
  {
    icon: "👏",
    title: "Puja Coordination",
    text: "Expert yatra guide with religious background. Abhishek puja, darshan priority, temple briefings.",
  },
  {
    icon: "⏺️",
    title: "Priority Darshan",
    text: "Skip the queues. Our teams coordinate early morning Brahma Muhurta darshan slots.",
  },
  {
    icon: "🚁",
    title: "Helicopter Options",
    text: "Comfortable helicopter packages for Kedarnath. Pre-booked seats, seamless experience.",
  },
  {
    icon: "🏥",
    title: "Medical Support",
    text: "Doctor on call for senior yatris. Oxygen cylinders, medical kit, emergency evacuation.",
  },
  {
    icon: "🏛️",
    title: "Expert Yatra Guide",
    text: "Guides with deep religious and historical knowledge of each dham's mythology and significance.",
  },
  {
    icon: "📝",
    title: "Yatra Registration",
    text: "Complete biometric Yatra registration assistance. All permits handled by our team.",
  },
];

const yataraTestimonials = [
  {
    name: "Vikram Singh",
    city: "Jaipur",
    yatra: "Char Dham",
    text: "As a first-time yatri, I was nervous. The Global Trek's yatra team held our hand through every dham. Their pandit briefings added so much depth.",
  },
  {
    name: "Savita Agarwal",
    city: "Indore",
    yatra: "Kedarnath",
    text: "The evening Aarti at Kedarnath is something I'll carry in my heart forever. The Global Trek made it accessible even at 72 years with helicopter support.",
  },
  {
    name: "Suresh Iyer",
    city: "Chennai",
    yatra: "Do Dham",
    text: "Badrinath at Brahma Muhurta. Tapt Kund dip. Mana village at sunset. The Global Trek crafted a journey that touched the divine.",
  },
];

const yatrasInTreks = treksData.filter((t) =>
  ["kedarnath-yatra", "do-dham", "char-dham"].includes(t.id),
);

export default function YatraPage() {
  return (
    <div className="bg-background" data-ocid="yatra.page">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D1A0F 0%, #0A0E14 60%, #1a0a00 100%)",
        }}
      >
        <div className="absolute inset-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 500"
            className="absolute bottom-0 w-full opacity-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 500 L240 200 L480 350 L720 150 L960 280 L1200 100 L1440 220 L1440 500 Z"
              fill="#E8963A"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "#E8963A" }}
            >
              Sacred Journeys
            </p>
            <h1
              className="font-display italic text-foreground mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Devbhoomi —<br />
              <span style={{ color: "#E8963A" }}>Land of the Gods</span>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: "#A8B8C0" }}
            >
              Sacred Journeys to Kedarnath, Badrinath, Yamunotri & Gangotri.
              Where devotion meets the Himalayan sky.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-mono text-sm tracking-widest uppercase"
                style={{ background: "#E8963A", color: "#0A0E14" }}
                data-ocid="yatra.book_yatra_button"
              >
                Plan My Yatra
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Yatra Packages */}
      <section className="py-20 px-4" data-ocid="yatra.packages_section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Sacred Pilgrimages
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              Our Yatra Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yatrasInTreks.map((trek, i) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TrekCard trek={trek} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Yatra Special */}
      <section
        className="bg-card py-20 px-4"
        data-ocid="yatra.features_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              The Difference
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              What Makes Our Yatra Special
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yatraFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yatra Calendar */}
      <section
        className="bg-background py-20 px-4"
        data-ocid="yatra.calendar_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Temple Dates 2025
            </p>
            <h2 className="font-display text-4xl italic text-foreground">
              Yatra Calendar
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-ocid="yatra.calendar_table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground">
                    DHAM
                  </th>
                  <th className="text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground">
                    OPENS
                  </th>
                  <th className="text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground">
                    CLOSES
                  </th>
                  <th className="text-left py-3 px-4 font-mono text-xs tracking-wider text-muted-foreground">
                    ALTITUDE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    dham: "Yamunotri",
                    opens: "Akshaya Tritiya (Apr/May)",
                    closes: "Diwali (Oct/Nov)",
                    altitude: "3,291m",
                  },
                  {
                    dham: "Gangotri",
                    opens: "Akshaya Tritiya (Apr/May)",
                    closes: "Diwali (Oct/Nov)",
                    altitude: "3,048m",
                  },
                  {
                    dham: "Kedarnath",
                    opens: "Akshaya Tritiya (Apr/May)",
                    closes: "Bhai Dooj (Nov)",
                    altitude: "3,583m",
                  },
                  {
                    dham: "Badrinath",
                    opens: "Akshaya Tritiya (Apr/May)",
                    closes: "Diwali (Oct/Nov)",
                    altitude: "3,133m",
                  },
                ].map((row) => (
                  <tr
                    key={row.dham}
                    className="hover:bg-card transition-colors"
                  >
                    <td className="py-4 px-4 font-display italic text-foreground text-base">
                      {row.dham}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.opens}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.closes}
                    </td>
                    <td
                      className="py-4 px-4 font-mono text-xs"
                      style={{ color: "#4ABFDB" }}
                    >
                      {row.altitude}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-card py-20 px-4"
        data-ocid="yatra.testimonials_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl italic text-foreground">
              Yatri Voices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yataraTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background"
                data-ocid={`yatra.testimonial.item.${i + 1}`}
              >
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(232,150,58,0.1)",
                      color: "#E8963A",
                    }}
                  >
                    {t.yatra}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,150,58,0.15) 0%, rgba(232,150,58,0.05) 100%)",
        }}
        data-ocid="yatra.cta_section"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl italic text-foreground mb-4">
            Begin Your Sacred Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Talk to our yatra specialists. We&apos;ll plan every detail — from
            registration to darshan.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-mono text-sm tracking-widest uppercase"
              style={{ background: "#E8963A", color: "#0A0E14" }}
              data-ocid="yatra.contact_button"
            >
              Plan My Yatra
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
