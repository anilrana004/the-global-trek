import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Mountain,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex" data-ocid="login.page">
      {/* Left: Mountain Image Panel */}
      <div
        className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden"
        style={{ minHeight: "100dvh" }}
      >
        <img
          src="/assets/generated/himalayan-auth-bg.dim_1400x900.jpg"
          alt="Snow-capped Himalayan peaks at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,46,26,0.3) 0%, rgba(10,46,26,0.75) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <span className="font-mono font-bold text-white text-lg tracking-widest uppercase">
              Global Trek
            </span>
          </div>

          {/* Hero Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#2ecc71" }}
              >
                Welcome Back
              </p>
              <h2
                className="font-display text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Himalayas
                <br />
                <em>await you.</em>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Sign in to manage your bookings, download trek certificates, and
                join 12,000+ trekkers on the adventure of a lifetime.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex gap-8"
            >
              {[
                { value: "500+", label: "Treks" },
                { value: "12K+", label: "Trekkers" },
                { value: "4.9★", label: "Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="font-mono text-xs text-white/60 tracking-widest uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right: Form Panel */}
      <div className="flex-1 flex flex-col" style={{ minHeight: "100dvh" }}>
        {/* Mobile mountain image */}
        <div
          className="lg:hidden relative h-48 shrink-0 overflow-hidden"
          style={{ minHeight: 200 }}
        >
          <img
            src="/assets/generated/himalayan-auth-bg.dim_1400x900.jpg"
            alt="Himalayas"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-end p-6"
            style={{
              background:
                "linear-gradient(to bottom, transparent 30%, rgba(10,46,26,0.85))",
            }}
          >
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-white" />
              <span className="font-mono font-bold text-white text-base tracking-wider uppercase">
                Global Trek
              </span>
            </div>
          </div>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <h1
                className="font-display text-4xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A2E1A",
                }}
              >
                Sign In
              </h1>
              <p className="text-muted-foreground">
                Welcome back to Global Trek
              </p>
            </div>

            {/* Google OAuth */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-4"
              data-ocid="login.google_button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-label="Google logo"
                role="img"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* ICP / Internet Identity */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-card font-mono text-sm font-semibold tracking-wide transition-smooth hover:bg-muted/40 hover:shadow-md mb-6"
              data-ocid="login.icp_button"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#3B00B9", color: "white", fontSize: 9 }}
              >
                ICP
              </div>
              Continue with Internet Identity
            </button>

            {/* Divider */}
            <div className="relative flex items-center mb-6">
              <div className="flex-1 border-t border-border" />
              <span className="mx-4 font-mono text-xs text-muted-foreground tracking-widest uppercase">
                or continue with email
              </span>
              <div className="flex-1 border-t border-border" />
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="login.form"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="login-email"
                  className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase block"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth"
                    style={
                      { "--tw-ring-color": "#145C38" } as React.CSSProperties
                    }
                    data-ocid="login.email_input"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="login-password"
                    className="font-mono text-xs font-semibold text-muted-foreground tracking-wider uppercase"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="font-mono text-xs transition-smooth bg-transparent border-0 p-0"
                    style={{ color: "#145C38" }}
                    data-ocid="login.forgot_password_link"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 transition-smooth"
                    style={
                      { "--tw-ring-color": "#145C38" } as React.CSSProperties
                    }
                    data-ocid="login.password_input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl font-mono font-bold text-white text-sm tracking-widest uppercase transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-60 mt-2 flex items-center justify-center gap-2"
                style={{ background: "#145C38" }}
                data-ocid="login.submit_button"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In to Global Trek
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Bottom link */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              New to Global Trek?{" "}
              <Link
                to="/account/register"
                className="font-semibold transition-smooth hover:underline"
                style={{ color: "#145C38" }}
                data-ocid="login.create_account_link"
              >
                Create Account →
              </Link>
            </p>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-6">
              {[
                { icon: ShieldCheck, text: "SSL Secured" },
                { icon: Lock, text: "Encrypted" },
                { icon: Star, text: "4.9 Rated" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-muted-foreground"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
