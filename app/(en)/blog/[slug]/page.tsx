import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { BLOG_POSTS, getBlogPost, getRelatedPosts, postDate, postExcerpt } from "@/lib/blogPosts";
import { getDynamicPost, getDynamicPosts } from "@/lib/dynamicPosts";
import { faqSchema, articleSchema, breadcrumbSchema, speakableSchema } from "@/lib/structuredData";

const BASE = "https://www.backyardstudioofficial.com";

// Maps blog post category → location service slug for UAE Locations sidebar
const CATEGORY_SERVICE_MAP: Record<string, string> = {
  "Wedding Photography":      "wedding-photography",
  "Wedding":                  "wedding-photography",
  "Wedding Guide":            "wedding-photography",
  "Wedding Videography":      "wedding-photography",
  "Real Estate":              "real-estate-photography",
  "Corporate":                "corporate-video",
  "Corporate Guide":          "corporate-video",
  "Video Production":         "corporate-video",
  "Video":                    "corporate-video",
  "Videography Guide":        "corporate-video",
  "Videography":              "corporate-video",
  "Production Guide":         "corporate-video",
  "Events":                   "event-photography",
  "Event Guide":              "event-photography",
  "Product Photography":      "product-photography",
  "Ecommerce Photography":    "product-photography",
  "Product":                  "product-photography",
  "Brand Production":         "personal-branding-photography",
  "Portrait Photography":     "headshot-photography",
  "Hospitality":              "food-photography",
  "Social Media":             "social-media-content",
  "Social Media Video":       "social-media-content",
  "Social Media Production":  "social-media-content",
  "Commercial Photography":   "event-photography",
};

/**
 * Emirates that still have /locations/<city>/<service> sub-pages.
 *
 * The five northern emirates were consolidated into their city hubs on
 * 8 Oct 2026, so `/locations/sharjah/food-photography` and its siblings now
 * 308 back to `/locations/sharjah`. This sidebar was generating a link for all
 * seven emirates regardless, which quietly turned into **63 internal links
 * pointing at redirects** across the blog — found by the live crawl in
 * scripts/audit-technical-seo.mjs, not by any static check.
 *
 * `scripts/check-internal-redirects.mjs` could never have caught it: that only
 * reads literal `source:` entries from next.config.mjs, and these redirects are
 * produced at runtime by `fallbackFor()` in the [city]/[service] route.
 *
 * Keep this in sync with the cities that still have entries in `PAGES` there.
 */
const CITIES_WITH_SERVICE_PAGES = new Set(["dubai", "abu-dhabi"]);

const UAE_CITIES = [
  { slug: "dubai",           label: "Dubai" },
  { slug: "abu-dhabi",       label: "Abu Dhabi" },
  { slug: "sharjah",         label: "Sharjah" },
  { slug: "ajman",           label: "Ajman" },
  { slug: "ras-al-khaimah",  label: "Ras Al Khaimah" },
  { slug: "fujairah",        label: "Fujairah" },
  { slug: "umm-al-quwain",   label: "Umm Al Quwain" },
];

export function generateStaticParams() {
  const dynamic = getDynamicPosts();
  return [...BLOG_POSTS, ...dynamic].map((post) => ({ slug: post.slug }));
}

/**
 * EN blog slug → translated counterparts.
 * Add an entry here whenever a post is translated so hreflang stays bidirectional.
 */
const TRANSLATED_POSTS: Record<string, Record<string, string>> = {
  "wedding-photography-packages-in-dubai-real-2026-pricing-guide-2026": {
    en: `${BASE}/blog/wedding-photography-packages-in-dubai-real-2026-pricing-guide-2026`,
    ar: `${BASE}/ar/blog/baqat-taswir-zifaf-dubai-asaar-2026`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug) ?? getDynamicPost(params.slug);
  if (!post) return { title: "Article Not Found" };
  // ⚠️ This used to be `post.metaTitle.split(" | ")[0]` — take the first
  // segment, full stop — to enforce a length cap. Length won over uniqueness,
  // and it silently collapsed DISTINCT articles onto IDENTICAL SERP titles:
  //
  //   "Food Photography Dubai 2026 | Backyard Studio"                     ->
  //   "Food Photography Dubai 2026 | Restaurant & F&B Photography Guide"  ->
  //        both rendered  "Food Photography Dubai 2026 | Backyard Studio"
  //
  // Same for the two real-estate posts. Two URLs with the same title and the
  // same topic are what makes Google pick its own canonical and drop one —
  // i.e. the "Duplicate without user-selected canonical" bucket — even though
  // audit-duplicate-content.mjs shows the BODY prose of this site is only 21%
  // similar at its worst. The differentiating half of the title was being
  // thrown away by the length guard.
  //
  // Now: keep the LONGEST prefix of " | " segments that still fits, so the
  // distinguishing segment survives whenever there is room for it. Measured in
  // widths, not characters, to match scripts/audit-technical-seo.mjs.
  // scripts/check-serp-title-collisions.mjs fails the build if two posts still
  // land on the same title, because this bug is invisible from the source.
  const BRAND = " | Backyard Studio";
  const core = post.metaTitle.replace(/\s*\|\s*Backyard Studio(?: Official)?\s*$/i, "");
  const segs = core.split(" | ");
  const w = (s: string) =>
    [...s].reduce(
      (n, c) =>
        n +
        (/[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿가-힣＀-｠]/.test(c)
          ? 2
          : 1),
      0,
    );
  let safeTitle = segs[0] + BRAND;
  for (let n = segs.length; n >= 1; n--) {
    const candidate = segs.slice(0, n).join(" | ") + BRAND;
    if (w(candidate) <= 60) { safeTitle = candidate; break; }
  }
  // If even the first segment plus brand overflows, drop the brand rather than
  // the keyword — Google frequently rewrites or omits a brand suffix anyway.
  if (w(safeTitle) > 60 && w(segs[0]) <= 60) safeTitle = segs[0];

  // Descriptions were cut with `substring(0, 152) + "..."`, which lands
  // mid-word. Prefer a sentence boundary, then a clause, then a word.
  const safeDesc = (() => {
    const d = post.metaDescription;
    if (d.length <= 160) return d;
    const win = d.slice(0, 156);
    for (const probe of [". ", "! ", "? "]) {
      const k = win.lastIndexOf(probe);
      if (k >= 90) return d.slice(0, k + 1).trim();
    }
    for (const probe of ["— ", "– ", ", ", "; "]) {
      const k = win.lastIndexOf(probe);
      if (k >= 90) return d.slice(0, k).trim().replace(/[,;—–]$/, "");
    }
    const sp = win.lastIndexOf(" ");
    return (sp >= 90 ? d.slice(0, sp) : win).trim().replace(/[,;—–]$/, "");
  })();
  return {
    title: { absolute: safeTitle },
    description: safeDesc,
    keywords: post.keywords,
    alternates: {
      canonical: `${BASE}/blog/${post.slug}`,
      // Bidirectional hreflang for posts that have a translated counterpart.
      // Google needs the link declared on BOTH sides to treat them as alternates
      // rather than as competing duplicates.
      ...(TRANSLATED_POSTS[post.slug]
        ? { languages: { ...TRANSLATED_POSTS[post.slug], "x-default": `${BASE}/blog/${post.slug}` } }
        : {}),
    },
    openGraph: {
      title: safeTitle,
      description: safeDesc,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 675, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug) ?? getDynamicPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);
  const faqJsonLd = post.faqs.length > 0 ? faqSchema(post.faqs) : null;
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "Blog", url: `${BASE}/blog` },
    { name: post.title, url: `${BASE}/blog/${post.slug}` },
  ]);
  const articleJsonLd = articleSchema({
    title: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.dateISO,
    authorName: post.author,
    url: `${BASE}/blog/${post.slug}`,
  });
  const blogSpeakable = speakableSchema(`${BASE}/blog/${post.slug}`, ["h1", "h2", "h3", ".speakable"]);
  const locationServiceSlug = CATEGORY_SERVICE_MAP[post.category] ?? null;

  const sidebarServices = [
    { label: "Event Videography", slug: "event-videography" },
    { label: "Wedding Photography", slug: "photo-shoots" },
    { label: "Social Media Content", slug: "social-media-shoots" },
    { label: "DVCs", slug: "dvcs" },
    { label: "Corporate Films", slug: "corporate-films" },
  ];

  const sidebarIndustries = [
    { label: "Hospitality", slug: "hospitality" },
    { label: "Real Estate", slug: "real-estate" },
    { label: "Fashion", slug: "fashion" },
    { label: "Food & Beverage", slug: "food-beverage" },
    { label: "Corporate", slug: "corporate" },
  ];

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSpeakable) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <article>
        <div className="relative overflow-hidden" style={{ height: "55vh" }}>
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 50%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 container-xl pb-10">
            <span className="bg-[#e8c547] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="container-xl py-10" style={{ maxWidth: "72rem" }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-[#666] text-xs mb-6 pb-6 border-b border-[#2a2a2a]">
            <span className="flex items-center gap-1"><Calendar size={11} /> {postDate(post)}</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
            <span className="text-[#a0a0a0]">By {post.author}</span>
            <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
              className="ml-auto flex items-center gap-1 text-[#a0a0a0] hover:text-[#e8c547] transition-colors">
              <Share2 size={14} /> Share
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 min-w-0">
              <p className="text-[#c0c0c0] text-lg leading-relaxed mb-8 pl-5 italic"
                style={{ borderLeft: "2px solid #e8c547" }}>
                {postExcerpt(post)}
              </p>

              <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* 90 FAQ entries across 15 posts use `q`/`a` instead of
                  `question`/`answer`. Reading only the documented fields rendered
                  six empty bordered boxes on each of those pages. Normalise both
                  shapes and drop anything still empty, so a malformed entry costs
                  us one FAQ rather than a page of blank boxes. */}
              {(() => {
                const faqs = (post.faqs ?? [])
                  .map((faq) => {
                    const f = faq as { question?: string; answer?: string; q?: string; a?: string };
                    return {
                      question: (f.question ?? f.q ?? "").trim(),
                      answer: (f.answer ?? f.a ?? "").trim(),
                    };
                  })
                  .filter((f) => f.question && f.answer);

                if (faqs.length === 0) return null;

                return (
                  <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
                    <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                      FREQUENTLY ASKED QUESTIONS
                    </p>
                    <div className="space-y-6">
                      {faqs.map((faq, i) => (
                        <div key={i} className="border border-[#2a2a2a] rounded-sm p-6 bg-[#1a1a1a]">
                          <h3 className="text-white font-semibold text-sm mb-3">{faq.question}</h3>
                          <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div className="mt-12 p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-center">
                <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-2">READY TO SHOOT?</p>
                <h3 className="font-display text-3xl text-white mb-4">Let&apos;s Work Together</h3>
                <p className="text-[#a0a0a0] text-sm mb-6 max-w-sm mx-auto">
                  Get a custom production quote delivered within 2 hours.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/contact" className="btn-gold">Get a Free Quote</Link>
                  <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Us</a>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-72 shrink-0 space-y-8">
              <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">ABOUT THE STUDIO</p>
                <p className="text-[#a0a0a0] text-xs leading-relaxed mb-4">
                  Backyard Studio Official is Dubai&apos;s leading full-service production studio.
                  2,400+ projects delivered across all 7 UAE emirates since 2019.
                </p>
                <Link href="/about" className="text-[#e8c547] text-xs font-semibold hover:underline">Learn more</Link>
              </div>

              {/* Reverse siloing: informational blog traffic is pushed into the
                  two commercial-investigation guides, which in turn link into
                  /pricing and the service pages. */}
              <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">BUYER&apos;S GUIDES</p>
                <div className="space-y-3">
                  <Link href="/how-to-choose-a-production-company-in-dubai" className="block group">
                    <p className="text-white text-xs font-semibold leading-snug group-hover:text-[#e8c547] transition-colors">
                      How to Choose a Production Company in Dubai
                    </p>
                    <p className="text-[#666] text-[10px] mt-1">10-point checklist &amp; red flags</p>
                  </Link>
                  <Link href="/uae-video-production-cost-report-2026" className="block group">
                    <p className="text-white text-xs font-semibold leading-snug group-hover:text-[#e8c547] transition-colors">
                      UAE Video Production Cost Report 2026
                    </p>
                    <p className="text-[#666] text-[10px] mt-1">Rate bands &amp; budget breakdown</p>
                  </Link>
                  <Link href="/pricing" className="block group">
                    <p className="text-white text-xs font-semibold leading-snug group-hover:text-[#e8c547] transition-colors">
                      Our Published Pricing
                    </p>
                    <p className="text-[#666] text-[10px] mt-1">Every tier, what&apos;s included</p>
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-[#111111] rounded-sm" style={{ border: "1px solid rgba(232,197,71,0.3)" }}>
                <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-3">GET A QUOTE</p>
                <p className="text-[#a0a0a0] text-xs leading-relaxed mb-4">
                  2-hour response guaranteed. Tell us about your project.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-center btn-gold text-xs py-2 px-4">Request a Quote</Link>
                  <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
                    className="block text-center btn-outline text-xs py-2 px-4">WhatsApp Us</a>
                </div>
              </div>

              {related.length > 0 && (
                <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                  <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">RELATED ARTICLES</p>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                        <div className="aspect-video relative rounded-sm overflow-hidden mb-2">
                          <Image src={rp.image} alt={rp.title} fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="288px" />
                        </div>
                        <p className="text-white text-xs font-semibold leading-snug group-hover:text-[#e8c547] transition-colors line-clamp-2">
                          {rp.title}
                        </p>
                        <p className="text-[#666] text-[10px] mt-1">{rp.readTime} read</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {locationServiceSlug && (
                <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                  <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">UAE LOCATIONS</p>
                  <div className="space-y-2">
                    {UAE_CITIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={
                          CITIES_WITH_SERVICE_PAGES.has(c.slug)
                            ? `/locations/${c.slug}/${locationServiceSlug}`
                            : `/locations/${c.slug}`
                        }
                        className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-xs">
                        <span className="text-[#e8c547]">&#8594;</span> {c.label}
                      </Link>
                    ))}
                    <Link href="/locations"
                      className="flex items-center gap-2 text-[#e8c547] text-xs font-semibold mt-3 pt-3 border-t border-[#2a2a2a] hover:underline">
                      All Locations
                    </Link>
                  </div>
                </div>
              )}

              <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">INDUSTRY SOLUTIONS</p>
                <div className="space-y-2">
                  {sidebarIndustries.map((i) => (
                    <Link key={i.slug} href={`/industries/${i.slug}`}
                      className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-xs">
                      <span className="text-[#e8c547]">&#8594;</span> {i.label}
                    </Link>
                  ))}
                  <Link href="/industries"
                    className="flex items-center gap-2 text-[#e8c547] text-xs font-semibold mt-3 pt-3 border-t border-[#2a2a2a] hover:underline">
                    All Industries
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">OUR SERVICES</p>
                <div className="space-y-2">
                  {sidebarServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-xs">
                      <span className="text-[#e8c547]">&#8594;</span> {s.label}
                    </Link>
                  ))}
                  <Link href="/services"
                    className="flex items-center gap-2 text-[#e8c547] text-xs font-semibold mt-3 pt-3 border-t border-[#2a2a2a] hover:underline">
                    View all services
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
