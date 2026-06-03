import { r as reactExports, j as jsxRuntimeExports, a as Mountain, L as Link } from "./index-BO08U1_a.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { M as Mail } from "./mail-CSh684Gg.js";
import { L as Lock } from "./lock-BIVTF0jP.js";
import { E as EyeOff, a as Eye } from "./eye-CebvkHSA.js";
import { A as ArrowRight } from "./arrow-right-Cjr1nDBz.js";
import { S as ShieldCheck } from "./shield-check-wsdofBUt.js";
import { S as Star } from "./star-CbEESZbb.js";
function LoginPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex", "data-ocid": "login.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden",
        style: { minHeight: "100dvh" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/himalayan-auth-bg.dim_1400x900.jpg",
              alt: "Snow-capped Himalayan peaks at sunrise",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to bottom, rgba(10,46,26,0.3) 0%, rgba(10,46,26,0.75) 100%)"
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
                        children: "Welcome Back"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "h2",
                      {
                        className: "font-display text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight",
                        style: { fontFamily: "'Playfair Display', serif" },
                        children: [
                          "The Himalayas",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "await you." })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg leading-relaxed max-w-md", children: "Sign in to manage your bookings, download trek certificates, and join 12,000+ trekkers on the adventure of a lifetime." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.4, duration: 0.6 },
                  className: "mt-10 flex gap-8",
                  children: [
                    { value: "500+", label: "Treks" },
                    { value: "12K+", label: "Trekkers" },
                    { value: "4.9★", label: "Rating" }
                  ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-3xl font-bold text-white",
                        style: { fontFamily: "'Playfair Display', serif" },
                        children: s.value
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-white/60 tracking-widest uppercase mt-1", children: s.label })
                  ] }, s.label))
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", style: { minHeight: "100dvh" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:hidden relative h-48 shrink-0 overflow-hidden",
          style: { minHeight: 200 },
          children: [
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
                  background: "linear-gradient(to bottom, transparent 30%, rgba(10,46,26,0.85))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5 text-white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-white text-base tracking-wider uppercase", children: "Global Trek" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "w-full max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl font-bold mb-2",
                  style: {
                    fontFamily: "'Playfair Display', serif",
                    color: "#0A2E1A"
                  },
                  children: "Sign In"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Welcome back to Global Trek" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-4",
                "data-ocid": "login.google_button",
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
                  "Continue with Google"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-6",
                "data-ocid": "login.icp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold",
                      style: { background: "#3B00B9", color: "white", fontSize: 9 },
                      children: "ICP"
                    }
                  ),
                  "Continue with Internet Identity"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-4 font-mono text-xs text-muted-foreground tracking-widest uppercase", children: "or continue with email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "space-y-4",
                "data-ocid": "login.form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "login-email",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block",
                        children: "Email Address"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "login-email",
                          type: "email",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          placeholder: "rahul@example.com",
                          className: "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          style: { "--tw-ring-color": "#145C38" },
                          "data-ocid": "login.email_input",
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "login-password",
                          className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase",
                          children: "Password"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          className: "font-mono text-xs transition-smooth bg-transparent border-0 p-0",
                          style: { color: "#145C38" },
                          "data-ocid": "login.forgot_password_link",
                          children: "Forgot password?"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "login-password",
                          type: showPassword ? "text" : "password",
                          value: password,
                          onChange: (e) => setPassword(e.target.value),
                          placeholder: "••••••••",
                          className: "w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth",
                          style: { "--tw-ring-color": "#145C38" },
                          "data-ocid": "login.password_input",
                          required: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowPassword(!showPassword),
                          className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
                          "aria-label": showPassword ? "Hide password" : "Show password",
                          children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isLoading,
                      className: "w-full py-3.5 rounded-xl font-mono font-bold text-white text-sm tracking-widest uppercase transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-60 mt-2 flex items-center justify-center gap-2",
                      style: { background: "#145C38" },
                      "data-ocid": "login.submit_button",
                      children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                        "Signing in..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        "Sign In to Global Trek",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-6", children: [
              "New to Global Trek?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/account/register",
                  className: "font-semibold transition-smooth hover:underline",
                  style: { color: "#145C38" },
                  "data-ocid": "login.create_account_link",
                  children: "Create Account →"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border flex items-center justify-center gap-6", children: [
              { icon: ShieldCheck, text: "SSL Secured" },
              { icon: Lock, text: "Encrypted" },
              { icon: Star, text: "4.9 Rated" }
            ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: text })
                ]
              },
              text
            )) })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  LoginPage as default
};
