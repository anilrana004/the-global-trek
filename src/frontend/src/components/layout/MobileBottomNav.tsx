import { Link, useRouter } from "@tanstack/react-router";
import { Bookmark, Home, MapPin, Search, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Search, label: "Explore", to: "/explore" },
  { icon: Bookmark, label: "Saved", to: "/account/dashboard" },
  { icon: MapPin, label: "Trips", to: "/account/my-bookings" },
  { icon: User, label: "Profile", to: "/account/profile" },
] as const;

export function MobileBottomNav() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t"
      style={{ background: "#145C38", borderColor: "#1A7A4C" }}
      data-ocid="mobile_bottom_nav"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive =
            tab.to === "/"
              ? currentPath === "/"
              : currentPath.startsWith(tab.to);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all"
              style={{
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
              }}
              data-ocid={`mobile_bottom_nav.${tab.label.toLowerCase()}_tab`}
              aria-current={isActive ? "page" : undefined}
            >
              <tab.icon className="w-5 h-5" aria-hidden="true" />
              <span className="font-label text-[10px] font-semibold tracking-wide">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
