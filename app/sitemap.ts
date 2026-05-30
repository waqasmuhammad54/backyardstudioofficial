import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";

const BASE = "https://www.backyardstudioofficial.com";

const SERVICES = [
  "event-shoots", "event-video-editing", "dvcs", "reels",
  "photo-shoots", "social-media-content", "testimonial-videos",
  "ads-shooting", "aerial-drone", "corporate-films",
  "social-media-shoots", "automotive", "real-estate",
  "corporate-videography", "podcast", "youtube-content",
  "event-videography", "food", "product-shoots",
  "fashion-shoots", "travel-lifestyle", "tv-commercials",
  "car-commercials", "corporate-brand-films", "documentary",
  "hotel-photography", "reels-production", "brand-events",
  "pre-post-production",
];

const CITIES = [
  "dubai", "abu-dhabi", "sharjah", "ajman",
  "ras-al-khaimah", "fujairah", "umm-al-quwain",
];

const INDUSTRIES = [
  "hospitality", "real-estate", "fashion", "food-beverage", "corporate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: BASE + "/services",         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/portfolio",        lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/pricing",          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/industries",       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/about",            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/contact",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/testimonials",     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/blog",             lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: BASE + "/locations",        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((slug) => ({
    url: BASE + "/services/" + slug,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locations: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: BASE + "/locations/" + city,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industries: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: BASE + "/industries/" + industry,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: BASE + "/blog/" + post.slug,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Arabic pages (/ar/)
  const arCore: MetadataRoute.Sitemap = [
    { url: BASE + "/ar",                                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/ar/services",                                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ar/pricing",                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ar/about",                                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ar/contact",                                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ar/blog",                                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: BASE + "/ar/portfolio",                               lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/testimonials",                            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ar/locations",                               lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswirzifaf-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/asear-tasswirvideo-dubai-2026",      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/video-sharikaat-dubai-2026",         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswiremolak-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  // Russian pages (/ru/)
  const ruCore: MetadataRoute.Sitemap = [
    { url: BASE + "/ru",                                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/ru/services",                                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ru/pricing",                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ru/about",                                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ru/contact",                                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ru/blog",                                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: BASE + "/ru/portfolio",                               lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/testimonials",                            lastModified: now, changeFrequency: "month