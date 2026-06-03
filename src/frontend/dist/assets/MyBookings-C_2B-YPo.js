import { j as jsxRuntimeExports, L as Link, B as Button, M as MapPin, b as MessageCircle } from "./index-BO08U1_a.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-5FMJsPXk.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { U as Users } from "./users-Cfve2YQ6.js";
import { F as FileText } from "./file-text-Cw1Nq-6L.js";
import { D as Download } from "./download-D104LaEh.js";
import { S as Star } from "./star-CbEESZbb.js";
import "./index-C_KHevwb.js";
import "./index-8WvI_qVX.js";
import "./index-CrJLQX1U.js";
const upcomingBookings = [
  {
    id: "GT-2026-KK-08547",
    trek: "Kedarkantha Trek",
    state: "Uttarakhand",
    dateRange: "Dec 20 – Dec 24, 2026",
    trekkers: 2,
    totalPaid: 22785,
    status: "Confirmed",
    guide: "Ankit Rawat",
    altitude: "3,810m",
    daysLeft: 202
  },
  {
    id: "GT-2027-BT-01123",
    trek: "Brahmatal Trek",
    state: "Uttarakhand",
    dateRange: "Jan 15 – Jan 20, 2027",
    trekkers: 3,
    totalPaid: 34500,
    status: "Confirmed",
    guide: "Vikram Rawat",
    altitude: "3,862m",
    daysLeft: 228
  }
];
const pastBookings = [
  {
    id: "GT-2025-CT-04210",
    trek: "Chopta Tungnath Trek",
    state: "Uttarakhand",
    dateRange: "Oct 12 – Oct 14, 2025",
    trekkers: 2,
    totalPaid: 9e3,
    status: "Completed",
    guide: "Priya Negi",
    altitude: "4,000m"
  },
  {
    id: "GT-2025-HP-06891",
    trek: "Hampta Pass Trek",
    state: "Himachal Pradesh",
    dateRange: "Jun 8 – Jun 12, 2025",
    trekkers: 2,
    totalPaid: 22e3,
    status: "Completed",
    guide: "Rohan Sharma",
    altitude: "4,270m"
  }
];
const statusStyles = {
  Confirmed: { bg: "#E8F5EE", text: "#145C38" },
  Pending: { bg: "#FFF8E1", text: "#F4A623" },
  Cancelled: { bg: "#FDECEA", text: "#E74C3C" },
  Completed: { bg: "#E8F5EE", text: "#145C38" }
};
function BookingCard({
  booking,
  variant
}) {
  const style = statusStyles[booking.status];
  const daysLeft = "daysLeft" in booking ? booking.daysLeft : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      className: "bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow",
      "data-ocid": `my_bookings.${variant}.card`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide",
                  style: {
                    background: "#E8F5EE",
                    color: "#145C38",
                    fontFamily: "var(--gt-font-label)"
                  },
                  children: booking.state
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide",
                  style: {
                    background: style.bg,
                    color: style.text,
                    fontFamily: "var(--gt-font-label)"
                  },
                  children: booking.status
                }
              ),
              daysLeft !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                daysLeft,
                " days away"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-xl font-bold text-foreground mb-1 truncate",
                style: { fontFamily: "var(--gt-font-display)" },
                children: booking.trek
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5", style: { color: "#145C38" } }),
                booking.dateRange
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5", style: { color: "#145C38" } }),
                booking.trekkers,
                " trekker",
                booking.trekkers > 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5", style: { color: "#145C38" } }),
                booking.altitude
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-muted-foreground",
                style: { fontFamily: "var(--gt-font-label)" },
                children: "BOOKING ID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-bold text-foreground", children: booking.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-muted-foreground mt-1",
                style: { fontFamily: "var(--gt-font-label)" },
                children: "TOTAL PAID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold", style: { color: "#145C38" }, children: [
              "₹",
              booking.totalPaid.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border flex flex-wrap gap-2", children: variant === "upcoming" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "text-xs font-semibold",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "my_bookings.upcoming.view_details_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 mr-1.5" }),
                "View Details"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "text-xs font-semibold",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "my_bookings.upcoming.download_itinerary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Download Itinerary"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "text-xs font-semibold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "my_bookings.upcoming.contact_guide_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Contact Guide"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "text-xs font-semibold",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "my_bookings.past.download_certificate_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Download Certificate"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "text-xs font-semibold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "my_bookings.past.write_review_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Write Review"
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "my_bookings.empty_state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl",
        style: { background: "#E8F5EE" },
        children: "🏔️"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h3",
      {
        className: "text-xl font-bold text-foreground mb-2",
        style: { fontFamily: "var(--gt-font-display)" },
        children: "No bookings yet"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Your booked treks will appear here." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "font-bold text-white",
        style: { background: "#145C38", fontFamily: "var(--gt-font-label)" },
        children: "Browse Treks"
      }
    ) })
  ] });
}
function MyBookingsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      style: { paddingTop: "90px" },
      "data-ocid": "my_bookings.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-10 px-4",
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs tracking-widest uppercase mb-2",
                  style: { color: "#2ECC71", fontFamily: "var(--gt-font-label)" },
                  children: "Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl font-bold text-white",
                  style: { fontFamily: "var(--gt-font-display)" },
                  children: "My Bookings"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mt-2 text-sm", children: "Manage your upcoming adventures and past treks" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "upcoming", "data-ocid": "my_bookings.tabs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8", style: { background: "#E8F5EE" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "upcoming",
                className: "font-semibold",
                style: { fontFamily: "var(--gt-font-label)" },
                "data-ocid": "my_bookings.upcoming_tab",
                children: [
                  "Upcoming (",
                  upcomingBookings.length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "past",
                className: "font-semibold",
                style: { fontFamily: "var(--gt-font-label)" },
                "data-ocid": "my_bookings.past_tab",
                children: [
                  "Past (",
                  pastBookings.length,
                  ")"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "upcoming", className: "space-y-4", children: upcomingBookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : upcomingBookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { booking: b, variant: "upcoming" }, b.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "past", className: "space-y-4", children: pastBookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : pastBookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { booking: b, variant: "past" }, b.id)) })
        ] }) })
      ]
    }
  );
}
export {
  MyBookingsPage as default
};
