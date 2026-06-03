import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={language === "en" ? "Switch to Hindi" : "Switch to English"}
      data-ocid="language_toggle"
      className={`relative flex items-center rounded-full border border-white/30 bg-white/10 p-0.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${className}`}
    >
      <motion.span
        className="absolute top-0.5 h-[calc(100%-4px)] w-[calc(50%-1px)] rounded-full"
        style={{ backgroundColor: "#1A7A4C" }}
        animate={{ left: language === "en" ? 2 : "calc(50% + 1px)" }}
        initial={false}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <span className="relative z-10 min-w-[28px] px-2.5 py-1 text-center">
        EN
      </span>
      <span className="relative z-10 min-w-[28px] px-2.5 py-1 text-center">
        हिं
      </span>
    </button>
  );
}
