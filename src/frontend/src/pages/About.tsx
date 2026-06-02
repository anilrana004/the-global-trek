import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const stats = [
  { value: "15 Years", label: "Of Excellence" },
  { value: "12,000+", label: "Happy Trekkers" },
  { value: "500+", label: "Treks Completed" },
  { value: "4.9★", label: "Google Rating" },
];

const _timeline = [
  {
    year: "2011",
    title: "Founded in Dehradun",
    desc: "First batch to Kedarkantha with 8 trekkers and a big dream.",
  },
  {
    year: "2015",
    title: "1,000 Happy Trekkers",
    desc: "Crossed the milestone with our growing community of Himalayan adventurers.",
  },
  {
    year: "2019",
    title: "Ministry of Tourism Award",
    desc: "Recognized for excellence in responsible mountain tourism.",
  },
  {
    year: "2023",
    title: "12,000+ Trekkers & 15 Destinations",
    desc: "Expanded across Uttarakhand and Himachal Pradesh with new yatra packages.",
  },
  {
    year: "2026",
    title: "Digital Platform Launch",
    desc: "Launched globaltrek.in — India's first fully integrated Himalayan trekking platform.",
  },
];

const _awards = [
  "Ministry of Tourism, India",
  "Uttarakhand Tourism",
  "Incredible India Partner",
  "ISO 9001 Certified",
  "HP Tourism Recognized",
  "ATOAI Member",
  "IMF Affiliated",
  "Adventure Tour Operators Association",
];

const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    text: "Pre-trek medical screening, satellite communication, emergency evacuation.",
  },
  {
    icon: "👥",
    title: "Small Groups",
    text: "Max 12 trekkers. Personalized attention, deeper experience.",
  },
  {
    icon: "🌿",
    title: "Responsible Trekking",
    text: "Zero plastic, porter welfare, village community partnerships.",
  },
  {
    icon: "💰",
    title: "Fair Porter Wages",
    text: "Above-market wages, proper gear, and welfare for our trail support staff.",
  },
  {
    icon: "🏧",
    title: "Community Tourism",
    text: "We invest back into mountain communities and local economies.",
  },
  {
    icon: "🌍",
    title: "Conservation",
    text: "Every booking contributes to Himalayan conservation efforts.",
  },
];

const team = [
  {
    name: "Arjun Rawat",
    role: "Lead Trek Guide",
    region: "Garhwal & Kumaon Himalayas",
    exp: "12 years",
  },
  {
    name: "Priyanka Negi",
    role: "Trek Operations",
    region: "Logistics & Safety",
    exp: "8 years",
  },
  {
    name: "Pandit Gopal Sharma",
    role: "Yatra Coordinator",
    region: "All four Char Dhams",
    exp: "15 years",
  },
  {
    name: "Riya Thakur",
    role: "Customer Experience",
    region: "Trekker Support & Booking",
    exp: "5 years",
  },
];

const certs = [
  "Certified by Uttarakhand Tourism Development Board",
  "ITBP (Indo-Tibetan Border Police) trained guides",
  "First Aid & Wilderness Medicine certified",
  "Leave No Trace India certified partner",
];

export default function AboutPage() {
  return (
    <div className="bg-background" data-ocid="about.page">
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute bottom-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L360 80 L720 140 L1080 60 L1440 100 L1440 200 Z"
            fill="#E8963A"
          />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#E8963A" }}
          >
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic text-foreground mb-6">
            Born in the Foothills,
            <br />
            Raised by the Mountains
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in the Himalayan foothill town of Dehradun, The Global Trek
            was born from a single conviction: that the Himalayas are not just a
            destination but a transformative force.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4" data-ocid="about.story_section">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Our team of certified mountain guides, cultural historians, and
              logistics specialists have spent decades on Uttarakhand and
              Himachal Pradesh's trails. We believe in small groups, meaningful
              experiences, responsible tourism, and zero compromise on safety.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every trek we design is a labor of love — walked first by our
              guides, tested for safety, mapped for alternate routes, and
              enriched with local cultural context. We are not a travel
              aggregator. We are mountain people who take other people to the
              mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-16 px-4" data-ocid="about.stats_section">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "#E8963A" }}
                >
                  {s.value}
                </div>
                <div className="font-mono text-xs tracking-wider text-muted-foreground mt-1 uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4" data-ocid="about.team_section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              The People
            </p>
            <h2 className="font-display text-4xl italic text-foreground">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card text-center"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-2xl font-bold"
                  style={{
                    background: "rgba(232,150,58,0.15)",
                    color: "#E8963A",
                  }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="font-mono text-xs" style={{ color: "#E8963A" }}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  {member.region}
                </p>
                <p className="text-muted-foreground text-xs">
                  {member.exp} experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-20 px-4" data-ocid="about.values_section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              What We Stand For
            </p>
            <h2 className="font-display text-4xl italic text-foreground">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4" data-ocid="about.certifications_section">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "#E8963A" }}
          >
            Accreditations
          </p>
          <h2 className="font-display text-4xl italic text-foreground mb-10">
            Certifications & Standards
          </h2>
          <div className="space-y-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card text-sm text-foreground"
              >
                <span className="text-xl">✓</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "rgba(232,150,58,0.05)", border: "0" }}
        data-ocid="about.cta_section"
      >
        <h2 className="font-display text-3xl italic text-foreground mb-4">
          Ready to Trek with Us?
        </h2>
        <p className="text-muted-foreground mb-8">
          Join 10,000+ trekkers who chose The Global Trek for their Himalayan
          journey.
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="font-mono text-sm tracking-widest uppercase"
            style={{ background: "#E8963A", color: "#0A0E14" }}
            data-ocid="about.book_trek_button"
          >
            Plan My Trek
          </Button>
        </Link>
      </section>
    </div>
  );
}
