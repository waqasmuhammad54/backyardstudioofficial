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
      // Dead service pages — 301 to nearest live equivalent
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
      { source: "/blog/content-creation-agency-dubai-2026", destination: "/blog/social-media-content-creation-dubai-2026", permanent: true },
      { source: "/industries/technology", destination: "/industries/tech", permanent: true },
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
    ];
  },
};

export default nextConfig;
