import { e as useActor, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button, m as motion, f as createActor } from "./index-vYOW-QfD.js";
import { D as Download } from "./download-D7ekxGRG.js";
import { S as Share2 } from "./share-2-CUOspTaP.js";
function MountainWatermark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 200 100",
      className: "absolute inset-0 w-full h-full",
      preserveAspectRatio: "xMidYMid meet",
      style: { opacity: 0.04 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,10 40,80 160,80", fill: "#145C38" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "55,45 20,80 90,80", fill: "#145C38" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "150,30 115,80 185,80", fill: "#145C38" })
      ]
    }
  );
}
function CertificateCard({ cert }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "flex flex-col gap-4",
      "data-ocid": "certificates.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-2xl p-1",
            style: { border: "4px solid #145C38" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-xl p-8 text-center",
                style: { border: "2px dashed #22A05E", background: "#F0FAF4" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MountainWatermark, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "inline-block px-4 py-1 rounded-full text-xs font-black tracking-[0.25em] uppercase mb-2",
                        style: {
                          background: "#145C38",
                          color: "white",
                          fontFamily: "var(--gt-font-label)"
                        },
                        children: "Global Trek"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs tracking-[0.3em] uppercase font-bold",
                        style: { color: "#1A7A4C", fontFamily: "var(--gt-font-label)" },
                        children: "Certificate of Completion"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "#22A05E" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#22A05E" }, children: "⛰" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "#22A05E" } })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-muted-foreground",
                        style: { fontFamily: "var(--gt-font-body)" },
                        children: "This is to certify that"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        className: "text-3xl font-bold italic",
                        style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
                        children: `${cert.trekName.replace(
                          /(\w+)/g,
                          (w) => w.charAt(0).toUpperCase() + w.slice(1)
                        ).split(" ").slice(0, 2).join(" ")} Trekker`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "has successfully completed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-2xl font-bold",
                        style: { fontFamily: "var(--gt-font-display)", color: "#145C38" },
                        children: cert.trekName
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic", children: [
                      "Max Altitude: ",
                      cert.maxAltitude
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 mt-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-lg font-black",
                            style: {
                              color: "#145C38",
                              fontFamily: "var(--gt-font-label)"
                            },
                            children: cert.maxAltitude
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-[10px] tracking-wider uppercase text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "Max Altitude"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px", style: { background: "#22A05E" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-lg font-black",
                            style: {
                              color: "#145C38",
                              fontFamily: "var(--gt-font-label)"
                            },
                            children: cert.duration
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-[10px] tracking-wider uppercase text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "Duration"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px", style: { background: "#22A05E" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-lg font-black",
                            style: {
                              color: "#145C38",
                              fontFamily: "var(--gt-font-label)"
                            },
                            children: cert.trekSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-[10px] tracking-wider uppercase text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "Region"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-center mt-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "#22A05E" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#22A05E" }, children: "🏔" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "#22A05E" } })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "Date"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-bold",
                            style: {
                              color: "#0A2E1A",
                              fontFamily: "var(--gt-font-body)"
                            },
                            children: cert.completedDate
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white text-xs font-black",
                            style: {
                              background: "#145C38",
                              fontFamily: "var(--gt-font-label)"
                            },
                            children: "GT"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-[9px] text-muted-foreground mt-1",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "GLOBAL TREK"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs text-muted-foreground",
                            style: { fontFamily: "var(--gt-font-label)" },
                            children: "Trek Leader"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-bold",
                            style: {
                              color: "#0A2E1A",
                              fontFamily: "var(--gt-font-body)"
                            },
                            children: cert.guideName
                          }
                        )
                      ] })
                    ] })
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/certificate/$certCode",
              params: { certCode: cert.certificateCode },
              className: "flex-1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full text-white font-bold text-sm",
                  style: {
                    background: "#145C38",
                    fontFamily: "var(--gt-font-label)"
                  },
                  "data-ocid": "certificates.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
                    "Download Certificate"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "flex-1 font-bold text-sm",
              style: {
                borderColor: "#145C38",
                color: "#145C38",
                fontFamily: "var(--gt-font-label)"
              },
              onClick: () => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/certificate/${cert.certificateCode}`
                ).catch(() => {
                });
              },
              "data-ocid": "certificates.share_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
                "Share"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "certificates.empty_state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl",
        style: { background: "#E8F5EE" },
        children: "🏅"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h3",
      {
        className: "text-xl font-bold mb-2",
        style: { fontFamily: "var(--gt-font-display)", color: "#0A2E1A" },
        children: "No certificates yet"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "Complete a trek with Global Trek to earn your certificate of achievement." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "font-bold text-white",
        style: { background: "#145C38", fontFamily: "var(--gt-font-label)" },
        "data-ocid": "certificates.browse_treks_button",
        children: "Browse Treks"
      }
    ) })
  ] });
}
function CertificatesPage() {
  const { actor, isFetching } = useActor(createActor);
  const [certificates, setCertificates] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    setLoading(true);
    actor.getUserCertificates().then((certs) => setCertificates(certs)).catch(() => setCertificates([])).finally(() => setLoading(false));
  }, [actor, isFetching]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      style: { paddingTop: "90px" },
      "data-ocid": "certificates.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-10 px-4",
            style: {
              background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs tracking-widest uppercase mb-2",
                  style: { color: "#2ECC71", fontFamily: "var(--gt-font-label)" },
                  children: "Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl font-bold text-white",
                  style: { fontFamily: "var(--gt-font-display)" },
                  children: "My Trek Certificates"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mt-2 text-sm", children: "Your achievements in the Himalayas — forever remembered" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 py-12", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
            "data-ocid": "certificates.loading_state",
            children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 w-full rounded-2xl" }, i))
          }
        ) : certificates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: certificates.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsx(CertificateCard, { cert }, String(cert.id))) }) })
      ]
    }
  );
}
export {
  CertificatesPage as default
};
