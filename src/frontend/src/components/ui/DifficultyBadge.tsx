interface DifficultyBadgeProps {
  difficulty: string;
  className?: string;
}

const difficultyStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Easy: { bg: "#1A3A1A", text: "#52D45E", border: "#2D5A2D" },
  "Easy to Moderate": { bg: "#1A2E1A", text: "#7EE87E", border: "#3A6A3A" },
  Moderate: { bg: "#3A2800", text: "#F5A623", border: "#6A4A00" },
  "Moderate to Difficult": {
    bg: "#3A1500",
    text: "#FF7043",
    border: "#6A2500",
  },
  Difficult: { bg: "#3A0000", text: "#FF4444", border: "#6A0000" },
};

const defaultStyle = { bg: "#3A2800", text: "#F5A623", border: "#6A4A00" };

export function DifficultyBadge({
  difficulty,
  className = "",
}: DifficultyBadgeProps) {
  const style = difficultyStyles[difficulty] ?? defaultStyle;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold border tracking-wide ${className}`}
      style={{
        background: style.bg,
        color: style.text,
        borderColor: style.border,
      }}
    >
      {difficulty}
    </span>
  );
}
