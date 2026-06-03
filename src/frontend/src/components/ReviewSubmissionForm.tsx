import { createActor } from "@/backend";
import type { Review as BackendReview } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const GT_GREEN = "#1A7A4C";
const GT_DARK = "#145C38";
const GT_AMBER = "#F4A623";

const STEP_LABELS = [
  "Verify",
  "Rating",
  "Details",
  "Story",
  "About You",
  "Preview",
];

const DIM_LABELS = [
  { key: "guideExpertise", label: "Guide Expertise & Care" },
  { key: "food", label: "Food Quality & Quantity" },
  { key: "safety", label: "Safety Measures" },
  { key: "campsite", label: "Campsite Quality" },
  { key: "valueForMoney", label: "Value for Money" },
  { key: "organization", label: "Trek Organization" },
  { key: "transport", label: "Transport & Logistics" },
] as const;

type DimKey = (typeof DIM_LABELS)[number]["key"];

const RATING_LABELS: Record<number, string> = {
  1: "Terrible",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

const GROUP_TYPES = [
  "Solo",
  "Couple",
  "Family",
  "Corporate",
  "School",
] as const;

interface Props {
  trekSlug: string;
  trekName: string;
  onClose: () => void;
  onSuccess: () => void;
}

function StarRow({
  value,
  onChange,
  size = 24,
  interactive = true,
}: {
  value: number;
  onChange: (v: number) => void;
  size?: number;
  interactive?: boolean;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= (interactive ? hovered || value : value);
        return (
          <button
            key={`star-${i}`}
            type="button"
            aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
            onClick={() => interactive && onChange(i)}
            onMouseEnter={() => interactive && setHovered(i)}
            onMouseLeave={() => interactive && setHovered(0)}
            className="transition-transform"
            style={{
              cursor: interactive ? "pointer" : "default",
              transform: filled ? "scale(1.1)" : "scale(1)",
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={filled ? GT_AMBER : "none"}
              stroke={filled ? GT_AMBER : "#9ca3af"}
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </button>
        );
      })}
    </span>
  );
}

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div
          key={`progress-dot-step-${step}`}
          className="transition-all duration-300"
          style={{
            width: step === current ? 24 : 10,
            height: 10,
            borderRadius: 9999,
            background:
              step < current
                ? GT_GREEN
                : step === current
                  ? GT_GREEN
                  : "#e5e7eb",
            border: step === current ? `2px solid ${GT_DARK}` : "none",
            opacity: step < current ? 0.6 : 1,
          }}
        />
      ))}
      <span
        className="text-xs text-gray-400 ml-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Step {current} of {total}
      </span>
    </div>
  );
}

export function ReviewSubmissionForm({
  trekSlug,
  trekName,
  onClose,
  onSuccess,
}: Props) {
  const { actor } = useActor(createActor);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [dimRatings, setDimRatings] = useState<Record<DimKey, number>>({
    guideExpertise: 0,
    food: 0,
    safety: 0,
    campsite: 0,
    valueForMoney: 0,
    organization: 0,
    transport: 0,
  });
  const [reviewText, setReviewText] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [city, setCity] = useState("");
  const [groupType, setGroupType] = useState<string>("Solo");
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, 3);
    setPhotoFiles(files);
    const previews: string[] = [];
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
      const reviewPayload: BackendReview = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        trekId: trekSlug,
        reviewerName: displayName,
        reviewerCity: city,
        reviewText: reviewText,
        rating: BigInt(overallRating),
        helpful: BigInt(0),
        verified: false,
        userId: bookingEmail,
        trekDate: new Date().toISOString().split("T")[0],
      };
      await actor.createReview(reviewPayload);
      setSubmitted(true);
      onSuccess();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center p-4 border-0 max-w-none m-0 w-full h-full bg-transparent"
      style={{ background: "rgba(0,0,0,0.6)" }}
      aria-label={`Write a review for ${trekName}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        data-ocid="review_form.dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ color: GT_GREEN, fontFamily: "'DM Sans', sans-serif" }}
            >
              {STEP_LABELS[step - 1]}
            </p>
            <h2
              className="text-xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GT_DARK,
              }}
            >
              {step === 1 && "Verify Your Trek"}
              {step === 2 && "How was your overall experience?"}
              {step === 3 && "Rate specific aspects"}
              {step === 4 && "Tell your story"}
              {step === 5 && "A little about you"}
              {step === 6 && "Review Preview"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close review form"
            data-ocid="review_form.close_button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              aria-label="Close"
            >
              <title>Close</title>
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-6">
          <ProgressDots current={step} total={6} />
        </div>

        {/* Steps */}
        <div className="px-6 pb-6 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
                data-ocid="review_form.success_state"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: "#f0fdf4" }}
                >
                  ✅
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: GT_DARK,
                  }}
                >
                  Thank you!
                </h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  Your review has been submitted and will appear after
                  verification (usually within 24 hours).
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: GT_GREEN }}
                  data-ocid="review_form.success_close_button"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4" data-ocid="review_form.step_1">
                    <div
                      className="rounded-xl px-4 py-3 text-sm font-medium"
                      style={{ background: "#f0fdf4", color: GT_DARK }}
                    >
                      Writing a review for: <strong>{trekName}</strong>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: GT_DARK }}
                        htmlFor="review-email"
                      >
                        Booking Email{" "}
                        <span style={{ color: "#e74c3c" }}>*</span>
                      </label>
                      <input
                        id="review-email"
                        type="email"
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="Email used for booking"
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          borderColor: "#d1d5db",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        data-ocid="review_form.email_input"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: GT_DARK }}
                        htmlFor="review-booking-id"
                      >
                        Booking ID{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="review-booking-id"
                        type="text"
                        value={bookingId}
                        onChange={(e) => setBookingId(e.target.value)}
                        placeholder="e.g. GT-2026-KK-08547"
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{
                          borderColor: "#d1d5db",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        data-ocid="review_form.booking_id_input"
                      />
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        role="img"
                        aria-label="Info"
                      >
                        <title>Info</title>
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#9ca3af"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 7v4M8 5.5v.5"
                          stroke="#9ca3af"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      We verify all reviews to ensure authenticity
                    </p>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div
                    className="text-center space-y-6 py-4"
                    data-ocid="review_form.step_2"
                  >
                    <StarRow
                      value={overallRating}
                      onChange={setOverallRating}
                      size={40}
                    />
                    <p
                      className="text-lg font-semibold"
                      style={{
                        color: overallRating > 0 ? GT_DARK : "#9ca3af",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {overallRating > 0
                        ? RATING_LABELS[overallRating]
                        : "Select a rating"}
                    </p>
                    {overallRating === 0 && (
                      <p className="text-xs text-red-400">
                        Please select a rating to continue
                      </p>
                    )}
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-3" data-ocid="review_form.step_3">
                    {DIM_LABELS.map(({ key, label }) => (
                      <div key={key} className="flex items-center gap-3">
                        <span
                          className="text-sm w-48 flex-shrink-0"
                          style={{
                            color: GT_DARK,
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {label}
                        </span>
                        <StarRow
                          value={dimRatings[key]}
                          onChange={(v) =>
                            setDimRatings((prev) => ({ ...prev, [key]: v }))
                          }
                          size={22}
                        />
                        {dimRatings[key] > 0 && (
                          <span className="text-xs text-gray-400">
                            {RATING_LABELS[dimRatings[key]]}
                          </span>
                        )}
                      </div>
                    ))}
                    <p className="text-xs text-gray-400 pt-2">
                      All sub-ratings are optional but help future trekkers
                      choose.
                    </p>
                  </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <div className="space-y-3" data-ocid="review_form.step_4">
                    <textarea
                      value={reviewText}
                      onChange={(e) =>
                        setReviewText(e.target.value.slice(0, 1000))
                      }
                      rows={7}
                      placeholder="Tell others about your experience — the summit moment, your guide, the food, how it felt standing at the top..."
                      className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 resize-none"
                      style={{
                        borderColor: "#d1d5db",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: "1.6",
                      }}
                      data-ocid="review_form.textarea"
                    />
                    <div className="flex justify-between items-center">
                      {reviewText.length < 100 && reviewText.length > 0 && (
                        <span className="text-xs text-amber-500">
                          {100 - reviewText.length} more characters needed
                        </span>
                      )}
                      {reviewText.length === 0 && (
                        <span className="text-xs text-gray-400">
                          Minimum 100 characters required
                        </span>
                      )}
                      {reviewText.length >= 100 && (
                        <span className="text-xs" style={{ color: GT_GREEN }}>
                          ✓ Length good
                        </span>
                      )}
                      <span
                        className="text-xs ml-auto"
                        style={{
                          color:
                            reviewText.length >= 950 ? "#e74c3c" : "#9ca3af",
                        }}
                      >
                        {reviewText.length} / 1000
                      </span>
                    </div>
                  </div>
                )}

                {/* Step 5 */}
                {step === 5 && (
                  <div className="space-y-4" data-ocid="review_form.step_5">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: GT_DARK }}
                        htmlFor="review-display-name"
                      >
                        Display Name <span style={{ color: "#e74c3c" }}>*</span>
                      </label>
                      <input
                        id="review-display-name"
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="How your name appears on the review"
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{ borderColor: "#d1d5db" }}
                        data-ocid="review_form.display_name_input"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: GT_DARK }}
                        htmlFor="review-city"
                      >
                        City{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="review-city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mumbai, Bangalore, Delhi"
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
                        style={{ borderColor: "#d1d5db" }}
                        data-ocid="review_form.city_input"
                      />
                    </div>
                    <div>
                      <p
                        className="block text-sm font-semibold mb-2"
                        style={{ color: GT_DARK }}
                      >
                        Group Type
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {GROUP_TYPES.map((g) => (
                          <label
                            key={g}
                            className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border text-sm transition-colors"
                            style={{
                              borderColor:
                                groupType === g ? GT_GREEN : "#d1d5db",
                              background: groupType === g ? "#f0fdf4" : "white",
                              color: groupType === g ? GT_DARK : "#374151",
                            }}
                          >
                            <input
                              type="radio"
                              name="groupType"
                              value={g}
                              checked={groupType === g}
                              onChange={() => setGroupType(g)}
                              className="sr-only"
                              data-ocid={`review_form.group_type.${g.toLowerCase()}`}
                            />
                            {g}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p
                        className="block text-sm font-semibold mb-2"
                        style={{ color: GT_DARK }}
                      >
                        Photos{" "}
                        <span className="text-gray-400 font-normal">
                          (up to 3, optional)
                        </span>
                      </p>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full border-2 border-dashed rounded-xl p-6 text-center transition-colors hover:border-green-400"
                        style={{ borderColor: "#d1d5db" }}
                        data-ocid="review_form.upload_button"
                      >
                        <div className="text-2xl mb-1">📸</div>
                        <p className="text-sm text-gray-500">
                          Attach up to 3 photos from your trek
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Click to browse
                        </p>
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handlePhotoChange}
                      />
                      {photoPreviews.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {photoPreviews.map((src, i) => (
                            <img
                              key={`preview-${photoFiles[i]?.name ?? i}`}
                              src={src}
                              alt={`Uploaded trek snapshot ${i + 1}`}
                              className="w-20 h-20 object-cover rounded-lg border"
                              style={{ borderColor: "rgba(26,122,76,0.2)" }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 6 — Preview */}
                {step === 6 && (
                  <div className="space-y-5" data-ocid="review_form.step_6">
                    <div
                      className="rounded-2xl p-5 border"
                      style={{
                        borderColor: "rgba(26,122,76,0.15)",
                        background: "#fafffe",
                      }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                          style={{ background: GT_GREEN }}
                        >
                          {displayName[0]?.toUpperCase() ?? "?"}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {displayName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {city && `${city} · `}
                            {groupType} · {trekName}
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <StarRow
                          value={overallRating}
                          onChange={() => {}}
                          size={20}
                          interactive={false}
                        />
                        <span className="text-xs text-gray-500 ml-1">
                          {RATING_LABELS[overallRating]}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 mb-4">
                        {DIM_LABELS.filter(
                          ({ key }) => dimRatings[key] > 0,
                        ).map(({ key, label }) => (
                          <div key={key} className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 w-32 flex-shrink-0 truncate">
                              {label}
                            </span>
                            <StarRow
                              value={dimRatings[key]}
                              onChange={() => {}}
                              size={12}
                              interactive={false}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {reviewText}
                      </p>
                      {photoPreviews.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {photoPreviews.map((src, i) => (
                            <img
                              key={`prev-thumb-${photoFiles[i]?.name ?? i}`}
                              src={src}
                              alt={`Preview snapshot ${i + 1}`}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    {submitError && (
                      <p
                        className="text-sm text-red-500 text-center"
                        data-ocid="review_form.error_state"
                      >
                        {submitError}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {!submitted && (
          <div className="px-6 pb-6 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#d1d5db", color: "#374151" }}
                data-ocid="review_form.back_button"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            {step < 6 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canContinue()}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity"
                style={{
                  background: canContinue() ? GT_AMBER : "#d1d5db",
                  color: canContinue() ? "#0A2E1A" : "#9ca3af",
                  cursor: canContinue() ? "pointer" : "not-allowed",
                }}
                data-ocid="review_form.continue_button"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity"
                style={{
                  background: submitting ? "#9ca3af" : GT_AMBER,
                  color: submitting ? "white" : "#0A2E1A",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
                data-ocid="review_form.submit_button"
              >
                {submitting ? "Submitting..." : "Submit Review ✓"}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </dialog>
  );
}
