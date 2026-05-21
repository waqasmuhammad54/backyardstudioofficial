/**
 * Structured Data / JSON-LD helpers
 * Backyard Studio Official — backyardstudioofficial.com
 * Registered: Backyardstudio official For Commercial Photographs Production
 * GEO-optimised for Google AI Overviews, ChatGPT Search, Perplexity, Copilot
 */

const BRAND = {
  name: "Backyard Studio Official",
  legalName: "Backyardstudio official For Commercial Photographs Production",
  url: "https://backyardstudioofficial.com",
  phone: "+971-58-588-2685",
  email: "info@backyardstudioofficial.com",
  logo: "https://backyardstudioofficial.com/logo-black.png",
  og: "https://backyardstudioofficial.com/images/cover.webp",
  sameAs: [
    "https://www.instagram.com/backyardstudioofficial/",
    "https://www.facebook.com/Backyardstudioofficial/",
    "https://www.tiktok.com/@backyardstudio_official5",
  ],
};

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
      "Backyard Studio Official is Dubai's premier cinematic video production studio. We specialise in event shoots, DVCs, Instagram Reels, TikTok content, aerial drone, testimonial videos, ads, and corporate films across all 7 UAE emirates. Over 2,400 projects delivered with a 2-hour response guarantee.",
    foundingDate: "2016",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    knowsAbout: [
      "Video Production Dubai",
      "Event Videography UAE",
      "Digital Video Commercials",
      "Corporate Films",
      "Instagram Reels Production",
      "TikTok Content Creation",
      "Aerial Drone Videography GCAA",
      "Commercial Photo Shoots",
      "Brand Films",
      "Testimonial Videos",
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
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "GCAA Drone Operator License",
      credentialCategory: "license",
      recognizedBy: {
        "@type": "Organization",
        name: "General Civil Aviation Authority UAE",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "VideoProductionCompany"],
    "@id": `${BRAND.url}/#localbusiness`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    description:
      "Dubai's #1 creative video production studio. We deliver event shoots, DVCs, Instagram Reels, TikTok content, testimonials, ads, aerial drone, and corporate films across all UAE emirates. Response within 2 hours guaranteed.",
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
      name: "Video & Photography Production Services UAE",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Shoots", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Video Commercials (DVCs)", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Reels Production", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "TikTok Content Creation", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aerial Drone Videography GCAA", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Films", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Photo Shoots", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Testimonial Videos", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ads Shooting", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Video Editing", areaServed: "UAE" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
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
    uploadDate: opts.uploadDate,
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
  };
}
