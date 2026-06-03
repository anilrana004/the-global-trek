import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, U as User, P as Phone, M as MapPin } from "./index-BO08U1_a.js";
import { m as motion } from "./proxy-DtZzUSuL.js";
import { C as CircleCheckBig } from "./circle-check-big-B38AnnjL.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { A as Award } from "./award-CVJ9ZsQM.js";
import { L as Lock } from "./lock-BIVTF0jP.js";
import { M as Mail } from "./mail-CSh684Gg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
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
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
const DIFFICULTY_OPTIONS = [
  "Easy",
  "Easy-Moderate",
  "Moderate",
  "Moderate-Hard",
  "Hard"
];
const BUDGET_OPTIONS = ["₹0–5K", "₹5–15K", "₹15–25K", "₹25K+"];
function ProfilePage() {
  const [avatar, setAvatar] = reactExports.useState(null);
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    fullName: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    dob: "1995-06-15",
    city: "New Delhi",
    emergencyName: "Priya Sharma",
    emergencyPhone: "9123456789",
    emergencyRelation: "Sister",
    medicalConditions: "",
    preferredDifficulty: "Moderate",
    budgetRange: "₹5–15K"
  });
  const handleAvatarChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setIsEditing(false);
    setTimeout(() => setSaved(false), 3e3);
  };
  const initials = form.fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      style: { paddingTop: 80, paddingBottom: 48 },
      "data-ocid": "profile.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #1a7a4c 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/account/dashboard",
                    className: "font-mono text-xs text-white/60 hover:text-white transition-smooth",
                    children: "Dashboard"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-white", children: "Profile" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-4xl font-bold text-white",
                  style: { fontFamily: "'Playfair Display', serif" },
                  children: "My Profile"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mt-1", children: "Manage your account details and preferences" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
          saved && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              className: "flex items-center gap-3 px-4 py-3 rounded-xl mb-6 font-mono text-sm font-semibold",
              style: {
                background: "#e8f5ee",
                color: "#145C38",
                border: "1px solid #22a05e"
              },
              "data-ocid": "profile.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                "Profile saved successfully!"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSave, "data-ocid": "profile.form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24 mx-auto mb-4", children: [
                  avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: avatar,
                      alt: "Profile",
                      className: "w-24 h-24 rounded-full object-cover"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-display font-bold",
                      style: {
                        background: "linear-gradient(135deg, #145C38, #22a05e)",
                        fontFamily: "'Playfair Display', serif"
                      },
                      children: initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "avatar-upload",
                      className: "absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-smooth hover:opacity-90",
                      style: { background: "#145C38" },
                      "aria-label": "Upload profile photo",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 text-white" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "avatar-upload",
                            type: "file",
                            accept: "image/*",
                            className: "sr-only",
                            onChange: handleAvatarChange,
                            "data-ocid": "profile.avatar_upload"
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-semibold text-lg",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: form.fullName
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mt-1", children: form.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-xs font-semibold",
                    style: { background: "#e8f5ee", color: "#145C38" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }),
                      " Verified Trekker"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3", children: "Account" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: [
                  {
                    label: "Dashboard",
                    to: "/account/dashboard",
                    icon: LayoutDashboard
                  },
                  {
                    label: "My Bookings",
                    to: "/account/my-bookings",
                    icon: Calendar
                  },
                  {
                    label: "Certificates",
                    to: "/account/certificates",
                    icon: Award
                  }
                ].map(({ label, to, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to,
                    className: "flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth",
                    "data-ocid": `profile.nav.${label.toLowerCase().replace(/ /g, "_")}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
                      label
                    ]
                  },
                  label
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3", children: "Security" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth",
                    "data-ocid": "profile.change_password_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
                      " Change Password"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        className: "font-display font-semibold text-lg",
                        style: { fontFamily: "'Playfair Display', serif" },
                        children: "Personal Information"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Update your details below" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsEditing(!isEditing),
                      className: "px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40",
                      "data-ocid": "profile.toggle_edit_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5 inline mr-1" }),
                        isEditing ? "Cancel" : "Edit"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Full Name", id: "profile-name", icon: User, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "profile-name",
                      type: "text",
                      value: form.fullName,
                      disabled: !isEditing,
                      onChange: (e) => handleChange("fullName", e.target.value),
                      className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                      "data-ocid": "profile.name_input"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FieldRow,
                    {
                      label: "Email Address",
                      id: "profile-email",
                      icon: Mail,
                      badge: "Verified",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "profile-email",
                          type: "email",
                          value: form.email,
                          disabled: !isEditing,
                          onChange: (e) => handleChange("email", e.target.value),
                          className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "profile.email_input"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "Mobile", id: "profile-phone", icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "profile-phone",
                      type: "tel",
                      value: form.phone,
                      disabled: !isEditing,
                      onChange: (e) => handleChange("phone", e.target.value),
                      className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                      "data-ocid": "profile.phone_input"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FieldRow,
                    {
                      label: "Date of Birth",
                      id: "profile-dob",
                      icon: Calendar,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "profile-dob",
                          type: "date",
                          value: form.dob,
                          disabled: !isEditing,
                          onChange: (e) => handleChange("dob", e.target.value),
                          className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "profile.dob_input"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRow, { label: "City", id: "profile-city", icon: MapPin, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "profile-city",
                      type: "text",
                      value: form.city,
                      disabled: !isEditing,
                      onChange: (e) => handleChange("city", e.target.value),
                      className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                      "data-ocid": "profile.city_input"
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-semibold text-lg mb-1",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: "Emergency Contact"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Required for all treks above 3,000m" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FieldRow,
                    {
                      label: "Contact Name",
                      id: "emergency-name",
                      icon: User,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "emergency-name",
                          type: "text",
                          value: form.emergencyName,
                          disabled: !isEditing,
                          onChange: (e) => handleChange("emergencyName", e.target.value),
                          className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "profile.emergency_name_input"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FieldRow,
                    {
                      label: "Contact Phone",
                      id: "emergency-phone",
                      icon: Phone,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "emergency-phone",
                          type: "tel",
                          value: form.emergencyPhone,
                          disabled: !isEditing,
                          onChange: (e) => handleChange("emergencyPhone", e.target.value),
                          className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "profile.emergency_phone_input"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "emergency-relation",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-1.5",
                        children: "Relation"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: "emergency-relation",
                        value: form.emergencyRelation,
                        disabled: !isEditing,
                        onChange: (e) => handleChange("emergencyRelation", e.target.value),
                        className: "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                        "data-ocid": "profile.emergency_relation_select",
                        children: ["Parent", "Spouse", "Sibling", "Friend", "Other"].map(
                          (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: r, children: r }, r)
                        )
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-semibold text-lg mb-5",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: "Health & Preferences"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "medical",
                        className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-1.5",
                        children: "Medical Conditions (optional)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "medical",
                        rows: 3,
                        value: form.medicalConditions,
                        disabled: !isEditing,
                        onChange: (e) => handleChange("medicalConditions", e.target.value),
                        placeholder: "Asthma, heart condition, allergy... (leave blank if none)",
                        className: "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth",
                        "data-ocid": "profile.medical_textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-2", children: "Preferred Difficulty" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: DIFFICULTY_OPTIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: !isEditing,
                          onClick: () => isEditing && handleChange("preferredDifficulty", d),
                          className: "px-3 py-1.5 rounded-full font-mono text-xs font-semibold border transition-smooth disabled:cursor-not-allowed",
                          style: {
                            background: form.preferredDifficulty === d ? "#145C38" : void 0,
                            color: form.preferredDifficulty === d ? "white" : void 0,
                            borderColor: form.preferredDifficulty === d ? "#145C38" : void 0
                          },
                          "data-ocid": `profile.difficulty_option.${d.toLowerCase().replace(/-/g, "_")}`,
                          children: d
                        },
                        d
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-2", children: "Budget Range" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: BUDGET_OPTIONS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: !isEditing,
                          onClick: () => isEditing && handleChange("budgetRange", b),
                          className: "px-3 py-1.5 rounded-full font-mono text-xs font-semibold border transition-smooth disabled:cursor-not-allowed",
                          style: {
                            background: form.budgetRange === b ? "#f4a623" : void 0,
                            color: form.budgetRange === b ? "white" : void 0,
                            borderColor: form.budgetRange === b ? "#f4a623" : void 0
                          },
                          "data-ocid": `profile.budget_option.${b}`,
                          children: b
                        },
                        b
                      )) })
                    ] })
                  ] })
                ] })
              ] }),
              isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "flex items-center justify-end gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setIsEditing(false),
                        className: "px-6 py-3 rounded-xl font-mono text-sm font-semibold border border-border hover:bg-muted/40 transition-smooth",
                        "data-ocid": "profile.cancel_button",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "submit",
                        className: "px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white flex items-center gap-2 transition-smooth hover:opacity-90",
                        style: { background: "#145C38" },
                        "data-ocid": "profile.save_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                          " Save Profile"
                        ]
                      }
                    )
                  ]
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
function FieldRow({
  label,
  id,
  icon: Icon,
  badge,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: id,
          className: "font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase",
          children: label
        }
      ),
      badge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "font-mono text-xs px-2 py-0.5 rounded-full font-bold",
          style: { background: "#e8f5ee", color: "#145C38" },
          children: [
            "✓ ",
            badge
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      children
    ] })
  ] });
}
export {
  ProfilePage as default
};
