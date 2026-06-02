import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  CheckCircle,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const treks = [
  "Chopta Tungnath Chandrashila",
  "Har Ki Dun — Valley of Gods",
  "Kedarkantha Trek",
  "Kuari Pass — The Curzon Trail",
  "Phulara Ridge",
  "Valley of Flowers",
  "Roopkund Trek",
  "Brahmatal Trek",
  "Dayara Bugyal",
  "Nag Tibba",
  "Hampta Pass Trek",
  "Sar Pass Trek",
  "Kheerganga Trek",
  "Triund Trek",
  "Beas Kund",
  "Kedarnath Yatra",
  "Do Dham Yatra",
  "Char Dham Yatra",
  "Corporate Trekking Package",
  "School / College Package",
  "Family Trek Package",
  "Honeymoon Trek Package",
];

const _faq = [
  {
    q: "How quickly will I get a response?",
    a: "Our trek experts respond within 2 hours between 9 AM and 9 PM IST, 7 days a week. For urgent queries, call or WhatsApp us directly.",
  },
  {
    q: "Can I visit your Dehradun office?",
    a: "Yes! We welcome walk-ins at our Dehradun office (15 Rajpur Road) Monday–Sunday, 9 AM–7 PM. Our trek experts will guide you in person.",
  },
  {
    q: "Do you offer custom batch dates?",
    a: "Absolutely. For groups of 6 or more, we can arrange custom departure dates for almost any trek or yatra. Submit an inquiry and we'll plan it for you.",
  },
  {
    q: "Is it safe to book online?",
    a: "Yes. Payments are secured via Razorpay with 256-bit SSL encryption and PCI-DSS Level 1 compliance. You receive instant confirmation via email and WhatsApp.",
  },
  {
    q: "What if I need to cancel my booking?",
    a: "Cancellations made 30+ days before departure get a full refund minus booking fee. 15–29 days: 50% refund. Under 15 days: no refund but you can reschedule once.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [trekInterest, setTrekInterest] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [budget, setBudget] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [scheduleSlot, setScheduleSlot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDates: "",
    groupSize: "",
    specialRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDates: "",
      groupSize: "",
      specialRequirements: "",
    });
    setTrekInterest("");
    setHearAboutUs("");
    setBudget("");
    setNewsletter(false);
  };

  return (
    <div className="bg-background min-h-screen" data-ocid="contact.page">
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0E14 0%, #0D1A0F 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#E8963A" }}
          >
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic text-foreground mb-4">
            Book Your Trek
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your dream Himalayan experience. We respond within 2
            hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" data-ocid="contact.form_section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" data-ocid="contact.info_section">
            <div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: "#E8963A" }}
              >
                Contact Us
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91-XXXXXXXXXX",
                    sub: "9 AM – 7 PM IST",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@theglobaltrek.com",
                    sub: "Replies within 2 hours",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Dehradun, Uttarakhand",
                    sub: "248001",
                  },
                  {
                    icon: Clock,
                    label: "Support Hours",
                    value: "9 AM – 9 PM IST",
                    sub: "All days",
                  },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="p-2.5 rounded-xl shrink-0"
                      style={{ background: "rgba(232,150,58,0.1)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#E8963A" }} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                        {label}
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        {value}
                      </p>
                      <p className="text-xs text-muted-foreground">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-5 rounded-xl border"
              style={{
                borderColor: "rgba(232,150,58,0.3)",
                background: "rgba(232,150,58,0.05)",
              }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: "#E8963A" }}
              >
                Quick Response Promise
              </p>
              <p className="text-foreground text-sm">
                We respond to all inquiries within 2 hours during 9 AM – 9 PM
                IST.
              </p>
            </div>

            {/* Extra channels */}
            <div className="space-y-4">
              <p
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "#E8963A" }}
              >
                More Ways to Reach Us
              </p>

              {/* Schedule a Call */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{ background: "rgba(232,150,58,0.1)" }}
                >
                  <Calendar className="w-4 h-4" style={{ color: "#E8963A" }} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Schedule a Call
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    Free 30-min trek planning call
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Confirmed within 1 hour
                  </p>
                  <button
                    type="button"
                    onClick={() => setScheduleOpen(true)}
                    className="mt-2 text-xs font-semibold tracking-wide"
                    style={{ color: "#E8963A" }}
                    data-ocid="contact.schedule_call_button"
                  >
                    Schedule Now →
                  </button>
                </div>
              </div>

              {/* Video Consultation */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{ background: "rgba(232,150,58,0.1)" }}
                >
                  <Video className="w-4 h-4" style={{ color: "#E8963A" }} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Video Consultation
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    Zoom / Google Meet — 30 min free
                  </p>
                  <a
                    href="mailto:info@globaltrek.in?subject=Video%20Consultation%20Request"
                    className="mt-2 inline-block text-xs font-semibold tracking-wide"
                    style={{ color: "#E8963A" }}
                    data-ocid="contact.video_call_link"
                  >
                    Book Video Call →
                  </a>
                </div>
              </div>

              {/* Instagram DM */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{ background: "rgba(232,150,58,0.1)" }}
                >
                  <Instagram className="w-4 h-4" style={{ color: "#E8963A" }} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Instagram DM
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    @globaltrekin — reply within 1 hour
                  </p>
                  <a
                    href="https://instagram.com/globaltrekin"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs font-semibold tracking-wide"
                    style={{ color: "#E8963A" }}
                    data-ocid="contact.instagram_link"
                  >
                    Open Instagram →
                  </a>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{ background: "rgba(232,150,58,0.1)" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#E8963A" }} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Postal Address
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    Global Trek Adventures Pvt. Ltd.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    123 Rajpur Road, Dehradun, Uttarakhand 248001, India
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    We respond within 5 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  className="w-16 h-16 mb-6"
                  style={{ color: "#52D45E" }}
                />
                <h2 className="font-display text-3xl italic text-foreground mb-3">
                  Inquiry Received!
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Thank you for reaching out. Our trek specialist will contact
                  you within 2 hours. Prepare for the mountains!
                </p>
                <Button
                  variant="outline"
                  className="mt-8 font-mono text-xs tracking-wider uppercase"
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.submit_another_button"
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-6"
                data-ocid="contact.form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-mono text-xs tracking-wider"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Arjun Mehta"
                      className="bg-card border-border"
                      data-ocid="contact.name_input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-mono text-xs tracking-wider"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="arjun@email.com"
                      className="bg-card border-border"
                      data-ocid="contact.email_input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="font-mono text-xs tracking-wider"
                    >
                      Phone (WhatsApp preferred) *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-card border-border"
                      data-ocid="contact.phone_input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-mono text-xs tracking-wider">
                      Trek / Yatra Interest *
                    </Label>
                    <Select
                      value={trekInterest}
                      onValueChange={setTrekInterest}
                    >
                      <SelectTrigger
                        className="bg-card border-border"
                        data-ocid="contact.trek_interest_select"
                      >
                        <SelectValue placeholder="Select a trek or yatra" />
                      </SelectTrigger>
                      <SelectContent>
                        {treks.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredDates"
                      className="font-mono text-xs tracking-wider"
                    >
                      Preferred Dates
                    </Label>
                    <Input
                      id="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      placeholder="e.g. December 2025"
                      className="bg-card border-border"
                      data-ocid="contact.dates_input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="groupSize"
                      className="font-mono text-xs tracking-wider"
                    >
                      Group Size
                    </Label>
                    <Input
                      id="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      placeholder="e.g. 4 people"
                      className="bg-card border-border"
                      data-ocid="contact.group_size_input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="specialRequirements"
                    className="font-mono text-xs tracking-wider"
                  >
                    Special Requirements
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Medical conditions, dietary needs, experience level, or anything else we should know..."
                    rows={4}
                    className="bg-card border-border resize-none"
                    data-ocid="contact.requirements_textarea"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-mono text-xs tracking-wider">
                    Budget per Person
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "< ₹5,000",
                      "₹5,000 – 15,000",
                      "₹15,000 – 30,000",
                      "₹30,000+",
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          budget === b
                            ? "border-[#E8963A] text-[#E8963A] bg-[rgba(232,150,58,0.1)]"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                        data-ocid={`contact.budget_${b.replace(/[^a-z0-9]/gi, "_")}_radio`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-mono text-xs tracking-wider">
                    How did you hear about us?
                  </Label>
                  <Select value={hearAboutUs} onValueChange={setHearAboutUs}>
                    <SelectTrigger
                      className="bg-card border-border"
                      data-ocid="contact.hear_about_us_select"
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Google Search",
                        "Instagram",
                        "YouTube",
                        "Friend / Word of Mouth",
                        "Travel Blog",
                        "WhatsApp Group",
                        "Other",
                      ].map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="specialRequirements"
                    className="font-mono text-xs tracking-wider"
                  >
                    Special Requirements
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Dietary restrictions, medical conditions, custom dates..."
                    rows={4}
                    className="bg-card border-border resize-none"
                    data-ocid="contact.requirements_textarea"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="w-4 h-4 rounded border-border accent-[#E8963A]"
                    data-ocid="contact.newsletter_checkbox"
                  />
                  <span className="text-sm text-muted-foreground">
                    📧 Subscribe to seasonal trek alerts and offers
                  </span>
                </label>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-mono text-sm tracking-widest uppercase"
                  style={{ background: "#E8963A", color: "#0A0E14" }}
                  data-ocid="contact.submit_button"
                >
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Automated Communication Flows */}
      <section
        className="py-16 px-4 bg-muted/30"
        data-ocid="contact.flows_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#E8963A" }}
            >
              Automated Care
            </p>
            <h2 className="font-display text-3xl md:text-4xl italic text-foreground mb-3">
              How We Stay in Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From the moment you inquire to long after your trek, we keep you
              informed at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flow A — Post-Inquiry */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  A
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    After You Inquire
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Automated + Personal responses
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    time: "Immediately",
                    action: "Auto-reply email with Trek Guide PDF attached",
                    icon: "📧",
                  },
                  {
                    time: "+2 hours",
                    action:
                      "Personal follow-up call/email from your trek coordinator",
                    icon: "🧑‍💼",
                  },
                  {
                    time: "+24 hours",
                    action: "WhatsApp follow-up if no response yet",
                    icon: "💬",
                  },
                ].map((step) => (
                  <div
                    key={step.time}
                    className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl"
                  >
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-blue-700">
                        {step.time}
                      </div>
                      <div className="text-sm text-gray-700">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow B — Post-Booking */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  B
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    After You Book
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Complete preparation journey
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    time: "Immediately",
                    action:
                      "Booking confirmation email + PDF itinerary + packing list",
                    icon: "✅",
                  },
                  {
                    time: "+1 day",
                    action:
                      '"Welcome to Global Trek" email with pre-trek fitness guide',
                    icon: "🏃",
                  },
                  {
                    time: "-30 days",
                    action:
                      "Pre-trek reminder: medical form, gear checklist, packing tips",
                    icon: "📋",
                  },
                  {
                    time: "-7 days",
                    action:
                      "Final reminder: pickup time, what to bring, emergency contacts",
                    icon: "⏰",
                  },
                  {
                    time: "-1 day",
                    action:
                      "WhatsApp reminder with your guide's direct contact number",
                    icon: "💬",
                  },
                  {
                    time: "+1 day",
                    action: "Post-trek thank you + review request link",
                    icon: "⭐",
                  },
                ].map((step) => (
                  <div
                    key={step.time}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-xl"
                  >
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-green-700">
                        {step.time}
                      </div>
                      <div className="text-sm text-gray-700">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow C — Post-Trek */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">
                  C
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    After Your Trek
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Community & next adventure
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    time: "+1 day",
                    action:
                      'Thank you email + "Write a Review" link (5-min form)',
                    icon: "❤️",
                  },
                  {
                    time: "+7 days",
                    action: "Photo download link + gentle review reminder",
                    icon: "📸",
                  },
                  {
                    time: "+30 days",
                    action:
                      '"Your next adventure awaits" — 3 matched trek suggestions',
                    icon: "🏔️",
                  },
                  {
                    time: "Seasonal",
                    action:
                      "Seasonal trek newsletter with batch openings & early bird offers",
                    icon: "📰",
                  },
                ].map((step) => (
                  <div
                    key={step.time}
                    className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl"
                  >
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-amber-700">
                        {step.time}
                      </div>
                      <div className="text-sm text-gray-700">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow D — Abandoned Booking */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold">
                  D
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    Didn't Complete Booking?
                  </div>
                  <div className="text-xs text-muted-foreground">
                    We'll help you get there
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    time: "+1 hour",
                    action:
                      '"You left something behind" friendly reminder email',
                    icon: "🛒",
                  },
                  {
                    time: "+24 hours",
                    action:
                      'WhatsApp check-in: "Any questions? We\'re here to help"',
                    icon: "💬",
                  },
                  {
                    time: "+72 hours",
                    action:
                      "Special offer: 5% discount if you complete booking this week",
                    icon: "🎁",
                  },
                ].map((step) => (
                  <div
                    key={step.time}
                    className="flex items-start gap-3 p-3 bg-red-50 rounded-xl"
                  >
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-red-700">
                        {step.time}
                      </div>
                      <div className="text-sm text-gray-700">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Business Templates Preview */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-foreground font-display mb-6">
              WhatsApp Message Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Template 1 */}
              <div className="bg-[#128C7E] rounded-2xl p-1">
                <div className="bg-[#ECE5DD] rounded-xl p-4">
                  <div className="bg-[#128C7E] text-white text-xs px-3 py-1.5 rounded-full mb-3 inline-block font-medium">
                    💬 WhatsApp Business Template #1
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm max-w-xs">
                    <div className="text-xs text-green-700 font-bold mb-2">
                      Global Trek ✓✓
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Hi <strong>[Name]</strong>! 🏔️ Your trek is confirmed!
                      <br />
                      <br />
                      <strong>Booking ID:</strong> GT-2026-XXXX
                      <br />
                      <strong>Trek:</strong> Kedarkantha
                      <br />
                      <strong>Date:</strong> Dec 20–24, 2026
                      <br />
                      <strong>Trekkers:</strong> 2 people
                      <br />
                      <strong>Total Paid:</strong> ₹17,850
                      <br />
                      <br />
                      Your Trek Coordinator <strong>Ankit Rawat</strong> will
                      call you at 10 AM from +91-98765-XXXXX.
                      <br />
                      <br />
                      Full itinerary attached. Questions? Reply here 24/7.
                      <br />— Team Global Trek 🌿
                    </p>
                    <div className="text-xs text-gray-400 text-right mt-2">
                      9:15 AM ✓✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Template 2 */}
              <div className="bg-[#128C7E] rounded-2xl p-1">
                <div className="bg-[#ECE5DD] rounded-xl p-4">
                  <div className="bg-[#128C7E] text-white text-xs px-3 py-1.5 rounded-full mb-3 inline-block font-medium">
                    💬 WhatsApp Business Template #2
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm max-w-xs">
                    <div className="text-xs text-green-700 font-bold mb-2">
                      Global Trek ✓✓
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      <strong>[Name]</strong>, your{" "}
                      <strong>Kedarkantha Trek</strong> is in 7 days! 🎒<br />
                      <br />
                      <strong>Pickup:</strong> 5:30 AM, Dec 20
                      <br />
                      <strong>Meeting point:</strong> Clock Tower, Dehradun
                      <br />
                      <br />
                      Please carry:
                      <br />✅ Original ID (Aadhaar/Passport)
                      <br />✅ 2 passport-size photos
                      <br />✅ Cash ₹2,000 for personal expenses
                      <br />✅ Your fitness self-declaration
                      <br />
                      <br />
                      Reply for any questions.
                      <br />
                      See you at the mountains! ⛰️
                    </p>
                    <div className="text-xs text-gray-400 text-right mt-2">
                      8:00 AM ✓✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      {scheduleOpen && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 m-0 max-w-none max-h-none w-full h-full border-0"
          aria-label="Schedule a call"
        >
          <div className="bg-card rounded-2xl shadow-xl w-full max-w-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Schedule a Free Call
              </h2>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setScheduleOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Pick a time slot and we'll confirm within 1 hour
            </p>
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-wider text-muted-foreground">
                Preferred Time
              </p>
              <div className="flex flex-wrap gap-2">
                {["Morning 9–12", "Afternoon 12–5", "Evening 5–9"].map(
                  (slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setScheduleSlot(slot)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        scheduleSlot === slot
                          ? "border-[#E8963A] text-[#E8963A] bg-[rgba(232,150,58,0.1)]"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {slot}
                    </button>
                  ),
                )}
              </div>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setScheduleOpen(false);
              }}
            >
              <input
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
                required
                aria-label="Your Name"
              />
              <input
                type="tel"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Mobile Number"
                required
                aria-label="Mobile Number"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-label font-semibold text-white text-sm tracking-wide transition-colors hover:opacity-90"
                style={{ background: "#145C38" }}
              >
                Confirm Schedule
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
