import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 17, suffix: "+ Years", label: "Of Excellence" },
  { value: 12000, suffix: "+", label: "Trekkers Guided" },
  { value: 15, suffix: "", label: "Himalayan Treks" },
  { value: 500, suffix: "+", label: "Reviews 4.9" },
  { value: 0, suffix: "", label: "Serious Incidents" },
  { value: 100, suffix: "%", label: "Local Guides" },
];

const VALUES = [
  {
    icon: "🛡️",
    title: "Safety First",
    text: "No summit is worth a life. We carry portable O2, satellite phones, pulse oximeters, and Wilderness First Aid kits on every trek. Our safety protocols exceed national standards.",
  },
  {
    icon: "🌿",
    title: "Leave No Trace",
    text: "Zero plastic policy since 2018. All waste carried out. Chemical soap banned near water sources. Rs.50/trekker donated to the Uttarakhand Reforestation Fund.",
  },
  {
    icon: "🏘️",
    title: "Empower Local Communities",
    text: "100% local guides hired from Himalayan villages. Village co-ops supply our food. Women in the Mountains programme trains women as certified trek guides.",
  },
  {
    icon: "🎯",
    title: "Authentic Experiences",
    text: "We limit batch sizes to 15. No cookie-cutter trips. Every trek is led by a guide who has done that specific trail 50+ times and knows its soul.",
  },
  {
    icon: "💬",
    title: "Radical Transparency",
    text: "Fully itemized pricing. No hidden charges. Transparent cancellation policy. You know exactly what you are getting before you book.",
  },
  {
    icon: "🌍",
    title: "Adventure for All",
    text: "We have guided 8-year-olds and 72-year-olds. Corporate teams of 50. School groups of 200. Solo women travellers. The mountains are for everyone.",
  },
];

const TEAM = [
  {
    name: "Rohan Joshi",
    role: "Founder & Lead Trek Director",
    cert: "NIMAS Gold Medallist, IMF Grade A",
    years: "17 years",
    specialty: "High altitude expeditions, Kedarkantha, Har Ki Dun",
    bio: "Founded Global Trek in 2009 after a 7-year career as a SDRF rescue volunteer. Has guided 3,000+ trekkers personally.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Priyanka Negi",
    role: "Co-Founder & Operations Director",
    cert: "MBA Tourism, Wilderness First Responder",
    years: "12 years",
    specialty: "Operations, Customer Experience",
    bio: "Built Global Trek's entire operations framework. Manages 35+ guides and 200+ annual batches.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Ankit Rawat",
    role: "Senior Trek Leader",
    cert: "NIMAS Basic + Advanced, Wilderness EMT",
    years: "9 years",
    specialty: "Kedarkantha, Chopta, Brahmatal winter treks",
    bio: "Born in Sankri village at the base of Kedarkantha. Has summited the peak 180+ times.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    name: "Kavya Thakur",
    role: "Lead Yatra Coordinator",
    cert: "Pilgrimage Tourism Specialist, HNBGU",
    years: "7 years",
    specialty: "Char Dham, Kedarnath, Hemkund Sahib",
    bio: "Expert in yatra logistics. Manages helicopter bookings, temple darshan, and senior citizen support.",
    photo:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=300&q=80",
  },
  {
    name: "Dinesh Bhandari",
    role: "Senior Guide, Himachal Pradesh",
    cert: "NIMAS Basic, Parvati Valley Expert",
    years: "11 years",
    specialty: "Hampta Pass, Sar Pass, Kheerganga, Parvati Valley",
    bio: "From Bhuntar, Kullu. Has guided 600+ trekkers on Hampta Pass. Speaks Kullu Pahari and Spiti.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  },
  {
    name: "Sunita Rana",
    role: "Women's Trekking Lead & Trainer",
    cert: "Women in Mountains Graduate, First Aid",
    years: "5 years",
    specialty: "Solo women treks, school programs",
    bio: "First woman guide from Sankri. Now trains the next generation of women guides.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
  {
    name: "Rajesh Kumar",
    role: "Digital Marketing & Content Head",
    cert: "B.Tech + Google Analytics Certified",
    years: "6 years",
    specialty: "SEO, Social Media, Content",
    bio: "Built globaltrek.in from scratch. Creates the blog content and trek videos you love watching.",
    photo:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=300&q=80",
  },
  {
    name: "Meena Bisht",
    role: "Customer Relations Manager",
    cert: "BA Tourism, Garhwal University",
    years: "8 years",
    specialty: "Customer support, inquiry resolution, post-trek follow-up",
    bio: "Has personally handled 10,000+ inquiries. Knows every trek route by heart.",
    photo:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
  },
];

const GUIDE_CERTS = [
  "NIMAS Basic Mountaineering",
  "NIMAS Advanced Mountaineering",
  "Wilderness First Responder (WFR)",
  "Avalanche Awareness Training",
  "Leave No Trace Instructor",
  "High Altitude Medicine (HACE/HAPE Protocol)",
];

const TIMELINE = [
  {
    year: "2009",
    title: "First Trek",
    desc: "8 trekkers summit Kedarkantha. Global Trek is born.",
  },
  {
    year: "2011",
    title: "100 Trekkers",
    desc: "First full Char Dham Yatra batch.",
  },
  {
    year: "2013",
    title: "Expanded to HP",
    desc: "Hampta Pass and Sar Pass added.",
  },
  {
    year: "2015",
    title: "ISO 9001:2015",
    desc: "First trekking company in Uttarakhand to certify.",
  },
  {
    year: "2017",
    title: "Women in Mountains",
    desc: "8 women trained as certified guides.",
  },
  {
    year: "2018",
    title: "Zero Plastic",
    desc: "Partnership with Leave No Trace India.",
  },
  {
    year: "2019",
    title: "Book Published",
    desc: "The Himalayan Trek Guide published. 5,000 trekkers milestone.",
  },
  {
    year: "2020",
    title: "COVID Resilience",
    desc: "Led local treks and conservation camps. Zero layoffs.",
  },
  {
    year: "2022",
    title: "10,000 Trekkers",
    desc: "Launched user dashboard and online booking.",
  },
  {
    year: "2023",
    title: "Nat Geo Feature",
    desc: "Featured in National Geographic Traveller India.",
  },
  {
    year: "2026",
    title: "New Platform",
    desc: "15 treks, 4 yatras, photo community. Expanding to Ladakh.",
  },
];

const CERTIFICATIONS = [
  {
    icon: "🏛️",
    title: "Ministry of Tourism, Govt of India",
    sub: "Approved Tour Operator",
  },
  {
    icon: "🏆",
    title: "ISO 9001:2015 Certified",
    sub: "Quality Management System",
  },
  {
    icon: "🧗",
    title: "ATAL — Adventure Tour Leaders Assoc.",
    sub: "Affiliated Member",
  },
  {
    icon: "🏔️",
    title: "Uttarakhand Tourism Department",
    sub: "Reg. No. UTK/2009/0847",
  },
  { icon: "🥇", title: "Times Travel — Best Trek Operator", sub: "Award 2024" },
  {
    icon: "📰",
    title: "National Geographic Traveller India",
    sub: "Featured — November 2023",
  },
  { icon: "✈️", title: "Outlook Traveller", sub: "Best New Trek Company 2015" },
  {
    icon: "🛡️",
    title: "0 Serious Incidents",
    sub: "17-year unblemished safety record",
  },
];

const MEDIA = [
  "National Geographic Traveller India",
  "Times of India Travel",
  "Outlook Traveller",
  "India Today Travel",
  "Conde Nast Traveller India",
  "Mint Lounge",
];

const PARTNERS = [
  { name: "NIMAS", url: "https://www.nimasdirang.com" },
  { name: "IMF India", url: "https://www.indmount.org" },
  { name: "UK Forest Dept", url: "https://forest.uk.gov.in" },
  { name: "SDRF Uttarakhand", url: "https://sdrf.uk.gov.in" },
  { name: "Himalayan Rescue", url: "https://himalayanrescue.org" },
  { name: "Leave No Trace India", url: "https://www.lnt.org" },
  { name: "Thrillophilia", url: "https://www.thrillophilia.com" },
  { name: "MakeMyTrip", url: "https://www.makemytrip.com" },
];

const CSR_IMPACT = [
  { value: "Rs.8,50,000", label: "Donated to Reforestation Fund" },
  { value: "25", label: "Women Trained as Guides" },
  { value: "12,000+", label: "Trees Planted" },
  { value: "0 kg", label: "Plastic Left on Trail" },
  { value: "35", label: "Local Families Supported" },
  { value: "100%", label: "Local Food Sourcing" },
];

const CSR_POLICIES = [
  { icon: "🚫", text: "Zero single-use plastic on all treks since 2018" },
  { icon: "🗑️", text: "All waste carried back to town for proper disposal" },
  { icon: "👥", text: "100% local guide hiring from Himalayan villages" },
  { icon: "🌾", text: "Food supplies sourced from village co-operatives" },
  {
    icon: "👩",
    text: "Women in the Mountains: training women as certified guides",
  },
  { icon: "🌲", text: "One tree planted for every booking received" },
  {
    icon: "💰",
    text: "Rs.50 per trekker donated to Uttarakhand Reforestation Fund",
  },
];

function AnimatedCounter({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - (1 - progress) ** 3;
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background" data-ocid="about.page">
      <SEOHead
        title="About Us — Global Trek | India's Premier Himalayan Trekking Company Since 2009"
        description="Global Trek was founded in Dehradun in 2009. In 17 years we have guided 12,000+ trekkers across 15 Himalayan treks with a perfect safety record. Ministry of Tourism approved, ISO 9001 certified."
        keywords="about global trek, himalayan trekking company, dehradun trek company, uttarakhand tour operator"
        canonical="https://www.globaltrek.in/about"
        geoRegion="IN-UT"
        geoPlacename="Dehradun, Uttarakhand, India"
        lat={30.3165}
        lng={78.0322}
        ogImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
        ogImageAlt="Global Trek Himalayan trekking company"
      />

      {/* 1. CINEMATIC HERO */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-end pb-20 overflow-hidden"
        data-ocid="about.hero_section"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/assets/generated/about-hero-himalaya.dim_1600x900.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.88) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <nav
            className="mb-8 flex items-center gap-2 text-xs text-white/60 font-mono tracking-widest uppercase"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/90">About Us</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {[
              "Founded 2009",
              "Dehradun, Uttarakhand",
              "Ministry of Tourism Approved",
              "4.9/5 Rating",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide border border-white/30 text-white/90"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display italic text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/75 text-xl max-w-xl mb-10 leading-relaxed"
          >
            Where Every Trail Tells a Story — Since 2009
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.6,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <span className="text-white/50 text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* 2. COMPANY STORY */}
      <section className="py-24 px-4" data-ocid="about.story_section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              The Beginning
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-10 leading-tight">
              Born at 3,810 Metres
            </h2>
          </motion.div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              In 2009, a young trekking guide named Rohan Joshi stood at the
              summit of Kedarkantha and made a decision that would change his
              life — and the lives of thousands of trekkers who would follow.
              The view from 3,810 metres was extraordinary: a 360-degree
              panorama of snow-covered peaks, Swargarohini glowing golden in the
              morning sun, the plains of the Gangetic belt shimmering in the
              distance below a sea of clouds. But what moved him was not just
              the view. It was the trekker beside him — a 58-year-old school
              principal from Delhi, doing her first trek, trembling with
              emotion, whispering that she never knew something like this was
              possible for someone like her.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              That moment crystallized everything. The Himalayas were not just
              for elite mountaineers. They were for everyone. What was missing
              was a guide company that truly cared — not just about getting
              people to the summit, but about the entire experience: safety,
              authenticity, local culture, environmental responsibility, and the
              transformative power of nature.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              Global Trek was born in a small office in Rajpur Road, Dehradun,
              with two certified guides, one shared vehicle, and an absolute
              commitment to excellence. The first batch of 8 trekkers went to
              Kedarkantha in December 2009. All 8 summited. All 8 returned
              safely. By 2012, Global Trek had guided over 1,000 trekkers. By
              2015, we achieved ISO 9001:2015 certification — the first trekking
              company in Uttarakhand to do so.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Today, in 2026, Global Trek has guided over 12,000 trekkers across
              15 meticulously curated Himalayan treks and 4 sacred yatras. Our
              team of 35+ certified guides, trained at NIMAS and IMF, lead each
              batch with the same care and precision that Rohan brought to those
              first treks. Our safety record is unblemished: zero serious
              incidents in 17 years of operation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              We are based in Dehradun, Uttarakhand — the gateway to the
              Himalayas. Every guide we employ is from a Himalayan village:
              Sankri, Osla, Kedarnath, Narkanda. They are not just guides; they
              are custodians of these mountains. They know which trail floods in
              September, which campsite has the clearest night sky, which valley
              is home to the Himalayan Monal in spring. Their knowledge is
              generations deep.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
            >
              We care deeply about the communities that make these treks
              possible. We hire locally, pay above-market wages, source our food
              from village co-operatives, and donate Rs.50 per trekker to the
              Uttarakhand Reforestation Fund. Our Women in the Mountains
              programme has trained 25 women from Sankri, Kedarnath, and Chitkul
              as certified trek guides — because the mountains belong to
              everyone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
            >
              If you have ever looked at a photograph of snow-covered peaks and
              felt something stir inside you — a longing you cannot quite name —
              that feeling is an invitation. We are here to answer it. Come trek
              with us. The mountains are waiting.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. STATS */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #0D1A0F 0%, #1A7A4C 100%)",
        }}
        data-ocid="about.stats_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl italic text-white">
              17 Years of Numbers That Matter
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.stat.item.${i + 1}`}
              >
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-white/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER */}
      <section className="py-24 px-4" data-ocid="about.founder_section">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                alt="Rohan Joshi leading a trek in the Himalayas"
                className="rounded-2xl w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl"
                style={{
                  background: "rgba(0,0,0,0.72)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: "#E8963A" }}
                >
                  Founder
                </p>
                <p className="text-white font-display text-lg italic">
                  Rohan Joshi
                </p>
                <p className="text-white/70 text-xs">
                  NIMAS Gold Medallist — IMF Grade A — 200+ Kedarkantha summits
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: "#E8963A" }}
              >
                The Founder
              </p>
              <h2 className="font-display text-4xl italic text-foreground mb-6 leading-tight">
                Rohan Joshi — Founder and Lead Trek Director
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rohan Joshi (born 1985, Uttarkashi) has been climbing
                  Himalayan peaks since age 12. A NIMAS Advanced Mountaineering
                  graduate with the Gold Medal in 2007, and an IMF Grade A
                  Mountaineer, Rohan spent 7 years as a search and rescue
                  volunteer with SDRF Uttarakhand before founding Global Trek in
                  2009.
                </p>
                <p>
                  He has summited Kedarkantha over 200 times and traversed Har
                  Ki Dun Valley more than 60 times. Each trek, for Rohan, is not
                  a repetition — it is a new story. A new set of people
                  discovering something they did not know they were capable of.
                </p>
                <p>
                  In 2019, Rohan authored The Himalayan Trek Guide — a
                  practical, beautifully written guide to India's best
                  high-altitude treks. In 2023, National Geographic Traveller
                  India profiled him as one of India's most influential outdoor
                  voices. His mission: make Himalayan trekking safe,
                  sustainable, and accessible to every Indian.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "NIMAS Gold Medal",
                  "IMF Grade A",
                  "SDRF Volunteer",
                  "Author",
                  "Nat Geo Featured",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono border"
                    style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section
        className="py-24 px-4"
        style={{ background: "#0D1A0F" }}
        data-ocid="about.values_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-white">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl border border-white/10 hover:border-green-600/50 transition-all duration-300 group"
                style={{ background: "rgba(255,255,255,0.04)" }}
                data-ocid={`about.value.item.${i + 1}`}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-green-400 transition-colors">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-24 px-4" data-ocid="about.team_section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              The People
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              Meet the Team
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              35+ guides, coordinators, and support professionals — all united
              by a love for the Himalayas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-2xl border border-border bg-card overflow-hidden group"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={`${member.name} at Global Trek`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs font-mono text-white/90"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.75))",
                    }}
                  >
                    {member.years}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p
                    className="font-mono text-xs mt-0.5 mb-2"
                    style={{ color: "#E8963A" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-xs font-mono px-2 py-0.5 rounded-full inline-block mb-3 border"
                    style={{
                      borderColor: "#1A7A4C30",
                      color: "#1A7A4C",
                      background: "#1A7A4C10",
                    }}
                  >
                    {member.cert}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.bio}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#1A7A4C" }}>
                    Specialty: {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GUIDES PHILOSOPHY */}
      <section
        className="py-24 px-4"
        style={{
          background: "linear-gradient(135deg, #1A7A4C 0%, #0D3D26 100%)",
        }}
        data-ocid="about.guides_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-3 text-white/60">
                The Heart of Global Trek
              </p>
              <h2 className="font-display text-4xl italic text-white mb-6">
                Our Mountain Guides
              </h2>
              <div className="space-y-4 text-white/75 leading-relaxed text-sm">
                <p>
                  Every guide we certify has grown up in a Himalayan village.
                  They are not trained city professionals who learned trekking
                  from textbooks. They are Ankit from Sankri, Dinesh from
                  Bhuntar, Bimla from Kedarnath — people who have been
                  navigating these mountains since childhood.
                </p>
                <p>
                  We send every guide through NIMAS Basic and Advanced
                  Mountaineering courses, Wilderness First Responder training,
                  and our own 100-hour internal certification program covering
                  everything from high-altitude medicine to cultural hospitality
                  to emergency GPS navigation.
                </p>
                <p>
                  We pay above-market wages, provide health insurance, and offer
                  year-round employment. The result: our guides return season
                  after season, accumulating the kind of route knowledge that
                  takes decades to build.
                </p>
                <p>
                  The bond between a trekker and their guide is the heart of
                  every Global Trek experience. We protect that bond by
                  investing deeply in the people who carry it.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-6 text-white/60">
                Guide Certification Checklist
              </p>
              <div className="space-y-3">
                {GUIDE_CERTS.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ background: "#E8963A", color: "#0A0E14" }}
                    >
                      ✓
                    </div>
                    <span className="text-white text-sm font-mono">{cert}</span>
                  </motion.div>
                ))}
              </div>
              <div
                className="mt-8 p-5 rounded-2xl grid grid-cols-2 gap-4"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    35+
                  </div>
                  <div className="text-white/60 text-xs">
                    Certified guides on permanent roster
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    100h
                  </div>
                  <div className="text-white/60 text-xs">
                    Internal training every guide must complete
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. TIMELINE */}
      <section
        className="py-24 px-4 overflow-hidden"
        data-ocid="about.timeline_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              17 Years
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              Our Journey
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div
                className="absolute top-6 left-0 right-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(to right, #1A7A4C, #E8963A, #1A7A4C)",
                }}
              />
              <div className="flex justify-between gap-1">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex-1 flex flex-col items-center"
                    data-ocid={`about.timeline.item.${i + 1}`}
                  >
                    <div
                      className="w-3 h-3 rounded-full border-2 border-background z-10 flex-shrink-0"
                      style={{
                        background: i % 2 === 0 ? "#1A7A4C" : "#E8963A",
                      }}
                    />
                    <div className="mt-4 text-center px-1">
                      <div
                        className="font-display text-base font-bold mb-0.5"
                        style={{ color: i % 2 === 0 ? "#1A7A4C" : "#E8963A" }}
                      >
                        {item.year}
                      </div>
                      <div className="font-mono text-xs font-semibold text-foreground mb-1">
                        {item.title}
                      </div>
                      <div className="text-muted-foreground text-xs leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden relative pl-8">
            <div
              className="absolute left-3 top-0 bottom-0 w-0.5"
              style={{
                background: "linear-gradient(to bottom, #1A7A4C, #E8963A)",
              }}
            />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative"
                  data-ocid={`about.timeline_mobile.item.${i + 1}`}
                >
                  <div
                    className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full border-2 border-background"
                    style={{ background: i % 2 === 0 ? "#1A7A4C" : "#E8963A" }}
                  />
                  <div
                    className="font-display text-base font-bold"
                    style={{ color: i % 2 === 0 ? "#1A7A4C" : "#E8963A" }}
                  >
                    {item.year}
                  </div>
                  <div className="font-mono text-sm font-semibold text-foreground">
                    {item.title}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section
        className="py-24 px-4"
        style={{ background: "#F3F7F5" }}
        data-ocid="about.certifications_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Accreditations
            </p>
            <h2
              className="font-display text-4xl italic"
              style={{ color: "#0D1A0F" }}
            >
              Certifications and Awards
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border text-center hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#1A7A4C20" }}
                data-ocid={`about.cert.item.${i + 1}`}
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3
                  className="font-mono text-xs font-bold"
                  style={{ color: "#0D1A0F" }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: "#1A7A4C" }}>
                  {cert.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SUSTAINABILITY */}
      <section className="py-24 px-4" data-ocid="about.sustainability_section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Responsibility
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
              Sustainability and CSR
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl italic text-foreground mb-6">
                Our Policies
              </h3>
              <div className="space-y-4">
                {CSR_POLICIES.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-2xl italic text-foreground mb-6">
                Impact So Far
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {CSR_IMPACT.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="p-5 rounded-2xl text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #1A7A4C15, #1A7A4C05)",
                      border: "1px solid #1A7A4C25",
                    }}
                    data-ocid={`about.csr.item.${i + 1}`}
                  >
                    <div
                      className="font-display text-2xl font-bold mb-1"
                      style={{ color: "#1A7A4C" }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #1A7A4C, #0D3D26)",
                }}
              >
                <p className="text-white font-display italic text-lg">
                  Leave the mountains better than you found them.
                </p>
                <p className="text-white/60 text-sm mt-2 font-mono">
                  — Rohan Joshi, Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. PRESS */}
      <section
        className="py-20 px-4"
        style={{ background: "#F3F7F5" }}
        data-ocid="about.press_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Media
            </p>
            <h2
              className="font-display text-3xl italic"
              style={{ color: "#0D1A0F" }}
            >
              As Featured In
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {MEDIA.map((outlet, i) => (
              <motion.div
                key={outlet}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-4 bg-white rounded-xl border font-mono text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: "#1A7A4C20", color: "#0D1A0F" }}
                data-ocid={`about.press.item.${i + 1}`}
              >
                {outlet}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PARTNERS */}
      <section className="py-20 px-4" data-ocid="about.partners_section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Associations
            </p>
            <h2 className="font-display text-3xl italic text-foreground">
              Partner Organizations
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-xl border font-mono text-sm font-semibold transition-all hover:shadow-md"
                style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
                data-ocid={`about.partner.item.${i + 1}`}
              >
                {p.name}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 13. COMMUNITY */}
      <section
        className="py-24 px-4"
        style={{
          background: "linear-gradient(135deg, #0D1A0F 0%, #1A7A4C 100%)",
        }}
        data-ocid="about.community_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest uppercase mb-3 text-white/60">
              The Global Trek Family
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-white">
              12,000+ Strong
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
              Every trekker who has trekked with us is part of a community that
              extends far beyond any single mountain. We connect alumni through
              WhatsApp groups sorted by trek, annual reunion treks, and a
              quarterly newsletter covering conservation news, trek updates, and
              community stories.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "47", label: "Active WhatsApp Communities", icon: "💬" },
              { value: "3,200+", label: "Instagram Followers", icon: "📸" },
              { value: "150", label: "Annual Reunion Trek Alumni", icon: "🏔️" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
                data-ocid={`about.community.item.${i + 1}`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-display text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-white/60 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-mono text-xs tracking-widest uppercase mb-5 text-white/60">
              Join the Community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="font-mono text-sm tracking-wide rounded-full px-6"
                style={{ background: "#25D366", color: "white" }}
                data-ocid="about.community.whatsapp_button"
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join WhatsApp Community
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="font-mono text-sm tracking-wide rounded-full px-6 border-white/30 text-white hover:bg-white/10"
                data-ocid="about.community.instagram_button"
              >
                <a
                  href="https://instagram.com/globaltrekin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="font-mono text-sm tracking-wide rounded-full px-6 border-white/30 text-white hover:bg-white/10"
                data-ocid="about.community.newsletter_button"
              >
                <Link to="/contact">Subscribe to Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section
        className="relative py-32 px-4 overflow-hidden text-center"
        style={{ background: "#1A7A4C" }}
        data-ocid="about.cta_section"
      >
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L240 80 L480 140 L720 40 L960 120 L1200 60 L1440 100 L1440 200 Z"
            fill="white"
          />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-white/70">
              Start Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-white mb-6 leading-tight">
              Ready to Write Your Own Mountain Story?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              15 extraordinary treks. Expert-certified guides. Zero serious
              incidents in 17 years. Your adventure starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-mono text-sm tracking-wide rounded-full px-8 hover:scale-105 transition-transform"
                style={{ background: "#E8963A", color: "#0A0E14" }}
                data-ocid="about.cta.explore_button"
              >
                <Link to="/explore">Explore All Treks</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-mono text-sm tracking-wide rounded-full px-8 border-white text-white hover:bg-white/10 hover:scale-105 transition-all"
                data-ocid="about.cta.contact_button"
              >
                <Link to="/contact">Talk to a Trek Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
