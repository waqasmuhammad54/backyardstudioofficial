import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORY_SLUGS, CATEGORY_META, getPostsByCategory, type CategorySlug, postDate, postExcerpt } from "@/lib/blogPosts";

const BASE = "https://www.backyardstudioofficial.com";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.category as CategorySlug;
  if (!CATEGORY_SLUGS.includes(slug)) return { title: "Category Not Found" };
  const meta = CATEGORY_META[slug];
  return {
    title: { absolute: meta.metaTitle },
    description: meta.metaDescription,
    alternates: { canonical: `${BASE}/blog/category/${slug}` },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: `${BASE}/blog/category/${slug}`,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: meta.label + " — Backyard Studio Dubai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const slug = params.category as CategorySlug;
  if (!CATEGORY_SLUGS.includes(slug)) notFound();

  const meta = CATEGORY_META[slug];
  const posts = getPostsByCategory(slug);

  const allCategories = CATEGORY_SLUGS.map((s) => ({
    slug: s,
    label: CATEGORY_META[s].label,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: meta.label, item: `${BASE}/blog/category/${slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: meta.heading,
            description: meta.metaDescription,
            url: `${BASE}/blog/category/${slug}`,
            numberOfItems: posts.length,
            publisher: {
              "@type": "Organization",
              name: "Backyard Studio Official",
              url: BASE,
            },
          }),
        }}
      />

      {/* Hero */}
      <div className="pt-24 pb-12" style={{ background: "#111" }}>
        <div className="container-xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {allCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`text-xs px-3 py-1 rounded-sm font-semibold transition-colors ${
                  cat.slug === slug
                    ? "bg-[#e8c547] text-black"
                    : "border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#e8c547] hover:text-[#e8c547]"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <p className="text-[#e8c547] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            {posts.length} articles
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
            {meta.heading}
          </h1>
          <p className="text-[#a0a0a0] max-w-2xl leading-relaxed text-sm">
            {meta.intro}
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="container-xl">
          {posts.length === 0 ? (
            <p className="text-[#666] text-center py-16">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#111] border border-[#1e1e1e] rounded-sm overflow-hidden hover:border-[#e8c547]/30 transition-colors"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-[#e8c547] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#e8c547] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[#666] text-xs leading-relaxed line-clamp-2 mb-3">
                      {postExcerpt(post)}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-[#555]">
                      <span>{postDate(post)}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All categories nav */}
      <section className="py-10 border-t border-[#1e1e1e]" style={{ background: "#111" }}>
        <div className="container-xl">
          <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-4">Browse by category</p>
          <div className="flex flex-wrap gap-3">
            {allCategories.filter((c) => c.slug !== slug).map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="text-sm text-[#a0a0a0] hover:text-[#e8c547] transition-colors"
              >
                {cat.label} →
              </Link>
            ))}
            <Link href="/blog" className="text-sm text-[#a0a0a0] hover:text-[#e8c547] transition-colors">
              All articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "#0a0a0a" }}>
        <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
          Ready to shoot?
        </p>
        <h2 className="font-display text-3xl text-white mb-4">Get a Free Production Quote</h2>
        <p className="text-[#a0a0a0] text-sm mb-8 max-w-sm mx-auto">
          2-hour response. WhatsApp +971 58 588 2685 or email info@backyardstudioofficial.com.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-gold">Request a Quote</Link>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
