import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

const gearItems = [
  {
    id: "poles",
    name: "Trekking Poles (pair)",
    brand: "Black Diamond",
    spec: "Collapsible, 3-section, 120cm",
    pricePerDay: 80,
    deposit: 500,
    category: "equipment",
    condition: "Excellent",
  },
  {
    id: "bag",
    name: "Sleeping Bag",
    brand: "Forclaz",
    spec: "-10\u00b0C comfort rated, 1.2kg",
    pricePerDay: 150,
    deposit: 1000,
    category: "equipment",
    condition: "Excellent",
  },
  {
    id: "poncho",
    name: "Rain Poncho",
    brand: "Decathlon",
    spec: "One-size, 100% waterproof",
    pricePerDay: 50,
    deposit: 200,
    category: "equipment",
    condition: "Good",
  },
  {
    id: "gaiters",
    name: "Gaiters",
    brand: "Forclaz",
    spec: "Waterproof, universal fit",
    pricePerDay: 60,
    deposit: 300,
    category: "protection",
    condition: "Excellent",
  },
  {
    id: "crampons",
    name: "Crampons",
    brand: "Wildcraft",
    spec: "6-point, strap-on",
    pricePerDay: 100,
    deposit: 500,
    category: "protection",
    condition: "Good",
  },
  {
    id: "backpack",
    name: "Backpack 50L",
    brand: "Osprey / Wildcraft",
    spec: "50L, with hip belt, rain cover",
    pricePerDay: 120,
    deposit: 800,
    category: "equipment",
    condition: "Excellent",
  },
  {
    id: "headlamp",
    name: "Headlamp",
    brand: "Petzl",
    spec: "300 lumen, USB-C rechargeable",
    pricePerDay: 60,
    deposit: 200,
    category: "accessories",
    condition: "Excellent",
  },
  {
    id: "jacket",
    name: "Insulated Jacket",
    brand: "Quechua",
    spec: "-5\u00b0C, synthetic fill, S\u2013XXL",
    pricePerDay: 120,
    deposit: 700,
    category: "warmth",
    condition: "Excellent",
  },
  {
    id: "boots",
    name: "Trekking Boots",
    brand: "Quechua",
    spec: "Waterproof GTX, size 5\u201312",
    pricePerDay: 150,
    deposit: 1000,
    category: "footwear",
    condition: "Good",
  },
  {
    id: "thermals",
    name: "Thermal Set",
    brand: "Decathlon",
    spec: "Top + Bottom, S\u2013XL",
    pricePerDay: 80,
    deposit: 400,
    category: "warmth",
    condition: "Excellent",
  },
];

const categoryColors: Record<string, string> = {
  equipment: "#E8F5EE",
  warmth: "#FFF3E0",
  footwear: "#F3E5F5",
  protection: "#E3F2FD",
  accessories: "#FFF8E1",
};

const _categoryToFilter: Record<string, string> = {
  footwear: "Footwear",
  warmth: "Warmth",
  protection: "Protection",
  equipment: "Accessories",
  accessories: "Accessories",
};

const bundles = [
  {
    id: "essential",
    icon: "\u26a1",
    title: "Essential Kit (4 items)",
    items: "Trekking Poles + Sleeping Bag + Rain Poncho + Headlamp",
    pricePerDay: 320,
    badge: "Best Value",
    itemIds: ["poles", "bag", "poncho", "headlamp"],
  },
  {
    id: "full",
    icon: "\ud83c\udfd4\ufe0f",
    title: "Full Gear Kit (All 10 items)",
    items:
      "Poles, Bag, Poncho, Gaiters, Crampons, Backpack, Headlamp, Jacket, Boots, Thermals",
    pricePerDay: 650,
    badge: "Complete Setup",
    itemIds: gearItems.map((g) => g.id),
  },
];

const _filters = ["All", "Footwear", "Warmth", "Protection", "Accessories"];

const categoryIcons: Record<string, string> = {
  equipment: "\ud83c\udf92",
  warmth: "\ud83e\udde5",
  footwear: "\ud83e\udd7e",
  protection: "\ud83e\udde4",
  accessories: "\ud83d\udd26",
};

export default function GearRentalPage() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [days, setDays] = useState(3);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [bundleSelected, setBundleSelected] = useState<string | null>(null);

  const filters = ["All", "Footwear", "Warmth", "Protection", "Accessories"];

  const categoryToFilter: Record<string, string> = {
    footwear: "Footwear",
    clothing: "Warmth",
    safety: "Protection",
    equipment: "Accessories",
  };

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setBundleSelected(null);
  };

  const selectBundle = (bundleId: string, itemIds: string[]) => {
    if (bundleSelected === bundleId) {
      setBundleSelected(null);
      setSelectedItems(new Set());
    } else {
      setBundleSelected(bundleId);
      setSelectedItems(new Set(itemIds));
    }
  };

  const filteredItems =
    activeFilter === "All"
      ? gearItems
      : gearItems.filter((g) => categoryToFilter[g.category] === activeFilter);

  const cartItems = gearItems.filter((g) => selectedItems.has(g.id));
  const cartTotal = cartItems.reduce((s, g) => s + g.pricePerDay, 0) * days;
  const cartDeposit = cartItems.reduce((s, g) => s + g.deposit, 0);

  return (
    <div className="min-h-screen bg-background" data-ocid="gear_rental.page">
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #1A7A4C 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(/assets/generated/gear-rental-hero.dim_1200x600.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(46,204,113,0.2)",
              color: "#2ECC71",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Gear Rental — Dehradun Office
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Gear Up for the Himalayas
          </h1>
          <p
            className="text-white/75 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Quality gear rental — don't let missing equipment stop your
            adventure. Pickup from our Dehradun office or add directly to any
            trek booking.
          </p>
          <div
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/80"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {[
              { icon: "✓", text: "Brand name gear" },
              { icon: "✓", text: "Sanitized after every use" },
              { icon: "✓", text: "Available 3+ days" },
              { icon: "✓", text: "Dehradun pickup" },
            ].map((f) => (
              <span key={f.text} className="flex items-center gap-1.5">
                <span className="text-green-400">{f.icon}</span> {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTAs */}
      <section
        className="py-10 bg-muted/40"
        data-ocid="gear_rental.bundles_section"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-center font-bold text-sm uppercase tracking-widest mb-6 text-muted-foreground"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Quick Bundles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {bundles.map((bundle) => {
              const isActive = bundleSelected === bundle.id;
              return (
                <motion.div
                  key={bundle.id}
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl border-2 cursor-pointer transition-all"
                  style={{
                    borderColor: isActive ? "#22A05E" : "#145C38",
                    background: isActive ? "#E8F5EE" : "white",
                    boxShadow: isActive
                      ? "0 4px 20px rgba(26,122,76,.18)"
                      : "none",
                  }}
                  onClick={() => selectBundle(bundle.id, bundle.itemIds)}
                  data-ocid={`gear_rental.${bundle.id}_bundle_button`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{bundle.icon}</span>
                        <h3
                          className="font-bold text-lg"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#0A2E1A",
                          }}
                        >
                          {bundle.title}
                        </h3>
                        {bundle.badge && (
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                            style={{
                              background: "#F4A623",
                              color: "white",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {bundle.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {bundle.items}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <span
                          className="text-2xl font-bold block"
                          style={{
                            color: "#145C38",
                            fontFamily: "'Playfair Display', serif",
                          }}
                        >
                          ₹{bundle.pricePerDay}
                          <span className="text-sm text-muted-foreground font-normal">
                            /day
                          </span>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="px-5 py-2 rounded-full font-bold text-sm transition-all"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          background: isActive ? "#145C38" : "#E8F5EE",
                          color: isActive ? "white" : "#145C38",
                          border: "2px solid #145C38",
                        }}
                      >
                        {isActive ? "✓ Selected" : "Select Kit"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left: Catalog */}
        <div className="flex-1">
          {/* Filter tabs */}
          <div
            className="flex items-center gap-2 flex-wrap mb-6"
            data-ocid="gear_rental.filter_tabs"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  background: activeFilter === f ? "#145C38" : "#E8F5EE",
                  color: activeFilter === f ? "white" : "#145C38",
                }}
                data-ocid={`gear_rental.filter.${f.toLowerCase().replace(/ /g, "_")}`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">
              {filteredItems.length} items
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredItems.map((item, i) => {
              const isAdded = selectedItems.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-lg"
                  style={{ borderColor: isAdded ? "#22A05E" : "var(--border)" }}
                  data-ocid={`gear_rental.item.${i + 1}`}
                >
                  {/* Image / colored square */}
                  <div
                    className="h-40 flex items-center justify-center text-5xl"
                    style={{ background: categoryColors[item.category] }}
                    aria-hidden="true"
                  >
                    {categoryIcons[item.category]}
                  </div>

                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3
                          className="font-bold text-sm leading-tight"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="text-[11px] font-semibold mt-0.5"
                          style={{
                            color: "#6C757D",
                            fontFamily: "Montserrat, sans-serif",
                          }}
                        >
                          {item.brand}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.spec}
                        </p>
                      </div>
                      <span
                        className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          background:
                            item.condition === "Excellent"
                              ? "#E8F5EE"
                              : "#FFF8E7",
                          color:
                            item.condition === "Excellent"
                              ? "#145C38"
                              : "#F4A623",
                        }}
                      >
                        {item.condition}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                      <div>
                        <span
                          className="text-xl font-bold block"
                          style={{
                            color: "#145C38",
                            fontFamily: "'Playfair Display', serif",
                          }}
                        >
                          ₹{item.pricePerDay}
                          <span className="text-xs font-normal text-muted-foreground">
                            /day
                          </span>
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          Deposit ₹{item.deposit}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          background: isAdded ? "#145C38" : "#E8F5EE",
                          color: isAdded ? "white" : "#145C38",
                          border: "2px solid #145C38",
                        }}
                        data-ocid={`gear_rental.add_item.${i + 1}`}
                      >
                        {isAdded ? "✓ Added" : "+ Add to Trek"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-muted-foreground text-center">
            📍 Pickup from: 15 Rajpur Road, Dehradun 248001 · Available for 3+
            day rentals only
          </p>
        </div>

        {/* Right sidebar cart */}
        <div className="lg:w-80 shrink-0" data-ocid="gear_rental.cart_sidebar">
          <div
            className="sticky top-24 rounded-2xl border-2 p-6"
            style={{ borderColor: "#145C38", background: "#F0FAF4" }}
          >
            <h3
              className="font-bold text-base mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A2E1A",
              }}
            >
              Your Gear Cart
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}{" "}
              selected
            </p>

            {/* Days picker */}
            <div className="mb-5">
              <div
                className="text-xs font-semibold uppercase tracking-wider block mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#145C38",
                }}
              >
                Number of Days
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDays((d) => Math.max(3, d - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors"
                  style={{
                    background: "#E8F5EE",
                    color: "#145C38",
                    border: "1.5px solid #145C38",
                  }}
                  aria-label="Decrease days"
                  data-ocid="gear_rental.days_decrease_button"
                >
                  −
                </button>
                <span
                  className="font-bold text-lg"
                  style={{
                    color: "#0A2E1A",
                    fontFamily: "'Playfair Display', serif",
                    minWidth: 40,
                    textAlign: "center",
                  }}
                >
                  {days}D
                </span>
                <button
                  type="button"
                  onClick={() => setDays((d) => Math.min(30, d + 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors"
                  style={{ background: "#145C38", color: "white" }}
                  aria-label="Increase days"
                  data-ocid="gear_rental.days_increase_button"
                >
                  +
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Minimum 3 days rental
              </p>
            </div>

            {cartItems.length === 0 ? (
              <div
                className="py-8 text-center"
                data-ocid="gear_rental.cart_empty_state"
              >
                <div className="text-4xl mb-2">🎒</div>
                <p className="text-sm text-muted-foreground">
                  No items selected yet.
                </p>
                <p className="text-xs text-muted-foreground">
                  Click "+ Add to Trek" to build your kit.
                </p>
              </div>
            ) : (
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground truncate flex-1 min-w-0 mr-2">
                      {item.name}
                    </span>
                    <span
                      className="shrink-0 font-semibold"
                      style={{ color: "#145C38" }}
                    >
                      ₹{item.pricePerDay * days}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {cartItems.length > 0 && (
              <>
                <div className="border-t border-[#22A05E]/30 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Rental ({days} days)
                    </span>
                    <span className="font-bold" style={{ color: "#145C38" }}>
                      ₹{cartTotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Deposit (refundable)
                    </span>
                    <span className="font-semibold text-foreground">
                      ₹{cartDeposit}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-1 border-t border-[#22A05E]/30 mt-1">
                    <span style={{ color: "#0A2E1A" }}>Total Payable</span>
                    <span style={{ color: "#145C38" }}>
                      ₹{cartTotal + cartDeposit}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 w-full flex items-center justify-center py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                  style={{
                    background: "#145C38",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  data-ocid="gear_rental.proceed_to_booking_button"
                >
                  Proceed to Booking →
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItems(new Set());
                    setBundleSelected(null);
                  }}
                  className="mt-2 w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="gear_rental.clear_cart_button"
                >
                  Clear selection
                </button>
              </>
            )}

            <div className="mt-5 pt-4 border-t border-[#22A05E]/30 space-y-1.5">
              {[
                "🧼 Sanitized & quality-checked",
                "📍 Pickup: Rajpur Road, Dehradun",
                "🔒 Deposit fully refundable",
              ].map((t) => (
                <p key={t} className="text-[11px] text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
