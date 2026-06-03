import { BookingProgress } from "@/components/booking/BookingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { treksData } from "@/data/treks";
import { useBookingStore, useCreateBooking } from "@/hooks/useBackend";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Loader2,
  Lock,
  Mountain,
  ShieldCheck,
  Tag,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const PROMO_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  TREK10: { type: "percent", value: 10, label: "10% off" },
  FIRSTTIME: { type: "flat", value: 500, label: "₹500 off" },
  SUMMER2026: { type: "percent", value: 15, label: "15% off" },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Payment() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/payment" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const { selectedBatch, trekName, participants, addOns, totalAmount } =
    bookingState;
  const createBooking = useCreateBooking();

  const trek = useMemo(
    () =>
      treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug],
  );

  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [paymentType, setPaymentType] = useState<"full" | "advance">("full");
  const [cancellationOpen, setCancellationOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const trekDisplayName = trekName || trek?.name || trekSlug;

  // Promo discount
  const promoDiscount = useMemo(() => {
    if (!promoApplied) return 0;
    const code = PROMO_CODES[promoApplied];
    if (!code) return 0;
    return code.type === "percent"
      ? Math.round((totalAmount * code.value) / 100)
      : code.value;
  }, [promoApplied, totalAmount]);

  const afterPromo = totalAmount - promoDiscount;
  const payableNow =
    paymentType === "advance" ? Math.round(afterPromo * 0.3) : afterPromo;
  const balanceDue = paymentType === "advance" ? afterPromo - payableNow : 0;

  // Addon names for summary
  const addOnNames: string[] = [];
  if (addOns.porter) addOnNames.push(`Porter (×${addOns.porterDays} days)`);
  if (addOns.mule) addOnNames.push(`Mule (×${addOns.muleDays} days)`);
  if (addOns.travelInsurance) addOnNames.push("Travel Insurance");
  if (addOns.gearSleepingBag) addOnNames.push("Sleeping Bag Rental");
  if (addOns.gearBoots) addOnNames.push("Boots Rental");
  if (addOns.gearTent) addOnNames.push("Tent Upgrade");

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      setPromoError("Please enter a promo code");
      return;
    }
    if (PROMO_CODES[code]) {
      setPromoApplied(code);
      setPromoError("");
      setPromoSuccess(
        `✅ Code "${code}" applied — ${PROMO_CODES[code].label}!`,
      );
    } else {
      setPromoApplied(null);
      setPromoSuccess("");
      setPromoError(
        "❌ Invalid promo code. Try TREK10, FIRSTTIME, or SUMMER2026.",
      );
    }
  }

  async function handlePay() {
    setIsProcessing(true);
    try {
      // Simulate Razorpay processing
      await new Promise((res) => setTimeout(res, 2000));
      const bookingId = `GT-2026-${trekSlug.slice(0, 2).toUpperCase()}-${String(Math.floor(10000 + Math.random() * 90000))}`;

      // Build booking payload matching BookingInput from backend.d.ts
      const bookingPayload = {
        trekSlug,
        batchDate: selectedBatch?.startDate ?? selectedBatch?.id ?? "",
        promoCode: promoApplied ?? "",
        paymentType,
        advanceAmount:
          paymentType === "advance" ? BigInt(Math.round(afterPromo * 0.3)) : 0n,
        totalAmount: BigInt(afterPromo),
        participants: participants.map((p) => ({
          firstName: p.firstName,
          lastName: p.lastName,
          age: BigInt(p.age ? Number(p.age) : 0),
          gender: p.gender,
          mobile: p.mobile,
          email: p.email,
          emergencyContactName: p.emergencyContactName,
          emergencyContactPhone: p.emergencyContactPhone,
          medicalConditions: p.medicalConditions ?? "",
          govtIdType: p.govtIdType,
          govtIdNumber: p.govtIdNumber,
        })),
        addOns: {
          porter: addOns.porter ?? false,
          porterDays: BigInt(addOns.porterDays ?? 0),
          mule: addOns.mule ?? false,
          muleDays: BigInt(addOns.muleDays ?? 0),
          travelInsurance: addOns.travelInsurance ?? false,
          gearSleepingBag: addOns.gearSleepingBag ?? false,
          gearBoots: addOns.gearBoots ?? false,
          gearTent: addOns.gearTent ?? false,
        },
      };

      await createBooking.mutateAsync(bookingPayload);
      updateBookingState({
        bookingId,
        paymentType,
        discountAmount: promoDiscount,
        totalAmount: afterPromo,
      });
      navigate({ to: "/booking/confirmation/$id", params: { id: bookingId } });
    } catch {
      setIsProcessing(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#f8faf9" }}>
      <BookingProgress
        currentStep={4}
        trekName={trekDisplayName}
        trekSlug={trekSlug}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Order Summary */}
        <div
          className="rounded-2xl border border-green-100 mb-6 overflow-hidden"
          style={{ background: "white" }}
          data-ocid="payment.order_summary"
        >
          <div className="px-6 pt-5 pb-4 border-b border-gray-100">
            <h2
              className="text-lg font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Summary
            </h2>
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-start gap-3">
              <Mountain
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "#1A7A4C" }}
              />
              <div>
                <p className="font-semibold">{trekDisplayName}</p>
                {selectedBatch && (
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(selectedBatch.startDate)} –{" "}
                      {formatDate(selectedBatch.endDate)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="w-3.5 h-3.5" />
                      {participants.length} trekkers
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
              {selectedBatch && (
                <div className="flex justify-between text-gray-600">
                  <span>
                    {participants.length} × ₹
                    {selectedBatch.pricePerPerson.toLocaleString("en-IN")}
                    /person
                  </span>
                  <span>
                    ₹
                    {(
                      selectedBatch.pricePerPerson * participants.length
                    ).toLocaleString("en-IN")}
                  </span>
                </div>
              )}
              {addOnNames.length > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Add-ons ({addOnNames.join(", ")})</span>
                  <span className="text-xs text-gray-400">(included)</span>
                </div>
              )}
              {promoDiscount > 0 && (
                <div
                  className="flex justify-between font-medium"
                  style={{ color: "#1A7A4C" }}
                >
                  <span>Promo ({promoApplied})</span>
                  <span>−₹{promoDiscount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-base pt-2 border-t border-green-100">
                <span>Total</span>
                <span style={{ color: "#1A7A4C" }}>
                  ₹{afterPromo.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Code */}
        <div
          className="rounded-2xl border border-green-100 mb-6 p-5"
          style={{ background: "white" }}
          data-ocid="payment.promo_section"
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4" style={{ color: "#1A7A4C" }} />
            <h3 className="font-semibold text-sm">Promo Code</h3>
          </div>
          <div className="flex gap-2">
            <Input
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
              placeholder="Enter promo code (e.g. TREK10)"
              data-ocid="payment.promo_input"
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") applyPromo();
              }}
            />
            <Button
              type="button"
              onClick={applyPromo}
              data-ocid="payment.promo_apply_button"
              style={{ background: "#1A7A4C", color: "white" }}
            >
              Apply
            </Button>
          </div>
          {promoError && (
            <p
              className="text-xs text-red-500 mt-2"
              data-ocid="payment.promo_error"
            >
              {promoError}
            </p>
          )}
          {promoSuccess && (
            <p
              className="text-xs font-medium mt-2"
              style={{ color: "#1A7A4C" }}
              data-ocid="payment.promo_success"
            >
              {promoSuccess}
            </p>
          )}
        </div>

        {/* Payment Options */}
        <div
          className="rounded-2xl border border-green-100 mb-6 p-5"
          style={{ background: "white" }}
          data-ocid="payment.payment_options"
        >
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4" style={{ color: "#1A7A4C" }} />{" "}
            Payment Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className="flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all"
              style={{
                border:
                  paymentType === "full"
                    ? "2px solid #1A7A4C"
                    : "1px solid #e5e7eb",
                background: paymentType === "full" ? "#f0faf4" : "white",
              }}
            >
              <input
                type="radio"
                name="payType"
                value="full"
                checked={paymentType === "full"}
                onChange={() => setPaymentType("full")}
                data-ocid="payment.option_full"
                className="mt-1 accent-green-700"
              />
              <div>
                <p className="font-semibold text-sm">Full Payment</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Pay complete amount now
                </p>
                <p className="font-bold mt-1" style={{ color: "#1A7A4C" }}>
                  ₹{afterPromo.toLocaleString("en-IN")}
                </p>
              </div>
            </label>
            <label
              className="flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all"
              style={{
                border:
                  paymentType === "advance"
                    ? "2px solid #F4A623"
                    : "1px solid #e5e7eb",
                background: paymentType === "advance" ? "#fff8e6" : "white",
              }}
            >
              <input
                type="radio"
                name="payType"
                value="advance"
                checked={paymentType === "advance"}
                onChange={() => setPaymentType("advance")}
                data-ocid="payment.option_advance"
                className="mt-1 accent-amber-500"
              />
              <div>
                <p className="font-semibold text-sm">30% Advance</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Balance ₹{balanceDue.toLocaleString("en-IN")} due on trek day
                </p>
                <p className="font-bold mt-1 text-amber-600">
                  ₹{payableNow.toLocaleString("en-IN")} now
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div
          className="rounded-2xl border border-gray-100 mb-6 overflow-hidden"
          style={{ background: "white" }}
          data-ocid="payment.cancellation_policy"
        >
          <button
            type="button"
            onClick={() => setCancellationOpen((p) => !p)}
            data-ocid="payment.cancellation_toggle"
            className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-700"
          >
            <span>Cancellation &amp; Refund Policy</span>
            {cancellationOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {cancellationOpen && (
            <div className="px-5 pb-4 text-xs text-gray-600 space-y-1 border-t border-gray-100">
              <p className="font-medium text-gray-700 mb-2 mt-3">
                Refund Schedule:
              </p>
              {[
                ["30+ days before trek", "80% refund"],
                ["15–29 days before", "50% refund"],
                ["7–14 days before", "25% refund"],
                ["Less than 7 days", "No refund"],
                ["Weather cancellation", "Full credit note (1 year)"],
                ["Natural disaster", "Full refund"],
              ].map(([when, what]) => (
                <div
                  key={when}
                  className="flex justify-between py-1 border-b border-gray-50"
                >
                  <span>{when}</span>
                  <span className="font-medium text-gray-700">{what}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { icon: <Lock className="w-4 h-4" />, text: "SSL Secured" },
            {
              icon: <ShieldCheck className="w-4 h-4" />,
              text: "PCI DSS Compliant",
            },
            {
              icon: <CheckCircle className="w-4 h-4" />,
              text: "Razorpay Certified",
            },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-1.5 text-xs text-gray-500"
            >
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Pay Button */}
        <Button
          onClick={handlePay}
          disabled={isProcessing}
          data-ocid="payment.pay_button"
          className="w-full h-16 text-lg font-bold rounded-xl"
          style={{
            background: isProcessing ? "#e5e7eb" : "#F4A623",
            color: isProcessing ? "#9ca3af" : "white",
          }}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Processing Payment...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="w-5 h-5" /> Pay ₹
              {payableNow.toLocaleString("en-IN")} via Razorpay
            </span>
          )}
        </Button>

        {paymentType === "advance" && !isProcessing && (
          <p className="text-center text-xs text-gray-500 mt-2">
            Remaining balance ₹{balanceDue.toLocaleString("en-IN")} to be paid
            on trek Day 1
          </p>
        )}

        <div className="flex gap-3 mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              navigate({
                to: "/booking/$trekSlug/addons",
                params: { trekSlug },
              })
            }
            data-ocid="payment.back_button"
            className="flex-1 h-12 font-semibold"
            style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
          >
            ← Back to Add-ons
          </Button>
        </div>
      </div>
    </div>
  );
}
