import { h as useParams, s as useNavigate, t as useBookingStore, r as reactExports, j as jsxRuntimeExports, a as Mountain, U as User, B as Button } from "./index-BO08U1_a.js";
import { B as BookingProgress } from "./BookingProgress-j3z9MatT.js";
import { B as Badge } from "./badge-BAMot-g0.js";
import { I as Input } from "./input-BgWnpIHy.js";
import { L as Label, T as Textarea } from "./textarea-uc2RRBGa.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BcQxz4xI.js";
import { t as treksData } from "./treks-DnGP1pKS.js";
import { C as Calendar } from "./calendar-M4PWjOe8.js";
import { U as Users } from "./users-Cfve2YQ6.js";
import { T as TriangleAlert } from "./triangle-alert-BnUO_HWa.js";
import { C as ChevronRight } from "./chevron-right-CL9bLnmI.js";
import "./arrow-left-CnEIeJy8.js";
import "./check-DQa8XOVj.js";
import "./index-C_KHevwb.js";
import "./index-8WvI_qVX.js";
import "./Combination-C14d7Pvq.js";
import "./chevron-down-Qav0GsRp.js";
import "./chevron-up-BTFeTXDF.js";
function emptyParticipant() {
  return {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    medicalConditions: "",
    govtIdType: "",
    govtIdNumber: "",
    medicalNoHeart: false,
    medicalNoAsthma: false,
    medicalNotPregnant: false,
    medicalFit: false
  };
}
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function Participants() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/participants" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const {
    selectedBatch,
    trekName,
    participants: storedParticipants
  } = bookingState;
  const trek = reactExports.useMemo(
    () => treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug]
  );
  const count = storedParticipants.length || 2;
  const [forms, setForms] = reactExports.useState(
    () => Array.from({ length: count }, (_, i) => {
      const stored = storedParticipants[i];
      if (stored == null ? void 0 : stored.firstName) {
        return { ...emptyParticipant(), ...stored };
      }
      return emptyParticipant();
    })
  );
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setForms(
      (prev) => Array.from({ length: count }, (_, i) => prev[i] ?? emptyParticipant())
    );
  }, [count]);
  function updateField(idx, key, value) {
    setForms(
      (prev) => prev.map((f, i) => i === idx ? { ...f, [key]: value } : f)
    );
  }
  function validateAll() {
    const errs = {};
    forms.forEach((f, i) => {
      if (!f.firstName.trim()) errs[`${i}.firstName`] = "Required";
      if (!f.lastName.trim()) errs[`${i}.lastName`] = "Required";
      const ageNum = Number(f.age);
      if (!f.age || Number.isNaN(ageNum) || ageNum < 14 || ageNum > 80)
        errs[`${i}.age`] = "Age must be 14–80";
      if (!f.gender) errs[`${i}.gender`] = "Required";
      if (!f.mobile.trim() || !/^[6-9]\d{9}$/.test(f.mobile))
        errs[`${i}.mobile`] = "Valid 10-digit mobile required";
      if (!f.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(f.email))
        errs[`${i}.email`] = "Valid email required";
      if (!f.emergencyContactName.trim())
        errs[`${i}.emergencyContactName`] = "Required";
      if (!f.emergencyContactPhone.trim() || !/^[6-9]\d{9}$/.test(f.emergencyContactPhone))
        errs[`${i}.emergencyContactPhone`] = "Valid phone required";
      if (!f.govtIdType) errs[`${i}.govtIdType`] = "Required";
      if (!f.govtIdNumber.trim()) errs[`${i}.govtIdNumber`] = "Required";
      if (!f.medicalNoHeart) errs[`${i}.medicalNoHeart`] = "Required";
      if (!f.medicalNoAsthma) errs[`${i}.medicalNoAsthma`] = "Required";
      if (!f.medicalFit) errs[`${i}.medicalFit`] = "Required";
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }
  function handleContinue() {
    setSubmitted(true);
    if (!validateAll()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) setActiveTab(Number(firstKey.split(".")[0]));
      return;
    }
    const savedParticipants = forms.map((f) => ({
      firstName: f.firstName,
      lastName: f.lastName,
      age: f.age,
      gender: f.gender,
      mobile: f.mobile,
      email: f.email,
      emergencyContactName: f.emergencyContactName,
      emergencyContactPhone: f.emergencyContactPhone,
      medicalConditions: f.medicalConditions,
      govtIdType: f.govtIdType,
      govtIdNumber: f.govtIdNumber
    }));
    updateBookingState({ participants: savedParticipants });
    navigate({ to: "/booking/$trekSlug/addons", params: { trekSlug } });
  }
  function fieldErr(idx, key) {
    const msg = errors[`${idx}.${key}`];
    return msg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xs text-red-500 mt-1",
        "data-ocid": `participants.field_error.${idx}.${key}`,
        children: msg
      }
    ) : null;
  }
  const trekDisplayName = trekName || (trek == null ? void 0 : trek.name) || trekSlug;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#f8faf9" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingProgress,
      {
        currentStep: 2,
        trekName: trekDisplayName,
        trekSlug
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
      selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-green-100 p-4 mb-6 flex flex-wrap gap-4 items-center",
          style: { background: "white" },
          "data-ocid": "participants.booking_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-5 h-5", style: { color: "#1A7A4C" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: trekDisplayName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              formatDate(selectedBatch.startDate),
              " –",
              " ",
              formatDate(selectedBatch.endDate)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
              count,
              " participant",
              count !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                style: {
                  background: "#e8f5ee",
                  color: "#1A7A4C",
                  border: "1px solid #c1e4ce"
                },
                children: [
                  "₹",
                  selectedBatch.pricePerPerson.toLocaleString("en-IN"),
                  "/person"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-2 overflow-x-auto mb-4",
          "data-ocid": "participants.tabs",
          children: forms.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `participants.tab.${i + 1}`,
              onClick: () => setActiveTab(i),
              className: "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5",
              style: {
                background: activeTab === i ? "#1A7A4C" : "white",
                color: activeTab === i ? "white" : "#374151",
                border: activeTab === i ? "none" : "1px solid #e5e7eb"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                "Participant ",
                i + 1,
                submitted && Object.keys(errors).some((k) => k.startsWith(`${i}.`)) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 inline-block ml-1" })
              ]
            }
          ) }, `participant-tab-${i + 1}`))
        }
      ),
      forms.map(
        (form, idx) => idx !== activeTab ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl border border-green-100 overflow-hidden",
            style: { background: "white" },
            "data-ocid": `participants.form.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-6 pt-5 pb-4 border-b border-gray-100",
                  style: { background: "#f8faf9" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h2",
                    {
                      className: "font-bold text-base",
                      style: {
                        fontFamily: "'Playfair Display', serif",
                        color: "#1A7A4C"
                      },
                      children: [
                        "Participant ",
                        idx + 1,
                        " — Personal Details"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "First Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: form.firstName,
                        onChange: (e) => updateField(idx, "firstName", e.target.value),
                        placeholder: "Rahul",
                        "data-ocid": `participants.first_name.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "firstName")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Last Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: form.lastName,
                        onChange: (e) => updateField(idx, "lastName", e.target.value),
                        placeholder: "Sharma",
                        "data-ocid": `participants.last_name.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "lastName")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Age ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        min: 14,
                        max: 80,
                        value: form.age,
                        onChange: (e) => updateField(idx, "age", e.target.value),
                        placeholder: "25",
                        "data-ocid": `participants.age.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "age")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Gender ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.gender,
                        onValueChange: (v) => updateField(idx, "gender", v),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": `participants.gender.${idx + 1}`,
                              className: "mt-1",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select gender" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Male", children: "Male" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Female", children: "Female" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Other", children: "Other / Prefer not to say" })
                          ] })
                        ]
                      }
                    ),
                    fieldErr(idx, "gender")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Mobile Number ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: form.mobile,
                        onChange: (e) => updateField(
                          idx,
                          "mobile",
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        ),
                        placeholder: "9876543210",
                        "data-ocid": `participants.mobile.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "mobile")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Email Address ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "email",
                        value: form.email,
                        onChange: (e) => updateField(idx, "email", e.target.value),
                        placeholder: "rahul@email.com",
                        "data-ocid": `participants.email.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "email")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-lg p-4",
                    style: { background: "#fff8e6", border: "1px solid #f4d078" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-700 mb-3 uppercase tracking-wide", children: "Emergency Contact" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                            "Name ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              value: form.emergencyContactName,
                              onChange: (e) => updateField(
                                idx,
                                "emergencyContactName",
                                e.target.value
                              ),
                              placeholder: "Parent / Spouse",
                              "data-ocid": `participants.emergency_name.${idx + 1}`,
                              className: "mt-1 bg-white"
                            }
                          ),
                          fieldErr(idx, "emergencyContactName")
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                            "Phone ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              value: form.emergencyContactPhone,
                              onChange: (e) => updateField(
                                idx,
                                "emergencyContactPhone",
                                e.target.value.replace(/\D/g, "").slice(0, 10)
                              ),
                              placeholder: "9876543210",
                              "data-ocid": `participants.emergency_phone.${idx + 1}`,
                              className: "mt-1 bg-white"
                            }
                          ),
                          fieldErr(idx, "emergencyContactPhone")
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "Govt ID Type ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.govtIdType,
                        onValueChange: (v) => updateField(idx, "govtIdType", v),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": `participants.govt_id_type.${idx + 1}`,
                              className: "mt-1",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select ID type" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Aadhaar", children: "Aadhaar Card" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Passport", children: "Passport" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VoterID", children: "Voter ID" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DrivingLicense", children: "Driving License" })
                          ] })
                        ]
                      }
                    ),
                    fieldErr(idx, "govtIdType")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
                      "ID Number ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: form.govtIdNumber,
                        onChange: (e) => updateField(
                          idx,
                          "govtIdNumber",
                          e.target.value.toUpperCase()
                        ),
                        placeholder: "XXXX XXXX XXXX",
                        "data-ocid": `participants.govt_id_number.${idx + 1}`,
                        className: "mt-1"
                      }
                    ),
                    fieldErr(idx, "govtIdNumber")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-gray-700", children: "Medical Conditions (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      value: form.medicalConditions,
                      onChange: (e) => updateField(idx, "medicalConditions", e.target.value),
                      placeholder: "Any allergies, chronic conditions, medications... (leave blank if none)",
                      "data-ocid": `participants.medical_conditions.${idx + 1}`,
                      className: "mt-1 resize-none",
                      rows: 3
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-5 space-y-3",
                    style: { background: "#f0faf4", border: "1px solid #c1e4ce" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TriangleAlert,
                          {
                            className: "w-4 h-4",
                            style: { color: "#1A7A4C" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-semibold text-sm",
                            style: { color: "#1A7A4C" },
                            children: [
                              "Medical Fitness Declaration",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                            ]
                          }
                        )
                      ] }),
                      [
                        {
                          key: "medicalNoHeart",
                          label: "I confirm I have no history of heart disease or cardiac conditions"
                        },
                        {
                          key: "medicalNoAsthma",
                          label: "I confirm I have no history of asthma or respiratory conditions"
                        },
                        ...form.gender !== "Male" ? [
                          {
                            key: "medicalNotPregnant",
                            label: "I confirm I am not currently pregnant"
                          }
                        ] : [],
                        {
                          key: "medicalFit",
                          label: "I confirm I am medically fit for high-altitude trekking"
                        }
                      ].map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "flex items-start gap-3 cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "checkbox",
                                checked: form[key],
                                onChange: (e) => updateField(idx, key, e.target.checked),
                                "data-ocid": `participants.medical.${key}.${idx + 1}`,
                                className: "mt-0.5 w-4 h-4 rounded accent-green-700 cursor-pointer"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700 leading-snug", children: label })
                          ]
                        },
                        key
                      )),
                      submitted && (errors[`${idx}.medicalNoHeart`] || errors[`${idx}.medicalFit`]) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs text-red-500",
                          "data-ocid": `participants.medical_error.${idx + 1}`,
                          children: "Please confirm all required declarations"
                        }
                      ),
                      Number(form.age) >= 55 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-2 mt-2 p-3 rounded-lg",
                          style: {
                            background: "#fff8e6",
                            border: "1px solid #f4d078"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 55+:" }),
                              " Doctor clearance is strongly recommended before high-altitude trekking."
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          },
          `participant-form-${idx + 1}`
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => navigate({
              to: "/booking/$trekSlug/select-batch",
              params: { trekSlug }
            }),
            "data-ocid": "participants.back_button",
            className: "flex-1 h-12 font-semibold",
            style: { borderColor: "#1A7A4C", color: "#1A7A4C" },
            children: "← Back"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleContinue,
            "data-ocid": "participants.continue_button",
            className: "flex-[2] h-12 text-base font-bold rounded-xl",
            style: { background: "#F4A623", color: "white" },
            children: [
              "Continue to Add-ons ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-5 h-5" })
            ]
          }
        )
      ] }),
      submitted && Object.keys(errors).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-center text-sm text-red-500 mt-3",
          "data-ocid": "participants.error_state",
          children: "Please fix the highlighted errors to continue"
        }
      )
    ] })
  ] });
}
export {
  Participants as default
};
