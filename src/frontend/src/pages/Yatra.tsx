import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

const yatraCards = [
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    subtitle: "One of 12 Jyotirlingas · Rudraprayag, Uttarakhand",
    duration: "4 Days",
    price: "From ₹12,000",
    opens: "Opens May 2, 2026",
    closes: "Closes Bhai Dooj (Nov)",
    altitude: "3,583m / 11,755ft",
    desc: "Trek or helicopter to Lord Shiva's most powerful abode in the Himalayas. One of 12 sacred Jyotirlingas, accessible only May–Nov.",
    icon: "🕉️",
    slug: "/yatra/kedarnath",
    highlights: [
      "Helicopter option available",
      "Priority darshan slots",
      "Medical support included",
    ],
  },
  {
    id: "badrinath",
    name: "Badrinath Yatra",
    subtitle: "Lord Vishnu's Sacred Abode · Chamoli, Uttarakhand",
    duration: "3 Days",
    price: "From ₹9,500",
    opens: "Opens April 30, 2026",
    closes: "Closes Diwali (Oct/Nov)",
    altitude: "3,133m / 10,279ft",
    desc: "Witness the majestic Badrivishal idol, Tapt Kund holy dip, and the awe-inspiring Neelkanth peak backdrop.",
    icon: "🙏",
    slug: "/yatra/badrinath",
    highlights: [
      "Tapt Kund holy dip",
      "Mana Village — last Indian village",
      "Brahma Kapal rituals",
    ],
  },
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    subtitle: "All 4 Sacred Dhams · Uttarakhand",
    duration: "12 Days",
    price: "From ₹32,000",
    opens: "Opens April 30, 2026",
    closes: "Closes Diwali (Oct/Nov)",
    altitude: "Multiple altitudes up to 3,583m",
    desc: "The ultimate Hindu pilgrimage: Yamunotri → Gangotri → Kedarnath → Badrinath. A life-changing spiritual journey.",
    icon: "✨",
    slug: "/yatra/char-dham",
    highlights: [
      "Complete 4-dham circuit",
      "Expert yatra guide throughout",
      "All permits handled",
    ],
  },
  {
    id: "do-dham",
    name: "Do Dham Yatra",
    subtitle: "Kedarnath + Badrinath · Uttarakhand",
    duration: "7 Days",
    price: "From ₹22,000",
    opens: "Opens May 2026",
    closes: "Closes Nov 2026",
    altitude: "Up to 3,583m",
    desc: "Lord Shiva at Kedarnath, Lord Vishnu at Badrinath — the divine twin pilgrimage for those with limited time.",
    icon: "🌸",
    slug: "/yatra/do-dham",
    highlights: [
      "Kedarnath + Badrinath",
      "7 days — ideal schedule",
      "Flexible transport options",
    ],
  },
];

const yatraFaqs = [
  {
    q: "What is a Char Dham Yatra?",
    a: "Char Dham refers to the four sacred shrines of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath. Completing all four in a single journey is one of the most spiritually significant acts in Hinduism, believed to cleanse all sins and grant moksha.",
  },
  {
    q: "Is prior registration required for the yatra?",
    a: "Yes. The Uttarakhand government mandates biometric registration for all yatris visiting Kedarnath and Badrinath. Global Trek handles the complete registration process on your behalf as part of every yatra package.",
  },
  {
    q: "When do the Char Dham temples open in 2026?",
    a: "Yamunotri and Gangotri open on Akshaya Tritiya (around May 1, 2026). Kedarnath opens May 2, 2026. Badrinath opens April 30, 2026. All temples close in October/November for winter.",
  },
  {
    q: "Can senior citizens do the Kedarnath Yatra?",
    a: "Yes. Helicopter packages to Kedarnath are specifically recommended for seniors, those with joint problems, or anyone who cannot undertake the 16km trek. Global Trek pre-books helicopter seats and provides medical support throughout.",
  },
  {
    q: "What is the difference between a trek and a yatra?",
    a: "A trek is primarily an outdoor adventure focused on natural landscapes and physical challenge. A yatra is a sacred pilgrimage with deep spiritual purpose — visiting holy temples, performing rituals, and seeking divine blessings. Some yatras involve a trek component (like Kedarnath), but the intent and experience are fundamentally different.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

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
              Sacred Himalayan Pilgrimages
            </p>
            <h1
              className="font-display italic text-foreground mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Sacred Himalayan Yatras
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: "#A8B8C0" }}
            >
              Kedarnath, Badrinath, Char Dham, Do Dham — four sacred circuits
              where Himalayan grandeur meets divine grace. Every yatra crafted
              with reverence, safety, and expert guidance.
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

      {/* 4 Yatra Cards 2x2 */}
      <section className="py-20 px-4" data-ocid="yatra.packages_section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Sacred Pilgrimages 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              Our Yatra Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {yatraCards.map((y, i) => (
              <motion.div
                key={y.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
                data-ocid={`yatra.${y.id}_card`}
              >
                <div
                  className="p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D1A0F 0%, #1a0a00 100%)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-4xl">{y.icon}</span>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(232,150,58,0.15)",
                        color: "#E8963A",
                      }}
                    >
                      {y.opens}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl italic text-white mb-1">
                    {y.name}
                  </h3>
                  <p className="text-white/60 text-xs font-mono">
                    {y.subtitle}
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {y.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-mono text-muted-foreground">
                        DURATION
                      </span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {y.duration}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-muted-foreground">
                        PRICE
                      </span>
                      <p
                        className="font-semibold mt-0.5"
                        style={{ color: "#1A7A4C" }}
                      >
                        {y.price}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-muted-foreground">
                        CLOSES
                      </span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {y.closes}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-muted-foreground">
                        ALTITUDE
                      </span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {y.altitude}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {y.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs text-foreground"
                      >
                        <span
                          className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px]"
                          style={{ background: "#1A7A4C" }}
                        >
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to={y.slug as "/"} className="mt-auto">
                    <Button
                      className="w-full font-mono text-xs tracking-wider"
                      style={{ background: "#E8963A", color: "#0A0E14" }}
                      data-ocid={`yatra.${y.id}_book_button`}
                    >
                      Book {y.name} →
                    </Button>
                  </Link>
                </div>
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

      {/* What is a Yatra */}
      <section
        className="bg-card py-20 px-4"
        data-ocid="yatra.educational_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: "#E8963A" }}
              >
                For First-Time Pilgrims
              </p>
              <h2 className="font-display text-4xl italic text-foreground mb-4">
                What is a Yatra?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A yatra (Sanskrit: यात्रा) is a sacred pilgrimage — a journey
                undertaken with spiritual intention. Unlike a trek, which
                focuses on nature and physical challenge, a yatra is about
                devotion, surrender, and seeking divine blessings.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The Char Dham yatra of Uttarakhand is considered the most sacred
                pilgrimage in Hinduism — believed to wash away all sins and
                grant liberation (moksha). Even for those without a religious
                background, the journey through the Himalayas to these ancient
                temples is deeply transformative.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🙏", label: "Spiritual purpose" },
                  { icon: "🏔️", label: "Himalayan settings" },
                  { icon: "🛕", label: "Ancient temples" },
                  { icon: "👨‍👩‍👧‍👦", label: "All ages welcome" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl italic text-foreground mb-4">
                Yatra vs Trek — Which is for You?
              </h3>
              {[
                {
                  label: "Choose a Yatra if...",
                  color: "#E8963A",
                  points: [
                    "You seek spiritual blessings & religious experience",
                    "Visiting ancient temples is a life goal",
                    "You prefer comfortable accommodation & meals",
                    "You're traveling with elders, parents, or family",
                  ],
                },
                {
                  label: "Choose a Trek if...",
                  color: "#1A7A4C",
                  points: [
                    "You love physical challenge & wilderness camping",
                    "High-altitude landscapes & summits excite you",
                    "You want to push your fitness limits",
                    "You're comfortable sleeping in tents at 3,000m+",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="p-4 rounded-xl border border-border bg-background"
                >
                  <p
                    className="font-semibold text-sm mb-2"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.points.map((p) => (
                      <li
                        key={p}
                        className="text-xs text-muted-foreground flex gap-2"
                      >
                        <span style={{ color: group.color }}>•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" data-ocid="yatra.faq_section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Common Questions
            </p>
            <h2 className="font-display text-4xl italic text-foreground">
              Yatra FAQ
            </h2>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card px-6">
            {yatraFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
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
