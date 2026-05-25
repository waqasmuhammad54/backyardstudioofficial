/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.backyardstudioofficial.com",
  generateRobotsTxt: false, // handled by app/robots.ts
  exclude: ["/studio/*", "/api/*"],
  exclude: ["/studio/*", "/api/*"],
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const UAE_CITIES = [
      "dubai", "abu-dhabi", "sharjah", "ajman",
      "ras-al-khaimah", "fujairah", "umm-al-quwain",
    ];
    const SERVICES = [
      "event-shoots", "event-video-editing", "dvcs", "reels",
      "photo-shoots", "social-media-content", "testimonial-videos",
      "ads-shooting", "aerial-drone", "corporate-films",
    ];
    const paths = [
      ...UAE_CITIES.map((c) => ({ loc: `/locations/${c}`, priority: 0.9, changefreq: "monthly" })),
      ...SERVICES.map((s)  => ({ loc: `/services/${s}`,   priority: 0.8, changefreq: "monthly" })),
    ];
    return paths;
  },
};
