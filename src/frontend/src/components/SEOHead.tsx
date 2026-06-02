import { useEffect } from "react";
import type { SEOMetaProps } from "../utils/seoUtils";

interface SEOHeadProps extends SEOMetaProps {}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  robots,
  ogType,
  ogImage,
  ogImageAlt,
  geoRegion,
  geoPlacename,
  lat,
  lng,
  structuredData,
  noindex,
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to upsert a meta tag
    function setMeta(selector: string, content: string) {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const nameMatch = selector.match(/\[name="([^"]+)"\]/);
        const propMatch = selector.match(/\[property="([^"]+)"\]/);
        if (nameMatch) el.name = nameMatch[1];
        if (propMatch) el.setAttribute("property", propMatch[1]);
        document.head.appendChild(el);
      }
      el.content = content;
    }

    function setLink(
      rel: string,
      href: string,
      attrs?: Record<string, string>,
    ) {
      let el = document.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
      if (attrs) {
        for (const [k, v] of Object.entries(attrs)) {
          el!.setAttribute(k, v);
        }
      }
    }

    // Standard meta
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);
    setMeta(
      'meta[name="robots"]',
      noindex ? "noindex, nofollow" : robots || "index, follow",
    );

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', ogType || "website");
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:site_name"]', "Global Trek");
    setMeta('meta[property="og:locale"]', "en_IN");
    const imgUrl = ogImage || "https://www.globaltrek.in/og/default.jpg";
    setMeta('meta[property="og:image"]', imgUrl);
    setMeta('meta[property="og:image:width"]', "1200");
    setMeta('meta[property="og:image:height"]', "630");
    if (ogImageAlt) setMeta('meta[property="og:image:alt"]', ogImageAlt);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:site"]', "@GlobalTrekIn");
    setMeta('meta[name="twitter:creator"]', "@GlobalTrekIn");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', imgUrl);
    if (ogImageAlt) setMeta('meta[name="twitter:image:alt"]', ogImageAlt);

    // Geo meta tags
    if (geoRegion) setMeta('meta[name="geo.region"]', geoRegion);
    if (geoPlacename) setMeta('meta[name="geo.placename"]', geoPlacename);
    if (lat !== undefined && lng !== undefined) {
      setMeta('meta[name="ICBM"]', `${lat}, ${lng}`);
      setMeta('meta[name="geo.position"]', `${lat};${lng}`);
    }

    // Hreflang links
    const hreflangs = [
      { hreflang: "en-IN", href: canonical },
      { hreflang: "en-GB", href: canonical },
      { hreflang: "en-US", href: canonical },
      { hreflang: "x-default", href: canonical },
    ];
    for (const { hreflang, href } of hreflangs) {
      let el = document.querySelector(
        `link[hreflang="${hreflang}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = "alternate";
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.href = href;
    }

    // JSON-LD structured data
    for (const el of document.querySelectorAll("script[data-seo-jsonld]")) {
      el.remove();
    }
    const schemas = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [];
    if (schemas.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(
        schemas.length === 1
          ? schemas[0]
          : { "@context": "https://schema.org", "@graph": schemas },
      );
      document.head.appendChild(script);
    }

    // Cleanup: remove injected meta/link/script on unmount
    return () => {
      for (const el of document.querySelectorAll("meta[data-seo-dynamic]")) {
        el.remove();
      }
      for (const el of document.querySelectorAll("link[data-seo-dynamic]")) {
        el.remove();
      }
      for (const el of document.querySelectorAll("script[data-seo-jsonld]")) {
        el.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    robots,
    ogType,
    ogImage,
    ogImageAlt,
    geoRegion,
    geoPlacename,
    lat,
    lng,
    structuredData,
    noindex,
  ]);

  return null;
}
