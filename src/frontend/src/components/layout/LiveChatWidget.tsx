import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

export function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const text = encodeURIComponent(message);
    window.open(
      `https://wa.me/919876543210?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    setMessage("");
    setOpen(false);
  };

  return (
    <>
      {/* Chat button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Live chat"
        className="fixed bottom-20 left-1/2 -translate-x-1/2 md:bottom-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg font-label text-xs font-semibold tracking-wide text-white transition-all hover:scale-110"
        style={{ background: "#E8963A" }}
        data-ocid="livechat_float_button"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Chat with us</span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-36 left-1/2 -translate-x-1/2 md:bottom-24 z-50 w-80 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ background: "#145C38" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                AR
              </div>
              <div>
                <p className="text-white text-sm font-medium">Ankit Rawat</p>
                <p className="text-white/70 text-xs">
                  Trek Expert | Typically replies in 5 min
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="px-4 py-4 h-48 overflow-y-auto space-y-3">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                AR
              </div>
              <div
                className="rounded-xl rounded-tl-none px-3 py-2 text-sm max-w-[80%]"
                style={{ background: "rgba(232,150,58,0.1)" }}
              >
                Hi there! 👋 I'm Ankit, a trek expert at Global Trek. How can I
                help you plan your Himalayan adventure today?
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-border flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              data-ocid="livechat.input"
            />
            <button
              type="button"
              onClick={handleSend}
              aria-label="Send message"
              className="p-2 rounded-lg text-white transition-colors hover:opacity-90"
              style={{ background: "#145C38" }}
              data-ocid="livechat.send_button"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
