/**
 * Structured Data / JSON-LD helpers
 * Backyard Studio Official — backyardstudioofficial.com
 * Registered: Backyardstudio official For Commercial Photographs Production
 * GEO-optimised for Google AI Overviews, ChatGPT Search, Perplexity, Copilot
 */

import { CLIENTS } from "./clients";

const BRAND = {
  name: "Backyard Studio Official",
  legalName: "Backyardstudio official For Commercial Photographs Production",
  url: "https://www.backyardstudioofficial.com",
  phone: "+971-58-588-2685",
  email: "info@backyardstudioofficial.com",
  logo: "https://www.backyardstudioofficial.com/logo-black.png",
  og: "https://www.backyardstudioofficial.com/images/cover.webp",
  sameAs: [
    "https://www.instagram.com/backyardstudioofficial/",
    "https://www.facebook.com/Backyardstudioofficial/",
    "https://www.tiktok.com/@backyardstudio_official5",
    "https://www.youtube.com/@BackyardStudioofficialuae",
    "https://www.linkedin.com/in/backyard-studio-508532417/",
    "https://www.imdb.com/name/nm14029494/",
  ],
};

/**
 * Normalize any date-ish string to a Google-compliant ISO 8601 datetime with
 * timezone. Google Search Console rejects bare `YYYY-MM-DD` uploadDate values
 * ("Invalid datetime value" + "missing a time zone").
 *
 * - Date-only  "2025-01-05"        → "2025-01-05T00:00:00+04:00"  (UAE, UTC+4)
 * - DateTime  "2025-01-05T12:00"  → "2025-01-05T12:00:00+04:00"
 * - Full ISO  "2025-01-05T12:00Z" → unchanged
 */
export function toISODateTime(input: string | Date): string {
  const d = typeof input === "string" ? new Date(input) : input;
  if (isNaN(d.getTime())) {
    // Last-resort fallback: today's date in UAE, valid ISO 8601.
    return new Date().toISOString();
  }
  // Use Asia/Dubai offset (+04:00) regardless of server timezone.
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(d).map((p) => [p.type, p.value]));
  // Intl can emit "24" for midnight in some locales — normalise.
  const hour = parts.hour === "24" ? "00" : parts.hour;
  return `${parts.year}-${parts.month}-${parts.day}T${hour}:${parts.minute}:${parts.second}+04:00`;
}
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: ["Backyard Studio", "Backyard Studio UAE", "BSO Dubai"],
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      url: BRAND.logo,
      width: 400,
      height: 400,
    },
    image: BRAND.og,
    description:
      "Backyard Studio Official is a UAE creative production studio specialising in commercial video, corporate films, events, weddings, social media content, and commercial photography across all seven UAE emirates.",
    foundingDate: "2019",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    knowsAbout: [
      "Best Production Company Dubai",
      "Top Production House Dubai UAE",
      "Video Production Dubai",
      "Event Videography UAE",
      "Wedding Photography Dubai",
      "Wedding Videography Dubai",
      "Pre Wedding Photoshoot Dubai",
      "Wedding Shoot Company Dubai",
      "Indian Wedding Photography UAE",
      "Digital Video Commercials DVC",
      "Corporate Films UAE",
      "Instagram Reels Production Dubai",
      "TikTok Content Creation Dubai",
      "Social Media Content Creator Dubai",
      "Social Media Shoots UAE",
      "Commercial Photo Shoots Dubai",
      "Brand Films UAE",
      "Testimonial Videos Dubai",
      "Ads Shooting Dubai",
      "Event Production Company Dubai",
      "Film Production Company Dubai",
    ],
    areaServed: [
      { "@type": "City", name: "Dubai", containedInPlace: { "@type": "Country", name: "United Arab Emirates" } },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.phone,
        email: BRAND.email,
        contactType: "customer service",
        availableLanguage: ["English", "Arabic"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "09:00",
          closes: "21:00",
        },
      },
    ],
    sameAs: BRAND.sameAs,
    // Named client relationships. This is the strongest E-E-A-T signal available:
    // verifiable brands, not anonymous "Fortune 500 client" claims.
    client: CLIENTS.map((c) => ({
      "@type": "Organization",
      name: c.name,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "GCAA Drone Operator License",
      credentialCategory: "license",
      recognizedBy: {
        "@type": "Organization",
        name: "General Civil Aviation Authority UAE",
      },
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BRAND.url}/#localbusiness`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    description:
      "Creative video, photography, event, wedding, and social media production services across all seven UAE emirates.",
    url: BRAND.url,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.2048, longitude: 55.2708 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "AED 2,500 – AED 500,000+",
    currenciesAccepted: "AED, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    image: [BRAND.og, BRAND.logo],
    sameAs: BRAND.sameAs,
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video, Photography & Social Media Production Services UAE",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Shoots Dubai", description: "Professional event photography and videography across all UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography and Videography Dubai", description: "Cinematic wedding shoots, pre-wedding photoshoots and wedding films in Dubai UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Video Commercials DVCs Dubai", description: "High-production DVCs and brand films for UAE businesses", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Reels and TikTok Content Dubai", description: "Social media shoots and short-form content production in Dubai UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Content Creation Dubai", description: "Full social media content production for Instagram TikTok YouTube in UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Films UAE", description: "Brand documentaries, investor films and corporate video production Dubai", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Photo Shoots Dubai", description: "Editorial, product, lifestyle and brand photography UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Testimonial Videos Dubai", description: "Client testimonial video production across UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ads Shooting Dubai", description: "Meta, TikTok, YouTube and OOH ad production in UAE", areaServed: "UAE" } },
      ],
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function videoObjectSchema(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: toISODateTime(opts.uploadDate),
    ...(opts.duration ? { duration: opts.duration } : {}),
    ...(opts.contentUrl ? { contentUrl: opts.contentUrl } : {}),
    ...(opts.embedUrl ? { embedUrl: opts.embedUrl } : {}),
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: BRAND.logo },
    },
    creator: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    productionCompany: { "@type": "Organization", name: BRAND.name },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { "@type": "Person", name: opts.authorName },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: BRAND.logo },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url || `${BRAND.url}/blog`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  alumniOf?: { name: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.description,
    url: opts.url || BRAND.url,
    image: opts.image,
    worksFor: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
    ...(opts.alumniOf ? {
      alumniOf: opts.alumniOf.map((a) => ({
        "@type": "EducationalOrganization",
        name: a.name,
      })),
    } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
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

export function servicePageSchema(opts: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    ...(opts.price ? {
      offers: {
        "@type": "Offer",
        price: opts.price,
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
    } : {}),
    serviceType: opts.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: opts.name,
      itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Service", name: opts.name } }],
    },
  };
}

// ─── HowTo Schema ─────────────────────────────────────────────────────────────
export function howToSchema(opts: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
    tool: [
      { "@type": "HowToTool", name: "Professional camera equipment" },
      { "@type": "HowToTool", name: "Professional lighting rig" },
    ],
    supply: [{ "@type": "HowToSupply", name: "Creative brief" }],
    author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
  };
}

// ─── Speakable Schema ─────────────────────────────────────────────────────────
export function speakableSchema(url: string, cssSelectors: string[] = ["h1", "h2", ".speakable"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

// ─── ItemList Schema ─────────────────────────────────────────────────────────
export function itemListSchema(items: { name: string; url: string; description?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
