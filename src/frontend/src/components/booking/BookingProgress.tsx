import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

interface BookingProgressProps {
  currentStep: 1 | 2 | 3 | 4;
  trekName: string;
  trekSlug: string;
}

const STEPS = [
  { id: 1, label: "Select Batch", shortLabel: "Batch" },
  { id: 2, label: "Participants", shortLabel: "People" },
  { id: 3, label: "Add-ons", shortLabel: "Add-ons" },
  { id: 4, label: "Payment", shortLabel: "Pay" },
];

export function BookingProgress({
  currentStep,
  trekName,
  trekSlug,
}: BookingProgressProps) {
  return (
    <div
      className="w-full py-4 px-4 md:px-6 border-b"
      style={{ background: "#0A2E1A", borderColor: "rgba(255,255,255,0.1)" }}
      data-ocid="booking_progress"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back link + trek name */}
        <div className="flex items-center gap-3 mb-4">
          <Link
            to="/trek/$trekId"
            params={{ trekId: trekSlug }}
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
            aria-label={`Back to ${trekName}`}
            data-ocid="booking_progress.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Trek</span>
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
          <h2
            className="font-display text-sm font-semibold truncate"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "white",
            }}
          >
            {trekName}
          </h2>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between relative overflow-x-auto">
          {/* Connector line */}
          <div
            className="absolute top-4 left-0 right-0 h-0.5"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          <div
            className="absolute top-4 left-0 h-0.5 transition-all duration-500"
            style={{
              background: "#2ECC71",
              width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
            }}
          />

          {STEPS.map((step) => {
            const isDone = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isFuture = step.id > currentStep;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center gap-2 z-10"
                style={{ minWidth: "60px" }}
                data-ocid={`booking_progress.step.${step.id}`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 font-label text-xs font-bold"
                  style={{
                    background: isDone
                      ? "#2ECC71"
                      : isCurrent
                        ? "#F4A623"
                        : "rgba(255,255,255,0.1)",
                    border: isCurrent
                      ? "2px solid #F4A623"
                      : isDone
                        ? "2px solid #2ECC71"
                        : "2px solid rgba(255,255,255,0.2)",
                    boxShadow: isCurrent
                      ? "0 0 12px rgba(244,166,35,0.5)"
                      : "none",
                    color: isFuture ? "rgba(255,255,255,0.4)" : "white",
                  }}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isDone ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span
                  className="font-label text-[10px] font-semibold tracking-wide text-center hidden sm:block"
                  style={{
                    color: isDone
                      ? "#2ECC71"
                      : isCurrent
                        ? "#F4A623"
                        : "rgba(255,255,255,0.4)",
                  }}
                >
                  {step.label}
                </span>
                <span
                  className="font-label text-[10px] font-semibold tracking-wide text-center sm:hidden"
                  style={{
                    color: isDone
                      ? "#2ECC71"
                      : isCurrent
                        ? "#F4A623"
                        : "rgba(255,255,255,0.4)",
                  }}
                >
                  {step.shortLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
