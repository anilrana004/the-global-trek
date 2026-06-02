import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Mountain, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };
  const closeMegaDelayed = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
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
              Explore
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
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/yatra"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.yatra_link"
            >
              Yatra
            </Link>
            <Link
              to="/packages"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.packages_link"
            >
              Packages
            </Link>
            <Link
              to="/blog"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.blog_link"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-label text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              data-ocid="navbar.contact_link"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Search"
              data-ocid="navbar.search_button"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact">
              <Button
                size="sm"
                className="font-label text-xs font-bold tracking-widest uppercase rounded-full px-5"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
                data-ocid="navbar.book_now_button"
              >
                Book Now
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
              <span className="text-white/70 text-lg">🔔</span>
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
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button
                className="mt-6 w-full font-label text-sm tracking-widest uppercase rounded-full"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
                data-ocid="navbar.mobile.book_now_button"
              >
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
