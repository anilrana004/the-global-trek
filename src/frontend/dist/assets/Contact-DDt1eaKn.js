import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Phone, M as MapPin, I as Instagram, m as motion, B as Button } from "./index-vYOW-QfD.js";
import { I as Input } from "./input-CgB5bWX1.js";
import { L as Label } from "./label-D7RL7BJP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Djp6LFKa.js";
import { T as Textarea } from "./textarea-Cn03-BzO.js";
import { M as Mail } from "./mail-BZbjp4uj.js";
import { C as Clock } from "./clock-CncI7fGv.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { C as CircleCheckBig } from "./circle-check-big-0ZnzuCxO.js";
import "./index-Gp0GX1_L.js";
import "./index-Btruj49E.js";
import "./Combination-ZlVejo0s.js";
import "./index-nGlcEp0j.js";
import "./index-BbojY84U.js";
import "./chevron-down-DnTYkto-.js";
import "./chevron-up-c5oEDrdS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
const treks = [
  "Chopta Tungnath Chandrashila",
  "Har Ki Dun — Valley of Gods",
  "Kedarkantha Trek",
  "Kuari Pass — The Curzon Trail",
  "Phulara Ridge",
  "Valley of Flowers",
  "Roopkund Trek",
  "Brahmatal Trek",
  "Dayara Bugyal",
  "Nag Tibba",
  "Hampta Pass Trek",
  "Sar Pass Trek",
  "Kheerganga Trek",
  "Triund Trek",
  "Beas Kund",
  "Kedarnath Yatra",
  "Do Dham Yatra",
  "Char Dham Yatra",
  "Corporate Trekking Package",
  "School / College Package",
  "Family Trek Package",
  "Honeymoon Trek Package"
];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [trekInterest, setTrekInterest] = reactExports.useState("");
  const [hearAboutUs, setHearAboutUs] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const [newsletter, setNewsletter] = reactExports.useState(false);
  const [scheduleOpen, setScheduleOpen] = reactExports.useState(false);
  const [scheduleSlot, setScheduleSlot] = reactExports.useState("");
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    preferredDates: "",
    groupSize: "",
    specialRequirements: ""
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDates: "",
      groupSize: "",
      specialRequirements: ""
    });
    setTrekInterest("");
    setHearAboutUs("");
    setBudget("");
    setNewsletter(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "relative pt-36 pb-16 px-4 text-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono text-xs tracking-widest uppercase mb-4",
              style: { color: "#E8963A" },
              children: "Get In Touch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl italic text-foreground mb-4", children: "Book Your Trek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Tell us about your dream Himalayan experience. We respond within 2 hours." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", "data-ocid": "contact.form_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", "data-ocid": "contact.info_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono text-xs tracking-widest uppercase mb-6",
              style: { color: "#E8963A" },
              children: "Contact Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: [
            {
              icon: Phone,
              label: "Phone",
              value: "+91-XXXXXXXXXX",
              sub: "9 AM – 7 PM IST"
            },
            {
              icon: Mail,
              label: "Email",
              value: "hello@theglobaltrek.com",
              sub: "Replies within 2 hours"
            },
            {
              icon: MapPin,
              label: "Office",
              value: "Dehradun, Uttarakhand",
              sub: "248001"
            },
            {
              icon: Clock,
              label: "Support Hours",
              value: "9 AM – 9 PM IST",
              sub: "All days"
            }
          ].map(({ icon: Icon, label, value, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-2.5 rounded-xl shrink-0",
                style: { background: "rgba(232,150,58,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4", style: { color: "#E8963A" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sub })
            ] })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl border",
            style: {
              borderColor: "rgba(232,150,58,0.3)",
              background: "rgba(232,150,58,0.05)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-mono text-xs tracking-widest uppercase mb-2",
                  style: { color: "#E8963A" },
                  children: "Quick Response Promise"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm", children: "We respond to all inquiries within 2 hours during 9 AM – 9 PM IST." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono text-xs tracking-widest uppercase",
              style: { color: "#E8963A" },
              children: "More Ways to Reach Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-2.5 rounded-xl shrink-0",
                style: { background: "rgba(232,150,58,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4", style: { color: "#E8963A" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase", children: "Schedule a Call" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: "Free 30-min trek planning call" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Confirmed within 1 hour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setScheduleOpen(true),
                  className: "mt-2 text-xs font-semibold tracking-wide",
                  style: { color: "#E8963A" },
                  "data-ocid": "contact.schedule_call_button",
                  children: "Schedule Now →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-2.5 rounded-xl shrink-0",
                style: { background: "rgba(232,150,58,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4", style: { color: "#E8963A" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase", children: "Video Consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: "Zoom / Google Meet — 30 min free" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:info@globaltrek.in?subject=Video%20Consultation%20Request",
                  className: "mt-2 inline-block text-xs font-semibold tracking-wide",
                  style: { color: "#E8963A" },
                  "data-ocid": "contact.video_call_link",
                  children: "Book Video Call →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-2.5 rounded-xl shrink-0",
                style: { background: "rgba(232,150,58,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4", style: { color: "#E8963A" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase", children: "Instagram DM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: "@globaltrekin — reply within 1 hour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://instagram.com/globaltrekin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-2 inline-block text-xs font-semibold tracking-wide",
                  style: { color: "#E8963A" },
                  "data-ocid": "contact.instagram_link",
                  children: "Open Instagram →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-2.5 rounded-xl shrink-0",
                style: { background: "rgba(232,150,58,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4", style: { color: "#E8963A" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground tracking-wider uppercase", children: "Postal Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-medium", children: "Global Trek Adventures Pvt. Ltd." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "123 Rajpur Road, Dehradun, Uttarakhand 248001, India" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "We respond within 5 business days" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "h-full flex flex-col items-center justify-center text-center py-20",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheckBig,
              {
                className: "w-16 h-16 mb-6",
                style: { color: "#52D45E" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-3", children: "Inquiry Received!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md", children: "Thank you for reaching out. Our trek specialist will contact you within 2 hours. Prepare for the mountains!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "mt-8 font-mono text-xs tracking-wider uppercase",
                onClick: () => setSubmitted(false),
                "data-ocid": "contact.submit_another_button",
                children: "Submit Another Inquiry"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit,
          className: "space-y-6",
          "data-ocid": "contact.form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "name",
                    className: "font-mono text-xs tracking-wider",
                    children: "Full Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    value: formData.name,
                    onChange: handleChange,
                    placeholder: "Arjun Mehta",
                    className: "bg-card border-border",
                    "data-ocid": "contact.name_input",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "email",
                    className: "font-mono text-xs tracking-wider",
                    children: "Email *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    value: formData.email,
                    onChange: handleChange,
                    placeholder: "arjun@email.com",
                    className: "bg-card border-border",
                    "data-ocid": "contact.email_input",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "phone",
                    className: "font-mono text-xs tracking-wider",
                    children: "Phone (WhatsApp preferred) *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    value: formData.phone,
                    onChange: handleChange,
                    placeholder: "+91 98765 43210",
                    className: "bg-card border-border",
                    "data-ocid": "contact.phone_input",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-mono text-xs tracking-wider", children: "Trek / Yatra Interest *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: trekInterest,
                    onValueChange: setTrekInterest,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "bg-card border-border",
                          "data-ocid": "contact.trek_interest_select",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a trek or yatra" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: treks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "preferredDates",
                    className: "font-mono text-xs tracking-wider",
                    children: "Preferred Dates"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "preferredDates",
                    value: formData.preferredDates,
                    onChange: handleChange,
                    placeholder: "e.g. December 2025",
                    className: "bg-card border-border",
                    "data-ocid": "contact.dates_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "groupSize",
                    className: "font-mono text-xs tracking-wider",
                    children: "Group Size"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "groupSize",
                    value: formData.groupSize,
                    onChange: handleChange,
                    placeholder: "e.g. 4 people",
                    className: "bg-card border-border",
                    "data-ocid": "contact.group_size_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "specialRequirements",
                  className: "font-mono text-xs tracking-wider",
                  children: "Special Requirements"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "specialRequirements",
                  value: formData.specialRequirements,
                  onChange: handleChange,
                  placeholder: "Medical conditions, dietary needs, experience level, or anything else we should know...",
                  rows: 4,
                  className: "bg-card border-border resize-none",
                  "data-ocid": "contact.requirements_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-mono text-xs tracking-wider", children: "Budget per Person" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                "< ₹5,000",
                "₹5,000 – 15,000",
                "₹15,000 – 30,000",
                "₹30,000+"
              ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setBudget(b),
                  className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${budget === b ? "border-[#E8963A] text-[#E8963A] bg-[rgba(232,150,58,0.1)]" : "border-border text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": `contact.budget_${b.replace(/[^a-z0-9]/gi, "_")}_radio`,
                  children: b
                },
                b
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-mono text-xs tracking-wider", children: "How did you hear about us?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hearAboutUs, onValueChange: setHearAboutUs, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "bg-card border-border",
                    "data-ocid": "contact.hear_about_us_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select an option" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Google Search",
                  "Instagram",
                  "YouTube",
                  "Friend / Word of Mouth",
                  "Travel Blog",
                  "WhatsApp Group",
                  "Other"
                ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, children: o }, o)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "specialRequirements",
                  className: "font-mono text-xs tracking-wider",
                  children: "Special Requirements"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "specialRequirements",
                  value: formData.specialRequirements,
                  onChange: handleChange,
                  placeholder: "Dietary restrictions, medical conditions, custom dates...",
                  rows: 4,
                  className: "bg-card border-border resize-none",
                  "data-ocid": "contact.requirements_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: newsletter,
                  onChange: (e) => setNewsletter(e.target.checked),
                  className: "w-4 h-4 rounded border-border accent-[#E8963A]",
                  "data-ocid": "contact.newsletter_checkbox"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "📧 Subscribe to seasonal trek alerts and offers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "lg",
                className: "w-full font-mono text-sm tracking-widest uppercase",
                style: { background: "#E8963A", color: "#0A0E14" },
                "data-ocid": "contact.submit_button",
                children: "Send Inquiry"
              }
            )
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 bg-muted/30",
        "data-ocid": "contact.flows_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-mono text-xs tracking-widest uppercase mb-3",
                style: { color: "#E8963A" },
                children: "Automated Care"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl italic text-foreground mb-3", children: "How We Stay in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "From the moment you inquire to long after your trek, we keep you informed at every step." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold", children: "A" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "After You Inquire" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Automated + Personal responses" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                {
                  time: "Immediately",
                  action: "Auto-reply email with Trek Guide PDF attached",
                  icon: "📧"
                },
                {
                  time: "+2 hours",
                  action: "Personal follow-up call/email from your trek coordinator",
                  icon: "🧑‍💼"
                },
                {
                  time: "+24 hours",
                  action: "WhatsApp follow-up if no response yet",
                  icon: "💬"
                }
              ].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-3 bg-blue-50 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: step.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-blue-700", children: step.time }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700", children: step.action })
                    ] })
                  ]
                },
                step.time
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold", children: "B" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "After You Book" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Complete preparation journey" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                {
                  time: "Immediately",
                  action: "Booking confirmation email + PDF itinerary + packing list",
                  icon: "✅"
                },
                {
                  time: "+1 day",
                  action: '"Welcome to Global Trek" email with pre-trek fitness guide',
                  icon: "🏃"
                },
                {
                  time: "-30 days",
                  action: "Pre-trek reminder: medical form, gear checklist, packing tips",
                  icon: "📋"
                },
                {
                  time: "-7 days",
                  action: "Final reminder: pickup time, what to bring, emergency contacts",
                  icon: "⏰"
                },
                {
                  time: "-1 day",
                  action: "WhatsApp reminder with your guide's direct contact number",
                  icon: "💬"
                },
                {
                  time: "+1 day",
                  action: "Post-trek thank you + review request link",
                  icon: "⭐"
                }
              ].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-3 bg-green-50 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: step.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-green-700", children: step.time }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700", children: step.action })
                    ] })
                  ]
                },
                step.time
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold", children: "C" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "After Your Trek" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Community & next adventure" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                {
                  time: "+1 day",
                  action: 'Thank you email + "Write a Review" link (5-min form)',
                  icon: "❤️"
                },
                {
                  time: "+7 days",
                  action: "Photo download link + gentle review reminder",
                  icon: "📸"
                },
                {
                  time: "+30 days",
                  action: '"Your next adventure awaits" — 3 matched trek suggestions',
                  icon: "🏔️"
                },
                {
                  time: "Seasonal",
                  action: "Seasonal trek newsletter with batch openings & early bird offers",
                  icon: "📰"
                }
              ].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-3 bg-amber-50 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: step.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-amber-700", children: step.time }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700", children: step.action })
                    ] })
                  ]
                },
                step.time
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold", children: "D" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Didn't Complete Booking?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "We'll help you get there" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                {
                  time: "+1 hour",
                  action: '"You left something behind" friendly reminder email',
                  icon: "🛒"
                },
                {
                  time: "+24 hours",
                  action: `WhatsApp check-in: "Any questions? We're here to help"`,
                  icon: "💬"
                },
                {
                  time: "+72 hours",
                  action: "Special offer: 5% discount if you complete booking this week",
                  icon: "🎁"
                }
              ].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-3 bg-red-50 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: step.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-red-700", children: step.time }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700", children: step.action })
                    ] })
                  ]
                },
                step.time
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground font-display mb-6", children: "WhatsApp Message Templates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#128C7E] rounded-2xl p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ECE5DD] rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#128C7E] text-white text-xs px-3 py-1.5 rounded-full mb-3 inline-block font-medium", children: "💬 WhatsApp Business Template #1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 shadow-sm max-w-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-700 font-bold mb-2", children: "Global Trek ✓✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-800 leading-relaxed", children: [
                    "Hi ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Name]" }),
                    "! 🏔️ Your trek is confirmed!",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Booking ID:" }),
                    " GT-2026-XXXX",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trek:" }),
                    " Kedarkantha",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date:" }),
                    " Dec 20–24, 2026",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trekkers:" }),
                    " 2 people",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Paid:" }),
                    " ₹17,850",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Your Trek Coordinator ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ankit Rawat" }),
                    " will call you at 10 AM from +91-98765-XXXXX.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Full itinerary attached. Questions? Reply here 24/7.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "— Team Global Trek 🌿"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 text-right mt-2", children: "9:15 AM ✓✓" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#128C7E] rounded-2xl p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ECE5DD] rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#128C7E] text-white text-xs px-3 py-1.5 rounded-full mb-3 inline-block font-medium", children: "💬 WhatsApp Business Template #2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 shadow-sm max-w-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-700 font-bold mb-2", children: "Global Trek ✓✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-800 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Name]" }),
                    ", your",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Kedarkantha Trek" }),
                    " is in 7 days! 🎒",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pickup:" }),
                    " 5:30 AM, Dec 20",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Meeting point:" }),
                    " Clock Tower, Dehradun",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Please carry:",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "✅ Original ID (Aadhaar/Passport)",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "✅ 2 passport-size photos",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "✅ Cash ₹2,000 for personal expenses",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "✅ Your fitness self-declaration",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Reply for any questions.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "See you at the mountains! ⛰️"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 text-right mt-2", children: "8:00 AM ✓✓" })
                ] })
              ] }) })
            ] })
          ] })
        ] })
      }
    ),
    scheduleOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 m-0 max-w-none max-h-none w-full h-full border-0",
        "aria-label": "Schedule a call",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-xl w-full max-w-sm p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: "Schedule a Free Call" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-muted-foreground hover:text-foreground transition-colors",
                onClick: () => setScheduleOpen(false),
                "aria-label": "Close",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pick a time slot and we'll confirm within 1 hour" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-wider text-muted-foreground", children: "Preferred Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Morning 9–12", "Afternoon 12–5", "Evening 5–9"].map(
              (slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setScheduleSlot(slot),
                  className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${scheduleSlot === slot ? "border-[#E8963A] text-[#E8963A] bg-[rgba(232,150,58,0.1)]" : "border-border text-muted-foreground hover:text-foreground"}`,
                  children: slot
                },
                slot
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              className: "space-y-3",
              onSubmit: (e) => {
                e.preventDefault();
                setScheduleOpen(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                    placeholder: "Your Name",
                    required: true,
                    "aria-label": "Your Name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                    placeholder: "Mobile Number",
                    required: true,
                    "aria-label": "Mobile Number"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "w-full py-2.5 rounded-lg font-label font-semibold text-white text-sm tracking-wide transition-colors hover:opacity-90",
                    style: { background: "#145C38" },
                    children: "Confirm Schedule"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ContactPage as default
};
