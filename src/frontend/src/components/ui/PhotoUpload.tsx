import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TrekPhotoInput } from "@/declarations/backend.did.d";
import { useActor } from "@caffeineai/core-infrastructure";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const YEARS = Array.from({ length: 7 }, (_, i) => 2020 + i);

interface PhotoFile {
  file: File;
  previewUrl: string;
  id: string;
}

interface PhotoUploadProps {
  trekSlug: string;
  trekName: string;
  onClose: () => void;
}

export function PhotoUpload({ trekSlug, trekName, onClose }: PhotoUploadProps) {
  const { actor } = useActor(createActor);
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [uploaderName, setUploaderName] = useState("");
  const [month, setMonth] = useState("December");
  const [year, setYear] = useState(2025);
  const [caption, setCaption] = useState("");
  const [isProfilePhoto, setIsProfilePhoto] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      const maxSize = 5 * 1024 * 1024;
      const remaining = 10 - photos.length;
      const validFiltered = Array.from(files)
        .slice(0, remaining)
        .filter((f) => validTypes.includes(f.type) && f.size <= maxSize);
      const newPhotos: PhotoFile[] = [];
      for (const file of validFiltered) {
        const previewUrl = URL.createObjectURL(file);
        newPhotos.push({
          file,
          previewUrl,
          id: `${Date.now()}-${Math.random()}`,
        });
      }
      setPhotos((prev) => [...prev, ...newPhotos]);
    },
    [photos.length],
  );

  const removePhoto = (id: string) => {
    setPhotos((prev) => {
      const photo = prev.find((p) => p.id === id);
      if (photo) URL.revokeObjectURL(photo.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || photos.length === 0) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const dateOfTrek = `${month} ${year}`;
      for (const photo of photos) {
        const input: TrekPhotoInput = {
          uploaderName,
          uploaderEmail: verifyEmail,
          trekSlug,
          storageUrl: photo.previewUrl,
          caption: caption.slice(0, 150),
          dateOfTrek,
          isProfilePhoto,
        };
        await actor.submitTrekPhoto(input);
      }
      setSubmitted(true);
      setStep(3);
    } catch {
      setSubmitError(`${t("common_error")}. Please try again.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      data-ocid="photo_upload.dialog"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <div className="relative bg-gradient-to-r from-green-800 to-green-600 p-5 text-white">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              data-ocid="photo_upload.close_button"
              className="absolute right-4 top-4 rounded-full p-1 text-white/70 transition-colors hover:text-white"
            >
              \u2715
            </button>
            <h2 className="text-lg font-bold">{t("photo_upload_title")}</h2>
            <p className="mt-0.5 text-sm text-white/80">{trekName}</p>
            <div className="mt-3 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
          <div className="max-h-[70vh] overflow-y-auto p-6">
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="space-y-4"
              >
                <div className="rounded-xl bg-green-50 p-4">
                  <h3 className="font-semibold text-green-900">
                    {t("photo_upload_verify")}
                  </h3>
                  <p className="mt-1 text-sm text-green-700">
                    We verify participation before publishing photos to maintain
                    community quality.
                  </p>
                </div>
                <div>
                  <Label htmlFor="verify-email">Email used for booking</Label>
                  <Input
                    id="verify-email"
                    type="email"
                    value={verifyEmail}
                    onChange={(e) => setVerifyEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-ocid="photo_upload.email_input"
                  />
                </div>
                <div>
                  <Label htmlFor="verify-trek">Trek</Label>
                  <Input
                    id="verify-trek"
                    value={trekName}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800"
                  data-ocid="photo_upload.verify_button"
                >
                  Verify &amp; Continue \u2192
                </Button>
              </form>
            )}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="button"
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) =>
                    e.key === "Enter" && fileInputRef.current?.click()
                  }
                  aria-label="Drop photos here or click to browse"
                  data-ocid="photo_upload.dropzone"
                  className={`w-full cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors ${dragOver ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-400"}`}
                >
                  <div className="text-3xl">\ud83d\udcf7</div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {t("photo_upload_cta")}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    JPEG, PNG, WebP \u00b7 max 5MB \u00b7 up to 10 photos
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                    data-ocid="photo_upload.file_input"
                  />
                </button>
                {photos.length > 0 && (
                  <div className="grid grid-cols-5 gap-2">
                    {photos.map((p) => (
                      <div
                        key={p.id}
                        className="group relative aspect-square overflow-hidden rounded-lg"
                      >
                        <img
                          src={p.previewUrl}
                          alt="preview"
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(p.id)}
                          aria-label="Remove photo"
                          className="absolute right-0.5 top-0.5 hidden rounded-full bg-red-500 px-1 text-xs text-white group-hover:block"
                        >
                          \u2715
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <Label htmlFor="uploader-name">Your Name</Label>
                  <Input
                    id="uploader-name"
                    value={uploaderName}
                    onChange={(e) => setUploaderName(e.target.value)}
                    placeholder="Rahul Mehta"
                    required
                    data-ocid="photo_upload.name_input"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label htmlFor="trek-month">Month of Trek</Label>
                    <select
                      id="trek-month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      data-ocid="photo_upload.month_select"
                    >
                      {MONTHS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-28">
                    <Label htmlFor="trek-year">Year</Label>
                    <select
                      id="trek-year"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                      className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      data-ocid="photo_upload.year_select"
                    >
                      {YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="caption">
                    {t("photo_upload_caption")}{" "}
                    <span className="ml-1 text-xs text-gray-400">
                      ({caption.length}/150)
                    </span>
                  </Label>
                  <textarea
                    id="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value.slice(0, 150))}
                    rows={2}
                    placeholder="A morning like no other at 12,500 ft..."
                    className="w-full resize-none rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    data-ocid="photo_upload.caption_input"
                  />
                </div>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isProfilePhoto}
                    onChange={(e) => setIsProfilePhoto(e.target.checked)}
                    data-ocid="photo_upload.profile_photo_toggle"
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">
                    Make this my profile photo
                  </span>
                </label>
                {submitError && (
                  <p className="text-sm text-red-600">{submitError}</p>
                )}
                <div className="flex gap-3 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                    data-ocid="photo_upload.back_button"
                  >
                    \u2190 Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      submitting || photos.length === 0 || !uploaderName
                    }
                    className="flex-1 bg-green-700 hover:bg-green-800"
                    data-ocid="photo_upload.submit_button"
                  >
                    {submitting ? "Submitting..." : t("photo_upload_submit")}
                  </Button>
                </div>
              </form>
            )}
            {step === 3 && submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center"
                data-ocid="photo_upload.success_state"
              >
                <div className="text-5xl">\ud83c\udf89</div>
                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  Photos submitted for review!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  They'll appear in the community gallery within 24 hours.
                </p>
                <div className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
                  Photos are reviewed before publishing to maintain quality.
                </div>
                <Button
                  type="button"
                  onClick={onClose}
                  className="mt-6 w-full bg-green-700 hover:bg-green-800"
                  data-ocid="photo_upload.done_button"
                >
                  Done
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
