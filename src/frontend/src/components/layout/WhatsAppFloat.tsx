import { SiWhatsapp } from "react-icons/si";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-2xl transition-smooth hover:scale-105 active:scale-95"
      style={{ background: "#25D366" }}
      data-ocid="whatsapp_float_button"
    >
      {/* Pulsing ring */}
      <span className="relative flex shrink-0">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ background: "#25D366" }}
        />
        <SiWhatsapp className="relative text-white w-5 h-5" />
      </span>
      <span className="text-white text-sm font-medium hidden sm:block">
        Chat with Us
      </span>
    </a>
  );
}
