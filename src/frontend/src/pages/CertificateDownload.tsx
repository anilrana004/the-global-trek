import { createActor } from "@/backend";
import type { TrekCertificate } from "@/backend";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Download, Linkedin, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function MountainWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 200"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity: 0.06 }}
    >
      <polygon points="200,20 80,160 320,160" fill="#1A7A4C" />
      <polygon points="90,90 20,160 160,160" fill="#1A7A4C" />
      <polygon points="320,60 240,160 380,160" fill="#1A7A4C" />
      <polygon points="155,100 120,160 190,160" fill="#1A7A4C" opacity="0.5" />
      <polygon points="280,110 255,160 315,160" fill="#1A7A4C" opacity="0.5" />
    </svg>
  );
}

function OrnateCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<string, string> = {
    tl: "rotate(0)",
    tr: "rotate(90)",
    br: "rotate(180)",
    bl: "rotate(270)",
  };
  return (
    <svg
      viewBox="0 0 40 40"
      className="absolute w-10 h-10"
      style={{
        top: position.startsWith("t") ? 8 : "auto",
        bottom: position.startsWith("b") ? 8 : "auto",
        left: position.endsWith("l") ? 8 : "auto",
        right: position.endsWith("r") ? 8 : "auto",
        transform: transforms[position],
        color: "#1A7A4C",
      }}
      aria-hidden="true"
    >
      <path
        d="M4 4 L20 4 M4 4 L4 20"
        stroke="#1A7A4C"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 8 L16 8 M8 8 L8 16"
        stroke="#22A05E"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <circle cx="4" cy="4" r="2" fill="#1A7A4C" />
    </svg>
  );
}

function CertificateBody({ cert }: { cert: TrekCertificate }) {
  const certUrl = `${window.location.origin}/certificate/${cert.certificateCode}`;

  return (
    <div
      id="certificate-body"
      className="relative bg-white"
      style={{
        width: "100%",
        minHeight: 480,
        border: "3px solid #1A7A4C",
        borderRadius: 8,
        padding: "48px 56px",
        boxSizing: "border-box",
        fontFamily: "var(--gt-font-body, 'DM Sans', sans-serif)",
      }}
    >
      {/* Inner ornate border */}
      <div
        style={{
          position: "absolute",
          inset: 8,
          border: "1px solid #22A05E",
          borderRadius: 4,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Ornate corners */}
      <OrnateCorner position="tl" />
      <OrnateCorner position="tr" />
      <OrnateCorner position="bl" />
      <OrnateCorner position="br" />

      {/* Watermark */}
      <MountainWatermark />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Header */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#1A7A4C",
            fontWeight: 800,
            fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
            marginBottom: 4,
          }}
        >
          Global Trek
        </p>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#0A2E1A",
            fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          Certificate of Achievement
        </h1>
        <p
          style={{
            fontSize: 13,
            fontStyle: "italic",
            color: "#6B7280",
            marginBottom: 20,
          }}
        >
          Where Every Trail Tells a Story
        </p>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{ flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }}
          />
          <span style={{ color: "#1A7A4C", fontSize: 16 }}>⛰</span>
          <div
            style={{ flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }}
          />
        </div>

        {/* Body text */}
        <p
          style={{
            fontSize: 14,
            fontStyle: "italic",
            color: "#6B7280",
            marginBottom: 8,
          }}
        >
          This certifies that
        </p>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
            color: "#0A2E1A",
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          Trek Achiever
        </h2>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 6 }}>
          has successfully completed the
        </p>
        <h3
          style={{
            fontSize: 26,
            fontWeight: 700,
            fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
            color: "#1A7A4C",
            marginBottom: 8,
          }}
        >
          {cert.trekName}
        </h3>
        <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>
          reaching an altitude of{" "}
          <strong style={{ color: "#1A7A4C" }}>{cert.maxAltitude}</strong> on{" "}
          {cert.completedDate}
        </p>

        {/* Stats chips */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: cert.duration, sub: "Duration" },
            { label: cert.maxAltitude, sub: "Altitude" },
            { label: cert.trekName, sub: "Trek" },
          ].map((chip) => (
            <div
              key={chip.sub}
              style={{
                background: "#E8F5EE",
                border: "1px solid #22A05E",
                borderRadius: 999,
                padding: "4px 16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#145C38",
                  fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
                }}
              >
                {chip.label}
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "#6B7280",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {chip.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{ flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }}
          />
          <span style={{ color: "#1A7A4C", fontSize: 14 }}>🏔</span>
          <div
            style={{ flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }}
          />
        </div>

        {/* Footer row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Trek Leader */}
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                width: 100,
                height: 1,
                background: "#0A2E1A",
                marginBottom: 4,
              }}
            />
            <p
              style={{
                fontSize: 11,
                color: "#6B7280",
                fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Trek Leader
            </p>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0A2E1A",
              }}
            >
              {cert.guideName}
            </p>
          </div>

          {/* Center branding + QR */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#145C38",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 4px",
              }}
            >
              <span style={{ color: "white", fontSize: 18, fontWeight: 900 }}>
                G
              </span>
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#145C38",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
              }}
            >
              GLOBAL TREK
            </p>
            <p style={{ fontSize: 9, color: "#6B7280", fontStyle: "italic" }}>
              Where Every Trail Tells a Story
            </p>
          </div>

          {/* QR code + cert ID */}
          <div style={{ textAlign: "right" }}>
            {/* Simple QR-like visual with cert code as fallback */}
            <div
              style={{
                width: 64,
                height: 64,
                border: "2px solid #1A7A4C",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginBottom: 4,
                background: "#F0FAF4",
                overflow: "hidden",
              }}
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(certUrl)}&color=145C38&bgcolor=F0FAF4`}
                alt="Verification QR"
                width={60}
                height={60}
                style={{ imageRendering: "pixelated" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p
              style={{
                fontSize: 9,
                color: "#6B7280",
                letterSpacing: "0.05em",
                fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
              }}
            >
              Scan to verify
            </p>
          </div>
        </div>

        {/* Certificate ID */}
        <p
          style={{
            marginTop: 16,
            fontSize: 10,
            fontFamily: "monospace",
            color: "#9CA3AF",
            letterSpacing: "0.05em",
          }}
        >
          Certificate ID: GT-{cert.certificateCode}
        </p>
      </div>
    </div>
  );
}

export default function CertificateDownload() {
  const { certCode } = useParams({ strict: false }) as { certCode: string };
  const { actor, isFetching } = useActor(createActor);
  const [cert, setCert] = useState<TrekCertificate | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!actor || isFetching || !certCode) return;
    async function load() {
      if (!actor) return;
      setLoading(true);
      try {
        const result = await actor.getCertificate(certCode);
        if (result) {
          setCert(result);
        } else {
          setNotFound(true);
        }
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [actor, isFetching, certCode]);

  const certUrl = `${window.location.origin}/certificate/${certCode}`;
  const trekName = cert?.trekName ?? "Himalayan Trek";
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(certUrl)}&title=${encodeURIComponent(`I completed ${trekName} with Global Trek`)}&summary=${encodeURIComponent(`I successfully summited ${trekName}! Certified by Global Trek — India's most trusted Himalayan trekking company.`)}`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(`🏔 I just completed the ${trekName}! View my certificate: ${certUrl}`)}`;

  if (loading) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center px-4"
        data-ocid="certificate.loading_state"
      >
        <div className="w-full max-w-3xl space-y-4">
          <Skeleton className="h-12 w-48 mx-auto" />
          <Skeleton className="h-[480px] w-full rounded-2xl" />
          <div className="flex gap-3 justify-center">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !cert) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center"
        data-ocid="certificate.error_state"
      >
        <div
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
          style={{ background: "#E8F5EE" }}
        >
          🏔
        </div>
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
        >
          Certificate Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          The certificate code <strong>{certCode}</strong> does not exist or has
          been revoked.
        </p>
        <Link to="/">
          <Button
            className="text-white font-bold"
            style={{ background: "#145C38" }}
            data-ocid="certificate.back_home_button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          #certificate-body { border-radius: 0; box-shadow: none; }
          @page { size: A4 landscape; margin: 10mm; }
        }
      `}</style>

      <div
        ref={pageRef}
        className="min-h-screen bg-muted/30"
        style={{ paddingTop: 90 }}
        data-ocid="certificate.page"
      >
        {/* No-print header */}
        <div className="no-print py-6 px-4 max-w-4xl mx-auto">
          <Link
            to="/account/certificates"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="certificate.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Certificates
          </Link>
        </div>

        {/* Certificate document */}
        <div className="px-4 pb-8 max-w-4xl mx-auto">
          <CertificateBody cert={cert} />
        </div>

        {/* Action buttons — no-print */}
        <div className="no-print max-w-4xl mx-auto px-4 pb-12 flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => window.print()}
            className="text-white font-bold"
            style={{ background: "#145C38" }}
            data-ocid="certificate.download_button"
          >
            <Download className="w-4 h-4 mr-2" />
            Download / Print Certificate
          </Button>
          <Button
            onClick={() =>
              window.open(linkedInUrl, "_blank", "noopener,noreferrer")
            }
            variant="outline"
            className="font-bold"
            style={{ borderColor: "#0A66C2", color: "#0A66C2" }}
            data-ocid="certificate.linkedin_button"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Share on LinkedIn
          </Button>
          <Button
            onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
            variant="outline"
            className="font-bold"
            style={{ borderColor: "#25D366", color: "#128C7E" }}
            data-ocid="certificate.whatsapp_button"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share on WhatsApp
          </Button>
          <Link to="/account/dashboard">
            <Button
              variant="ghost"
              className="text-muted-foreground"
              data-ocid="certificate.dashboard_link"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
