import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BO08U1_a.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
const gearItems = [
  {
    id: "poles",
    name: "Trekking Poles (pair)",
    brand: "Black Diamond",
    spec: "Collapsible, 3-section, 120cm",
    pricePerDay: 80,
    deposit: 500,
    category: "equipment",
    condition: "Excellent"
  },
  {
    id: "bag",
    name: "Sleeping Bag",
    brand: "Forclaz",
    spec: "-10°C comfort rated, 1.2kg",
    pricePerDay: 150,
    deposit: 1e3,
    category: "equipment",
    condition: "Excellent"
  },
  {
    id: "poncho",
    name: "Rain Poncho",
    brand: "Decathlon",
    spec: "One-size, 100% waterproof",
    pricePerDay: 50,
    deposit: 200,
    category: "equipment",
    condition: "Good"
  },
  {
    id: "gaiters",
    name: "Gaiters",
    brand: "Forclaz",
    spec: "Waterproof, universal fit",
    pricePerDay: 60,
    deposit: 300,
    category: "protection",
    condition: "Excellent"
  },
  {
    id: "crampons",
    name: "Crampons",
    brand: "Wildcraft",
    spec: "6-point, strap-on",
    pricePerDay: 100,
    deposit: 500,
    category: "protection",
    condition: "Good"
  },
  {
    id: "backpack",
    name: "Backpack 50L",
    brand: "Osprey / Wildcraft",
    spec: "50L, with hip belt, rain cover",
    pricePerDay: 120,
    deposit: 800,
    category: "equipment",
    condition: "Excellent"
  },
  {
    id: "headlamp",
    name: "Headlamp",
    brand: "Petzl",
    spec: "300 lumen, USB-C rechargeable",
    pricePerDay: 60,
    deposit: 200,
    category: "accessories",
    condition: "Excellent"
  },
  {
    id: "jacket",
    name: "Insulated Jacket",
    brand: "Quechua",
    spec: "-5°C, synthetic fill, S–XXL",
    pricePerDay: 120,
    deposit: 700,
    category: "warmth",
    condition: "Excellent"
  },
  {
    id: "boots",
    name: "Trekking Boots",
    brand: "Quechua",
    spec: "Waterproof GTX, size 5–12",
    pricePerDay: 150,
    deposit: 1e3,
    category: "footwear",
    condition: "Good"
  },
  {
    id: "thermals",
    name: "Thermal Set",
    brand: "Decathlon",
    spec: "Top + Bottom, S–XL",
    pricePerDay: 80,
    deposit: 400,
    category: "warmth",
    condition: "Excellent"
  }
];
const categoryColors = {
  equipment: "#E8F5EE",
  warmth: "#FFF3E0",
  footwear: "#F3E5F5",
  protection: "#E3F2FD",
  accessories: "#FFF8E1"
};
const bundles = [
  {
    id: "essential",
    icon: "⚡",
    title: "Essential Kit (4 items)",
    items: "Trekking Poles + Sleeping Bag + Rain Poncho + Headlamp",
    pricePerDay: 320,
    badge: "Best Value",
    itemIds: ["poles", "bag", "poncho", "headlamp"]
  },
  {
    id: "full",
    icon: "🏔️",
    title: "Full Gear Kit (All 10 items)",
    items: "Poles, Bag, Poncho, Gaiters, Crampons, Backpack, Headlamp, Jacket, Boots, Thermals",
    pricePerDay: 650,
    badge: "Complete Setup",
    itemIds: gearItems.map((g) => g.id)
  }
];
const categoryIcons = {
  equipment: "🎒",
  warmth: "🧥",
  footwear: "🥾",
  protection: "🧤",
  accessories: "🔦"
};
function GearRentalPage() {
  const [selectedItems, setSelectedItems] = reactExports.useState(/* @__PURE__ */ new Set());
  const [days, setDays] = reactExports.useState(3);
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [bundleSelected, setBundleSelected] = reactExports.useState(null);
  const filters = ["All", "Footwear", "Warmth", "Protection", "Accessories"];
  const categoryToFilter = {
    footwear: "Footwear",
    clothing: "Warmth",
    safety: "Protection",
    equipment: "Accessories"
  };
  const toggleItem = (id) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setBundleSelected(null);
  };
  const selectBundle = (bundleId, itemIds) => {
    if (bundleSelected === bundleId) {
      setBundleSelected(null);
      setSelectedItems(/* @__PURE__ */ new Set());
    } else {
      setBundleSelected(bundleId);
      setSelectedItems(new Set(itemIds));
    }
  };
  const filteredItems = activeFilter === "All" ? gearItems : gearItems.filter((g) => categoryToFilter[g.category] === activeFilter);
  const cartItems = gearItems.filter((g) => selectedItems.has(g.id));
  const cartTotal = cartItems.reduce((s, g) => s + g.pricePerDay, 0) * days;
  const cartDeposit = cartItems.reduce((s, g) => s + g.deposit, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "gear_rental.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative pt-28 pb-20 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #1A7A4C 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage: "url(/assets/generated/gear-rental-hero.dim_1200x600.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5",
                style: {
                  background: "rgba(46,204,113,0.2)",
                  color: "#2ECC71",
                  fontFamily: "Montserrat, sans-serif"
                },
                children: "Gear Rental — Dehradun Office"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-5xl md:text-6xl font-bold text-white mb-4 leading-tight",
                style: { fontFamily: "'Playfair Display', Georgia, serif" },
                children: "Gear Up for the Himalayas"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-white/75 text-lg max-w-2xl mx-auto",
                style: { fontFamily: "'DM Sans', sans-serif" },
                children: "Quality gear rental — don't let missing equipment stop your adventure. Pickup from our Dehradun office or add directly to any trek booking."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/80",
                style: { fontFamily: "Montserrat, sans-serif" },
                children: [
                  { icon: "✓", text: "Brand name gear" },
                  { icon: "✓", text: "Sanitized after every use" },
                  { icon: "✓", text: "Available 3+ days" },
                  { icon: "✓", text: "Dehradun pickup" }
                ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: f.icon }),
                  " ",
                  f.text
                ] }, f.text))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 bg-muted/40",
        "data-ocid": "gear_rental.bundles_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-center font-bold text-sm uppercase tracking-widest mb-6 text-muted-foreground",
              style: { fontFamily: "Montserrat, sans-serif" },
              children: "Quick Bundles"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: bundles.map((bundle) => {
            const isActive = bundleSelected === bundle.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: { y: -2 },
                className: "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                style: {
                  borderColor: isActive ? "#22A05E" : "#145C38",
                  background: isActive ? "#E8F5EE" : "white",
                  boxShadow: isActive ? "0 4px 20px rgba(26,122,76,.18)" : "none"
                },
                onClick: () => selectBundle(bundle.id, bundle.itemIds),
                "data-ocid": `gear_rental.${bundle.id}_bundle_button`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: bundle.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-bold text-lg",
                          style: {
                            fontFamily: "'Playfair Display', serif",
                            color: "#0A2E1A"
                          },
                          children: bundle.title
                        }
                      ),
                      bundle.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-2 py-0.5 rounded-full text-[10px] font-bold",
                          style: {
                            background: "#F4A623",
                            color: "white",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: bundle.badge
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: bundle.items })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "text-2xl font-bold block",
                        style: {
                          color: "#145C38",
                          fontFamily: "'Playfair Display', serif"
                        },
                        children: [
                          "₹",
                          bundle.pricePerDay,
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-normal", children: "/day" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-5 py-2 rounded-full font-bold text-sm transition-all",
                        style: {
                          fontFamily: "Montserrat, sans-serif",
                          background: isActive ? "#145C38" : "#E8F5EE",
                          color: isActive ? "white" : "#145C38",
                          border: "2px solid #145C38"
                        },
                        children: isActive ? "✓ Selected" : "Select Kit"
                      }
                    )
                  ] })
                ] })
              },
              bundle.id
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 flex-wrap mb-6",
            "data-ocid": "gear_rental.filter_tabs",
            children: [
              filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveFilter(f),
                  className: "px-4 py-1.5 rounded-full text-sm font-semibold transition-all",
                  style: {
                    fontFamily: "Montserrat, sans-serif",
                    background: activeFilter === f ? "#145C38" : "#E8F5EE",
                    color: activeFilter === f ? "white" : "#145C38"
                  },
                  "data-ocid": `gear_rental.filter.${f.toLowerCase().replace(/ /g, "_")}`,
                  children: f
                },
                f
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-sm text-muted-foreground", children: [
                filteredItems.length,
                " items"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5", children: filteredItems.map((item, i) => {
          const isAdded = selectedItems.has(item.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.05 },
              className: "rounded-2xl border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-lg",
              style: { borderColor: isAdded ? "#22A05E" : "var(--border)" },
              "data-ocid": `gear_rental.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-40 flex items-center justify-center text-5xl",
                    style: { background: categoryColors[item.category] },
                    "aria-hidden": "true",
                    children: categoryIcons[item.category]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-2 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-bold text-sm leading-tight",
                          style: { fontFamily: "'DM Sans', sans-serif" },
                          children: item.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] font-semibold mt-0.5",
                          style: {
                            color: "#6C757D",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: item.brand
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.spec })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold",
                        style: {
                          fontFamily: "Montserrat, sans-serif",
                          background: item.condition === "Excellent" ? "#E8F5EE" : "#FFF8E7",
                          color: item.condition === "Excellent" ? "#145C38" : "#F4A623"
                        },
                        children: item.condition
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-3 border-t border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-xl font-bold block",
                          style: {
                            color: "#145C38",
                            fontFamily: "'Playfair Display', serif"
                          },
                          children: [
                            "₹",
                            item.pricePerDay,
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground", children: "/day" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
                        "Deposit ₹",
                        item.deposit
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => toggleItem(item.id),
                        className: "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200",
                        style: {
                          fontFamily: "Montserrat, sans-serif",
                          background: isAdded ? "#145C38" : "#E8F5EE",
                          color: isAdded ? "white" : "#145C38",
                          border: "2px solid #145C38"
                        },
                        "data-ocid": `gear_rental.add_item.${i + 1}`,
                        children: isAdded ? "✓ Added" : "+ Add to Trek"
                      }
                    )
                  ] })
                ] })
              ]
            },
            item.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground text-center", children: "📍 Pickup from: 15 Rajpur Road, Dehradun 248001 · Available for 3+ day rentals only" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-80 shrink-0", "data-ocid": "gear_rental.cart_sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky top-24 rounded-2xl border-2 p-6",
          style: { borderColor: "#145C38", background: "#F0FAF4" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-bold text-base mb-1",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A"
                },
                children: "Your Gear Cart"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
              cartItems.length,
              " item",
              cartItems.length !== 1 ? "s" : "",
              " ",
              "selected"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-xs font-semibold uppercase tracking-wider block mb-2",
                  style: {
                    fontFamily: "Montserrat, sans-serif",
                    color: "#145C38"
                  },
                  children: "Number of Days"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDays((d) => Math.max(3, d - 1)),
                    className: "w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                    style: {
                      background: "#E8F5EE",
                      color: "#145C38",
                      border: "1.5px solid #145C38"
                    },
                    "aria-label": "Decrease days",
                    "data-ocid": "gear_rental.days_decrease_button",
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-bold text-lg",
                    style: {
                      color: "#0A2E1A",
                      fontFamily: "'Playfair Display', serif",
                      minWidth: 40,
                      textAlign: "center"
                    },
                    children: [
                      days,
                      "D"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDays((d) => Math.min(30, d + 1)),
                    className: "w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                    style: { background: "#145C38", color: "white" },
                    "aria-label": "Increase days",
                    "data-ocid": "gear_rental.days_increase_button",
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: "Minimum 3 days rental" })
            ] }),
            cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "py-8 text-center",
                "data-ocid": "gear_rental.cart_empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🎒" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No items selected yet." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: 'Click "+ Add to Trek" to build your kit.' })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate flex-1 min-w-0 mr-2", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "shrink-0 font-semibold",
                      style: { color: "#145C38" },
                      children: [
                        "₹",
                        item.pricePerDay * days
                      ]
                    }
                  )
                ]
              },
              item.id
            )) }),
            cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#22A05E]/30 pt-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "Rental (",
                    days,
                    " days)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#145C38" }, children: [
                    "₹",
                    cartTotal
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Deposit (refundable)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                    "₹",
                    cartDeposit
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base pt-1 border-t border-[#22A05E]/30 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#0A2E1A" }, children: "Total Payable" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#145C38" }, children: [
                    "₹",
                    cartTotal + cartDeposit
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "mt-5 w-full flex items-center justify-center py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90",
                  style: {
                    background: "#145C38",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif"
                  },
                  "data-ocid": "gear_rental.proceed_to_booking_button",
                  children: "Proceed to Booking →"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setSelectedItems(/* @__PURE__ */ new Set());
                    setBundleSelected(null);
                  },
                  className: "mt-2 w-full text-xs text-muted-foreground hover:text-foreground transition-colors",
                  "data-ocid": "gear_rental.clear_cart_button",
                  children: "Clear selection"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 pt-4 border-t border-[#22A05E]/30 space-y-1.5", children: [
              "🧼 Sanitized & quality-checked",
              "📍 Pickup: Rajpur Road, Dehradun",
              "🔒 Deposit fully refundable"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t }, t)) })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  GearRentalPage as default
};
