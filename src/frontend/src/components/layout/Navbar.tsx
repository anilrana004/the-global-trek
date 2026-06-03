import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Mountain, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { NotificationBell } from "../NotificationBell";
import { LanguageToggle } from "../ui/LanguageToggle";

const uttarakhandTreks = [
  { label: "Chopta Tungnath", slug: "chopta-tungnath" },
  { label: "Har Ki Dun", slug: "har-ki-dun" },
  { label: "Kedarkantha", slug: "kedarkantha" },
  { label: "Kuari Pass", slug: "kuari-pass" },
  { label: "Phulara Ridge", slug: "phulara-ridge" },
  { label: "Valley of Flowers", slug: "valley-of-flowers" },
  { label: "Roopkund", slug: "roopkund" },
  { label: "Brahmatal", slug: "brahmatal" },
  { label: "Dayara Bugyal", slug: "dayara-bugyal" },
  { label: "Nag Tibba", slug: "nag-tibba" },
];

const himachalTreks = [
  { label: "Hampta Pass", slug: "hampta-pass" },
  { label: "Sar Pass", slug: "sar-pass" },
  { label: "Kheerganga", slug: "kheerganga" },
  { label: "Triund", slug: "triund" },
  { label: "Beas Kund", slug: "beas-kund" },
];

const featuredTreks = [
  {
    label: "Kedarkantha",
    slug: "kedarkantha",
    price: "\u20b98,500",
    state: "uttarakhand",
  },
  {
    label: "Chopta Tungnath",
    slug: "chopta-tungnath",
    price: "\u20b97,200",
    state: "uttarakhand",
  },
  {
    label: "Har Ki Dun",
    slug: "har-ki-dun",
    price: "\u20b99,500",
    state: "uttarakhand",
  },
  {
    label: "Hampta Pass",
    slug: "hampta-pass",
    price: "\u20b911,500",
    state: "himachal-pradesh",
  },
  {
    label: "Sar Pass",
    slug: "sar-pass",
    price: "\u20b99,800",
    state: "himachal-pradesh",
  },
  {
    label: "Roopkund",
    slug: "roopkund",
    price: "\u20b914,500",
    state: "uttarakhand",
  },
];

const yatraPackages = [
  { label: "Kedarnath Yatra", to: "/yatra/kedarnath" },
  { label: "Do Dham Yatra", to: "/yatra/do-dham" },
  { label: "Char Dham Yatra", to: "/yatra/char-dham" },
  { label: "Panch Kedar", to: "/yatra/panch-kedar" },
  { label: "Corporate Trekking", to: "/packages/corporate" },
  { label: "School & College", to: "/packages/school-college" },
  { label: "Family Packages", to: "/packages/family" },
  { label: "Custom Builder", to: "/packages/customize" },
];

const mobileCategories = [
  "All",
  "Treks",
  "Yatra",
  "Winter",
  "Monsoon",
  "Packages",
  "Easy",
];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    if (searchOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

  const allTreks = [
    ...uttarakhandTreks.map((t) => ({ ...t, state: "uttarakhand" })),
    ...himachalTreks.map((t) => ({ ...t, state: "himachal-pradesh" })),
  ];
  const filteredResults = searchQuery.trim()
    ? allTreks.filter((t) =>
        t.label.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : featuredTreks;
  const openMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };
  const closeMegaDelayed = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      {/* Search overlay */}
      {searchOpen && (
        <section
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
          style={{
            background: "rgba(10,46,26,0.96)",
            backdropFilter: "blur(8px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSearchOpen(false);
          }}
          aria-label="Trek search overlay"
          data-ocid="navbar.search_overlay"
        >
          <div className="w-full max-w-2xl">
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
            >
              <Search className="w-5 h-5 text-white/60 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treks, yatras, packages..."
                className="flex-1 bg-transparent text-white placeholder:text-white/40 text-base outline-none"
                aria-label="Search treks"
                data-ocid="navbar.search_input"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-white/60 hover:text-white" />
              </button>
            </div>
            {filteredResults.length > 0 && (
              <div
                className="mt-3 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(20,92,56,0.97)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="px-5 pt-3 pb-1 text-[10px] font-label tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {searchQuery ? "Results" : "Featured Treks"}
                </p>
                {filteredResults.map((t) => (
                  <Link
                    key={t.slug}
                    to="/treks/$state/$slug"
                    params={{ state: t.state, slug: t.slug }}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-white/10 transition-colors border-t"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    data-ocid="navbar.search_result"
                  >
                    <Mountain
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#2ECC71" }}
                    />
                    <span className="text-white text-sm flex-1">{t.label}</span>
                    {"price" in t && (
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#F4A623" }}
                      >
                        {(t as { price: string }).price}
                      </span>
                    )}
                    <span
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {t.state === "uttarakhand" ? "Uttarakhand" : "Himachal"}
                    </span>
                  </Link>
                ))}
              </div>
            )}
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Press Escape to close
            </p>
          </div>
        </section>
      )}
      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          background: scrolled ? "#145C38" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        data-ocid="navbar"
      >
        {/* Desktop header */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="navbar.logo_link"
          >
            <Mountain className="w-7 h-7 text-white" />
            <span className="font-label text-lg font-bold tracking-widest text-white uppercase">
              Global Trek
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="flex items-center gap-6">
            <Link
              to="/explore"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.explore_link"
            >
              {t("nav_explore")}
            </Link>
            {/* Treks mega-menu trigger */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMegaDelayed}
              ref={megaRef}
            >
              <button
                type="button"
                className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide flex items-center gap-1"
                data-ocid="navbar.treks_menu_trigger"
                aria-haspopup="true"
                aria-expanded={megaOpen}
              >
                Treks ▾
              </button>
              {megaOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl shadow-2xl border z-50 p-6 grid grid-cols-3 gap-6"
                  style={{ background: "#0A2E1A", borderColor: "#1A7A4C" }}
                  onMouseEnter={openMega}
                  onMouseLeave={closeMegaDelayed}
                  data-ocid="navbar.treks_megamenu"
                >
                  {/* Uttarakhand */}
                  <div>
                    <p className="font-label text-xs text-white/50 uppercase tracking-widest mb-3">
                      🏔 Uttarakhand
                    </p>
                    {uttarakhandTreks.map((t) => (
                      <Link
                        key={t.slug}
                        to="/treks/$state/$slug"
                        params={{ state: "uttarakhand", slug: t.slug }}
                        className="block py-1 text-sm text-white/70 hover:text-white transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {t.label}
                      </Link>
                    ))}
                    <Link
                      to="/treks/uttarakhand"
                      className="inline-block mt-2 text-xs font-semibold tracking-wide"
                      style={{ color: "#2ECC71" }}
                      onClick={() => setMegaOpen(false)}
                    >
                      View All Uttarakhand →
                    </Link>
                  </div>
                  {/* Himachal Pradesh */}
                  <div>
                    <p className="font-label text-xs text-white/50 uppercase tracking-widest mb-3">
                      🏔 Himachal Pradesh
                    </p>
                    {himachalTreks.map((t) => (
                      <Link
                        key={t.slug}
                        to="/treks/$state/$slug"
                        params={{ state: "himachal-pradesh", slug: t.slug }}
                        className="block py-1 text-sm text-white/70 hover:text-white transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {t.label}
                      </Link>
                    ))}
                    <Link
                      to="/treks/himachal-pradesh"
                      className="inline-block mt-2 text-xs font-semibold tracking-wide"
                      style={{ color: "#2ECC71" }}
                      onClick={() => setMegaOpen(false)}
                    >
                      View All Himachal →
                    </Link>
                  </div>
                  {/* Yatra & Packages */}
                  <div>
                    <p className="font-label text-xs text-white/50 uppercase tracking-widest mb-3">
                      🕉 Yatra & Packages
                    </p>
                    {yatraPackages.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to as "/"}
                        className="block py-1 text-sm text-white/70 hover:text-white transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div
                      className="mt-3 pt-3 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <Link
                        to="/availability"
                        className="flex items-center gap-2 py-1 text-sm font-semibold transition-colors"
                        style={{ color: "#2ECC71" }}
                        onClick={() => setMegaOpen(false)}
                        data-ocid="navbar.live_availability_link"
                      >
                        <span className="relative flex h-2 w-2">
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ background: "#2ECC71" }}
                          />
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ background: "#2ECC71" }}
                          />
                        </span>
                        Live Availability
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/yatra"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.yatra_link"
            >
              {t("nav_yatra")}
            </Link>
            <Link
              to="/packages"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.packages_link"
            >
              {t("nav_packages")}
            </Link>
            <Link
              to="/blog"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.blog_link"
            >
              {t("nav_blog")}
            </Link>
            <Link
              to="/contact"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.contact_link"
            >
              {t("nav_contact")}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <NotificationBell />
            <button
              type="button"
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Search"
              data-ocid="navbar.search_button"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/explore">
              <Button
                size="sm"
                className="font-label text-xs font-bold tracking-widest uppercase rounded-full px-5"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
                data-ocid="navbar.book_now_button"
              >
                {t("nav_book_now")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden">
          <div
            className="flex items-center justify-between h-14 px-4"
            style={{ background: "#145C38" }}
          >
            <Link
              to="/"
              className="flex items-center gap-2"
              data-ocid="navbar.mobile_logo_link"
            >
              <Mountain className="w-6 h-6 text-white" />
              <span className="font-label text-sm font-bold tracking-widest text-white uppercase">
                Global Trek
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <NotificationBell />
              <button
                type="button"
                className="text-white p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-ocid="navbar.mobile_menu_toggle"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile search bar */}
          <div className="px-4 py-2" style={{ background: "#0A2E1A" }}>
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <Search className="w-4 h-4 text-white/60" />
              <span className="text-white/50 text-sm font-body">
                Search treks, yatras...
              </span>
            </div>
          </div>
          {/* Category chips */}
          <div
            className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide"
            style={{ background: "#0A2E1A" }}
          >
            {mobileCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="shrink-0 px-4 py-1.5 rounded-full font-label text-xs font-semibold tracking-wide transition-colors"
                style={{
                  background:
                    cat === "All" ? "#22A05E" : "rgba(255,255,255,0.1)",
                  color: "white",
                }}
                data-ocid={`navbar.mobile_category.${cat.toLowerCase().replace(/ /g, "_")}_chip`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col pt-36 px-6 overflow-y-auto"
          style={{ background: "#0A2E1A" }}
          data-ocid="navbar.mobile_menu"
        >
          <nav className="flex flex-col gap-1">
            {[
              { label: "Home", to: "/" },
              { label: "Explore Treks", to: "/explore" },
              { label: "All Treks", to: "/treks" },
              { label: "Yatra & Pilgrimages", to: "/yatra" },
              { label: "Packages", to: "/packages" },
              { label: "Gear Rental", to: "/gear-rental" },
              { label: "Blog", to: "/blog" },
              { label: "Live Availability", to: "/availability" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to as "/"}
                className="py-3 font-label text-lg font-semibold text-white border-b border-white/10"
                onClick={() => setMobileOpen(false)}
                data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-white/60 text-sm">Language / भाषा</span>
              <LanguageToggle />
            </div>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button
                className="mt-4 w-full font-label text-sm tracking-widest uppercase rounded-full"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
                data-ocid="navbar.mobile.book_now_button"
              >
                {t("nav_book_now")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
