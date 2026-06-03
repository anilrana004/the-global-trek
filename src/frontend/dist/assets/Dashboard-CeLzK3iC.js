import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, U as User, a as Mountain, M as MapPin } from "./index-BO08U1_a.js";
import { C as Clock } from "./clock-DTPEDtnO.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { D as Download } from "./download-D104LaEh.js";
import { A as Award } from "./award-CVJ9ZsQM.js";
import { S as Star } from "./star-CbEESZbb.js";
import { H as Heart } from "./heart-D4euyIfH.js";
import { C as ChevronRight } from "./chevron-right-CL9bLnmI.js";
import { C as Check } from "./check-DQa8XOVj.js";
import { C as Copy } from "./copy-CjT-hPXB.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
];
const Gift = createLucideIcon("gift", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode);
const STATS = [
  { label: "Treks Completed", value: "3", icon: Mountain, color: "#145C38" },
  { label: "Total Km Walked", value: "78", icon: MapPin, color: "#1a7a4c" },
  { label: "Total Nights", value: "12", icon: Moon, color: "#22a05e" },
  {
    label: "Next Trek",
    value: "18d",
    icon: Clock,
    color: "#f4a623",
    isCountdown: true
  }
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
    slug: "kedarkantha"
  }
];
const PAST_TREKS = [
  {
    trek: "Chopta Tungnath Trek",
    date: "Oct 2026",
    id: "GT-2026-CT-04230",
    certId: "GT-CERT-2026-001"
  },
  {
    trek: "Hampta Pass Trek",
    date: "Jun 2026",
    id: "GT-2026-HP-01122",
    certId: "GT-CERT-2026-002"
  }
];
const WISHLIST = [
  {
    name: "Har Ki Dun",
    difficulty: "Moderate",
    price: "₹14,500",
    slug: "har-ki-dun"
  },
  {
    name: "Char Dham Yatra",
    difficulty: "Easy",
    price: "₹32,000",
    slug: "char-dham"
  },
  {
    name: "Valley of Flowers",
    difficulty: "Easy",
    price: "₹9,500",
    slug: "valley-of-flowers"
  }
];
function DashboardPage() {
  const [referralCopied, setReferralCopied] = reactExports.useState(false);
  const [earnings] = reactExports.useState(1e3);
  const copyReferral = () => {
    navigator.clipboard.writeText("RAHUL25");
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      style: { paddingTop: 80, paddingBottom: 48 },
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #1a7a4c 100%)"
            },
            className: "mb-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-mono text-xs tracking-widest uppercase mb-2",
                    style: { color: "#2ecc71" },
                    children: "My Account"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display text-4xl md:text-5xl font-bold text-white mb-2 leading-tight",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: "Namaste, Rahul! 🏔️"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70", children: "Your trekking journey, all in one place." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/account/my-bookings",
                    className: "px-5 py-2.5 rounded-xl font-mono text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-smooth",
                    "data-ocid": "dashboard.my_bookings_button",
                    children: "My Bookings"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/account/profile",
                    className: "px-5 py-2.5 rounded-xl font-mono text-sm font-semibold flex items-center gap-2 transition-smooth hover:opacity-90",
                    style: { background: "#2ecc71", color: "#0A2E1A" },
                    "data-ocid": "dashboard.edit_profile_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                      " Edit Profile"
                    ]
                  }
                )
              ] })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6 relative z-10 mb-8", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.1, duration: 0.5 },
              className: "rounded-2xl bg-card border border-border p-5 shadow-sm",
              "data-ocid": `dashboard.stat.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                    style: { background: `${stat.color}15` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-5 h-5", style: { color: stat.color } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-3xl font-bold",
                    style: {
                      fontFamily: "'Playfair Display', serif",
                      color: stat.color
                    },
                    children: stat.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mt-1 tracking-wide", children: stat.label })
              ]
            },
            stat.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-1 p-1 rounded-xl bg-muted/50 w-fit mb-8",
              role: "tablist",
              children: ["Overview", "Bookings", "Certificates"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: tab === "Bookings" ? "/account/my-bookings" : tab === "Certificates" ? "/account/certificates" : "/account/dashboard",
                  className: "px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider uppercase transition-smooth",
                  style: tab === "Overview" ? { background: "#145C38", color: "white" } : void 0,
                  "data-ocid": `dashboard.nav_tab.${tab.toLowerCase()}`,
                  children: tab
                },
                tab
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Upcoming Treks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/account/my-bookings",
                      className: "font-mono text-xs transition-smooth hover:underline",
                      style: { color: "#145C38" },
                      children: "View all →"
                    }
                  )
                ] }),
                UPCOMING_TREKS.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.2, duration: 0.5 },
                    className: "rounded-2xl bg-card border border-border p-5",
                    "data-ocid": `dashboard.upcoming_trek.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "font-mono text-xs px-2 py-0.5 rounded-full font-bold",
                              style: { background: "#e8f5ee", color: "#145C38" },
                              children: [
                                "✓ ",
                                trek.status
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "font-display text-xl font-bold",
                              style: {
                                fontFamily: "'Playfair Display', serif",
                                color: "#0A2E1A"
                              },
                              children: trek.trek
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                            trek.dates,
                            " · ",
                            trek.persons,
                            " Trekkers"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground mt-1", children: [
                            "Booking: ",
                            trek.id
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "shrink-0 text-center rounded-xl p-3 min-w-16",
                            style: { background: "#e8f5ee" },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-display text-3xl font-bold",
                                  style: {
                                    fontFamily: "'Playfair Display', serif",
                                    color: "#145C38"
                                  },
                                  children: trek.daysLeft
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-mono text-xs",
                                  style: { color: "#145C38" },
                                  children: "days away"
                                }
                              )
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground font-mono mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Booking confirmed" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            trek.daysLeft,
                            " days to go"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full rounded-full transition-smooth",
                            style: {
                              background: "#145C38",
                              width: `${Math.max(5, 100 - trek.daysLeft / 60 * 100)}%`
                            }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "px-4 py-2 rounded-lg font-mono text-xs font-semibold text-white transition-smooth hover:opacity-90",
                            style: { background: "#145C38" },
                            "data-ocid": `dashboard.view_details_button.${i + 1}`,
                            children: "View Details"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40",
                            "data-ocid": `dashboard.contact_guide_button.${i + 1}`,
                            children: "Contact Guide"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1",
                            "data-ocid": `dashboard.download_itinerary_button.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                              " Itinerary"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3 font-mono", children: [
                        "Trek Coordinator: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: trek.coordinator }),
                        " · Will call you 3 days before departure"
                      ] })
                    ]
                  },
                  trek.id
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4", children: "Past Treks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: PAST_TREKS.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `p-4 flex items-center justify-between gap-4 ${i < PAST_TREKS.length - 1 ? "border-b border-border" : ""}`,
                    "data-ocid": `dashboard.past_trek.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                            style: { background: "#e8f5ee" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Award,
                              {
                                className: "w-5 h-5",
                                style: { color: "#145C38" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display font-semibold text-sm",
                              style: { fontFamily: "'Playfair Display', serif" },
                              children: trek.trek
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground", children: [
                            trek.date,
                            " · ",
                            trek.id
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1",
                            "data-ocid": `dashboard.download_cert_button.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                              " Certificate"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40 flex items-center gap-1",
                            "data-ocid": `dashboard.write_review_button.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
                              " Review"
                            ]
                          }
                        )
                      ] })
                    ]
                  },
                  trek.id
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "My Wishlist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: WISHLIST.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/treks",
                    className: "flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary transition-smooth group",
                    "data-ocid": `dashboard.wishlist_item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display font-semibold text-sm truncate",
                            style: { fontFamily: "'Playfair Display', serif" },
                            children: item.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground", children: [
                          item.difficulty,
                          " · ",
                          item.price
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" })
                    ]
                  },
                  item.name
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "section",
                {
                  className: "rounded-2xl border border-border p-5",
                  style: {
                    background: "linear-gradient(135deg, #e8f5ee, #f0faf4)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-5 h-5", style: { color: "#145C38" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          className: "font-mono text-xs font-bold tracking-widest uppercase",
                          style: { color: "#145C38" },
                          children: "Refer & Earn"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-3", children: [
                      "Earn ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "₹500" }),
                      " for every friend who books through your referral code."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "flex-1 px-3 py-2 rounded-lg border border-border bg-card font-mono text-sm font-bold tracking-widest text-center",
                          style: { color: "#145C38", letterSpacing: "0.15em" },
                          children: "RAHUL25"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: copyReferral,
                          className: "px-3 py-2 rounded-lg font-mono text-xs font-semibold text-white transition-smooth hover:opacity-90 flex items-center gap-1 shrink-0",
                          style: { background: "#145C38" },
                          "data-ocid": "dashboard.copy_referral_button",
                          children: [
                            referralCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
                            referralCopied ? "Copied!" : "Copy"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono text-xs", children: "Total earned" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-display font-bold",
                          style: {
                            color: "#145C38",
                            fontFamily: "'Playfair Display', serif"
                          },
                          children: [
                            "₹",
                            earnings.toLocaleString()
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl bg-card border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3", children: "Quick Links" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: [
                  {
                    label: "My Bookings",
                    to: "/account/my-bookings",
                    icon: Calendar
                  },
                  {
                    label: "Certificates",
                    to: "/account/certificates",
                    icon: Award
                  },
                  { label: "Edit Profile", to: "/account/profile", icon: User },
                  { label: "Explore Treks", to: "/explore", icon: Mountain }
                ].map(({ label, to, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to,
                    className: "flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth",
                    "data-ocid": `dashboard.quicklink.${label.toLowerCase().replace(/ /g, "_")}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
                      label
                    ]
                  },
                  label
                )) })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  DashboardPage as default
};
