import { h as useParams, j as jsxRuntimeExports, B as Button, r as reactExports, L as Link } from "./index-BO08U1_a.js";
import { I as Input } from "./input-BgWnpIHy.js";
import { L as Label, T as Textarea } from "./textarea-uc2RRBGa.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
const packageMeta = {
  corporate: {
    icon: "💼",
    title: "Corporate Trekking",
    tagline: "Transform your team with Himalayan adventure",
    color: "#0A2E1A",
    features: [
      "Custom departure dates for 20–200 people",
      "Gourmet camp meals & gala dinner",
      "Professional team-building facilitation",
      "Corporate GST invoice & documentation",
      "Team photography & video highlights",
      "Dedicated corporate coordinator",
      "Activity-based leadership program",
      "Custom branding & merchandise"
    ]
  },
  "school-college": {
    icon: "🎓",
    title: "School & College Programs",
    tagline: "Educational adventure for the next generation",
    color: "#145C38",
    features: [
      "NSS/NCC activity compliant",
      "Daily progress reports to parents",
      "Teacher coordinator portal",
      "Budget-friendly group pricing",
      "First aid & safety briefing",
      "Certificate of participation",
      "CBSE activity recognition",
      "Insurance for all participants"
    ]
  },
  family: {
    icon: "👨‍👧",
    title: "Family Trek Packages",
    tagline: "Adventures the whole family will treasure",
    color: "#1A7A4C",
    features: [
      "Kids from age 8+ welcome",
      "Easy to moderate trails",
      "Kid-friendly meals & snacks",
      "Family photographer included",
      "Flexible pace — no rush",
      "First aid specialist",
      "Bonfire & storytelling nights",
      "Family achievement certificate"
    ]
  },
  honeymoon: {
    icon: "❤️",
    title: "Honeymoon & Couples",
    tagline: "Romance at 3,000 metres above sea level",
    color: "#22A05E",
    features: [
      "Private 2-person tent setup",
      "Candlelight camp dinner",
      "Sunrise summit experience",
      "Flower & balloon decoration",
      "Professional honeymoon photography",
      "Complimentary sparkling wine",
      "Couple’s yoga session",
      "Personalized itinerary"
    ]
  },
  solo: {
    icon: "🧗",
    title: "Solo Trekker Batches",
    tagline: "Never trek alone — always feel at home",
    color: "#2980B9",
    features: [
      "Fixed group batch schedule",
      "Group WhatsApp community",
      "Safety live-tracking app",
      "Solo room supplement available",
      "Community events & meetups",
      "Buddy-system on trail",
      "Post-trek reunion events",
      "Referral rewards program"
    ]
  },
  customize: {
    icon: "🛠️",
    title: "Custom Trip Builder",
    tagline: "",
    color: "#0A2E1A",
    features: []
  }
};
const destinations = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    icon: "🏔️",
    desc: "Garhwal & Kumaon Himalayas — 10 treks & yatras"
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    icon: "🗻",
    desc: "Kullu, Spiti & Parvati Valley — 5 treks"
  },
  {
    id: "yatra",
    name: "Sacred Yatras",
    icon: "🙏",
    desc: "Kedarnath, Char Dham — 3 pilgrimages"
  }
];
const budgetOptions = [
  { id: "budget", label: "Budget — Under ₹5,000/pp" },
  { id: "mid", label: "Mid-range — ₹5,000–15,000/pp" },
  { id: "premium", label: "Premium — ₹15,000–30,000/pp" },
  { id: "luxury", label: "Luxury — ₹30,000+/pp" }
];
function CustomizeWizard() {
  var _a, _b;
  const [step, setStep] = reactExports.useState(1);
  const [dest, setDest] = reactExports.useState("");
  const [duration, setDuration] = reactExports.useState(5);
  const [groupType, setGroupType] = reactExports.useState("");
  const [groupSize, setGroupSize] = reactExports.useState(2);
  const [budget, setBudget] = reactExports.useState("");
  const [requirements, setRequirements] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const steps = ["Destination", "Duration", "Group", "Budget", "Summary"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", "data-ocid": "customize.wizard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-10", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-black",
          style: {
            background: i + 1 <= step ? "#145C38" : "#E8F5EE",
            color: i + 1 <= step ? "white" : "#145C38",
            fontFamily: "var(--gt-font-label)"
          },
          children: i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "hidden sm:block text-xs font-semibold",
          style: {
            color: i + 1 === step ? "#145C38" : "#ADB5BD",
            fontFamily: "var(--gt-font-label)"
          },
          children: s
        }
      ),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-8 h-0.5 mx-1",
          style: { background: i + 1 < step ? "#145C38" : "#E9ECEF" }
        }
      )
    ] }, s)) }),
    submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-card rounded-2xl border border-border p-12 text-center",
        "data-ocid": "customize.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "\\uD83C\\uDFD4\\uFE0F" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-2xl font-bold italic mb-2",
              style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
              children: "Quote Request Received!"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Our trek expert will send your custom itinerary and pricing within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "font-bold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              children: "Browse Treks"
            }
          ) })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-8", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "customize.step1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold italic mb-6",
            style: {
              fontFamily: "var(--gt-font-display)",
              color: "#0A2E1A"
            },
            children: "Where do you want to trek?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: destinations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setDest(d.id),
            className: "w-full p-5 rounded-xl border-2 text-left transition-all",
            style: {
              borderColor: dest === d.id ? "#145C38" : "#E9ECEF",
              background: dest === d.id ? "#E8F5EE" : "transparent"
            },
            "data-ocid": `customize.destination.${d.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: d.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-bold",
                  style: {
                    color: "#0A2E1A",
                    fontFamily: "var(--gt-font-display)"
                  },
                  children: d.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: d.desc })
            ]
          },
          d.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => setStep(2),
            disabled: !dest,
            className: "w-full mt-6 font-bold text-white",
            style: {
              background: "#145C38",
              fontFamily: "var(--gt-font-label)"
            },
            "data-ocid": "customize.next_button",
            children: "Next: Duration \\u2192"
          }
        )
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "customize.step2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold italic mb-2",
            style: {
              fontFamily: "var(--gt-font-display)",
              color: "#0A2E1A"
            },
            children: "How many days?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Choose your ideal trek duration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-5xl font-black",
                style: {
                  color: "#145C38",
                  fontFamily: "var(--gt-font-label)"
                },
                children: duration
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground ml-2", children: "days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 1,
              max: 14,
              value: duration,
              onChange: (e) => setDuration(Number(e.target.value)),
              className: "w-full accent-green-700",
              "aria-label": "Duration in days",
              "data-ocid": "customize.duration_slider"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-xs text-muted-foreground",
              style: { fontFamily: "var(--gt-font-label)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1 day" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7 days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "14 days" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setStep(1),
              className: "flex-1",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "customize.back_button",
              children: "\\u2190 Back"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => setStep(3),
              className: "flex-1 font-bold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "customize.next_button",
              children: "Next: Group \\u2192"
            }
          )
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "customize.step3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold italic mb-6",
            style: {
              fontFamily: "var(--gt-font-display)",
              color: "#0A2E1A"
            },
            children: "Who is coming along?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
          "Solo",
          "Couple",
          "Family",
          "Friends Group",
          "Corporate",
          "School / College"
        ].map((gt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setGroupType(gt),
            className: "py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all",
            style: {
              borderColor: groupType === gt ? "#145C38" : "#E9ECEF",
              background: groupType === gt ? "#E8F5EE" : "transparent",
              color: groupType === gt ? "#145C38" : "#212529",
              fontFamily: "var(--gt-font-label)"
            },
            "data-ocid": `customize.group_type.${gt.toLowerCase().replace(/ /g, "_")}`,
            children: gt
          },
          gt
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Label,
            {
              className: "text-xs tracking-wider font-semibold",
              style: { fontFamily: "var(--gt-font-label)" },
              children: [
                "Group Size: ",
                groupSize,
                " people"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 1,
              max: 30,
              value: groupSize,
              onChange: (e) => setGroupSize(Number(e.target.value)),
              className: "w-full accent-green-700",
              "aria-label": "Group size",
              "data-ocid": "customize.group_size_slider"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-xs text-muted-foreground",
              style: { fontFamily: "var(--gt-font-label)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "30+" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setStep(2),
              className: "flex-1",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "customize.back_button",
              children: "\\u2190 Back"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => setStep(4),
              disabled: !groupType,
              className: "flex-1 font-bold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "customize.next_button",
              children: "Next: Budget \\u2192"
            }
          )
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "customize.step4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold italic mb-6",
            style: {
              fontFamily: "var(--gt-font-display)",
              color: "#0A2E1A"
            },
            children: "What is your budget?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: budgetOptions.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setBudget(b.id),
            className: "w-full p-4 rounded-xl border-2 text-left text-sm font-semibold transition-all",
            style: {
              borderColor: budget === b.id ? "#145C38" : "#E9ECEF",
              background: budget === b.id ? "#E8F5EE" : "transparent",
              color: budget === b.id ? "#145C38" : "#212529",
              fontFamily: "var(--gt-font-label)"
            },
            "data-ocid": `customize.budget.${b.id}`,
            children: b.label
          },
          b.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setStep(3),
              className: "flex-1",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "customize.back_button",
              children: "\\u2190 Back"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => setStep(5),
              disabled: !budget,
              className: "flex-1 font-bold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "customize.next_button",
              children: "Next: Review \\u2192"
            }
          )
        ] })
      ] }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "customize.step5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold italic mb-4",
            style: {
              fontFamily: "var(--gt-font-display)",
              color: "#0A2E1A"
            },
            children: "Almost there \\u2014 review & submit"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-4 mb-5 space-y-2 text-sm",
            style: { background: "#E8F5EE" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Destination" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#145C38" }, children: (_a = destinations.find((d) => d.id === dest)) == null ? void 0 : _a.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#145C38" }, children: [
                  duration,
                  " days"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Group" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#145C38" }, children: [
                  groupType,
                  " \\u00b7 ",
                  groupSize,
                  " people"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Budget" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#145C38" }, children: (_b = budgetOptions.find((b) => b.id === budget)) == null ? void 0 : _b.label })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: requirements,
              onChange: (e) => setRequirements(e.target.value),
              placeholder: "Special requirements, medical conditions, dietary needs, experience level...",
              rows: 3,
              className: "bg-background border-border resize-none",
              "data-ocid": "customize.requirements_textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  className: "text-xs",
                  style: { fontFamily: "var(--gt-font-label)" },
                  children: "Name *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  required: true,
                  placeholder: "Rahul Mehta",
                  className: "bg-background border-border",
                  "data-ocid": "customize.name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  className: "text-xs",
                  style: { fontFamily: "var(--gt-font-label)" },
                  children: "Email *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  required: true,
                  placeholder: "rahul@email.com",
                  className: "bg-background border-border",
                  "data-ocid": "customize.email_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  className: "text-xs",
                  style: { fontFamily: "var(--gt-font-label)" },
                  children: "Phone *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  required: true,
                  placeholder: "+91 98765 43210",
                  className: "bg-background border-border",
                  "data-ocid": "customize.phone_input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setStep(4),
              className: "flex-1",
              style: { fontFamily: "var(--gt-font-label)" },
              "data-ocid": "customize.back_button",
              children: "\\u2190 Back"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                if (name && email && phone) setSubmitted(true);
              },
              disabled: !name || !email || !phone,
              className: "flex-1 font-bold text-white",
              style: {
                background: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              "data-ocid": "customize.submit_button",
              children: "Get Custom Quote \\u2192"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function PackageDetailPage() {
  const { type } = useParams({ from: "/packages/$type" });
  if (type === "customize") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background",
        style: { paddingTop: "90px" },
        "data-ocid": "package_detail.customize_page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              className: "py-14 px-4 text-center",
              style: {
                background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs tracking-widest uppercase mb-4",
                    style: { color: "#2ECC71", fontFamily: "var(--gt-font-label)" },
                    children: "Custom Package"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-4xl md:text-5xl font-bold italic text-white mb-3",
                    style: { fontFamily: "var(--gt-font-display)" },
                    children: "Build Your Perfect Trek"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 max-w-xl mx-auto", children: "Tell us what you want. We\\u2019ll design a custom itinerary and price within 24 hours." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomizeWizard, {}) })
        ]
      }
    );
  }
  const meta = packageMeta[type] ?? packageMeta.corporate;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      style: { paddingTop: "90px" },
      "data-ocid": "package_detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "py-14 px-4 text-center",
            style: {
              background: `linear-gradient(135deg, ${meta.color} 0%, #145C38 100%)`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: meta.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs tracking-widest uppercase mb-4",
                  style: { color: "#2ECC71", fontFamily: "var(--gt-font-label)" },
                  children: "Trek Packages"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl md:text-5xl font-bold italic text-white mb-3",
                  style: { fontFamily: "var(--gt-font-display)" },
                  children: meta.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-xl mx-auto", children: meta.tagline })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs tracking-widest uppercase mb-3",
                style: { color: "#145C38", fontFamily: "var(--gt-font-label)" },
                children: "What\\u2019s Included"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl font-bold italic",
                style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
                children: "Package Features"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14", children: meta.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.06 },
              className: "p-5 rounded-xl border border-border bg-card flex gap-3 items-start",
              "data-ocid": `package_detail.feature.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black mt-0.5",
                    style: { background: "#145C38" },
                    children: "\\u2713"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: feature })
              ]
            },
            feature
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto rounded-2xl border border-border bg-card p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-xl font-bold italic mb-6 text-center",
                style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
                children: "Get a Customized Quote"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      className: "text-xs tracking-wider font-semibold",
                      style: { fontFamily: "var(--gt-font-label)" },
                      children: "Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Rahul Mehta",
                      className: "bg-background border-border",
                      "data-ocid": "package_detail.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      className: "text-xs tracking-wider font-semibold",
                      style: { fontFamily: "var(--gt-font-label)" },
                      children: "Phone *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "+91 98765 43210",
                      className: "bg-background border-border",
                      "data-ocid": "package_detail.phone_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    className: "text-xs tracking-wider font-semibold",
                    style: { fontFamily: "var(--gt-font-label)" },
                    children: "Email *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "email",
                    placeholder: "rahul@email.com",
                    className: "bg-background border-border",
                    "data-ocid": "package_detail.email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    className: "text-xs tracking-wider font-semibold",
                    style: { fontFamily: "var(--gt-font-label)" },
                    children: "Requirements / Questions"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Group size, preferred dates, specific requirements...",
                    rows: 3,
                    className: "bg-background border-border resize-none",
                    "data-ocid": "package_detail.requirements_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  className: "w-full font-bold text-white",
                  style: {
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)"
                  },
                  "data-ocid": "package_detail.submit_button",
                  children: "Send Inquiry \\u2014 Response in 2 Hours"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  PackageDetailPage as default
};
