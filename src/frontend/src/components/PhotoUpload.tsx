import { createActor } from "@/backend";
import type { TrekPhotoInput } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Camera, CheckCircle, Loader2, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface PhotoUploadProps {
  trekSlug: string;
  trekName: string;
  onClose: () => void;
}

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

export default function PhotoUpload({
  trekSlug,
  trekName,
  onClose,
}: PhotoUploadProps) {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    uploaderName: "",
    uploaderEmail: "",
    caption: "",
    dateOfTrek: "",
    isProfilePhoto: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (input: TrekPhotoInput) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitTrekPhoto(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approvedPhotos"] });
      queryClient.invalidateQueries({ queryKey: ["approvedPhotosByTrek"] });
      setSubmitted(true);
    },
    onError: () => {
      toast.error("Failed to submit photo. Please try again.");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be under 10MB.");
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preview) {
      toast.error("Please select a photo first.");
      return;
    }
    if (!form.uploaderName.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!form.uploaderEmail.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!form.dateOfTrek) {
      toast.error("Please select when you trekked.");
      return;
    }

    const input: TrekPhotoInput = {
      uploaderName: form.uploaderName.trim(),
      uploaderEmail: form.uploaderEmail.trim(),
      caption: form.caption.trim(),
      dateOfTrek: form.dateOfTrek,
      trekSlug,
      storageUrl: preview, // In production: upload to object-storage first
      isProfilePhoto: form.isProfilePhoto,
    };
    mutation.mutate(input);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
      data-ocid="photo_upload.dialog"
    >
      <div
        className="bg-background rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 bg-background rounded-t-2xl z-10">
          <div className="flex items-center gap-2">
            <Camera size={20} className="text-primary" />
            <h2
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Share Your Trek Photo
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            data-ocid="photo_upload.close_button"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Close"
          >
            <X size={16} className="text-foreground" />
          </button>
        </div>

        {/* Success State */}
        {submitted ? (
          <div
            className="flex flex-col items-center justify-center px-8 py-16 text-center"
            data-ocid="photo_upload.success_state"
          >
            <CheckCircle size={56} className="text-primary mb-4" />
            <h3
              className="text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Photo Submitted!
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Thank you for sharing your journey! Your photo will appear in the
              Community Gallery after our team reviews it (usually within 24
              hours).
            </p>
            <Button
              onClick={onClose}
              className="bg-primary text-white"
              data-ocid="photo_upload.confirm_button"
            >
              Back to Gallery
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Photo Drop Zone */}
            <div>
              <Label className="block text-sm font-semibold text-foreground mb-2">
                Your Photo *
              </Label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                data-ocid="photo_upload.upload_button"
                className="w-full border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 py-8 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                aria-label="Click to upload photo"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-h-40 rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <Upload size={32} className="text-muted-foreground" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Click to upload your trek photo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG, WebP · Max 10MB
                    </p>
                  </>
                )}
              </button>
              {fileName && (
                <p className="text-xs text-muted-foreground mt-1">
                  📎 {fileName}
                </p>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Select photo file"
                data-ocid="photo_upload.dropzone"
              />
            </div>

            {/* Trek Info */}
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <p
                className="text-xs text-primary font-semibold uppercase tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Trek: {trekName}
              </p>
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="uploaderName" className="text-sm font-semibold">
                Your Name *
              </Label>
              <Input
                id="uploaderName"
                placeholder="e.g. Rahul Mehta"
                value={form.uploaderName}
                onChange={(e) =>
                  setForm({ ...form, uploaderName: e.target.value })
                }
                className="mt-1"
                data-ocid="photo_upload.input"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="uploaderEmail" className="text-sm font-semibold">
                Email *
              </Label>
              <Input
                id="uploaderEmail"
                type="email"
                placeholder="your@email.com"
                value={form.uploaderEmail}
                onChange={(e) =>
                  setForm({ ...form, uploaderEmail: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            {/* Month of Trek */}
            <div>
              <Label htmlFor="dateOfTrek" className="text-sm font-semibold">
                When did you trek? *
              </Label>
              <select
                id="dateOfTrek"
                value={form.dateOfTrek}
                onChange={(e) =>
                  setForm({ ...form, dateOfTrek: e.target.value })
                }
                className="mt-1 w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                data-ocid="photo_upload.select"
                required
              >
                <option value="">Select month & year</option>
                {["2026", "2025", "2024"].flatMap((y) =>
                  MONTHS.map((m) => (
                    <option key={`${m}-${y}`} value={`${m} ${y}`}>
                      {m} {y}
                    </option>
                  )),
                )}
              </select>
            </div>

            {/* Caption */}
            <div>
              <Label htmlFor="caption" className="text-sm font-semibold">
                Caption{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="caption"
                placeholder="Share a line about this moment…"
                value={form.caption}
                onChange={(e) => setForm({ ...form, caption: e.target.value })}
                className="mt-1 resize-none"
                rows={2}
                data-ocid="photo_upload.textarea"
              />
            </div>

            {/* Profile photo toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isProfilePhoto"
                checked={form.isProfilePhoto}
                onChange={(e) =>
                  setForm({ ...form, isProfilePhoto: e.target.checked })
                }
                className="rounded border-border"
                data-ocid="photo_upload.checkbox"
              />
              <Label
                htmlFor="isProfilePhoto"
                className="text-sm cursor-pointer"
              >
                Use as my profile photo on Global Trek
              </Label>
            </div>

            <p className="text-xs text-muted-foreground">
              By submitting, you confirm this is your original photo and grant
              Global Trek permission to feature it on the website and social
              media.
            </p>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-primary text-white py-3 font-bold"
              data-ocid="photo_upload.submit_button"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  Submitting…
                </>
              ) : (
                <>
                  <Camera size={16} className="mr-2" />
                  Submit Photo for Review
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
