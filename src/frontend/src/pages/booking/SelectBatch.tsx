import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Batch } from "@/types/trek";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  Calendar,
  ChevronRight,
  Clock,
  List,
  MapPin,
  Mountain,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";

// ─── Booking progress ─────────────────────────────────────────────────────────
const STEPS = ["Batch", "Details", "Add-ons", "Pay"];

function BookingProgress({ current }: { current: number }) {
  return (
    <div
      className="flex items-center gap-0 justify-center py-6"
      data-ocid="booking.progress"
    >
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-0 contents">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-mono border-2 transition-colors ${
                i < current
                  ? "bg-[var(--gt-green-700)] border-[var(--gt-green-700)] text-white"
                  : i === current
                    ? "bg-[var(--gt-green-800)] border-[var(--gt-green-800)] text-white"
                    : "bg-transparent border-[var(--gt-gray-400)] text-[var(--gt-gray-600)]"
              }`}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs font-mono ${
                i <= current
                  ? "text-[var(--gt-green-700)] font-semibold"
                  : "text-[var(--gt-gray-600)]"
              }`}
            >
              {step}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`h-0.5 w-16 mx-1 mb-5 ${
                i < current
                  ? "bg-[var(--gt-green-700)]"
                  : "bg-[var(--gt-gray-200)]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Trek summary box ─────────────────────────────────────────────────────────
function TrekSummaryBox({ slug }: { slug: string }) {
  const trekData: Record<
    string,
    {
      name: string;
      location: string;
      duration: string;
      altitude: string;
      difficulty: string;
    }
  > = {
    kedarkantha: {
      name: "Kedarkantha Trek",
      location: "Sankri, Uttarkashi",
      duration: "5 Days / 4 Nights",
      altitude: "3,810m (12,500 ft)",
      difficulty: "Easy to Moderate",
    },
    "chopta-tungnath": {
      name: "Chopta Tungnath Trek",
      location: "Chopta, Uttarakhand",
      duration: "3 Days / 2 Nights",
      altitude: "4,000m (13,123 ft)",
      difficulty: "Easy to Moderate",
    },
    "hampta-pass": {
      name: "Hampta Pass Trek",
      location: "Manali, Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      altitude: "4,270m (14,009 ft)",
      difficulty: "Moderate",
    },
    "har-ki-dun": {
      name: "Har Ki Dun Trek",
      location: "Sankri, Uttarkashi",
      duration: "8 Days / 7 Nights",
      altitude: "3,566m (11,700 ft)",
      difficulty: "Moderate",
    },
    "char-dham": {
      name: "Char Dham Yatra",
      location: "Uttarakhand",
      duration: "14 Days / 13 Nights",
      altitude: "Multiple Shrines",
      difficulty: "Pilgrimage",
    },
  };
  const trek = trekData[slug] ?? {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    location: "Himalayas",
    duration: "5 Days",
    altitude: "3,800m",
    difficulty: "Moderate",
  };

  return (
    <div
      className="rounded-xl border border-[var(--gt-green-100)] bg-[var(--gt-green-50)] p-4 flex flex-wrap gap-4 items-center"
      data-ocid="booking.trek_summary"
    >
      <div className="flex items-center gap-2">
        <Mountain className="w-5 h-5 text-[var(--gt-green-700)]" />
        <span className="font-semibold font-display text-[var(--gt-green-900)]">
          {trek.name}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--gt-gray-600)]">
        <MapPin className="w-4 h-4" />
        {trek.location}
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--gt-gray-600)]">
        <Clock className="w-4 h-4" />
        {trek.duration}
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--gt-gray-600)]">
        <TrendingUp className="w-4 h-4" />
        {trek.altitude}
      </div>
      <Badge
        variant="secondary"
        className="bg-[var(--gt-green-100)] text-[var(--gt-green-800)] border-[var(--gt-green-500)]/30 font-mono"
      >
        {trek.difficulty}
      </Badge>
    </div>
  );
}

// ─── Batch data ───────────────────────────────────────────────────────────────
const BATCHES: Batch[] = [
  {
    id: "b1",
    trekId: "1",
    startDate: "2026-12-15",
    endDate: "2026-12-19",
    maxCapacity: 15,
    bookedCount: 15,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b2",
    trekId: "1",
    startDate: "2026-12-20",
    endDate: "2026-12-24",
    maxCapacity: 15,
    bookedCount: 7,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b3",
    trekId: "1",
    startDate: "2026-12-25",
    endDate: "2026-12-29",
    maxCapacity: 15,
    bookedCount: 3,
    basePrice: 9500,
    batchType: "Christmas",
  },
  {
    id: "b4",
    trekId: "1",
    startDate: "2026-12-30",
    endDate: "2027-01-03",
    maxCapacity: 15,
    bookedCount: 11,
    basePrice: 10500,
    batchType: "New Year",
  },
  {
    id: "b5",
    trekId: "1",
    startDate: "2027-01-05",
    endDate: "2027-01-09",
    maxCapacity: 15,
    bookedCount: 3,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b6",
    trekId: "1",
    startDate: "2027-01-15",
    endDate: "2027-01-19",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b7",
    trekId: "1",
    startDate: "2027-01-25",
    endDate: "2027-01-29",
    maxCapacity: 15,
    bookedCount: 2,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b8",
    trekId: "1",
    startDate: "2027-02-05",
    endDate: "2027-02-09",
    maxCapacity: 15,
    bookedCount: 1,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b9",
    trekId: "1",
    startDate: "2027-02-15",
    endDate: "2027-02-19",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular",
  },
  {
    id: "b10",
    trekId: "1",
    startDate: "2027-02-25",
    endDate: "2027-03-01",
    maxCapacity: 15,
    bookedCount: 0,
    basePrice: 8500,
    batchType: "Regular",
  },
];

function getSeatsStatus(batch: Batch) {
  const left = batch.maxCapacity - batch.bookedCount;
  if (left === 0)
    return {
      label: "FULL",
      color:
        "bg-[var(--gt-red)]/10 text-[var(--gt-red)] border-[var(--gt-red)]/30",
    };
  if (left <= 4)
    return {
      label: `${left} left — FAST!`,
      color: "bg-amber-100 text-amber-700 border-amber-300",
    };
  return {
    label: `${left} / ${batch.maxCapacity} available`,
    color:
      "bg-[var(--gt-green-100)] text-[var(--gt-green-700)] border-[var(--gt-green-500)]/30",
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function groupByMonth(batches: Batch[]) {
  const groups: Record<string, Batch[]> = {};
  for (const b of batches) {
    const key = new Date(b.startDate).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
    if (!groups[key]) groups[key] = [];
    groups[key].push(b);
  }
  return groups;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SelectBatch() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/select-batch" });
  const navigate = useNavigate();
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const grouped = groupByMonth(BATCHES);

  function handleSelect(batchId: string) {
    setSelectedBatch(batchId);
  }

  function handleContinue() {
    if (!selectedBatch) return;
    void navigate({
      to: "/booking/$trekSlug/participants",
      params: { trekSlug },
    });
  }

  return (
    <div className="min-h-screen bg-[var(--gt-green-50)]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <BookingProgress current={0} />
        <TrekSummaryBox slug={trekSlug} />

        {/* Header + View Toggle */}
        <div className="flex items-center justify-between mt-8 mb-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-[var(--gt-green-900)]">
              Select a Batch
            </h1>
            <p className="text-[var(--gt-gray-600)] text-sm mt-1">
              Choose your departure date below
            </p>
          </div>
          <div
            className="flex gap-2 bg-white rounded-lg border border-[var(--gt-gray-200)] p-1"
            data-ocid="batch.view_toggle"
          >
            <button
              type="button"
              onClick={() => setView("list")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-mono transition-colors ${
                view === "list"
                  ? "bg-[var(--gt-green-700)] text-white"
                  : "text-[var(--gt-gray-600)] hover:text-[var(--gt-green-700)]"
              }`}
              data-ocid="batch.list_view_button"
            >
              <List className="w-4 h-4" /> List
            </button>
            <button
              type="button"
              onClick={() => setView("calendar")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-mono transition-colors ${
                view === "calendar"
                  ? "bg-[var(--gt-green-700)] text-white"
                  : "text-[var(--gt-gray-600)] hover:text-[var(--gt-green-700)]"
              }`}
              data-ocid="batch.calendar_view_button"
            >
              <Calendar className="w-4 h-4" /> Calendar
            </button>
          </div>
        </div>

        {/* Group pricing note */}
        <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-sm">
          <Users className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span className="text-amber-800">
            <strong>Group discount:</strong> Book 6 or more persons and get{" "}
            <strong>10% off</strong> — applied automatically at checkout.
          </span>
        </div>

        {/* Batch Table — Desktop */}
        <div className="hidden md:block space-y-8">
          {Object.entries(grouped).map(([month, batches]) => (
            <div key={month}>
              <h3 className="text-lg font-semibold font-display text-[var(--gt-green-800)] mb-3 border-b border-[var(--gt-green-100)] pb-2">
                {month}
              </h3>
              <div className="bg-white rounded-xl border border-[var(--gt-gray-200)] overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--gt-green-50)] text-[var(--gt-gray-600)] font-mono text-xs uppercase tracking-wide">
                      <th className="text-left px-5 py-3">Dates</th>
                      <th className="text-left px-4 py-3">Duration</th>
                      <th className="text-left px-4 py-3">Type</th>
                      <th className="text-left px-4 py-3">Seats</th>
                      <th className="text-right px-4 py-3">Price/Person</th>
                      <th className="text-center px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--gt-gray-100)]">
                    {batches.map((batch) => {
                      const seats = getSeatsStatus(batch);
                      const isFull = batch.bookedCount >= batch.maxCapacity;
                      const isSelected = selectedBatch === batch.id;
                      return (
                        <tr
                          key={batch.id}
                          className={`transition-colors ${
                            isFull
                              ? "opacity-60"
                              : isSelected
                                ? "bg-[var(--gt-green-50)]"
                                : "hover:bg-[var(--gt-gray-50)]"
                          }`}
                          data-ocid={`batch.row.${batch.id}`}
                        >
                          <td className="px-5 py-4 font-semibold text-[var(--gt-green-900)]">
                            {formatDate(batch.startDate)} –{" "}
                            {formatDate(batch.endDate)}
                          </td>
                          <td className="px-4 py-4 text-[var(--gt-gray-600)]">
                            5 Days / 4 Nights
                          </td>
                          <td className="px-4 py-4">
                            <Badge
                              variant="outline"
                              className="font-mono text-xs"
                            >
                              {batch.batchType}
                            </Badge>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${seats.color}`}
                            >
                              {seats.label}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-right font-bold text-[var(--gt-green-800)]">
                            ₹{batch.basePrice.toLocaleString("en-IN")}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {isFull ? (
                              <span
                                className="text-xs text-[var(--gt-gray-400)]"
                                data-ocid={`batch.full_label.${batch.id}`}
                              >
                                Sold Out
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleSelect(batch.id)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-semibold font-mono transition-all ${
                                  isSelected
                                    ? "bg-[var(--gt-green-700)] text-white"
                                    : "bg-[var(--gt-green-100)] text-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] hover:text-white"
                                }`}
                                data-ocid={`batch.select_button.${batch.id}`}
                              >
                                {isSelected ? "✓ Selected" : "Select"}
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Batch Cards — Mobile */}
        <div className="md:hidden space-y-8">
          {Object.entries(grouped).map(([month, batches]) => (
            <div key={month}>
              <h3 className="text-base font-semibold font-display text-[var(--gt-green-800)] mb-3">
                {month}
              </h3>
              <div className="space-y-3">
                {batches.map((batch) => {
                  const seats = getSeatsStatus(batch);
                  const isFull = batch.bookedCount >= batch.maxCapacity;
                  const isSelected = selectedBatch === batch.id;
                  return (
                    <div
                      key={batch.id}
                      className={`bg-white rounded-xl border p-4 transition-all ${
                        isSelected
                          ? "border-[var(--gt-green-700)] shadow-md"
                          : "border-[var(--gt-gray-200)]"
                      } ${isFull ? "opacity-60" : ""}`}
                      data-ocid={`batch.card.${batch.id}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-[var(--gt-green-900)] text-sm">
                            {formatDate(batch.startDate)} –{" "}
                            {formatDate(batch.endDate)}
                          </p>
                          <p className="text-xs text-[var(--gt-gray-600)] mt-0.5">
                            5 Days / 4 Nights · {batch.batchType}
                          </p>
                        </div>
                        <span className="font-bold text-[var(--gt-green-800)] text-base">
                          ₹{batch.basePrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold border ${seats.color}`}
                        >
                          {seats.label}
                        </span>
                        {!isFull && (
                          <button
                            type="button"
                            onClick={() => handleSelect(batch.id)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-semibold font-mono ${
                              isSelected
                                ? "bg-[var(--gt-green-700)] text-white"
                                : "bg-[var(--gt-green-100)] text-[var(--gt-green-800)]"
                            }`}
                            data-ocid={`batch.select_mobile.${batch.id}`}
                          >
                            {isSelected ? "✓ Selected" : "Select"}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Custom batch request */}
        <div className="flex items-center gap-2 mt-6 text-sm text-[var(--gt-gray-600)]">
          <AlertCircle className="w-4 h-4 text-[var(--gt-blue)]" />
          Don't see your dates?
          <a
            href="/contact"
            className="text-[var(--gt-green-700)] underline underline-offset-2 hover:text-[var(--gt-green-600)]"
            data-ocid="batch.custom_request_link"
          >
            Request a Custom Batch
          </a>
        </div>

        {/* Continue CTA */}
        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleContinue}
            disabled={!selectedBatch}
            className="bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white px-8 py-3 rounded-xl font-semibold font-mono text-base gap-2"
            data-ocid="batch.continue_button"
          >
            Continue to Participant Details <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
