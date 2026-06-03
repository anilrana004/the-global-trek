import { createActor } from "@/backend";
import type { TrekCertificate } from "@/backend";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import { Download, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function MountainWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 100"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity: 0.04 }}
    >
      <polygon points="100,10 40,80 160,80" fill="#145C38" />
      <polygon points="55,45 20,80 90,80" fill="#145C38" />
      <polygon points="150,30 115,80 185,80" fill="#145C38" />
    </svg>
  );
}

function CertificateCard({ cert }: { cert: TrekCertificate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
      data-ocid="certificates.card"
    >
      <div
        className="relative overflow-hidden rounded-2xl p-1"
        style={{ border: "4px solid #145C38" }}
      >
        <div
          className="relative rounded-xl p-8 text-center"
          style={{ border: "2px dashed #22A05E", background: "#F0FAF4" }}
        >
          <MountainWatermark />
          <div className="relative z-10 space-y-3">
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-black tracking-[0.25em] uppercase mb-2"
              style={{
                background: "#145C38",
                color: "white",
                fontFamily: "var(--gt-font-label)",
              }}
            >
              Global Trek
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase font-bold"
              style={{ color: "#1A7A4C", fontFamily: "var(--gt-font-label)" }}
            >
              Certificate of Completion
            </p>
            <div className="flex items-center gap-3 justify-center">
              <div className="h-px flex-1" style={{ background: "#22A05E" }} />
              <span style={{ color: "#22A05E" }}>⛰</span>
              <div className="h-px flex-1" style={{ background: "#22A05E" }} />
            </div>
            <p
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "var(--gt-font-body)" }}
            >
              This is to certify that
            </p>
            <h2
              className="text-3xl font-bold italic"
              style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
            >
              {`${cert.trekName
                .replace(
                  /(\w+)/g,
                  (w) => w.charAt(0).toUpperCase() + w.slice(1),
                )
                .split(" ")
                .slice(0, 2)
                .join(" ")} Trekker`}
            </h2>
            <p className="text-xs text-muted-foreground">
              has successfully completed
            </p>
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--gt-font-display)", color: "#145C38" }}
            >
              {cert.trekName}
            </h3>
            <p className="text-sm text-muted-foreground italic">
              Max Altitude: {cert.maxAltitude}
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <div className="text-center">
                <p
                  className="text-lg font-black"
                  style={{
                    color: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                >
                  {cert.maxAltitude}
                </p>
                <p
                  className="text-[10px] tracking-wider uppercase text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Max Altitude
                </p>
              </div>
              <div className="w-px" style={{ background: "#22A05E" }} />
              <div className="text-center">
                <p
                  className="text-lg font-black"
                  style={{
                    color: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                >
                  {cert.duration}
                </p>
                <p
                  className="text-[10px] tracking-wider uppercase text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Duration
                </p>
              </div>
              <div className="w-px" style={{ background: "#22A05E" }} />
              <div className="text-center">
                <p
                  className="text-lg font-black"
                  style={{
                    color: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                >
                  {cert.trekSlug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <p
                  className="text-[10px] tracking-wider uppercase text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Region
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center mt-3">
              <div className="h-px flex-1" style={{ background: "#22A05E" }} />
              <span style={{ color: "#22A05E" }}>🏔</span>
              <div className="h-px flex-1" style={{ background: "#22A05E" }} />
            </div>
            <div className="flex justify-between items-end pt-2">
              <div className="text-left">
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Date
                </p>
                <p
                  className="text-sm font-bold"
                  style={{
                    color: "#0A2E1A",
                    fontFamily: "var(--gt-font-body)",
                  }}
                >
                  {cert.completedDate}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white text-xs font-black"
                  style={{
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)",
                  }}
                >
                  GT
                </div>
                <p
                  className="text-[9px] text-muted-foreground mt-1"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  GLOBAL TREK
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--gt-font-label)" }}
                >
                  Trek Leader
                </p>
                <p
                  className="text-sm font-bold"
                  style={{
                    color: "#0A2E1A",
                    fontFamily: "var(--gt-font-body)",
                  }}
                >
                  {cert.guideName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Link
          to="/certificate/$certCode"
          params={{ certCode: cert.certificateCode }}
          className="flex-1"
        >
          <Button
            className="w-full text-white font-bold text-sm"
            style={{
              background: "#145C38",
              fontFamily: "var(--gt-font-label)",
            }}
            data-ocid="certificates.download_button"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Certificate
          </Button>
        </Link>
        <Button
          variant="outline"
          className="flex-1 font-bold text-sm"
          style={{
            borderColor: "#145C38",
            color: "#145C38",
            fontFamily: "var(--gt-font-label)",
          }}
          onClick={() => {
            navigator.clipboard
              .writeText(
                `${window.location.origin}/certificate/${cert.certificateCode}`,
              )
              .catch(() => {});
          }}
          data-ocid="certificates.share_button"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24" data-ocid="certificates.empty_state">
      <div
        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
        style={{ background: "#E8F5EE" }}
      >
        🏅
      </div>
      <h3
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "var(--gt-font-display)", color: "#0A2E1A" }}
      >
        No certificates yet
      </h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        Complete a trek with Global Trek to earn your certificate of
        achievement.
      </p>
      <Link to="/treks">
        <Button
          className="font-bold text-white"
          style={{ background: "#145C38", fontFamily: "var(--gt-font-label)" }}
          data-ocid="certificates.browse_treks_button"
        >
          Browse Treks
        </Button>
      </Link>
    </div>
  );
}

export default function CertificatesPage() {
  const { actor, isFetching } = useActor(createActor);
  const [certificates, setCertificates] = useState<TrekCertificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!actor || isFetching) return;
    setLoading(true);
    actor
      .getUserCertificates()
      .then((certs) => setCertificates(certs))
      .catch(() => setCertificates([]))
      .finally(() => setLoading(false));
  }, [actor, isFetching]);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "90px" }}
      data-ocid="certificates.page"
    >
      <section
        className="py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: "#2ECC71", fontFamily: "var(--gt-font-label)" }}
          >
            Account
          </p>
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--gt-font-display)" }}
          >
            My Trek Certificates
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            Your achievements in the Himalayas — forever remembered
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {loading ? (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            data-ocid="certificates.loading_state"
          >
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-96 w-full rounded-2xl" />
            ))}
          </div>
        ) : certificates.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {certificates.map((cert) => (
              <CertificateCard key={String(cert.id)} cert={cert} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
