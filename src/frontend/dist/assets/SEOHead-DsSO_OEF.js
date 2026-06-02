import { c as createLucideIcon, r as reactExports } from "./index-BBTrFTBe.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode);
function SEOHead({
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
  noindex
}) {
  reactExports.useEffect(() => {
    document.title = title;
    function setMeta(selector, content) {
      let el = document.querySelector(selector);
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
    function setLink(rel, href, attrs) {
      let el = document.querySelector(
        `link[rel="${rel}"]`
      );
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    }
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);
    setMeta(
      'meta[name="robots"]',
      noindex ? "noindex, nofollow" : robots || "index, follow"
    );
    setLink("canonical", canonical);
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
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:site"]', "@GlobalTrekIn");
    setMeta('meta[name="twitter:creator"]', "@GlobalTrekIn");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', imgUrl);
    if (ogImageAlt) setMeta('meta[name="twitter:image:alt"]', ogImageAlt);
    if (geoRegion) setMeta('meta[name="geo.region"]', geoRegion);
    if (geoPlacename) setMeta('meta[name="geo.placename"]', geoPlacename);
    if (lat !== void 0 && lng !== void 0) {
      setMeta('meta[name="ICBM"]', `${lat}, ${lng}`);
      setMeta('meta[name="geo.position"]', `${lat};${lng}`);
    }
    const hreflangs = [
      { hreflang: "en-IN", href: canonical },
      { hreflang: "en-GB", href: canonical },
      { hreflang: "en-US", href: canonical },
      { hreflang: "x-default", href: canonical }
    ];
    for (const { hreflang, href } of hreflangs) {
      let el = document.querySelector(
        `link[hreflang="${hreflang}"]`
      );
      if (!el) {
        el = document.createElement("link");
        el.rel = "alternate";
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.href = href;
    }
    for (const el of document.querySelectorAll("script[data-seo-jsonld]")) {
      el.remove();
    }
    const schemas = structuredData ? Array.isArray(structuredData) ? structuredData : [structuredData] : [];
    if (schemas.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(
        schemas.length === 1 ? schemas[0] : { "@context": "https://schema.org", "@graph": schemas }
      );
      document.head.appendChild(script);
    }
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
    noindex
  ]);
  return null;
}
export {
  Plane as P,
  SEOHead as S
};
