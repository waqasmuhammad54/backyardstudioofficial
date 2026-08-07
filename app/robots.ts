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
 *  2. Several AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
 *     are checked for by name by their operators' tooling. Naming them is an
 *     unambiguous opt-in for AI citation, which is a stated goal for this site.
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

// AI / LLM crawlers. Allowing these is what makes the site quotable in
// ChatGPT, Claude, Gemini, Perplexity, Copilot and the CN/other models.
const AI_BOTS = [
  "GPTBot",              // OpenAI — training + ChatGPT browsing
  "OAI-SearchBot",       // OpenAI search index
  "ChatGPT-User",        // ChatGPT live retrieval
  "ClaudeBot",           // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",     // Gemini / Vertex grounding
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
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

      // Named AI crawlers — explicit opt-in for AI citation.
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: "https://www.backyardstudioofficial.com/sitemap.xml",
    // Not a standard robots.txt directive, but several AI crawlers look for a
    // pointer here and unknown directives are ignored by everything else.
    // /llms.txt      — entity summary, canonical pricing, top questions
    // /llms-full.txt — every Q&A and full article text, generated from source
    // `host` is a Yandex directive naming the canonical mirror. Harmless to
    // other engines, meaningful to Yandex.
    host: "https://www.backyardstudioofficial.com",
  };
}
