/**
 * Structured Data / JSON-LD helpers
 * Backyard Studio Official — backyardstudioofficial.com
 * Registered: Backyardstudio official For Commercial Photographs Production
 * GEO-optimised for Google AI Overviews, ChatGPT Search, Perplexity, Copilot
 */

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
  ],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: ["Backyard Studio", "Backyard Studio UAE", "BSO Dubai", "Best Production Company Dubai", "Top Production House Dubai"],
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      url: BRAND.logo,
      width: 400,
      height: 400,
    },
    image: BRAND.og,
    description:
      "Backyard Studio Official is the best production company in Dubai. We are a top production house in the UAE specialising in event shoots, wedding photography, DVCs, Instagram Reels, TikTok content, social media shoots, aerial drone, testimonial videos, ads, and corporate films across all 7 UAE emirates. Over 2,400 projects delivered with a 2-hour response guarantee.",
    foundingDate: "2016",
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
      "Aerial Drone Videography GCAA",
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
      name: "Video, Photography & Social Media Production Services UAE",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Shoots Dubai", description: "Professional event photography and videography across all UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography and Videography Dubai", description: "Cinematic wedding shoots, pre-wedding photoshoots and wedding films in Dubai UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Video Commercials DVCs Dubai", description: "High-production DVCs and brand films for UAE businesses", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Reels and TikTok Content Dubai", description: "Social media shoots and short-form content production in Dubai UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Content Creation Dubai", description: "Full social media content production for Instagram TikTok YouTube in UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aerial Drone Videography Dubai GCAA Licensed", description: "GCAA-licensed drone cinematography across all 7 UAE emirates", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Films UAE", description: "Brand documentaries, investor films and corporate video production Dubai", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Photo Shoots Dubai", description: "Editorial, product, lifestyle and brand photography UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Testimonial Videos Dubai", description: "Client testimonial video production across UAE", areaServed: "UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ads Shooting Dubai", description: "Meta, TikTok, YouTube and OOH ad production in UAE", areaServed: "UAE" } },
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
        "@typ