import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blogPosts";
import { faqSchema, articleSchema, breadcrumbSchema } from "@/lib/structuredData";

const BASE = "https://www.backyardstudioofficial.com";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
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
  const post = getBlogPost(params.slug);
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

  const sidebarServices = [
    { label: "Event Videography", slug: "event-videography" },
    { label: "Wedding Photography", slug: "photo-shoots" },
    { label: "Social Media Content", slug: "social-media-shoots" },
    { label: "DVCs", slug: "dvcs" },
    { label: "Drone / Aerial", slug: "aerial-drone" },
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
            <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
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
                {post.excerpt}
              </p>

              <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.content }} />

              {post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
                  <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                    FREQUENTLY ASKED QUESTIONS
                  </p>
                  <div className="space-y-6">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="border border-[#2a2a2a] rounded-sm p-6 bg-[#1a1a1a]">
                        <h3 className="text-white font-semibold text-sm mb-3">{faq.question}</h3>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                  2,400+ projects delivered across all 7 UAE emirates since 2016.
                </p>
                <Link href="/about" className="text-[#e8c547] text-xs font-semibold hover:underline">Learn more</Link>
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
                      className="flex items-center gap-2 text-[#a0a0a0] hover: