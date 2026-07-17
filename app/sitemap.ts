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
  "sports", "automotive", "healthcare", "tech", "music-entertainment",
  "fitness-wellness", "ecommerce-retail", "education",
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

  // Sprint 12: Dubai location sub-pages (2026-06-22)
  // Sprint 13: Additional Dubai sub-pages (2026-06-22)
  const dubaiSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/dubai/wedding-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/dubai/corporate-video",              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/dubai/event-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/dubai/real-estate-photography",      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/dubai/drone-videography",            lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/food-photography",             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/product-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/personal-branding-photography",lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/headshot-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/newborn-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/maternity-photography",        lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/fashion-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/social-media-content",         lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/birthday-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/kids-photography",             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/dubai/engagement-photography",       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  // Sprint 11: Abu Dhabi location sub-pages (2026-06-22)
  // Sprint 14: Additional Abu Dhabi sub-pages (2026-06-22)
  const abuDhabiSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/abu-dhabi/wedding-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/abu-dhabi/corporate-video",              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/locations/abu-dhabi/event-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/abu-dhabi/real-estate-photography",      lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/abu-dhabi/drone-videography",            lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/abu-dhabi/food-photography",             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: BASE + "/locations/abu-dhabi/product-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/personal-branding-photography",lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/headshot-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/newborn-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/maternity-photography",        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/fashion-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/social-media-content",         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/birthday-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/kids-photography",             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/abu-dhabi/engagement-photography",       lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Sprint 16: Sharjah location sub-pages (2026-06-22)
    { url: BASE + "/locations/sharjah/headshot-photography",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/newborn-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/maternity-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/fashion-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/social-media-content",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/birthday-photography",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/kids-photography",               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/sharjah/engagement-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
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
    // Sprint 10 AR translations (2026-06-19)
    { url: BASE + "/ar/blog/taswir-zifaf-hindi-dubai-2026",       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-afraah-arabiya-dubai-2026",    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-zifaf-wajiha-dubai-2026",      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-nikah-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-brand-shakhsi-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-mataam-ihtirafi-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-muntajat-tijaria-dubai-2026",  lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-uslub-hayat-dubai-2026",       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // Sprint 15 AR translations (2026-06-22)
    { url: BASE + "/ar/blog/taswir-headshot-mihni-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-atfal-mawludeen-dubai-2026",         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-haml-dubai-2026",                    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-moda-ihtirafiya-dubai-2026",         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/sani-muhtawa-shbaka-ijtimaia-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/musawir-eid-milad-dubai-2026",              lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/taswir-atfal-ihtirafiya-dubai-2026",        lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ar/blog/musawir-khetuba-ihtirafiya-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
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
    // Sprint 10 RU translations (2026-06-19)
    { url: BASE + "/ru/blog/indiyskaya-svadba-fotografiya-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/arabskaya-svadba-fotografiya-dubai-2026",    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/vyezdnaya-svadba-dubai-2026",                lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/nikah-fotografiya-dubai-2026",               lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/personal-brending-fotografiya-dubai-2026",   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-restoranov-dubai-2026",          lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-tovarov-dubai-2026",             lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/layfstayl-fotografiya-dubai-2026",           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // Sprint 15 RU translations (2026-06-22)
    { url: BASE + "/ru/blog/headshot-fotografiya-dubai-2026",           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotosessiya-novorozhdennykh-dubai-2026",    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-beremennosti-dubai-2026",       lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fashion-fotografiya-dubai-2026",            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/kreator-kontenta-sotssetey-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotograf-na-den-rozhdeniya-dubai-2026",     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotografiya-detey-dubai-2026",              lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: BASE + "/ru/blog/fotograf-na-pomolvku-dubai-2026",           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
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

  // Sprint 17: Ajman location sub-pages (2026-06-23)
  const ajmanSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/ajman/headshot-photography",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/newborn-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/maternity-photography",          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/fashion-photography",            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/social-media-content",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/birthday-photography",           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/kids-photography",               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ajman/engagement-photography",         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Sprint 18: Ras Al Khaimah location sub-pages (2026-06-23)
  const rakSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/ras-al-khaimah/headshot-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/newborn-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/maternity-photography", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/fashion-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/social-media-content",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/birthday-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/kids-photography",      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/ras-al-khaimah/engagement-photography",lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Sprint 19: Fujairah location sub-pages (2026-06-23)
  const fujairSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/fujairah/headshot-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/newborn-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/maternity-photography", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/fashion-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/social-media-content",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/birthday-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/kids-photography",      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/fujairah/engagement-photography",lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Sprint 20: Umm Al Quwain location sub-pages (2026-06-23)
  const uaqSubPages: MetadataRoute.Sitemap = [
    { url: BASE + "/locations/umm-al-quwain/headshot-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/newborn-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/maternity-photography", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/fashion-photography",   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/social-media-content",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/birthday-photography",  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/kids-photography",      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/locations/umm-al-quwain/engagement-photography",lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];


  const entries = [...core, ...dubaiSubPages, ...abuDhabiSubPages, ...ajmanSubPages, ...rakSubPages, ...fujairSubPages, ...uaqSubPages, ...services, ...locations, ...industries, ...blogPosts, ...blogCategories, ...caseStudies, ...arCore, ...ruCore, ...zhCore];

  return Array.from(
    new Map(
      entries.map((entry) => [entry.url, entry])
    ).values()
  );
}
