import { Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Camera,
  CheckCircle,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Save,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
const DIFFICULTY_OPTIONS = [
  "Easy",
  "Easy-Moderate",
  "Moderate",
  "Moderate-Hard",
  "Hard",
];
const BUDGET_OPTIONS = ["₹0–5K", "₹5–15K", "₹15–25K", "₹25K+"];

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    fullName: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    dob: "1995-06-15",
    city: "New Delhi",
    emergencyName: "Priya Sharma",
    emergencyPhone: "9123456789",
    emergencyRelation: "Sister",
    medicalConditions: "",
    preferredDifficulty: "Moderate",
    budgetRange: "₹5–15K",
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setIsEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const initials = form.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: 80, paddingBottom: 48 }}
      data-ocid="profile.page"
    >
      {/* Header band */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #1a7a4c 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-1">
            <Link
              to="/account/dashboard"
              className="font-mono text-xs text-white/60 hover:text-white transition-smooth"
            >
              Dashboard
            </Link>
            <span className="text-white/30">/</span>
            <span className="font-mono text-xs text-white">Profile</span>
          </div>
          <h1
            className="font-display text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Profile
          </h1>
          <p className="text-white/70 mt-1">
            Manage your account details and preferences
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6 font-mono text-sm font-semibold"
            style={{
              background: "#e8f5ee",
              color: "#145C38",
              border: "1px solid #22a05e",
            }}
            data-ocid="profile.success_state"
          >
            <CheckCircle className="w-5 h-5" />
            Profile saved successfully!
          </motion.div>
        )}

        <form onSubmit={handleSave} data-ocid="profile.form">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Avatar + quick actions */}
            <div className="space-y-5">
              {/* Avatar card */}
              <div className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-display font-bold"
                      style={{
                        background: "linear-gradient(135deg, #145C38, #22a05e)",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {initials}
                    </div>
                  )}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-smooth hover:opacity-90"
                    style={{ background: "#145C38" }}
                    aria-label="Upload profile photo"
                  >
                    <Camera className="w-4 h-4 text-white" />
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleAvatarChange}
                      data-ocid="profile.avatar_upload"
                    />
                  </label>
                </div>
                <p
                  className="font-display font-semibold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {form.fullName}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  {form.email}
                </p>
                <div
                  className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-xs font-semibold"
                  style={{ background: "#e8f5ee", color: "#145C38" }}
                >
                  <CheckCircle className="w-3 h-3" /> Verified Trekker
                </div>
              </div>

              {/* Account navigation */}
              <div className="rounded-2xl bg-card border border-border p-4">
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                  Account
                </h3>
                <nav className="space-y-1">
                  {[
                    {
                      label: "Dashboard",
                      to: "/account/dashboard",
                      icon: LayoutDashboard,
                    },
                    {
                      label: "My Bookings",
                      to: "/account/my-bookings",
                      icon: Calendar,
                    },
                    {
                      label: "Certificates",
                      to: "/account/certificates",
                      icon: Award,
                    },
                  ].map(({ label, to, icon: Icon }) => (
                    <Link
                      key={label}
                      to={to}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth"
                      data-ocid={`profile.nav.${label.toLowerCase().replace(/ /g, "_")}`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Security */}
              <div className="rounded-2xl bg-card border border-border p-4">
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                  Security
                </h3>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth"
                  data-ocid="profile.change_password_button"
                >
                  <Lock className="w-4 h-4" /> Change Password
                </button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 space-y-5">
              {/* Personal info */}
              <div className="rounded-2xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2
                      className="font-display font-semibold text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Personal Information
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Update your details below
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-border transition-smooth hover:bg-muted/40"
                    data-ocid="profile.toggle_edit_button"
                  >
                    <Pencil className="w-3.5 h-3.5 inline mr-1" />
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FieldRow label="Full Name" id="profile-name" icon={User}>
                    <input
                      id="profile-name"
                      type="text"
                      value={form.fullName}
                      disabled={!isEditing}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.name_input"
                    />
                  </FieldRow>

                  <FieldRow
                    label="Email Address"
                    id="profile-email"
                    icon={Mail}
                    badge="Verified"
                  >
                    <input
                      id="profile-email"
                      type="email"
                      value={form.email}
                      disabled={!isEditing}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.email_input"
                    />
                  </FieldRow>

                  <FieldRow label="Mobile" id="profile-phone" icon={Phone}>
                    <input
                      id="profile-phone"
                      type="tel"
                      value={form.phone}
                      disabled={!isEditing}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.phone_input"
                    />
                  </FieldRow>

                  <FieldRow
                    label="Date of Birth"
                    id="profile-dob"
                    icon={Calendar}
                  >
                    <input
                      id="profile-dob"
                      type="date"
                      value={form.dob}
                      disabled={!isEditing}
                      onChange={(e) => handleChange("dob", e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.dob_input"
                    />
                  </FieldRow>

                  <div className="sm:col-span-2">
                    <FieldRow label="City" id="profile-city" icon={MapPin}>
                      <input
                        id="profile-city"
                        type="text"
                        value={form.city}
                        disabled={!isEditing}
                        onChange={(e) => handleChange("city", e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                        data-ocid="profile.city_input"
                      />
                    </FieldRow>
                  </div>
                </div>
              </div>

              {/* Emergency contact */}
              <div className="rounded-2xl bg-card border border-border p-6">
                <h2
                  className="font-display font-semibold text-lg mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Emergency Contact
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Required for all treks above 3,000m
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FieldRow
                    label="Contact Name"
                    id="emergency-name"
                    icon={User}
                  >
                    <input
                      id="emergency-name"
                      type="text"
                      value={form.emergencyName}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange("emergencyName", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.emergency_name_input"
                    />
                  </FieldRow>
                  <FieldRow
                    label="Contact Phone"
                    id="emergency-phone"
                    icon={Phone}
                  >
                    <input
                      id="emergency-phone"
                      type="tel"
                      value={form.emergencyPhone}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange("emergencyPhone", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.emergency_phone_input"
                    />
                  </FieldRow>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="emergency-relation"
                      className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-1.5"
                    >
                      Relation
                    </label>
                    <select
                      id="emergency-relation"
                      value={form.emergencyRelation}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange("emergencyRelation", e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.emergency_relation_select"
                    >
                      {["Parent", "Spouse", "Sibling", "Friend", "Other"].map(
                        (r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>
              </div>

              {/* Medical + preferences */}
              <div className="rounded-2xl bg-card border border-border p-6">
                <h2
                  className="font-display font-semibold text-lg mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Health & Preferences
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="medical"
                      className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-1.5"
                    >
                      Medical Conditions (optional)
                    </label>
                    <textarea
                      id="medical"
                      rows={3}
                      value={form.medicalConditions}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange("medicalConditions", e.target.value)
                      }
                      placeholder="Asthma, heart condition, allergy... (leave blank if none)"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth"
                      data-ocid="profile.medical_textarea"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-2">
                        Preferred Difficulty
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {DIFFICULTY_OPTIONS.map((d) => (
                          <button
                            key={d}
                            type="button"
                            disabled={!isEditing}
                            onClick={() =>
                              isEditing &&
                              handleChange("preferredDifficulty", d)
                            }
                            className="px-3 py-1.5 rounded-full font-mono text-xs font-semibold border transition-smooth disabled:cursor-not-allowed"
                            style={{
                              background:
                                form.preferredDifficulty === d
                                  ? "#145C38"
                                  : undefined,
                              color:
                                form.preferredDifficulty === d
                                  ? "white"
                                  : undefined,
                              borderColor:
                                form.preferredDifficulty === d
                                  ? "#145C38"
                                  : undefined,
                            }}
                            data-ocid={`profile.difficulty_option.${d.toLowerCase().replace(/-/g, "_")}`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block mb-2">
                        Budget Range
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((b) => (
                          <button
                            key={b}
                            type="button"
                            disabled={!isEditing}
                            onClick={() =>
                              isEditing && handleChange("budgetRange", b)
                            }
                            className="px-3 py-1.5 rounded-full font-mono text-xs font-semibold border transition-smooth disabled:cursor-not-allowed"
                            style={{
                              background:
                                form.budgetRange === b ? "#f4a623" : undefined,
                              color:
                                form.budgetRange === b ? "white" : undefined,
                              borderColor:
                                form.budgetRange === b ? "#f4a623" : undefined,
                            }}
                            data-ocid={`profile.budget_option.${b}`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save button */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-end gap-3"
                >
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 rounded-xl font-mono text-sm font-semibold border border-border hover:bg-muted/40 transition-smooth"
                    data-ocid="profile.cancel_button"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white flex items-center gap-2 transition-smooth hover:opacity-90"
                    style={{ background: "#145C38" }}
                    data-ocid="profile.save_button"
                  >
                    <Save className="w-4 h-4" /> Save Profile
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function FieldRow({
  label,
  id,
  icon: Icon,
  badge,
  children,
}: {
  label: string;
  id: string;
  icon: React.ElementType;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <label
          htmlFor={id}
          className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase"
        >
          {label}
        </label>
        {badge && (
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full font-bold"
            style={{ background: "#e8f5ee", color: "#145C38" }}
          >
            ✓ {badge}
          </span>
        )}
      </div>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        {children}
      </div>
    </div>
  );
}
