import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

const packageMeta: Record<
  string,
  {
    icon: string;
    title: string;
    tagline: string;
    color: string;
    features: string[];
  }
> = {
  corporate: {
    icon: "\uD83D\uDCBC",
    title: "Corporate Trekking",
    tagline: "Transform your team with Himalayan adventure",
    color: "#0A2E1A",
    features: [
      "Custom departure dates for 20\u2013200 people",
      "Gourmet camp meals & gala dinner",
      "Professional team-building facilitation",
      "Corporate GST invoice & documentation",
      "Team photography & video highlights",
      "Dedicated corporate coordinator",
      "Activity-based leadership program",
      "Custom branding & merchandise",
    ],
  },
  "school-college": {
    icon: "\uD83C\uDF93",
    title: "School & College Programs",
    tagline: "Educational adventure for the next generation",
    color: "#145C38",
    features: [
      "NSS/NCC activity compliant",
      "Daily progress reports to parents",
      "Teacher coordinator portal",
      "Budget-friendly group pricing",
      "First aid & safety briefing",
      "Certificate of participation",
      "CBSE activity recognition",
      "Insurance for all participants",
    ],
  },
  family: {
    icon: "\uD83D\uDC68\u200D\uD83D\uDC67",
    title: "Family Trek Packages",
    tagline: "Adventures the whole family will treasure",
    color: "#1A7A4C",
    features: [
      "Kids from age 8+ welcome",
      "Easy to moderate trails",
      "Kid-friendly meals & snacks",
      "Family photographer included",
      "Flexible pace \u2014 no rush",
      "First aid specialist",
      "Bonfire & storytelling nights",
      "Family achievement certificate",
    ],
  },
  honeymoon: {
    icon: "\u2764\uFE0F",
    title: "Honeymoon & Couples",
    tagline: "Romance at 3,000 metres above sea level",
    color: "#22A05E",
    features: [
      "Private 2-person tent setup",
      "Candlelight camp dinner",
      "Sunrise summit experience",
      "Flower & balloon decoration",
      "Professional honeymoon photography",
      "Complimentary sparkling wine",
      "Couple\u2019s yoga session",
      "Personalized itinerary",
    ],
  },
  solo: {
    icon: "\uD83E\uDDD7",
    title: "Solo Trekker Batches",
    tagline: "Never trek alone \u2014 always feel at home",
    color: "#2980B9",
    features: [
      "Fixed group batch schedule",
      "Group WhatsApp community",
      "Safety live-tracking app",
      "Solo room supplement available",
      "Community events & meetups",
      "Buddy-system on trail",
      "Post-trek reunion events",
      "Referral rewards program",
    ],
  },
  customize: {
    icon: "\uD83D\uDEE0\uFE0F",
    title: "Custom Trip Builder",
    tagline: "",
    color: "#0A2E1A",
    features: [],
  },
};

const destinations = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    icon: "\uD83C\uDFD4\uFE0F",
    desc: "Garhwal & Kumaon Himalayas \u2014 10 treks & yatras",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    icon: "\uD83D\uDDFB",
    desc: "Kullu, Spiti & Parvati Valley \u2014 5 treks",
  },
  {
    id: "yatra",
    name: "Sacred Yatras",
    icon: "\uD83D\uDE4F",
    desc: "Kedarnath, Char Dham \u2014 3 pilgrimages",
  },
];

const budgetOptions = [
  { id: "budget", label: "Budget \u2014 Under \u20B95,000/pp" },
  { id: "mid", label: "Mid-range \u2014 \u20B95,000\u201315,000/pp" },
  { id: "premium", label: "Premium \u2014 \u20B915,000\u201330,000/pp" },
  { id: "luxury", label: "Luxury \u2014 \u20B930,000+/pp" },
];

function CustomizeWizard() {
  const [step, setStep] = useState(1);
  const [dest, setDest] = useState("");
  const [duration, setDuration] = useState(5);
  const [groupType, setGroupType] = useState("");
  const [groupSize, setGroupSize] = useState(2);
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Destination", "Duration", "Group", "Budget", "Summary"];

  return (
    <div className="max-w-2xl mx-auto" data-ocid="customize.wizard">
      {/* Progress */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
              style={{
                background: i + 1 <= step ? "#145C38" : "#E8F5EE",
                color: i + 1 <= step ? "white" : "#145C38",
                fontFamily: "var(--gt-font-label)",
              }}
            >
              {i + 1}
            </div>
            <span
              className="hidden sm:block text-xs font-semibold"
              style={{
                color: i + 1 === step ? "#145C38" : "#ADB5BD",
                fontFamily: "var(--gt-font-label)",
              }}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <div
                className="w-8 h-0.5 mx-1"
                style={{ background: i + 1 < step ? "#145C38" : "#E9ECEF" }}
              />
            )}
          </div>
        ))}
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-2xl border border-border p-12 text-center"
          data-ocid="customize.success_state"
        >
          <div className="text-5xl mb-4">\uD83C\uDFD4\uFE0F</div>
          <h3
            className="text-2xl font-bold italic mb-2"
            style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
          >
            Quote Request Received!
          </h3>
          <p className="text-muted-foreground mb-6">
            Our trek expert will send your custom itinerary and pricing within
            24 hours.
          </p>
          <Link to="/treks">
            <Button
              className="font-bold text-white"
              style={{
                background: "#145C38",
                fontFamily: "var(--gt-font-label)",
              }}
            >
              Browse Treks
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className="bg-card rounded-2xl border border-border p-8">
          {step === 1 && (
            <div data-ocid="customize.step1">
              <h3
                className="text-xl font-bold italic mb-6"
                style={{
                  fontFamily: "var(--gt-font-display)",
                  color: "#0A2E1A",
                }}
              >
                Where do you want to trek?
              </h3>
              <div className="space-y-3">
                {destinations.map((d) => (
                  <button
                    type="button"
                    key={d.id}
                    onClick={() => setDest(d.id)}
                    className="w-full p-5 rounded-xl border-2 text-left transition-all"
                    style={{
                      borderColor: dest === d.id ? "#145C38" : "#E9ECEF",
                      background: dest === d.id ? "#E8F5EE" : "transparent",
                    }}
                    data-ocid={`customize.destination.${d.id}`}
                  >
                    <span className="text-2xl mr-3">{d.icon}</span>
                    <span
                      className="font-bold"
                      style={{
                        color: "#0A2E1A",
                        fontFamily: "var(--gt-font-display)",
                      }}
                    >
                      {d.name}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {d.desc}
                    </p>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => setStep(2)}
                disabled={!dest}
                className="w-full mt-6 font-bold text-white"
                style={{
                  background: "#145C38",
                  fontFamily: "var(--gt-font-label)",
                }}
                data-ocid="customize.next_button"
              >
                Next: Duration \u2192
              </Button>
            </div>
          )}

          {step === 2 && (
            <div data-ocid="customize.step2">
              <h3
                className="text-xl font-bold italic mb-2"
                style={{
                  fontFamily: "var(--gt-font-display)",
                  color: "#0A2E1A",
                }}
              >
                How many days?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Choose your ideal trek duration
              </p>
              <div className="space-y-4">
                <div className="text-center">
                  <span
                    className="text-5xl font-black"
                    style={{
                      color: "#145C38",
                      fontFamily: "var(--gt-font-label)",
                    }}
                  >
                    {duration}
                  </span>
                  <span className="text-xl text-muted-foreground ml-2">
                    days
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={14}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-green-700"
                  aria-label="Duration in days"
                  data-ocid="customize.duration_slider"
                />
                <div
                  className="flex justify-between text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  <span>1 day</span>
                  <span>7 days</span>
                  <span>14 days</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                  data-ocid="customize.back_button"
                >
                  \u2190 Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="flex-1 font-bold text-white"
                  style={{
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                  data-ocid="customize.next_button"
                >
                  Next: Group \u2192
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div data-ocid="customize.step3">
              <h3
                className="text-xl font-bold italic mb-6"
                style={{
                  fontFamily: "var(--gt-font-display)",
                  color: "#0A2E1A",
                }}
              >
                Who is coming along?
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Solo",
                  "Couple",
                  "Family",
                  "Friends Group",
                  "Corporate",
                  "School / College",
                ].map((gt) => (
                  <button
                    type="button"
                    key={gt}
                    onClick={() => setGroupType(gt)}
                    className="py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all"
                    style={{
                      borderColor: groupType === gt ? "#145C38" : "#E9ECEF",
                      background: groupType === gt ? "#E8F5EE" : "transparent",
                      color: groupType === gt ? "#145C38" : "#212529",
                      fontFamily: "var(--gt-font-label)",
                    }}
                    data-ocid={`customize.group_type.${gt.toLowerCase().replace(/ /g, "_")}`}
                  >
                    {gt}
                  </button>
                ))}
              </div>
              <div className="space-y-2 mb-6">
                <Label
                  className="text-xs tracking-wider font-semibold"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Group Size: {groupSize} people
                </Label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={groupSize}
                  onChange={(e) => setGroupSize(Number(e.target.value))}
                  className="w-full accent-green-700"
                  aria-label="Group size"
                  data-ocid="customize.group_size_slider"
                />
                <div
                  className="flex justify-between text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  <span>1</span>
                  <span>15</span>
                  <span>30+</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                  data-ocid="customize.back_button"
                >
                  \u2190 Back
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!groupType}
                  className="flex-1 font-bold text-white"
                  style={{
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                  data-ocid="customize.next_button"
                >
                  Next: Budget \u2192
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div data-ocid="customize.step4">
              <h3
                className="text-xl font-bold italic mb-6"
                style={{
                  fontFamily: "var(--gt-font-display)",
                  color: "#0A2E1A",
                }}
              >
                What is your budget?
              </h3>
              <div className="space-y-3">
                {budgetOptions.map((b) => (
                  <button
                    type="button"
                    key={b.id}
                    onClick={() => setBudget(b.id)}
                    className="w-full p-4 rounded-xl border-2 text-left text-sm font-semibold transition-all"
                    style={{
                      borderColor: budget === b.id ? "#145C38" : "#E9ECEF",
                      background: budget === b.id ? "#E8F5EE" : "transparent",
                      color: budget === b.id ? "#145C38" : "#212529",
                      fontFamily: "var(--gt-font-label)",
                    }}
                    data-ocid={`customize.budget.${b.id}`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(3)}
                  className="flex-1"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                  data-ocid="customize.back_button"
                >
                  \u2190 Back
                </Button>
                <Button
                  onClick={() => setStep(5)}
                  disabled={!budget}
                  className="flex-1 font-bold text-white"
                  style={{
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                  data-ocid="customize.next_button"
                >
                  Next: Review \u2192
                </Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div data-ocid="customize.step5">
              <h3
                className="text-xl font-bold italic mb-4"
                style={{
                  fontFamily: "var(--gt-font-display)",
                  color: "#0A2E1A",
                }}
              >
                Almost there \u2014 review & submit
              </h3>
              <div
                className="rounded-xl p-4 mb-5 space-y-2 text-sm"
                style={{ background: "#E8F5EE" }}
              >
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destination</span>
                  <span className="font-bold" style={{ color: "#145C38" }}>
                    {destinations.find((d) => d.id === dest)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-bold" style={{ color: "#145C38" }}>
                    {duration} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group</span>
                  <span className="font-bold" style={{ color: "#145C38" }}>
                    {groupType} \u00b7 {groupSize} people
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget</span>
                  <span className="font-bold" style={{ color: "#145C38" }}>
                    {budgetOptions.find((b) => b.id === budget)?.label}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <Textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Special requirements, medical conditions, dietary needs, experience level..."
                  rows={3}
                  className="bg-background border-border resize-none"
                  data-ocid="customize.requirements_textarea"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label
                      className="text-xs"
                      style={{ fontFamily: "var(--gt-font-label)" }}
                    >
                      Name *
                    </Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Rahul Mehta"
                      className="bg-background border-border"
                      data-ocid="customize.name_input"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      className="text-xs"
                      style={{ fontFamily: "var(--gt-font-label)" }}
                    >
                      Email *
                    </Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="rahul@email.com"
                      className="bg-background border-border"
                      data-ocid="customize.email_input"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      className="text-xs"
                      style={{ fontFamily: "var(--gt-font-label)" }}
                    >
                      Phone *
                    </Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+91 98765 43210"
                      className="bg-background border-border"
                      data-ocid="customize.phone_input"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(4)}
                  className="flex-1"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                  data-ocid="customize.back_button"
                >
                  \u2190 Back
                </Button>
                <Button
                  onClick={() => {
                    if (name && email && phone) setSubmitted(true);
                  }}
                  disabled={!name || !email || !phone}
                  className="flex-1 font-bold text-white"
                  style={{
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                  data-ocid="customize.submit_button"
                >
                  Get Custom Quote \u2192
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PackageDetailPage() {
  const { type } = useParams({ from: "/packages/$type" });

  if (type === "customize") {
    return (
      <div
        className="min-h-screen bg-background"
        style={{ paddingTop: "90px" }}
        data-ocid="package_detail.customize_page"
      >
        <section
          className="py-14 px-4 text-center"
          style={{
            background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
          }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#2ECC71", fontFamily: "var(--gt-font-label)" }}
          >
            Custom Package
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold italic text-white mb-3"
            style={{ fontFamily: "var(--gt-font-display)" }}
          >
            Build Your Perfect Trek
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Tell us what you want. We\u2019ll design a custom itinerary and
            price within 24 hours.
          </p>
        </section>
        <div className="py-14 px-4">
          <CustomizeWizard />
        </div>
      </div>
    );
  }

  const meta = packageMeta[type] ?? packageMeta.corporate;

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "90px" }}
      data-ocid="package_detail.page"
    >
      {/* Hero */}
      <section
        className="py-14 px-4 text-center"
        style={{
          background: `linear-gradient(135deg, ${meta.color} 0%, #145C38 100%)`,
        }}
      >
        <div className="text-5xl mb-4">{meta.icon}</div>
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "#2ECC71", fontFamily: "var(--gt-font-label)" }}
        >
          Trek Packages
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold italic text-white mb-3"
          style={{ fontFamily: "var(--gt-font-display)" }}
        >
          {meta.title}
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">{meta.tagline}</p>
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#145C38", fontFamily: "var(--gt-font-label)" }}
          >
            What\u2019s Included
          </p>
          <h2
            className="text-3xl font-bold italic"
            style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
          >
            Package Features
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {meta.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-xl border border-border bg-card flex gap-3 items-start"
              data-ocid={`package_detail.feature.${i + 1}`}
            >
              <span
                className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black mt-0.5"
                style={{ background: "#145C38" }}
              >
                \u2713
              </span>
              <span className="text-sm text-foreground font-medium">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Inquiry form */}
        <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-8">
          <h3
            className="text-xl font-bold italic mb-6 text-center"
            style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
          >
            Get a Customized Quote
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label
                  className="text-xs tracking-wider font-semibold"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Name *
                </Label>
                <Input
                  placeholder="Rahul Mehta"
                  className="bg-background border-border"
                  data-ocid="package_detail.name_input"
                />
              </div>
              <div className="space-y-1">
                <Label
                  className="text-xs tracking-wider font-semibold"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Phone *
                </Label>
                <Input
                  placeholder="+91 98765 43210"
                  className="bg-background border-border"
                  data-ocid="package_detail.phone_input"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label
                className="text-xs tracking-wider font-semibold"
                style={{ fontFamily: "var(--gt-font-label)" }}
              >
                Email *
              </Label>
              <Input
                type="email"
                placeholder="rahul@email.com"
                className="bg-background border-border"
                data-ocid="package_detail.email_input"
              />
            </div>
            <div className="space-y-1">
              <Label
                className="text-xs tracking-wider font-semibold"
                style={{ fontFamily: "var(--gt-font-label)" }}
              >
                Requirements / Questions
              </Label>
              <Textarea
                placeholder="Group size, preferred dates, specific requirements..."
                rows={3}
                className="bg-background border-border resize-none"
                data-ocid="package_detail.requirements_textarea"
              />
            </div>
            <Button
              type="button"
              className="w-full font-bold text-white"
              style={{
                background: "#145C38",
                fontFamily: "var(--gt-font-label)",
              }}
              data-ocid="package_detail.submit_button"
            >
              Send Inquiry \u2014 Response in 2 Hours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
