import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as Mountain, m as motion, C as Check, L as Link } from "./index-vYOW-QfD.js";
import { M as Mail } from "./mail-BZbjp4uj.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { L as Lock } from "./lock-DfUtLvP4.js";
import { E as EyeOff } from "./eye-off-D5C9vM8K.js";
import { E as Eye } from "./eye-CHEv7npW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
function RegisterPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [agreedTerms, setAgreedTerms] = reactExports.useState(false);
  const [subscribeAlerts, setSubscribeAlerts] = reactExports.useState(true);
  const [_step, _setStep] = reactExports.useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex", "data-ocid": "register.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-2/5 xl:w-1/2 relative overflow-hidden",
        style: { minHeight: "100dvh" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/himalayan-auth-bg.dim_1400x900.jpg",
              alt: "Himalayan mountains at sunrise",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to bottom, rgba(10,46,26,0.4) 0%, rgba(10,46,26,0.85) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col justify-between p-12 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center",
                  style: { background: "rgba(255,255,255,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-white text-lg tracking-widest uppercase", children: "Global Trek" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-mono text-xs tracking-widest uppercase mb-4",
                        style: { color: "#2ecc71" },
                        children: "Join the community"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "h2",
                      {
                        className: "font-display text-5xl font-bold text-white mb-5 leading-tight",
                        style: { fontFamily: "'Playfair Display', serif" },
                        children: [
                          "Start Your",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Journey." })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg leading-relaxed max-w-md", children: "Join 12,000+ trekkers. Get exclusive batch alerts, trek certificates, and personalized adventure recommendations." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.4, duration: 0.6 },
                  className: "mt-10 space-y-3",
                  children: [
                    {
                      icon: Check,
                      text: "Free trek certificates for all completed treks"
                    },
                    { icon: Check, text: "Priority batch booking for members" },
                    { icon: Check, text: "Earn ₹500 for every friend you refer" }
                  ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        style: { background: "#2ecc71" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Icon,
                          {
                            className: "w-3.5 h-3.5",
                            style: { color: "#0A2E1A" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: text })
                  ] }, text))
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", style: { minHeight: "100dvh" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden relative h-48 shrink-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/himalayan-auth-bg.dim_1400x900.jpg",
            alt: "Himalayas",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-end p-6",
            style: {
              background: "linear-gradient(to bottom, transparent 20%, rgba(10,46,26,0.85))"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5 text-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-white text-base tracking-wider uppercase", children: "Global Trek" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-start justify-center px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "w-full max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl font-bold mb-2",
                  style: {
                    fontFamily: "'Playfair Display', serif",
                    color: "#0A2E1A"
                  },
                  children: "Create Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your Himalayan adventure starts here" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-4",
                "data-ocid": "register.google_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      "aria-label": "Google logo",
                      role: "img",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fill: "#4285F4",
                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fill: "#34A853",
                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fill: "#FBBC05",
                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fill: "#EA4335",
                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          }
                        )
                      ]
                    }
                  ),
                  "Sign up with Google"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-5",
                "data-ocid": "register.icp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-5 h-5 rounded-full flex items-center justify-center text-white font-bold",
                      style: { background: "#3B00B9", fontSize: 9 },
                      children: "ICP"
                    }
                  ),
                  "Continue with Internet Identity"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-4 font-mono text-xs text-muted-foreground tracking-widest uppercase", children: "or with email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "space-y-4",
                "data-ocid": "register.form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "reg-fname",
                          className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                          children: "First Name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-fname",
                          type: "text",
                          placeholder: "Rahul",
                          className: "w-full px-3 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.first_name_input",
                          required: true
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "reg-lname",
                          className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                          children: "Last Name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-lname",
                          type: "text",
                          placeholder: "Sharma",
                          className: "w-full px-3 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.last_name_input",
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "reg-email",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Email Address"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-email",
                          type: "email",
                          placeholder: "rahul@example.com",
                          className: "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.email_input",
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "reg-phone",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Mobile (10-digit)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-muted-foreground", children: "+91" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-phone",
                          type: "tel",
                          placeholder: "98765 43210",
                          maxLength: 10,
                          className: "w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.phone_input",
                          pattern: "[0-9]{10}",
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "reg-dob",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Date of Birth"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-dob",
                          type: "date",
                          className: "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.dob_input",
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "reg-password",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Password"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-password",
                          type: showPassword ? "text" : "password",
                          placeholder: "Min 8 characters",
                          className: "w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.password_input",
                          minLength: 8,
                          required: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowPassword(!showPassword),
                          className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                          "aria-label": showPassword ? "Hide" : "Show",
                          children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "reg-confirm",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Confirm Password"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-confirm",
                          type: showConfirm ? "text" : "password",
                          placeholder: "Repeat password",
                          className: "w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          "data-ocid": "register.confirm_password_input",
                          required: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowConfirm(!showConfirm),
                          className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                          "aria-label": showConfirm ? "Hide" : "Show",
                          children: showConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-smooth",
                          style: {
                            borderColor: agreedTerms ? "#145C38" : void 0,
                            background: agreedTerms ? "#145C38" : void 0
                          },
                          role: "presentation",
                          tabIndex: -1,
                          children: agreedTerms && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                        "I agree to the",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "/terms",
                            className: "font-semibold transition-smooth hover:underline",
                            style: { color: "#145C38" },
                            children: "Terms of Service"
                          }
                        ),
                        " ",
                        "and",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "/privacy",
                            className: "font-semibold transition-smooth hover:underline",
                            style: { color: "#145C38" },
                            children: "Privacy Policy"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          className: "sr-only",
                          checked: agreedTerms,
                          onChange: () => setAgreedTerms(!agreedTerms),
                          "data-ocid": "register.terms_checkbox"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-smooth",
                          style: {
                            borderColor: subscribeAlerts ? "#145C38" : void 0,
                            background: subscribeAlerts ? "#145C38" : void 0
                          },
                          role: "presentation",
                          tabIndex: -1,
                          children: subscribeAlerts && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Subscribe to trek alerts — early bird discounts and new batch announcements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          className: "sr-only",
                          checked: subscribeAlerts,
                          onChange: () => setSubscribeAlerts(!subscribeAlerts),
                          "data-ocid": "register.alerts_checkbox"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isLoading || !agreedTerms,
                      className: "w-full py-3.5 rounded-xl font-mono font-bold text-white text-sm tracking-widest uppercase transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2",
                      style: { background: "#145C38" },
                      "data-ocid": "register.submit_button",
                      children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                        " ",
                        "Creating account..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
                        " Create Account"
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-5", children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/account/login",
                  className: "font-semibold transition-smooth hover:underline",
                  style: { color: "#145C38" },
                  "data-ocid": "register.login_link",
                  children: "Sign In"
                }
              )
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  RegisterPage as default
};
