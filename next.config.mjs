/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",     value: "nosniff" },
          { key: "X-Frame-Options",            value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",           value: "1; mode=block" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security",  value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "backyardstudioofficial.com" }],
        destination: "https://www.backyardstudioofficial.com/:path*",
        permanent: true,
      },
      // Dead service pages — 301 to nearest live equivalent.
      // NOTE: /services/wedding-photography, /wedding-videography, /pre-wedding-shoot,
      // /flying-dress-photoshoot, /affordable-wedding-photography and the six
      // /wedding-photography-<emirate> pages are REAL static route folders under
      // app/(en)/services/ — they do NOT come from [slug]/generateStaticParams.
      // Never add a redirect whose `source` is one of those, it would kill a live page.
      { source: "/services/luxury-lifestyle-photography",   destination: "/services/wedding-photography", permanent: true },
      { source: "/services/documentary-production",         destination: "/services/corporate-films",     permanent: true },
      // Drone no longer offered as a service — 301 to related services (preserve link equity)
      { source: "/services/aerial-drone",                   destination: "/services/real-estate",         permanent: true },
      { source: "/locations/:city/drone-videography",       destination: "/locations/:city",              permanent: true },
      { source: "/ar/services/aerial-drone",                destination: "/ar/services",                  permanent: true },
      { source: "/ru/services/aerial-drone",                destination: "/ru/services",                  permanent: true },
      { source: "/zh/services/aerial-drone",                destination: "/zh/services",                  permanent: true },

      // Historical URLs reported by GSC — preserve relevance and link equity
      { source: "/blog/how-much-does-dvc-cost-uae-2026", destination: "/blog/how-much-does-video-production-cost-dubai-2026", permanent: true },
      { source: "/blog/car-commercial-production-dubai-2026", destination: "/blog/car-commercial-dubai-2026", permanent: true },
      { source: "/blog/instagram-reels-strategy-uae-brands-2026", destination: "/blog/instagram-reels-strategy-uae-2026", permanent: true },
      { source: "/blog/corporate-video-production-guide-dubai", destination: "/blog/corporate-video-production-dubai-2026", permanent: true },
      { source: "/blog/wedding-photography-dubai-2026", destination: "/blog/best-wedding-photographers-dubai-2026", permanent: true },
      { source: "/blog/video-production-agency-dubai-2026", destination: "/blog/best-production-companies-dubai-2026", permanent: true },
      // Points straight at the surviving URL — /social-media-content-creation- is now
      // itself redirected, and chaining two 301s leaks authority and slows crawling.
      { source: "/blog/content-creation-agency-dubai-2026", destination: "/blog/social-media-content-creator-dubai-2026", permanent: true },
      { source: "/industries/technology", destination: "/industries/tech", permanent: true },
      // GSC 404: Google discovered this city+service combo by pattern (it exists for
      // Dubai and Abu Dhabi but was never built for Sharjah). Send it to the Sharjah hub.
      { source: "/locations/sharjah/personal-branding-photography", destination: "/locations/sharjah", permanent: true },
      { source: "/zh/blog/yewu-shipin-dubai-2026", destination: "/zh/blog/qiye-shipin-zhizuo-dubai-2026", permanent: true },
      { source: "/zh/blog/dubai-hunjia-sheying-2026", destination: "/zh/blog/hunli-sheying-dubai-2026", permanent: true },
      { source: "/zh/blog/dubai-qiye-shipin-2026", destination: "/zh/blog/qiye-shipin-dubai-2026", permanent: true },

      // Blog URLs seen in GA4 before/while posts were being published.
      // Keep real visitors and any acquired links instead of serving a 404.
      { source: "/blog/comparing-video-production-agencies-in-the-uae-for-a-product-launch-2026-guide-2026", destination: "/blog/comparing-video-production-agencies-in-the-uae-for-a-product-launch-2026", permanent: true },
      { source: "/blog/event-videography-uae-pricing-process-booking-guide-2026", destination: "/blog/event-videography-dubai-2026", permanent: true },
      { source: "/blog/event-videography-uae-pricing-process-booking-guide-2026-2026", destination: "/blog/event-videography-dubai-2026", permanent: true },
      { source: "/blog/newborn-photographer-ajman-2026", destination: "/locations/ajman/newborn-photography", permanent: true },
      { source: "/blog/new", destination: "/blog", permanent: true },

      // ─── Keyword-cannibalisation consolidation (Aug 2026) ──────────────────
      // GSC showed 191 blog URLs producing 163 topic collisions at an average
      // position of 22.5 — multiple pages competing for the same query, so none
      // of them ranked. Each retired URL 301s to the single surviving page for
      // that query. Generated by scripts/consolidate.mjs; see lib/retiredSlugs.ts,
      // which keeps these out of the sitemap.
      //
      // Group A — admin-published slugs renamed (malformed -2026-2026 from the old
      // slug generator, or far too long). The richer article kept, URL cleaned up.
      { source: "/blog/tvc-production-uae-tv-commercial-costs-process-guide-2026", destination: "/blog/tvc-production-dubai-2026", permanent: true },
      { source: "/blog/music-video-production-uae-pricing-process-guide-2026", destination: "/blog/music-video-production-dubai-2026", permanent: true },
      { source: "/blog/best-video-production-company-in-dubai-for-corporate-video-2026-guide-2026", destination: "/blog/corporate-video-production-dubai-2026", permanent: true },
      { source: "/blog/product-video-production-uae-pricing-process-guide-2026", destination: "/blog/product-videography-dubai-2026", permanent: true },
      { source: "/blog/video-podcast-production-dubai-uae-setup-pricing-full-guide-2026-2026", destination: "/blog/video-podcast-production-dubai-2026", permanent: true },
      { source: "/blog/sports-production-company-in-the-uae-football-cricket-basketball-fight-night-coverage-2026-2026", destination: "/blog/sports-production-company-uae-2026", permanent: true },
      { source: "/blog/sports-broadcast-production-uae-full-match-coverage-from-aed-25-000-2026-2026", destination: "/blog/sports-broadcast-production-uae-2026", permanent: true },
      { source: "/blog/car-commercial-production-studio-in-the-uae-full-capability-guide-2026-2026", destination: "/blog/car-commercial-production-uae-2026", permanent: true },
      // Group B — same-query duplicates merged into one winner.
      { source: "/blog/headshot-photography-dubai-2026", destination: "/blog/headshot-photographer-dubai-2026", permanent: true },
      { source: "/blog/business-headshots-dubai-2026", destination: "/blog/headshot-photographer-dubai-2026", permanent: true },
      { source: "/blog/baby-photographer-dubai-2026", destination: "/blog/newborn-photographer-dubai-2026", permanent: true },
      { source: "/blog/maternity-photography-dubai-2026", destination: "/blog/maternity-photographer-dubai-2026", permanent: true },
      { source: "/blog/pregnancy-photoshoot-dubai-2026", destination: "/blog/maternity-photographer-dubai-2026", permanent: true },
      { source: "/blog/kids-photography-dubai-2026", destination: "/blog/kids-photographer-dubai-2026", permanent: true },
      { source: "/blog/birthday-party-photographer-dubai-2026", destination: "/blog/birthday-photographer-dubai-2026", permanent: true },
      { source: "/blog/car-photography-dubai-2026", destination: "/blog/automotive-photography-dubai-2026", permanent: true },
      { source: "/blog/indian-wedding-photography-dubai", destination: "/blog/indian-wedding-photographer-dubai-2026", permanent: true },
      { source: "/blog/indian-wedding-photography-dubai-2026", destination: "/blog/indian-wedding-photographer-dubai-2026", permanent: true },
      { source: "/blog/social-media-content-creation-dubai-2026", destination: "/blog/social-media-content-creator-dubai-2026", permanent: true },
      { source: "/blog/best-social-media-content-creators-dubai-2026", destination: "/blog/social-media-content-creator-dubai-2026", permanent: true },
      { source: "/blog/commercial-production-dubai-2026", destination: "/blog/tv-commercial-dubai-2026", permanent: true },
      { source: "/blog/drone-photography-dubai-2026", destination: "/blog/aerial-videography-dubai-2026", permanent: true },
    ];
  },
};

export default nextConfig;
