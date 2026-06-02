import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  Lock,
  MapPin,
  Mountain,
  Shield,
  Smartphone,
  Tag,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const STEPS = ["Batch", "Details", "Add-ons", "Pay"];

function BookingProgress({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-0 justify-center py-6">
      {STEPS.map((step, i) => (
        <div key={step} className="contents">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-mono border-2 transition-colors ${i < current ? "bg-[var(--gt-green-700)] border-[var(--gt-green-700)] text-white" : i === current ? "bg-[var(--gt-green-800)] border-[var(--gt-green-800)] text-white" : "bg-transparent border-[var(--gt-gray-400)] text-[var(--gt-gray-600)]"}`}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs font-mono ${i <= current ? "text-[var(--gt-green-700)] font-semibold" : "text-[var(--gt-gray-600)]"}`}
            >
              {step}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`h-0.5 w-16 mx-1 mb-5 ${i < current ? "bg-[var(--gt-green-700)]" : "bg-[var(--gt-gray-200)]"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Mock coupon codes ────────────────────────────────────────────────────────
const COUPONS: Record<string, number> = {
  TREK10: 0.1,
  FIRSTTIME: 0.15,
  SUMMER2026: 0.12,
};

const BASE_AMOUNT = 17000;
const ADDON_AMOUNT = 4700;
const GST_RATE = 0.05;

type PaymentSplit = "full" | "partial" | "emi";

export default function Payment() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/payment" });
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState("");
  const [paymentSplit, setPaymentSplit] = useState<PaymentSplit>("full");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = BASE_AMOUNT + ADDON_AMOUNT;
  const discountAmt = appliedCoupon
    ? Math.round(subtotal * appliedCoupon.discount)
    : 0;
  const afterDiscount = subtotal - discountAmt;
  const gst = Math.round(afterDiscount * GST_RATE);
  const fullTotal = afterDiscount + gst;
  const partialAmount = Math.round(fullTotal * 0.3);
  const emiAmount = Math.round(fullTotal / 3);

  const payNow =
    paymentSplit === "full"
      ? fullTotal
      : paymentSplit === "partial"
        ? partialAmount
        : emiAmount;

  function applyCoupon() {
    const key = couponCode.trim().toUpperCase();
    if (COUPONS[key]) {
      setAppliedCoupon({ code: key, discount: COUPONS[key] });
      setCouponError("");
    } else {
      setCouponError(
        "Invalid coupon code. Try TREK10, FIRSTTIME, or SUMMER2026.",
      );
      setAppliedCoupon(null);
    }
  }

  function handlePayment() {
    setIsProcessing(true);
    // Simulated Razorpay checkout — navigate to confirmation on success
    setTimeout(() => {
      setIsProcessing(false);
      void navigate({
        to: "/booking/confirmation/$id",
        params: { id: "GT-2026-KK-08547" },
      });
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[var(--gt-green-50)]">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-white border-b border-[var(--gt-green-100)] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
          <Mountain className="w-4 h-4 text-[var(--gt-green-700)]" />
          <span className="font-semibold font-display text-[var(--gt-green-900)] text-sm">
            {trekSlug
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
            Trek
          </span>
          <span className="text-xs text-[var(--gt-gray-600)] flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Dec 20–24, 2026
          </span>
          <span className="text-xs text-[var(--gt-gray-600)] flex items-center gap-1">
            <Clock className="w-3 h-3" />5 Days / 4 Nights
          </span>
          <span className="text-xs text-[var(--gt-gray-600)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            3,810m
          </span>
          <Badge
            variant="secondary"
            className="bg-[var(--gt-green-100)] text-[var(--gt-green-800)] font-mono text-xs"
          >
            2 Trekkers
          </Badge>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <BookingProgress current={3} />
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-display text-[var(--gt-green-900)]">
            Review & Payment
          </h1>
          <p className="text-[var(--gt-gray-600)] text-sm mt-1">
            Almost there! Review your order and complete your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Order breakdown */}
          <div className="lg:col-span-2 space-y-5">
            {/* Order summary */}
            <div
              className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 space-y-4"
              data-ocid="payment.order_summary"
            >
              <h3 className="font-bold font-display text-[var(--gt-green-900)]">
                Order Summary
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  {
                    label: "2× Kedarkantha Trek Base Price",
                    amount: BASE_AMOUNT,
                  },
                  { label: "2× Pickup — Dehradun Clock Tower", amount: 2400 },
                  { label: "2× Essential Gear Kit", amount: 1300 },
                  { label: "2× Trek Insurance", amount: 1000 },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-[var(--gt-gray-600)]">
                      {row.label}
                    </span>
                    <span className="font-semibold">
                      ₹{row.amount.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}

                <div className="border-t border-[var(--gt-gray-100)] pt-3 space-y-2">
                  <div className="flex justify-between text-[var(--gt-gray-600)]">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  {discountAmt > 0 && (
                    <div className="flex justify-between text-[var(--gt-green-700)] font-semibold">
                      <span>Discount ({appliedCoupon?.code})</span>
                      <span>−₹{discountAmt.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[var(--gt-gray-600)]">
                    <span>GST (5%)</span>
                    <span>₹{gst.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[var(--gt-green-900)] text-base border-t border-[var(--gt-gray-200)] pt-2">
                    <span>Total</span>
                    <span>₹{fullTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon */}
            <div
              className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5"
              data-ocid="payment.coupon_section"
            >
              <h3 className="font-semibold font-display text-[var(--gt-green-900)] mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Apply Coupon Code
              </h3>
              <div className="flex gap-2">
                <Input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                  placeholder="e.g. TREK10"
                  className="uppercase font-mono border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
                  data-ocid="payment.coupon_input"
                />
                <Button
                  type="button"
                  onClick={applyCoupon}
                  variant="outline"
                  className="border-[var(--gt-green-700)] text-[var(--gt-green-700)] hover:bg-[var(--gt-green-50)] font-mono"
                  data-ocid="payment.apply_coupon_button"
                >
                  Apply
                </Button>
              </div>
              {couponError && (
                <p
                  className="text-xs text-[var(--gt-red)] mt-2 flex items-center gap-1"
                  data-ocid="payment.coupon_error"
                >
                  <span>⚠</span>
                  {couponError}
                </p>
              )}
              {appliedCoupon && (
                <p
                  className="text-sm text-[var(--gt-green-700)] font-semibold mt-2 flex items-center gap-1"
                  data-ocid="payment.coupon_success"
                >
                  <CheckCircle className="w-4 h-4" /> {appliedCoupon.code}{" "}
                  applied — {Math.round(appliedCoupon.discount * 100)}% off!
                </p>
              )}
              <p className="text-xs text-[var(--gt-gray-400)] mt-2">
                Try: TREK10 · FIRSTTIME · SUMMER2026
              </p>
            </div>

            {/* Payment split */}
            <div
              className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5"
              data-ocid="payment.split_section"
            >
              <h3 className="font-semibold font-display text-[var(--gt-green-900)] mb-4">
                Payment Options
              </h3>
              <RadioGroup
                value={paymentSplit}
                onValueChange={(v) => setPaymentSplit(v as PaymentSplit)}
                className="space-y-3"
              >
                <label
                  htmlFor="pay-full"
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentSplit === "full"
                      ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]"
                      : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"
                  }`}
                  data-ocid="payment.full_option"
                >
                  <RadioGroupItem
                    value="full"
                    id="pay-full"
                    className="mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                  />
                  <div>
                    <p className="font-semibold text-[var(--gt-gray-900)]">
                      Pay Full Now — ₹{fullTotal.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-[var(--gt-gray-600)] mt-0.5">
                      Confirmed booking. Nothing due at base camp.
                    </p>
                  </div>
                </label>
                <label
                  htmlFor="pay-partial"
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentSplit === "partial"
                      ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]"
                      : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"
                  }`}
                  data-ocid="payment.partial_option"
                >
                  <RadioGroupItem
                    value="partial"
                    id="pay-partial"
                    className="mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                  />
                  <div>
                    <p className="font-semibold text-[var(--gt-gray-900)]">
                      Pay 30% Now — ₹{partialAmount.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-[var(--gt-gray-600)] mt-0.5">
                      Rest (₹
                      {(fullTotal - partialAmount).toLocaleString("en-IN")}) due
                      at base camp.
                    </p>
                  </div>
                </label>
                <label
                  htmlFor="pay-emi"
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentSplit === "emi"
                      ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]"
                      : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"
                  }`}
                  data-ocid="payment.emi_option"
                >
                  <RadioGroupItem
                    value="emi"
                    id="pay-emi"
                    className="mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                  />
                  <div>
                    <p className="font-semibold text-[var(--gt-gray-900)]">
                      EMI — 3 months @ ₹{emiAmount.toLocaleString("en-IN")}
                      /month
                    </p>
                    <p className="text-xs text-[var(--gt-gray-600)] mt-0.5">
                      0% interest on select HDFC/ICICI cards.
                    </p>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </div>

          {/* Right — Payment action */}
          <div className="space-y-4">
            <div
              className="bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 space-y-4 sticky top-20"
              data-ocid="payment.checkout_card"
            >
              <div className="text-center">
                <p className="text-sm text-[var(--gt-gray-600)] font-mono">
                  Amount to Pay Now
                </p>
                <p className="text-3xl font-bold font-display text-[var(--gt-green-900)] mt-1">
                  ₹{payNow.toLocaleString("en-IN")}
                </p>
                {paymentSplit !== "full" && (
                  <p className="text-xs text-[var(--gt-gray-400)] mt-1">
                    of ₹{fullTotal.toLocaleString("en-IN")} total
                  </p>
                )}
              </div>

              {/* Payment method icons */}
              <div
                className="flex flex-wrap justify-center gap-2"
                data-ocid="payment.method_icons"
              >
                {["UPI", "Card", "NetBanking", "Wallets", "EMI"].map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-[var(--gt-gray-100)] text-[var(--gt-gray-600)] border border-[var(--gt-gray-200)]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Razorpay button */}
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-bold font-mono py-4 text-base rounded-xl gap-2 transition-all"
                data-ocid="payment.razorpay_button"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Processing...
                  </span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ₹{payNow.toLocaleString("en-IN")} via Razorpay
                  </>
                )}
              </Button>

              {/* Trust indicators */}
              <div
                className="grid grid-cols-2 gap-2"
                data-ocid="payment.trust_indicators"
              >
                {[
                  { icon: <Lock className="w-3 h-3" />, label: "256-bit SSL" },
                  {
                    icon: <Shield className="w-3 h-3" />,
                    label: "PCI-DSS Level 1",
                  },
                  {
                    icon: <CheckCircle className="w-3 h-3" />,
                    label: "Razorpay Secured",
                  },
                  {
                    icon: <Smartphone className="w-3 h-3" />,
                    label: "Instant Email",
                  },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 text-xs text-[var(--gt-gray-600)] bg-[var(--gt-gray-50)] rounded-lg px-2 py-1.5"
                  >
                    <span className="text-[var(--gt-green-700)]">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>

              <p className="text-center text-xs text-[var(--gt-gray-400)]">
                By paying, you agree to our{" "}
                <a href="/terms" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/cancellation-policy" className="underline">
                  Cancellation Policy
                </a>
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[var(--gt-green-50)] rounded-xl border border-[var(--gt-green-100)] p-4 text-sm">
              <p className="font-semibold text-[var(--gt-green-900)] mb-2 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                Need help?
              </p>
              <p className="text-[var(--gt-gray-600)]">
                Call{" "}
                <strong className="text-[var(--gt-green-700)]">
                  +91-98765-43210
                </strong>{" "}
                or
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gt-green-700)] underline ml-1"
                  data-ocid="payment.whatsapp_link"
                >
                  WhatsApp us
                </a>{" "}
                for help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
