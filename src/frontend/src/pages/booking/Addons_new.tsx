import { BookingProgress } from "@/components/booking/BookingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { treksData } from "@/data/treks";
import { useBookingStore } from "@/hooks/useBackend";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Backpack,
  Calendar,
  ChevronRight,
  Mountain,
  ShieldCheck,
  Tent,
  Truck,
  Users,
  Wind,
} from "lucide-react";
import { useMemo, useState } from "react";

interface AddonConfig {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  priceLabel: string;
  unitPrice: number;
  hasDays?: boolean;
  perPerson?: boolean;
}

const ADDONS: AddonConfig[] = [
  {
    id: "porter",
    icon: <Backpack className="w-5 h-5" />,
    title: "Porter Service",
    description: "Carry your backpack (up to 10 kg) to camps",
    priceLabel: "₹800/day per porter",
    unitPrice: 800,
    hasDays: true,
  },
  {
    id: "mule",
    icon: <Truck className="w-5 h-5" />,
    title: "Mule/Pony Service",
    description: "Duffel bag carried by mule to camps",
    priceLabel: "₹600/day per mule",
    unitPrice: 600,
    hasDays: true,
  },
  {
    id: "travelInsurance",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Travel Insurance",
    description: "Covers trip cancellation, medical evacuation & more",
    priceLabel: "₹500/person",
    unitPrice: 500,
    perPerson: true,
  },
  {
    id: "gearSleepingBag",
    icon: <Wind className="w-5 h-5" />,
    title: "Sleeping Bag Rental",
    description: "-10°C rated sleeping bag (Dhaulagiri DW300)",
    priceLabel: "₹150/day",
    unitPrice: 150,
    hasDays: true,
  },
  {
    id: "gearBoots",
    icon: <Mountain className="w-5 h-5" />,
    title: "Hiking Boots Rental",
    description: "Waterproof high-ankle trekking boots",
    priceLabel: "₹200/day",
    unitPrice: 200,
    hasDays: true,
  },
  {
    id: "gearTent",
    icon: <Tent className="w-5 h-5" />,
    title: "Premium Tent Upgrade",
    description: "Upgrade to 4-season private tent (1 person)",
    priceLabel: "₹200/day",
    unitPrice: 200,
    hasDays: true,
  },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Addons() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/addons" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const { selectedBatch, trekName, participants, addOns } = bookingState;

  const trek = useMemo(
    () =>
      treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug],
  );

  const trekDays = selectedBatch
    ? Math.round(
        (new Date(selectedBatch.endDate).getTime() -
          new Date(selectedBatch.startDate).getTime()) /
          86400000,
      ) + 1
    : 5;

  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    porter: addOns.porter,
    mule: addOns.mule,
    travelInsurance: addOns.travelInsurance,
    gearSleepingBag: addOns.gearSleepingBag,
    gearBoots: addOns.gearBoots,
    gearTent: addOns.gearTent,
  });

  const [days, setDays] = useState<Record<string, number>>({
    porter: addOns.porterDays || trekDays,
    mule: addOns.muleDays || trekDays,
    gearSleepingBag: trekDays,
    gearBoots: trekDays,
    gearTent: trekDays,
  });

  function toggleAddon(id: string) {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function setDay(id: string, val: number) {
    setDays((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(trekDays, val)),
    }));
  }

  function calcAddonCost(addon: AddonConfig): number {
    if (!enabled[addon.id]) return 0;
    if (addon.perPerson) return addon.unitPrice * participants.length;
    const d = days[addon.id] ?? trekDays;
    return addon.unitPrice * d;
  }

  const addonTotal = ADDONS.reduce((sum, a) => sum + calcAddonCost(a), 0);
  const baseTotal = bookingState.totalAmount;
  const gst = Math.round(addonTotal * 0.05);
  const grandTotal = baseTotal + addonTotal + gst;
  const trekDisplayName = trekName || trek?.name || trekSlug;

  function handleContinue() {
    updateBookingState({
      addOns: {
        porter: enabled.porter,
        mule: enabled.mule,
        travelInsurance: enabled.travelInsurance,
        gearSleepingBag: enabled.gearSleepingBag,
        gearBoots: enabled.gearBoots,
        gearTent: enabled.gearTent,
        porterDays: days.porter ?? trekDays,
        muleDays: days.mule ?? trekDays,
      },
      totalAmount: grandTotal,
    });
    navigate({ to: "/booking/$trekSlug/payment", params: { trekSlug } });
  }

  return (
    <div className="min-h-screen" style={{ background: "#f8faf9" }}>
      <BookingProgress
        currentStep={3}
        trekName={trekDisplayName}
        trekSlug={trekSlug}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Booking Summary */}
        {selectedBatch && (
          <div
            className="rounded-xl border border-green-100 p-4 mb-6 flex flex-wrap gap-4 items-center"
            style={{ background: "white" }}
            data-ocid="addons.booking_summary"
          >
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5" style={{ color: "#1A7A4C" }} />
              <span className="font-semibold text-sm">{trekDisplayName}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              {formatDate(selectedBatch.startDate)} –{" "}
              {formatDate(selectedBatch.endDate)}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              {participants.length} participant
              {participants.length !== 1 ? "s" : ""}
            </div>
            <Badge
              style={{
                background: "#e8f5ee",
                color: "#1A7A4C",
                border: "1px solid #c1e4ce",
              }}
            >
              Base: ₹{baseTotal.toLocaleString("en-IN")}
            </Badge>
          </div>
        )}

        <div
          className="rounded-2xl border border-green-100 mb-6 overflow-hidden"
          style={{ background: "white" }}
          data-ocid="addons.addons_section"
        >
          <div className="px-6 pt-5 pb-4 border-b border-gray-100">
            <h2
              className="text-lg font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Optional Add-ons
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Enhance your trek experience. All add-ons can be removed later.
            </p>
          </div>

          <div className="divide-y divide-gray-50">
            {ADDONS.map((addon) => {
              const cost = calcAddonCost(addon);
              const isOn = enabled[addon.id];
              return (
                <div
                  key={addon.id}
                  data-ocid={`addons.addon_card.${addon.id}`}
                  className="p-5 transition-colors"
                  style={{ background: isOn ? "#f0faf4" : "white" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isOn ? "#1A7A4C" : "#f3f4f6",
                        color: isOn ? "white" : "#6b7280",
                      }}
                    >
                      {addon.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-sm">
                            {addon.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {addon.description}
                          </p>
                          <p
                            className="text-xs font-medium mt-1"
                            style={{ color: "#1A7A4C" }}
                          >
                            {addon.priceLabel}
                          </p>
                        </div>
                        {/* Toggle */}
                        <button
                          type="button"
                          data-ocid={`addons.toggle.${addon.id}`}
                          onClick={() => toggleAddon(addon.id)}
                          className="relative flex-shrink-0 w-12 h-6 rounded-full transition-all"
                          style={{ background: isOn ? "#1A7A4C" : "#e5e7eb" }}
                          aria-label={
                            isOn
                              ? `Disable ${addon.title}`
                              : `Enable ${addon.title}`
                          }
                        >
                          <span
                            className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all"
                            style={{
                              left: isOn ? "calc(100% - 1.375rem)" : "0.125rem",
                            }}
                          />
                        </button>
                      </div>

                      {/* Day picker */}
                      {isOn && addon.hasDays && (
                        <div className="mt-3 flex items-center gap-3">
                          <span className="text-xs text-gray-600">Days:</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setDay(
                                  addon.id,
                                  (days[addon.id] ?? trekDays) - 1,
                                )
                              }
                              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{
                                background: "#e8f5ee",
                                color: "#1A7A4C",
                              }}
                            >
                              −
                            </button>
                            <span className="font-bold text-sm w-6 text-center">
                              {days[addon.id] ?? trekDays}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setDay(
                                  addon.id,
                                  (days[addon.id] ?? trekDays) + 1,
                                )
                              }
                              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{
                                background: "#e8f5ee",
                                color: "#1A7A4C",
                              }}
                            >
                              +
                            </button>
                          </div>
                          <span
                            className="text-xs font-semibold ml-1"
                            style={{ color: "#1A7A4C" }}
                          >
                            ₹{cost.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}
                      {isOn && addon.perPerson && (
                        <div className="mt-2 text-xs text-gray-600">
                          {participants.length} person
                          {participants.length !== 1 ? "s" : ""} × ₹
                          {addon.unitPrice} ={" "}
                          <span
                            className="font-semibold"
                            style={{ color: "#1A7A4C" }}
                          >
                            ₹{cost.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Summary */}
        <div
          className="rounded-2xl border border-green-100 mb-6 p-6"
          style={{ background: "white" }}
          data-ocid="addons.pricing_summary"
        >
          <h3 className="font-bold text-base mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Trek base price</span>
              <span>₹{baseTotal.toLocaleString("en-IN")}</span>
            </div>
            {ADDONS.filter((a) => enabled[a.id]).map((a) => (
              <div key={a.id} className="flex justify-between text-gray-600">
                <span>
                  {a.title}
                  {a.hasDays
                    ? ` (×${days[a.id] ?? trekDays} days)`
                    : a.perPerson
                      ? ` (×${participants.length} people)`
                      : ""}
                </span>
                <span>+₹{calcAddonCost(a).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex justify-between text-gray-500">
              <span>Add-ons GST (5%)</span>
              <span>+₹{gst.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-3 border-t border-green-100">
              <span>Grand Total</span>
              <span style={{ color: "#1A7A4C" }}>
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              navigate({
                to: "/booking/$trekSlug/participants",
                params: { trekSlug },
              })
            }
            data-ocid="addons.back_button"
            className="flex-1 h-12 font-semibold"
            style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
          >
            ← Back
          </Button>
          <Button
            onClick={handleContinue}
            data-ocid="addons.continue_button"
            className="flex-[2] h-12 text-base font-bold rounded-xl"
            style={{ background: "#F4A623", color: "white" }}
          >
            Continue to Payment <ChevronRight className="ml-1 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
