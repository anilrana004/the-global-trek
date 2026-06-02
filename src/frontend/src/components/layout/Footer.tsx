import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const uttarakhandLinks = [
  { label: "Chopta Tungnath Trek", slug: "chopta-tungnath" },
  { label: "Har Ki Dun Trek", slug: "har-ki-dun" },
  { label: "Kedarkantha Trek", slug: "kedarkantha" },
  { label: "Kuari Pass Trek", slug: "kuari-pass" },
  { label: "Phulara Ridge Trek", slug: "phulara-ridge" },
  { label: "Valley of Flowers Trek", slug: "valley-of-flowers" },
  { label: "Roopkund Trek", slug: "roopkund" },
  { label: "Brahmatal Trek", slug: "brahmatal" },
  { label: "Dayara Bugyal Trek", slug: "dayara-bugyal" },
  { label: "Nag Tibba Trek", slug: "nag-tibba" },
];

const himachalLinks = [
  { label: "Hampta Pass Trek", slug: "hampta-pass" },
  { label: "Sar Pass Trek", slug: "sar-pass" },
  { label: "Kheerganga Trek", slug: "kheerganga" },
  { label: "Triund Trek", slug: "triund" },
  { label: "Beas Kund Trek", slug: "beas-kund" },
];

const yatraLinks = [
  { label: "Kedarnath Yatra 2026", to: "/yatra/kedarnath" },
  { label: "Do Dham Yatra", to: "/yatra/do-dham" },
  { label: "Char Dham Yatra", to: "/yatra/char-dham" },
  { label: "Panch Kedar", to: "/yatra/panch-kedar" },
  { label: "Yamunotri Dham", to: "/yatra" },
  { label: "Gangotri Dham", to: "/yatra" },
  { label: "Badrinath Dham", to: "/yatra" },
];

const packageLinks = [
  { label: "Corporate Trekking", to: "/packages/corporate" },
  { label: "School/College Trek", to: "/packages/school-college" },
  { label: "Family Trek Package", to: "/packages/family" },
  { label: "Honeymoon Trek", to: "/packages/honeymoon" },
  { label: "Solo Trekker Batch", to: "/packages/solo" },
  { label: "Custom Trip Builder", to: "/packages/customize" },
  { label: "Gear Rental", to: "/gear-rental" },
];

const exploreLinks = [
  { label: "About Global Trek", to: "/about" },
  { label: "Trek Gallery", to: "/gallery" },
  { label: "Blog & Articles", to: "/blog" },
  { label: "Explore by Region", to: "/explore" },
  { label: "Safety Policy", to: "/contact" },
  { label: "Career Opportunities", to: "/contact" },
  { label: "Press & Media", to: "/contact" },
  { label: "Partner With Us", to: "/contact" },
  { label: "Affiliate Program", to: "/contact" },
];

const helpLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/contact" },
  { label: "How to Book", to: "/contact" },
  { label: "Booking Policy", to: "/contact" },
  { label: "Cancellation Policy", to: "/contact" },
  { label: "Refund Policy", to: "/contact" },
  { label: "Trek Insurance", to: "/contact" },
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms of Service", to: "/contact" },
  { label: "Cookie Policy", to: "/contact" },
  { label: "Accessibility", to: "/contact" },
];

function FooterSection({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4
        className="font-label text-xs font-bold tracking-widest uppercase"
        style={{ color: "#2ECC71" }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

function FooterLink({
  to,
  children,
}: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to as "/"}
      className="block text-xs leading-relaxed transition-colors"
      style={{ color: "rgba(255,255,255,0.6)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color =
          "rgba(255,255,255,0.6)";
      }}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ background: "#145C38" }} data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* 8-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-4">
          {/* 1. Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏔</span>
              <span className="font-label text-base font-bold tracking-widest text-white uppercase">
                Global Trek
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              India's most trusted Himalayan trekking company. Founded in
              Dehradun, born from the mountains. Certified guides, safe
              expeditions, unforgettable experiences since 2008.
            </p>
            <p className="text-xs italic" style={{ color: "#2ECC71" }}>
              "Where Every Trail Tells a Story"
            </p>
            <div className="flex gap-3 pt-1">
              {[
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com/globaltrek.in",
                },
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://facebook.com/globaltrek.in",
                },
                {
                  Icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com/@globaltrek",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/globaltrek",
                },
                {
                  Icon: SiWhatsapp,
                  label: "WhatsApp",
                  href: "https://wa.me/919876543210",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            {/* Cert badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Ministry of Tourism", "Uttarakhand Tourism", "ISO 9001"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 rounded text-[9px] font-label font-semibold tracking-wide border"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* 2. Uttarakhand Treks */}
          <FooterSection title="Uttarakhand">
            <div className="space-y-1.5">
              {uttarakhandLinks.map((t) => (
                <Link
                  key={t.slug}
                  to="/treks/$state/$slug"
                  params={{ state: "uttarakhand", slug: t.slug }}
                  className="block text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.6)";
                  }}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </FooterSection>

          {/* 3. Himachal */}
          <FooterSection title="Himachal Pradesh">
            <div className="space-y-1.5">
              {himachalLinks.map((t) => (
                <Link
                  key={t.slug}
                  to="/treks/$state/$slug"
                  params={{ state: "himachal-pradesh", slug: t.slug }}
                  className="block text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.6)";
                  }}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </FooterSection>

          {/* 4. Yatra */}
          <FooterSection title="Yatra">
            <div className="space-y-1.5">
              {yatraLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* 5. Packages */}
          <FooterSection title="Packages">
            <div className="space-y-1.5">
              {packageLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* 6. Explore */}
          <FooterSection title="Explore">
            <div className="space-y-1.5">
              {exploreLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* 7. Help & Legal */}
          <FooterSection title="Help & Legal">
            <div className="space-y-1.5">
              {helpLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* 8. Newsletter + Contact */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4">
            <h4
              className="font-label text-xs font-bold tracking-widest uppercase"
              style={{ color: "#2ECC71" }}
            >
              Trek Alerts
            </h4>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg text-xs bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:border-white/60"
                aria-label="Email for trek alerts"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg font-label text-xs font-bold tracking-wide text-white transition-colors"
                style={{ background: "#F4A623", color: "#0A2E1A" }}
              >
                Subscribe
              </button>
            </form>
            <div className="space-y-2 pt-2">
              <div
                className="flex items-start gap-2 text-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span>📞</span>
                <span>
                  +91-98765-43210
                  <br />
                  <span className="text-xs">9 AM – 9 PM IST</span>
                </span>
              </div>
              <div
                className="flex items-start gap-2 text-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span>📧</span>
                <a
                  href="mailto:info@globaltrek.in"
                  className="hover:text-white transition-colors"
                >
                  info@globaltrek.in
                </a>
              </div>
              <div
                className="flex items-start gap-2 text-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span>📍</span>
                <span>
                  Rajpur Road, Dehradun,
                  <br />
                  Uttarakhand — 248001
                </span>
              </div>
              <div
                className="pt-1 text-[10px] space-y-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <p>GSTIN: 05AAAAA0000A1Z5</p>
                <p>CIN: U63090UK2008PTC000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {year} Global Trek — globaltrek.in &nbsp;|&nbsp; All Rights
            Reserved &nbsp;|&nbsp; Made with ❤️ in Dehradun, Uttarakhand
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-3">
            {[
              "🔒 Razorpay Secured",
              "🛡 SSL Encrypted",
              "✅ Ministry of Tourism",
            ].map((badge) => (
              <span
                key={badge}
                className="text-[10px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
