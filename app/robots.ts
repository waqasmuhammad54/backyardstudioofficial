import { MetadataRoute } from "next";

/**
 * robots.txt
 *
 * A bare `userAgent: "*"` allow already permits every crawler, so the explicit
 * blocks below are not strictly required. They exist for three reasons:
 *
 *  1. Yandex and Baidu behave better with an explicit named rule. Yandex in
 *     particular reads the `host` directive (declared at the bottom) and Baidu's
 *     crawler is conservative with sites it has no named permission for.
 *  2. Search/retrieval crawlers and model-training crawlers have different
 *     purposes. Named rules document which agents may fetch public pages, but
 *     allowing a crawler never guarantees ranking, grounding or citation.
 *  3. It documents intent, so nobody later assumes an omission was deliberate.
 *
 * IMPORTANT: /api/ stays disallowed. /admin/ and /studio/ stay disallowed —
 * they are the CRM and the Sanity studio and must never be indexed.
 */

// Search engines we actively want ranking us.
const SEARCH_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "Slurp",          // Yahoo
  "DuckDuckBot",
  "YandexBot",      // Yandex — primary RU market crawler
  "YandexImages",
  "Baiduspider",    // Baidu — primary CN market crawler
  "Baiduspider-image",
  "Sogou web spider",
  "360Spider",
  "Applebot",
  "SeznamBot",
  "NaverBot",
];

// AI search/retrieval and model-training crawlers. These rules permit access;
// they are not a citation or recommendation signal. Google-Extended is also
// separate from ordinary Google Search and its generative Search features.
const AI_BOTS = [
  "GPTBot",              // OpenAI model-training crawler
  "OAI-SearchBot",       // OpenAI search crawler
  "ChatGPT-User",        // User-triggered ChatGPT retrieval
  "ClaudeBot",           // Anthropic model-training crawler
  "Claude-User",         // User-triggered Claude retrieval
  "Claude-SearchBot",    // Anthropic search crawler
  "Google-Extended",     // Gemini training / non-Search grounding control
  "PerplexityBot",       // Perplexity search crawler
  "Perplexity-User",     // User-triggered Perplexity retrieval
  "Applebot-Extended",   // Apple generative-AI training control
  "Amazonbot",
  "Bytespider",          // ByteDance / Doubao
  "CCBot",               // Common Crawl — feeds many open models
  "cohere-ai",
  "Meta-ExternalAgent",
  "FacebookBot",
  "DeepSeekBot",
  "MoonshotBot",         // Kimi
  "Zhipuspider",         // GLM / Zhipu
  "MistralAI-User",
  "YouBot",
  "Diffbot",
  "omgili",
  "Timpibot",
];

const DISALLOW = ["/studio/", "/admin/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: everything allowed except the private surfaces.
      { userAgent: "*", allow: "/", disallow: DISALLOW },

      // Named search engines.
      ...SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),

      // Named AI crawlers — explicit access policy, not a citation promise.
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: [
      "https://www.backyardstudioofficial.com/sitemap.xml",
      "https://www.backyardstudioofficial.com/sitemap-images.xml",
    ],
    // Not a standard robots.txt directive, but several AI crawlers look for a
    // pointer here and unknown directives are ignored by everything else.
    // /llms.txt      — entity summary, canonical pricing, top questions
    // /llms-full.txt — every Q&A and full article text, generated from source
    // `host` is a Yandex directive naming the canonical mirror. Harmless to
    // other engines, meaningful to Yandex.
    host: "https://www.backyardstudioofficial.com",
  };
}
