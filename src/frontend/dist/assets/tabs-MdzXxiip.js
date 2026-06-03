import { e as useActor, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, f as createActor, u as useComposedRefs, d as cn } from "./index-vYOW-QfD.js";
import { P as Primitive, c as composeEventHandlers, a as createContextScope, u as useControllableState } from "./index-Gp0GX1_L.js";
import { c as createCollection, u as useDirection } from "./index-Btruj49E.js";
import { u as useId, a as useCallbackRef } from "./index-nGlcEp0j.js";
import { P as Presence } from "./index-C1krj90m.js";
const GT_GREEN = "#1A7A4C";
const GT_DARK = "#145C38";
const GT_AMBER = "#F4A623";
const STEP_LABELS = [
  "Verify",
  "Rating",
  "Details",
  "Story",
  "About You",
  "Preview"
];
const DIM_LABELS = [
  { key: "guideExpertise", label: "Guide Expertise & Care" },
  { key: "food", label: "Food Quality & Quantity" },
  { key: "safety", label: "Safety Measures" },
  { key: "campsite", label: "Campsite Quality" },
  { key: "valueForMoney", label: "Value for Money" },
  { key: "organization", label: "Trek Organization" },
  { key: "transport", label: "Transport & Logistics" }
];
const RATING_LABELS = {
  1: "Terrible",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent"
};
const GROUP_TYPES = [
  "Solo",
  "Couple",
  "Family",
  "Corporate",
  "School"
];
function StarRow({
  value,
  onChange,
  size = 24,
  interactive = true
}) {
  const [hovered, setHovered] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((i) => {
    const filled = i <= (interactive ? hovered || value : value);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Rate ${i} star${i > 1 ? "s" : ""}`,
        onClick: () => interactive && onChange(i),
        onMouseEnter: () => interactive && setHovered(i),
        onMouseLeave: () => interactive && setHovered(0),
        className: "transition-transform",
        style: {
          cursor: interactive ? "pointer" : "default",
          transform: filled ? "scale(1.1)" : "scale(1)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: filled ? GT_AMBER : "none",
            stroke: filled ? GT_AMBER : "#9ca3af",
            strokeWidth: "1.5",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" })
          }
        )
      },
      `star-${i}`
    );
  }) });
}
function ProgressDots({ current, total }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
    Array.from({ length: total }, (_, i) => i + 1).map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "transition-all duration-300",
        style: {
          width: step === current ? 24 : 10,
          height: 10,
          borderRadius: 9999,
          background: step < current ? GT_GREEN : step === current ? GT_GREEN : "#e5e7eb",
          border: step === current ? `2px solid ${GT_DARK}` : "none",
          opacity: step < current ? 0.6 : 1
        }
      },
      `progress-dot-step-${step}`
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "text-xs text-gray-400 ml-2",
        style: { fontFamily: "'DM Sans', sans-serif" },
        children: [
          "Step ",
          current,
          " of ",
          total
        ]
      }
    )
  ] });
}
function ReviewSubmissionForm({
  trekSlug,
  trekName,
  onClose,
  onSuccess
}) {
  var _a;
  const { actor } = useActor(createActor);
  const [step, setStep] = reactExports.useState(1);
  const [direction, setDirection] = reactExports.useState(1);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [bookingEmail, setBookingEmail] = reactExports.useState("");
  const [bookingId, setBookingId] = reactExports.useState("");
  const [overallRating, setOverallRating] = reactExports.useState(0);
  const [dimRatings, setDimRatings] = reactExports.useState({
    guideExpertise: 0,
    food: 0,
    safety: 0,
    campsite: 0,
    valueForMoney: 0,
    organization: 0,
    transport: 0
  });
  const [reviewText, setReviewText] = reactExports.useState("");
  const [displayName, setDisplayName] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [groupType, setGroupType] = reactExports.useState("Solo");
  const [photoFiles, setPhotoFiles] = reactExports.useState([]);
  const [photoPreviews, setPhotoPreviews] = reactExports.useState([]);
  const fileInputRef = reactExports.useRef(null);
  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 6));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };
  const canContinue = () => {
    if (step === 1) return bookingEmail.trim().length > 0;
    if (step === 2) return overallRating > 0;
    if (step === 4) return reviewText.trim().length >= 100;
    if (step === 5) return displayName.trim().length > 0;
    return true;
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files ?? []).slice(0, 3);
    setPhotoFiles(files);
    const previews = [];
    for (const f of files) {
      previews.push(URL.createObjectURL(f));
    }
    setPhotoPreviews(previews);
  };
  const handleSubmit = async () => {
    if (!actor) {
      setSubmitError("Backend not available. Please try again.");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const reviewPayload = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        trekId: trekSlug,
        reviewerName: displayName,
        reviewerCity: city,
        reviewText,
        rating: BigInt(overallRating),
        helpful: BigInt(0),
        verified: false,
        userId: bookingEmail,
        trekDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      await actor.createReview(reviewPayload);
      setSubmitted(true);
      onSuccess();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Submission failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "dialog",
    {
      open: true,
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 border-0 max-w-none m-0 w-full h-full bg-transparent",
      style: { background: "rgba(0,0,0,0.6)" },
      "aria-label": `Write a review for ${trekName}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.96 },
          className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative",
          style: { fontFamily: "'DM Sans', sans-serif" },
          "data-ocid": "review_form.dialog",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 pt-6 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs tracking-widest uppercase mb-1",
                    style: { color: GT_GREEN, fontFamily: "'DM Sans', sans-serif" },
                    children: STEP_LABELS[step - 1]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "text-xl font-bold",
                    style: {
                      fontFamily: "'Playfair Display', serif",
                      color: GT_DARK
                    },
                    children: [
                      step === 1 && "Verify Your Trek",
                      step === 2 && "How was your overall experience?",
                      step === 3 && "Rate specific aspects",
                      step === 4 && "Tell your story",
                      step === 5 && "A little about you",
                      step === 6 && "Review Preview"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors",
                  "aria-label": "Close review form",
                  "data-ocid": "review_form.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor",
                      role: "img",
                      "aria-label": "Close",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Close" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M12 4L4 12M4 4l8 8",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressDots, { current: step, total: 6 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: direction, children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                className: "text-center py-10",
                "data-ocid": "review_form.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl",
                      style: { background: "#f0fdf4" },
                      children: "✅"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-xl font-bold mb-2",
                      style: {
                        fontFamily: "'Playfair Display', serif",
                        color: GT_DARK
                      },
                      children: "Thank you!"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm max-w-sm mx-auto", children: "Your review has been submitted and will appear after verification (usually within 24 hours)." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onClose,
                      className: "mt-6 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90",
                      style: { background: GT_GREEN },
                      "data-ocid": "review_form.success_close_button",
                      children: "Close"
                    }
                  )
                ]
              },
              "success"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                custom: direction,
                variants,
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: { duration: 0.25, ease: "easeInOut" },
                children: [
                  step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "review_form.step_1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-xl px-4 py-3 text-sm font-medium",
                        style: { background: "#f0fdf4", color: GT_DARK },
                        children: [
                          "Writing a review for: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: trekName })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "block text-sm font-semibold mb-1.5",
                          style: { color: GT_DARK },
                          htmlFor: "review-email",
                          children: [
                            "Booking Email",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e74c3c" }, children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "review-email",
                          type: "email",
                          value: bookingEmail,
                          onChange: (e) => setBookingEmail(e.target.value),
                          placeholder: "Email used for booking",
                          className: "w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2",
                          style: {
                            borderColor: "#d1d5db",
                            fontFamily: "'DM Sans', sans-serif"
                          },
                          "data-ocid": "review_form.email_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "block text-sm font-semibold mb-1.5",
                          style: { color: GT_DARK },
                          htmlFor: "review-booking-id",
                          children: [
                            "Booking ID",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 font-normal", children: "(optional)" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "review-booking-id",
                          type: "text",
                          value: bookingId,
                          onChange: (e) => setBookingId(e.target.value),
                          placeholder: "e.g. GT-2026-KK-08547",
                          className: "w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2",
                          style: {
                            borderColor: "#d1d5db",
                            fontFamily: "'DM Sans', sans-serif"
                          },
                          "data-ocid": "review_form.booking_id_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          role: "img",
                          "aria-label": "Info",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Info" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: "8",
                                cy: "8",
                                r: "7",
                                stroke: "#9ca3af",
                                strokeWidth: "1.5"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M8 7v4M8 5.5v.5",
                                stroke: "#9ca3af",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                              }
                            )
                          ]
                        }
                      ),
                      "We verify all reviews to ensure authenticity"
                    ] })
                  ] }),
                  step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "text-center space-y-6 py-4",
                      "data-ocid": "review_form.step_2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          StarRow,
                          {
                            value: overallRating,
                            onChange: setOverallRating,
                            size: 40
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-lg font-semibold",
                            style: {
                              color: overallRating > 0 ? GT_DARK : "#9ca3af",
                              fontFamily: "'Playfair Display', serif"
                            },
                            children: overallRating > 0 ? RATING_LABELS[overallRating] : "Select a rating"
                          }
                        ),
                        overallRating === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: "Please select a rating to continue" })
                      ]
                    }
                  ),
                  step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "review_form.step_3", children: [
                    DIM_LABELS.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-sm w-48 flex-shrink-0",
                          style: {
                            color: GT_DARK,
                            fontFamily: "'DM Sans', sans-serif"
                          },
                          children: label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StarRow,
                        {
                          value: dimRatings[key],
                          onChange: (v) => setDimRatings((prev) => ({ ...prev, [key]: v })),
                          size: 22
                        }
                      ),
                      dimRatings[key] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: RATING_LABELS[dimRatings[key]] })
                    ] }, key)),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 pt-2", children: "All sub-ratings are optional but help future trekkers choose." })
                  ] }),
                  step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "review_form.step_4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        value: reviewText,
                        onChange: (e) => setReviewText(e.target.value.slice(0, 1e3)),
                        rows: 7,
                        placeholder: "Tell others about your experience — the summit moment, your guide, the food, how it felt standing at the top...",
                        className: "w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 resize-none",
                        style: {
                          borderColor: "#d1d5db",
                          fontFamily: "'DM Sans', sans-serif",
                          lineHeight: "1.6"
                        },
                        "data-ocid": "review_form.textarea"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      reviewText.length < 100 && reviewText.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-500", children: [
                        100 - reviewText.length,
                        " more characters needed"
                      ] }),
                      reviewText.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Minimum 100 characters required" }),
                      reviewText.length >= 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: GT_GREEN }, children: "✓ Length good" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-xs ml-auto",
                          style: {
                            color: reviewText.length >= 950 ? "#e74c3c" : "#9ca3af"
                          },
                          children: [
                            reviewText.length,
                            " / 1000"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "review_form.step_5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "block text-sm font-semibold mb-1.5",
                          style: { color: GT_DARK },
                          htmlFor: "review-display-name",
                          children: [
                            "Display Name ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e74c3c" }, children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "review-display-name",
                          type: "text",
                          value: displayName,
                          onChange: (e) => setDisplayName(e.target.value),
                          placeholder: "How your name appears on the review",
                          className: "w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2",
                          style: { borderColor: "#d1d5db" },
                          "data-ocid": "review_form.display_name_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "block text-sm font-semibold mb-1.5",
                          style: { color: GT_DARK },
                          htmlFor: "review-city",
                          children: [
                            "City",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 font-normal", children: "(optional)" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "review-city",
                          type: "text",
                          value: city,
                          onChange: (e) => setCity(e.target.value),
                          placeholder: "e.g. Mumbai, Bangalore, Delhi",
                          className: "w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2",
                          style: { borderColor: "#d1d5db" },
                          "data-ocid": "review_form.city_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "block text-sm font-semibold mb-2",
                          style: { color: GT_DARK },
                          children: "Group Type"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: GROUP_TYPES.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border text-sm transition-colors",
                          style: {
                            borderColor: groupType === g ? GT_GREEN : "#d1d5db",
                            background: groupType === g ? "#f0fdf4" : "white",
                            color: groupType === g ? GT_DARK : "#374151"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "radio",
                                name: "groupType",
                                value: g,
                                checked: groupType === g,
                                onChange: () => setGroupType(g),
                                className: "sr-only",
                                "data-ocid": `review_form.group_type.${g.toLowerCase()}`
                              }
                            ),
                            g
                          ]
                        },
                        g
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "block text-sm font-semibold mb-2",
                          style: { color: GT_DARK },
                          children: [
                            "Photos",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 font-normal", children: "(up to 3, optional)" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            var _a2;
                            return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
                          },
                          className: "w-full border-2 border-dashed rounded-xl p-6 text-center transition-colors hover:border-green-400",
                          style: { borderColor: "#d1d5db" },
                          "data-ocid": "review_form.upload_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: "📸" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Attach up to 3 photos from your trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Click to browse" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          ref: fileInputRef,
                          type: "file",
                          accept: "image/*",
                          multiple: true,
                          className: "hidden",
                          onChange: handlePhotoChange
                        }
                      ),
                      photoPreviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-3", children: photoPreviews.map((src, i) => {
                        var _a2;
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src,
                            alt: `Uploaded trek snapshot ${i + 1}`,
                            className: "w-20 h-20 object-cover rounded-lg border",
                            style: { borderColor: "rgba(26,122,76,0.2)" }
                          },
                          `preview-${((_a2 = photoFiles[i]) == null ? void 0 : _a2.name) ?? i}`
                        );
                      }) })
                    ] })
                  ] }),
                  step === 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "review_form.step_6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-2xl p-5 border",
                        style: {
                          borderColor: "rgba(26,122,76,0.15)",
                          background: "#fafffe"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
                                style: { background: GT_GREEN },
                                children: ((_a = displayName[0]) == null ? void 0 : _a.toUpperCase()) ?? "?"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: displayName }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                                city && `${city} · `,
                                groupType,
                                " · ",
                                trekName
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              StarRow,
                              {
                                value: overallRating,
                                onChange: () => {
                                },
                                size: 20,
                                interactive: false
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 ml-1", children: RATING_LABELS[overallRating] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5 mb-4", children: DIM_LABELS.filter(
                            ({ key }) => dimRatings[key] > 0
                          ).map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 w-32 flex-shrink-0 truncate", children: label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              StarRow,
                              {
                                value: dimRatings[key],
                                onChange: () => {
                                },
                                size: 12,
                                interactive: false
                              }
                            )
                          ] }, key)) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: reviewText }),
                          photoPreviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-3", children: photoPreviews.map((src, i) => {
                            var _a2;
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src,
                                alt: `Preview snapshot ${i + 1}`,
                                className: "w-16 h-16 object-cover rounded-lg"
                              },
                              `prev-thumb-${((_a2 = photoFiles[i]) == null ? void 0 : _a2.name) ?? i}`
                            );
                          }) })
                        ]
                      }
                    ),
                    submitError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm text-red-500 text-center",
                        "data-ocid": "review_form.error_state",
                        children: submitError
                      }
                    )
                  ] })
                ]
              },
              `step-${step}`
            ) }) }),
            !submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 flex items-center justify-between gap-3", children: [
              step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: goBack,
                  className: "px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:bg-gray-50",
                  style: { borderColor: "#d1d5db", color: "#374151" },
                  "data-ocid": "review_form.back_button",
                  children: "← Back"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
              step < 6 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: goNext,
                  disabled: !canContinue(),
                  className: "px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity",
                  style: {
                    background: canContinue() ? GT_AMBER : "#d1d5db",
                    color: canContinue() ? "#0A2E1A" : "#9ca3af",
                    cursor: canContinue() ? "pointer" : "not-allowed"
                  },
                  "data-ocid": "review_form.continue_button",
                  children: "Continue →"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSubmit,
                  disabled: submitting,
                  className: "px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity",
                  style: {
                    background: submitting ? "#9ca3af" : GT_AMBER,
                    color: submitting ? "white" : "#0A2E1A",
                    cursor: submitting ? "not-allowed" : "pointer"
                  },
                  "data-ocid": "review_form.submit_button",
                  children: submitting ? "Submitting..." : "Submit Review ✓"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: reactExports.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    reactExports.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
export {
  ReviewSubmissionForm as R,
  Tabs as T,
  TabsList as a,
  TabsTrigger as b,
  TabsContent as c
};
