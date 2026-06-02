import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Backpack,
  Camera,
  Car,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  Mountain,
  Shield,
  Tent,
  TrendingUp,
  X,
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

// ─── Pickup options ───────────────────────────────────────────────────────────
const PICKUPS = [
  {
    id: "dehradun",
    label: "Dehradun Clock Tower",
    detail: "Dec 19, 10:00 PM",
    price: 1200,
  },
  {
    id: "haridwar",
    label: "Haridwar Bus Stand",
    detail: "Dec 19, 8:00 PM",
    price: 1500,
  },
  {
    id: "delhi",
    label: "Delhi ISBT Kashmere Gate",
    detail: "Dec 19, 2:00 PM",
    price: 2500,
  },
  {
    id: "rishikesh",
    label: "Rishikesh",
    detail: "Dec 19, 9:00 PM",
    price: 1300,
  },
];

// ─── Gear items ───────────────────────────────────────────────────────────────
const GEAR_ITEMS = [
  { id: "poles", name: "Trekking Poles (pair)", pricePerDay: 80, days: 5 },
  { id: "bag", name: "Sleeping Bag (-10°C)", pricePerDay: 150, days: 5 },
  { id: "poncho", name: "Rain Poncho", pricePerDay: 50, days: 5 },
  { id: "crampons", name: "Crampons (6-point)", pricePerDay: 100, days: 5 },
  { id: "gaiters", name: "Gaiters", pricePerDay: 60, days: 5 },
  { id: "backpack", name: "Backpack 50L", pricePerDay: 120, days: 5 },
  { id: "headlamp", name: "Headlamp (Petzl)", pricePerDay: 60, days: 5 },
  { id: "jacket", name: "Trekking Jacket", pricePerDay: 120, days: 5 },
  { id: "boots", name: "Trekking Boots", pricePerDay: 150, days: 5 },
  { id: "thermals", name: "Thermal Set", pricePerDay: 80, days: 5 },
];

const ESSENTIAL_KIT = ["poles", "bag", "poncho", "headlamp"];
const FULL_KIT = GEAR_ITEMS.map((g) => g.id);

const BASE_PRICE = 8500;
const PARTICIPANTS = 2;
const GST_RATE = 0.05;

interface AddOnState {
  pickup: string;
  gearKit: "none" | "essential" | "full";
  individualGear: string[];
  insurance: boolean;
  premiumTents: boolean;
  photography: boolean;
}

// ─── Cart component ───────────────────────────────────────────────────────────
function CartSummary({
  state,
  onContinue,
}: { state: AddOnState; onContinue: () => void }) {
  const pickup = PICKUPS.find((p) => p.id === state.pickup);
  const gearCost =
    state.gearKit === "essential"
      ? 650 * PARTICIPANTS
      : state.gearKit === "full"
        ? 1100 * PARTICIPANTS
        : state.individualGear.reduce((acc, id) => {
            const item = GEAR_ITEMS.find((g) => g.id === id);
            return (
              acc + (item ? item.pricePerDay * item.days * PARTICIPANTS : 0)
            );
          }, 0);
  const pickupCost = pickup ? pickup.price * PARTICIPANTS : 0;
  const insuranceCost = state.insurance ? 500 * PARTICIPANTS : 0;
  const premiumCost = state.premiumTents ? 800 * PARTICIPANTS : 0;
  const photoCost = state.photography ? 2500 : 0;
  const baseCost = BASE_PRICE * PARTICIPANTS;
  const subtotal =
    baseCost + pickupCost + gearCost + insuranceCost + premiumCost + photoCost;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  return (
    <div
      className="bg-white rounded-2xl border border-[var(--gt-gray-200)] shadow-md p-5 space-y-3 sticky top-20"
      data-ocid="addons.cart"
    >
      <h3 className="font-bold font-display text-[var(--gt-green-900)] text-lg">
        Your Trek Package
      </h3>
      <div className="space-y-2 text-sm border-t border-[var(--gt-gray-100)] pt-3">
        <div className="flex justify-between">
          <span className="text-[var(--gt-gray-600)]">
            {PARTICIPANTS}× Kedarkantha Base
          </span>
          <span className="font-semibold">
            ₹{baseCost.toLocaleString("en-IN")}
          </span>
        </div>
        {pickupCost > 0 && (
          <div className="flex justify-between">
            <span className="text-[var(--gt-gray-600)]">
              {PARTICIPANTS}× Pickup ({pickup?.label})
            </span>
            <span className="font-semibold">
              ₹{pickupCost.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        {gearCost > 0 && (
          <div className="flex justify-between">
            <span className="text-[var(--gt-gray-600)]">Gear Rental</span>
            <span className="font-semibold">
              ₹{gearCost.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        {insuranceCost > 0 && (
          <div className="flex justify-between">
            <span className="text-[var(--gt-gray-600)]">
              {PARTICIPANTS}× Trek Insurance
            </span>
            <span className="font-semibold">
              ₹{insuranceCost.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        {premiumCost > 0 && (
          <div className="flex justify-between">
            <span className="text-[var(--gt-gray-600)]">Premium Tents</span>
            <span className="font-semibold">
              ₹{premiumCost.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        {photoCost > 0 && (
          <div className="flex justify-between">
            <span className="text-[var(--gt-gray-600)]">
              Photography Package
            </span>
            <span className="font-semibold">
              ₹{photoCost.toLocaleString("en-IN")}
            </span>
          </div>
        )}
      </div>
      <div className="border-t border-[var(--gt-gray-200)] pt-3 space-y-1 text-sm">
        <div className="flex justify-between text-[var(--gt-gray-600)]">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-[var(--gt-gray-600)]">
          <span>GST (5%)</span>
          <span>₹{gst.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-[var(--gt-green-900)] font-bold text-base pt-1 border-t border-[var(--gt-gray-100)]">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>
      <Button
        onClick={onContinue}
        className="w-full bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-semibold font-mono rounded-xl gap-2"
        data-ocid="addons.continue_button"
      >
        Continue to Payment <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}

// ─── Section card wrapper ─────────────────────────────────────────────────────
function SectionCard({
  icon,
  title,
  badge,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--gt-gray-200)] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--gt-gray-100)] bg-[var(--gt-green-50)]">
        <span className="text-[var(--gt-green-700)]">{icon}</span>
        <h3 className="font-semibold font-display text-[var(--gt-green-900)]">
          {title}
        </h3>
        {badge && (
          <Badge className="bg-[var(--gt-amber)] text-white border-0 font-mono text-xs ml-auto">
            {badge}
          </Badge>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AddOns() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/addons" });
  const navigate = useNavigate();
  const [state, setState] = useState<AddOnState>({
    pickup: "",
    gearKit: "none",
    individualGear: [],
    insurance: false,
    premiumTents: false,
    photography: false,
  });
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  function toggleIndividualGear(id: string) {
    setState((s) => ({
      ...s,
      gearKit: "none",
      individualGear: s.individualGear.includes(id)
        ? s.individualGear.filter((g) => g !== id)
        : [...s.individualGear, id],
    }));
  }

  function setGearKit(kit: "none" | "essential" | "full") {
    setState((s) => ({
      ...s,
      gearKit: kit,
      individualGear:
        kit === "none" ? [] : kit === "essential" ? ESSENTIAL_KIT : FULL_KIT,
    }));
  }

  function handleContinue() {
    void navigate({ to: "/booking/$trekSlug/payment", params: { trekSlug } });
  }

  // Cart totals for mobile bar
  const gearCost =
    state.gearKit === "essential"
      ? 650 * PARTICIPANTS
      : state.gearKit === "full"
        ? 1100 * PARTICIPANTS
        : state.individualGear.reduce((acc, id) => {
            const item = GEAR_ITEMS.find((g) => g.id === id);
            return (
              acc + (item ? item.pricePerDay * item.days * PARTICIPANTS : 0)
            );
          }, 0);
  const pickupObj = PICKUPS.find((p) => p.id === state.pickup);
  const extras =
    (pickupObj ? pickupObj.price * PARTICIPANTS : 0) +
    gearCost +
    (state.insurance ? 500 * PARTICIPANTS : 0) +
    (state.premiumTents ? 800 * PARTICIPANTS : 0) +
    (state.photography ? 2500 : 0);
  const base = BASE_PRICE * PARTICIPANTS;
  const subtotal = base + extras;
  const total = Math.round(subtotal * 1.05);

  return (
    <div className="min-h-screen bg-[var(--gt-green-50)]">
      {/* Sticky trek header */}
      <div className="sticky top-0 z-20 bg-white border-b border-[var(--gt-green-100)] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
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
            <Clock className="w-3 h-3" />5 Days
          </span>
          <span className="text-xs text-[var(--gt-gray-600)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            3,810m
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <BookingProgress current={2} />
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-display text-[var(--gt-green-900)]">
            Add-Ons & Customization
          </h1>
          <p className="text-[var(--gt-gray-600)] text-sm mt-1">
            Enhance your trek experience with these optional upgrades
          </p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Left — add-on sections */}
          <div className="flex-1 space-y-5" data-ocid="addons.sections">
            {/* A: Transport */}
            <SectionCard
              icon={<Car className="w-5 h-5" />}
              title="Transport Pickup (Optional)"
            >
              <div className="space-y-3">
                {PICKUPS.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-start gap-3 cursor-pointer group"
                    data-ocid={`addon.pickup.${p.id}`}
                  >
                    <Checkbox
                      id={`pickup-${p.id}`}
                      checked={state.pickup === p.id}
                      onCheckedChange={(v) =>
                        setState((s) => ({ ...s, pickup: v ? p.id : "" }))
                      }
                      className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
                    />
                    <label
                      htmlFor={`pickup-${p.id}`}
                      className="flex-1 flex items-start gap-2 cursor-pointer"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--gt-gray-900)] group-hover:text-[var(--gt-green-700)]">
                          {p.label}
                        </p>
                        <p className="text-xs text-[var(--gt-gray-600)]">
                          {p.detail}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-[var(--gt-green-700)]">
                        +₹{p.price.toLocaleString("en-IN")}/pp
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* B: Gear rental */}
            <SectionCard
              icon={<Backpack className="w-5 h-5" />}
              title="Gear Rental"
            >
              <div className="space-y-4">
                {/* Kit bundles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["none", "essential", "full"] as const).map((kit) => {
                    const labels = {
                      none: "No Gear",
                      essential: "Essential Kit ₹650/pp",
                      full: "Full Kit ₹1,100/pp",
                    };
                    const descs = {
                      none: "I own my gear",
                      essential: "Poles · Bag · Poncho · Headlamp",
                      full: "All 10 items",
                    };
                    return (
                      <button
                        key={kit}
                        type="button"
                        onClick={() => setGearKit(kit)}
                        className={`border-2 rounded-xl p-3 text-left transition-all ${
                          state.gearKit === kit
                            ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]"
                            : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"
                        }`}
                        data-ocid={`addon.gear_kit.${kit}`}
                      >
                        <p className="text-sm font-semibold text-[var(--gt-green-900)]">
                          {labels[kit]}
                        </p>
                        <p className="text-xs text-[var(--gt-gray-600)] mt-0.5">
                          {descs[kit]}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {/* Individual items */}
                <details className="group">
                  <summary className="cursor-pointer text-sm text-[var(--gt-green-700)] font-semibold flex items-center gap-1 list-none">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />{" "}
                    Pick individual items
                  </summary>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                    {GEAR_ITEMS.map((g) => (
                      <div
                        key={g.id}
                        className="flex items-center gap-2 text-sm"
                        data-ocid={`addon.gear.${g.id}`}
                      >
                        <Checkbox
                          id={`gear-${g.id}`}
                          checked={state.individualGear.includes(g.id)}
                          onCheckedChange={() => toggleIndividualGear(g.id)}
                          className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)]"
                        />
                        <label
                          htmlFor={`gear-${g.id}`}
                          className="flex-1 flex items-center gap-2 cursor-pointer"
                        >
                          <span className="text-[var(--gt-gray-800)]">
                            {g.name}
                          </span>
                          <span className="text-xs text-[var(--gt-gray-600)] ml-auto">
                            ₹{g.pricePerDay}/d
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </SectionCard>

            {/* C: Insurance */}
            <SectionCard
              icon={<Shield className="w-5 h-5" />}
              title="Trek Insurance"
              badge="HIGHLY RECOMMENDED"
            >
              <div
                className="flex items-start gap-4"
                data-ocid="addon.insurance"
              >
                <Checkbox
                  id="addon-insurance"
                  checked={state.insurance}
                  onCheckedChange={(v) =>
                    setState((s) => ({ ...s, insurance: !!v }))
                  }
                  className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-1"
                />
                <label
                  htmlFor="addon-insurance"
                  className="flex-1 cursor-pointer"
                >
                  <p className="font-semibold text-[var(--gt-gray-900)]">
                    Trek Insurance —{" "}
                    <span className="text-[var(--gt-green-700)]">
                      ₹500/person
                    </span>
                  </p>
                  <p className="text-sm text-[var(--gt-gray-600)] mt-1">
                    Covers medical evacuation up to ₹5 lakhs. Provider: New
                    India Assurance. 24/7 claim support.
                  </p>
                </label>
              </div>
            </SectionCard>

            {/* D: Premium tents */}
            <SectionCard
              icon={<Tent className="w-5 h-5" />}
              title="Accommodation Upgrade"
            >
              <div className="space-y-3">
                <div
                  className="flex items-start gap-3"
                  data-ocid="addon.standard_tent"
                >
                  <Checkbox
                    id="addon-standard-tent"
                    checked={true}
                    disabled
                    className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-600)] mt-0.5"
                  />
                  <label
                    htmlFor="addon-standard-tent"
                    className="cursor-pointer"
                  >
                    <p className="text-sm font-semibold text-[var(--gt-gray-900)]">
                      Standard Camping{" "}
                      <Badge
                        variant="outline"
                        className="font-mono text-xs ml-2"
                      >
                        Included
                      </Badge>
                    </p>
                    <p className="text-xs text-[var(--gt-gray-600)]">
                      3-person tents, standard insulation
                    </p>
                  </label>
                </div>
                <div
                  className="flex items-start gap-3"
                  data-ocid="addon.premium_tent"
                >
                  <Checkbox
                    id="addon-premium-tent"
                    checked={state.premiumTents}
                    onCheckedChange={(v) =>
                      setState((s) => ({ ...s, premiumTents: !!v }))
                    }
                    className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
                  />
                  <label
                    htmlFor="addon-premium-tent"
                    className="flex-1 cursor-pointer"
                  >
                    <p className="text-sm font-semibold text-[var(--gt-gray-900)]">
                      Premium Tents{" "}
                      <span className="text-[var(--gt-green-700)]">
                        +₹800/person
                      </span>
                    </p>
                    <p className="text-xs text-[var(--gt-gray-600)]">
                      2-person tents, 3-layer insulated, higher warmth rating
                    </p>
                  </label>
                </div>
              </div>
            </SectionCard>

            {/* E: Photography */}
            <SectionCard
              icon={<Camera className="w-5 h-5" />}
              title="Photography Package"
            >
              <div
                className="flex items-start gap-4"
                data-ocid="addon.photography"
              >
                <Checkbox
                  id="addon-photography"
                  checked={state.photography}
                  onCheckedChange={(v) =>
                    setState((s) => ({ ...s, photography: !!v }))
                  }
                  className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-1"
                />
                <label htmlFor="addon-photography" className="cursor-pointer">
                  <p className="font-semibold text-[var(--gt-gray-900)]">
                    Professional Trek Photography —{" "}
                    <span className="text-[var(--gt-green-700)]">
                      ₹2,500/group
                    </span>
                  </p>
                  <p className="text-sm text-[var(--gt-gray-600)] mt-1">
                    100+ edited photos delivered within 7 days. Drone shots
                    included on eligible days.
                  </p>
                </label>
              </div>
            </SectionCard>
          </div>

          {/* Right — Cart (desktop) */}
          <div className="hidden lg:block w-80 shrink-0">
            <CartSummary state={state} onContinue={handleContinue} />
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[var(--gt-gray-200)] shadow-lg">
        {mobileCartOpen && (
          <div className="p-4 border-b border-[var(--gt-gray-100)]">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold font-display text-[var(--gt-green-900)]">
                Order Summary
              </h4>
              <button
                type="button"
                onClick={() => setMobileCartOpen(false)}
                data-ocid="addons.cart_close_button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-[var(--gt-gray-600)]">
                  {PARTICIPANTS}× Base
                </span>
                <span>₹{base.toLocaleString("en-IN")}</span>
              </div>
              {extras > 0 && (
                <div className="flex justify-between">
                  <span className="text-[var(--gt-gray-600)]">Add-ons</span>
                  <span>₹{extras.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between font-bold">
                <span>Total (incl. GST)</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setMobileCartOpen(!mobileCartOpen)}
            className="flex-1 text-left"
            data-ocid="addons.cart_toggle"
          >
            <p className="text-xs text-[var(--gt-gray-600)]">
              Total (incl. GST)
            </p>
            <p className="font-bold text-[var(--gt-green-900)] text-lg">
              ₹{total.toLocaleString("en-IN")}
            </p>
          </button>
          <Button
            onClick={handleContinue}
            className="bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-semibold font-mono rounded-xl gap-1 shrink-0"
            data-ocid="addons.continue_mobile_button"
          >
            Continue <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="lg:hidden h-20" />
    </div>
  );
}
