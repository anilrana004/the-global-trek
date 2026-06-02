import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronRight,
  Clock,
  FileText,
  MapPin,
  Mountain,
  Phone,
  Plus,
  TrendingUp,
  User,
} from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

// ─── Progress ─────────────────────────────────────────────────────────────────
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

// ─── Trek summary sticky ──────────────────────────────────────────────────────
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
      altitude: "3,810m",
      difficulty: "Easy to Moderate",
    },
    "chopta-tungnath": {
      name: "Chopta Tungnath Trek",
      location: "Chopta, Uttarakhand",
      duration: "3 Days / 2 Nights",
      altitude: "4,000m",
      difficulty: "Easy to Moderate",
    },
    "hampta-pass": {
      name: "Hampta Pass Trek",
      location: "Manali, Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      altitude: "4,270m",
      difficulty: "Moderate",
    },
    "har-ki-dun": {
      name: "Har Ki Dun Trek",
      location: "Sankri, Uttarkashi",
      duration: "8 Days / 7 Nights",
      altitude: "3,566m",
      difficulty: "Moderate",
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
    <div className="sticky top-0 z-20 bg-white border-b border-[var(--gt-green-100)] shadow-sm">
      <div
        className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center"
        data-ocid="participants.trek_summary"
      >
        <div className="flex items-center gap-2">
          <Mountain className="w-4 h-4 text-[var(--gt-green-700)]" />
          <span className="font-semibold font-display text-[var(--gt-green-900)] text-sm">
            {trek.name}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[var(--gt-gray-600)]">
          <MapPin className="w-3 h-3" />
          {trek.location}
        </div>
        <div className="flex items-center gap-1 text-xs text-[var(--gt-gray-600)]">
          <Clock className="w-3 h-3" />
          {trek.duration}
        </div>
        <div className="flex items-center gap-1 text-xs text-[var(--gt-gray-600)]">
          <TrendingUp className="w-3 h-3" />
          {trek.altitude}
        </div>
        <Badge
          variant="secondary"
          className="bg-[var(--gt-green-100)] text-[var(--gt-green-800)] border-[var(--gt-green-500)]/30 font-mono text-xs"
        >
          {trek.difficulty}
        </Badge>
      </div>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface ParticipantForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  mobile: string;
  email?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  medicalConditions?: string;
  govtIdType: string;
  govtIdNumber: string;
  idFile?: FileList;
  isFit: boolean;
  readPolicy: boolean;
}

interface FormValues {
  participants: ParticipantForm[];
}

const DEFAULT_PARTICIPANT: ParticipantForm = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  mobile: "",
  email: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  emergencyContactRelation: "",
  medicalConditions: "",
  govtIdType: "",
  govtIdNumber: "",
  isFit: false,
  readPolicy: false,
};

function validateAge(dob: string): boolean {
  if (!dob) return false;
  const age =
    (Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return age >= 14;
}

// ─── Participant form section ─────────────────────────────────────────────────
function ParticipantSection({
  index,
  isLead,
  register,
  errors,
  setValue,
  watch,
}: {
  index: number;
  isLead: boolean;
  register: ReturnType<typeof useForm<FormValues>>["register"];
  errors: ReturnType<typeof useForm<FormValues>>["formState"]["errors"];
  setValue: ReturnType<typeof useForm<FormValues>>["setValue"];
  watch: ReturnType<typeof useForm<FormValues>>["watch"];
}) {
  const errs = errors.participants?.[index];
  const isFitValue = watch(`participants.${index}.isFit`);
  const readPolicyValue = watch(`participants.${index}.readPolicy`);

  return (
    <div
      className="bg-white rounded-xl border border-[var(--gt-gray-200)] p-6 space-y-5"
      data-ocid={`participant.form.${index + 1}`}
    >
      <div className="flex items-center gap-3 pb-3 border-b border-[var(--gt-gray-100)]">
        <div className="w-8 h-8 rounded-full bg-[var(--gt-green-700)] text-white flex items-center justify-center text-sm font-bold font-mono">
          {index + 1}
        </div>
        <h3 className="font-semibold text-[var(--gt-green-900)] font-display">
          {isLead ? "Lead Trekker" : `Trekker ${index + 1}`}
        </h3>
        {isLead && (
          <Badge className="bg-[var(--gt-amber)] text-white border-0 font-mono text-xs">
            Lead
          </Badge>
        )}
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
            First Name <span className="text-[var(--gt-red)]">*</span>
          </Label>
          <Input
            {...register(`participants.${index}.firstName`, {
              required: "First name is required",
            })}
            placeholder="Rahul"
            data-ocid={`participant.first_name.${index + 1}`}
            className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
          />
          {errs?.firstName && (
            <p
              className="text-xs text-[var(--gt-red)]"
              data-ocid={`participant.first_name_error.${index + 1}`}
            >
              {errs.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
            Last Name <span className="text-[var(--gt-red)]">*</span>
          </Label>
          <Input
            {...register(`participants.${index}.lastName`, {
              required: "Last name is required",
            })}
            placeholder="Sharma"
            data-ocid={`participant.last_name.${index + 1}`}
            className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
          />
          {errs?.lastName && (
            <p
              className="text-xs text-[var(--gt-red)]"
              data-ocid={`participant.last_name_error.${index + 1}`}
            >
              {errs.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* DOB + Gender */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
            Date of Birth <span className="text-[var(--gt-red)]">*</span>
          </Label>
          <Input
            type="date"
            {...register(`participants.${index}.dateOfBirth`, {
              required: "DOB required",
              validate: (v) =>
                validateAge(v) || "Must be at least 14 years old",
            })}
            data-ocid={`participant.dob.${index + 1}`}
            className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
          />
          {errs?.dateOfBirth && (
            <p
              className="text-xs text-[var(--gt-red)]"
              data-ocid={`participant.dob_error.${index + 1}`}
            >
              {errs.dateOfBirth.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
            Gender <span className="text-[var(--gt-red)]">*</span>
          </Label>
          <select
            {...register(`participants.${index}.gender`, {
              required: "Gender required",
            })}
            className="w-full border border-[var(--gt-gray-200)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--gt-green-700)] bg-white"
            data-ocid={`participant.gender.${index + 1}`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errs?.gender && (
            <p
              className="text-xs text-[var(--gt-red)]"
              data-ocid={`participant.gender_error.${index + 1}`}
            >
              {errs.gender.message}
            </p>
          )}
        </div>
      </div>

      {/* Mobile + Email (lead only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase flex items-center gap-1">
            <Phone className="w-3 h-3" />
            Mobile <span className="text-[var(--gt-red)]">*</span>
          </Label>
          <Input
            {...register(`participants.${index}.mobile`, {
              required: "Mobile required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter valid 10-digit Indian mobile",
              },
            })}
            placeholder="9876543210"
            maxLength={10}
            data-ocid={`participant.mobile.${index + 1}`}
            className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
          />
          {errs?.mobile && (
            <p
              className="text-xs text-[var(--gt-red)]"
              data-ocid={`participant.mobile_error.${index + 1}`}
            >
              {errs.mobile.message}
            </p>
          )}
        </div>
        {isLead && (
          <div className="space-y-1.5">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
              Email ID <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <Input
              type="email"
              {...register(`participants.${index}.email`, {
                required: isLead ? "Email required for lead trekker" : false,
              })}
              placeholder="rahul@email.com"
              data-ocid="participant.email.lead"
              className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
            />
            {errs?.email && (
              <p
                className="text-xs text-[var(--gt-red)]"
                data-ocid="participant.email_error.lead"
              >
                {errs.email.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Emergency contact */}
      <div className="bg-[var(--gt-gray-50)] rounded-lg p-4 space-y-3">
        <p className="text-xs font-mono text-[var(--gt-gray-600)] uppercase font-semibold flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" />
          Emergency Contact
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)]">
              Name <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <Input
              {...register(`participants.${index}.emergencyContactName`, {
                required: "Required",
              })}
              placeholder="Priya Sharma"
              data-ocid={`participant.emergency_name.${index + 1}`}
              className="border-[var(--gt-gray-200)] bg-white text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)]">
              Phone <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <Input
              {...register(`participants.${index}.emergencyContactPhone`, {
                required: "Required",
                pattern: { value: /^[6-9]\d{9}$/, message: "Invalid" },
              })}
              placeholder="9876543210"
              data-ocid={`participant.emergency_phone.${index + 1}`}
              className="border-[var(--gt-gray-200)] bg-white text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)]">
              Relation <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <select
              {...register(`participants.${index}.emergencyContactRelation`, {
                required: "Required",
              })}
              className="w-full border border-[var(--gt-gray-200)] rounded-md px-2 py-2 text-sm bg-white"
              data-ocid={`participant.emergency_relation.${index + 1}`}
            >
              <option value="">Select</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="spouse">Spouse</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Medical + ID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
            Medical Conditions (optional)
          </Label>
          <textarea
            {...register(`participants.${index}.medicalConditions`)}
            rows={2}
            placeholder="Asthma, heart condition, allergies..."
            className="w-full border border-[var(--gt-gray-200)] rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:border-[var(--gt-green-700)]"
            data-ocid={`participant.medical.${index + 1}`}
          />
        </div>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Govt ID Type <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <select
              {...register(`participants.${index}.govtIdType`, {
                required: "ID type required",
              })}
              className="w-full border border-[var(--gt-gray-200)] rounded-md px-3 py-2 text-sm bg-white"
              data-ocid={`participant.id_type.${index + 1}`}
            >
              <option value="">Select ID type</option>
              <option value="aadhaar">Aadhaar Card</option>
              <option value="passport">Passport</option>
              <option value="voter_id">Voter ID</option>
              <option value="driving_license">Driving License</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
              ID Number <span className="text-[var(--gt-red)]">*</span>
            </Label>
            <Input
              {...register(`participants.${index}.govtIdNumber`, {
                required: "ID number required",
              })}
              placeholder="XXXX XXXX XXXX"
              data-ocid={`participant.id_number.${index + 1}`}
              className="border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]"
            />
          </div>
        </div>
      </div>

      {/* Upload ID */}
      <div className="space-y-1.5">
        <Label className="font-mono text-xs text-[var(--gt-gray-600)] uppercase">
          Upload ID Document
        </Label>
        <label
          className="flex items-center gap-3 border-2 border-dashed border-[var(--gt-gray-200)] rounded-lg px-4 py-3 cursor-pointer hover:border-[var(--gt-green-500)] transition-colors"
          data-ocid={`participant.upload_button.${index + 1}`}
        >
          <User className="w-5 h-5 text-[var(--gt-gray-400)]" />
          <span className="text-sm text-[var(--gt-gray-600)]">
            Click to upload JPG, PNG or PDF
          </span>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            {...register(`participants.${index}.idFile`)}
            className="hidden"
          />
        </label>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3 pt-2 border-t border-[var(--gt-gray-100)]">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={isFitValue}
            onCheckedChange={(v) =>
              setValue(`participants.${index}.isFit`, !!v)
            }
            id={`fit-${index}`}
            className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
            data-ocid={`participant.fitness_checkbox.${index + 1}`}
          />
          <label
            htmlFor={`fit-${index}`}
            className="text-sm text-[var(--gt-gray-900)] cursor-pointer"
          >
            I confirm I am <strong>physically fit</strong> and have no medical
            condition that would prevent me from completing the trek.
          </label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            checked={readPolicyValue}
            onCheckedChange={(v) =>
              setValue(`participants.${index}.readPolicy`, !!v)
            }
            id={`policy-${index}`}
            className="border-[var(--gt-green-700)] data-[state=checked]:bg-[var(--gt-green-700)] mt-0.5"
            data-ocid={`participant.policy_checkbox.${index + 1}`}
          />
          <label
            htmlFor={`policy-${index}`}
            className="text-sm text-[var(--gt-gray-900)] cursor-pointer"
          >
            I have read and agree to the{" "}
            <a
              href="/cancellation-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gt-green-700)] underline underline-offset-2"
            >
              Cancellation & Refund Policy
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const COUNT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Participants() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/participants" });
  const navigate = useNavigate();
  const [trekkerCount, setTrekkerCount] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormValues>({
    defaultValues: { participants: [{ ...DEFAULT_PARTICIPANT }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
  });

  function handleCountChange(count: number) {
    setTrekkerCount(count);
    const current = fields.length;
    if (count > current) {
      for (let i = 0; i < count - current; i++)
        append({ ...DEFAULT_PARTICIPANT });
    } else {
      for (let i = current; i > count; i--) remove(i - 1);
    }
  }

  function onSubmit() {
    void navigate({ to: "/booking/$trekSlug/addons", params: { trekSlug } });
  }

  return (
    <div className="min-h-screen bg-[var(--gt-green-50)]">
      <TrekSummaryBox slug={trekSlug} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <BookingProgress current={1} />

        <div className="mb-8">
          <h1 className="text-2xl font-bold font-display text-[var(--gt-green-900)]">
            Participant Details
          </h1>
          <p className="text-[var(--gt-gray-600)] text-sm mt-1">
            Please fill in accurate details for each trekker
          </p>
        </div>

        {/* Trekker count selector */}
        <div className="bg-white rounded-xl border border-[var(--gt-gray-200)] p-5 mb-6">
          <p className="text-sm font-semibold font-mono text-[var(--gt-gray-600)] uppercase mb-3">
            Number of Trekkers
          </p>
          <div
            className="flex flex-wrap gap-2"
            data-ocid="participants.count_selector"
          >
            {COUNT_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleCountChange(n)}
                className={`w-10 h-10 rounded-lg font-bold font-mono text-sm border-2 transition-all ${
                  trekkerCount === n
                    ? "bg-[var(--gt-green-700)] border-[var(--gt-green-700)] text-white"
                    : "border-[var(--gt-gray-200)] text-[var(--gt-gray-700)] hover:border-[var(--gt-green-500)]"
                }`}
                data-ocid={`participants.count_${n}`}
              >
                {n === 9 ? "9+" : n}
              </button>
            ))}
          </div>
          {trekkerCount >= 6 && (
            <p className="mt-2 text-sm text-[var(--gt-green-700)] font-semibold">
              🎉 Group discount of 10% will be applied automatically at
              checkout!
            </p>
          )}
        </div>

        {/* Forms */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          data-ocid="participants.form"
        >
          {fields.map((field, index) => (
            <ParticipantSection
              key={field.id}
              index={index}
              isLead={index === 0}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
          ))}

          {/* Add another trekker */}
          {trekkerCount < 9 && (
            <button
              type="button"
              onClick={() => handleCountChange(trekkerCount + 1)}
              className="w-full border-2 border-dashed border-[var(--gt-green-500)] rounded-xl py-4 flex items-center justify-center gap-2 text-[var(--gt-green-700)] font-semibold hover:bg-[var(--gt-green-50)] transition-colors"
              data-ocid="participants.add_trekker_button"
            >
              <Plus className="w-4 h-4" /> Add Another Trekker
            </button>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white px-8 py-3 rounded-xl font-semibold font-mono text-base gap-2"
              data-ocid="participants.continue_button"
            >
              Continue to Add-Ons <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
