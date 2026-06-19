import { MetadataRoute } from "next";
import { BLOG_POSTS, CATEGORY_SLUGS } from "@/lib/blogPosts";
import { CASE_STUDIES } from "@/lib/caseStudies";

const BASE = "https://www.backyardstudioofficial.com";

const SERVICES = [
  "wedding-photography", "wedding-videography", "pre-wedding-shoot",
  "affordable-wedding-photography", "flying-dress-photoshoot", "wedding-photography-abu-dhabi",
  "wedding-photography-sharjah", "wedding-photography-ajman", "wedding-photography-ras-al-khaimah",
  "wedding-photography-fujairah", "wedding-photography-umm-al-quwain",
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
    { url: BASE + "/wedding-packages", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/weddings",         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/case-studies",     lastModified: now, changeFrequency: "monthly", priority: 0.85 },
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

  const blogCategories: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: BASE + "/blog/category/" + slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const caseStudies: MetadataRoute.Sitemap = [
    { url: BASE + "/case-studies", lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    ...CASE_STUDIES.map((cs) => ({
      url: BASE + "/case-studies/" + cs.slug,
      lastModified: new Date(cs.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // Arabic pages (/ar/)
  const arCore: MetadataRoute.Sitemap = [
    { url: BASE + "/ar",                                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/ar/services",                                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ar/pricing",                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ar/about",                                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ar/contact",                                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ar/blog",                                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: BASE + "/ar/blog/taswirzifaf-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/asear-tasswirvideo-dubai-2026",      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/video-sharikaat-dubai-2026",         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswiremolak-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswirafidiyat-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/asear-video-sharkati-dubai-2026",    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-zifaf-emirati-dubai-2026",    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-zifaf-arabi-dubai-2026",      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-taaam-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-muatamart-dubai-2026",        lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/tasjil-video-faaliyat-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/intaj-klip-musiqi-dubai-2026",       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-aris-hindi-dubai-2026",       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-atfal-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-riyadi-dubai-2026",           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-intaj-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-nisa-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-aqariya-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-khetuba-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-mawaalid-dubai-2026",         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  // Russian pages (/ru/)
  const ruCore: MetadataRoute.Sitemap = [
    { url: BASE + "/ru",                                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/ru/services",                                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ru/pricing",                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/ru/about",                                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ru/contact",                                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/ru/blog",                                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: BASE + "/ru/blog/svadebnyi-fotograf-dubai-2026",      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/stoimost-videosemki-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/korporativnoe-video-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/semka-nedvizhimosti-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/svadebnyi-fotograf-abu-dhabi-2026",  lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-nedvizhimosti-dubai-2026",  lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/rily-socsietey-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotosyomka-feropriiatiy-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-edy-dubai-2026",              lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/semeinaya-fotosessiya-dubai-2026",        lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotograf-novorozhdennykh-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/svadebnyi-fotograf-indiyskaya-svadba-dubai-2026", lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/detskiy-fotograf-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/sportivnyi-fotograf-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotosessiya-beremennosti-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/predsvadebnaya-fotosessiya-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotograf-para-dubai-2026",                lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  // Chinese pages (/zh/)
  const zhCore: MetadataRoute.Sitemap = [
    { url: BASE + "/zh",                                                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: BASE + "/zh/services",                                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/zh/pricing",                                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/zh/about",                                           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/zh/contact",                                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/zh/blog",                                            lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: BASE + "/zh/portfolio",                                       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/testimonials",                                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/zh/locations",                                       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/hunli-sheying-dubai-2026",                   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/wurenji-hangpai-dubai-2026",                 lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/qiye-shipin-zhizuo-dubai-2026",              lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/chanpin-sheying-dubai-2026",                 lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/fangchan-paizhao-dubai-2026",                lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/shejiao-meiti-neirong-dubai-2026",           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/qiye-shipin-dubai-2026",                     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/huodong-paizhao-dubai-2026",                 lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/zh/blog/meishi-paizhao-dubai-2026",                  lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  return [...core, ...services, ...locations, ...industries, ...blogPosts, ...blogCategories, ...caseStudies, ...arCore, ...ruCore, ...zhCore];
}
