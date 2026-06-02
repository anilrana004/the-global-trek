import { Phone, X } from "lucide-react";
import { useState } from "react";

const trekOptions = [
  "All Our Treks",
  "Kedarkantha Trek",
  "Chopta Tungnath Chandrashila",
  "Har Ki Dun",
  "Kuari Pass",
  "Phulara Ridge",
  "Valley of Flowers",
  "Roopkund Trek",
  "Brahmatal Trek",
  "Hampta Pass Trek",
  "Sar Pass Trek",
  "Kheerganga Trek",
  "Triund Trek",
  "Char Dham Yatra",
  "Kedarnath Yatra",
  "Do Dham Yatra",
];

export function CallbackFloat() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [trekInterest, setTrekInterest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setPhone("");
      setBestTime("");
      setTrekInterest("");
    }, 2500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Request callback"
        className="fixed bottom-20 right-4 md:bottom-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg font-label text-xs font-semibold tracking-wide text-white transition-all hover:scale-110"
        style={{ background: "#145C38" }}
        data-ocid="callback_float_button"
      >
        <span className="relative flex shrink-0">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
            style={{ background: "#145C38" }}
          />
          <Phone className="relative w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Request Callback</span>
      </button>

      {/* Modal */}
      {open && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 m-0 max-w-none max-h-none w-full h-full border-0"
          aria-label="Request callback"
        >
          <div
            className="bg-card rounded-2xl shadow-xl w-full max-w-sm p-6 space-y-4"
            data-ocid="callback_dialog"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Request a Callback
              </h2>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Close"
                data-ocid="callback_dialog.close_button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "rgba(82,212,94,0.15)" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "#52D45E" }} />
                </div>
                <p className="text-foreground font-medium">
                  ✅ We'll call you at {phone} within 30 minutes!
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  Our trek experts respond within 2 hours (9 AM – 9 PM IST)
                </p>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                    required
                    aria-label="Your Name"
                    data-ocid="callback_dialog.name_input"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mobile Number"
                    required
                    aria-label="Mobile Number"
                    data-ocid="callback_dialog.phone_input"
                  />

                  <div className="space-y-1">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground">
                      Best Time to Call
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Now",
                        "Morning 9-12",
                        "Afternoon 12-5",
                        "Evening 5-9",
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setBestTime(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            bestTime === t
                              ? "border-[#E8963A] text-[#E8963A] bg-[rgba(232,150,58,0.1)]"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                          data-ocid={`callback_dialog.time_${t.replace(/[^a-z0-9]/gi, "_")}_radio`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground">
                      Trek Interest
                    </p>
                    <select
                      value={trekInterest}
                      onChange={(e) => setTrekInterest(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      data-ocid="callback_dialog.trek_select"
                    >
                      <option value="">Select a trek or yatra</option>
                      {trekOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg font-label font-semibold text-white text-sm tracking-wide transition-colors hover:opacity-90"
                    style={{ background: "#145C38" }}
                    data-ocid="callback_dialog.submit_button"
                  >
                    Request Callback
                  </button>
                </form>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}
