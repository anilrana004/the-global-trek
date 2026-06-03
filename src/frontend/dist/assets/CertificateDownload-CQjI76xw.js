import { t as useParams, e as useActor, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button, Q as Linkedin, f as createActor } from "./index-vYOW-QfD.js";
import { A as ArrowLeft } from "./arrow-left-BujbnMEe.js";
import { D as Download } from "./download-D7ekxGRG.js";
import { S as Share2 } from "./share-2-CUOspTaP.js";
function MountainWatermark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 400 200",
      className: "absolute inset-0 w-full h-full",
      preserveAspectRatio: "xMidYMid meet",
      style: { opacity: 0.06 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "200,20 80,160 320,160", fill: "#1A7A4C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "90,90 20,160 160,160", fill: "#1A7A4C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "320,60 240,160 380,160", fill: "#1A7A4C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "155,100 120,160 190,160", fill: "#1A7A4C", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "280,110 255,160 315,160", fill: "#1A7A4C", opacity: "0.5" })
      ]
    }
  );
}
function OrnateCorner({ position }) {
  const transforms = {
    tl: "rotate(0)",
    tr: "rotate(90)",
    br: "rotate(180)",
    bl: "rotate(270)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      className: "absolute w-10 h-10",
      style: {
        top: position.startsWith("t") ? 8 : "auto",
        bottom: position.startsWith("b") ? 8 : "auto",
        left: position.endsWith("l") ? 8 : "auto",
        right: position.endsWith("r") ? 8 : "auto",
        transform: transforms[position],
        color: "#1A7A4C"
      },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M4 4 L20 4 M4 4 L4 20",
            stroke: "#1A7A4C",
            strokeWidth: "2",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M8 8 L16 8 M8 8 L8 16",
            stroke: "#22A05E",
            strokeWidth: "1",
            fill: "none",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "2", fill: "#1A7A4C" })
      ]
    }
  );
}
function CertificateBody({ cert }) {
  const certUrl = `${window.location.origin}/certificate/${cert.certificateCode}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "certificate-body",
      className: "relative bg-white",
      style: {
        width: "100%",
        minHeight: 480,
        border: "3px solid #1A7A4C",
        borderRadius: 8,
        padding: "48px 56px",
        boxSizing: "border-box",
        fontFamily: "var(--gt-font-body, 'DM Sans', sans-serif)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 8,
              border: "1px solid #22A05E",
              borderRadius: 4,
              opacity: 0.5,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateCorner, { position: "tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateCorner, { position: "tr" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateCorner, { position: "bl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateCorner, { position: "br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MountainWatermark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontSize: 11,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#1A7A4C",
                fontWeight: 800,
                fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
                marginBottom: 4
              },
              children: "Global Trek"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontSize: 32,
                fontWeight: 800,
                color: "#0A2E1A",
                fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
                lineHeight: 1.1,
                marginBottom: 4
              },
              children: "Certificate of Achievement"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontSize: 13,
                fontStyle: "italic",
                color: "#6B7280",
                marginBottom: 20
              },
              children: "Where Every Trail Tells a Story"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: { flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A7A4C", fontSize: 16 }, children: "⛰" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: { flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontSize: 14,
                fontStyle: "italic",
                color: "#6B7280",
                marginBottom: 8
              },
              children: "This certifies that"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontSize: 36,
                fontWeight: 800,
                fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
                color: "#0A2E1A",
                marginBottom: 8,
                lineHeight: 1.1
              },
              children: "Trek Achiever"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 14, color: "#6B7280", marginBottom: 6 }, children: "has successfully completed the" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "var(--gt-font-display, 'Playfair Display', serif)",
                color: "#1A7A4C",
                marginBottom: 8
              },
              children: cert.trekName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 13, color: "#6B7280", marginBottom: 20 }, children: [
            "reaching an altitude of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#1A7A4C" }, children: cert.maxAltitude }),
            " on",
            " ",
            cert.completedDate
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "flex",
                gap: 10,
                marginBottom: 24,
                flexWrap: "wrap",
                justifyContent: "center"
              },
              children: [
                { label: cert.duration, sub: "Duration" },
                { label: cert.maxAltitude, sub: "Altitude" },
                { label: cert.trekName, sub: "Trek" }
              ].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "#E8F5EE",
                    border: "1px solid #22A05E",
                    borderRadius: 999,
                    padding: "4px 16px",
                    textAlign: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#145C38",
                          fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)"
                        },
                        children: chip.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontSize: 10,
                          color: "#6B7280",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase"
                        },
                        children: chip.sub
                      }
                    )
                  ]
                },
                chip.sub
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: { flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A7A4C", fontSize: 14 }, children: "🏔" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: { flex: 1, height: 1, background: "#1A7A4C", opacity: 0.4 }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "left" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: 100,
                        height: 1,
                        background: "#0A2E1A",
                        marginBottom: 4
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontSize: 11,
                        color: "#6B7280",
                        fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                      },
                      children: "Trek Leader"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#0A2E1A"
                      },
                      children: cert.guideName
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#145C38",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 4px"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "white", fontSize: 18, fontWeight: 900 }, children: "G" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#145C38",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)"
                      },
                      children: "GLOBAL TREK"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 9, color: "#6B7280", fontStyle: "italic" }, children: "Where Every Trail Tells a Story" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
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
                        overflow: "hidden"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: `https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(certUrl)}&color=145C38&bgcolor=F0FAF4`,
                          alt: "Verification QR",
                          width: 60,
                          height: 60,
                          style: { imageRendering: "pixelated" },
                          onError: (e) => {
                            e.currentTarget.style.display = "none";
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontSize: 9,
                        color: "#6B7280",
                        letterSpacing: "0.05em",
                        fontFamily: "var(--gt-font-label, 'Montserrat', sans-serif)"
                      },
                      children: "Scan to verify"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              style: {
                marginTop: 16,
                fontSize: 10,
                fontFamily: "monospace",
                color: "#9CA3AF",
                letterSpacing: "0.05em"
              },
              children: [
                "Certificate ID: GT-",
                cert.certificateCode
              ]
            }
          )
        ] })
      ]
    }
  );
}
function CertificateDownload() {
  const { certCode } = useParams({ strict: false });
  const { actor, isFetching } = useActor(createActor);
  const [cert, setCert] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [notFound, setNotFound] = reactExports.useState(false);
  const pageRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
  const trekName = (cert == null ? void 0 : cert.trekName) ?? "Himalayan Trek";
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(certUrl)}&title=${encodeURIComponent(`I completed ${trekName} with Global Trek`)}&summary=${encodeURIComponent(`I successfully summited ${trekName}! Certified by Global Trek — India's most trusted Himalayan trekking company.`)}`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(`🏔 I just completed the ${trekName}! View my certificate: ${certUrl}`)}`;
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center px-4",
        "data-ocid": "certificate.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-48 mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[480px] w-full rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-40" })
          ] })
        ] })
      }
    );
  }
  if (notFound || !cert) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center",
        "data-ocid": "certificate.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl",
              style: { background: "#E8F5EE" },
              children: "🏔"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl font-bold mb-3",
              style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
              children: "Certificate Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8 max-w-sm", children: [
            "The certificate code ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: certCode }),
            " does not exist or has been revoked."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "text-white font-bold",
              style: { background: "#145C38" },
              "data-ocid": "certificate.back_home_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                "Back to Home"
              ]
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          #certificate-body { border-radius: 0; box-shadow: none; }
          @page { size: A4 landscape; margin: 10mm; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: pageRef,
        className: "min-h-screen bg-muted/30",
        style: { paddingTop: 90 },
        "data-ocid": "certificate.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-print py-6 px-4 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/account/certificates",
              className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
              "data-ocid": "certificate.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Back to My Certificates"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CertificateBody, { cert }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-print max-w-4xl mx-auto px-4 pb-12 flex flex-wrap gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => window.print(),
                className: "text-white font-bold",
                style: { background: "#145C38" },
                "data-ocid": "certificate.download_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
                  "Download / Print Certificate"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => window.open(linkedInUrl, "_blank", "noopener,noreferrer"),
                variant: "outline",
                className: "font-bold",
                style: { borderColor: "#0A66C2", color: "#0A66C2" },
                "data-ocid": "certificate.linkedin_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4 mr-2" }),
                  "Share on LinkedIn"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => window.open(waUrl, "_blank", "noopener,noreferrer"),
                variant: "outline",
                className: "font-bold",
                style: { borderColor: "#25D366", color: "#128C7E" },
                "data-ocid": "certificate.whatsapp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
                  "Share on WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                className: "text-muted-foreground",
                "data-ocid": "certificate.dashboard_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                  "Back to Dashboard"
                ]
              }
            ) })
          ] })
        ]
      }
    )
  ] });
}
export {
  CertificateDownload as default
};
