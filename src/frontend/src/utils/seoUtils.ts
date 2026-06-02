// ─── Geo Coordinates ─────────────────────────────────────────────────────────

export const GEO_COORDINATES: Record<
  string,
  { lat: number; lng: number; placename: string; region: string }
> = {
  dehradun: {
    lat: 30.3165,
    lng: 78.0322,
    placename: "Dehradun, Uttarakhand, India",
    region: "IN-UT",
  },
  uttarakhand: {
    lat: 30.0668,
    lng: 79.0193,
    placename: "Uttarakhand, India",
    region: "IN-UT",
  },
  "himachal-pradesh": {
    lat: 31.1048,
    lng: 77.1734,
    placename: "Himachal Pradesh, India",
    region: "IN-HP",
  },
  kedarkantha: {
    lat: 31.017,
    lng: 78.147,
    placename: "Sankri, Uttarkashi, Uttarakhand, India",
    region: "IN-UT",
  },
  "chopta-tungnath": {
    lat: 30.4872,
    lng: 79.1319,
    placename: "Chopta, Rudraprayag, Uttarakhand, India",
    region: "IN-UT",
  },
  "har-ki-dun": {
    lat: 31.165,
    lng: 78.406,
    placename: "Har Ki Dun Valley, Uttarkashi, Uttarakhand, India",
    region: "IN-UT",
  },
  "kuari-pass": {
    lat: 30.6153,
    lng: 79.6117,
    placename: "Kuari Pass, Chamoli, Uttarakhand, India",
    region: "IN-UT",
  },
  "phulara-ridge": {
    lat: 31.02,
    lng: 78.16,
    placename: "Phulara Ridge, Uttarkashi, Uttarakhand, India",
    region: "IN-UT",
  },
  "valley-of-flowers": {
    lat: 30.7279,
    lng: 79.6061,
    placename: "Valley of Flowers, Chamoli, Uttarakhand, India",
    region: "IN-UT",
  },
  roopkund: {
    lat: 30.2484,
    lng: 79.7294,
    placename: "Roopkund Lake, Chamoli, Uttarakhand, India",
    region: "IN-UT",
  },
  brahmatal: {
    lat: 30.18,
    lng: 79.42,
    placename: "Brahmatal, Chamoli, Uttarakhand, India",
    region: "IN-UT",
  },
  "dayara-bugyal": {
    lat: 30.93,
    lng: 78.65,
    placename: "Dayara Bugyal, Uttarkashi, Uttarakhand, India",
    region: "IN-UT",
  },
  "nag-tibba": {
    lat: 30.68,
    lng: 78.21,
    placename: "Nag Tibba, Tehri Garhwal, Uttarakhand, India",
    region: "IN-UT",
  },
  kedarnath: {
    lat: 30.7352,
    lng: 79.0669,
    placename: "Kedarnath Temple, Rudraprayag, Uttarakhand, India",
    region: "IN-UT",
  },
  badrinath: {
    lat: 30.7433,
    lng: 79.4938,
    placename: "Badrinath Temple, Chamoli, Uttarakhand, India",
    region: "IN-UT",
  },
  "hampta-pass": {
    lat: 32.2638,
    lng: 77.3062,
    placename: "Hampta Pass, Kullu, Himachal Pradesh, India",
    region: "IN-HP",
  },
  "sar-pass": {
    lat: 32.2095,
    lng: 77.3612,
    placename: "Sar Pass, Kullu, Himachal Pradesh, India",
    region: "IN-HP",
  },
  kheerganga: {
    lat: 32.1842,
    lng: 77.4129,
    placename: "Kheerganga, Parvati Valley, Himachal Pradesh, India",
    region: "IN-HP",
  },
  triund: {
    lat: 32.28,
    lng: 76.39,
    placename: "Triund, Kangra, Himachal Pradesh, India",
    region: "IN-HP",
  },
  "beas-kund": {
    lat: 32.25,
    lng: 77.25,
    placename: "Beas Kund, Kullu, Himachal Pradesh, India",
    region: "IN-HP",
  },
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  robots?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  geoRegion?: string;
  geoPlacename?: string;
  lat?: number;
  lng?: number;
  structuredData?: object | object[];
  noindex?: boolean;
}

// ─── Schema Builders ─────────────────────────────────────────────────────────

export function getOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.globaltrek.in/#organization",
    name: "Global Trek",
    url: "https://www.globaltrek.in",
    logo: "https://www.globaltrek.in/logo.png",
    description:
      "India's most trusted trekking and adventure travel company based in Dehradun, Uttarakhand",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15, Rajpur Road",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: "Mo-Su 09:00-21:00",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "booking",
        contactOption: "WhatsApp",
      },
    ],
    sameAs: [
      "https://www.instagram.com/globaltrekin",
      "https://www.facebook.com/globaltrekin",
      "https://www.youtube.com/@globaltrekin",
      "https://twitter.com/globaltrekin",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function getWebsiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.globaltrek.in/#website",
    url: "https://www.globaltrek.in",
    name: "Global Trek",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.globaltrek.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Trek",
    image: "https://www.globaltrek.in/office.jpg",
    priceRange: "₹₹",
    telephone: "+91-9876543210",
    email: "info@globaltrek.in",
    url: "https://www.globaltrek.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15, Rajpur Road",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3165",
      longitude: "78.0322",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };
}

export interface TrekSchemaProps {
  id: string;
  name: string;
  description: string;
  state: string;
  duration: number;
  maxAltitudeM: number;
  maxAltitudeFt: number;
  startingPrice: number;
  ratingValue?: string;
  reviewCount?: string;
  images?: string[];
  batches?: Array<{ startDate: string; endDate: string; price: number }>;
}

export function getTrekSchema(trek: TrekSchemaProps): object {
  const itineraryItems = Array.from({ length: trek.duration }, (_, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristAttraction",
      name: `Day ${i + 1}`,
      description: `Day ${i + 1} of the ${trek.name} trek`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://www.globaltrek.in/trek/${trek.id}#trip`,
    name: trek.name,
    alternateName: [`${trek.name} Trek`, `${trek.name} Himalayan Trek`],
    description: trek.description,
    url: `https://www.globaltrek.in/trek/${trek.id}`,
    image: trek.images || [
      `https://www.globaltrek.in/images/treks/${trek.id}.jpg`,
    ],
    touristType: ["Adventure Trekker", "Nature Lover", "Himalayan Explorer"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: itineraryItems,
    },
    provider: {
      "@type": "Organization",
      "@id": "https://www.globaltrek.in/#organization",
    },
    offers: {
      "@type": "Offer",
      price: trek.startingPrice.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      validThrough: "2026-12-31",
      url: `https://www.globaltrek.in/trek/${trek.id}`,
      seller: {
        "@type": "Organization",
        "@id": "https://www.globaltrek.in/#organization",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: trek.ratingValue || "4.9",
      reviewCount: trek.reviewCount || "247",
      bestRating: "5",
    },
  };
}

export function getFAQSchema(faqs: Array<{ q: string; a: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface TrekHowToProps {
  id: string;
  name: string;
}

export function getHowToSchema(trek: TrekHowToProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to do ${trek.name}`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book your batch online",
        text: `Select a batch at globaltrek.in and complete payment for ${trek.name}.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reach the base city",
        text: "Arrive at the designated meeting point by the specified time.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Drive to base camp",
        text: "Travel with our team to the trek base camp for orientation and acclimatization.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Trek through scenic trails",
        text: "Follow the day-by-day itinerary with certified guides through forests, meadows, and ridges.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Summit and return",
        text: "Reach the summit for sunrise views, then descend safely to base and return home.",
      },
    ],
  };
}

export interface BatchEventProps {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  lat: number;
  lng: number;
  price: number;
}

export function getEventSchema(batchDeparture: BatchEventProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: batchDeparture.name,
    startDate: batchDeparture.startDate,
    endDate: batchDeparture.endDate,
    location: {
      "@type": "Place",
      name: batchDeparture.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: batchDeparture.location,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: batchDeparture.lat.toString(),
        longitude: batchDeparture.lng.toString(),
      },
    },
    offers: {
      "@type": "Offer",
      price: batchDeparture.price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    organizer: {
      "@type": "Organization",
      "@id": "https://www.globaltrek.in/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  };
}

export interface BlogSchemaProps {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
}

export function getBlogSchema(post: BlogSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author,
      url: `https://www.globaltrek.in/authors/${post.author.toLowerCase().replace(/\s+/g, "-")}`,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.globaltrek.in/#organization",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image:
      post.heroImage || `https://www.globaltrek.in/blog/${post.slug}/hero.jpg`,
    description: post.excerpt,
    mainEntityOfPage: `https://www.globaltrek.in/blog/${post.slug}`,
  };
}

export interface ReviewSchemaProps {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

export function getReviewSchema(reviews: ReviewSchemaProps[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating.toString(),
          bestRating: "5",
        },
        reviewBody: review.reviewBody,
        datePublished: review.datePublished,
      },
    })),
  };
}

// ─── Page SEO Generators ─────────────────────────────────────────────────────

export function getHomeSEO(): SEOMetaProps {
  return {
    title:
      "Global Trek — Best Himalayan Trekking Company | Uttarakhand & HP | Since 2009",
    description:
      "India's most trusted trekking company. Expert-guided treks & sacred yatras in Uttarakhand and Himachal Pradesh. Kedarkantha, Hampta Pass, Char Dham 2026. Certified guides, safe fixed departures, from ₹3,500. Book online.",
    keywords:
      "himalayan trekking, uttarakhand treks, himachal pradesh treks, char dham yatra 2026, kedarkantha trek, hampta pass trek, trekking company india, best trek packages india, kedarnath yatra 2026",
    canonical: "https://www.globaltrek.in/",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ogType: "website",
    geoRegion: "IN",
    lat: 30.3165,
    lng: 78.0322,
    geoPlacename: "Dehradun, Uttarakhand, India",
    structuredData: [getOrganizationSchema(), getWebsiteSchema()],
  };
}

export function getExploreSEO(): SEOMetaProps {
  return {
    title:
      "Explore Himalayan Treks by Region | Uttarakhand & Himachal Pradesh Treks Map 2026",
    description:
      "Discover 15+ expert-guided Himalayan treks by state, difficulty, season & altitude. Interactive map of treks in Uttarakhand and Himachal Pradesh. Find your perfect trek with Global Trek.",
    canonical: "https://www.globaltrek.in/explore",
    geoRegion: "IN",
    ogType: "website",
  };
}

export function getUttarakhandHubSEO(): SEOMetaProps {
  return {
    title:
      "Uttarakhand Treks 2026 — 10 Best Treks in Garhwal & Kumaon Himalayas",
    description:
      "Explore 10 best treks in Uttarakhand: Kedarkantha, Har Ki Dun, Chopta Tungnath, Kuari Pass, Valley of Flowers & more. Expert-guided packages from ₹3,500. Fixed departures 2026.",
    canonical: "https://www.globaltrek.in/treks/uttarakhand",
    geoRegion: "IN-UT",
    lat: 30.0668,
    lng: 79.0193,
    geoPlacename: "Uttarakhand, India",
    ogType: "website",
  };
}

export function getHimachalHubSEO(): SEOMetaProps {
  return {
    title:
      "Himachal Pradesh Treks 2026 — Hampta Pass, Sar Pass, Kheerganga & More",
    description:
      "Best treks in Himachal Pradesh: Hampta Pass, Sar Pass, Kheerganga, Triund, Beas Kund. Kullu, Lahaul, Parvati Valley expert-guided packages from ₹4,000. Book 2026 batches.",
    canonical: "https://www.globaltrek.in/treks/himachal-pradesh",
    geoRegion: "IN-HP",
    lat: 31.1048,
    lng: 77.1734,
    geoPlacename: "Himachal Pradesh, India",
    ogType: "website",
  };
}

export function getTrekSEO(trek: {
  id: string;
  name: string;
  duration: number;
  maxAltitudeM: number;
  maxAltitudeFt: number;
  state: string;
  startingPrice: number;
  slug?: string;
}): SEOMetaProps {
  const geo = GEO_COORDINATES[trek.id] || GEO_COORDINATES[trek.slug || ""];
  return {
    title: `${trek.name} 2026 — Complete Guide, Itinerary, Cost & Booking | Global Trek`,
    description: `Book ${trek.name} 2026 with Global Trek. ${trek.duration}-day guided trek to ${trek.maxAltitudeM}m (${trek.maxAltitudeFt}ft) in ${trek.state}. Expert certified guides, fixed departures, from ₹${trek.startingPrice.toLocaleString("en-IN")}/person. Day-by-day itinerary, packing list, batch calendar & instant booking.`,
    canonical: `https://www.globaltrek.in/trek/${trek.id}`,
    ogType: "website",
    ogImage: `https://www.globaltrek.in/og/${trek.id}.jpg`,
    ogImageAlt: `${trek.name} — Himalayan trek in ${trek.state}, India`,
    geoRegion: geo?.region || "IN",
    lat: geo?.lat,
    lng: geo?.lng,
    geoPlacename: geo?.placename,
    structuredData: [
      getTrekSchema({
        id: trek.id,
        name: trek.name,
        description: `Book ${trek.name} 2026 with Global Trek.`,
        state: trek.state,
        duration: trek.duration,
        maxAltitudeM: trek.maxAltitudeM,
        maxAltitudeFt: trek.maxAltitudeFt,
        startingPrice: trek.startingPrice,
      }),
      getHowToSchema({ id: trek.id, name: trek.name }),
      getBreadcrumbSchema([
        { name: "Home", url: "https://www.globaltrek.in/" },
        { name: "Treks", url: "https://www.globaltrek.in/treks" },
        {
          name: trek.state,
          url: `https://www.globaltrek.in/treks/${trek.state.toLowerCase().replace(/\s+/g, "-")}`,
        },
        { name: trek.name, url: `https://www.globaltrek.in/trek/${trek.id}` },
      ]),
    ],
  };
}

export function getYatraSEO(yatra: {
  id: string;
  name: string;
  state: string;
  price: number;
  openingDate?: string;
}): SEOMetaProps {
  return {
    title: `${yatra.name} 2026 — Complete Package, Dates, Registration & Helicopter | Global Trek`,
    description: `Book ${yatra.name} 2026 with Global Trek. Complete packages from ₹${yatra.price.toLocaleString("en-IN")} including trek/helicopter options, accommodation, meals, puja booking, biometric registration support.`,
    canonical: `https://www.globaltrek.in/yatra/${yatra.id}`,
    ogType: "website",
    ogImage: `https://www.globaltrek.in/og/${yatra.id}.jpg`,
    ogImageAlt: `${yatra.name} — Sacred yatra in ${yatra.state}, India`,
    geoRegion: "IN-UT",
    lat: 30.7352,
    lng: 79.0669,
    geoPlacename: `${yatra.name}, ${yatra.state}, India`,
  };
}

export function getBlogSEO(post: {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
}): SEOMetaProps {
  const truncatedExcerpt =
    post.excerpt.length > 155
      ? `${post.excerpt.slice(0, 152)}...`
      : post.excerpt;
  return {
    title: `${post.title} | Global Trek — Himalayan Trekking Expert`,
    description: truncatedExcerpt,
    canonical: `https://www.globaltrek.in/blog/${post.slug}`,
    ogType: "article",
    ogImage:
      post.heroImage || `https://www.globaltrek.in/blog/${post.slug}/hero.jpg`,
    ogImageAlt: post.title,
    structuredData: getBlogSchema(post),
  };
}

export function getContactSEO(): SEOMetaProps {
  return {
    title: "Contact Global Trek | Book Your Himalayan Trek | Dehradun Office",
    description:
      "Contact Global Trek for trek bookings, custom packages, corporate treks & yatra planning. WhatsApp, phone, email, video call & walk-in. Dehradun office open daily 9AM–9PM.",
    canonical: "https://www.globaltrek.in/contact",
    ogType: "website",
    geoRegion: "IN-UT",
    lat: 30.3165,
    lng: 78.0322,
    geoPlacename: "Dehradun, Uttarakhand, India",
    structuredData: getLocalBusinessSchema(),
  };
}

const CITY_DESCRIPTIONS: Record<string, string> = {
  delhi:
    "Weekend and long Himalayan treks from Delhi. Direct transport, expert guides, fixed departures to Kedarkantha, Hampta Pass, Chopta & more. Book 2026 batches.",
  dehradun:
    "Best day and overnight treks from Dehradun — the gateway to Garhwal Himalayas. Kedarkantha, Har Ki Dun, Nag Tibba & more with local expert guides.",
  rishikesh:
    "Himalayan adventure packages from Rishikesh. Yoga capital to mountain trails — Chopta, Valley of Flowers, Kuari Pass & Kedarnath treks.",
  manali:
    "Treks from Manali — Hampta Pass, Beas Kund, Sar Pass & more. Kullu and Lahaul valley expert-guided packages from ₹4,000. Book 2026.",
  chandigarh:
    "Himachal Pradesh & Uttarakhand trek packages from Chandigarh. Hampta Pass, Triund, Kedarkantha & more with transport included.",
  mumbai:
    "Himalayan treks for Mumbai trekkers. Flight + trek packages to Uttarakhand & Himachal. Group departures with Mumbai coordinators.",
  bangalore:
    "Himalayan treks from Bangalore. Flight + trek packages to Kedarkantha, Hampta Pass & more. South India group batches 2026.",
};

export function getCityTrekSEO(
  city: string,
  cityDisplay: string,
): SEOMetaProps {
  const key = city.toLowerCase();
  const description =
    CITY_DESCRIPTIONS[key] ||
    `Himalayan trek packages from ${cityDisplay}. Expert-guided treks in Uttarakhand and Himachal Pradesh. Book 2026 batches with Global Trek.`;
  return {
    title: `Himalayan Treks from ${cityDisplay} 2026 | Group Packages | Global Trek`,
    description,
    canonical: `https://www.globaltrek.in/trek-from-${key}`,
    ogType: "website",
    geoRegion: "IN",
  };
}

export function getPackageSEO(
  packageType: string,
  packageName: string,
): SEOMetaProps {
  const descriptions: Record<string, string> = {
    corporate:
      "Corporate team trekking packages in the Himalayas. Build stronger teams through adventure. Custom itineraries, dedicated coordinators, GST invoices.",
    "school-college":
      "School and college trekking programs in Uttarakhand & Himachal. Safe, educational, adventure-filled. Teacher-student ratios, parent updates, certificates.",
    family:
      "Family Himalayan trek packages. Safe, comfortable, memorable experiences for all ages. Easy to moderate treks with family-friendly amenities.",
    honeymoon:
      "Romantic Himalayan trek packages for couples. Private camps, stunning views, and unforgettable moments in Uttarakhand & Himachal Pradesh.",
    solo: "Solo trekker packages — join a group, make friends, trek safely. Fixed departures with like-minded adventurers. No single supplement.",
    customize:
      "Fully customized Himalayan trek packages. Design your own itinerary, dates, group size, and difficulty. Your trek, your way.",
  };
  return {
    title: `${packageName} 2026 | Global Trek — Himalayan Adventure Packages`,
    description:
      descriptions[packageType] ||
      `${packageName} packages with Global Trek. Expert-guided Himalayan treks and adventures. Book 2026 batches.`,
    canonical: `https://www.globaltrek.in/packages/${packageType}`,
    ogType: "website",
  };
}
