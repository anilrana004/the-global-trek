import { BookingProgress } from "@/components/booking/BookingProgress";
import { Badge } from "@/components/ui/badge";
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
import { treksData } from "@/data/treks";
import { type ParticipantData, useBookingStore } from "@/hooks/useBackend";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  Calendar,
  ChevronRight,
  Mountain,
  User,
  Users,
} from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";

interface ParticipantFormData extends ParticipantData {
  medicalNoHeart: boolean;
  medicalNoAsthma: boolean;
  medicalNotPregnant: boolean;
  medicalFit: boolean;
}

function emptyParticipant(): ParticipantFormData {
  return {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    medicalConditions: "",
    govtIdType: "",
    govtIdNumber: "",
    medicalNoHeart: false,
    medicalNoAsthma: false,
    medicalNotPregnant: false,
    medicalFit: false,
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Participants() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/participants" });
  const navigate = useNavigate();
  const { bookingState, updateBookingState } = useBookingStore();
  const {
    selectedBatch,
    trekName,
    participants: storedParticipants,
  } = bookingState;

  const trek = useMemo(
    () =>
      treksData.find((t) => t.id === trekSlug || t.slug === trekSlug) ?? null,
    [trekSlug],
  );

  const count = storedParticipants.length || 2;

  const [forms, setForms] = useState<ParticipantFormData[]>(() =>
    Array.from({ length: count }, (_, i) => {
      const stored = storedParticipants[i];
      if (stored?.firstName) {
        return { ...emptyParticipant(), ...stored };
      }
      return emptyParticipant();
    }),
  );
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForms((prev) =>
      Array.from({ length: count }, (_, i) => prev[i] ?? emptyParticipant()),
    );
  }, [count]);

  function updateField<K extends keyof ParticipantFormData>(
    idx: number,
    key: K,
    value: ParticipantFormData[K],
  ) {
    setForms((prev) =>
      prev.map((f, i) => (i === idx ? { ...f, [key]: value } : f)),
    );
  }

  function validateAll(): boolean {
    const errs: Record<string, string> = {};
    forms.forEach((f, i) => {
      if (!f.firstName.trim()) errs[`${i}.firstName`] = "Required";
      if (!f.lastName.trim()) errs[`${i}.lastName`] = "Required";
      const ageNum = Number(f.age);
      if (!f.age || Number.isNaN(ageNum) || ageNum < 14 || ageNum > 80)
        errs[`${i}.age`] = "Age must be 14–80";
      if (!f.gender) errs[`${i}.gender`] = "Required";
      if (!f.mobile.trim() || !/^[6-9]\d{9}$/.test(f.mobile))
        errs[`${i}.mobile`] = "Valid 10-digit mobile required";
      if (!f.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(f.email))
        errs[`${i}.email`] = "Valid email required";
      if (!f.emergencyContactName.trim())
        errs[`${i}.emergencyContactName`] = "Required";
      if (
        !f.emergencyContactPhone.trim() ||
        !/^[6-9]\d{9}$/.test(f.emergencyContactPhone)
      )
        errs[`${i}.emergencyContactPhone`] = "Valid phone required";
      if (!f.govtIdType) errs[`${i}.govtIdType`] = "Required";
      if (!f.govtIdNumber.trim()) errs[`${i}.govtIdNumber`] = "Required";
      if (!f.medicalNoHeart) errs[`${i}.medicalNoHeart`] = "Required";
      if (!f.medicalNoAsthma) errs[`${i}.medicalNoAsthma`] = "Required";
      if (!f.medicalFit) errs[`${i}.medicalFit`] = "Required";
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleContinue() {
    setSubmitted(true);
    if (!validateAll()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) setActiveTab(Number(firstKey.split(".")[0]));
      return;
    }
    const savedParticipants: ParticipantData[] = forms.map((f) => ({
      firstName: f.firstName,
      lastName: f.lastName,
      age: f.age,
      gender: f.gender,
      mobile: f.mobile,
      email: f.email,
      emergencyContactName: f.emergencyContactName,
      emergencyContactPhone: f.emergencyContactPhone,
      medicalConditions: f.medicalConditions,
      govtIdType: f.govtIdType,
      govtIdNumber: f.govtIdNumber,
    }));
    updateBookingState({ participants: savedParticipants });
    navigate({ to: "/booking/$trekSlug/addons", params: { trekSlug } });
  }

  function fieldErr(idx: number, key: string) {
    const msg = errors[`${idx}.${key}`];
    return msg ? (
      <p
        className="text-xs text-red-500 mt-1"
        data-ocid={`participants.field_error.${idx}.${key}`}
      >
        {msg}
      </p>
    ) : null;
  }

  const trekDisplayName = trekName || trek?.name || trekSlug;

  return (
    <div className="min-h-screen" style={{ background: "#f8faf9" }}>
      <BookingProgress
        currentStep={2}
        trekName={trekDisplayName}
        trekSlug={trekSlug}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {selectedBatch && (
          <div
            className="rounded-xl border border-green-100 p-4 mb-6 flex flex-wrap gap-4 items-center"
            style={{ background: "white" }}
            data-ocid="participants.booking_summary"
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
              {count} participant{count !== 1 ? "s" : ""}
            </div>
            <Badge
              style={{
                background: "#e8f5ee",
                color: "#1A7A4C",
                border: "1px solid #c1e4ce",
              }}
            >
              ₹{selectedBatch.pricePerPerson.toLocaleString("en-IN")}/person
            </Badge>
          </div>
        )}

        {/* Participant Tabs */}
        <div
          className="flex gap-2 overflow-x-auto mb-4"
          data-ocid="participants.tabs"
        >
          {forms.map((_, i) => (
            <Fragment key={`participant-tab-${i + 1}`}>
              <button
                type="button"
                data-ocid={`participants.tab.${i + 1}`}
                onClick={() => setActiveTab(i)}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5"
                style={{
                  background: activeTab === i ? "#1A7A4C" : "white",
                  color: activeTab === i ? "white" : "#374151",
                  border: activeTab === i ? "none" : "1px solid #e5e7eb",
                }}
              >
                <User className="w-3.5 h-3.5" />
                Participant {i + 1}
                {submitted &&
                  Object.keys(errors).some((k) => k.startsWith(`${i}.`)) && (
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block ml-1" />
                  )}
              </button>
            </Fragment>
          ))}
        </div>

        {forms.map((form, idx) =>
          idx !== activeTab ? null : (
            <div
              key={`participant-form-${idx + 1}`}
              className="rounded-2xl border border-green-100 overflow-hidden"
              style={{ background: "white" }}
              data-ocid={`participants.form.${idx + 1}`}
            >
              <div
                className="px-6 pt-5 pb-4 border-b border-gray-100"
                style={{ background: "#f8faf9" }}
              >
                <h2
                  className="font-bold text-base"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1A7A4C",
                  }}
                >
                  Participant {idx + 1} — Personal Details
                </h2>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={form.firstName}
                      onChange={(e) =>
                        updateField(idx, "firstName", e.target.value)
                      }
                      placeholder="Rahul"
                      data-ocid={`participants.first_name.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "firstName")}
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={form.lastName}
                      onChange={(e) =>
                        updateField(idx, "lastName", e.target.value)
                      }
                      placeholder="Sharma"
                      data-ocid={`participants.last_name.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "lastName")}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Age <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      min={14}
                      max={80}
                      value={form.age}
                      onChange={(e) => updateField(idx, "age", e.target.value)}
                      placeholder="25"
                      data-ocid={`participants.age.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "age")}
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={form.gender}
                      onValueChange={(v) => updateField(idx, "gender", v)}
                    >
                      <SelectTrigger
                        data-ocid={`participants.gender.${idx + 1}`}
                        className="mt-1"
                      >
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">
                          Other / Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldErr(idx, "gender")}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={form.mobile}
                      onChange={(e) =>
                        updateField(
                          idx,
                          "mobile",
                          e.target.value.replace(/\D/g, "").slice(0, 10),
                        )
                      }
                      placeholder="9876543210"
                      data-ocid={`participants.mobile.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "mobile")}
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        updateField(idx, "email", e.target.value)
                      }
                      placeholder="rahul@email.com"
                      data-ocid={`participants.email.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "email")}
                  </div>
                </div>

                <div
                  className="rounded-lg p-4"
                  style={{ background: "#fff8e6", border: "1px solid #f4d078" }}
                >
                  <p className="text-xs font-semibold text-amber-700 mb-3 uppercase tracking-wide">
                    Emergency Contact
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        value={form.emergencyContactName}
                        onChange={(e) =>
                          updateField(
                            idx,
                            "emergencyContactName",
                            e.target.value,
                          )
                        }
                        placeholder="Parent / Spouse"
                        data-ocid={`participants.emergency_name.${idx + 1}`}
                        className="mt-1 bg-white"
                      />
                      {fieldErr(idx, "emergencyContactName")}
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        value={form.emergencyContactPhone}
                        onChange={(e) =>
                          updateField(
                            idx,
                            "emergencyContactPhone",
                            e.target.value.replace(/\D/g, "").slice(0, 10),
                          )
                        }
                        placeholder="9876543210"
                        data-ocid={`participants.emergency_phone.${idx + 1}`}
                        className="mt-1 bg-white"
                      />
                      {fieldErr(idx, "emergencyContactPhone")}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Govt ID Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={form.govtIdType}
                      onValueChange={(v) => updateField(idx, "govtIdType", v)}
                    >
                      <SelectTrigger
                        data-ocid={`participants.govt_id_type.${idx + 1}`}
                        className="mt-1"
                      >
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Aadhaar">Aadhaar Card</SelectItem>
                        <SelectItem value="Passport">Passport</SelectItem>
                        <SelectItem value="VoterID">Voter ID</SelectItem>
                        <SelectItem value="DrivingLicense">
                          Driving License
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldErr(idx, "govtIdType")}
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      ID Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={form.govtIdNumber}
                      onChange={(e) =>
                        updateField(
                          idx,
                          "govtIdNumber",
                          e.target.value.toUpperCase(),
                        )
                      }
                      placeholder="XXXX XXXX XXXX"
                      data-ocid={`participants.govt_id_number.${idx + 1}`}
                      className="mt-1"
                    />
                    {fieldErr(idx, "govtIdNumber")}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Medical Conditions (optional)
                  </Label>
                  <Textarea
                    value={form.medicalConditions}
                    onChange={(e) =>
                      updateField(idx, "medicalConditions", e.target.value)
                    }
                    placeholder="Any allergies, chronic conditions, medications... (leave blank if none)"
                    data-ocid={`participants.medical_conditions.${idx + 1}`}
                    className="mt-1 resize-none"
                    rows={3}
                  />
                </div>

                {/* Medical Declaration */}
                <div
                  className="rounded-xl p-5 space-y-3"
                  style={{ background: "#f0faf4", border: "1px solid #c1e4ce" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle
                      className="w-4 h-4"
                      style={{ color: "#1A7A4C" }}
                    />
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1A7A4C" }}
                    >
                      Medical Fitness Declaration{" "}
                      <span className="text-red-500">*</span>
                    </p>
                  </div>
                  {[
                    {
                      key: "medicalNoHeart" as const,
                      label:
                        "I confirm I have no history of heart disease or cardiac conditions",
                    },
                    {
                      key: "medicalNoAsthma" as const,
                      label:
                        "I confirm I have no history of asthma or respiratory conditions",
                    },
                    ...(form.gender !== "Male"
                      ? [
                          {
                            key: "medicalNotPregnant" as const,
                            label: "I confirm I am not currently pregnant",
                          },
                        ]
                      : []),
                    {
                      key: "medicalFit" as const,
                      label:
                        "I confirm I am medically fit for high-altitude trekking",
                    },
                  ].map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={form[key]}
                        onChange={(e) =>
                          updateField(idx, key, e.target.checked)
                        }
                        data-ocid={`participants.medical.${key}.${idx + 1}`}
                        className="mt-0.5 w-4 h-4 rounded accent-green-700 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 leading-snug">
                        {label}
                      </span>
                    </label>
                  ))}
                  {submitted &&
                    (errors[`${idx}.medicalNoHeart`] ||
                      errors[`${idx}.medicalFit`]) && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid={`participants.medical_error.${idx + 1}`}
                      >
                        Please confirm all required declarations
                      </p>
                    )}
                  {Number(form.age) >= 55 && (
                    <div
                      className="flex items-start gap-2 mt-2 p-3 rounded-lg"
                      style={{
                        background: "#fff8e6",
                        border: "1px solid #f4d078",
                      }}
                    >
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700">
                        <strong>Age 55+:</strong> Doctor clearance is strongly
                        recommended before high-altitude trekking.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ),
        )}

        <div className="flex gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              navigate({
                to: "/booking/$trekSlug/select-batch",
                params: { trekSlug },
              })
            }
            data-ocid="participants.back_button"
            className="flex-1 h-12 font-semibold"
            style={{ borderColor: "#1A7A4C", color: "#1A7A4C" }}
          >
            ← Back
          </Button>
          <Button
            onClick={handleContinue}
            data-ocid="participants.continue_button"
            className="flex-[2] h-12 text-base font-bold rounded-xl"
            style={{ background: "#F4A623", color: "white" }}
          >
            Continue to Add-ons <ChevronRight className="ml-1 w-5 h-5" />
          </Button>
        </div>
        {submitted && Object.keys(errors).length > 0 && (
          <p
            className="text-center text-sm text-red-500 mt-3"
            data-ocid="participants.error_state"
          >
            Please fix the highlighted errors to continue
          </p>
        )}
      </div>
    </div>
  );
}
