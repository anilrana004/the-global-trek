import { Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Download,
  Gift,
  Heart,
  MapPin,
  Moon,
  Mountain,
  Star,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const STATS = [
  { label: "Treks Completed", value: "3", icon: Mountain, color: "#145C38" },
  { label: "Total Km Walked", value: "78", icon: MapPin, color: "#1a7a4c" },
  { label: "Total Nights", value: "12", icon: Moon, color: "#22a05e" },
  {
    label: "Next Trek",
    value: "18d",
    icon: Clock,
    color: "#f4a623",
    isCountdown: true,
  },
];

const UPCOMING_TREKS = [
  {
    id: "GT-2026-KK-08547",
    trek: "Kedarkantha Trek",
    dates: "Dec 20–24, 2026",
    persons: 2,
    status: "Confirmed",
    paid: 22785,
    daysLeft: 18,
    coordinator: "Ankit Rawat",
    slug: "kedarkantha",
  },
];

const PAST_TREKS = [
  {
    trek: "Chopta Tungnath Trek",
    date: "Oct 2026",
    id: "GT-2026-CT-04230",
    certId: "GT-CERT-2026-001",
  },
  {
    trek: "Hampta Pass Trek",
    date: "Jun 2026",
    id: "GT-2026-HP-01122",
    certId: "GT-CERT-2026-002",
  },
];

const WISHLIST = [
  {
    name: "Har Ki Dun",
    difficulty: "Moderate",
    price: "₹14,500",
    slug: "har-ki-dun",
  },
  {
    name: "Char Dham Yatra",
    difficulty: "Easy",
    price: "₹32,000",
    slug: "char-dham",
  },
  {
    name: "Valley of Flowers",
    difficulty: "Easy",
    price: "₹9,500",
    slug: "valley-of-flowers",
  },
];

export default function DashboardPage() {
  const [referralCopied, setReferralCopied] = useState(false);
  const [earnings] = useState(1000);

  const copyReferral = () => {
    navigator.clipboard.writeText("RAHUL25");
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: 80, paddingBottom: 48 }}
      data-ocid="dashboard.page"
    >
      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #1a7a4c 100%)",
        }}
        className="mb-0"
      >
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: "#2ecc71" }}
              >
                My Account
              </p>
              <h1
                className="font-display text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Namaste, Rahul! 🏔️
              </h1>
              <p className="text-white/70">
                Your trekking journey, all in one place.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/account/my-bookings"
                className="px-5 py-2.5 rounded-xl font-mono text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-smooth"
                data-ocid="dashboard.my_bookings_button"
              >
                My Bookings
              </Link>
              <Link
                to="/account/profile"
                className="px-5 py-2.5 rounded-xl font-mono text-sm font-semibold flex items-center gap-2 transition-smooth hover:opacity-90"
                style={{ background: "#2ecc71", color: "#0A2E1A" }}
                data-ocid="dashboard.edit_profile_button"
              >
                <User className="w-4 h-4" /> Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6 relative z-10 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-card border border-border p-5 shadow-sm"
              data-ocid={`dashboard.stat.${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <p
                className="font-display text-3xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: stat.color,
                }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Navigation tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl bg-muted/50 w-fit mb-8"
          role="tablist"
        >
          {["Overview", "Bookings", "Certificates"].map((tab) => (
            <Link
              key={tab}
              to={
                tab === "Bookings"
                  ? "/account/my-bookings"
                  : tab === "Certificates"
                    ? "/account/certificates"
                    : "/account/dashboard"
              }
              className="px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider uppercase transition-smooth"
              style={
                tab === "Overview"
                  ? { background: "#145C38", color: "white" }
                  : undefined
              }
              data-ocid={`dashboard.nav_tab.${tab.toLowerCase()}`}
            >
              {tab}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming treks */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Upcoming Treks
                </h2>
                <Link
                  to="/account/my-bookings"
                  className="font-mono text-xs transition-smooth hover:underline"
                  style={{ color: "#145C38" }}
                >
                  View all →
                </Link>
              </div>
              {UPCOMING_TREKS.map((trek, i) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="rounded-2xl bg-card border border-border p-5"
                  data-ocid={`dashboard.upcoming_trek.item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full font-bold"
                          style={{ background: "#e8f5ee", color: "#145C38" }}
                        >
                          ✓ {trek.status}
                        </span>
                      </div>
                      <h3
                        className="font-display text-xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#0A2E1A",
                        }}
                      >
                        {trek.trek}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {trek.dates} · {trek.persons} Trekkers
                      </p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        Booking: {trek.id}
                      </p>
                    </div>
                    <div
                      className="shrink-0 text-center rounded-xl p-3 min-w-16"
                      style={{ background: "#e8f5ee" }}
                    >
                      <p
                        className="font-display text-3xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#145C38",
                        }}
                      >
                        {trek.daysLeft}
                      </p>
                      <p
                        className="font-mono text-xs"
                        style={{ color: "#145C38" }}
                      >
                        days away
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground font-mono mb-1">
                      <span>Booking confirmed</span>
                      <span>{trek.daysLeft} days to go</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-smooth"
                        style={{
                          background: "#145C38",
                          width: `${Math.max(5, 100 - (trek.daysLeft / 60) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg font-mono text-xs font-semibold text-white transition-smooth hover:opacity-90"
                      style={{ background: "#145C38" }}
                      data-ocid={`dashboard.view_details_button.${i + 1}`}
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40"
                      data-ocid={`dashboard.contact_guide_button.${i + 1}`}
                    >
                      Contact Guide
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1"
                      data-ocid={`dashboard.download_itinerary_button.${i + 1}`}
                    >
                      <Download className="w-3 h-3" /> Itinerary
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 font-mono">
                    Trek Coordinator: <strong>{trek.coordinator}</strong> · Will
                    call you 3 days before departure
                  </p>
                </motion.div>
              ))}
            </section>

            {/* Past treks */}
            <section>
              <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                Past Treks
              </h2>
              <div className="rounded-2xl bg-card border border-border overflow-hidden">
                {PAST_TREKS.map((trek, i) => (
                  <div
                    key={trek.id}
                    className={`p-4 flex items-center justify-between gap-4 ${i < PAST_TREKS.length - 1 ? "border-b border-border" : ""}`}
                    data-ocid={`dashboard.past_trek.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#e8f5ee" }}
                      >
                        <Award
                          className="w-5 h-5"
                          style={{ color: "#145C38" }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-display font-semibold text-sm"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {trek.trek}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {trek.date} · {trek.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1"
                        data-ocid={`dashboard.download_cert_button.${i + 1}`}
                      >
                        <Download className="w-3 h-3" /> Certificate
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1"
                        data-ocid={`dashboard.write_review_button.${i + 1}`}
                      >
                        <Star className="w-3 h-3" /> Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Wishlist */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  My Wishlist
                </h2>
                <Heart className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {WISHLIST.map((item, i) => (
                  <Link
                    key={item.name}
                    to="/treks"
                    className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary transition-smooth group"
                    data-ocid={`dashboard.wishlist_item.${i + 1}`}
                  >
                    <div className="min-w-0">
                      <p
                        className="font-display font-semibold text-sm truncate"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.difficulty} · {item.price}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Referral */}
            <section
              className="rounded-2xl border border-border p-5"
              style={{
                background: "linear-gradient(135deg, #e8f5ee, #f0faf4)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5" style={{ color: "#145C38" }} />
                <h2
                  className="font-mono text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#145C38" }}
                >
                  Refer & Earn
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Earn <strong className="text-foreground">₹500</strong> for every
                friend who books through your referral code.
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex-1 px-3 py-2 rounded-lg border border-border bg-card font-mono text-sm font-bold tracking-widest text-center"
                  style={{ color: "#145C38", letterSpacing: "0.15em" }}
                >
                  RAHUL25
                </div>
                <button
                  type="button"
                  onClick={copyReferral}
                  className="px-3 py-2 rounded-lg font-mono text-xs font-semibold text-white transition-smooth hover:opacity-90 flex items-center gap-1 shrink-0"
                  style={{ background: "#145C38" }}
                  data-ocid="dashboard.copy_referral_button"
                >
                  {referralCopied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {referralCopied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono text-xs">
                  Total earned
                </span>
                <span
                  className="font-display font-bold"
                  style={{
                    color: "#145C38",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  ₹{earnings.toLocaleString()}
                </span>
              </div>
            </section>

            {/* Quick links */}
            <section className="rounded-2xl bg-card border border-border p-4">
              <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                Quick Links
              </h2>
              <nav className="space-y-1">
                {[
                  {
                    label: "My Bookings",
                    to: "/account/my-bookings",
                    icon: Calendar,
                  },
                  {
                    label: "Certificates",
                    to: "/account/certificates",
                    icon: Award,
                  },
                  { label: "Edit Profile", to: "/account/profile", icon: User },
                  { label: "Explore Treks", to: "/explore", icon: Mountain },
                ].map(({ label, to, icon: Icon }) => (
                  <Link
                    key={label}
                    to={to}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth"
                    data-ocid={`dashboard.quicklink.${label.toLowerCase().replace(/ /g, "_")}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                ))}
              </nav>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
