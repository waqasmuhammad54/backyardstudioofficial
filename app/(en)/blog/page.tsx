import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Video Production Tips & UAE Industry Insights",
  description:
    "Expert tips on video production costs Dubai, wedding photography UAE, filming locations, DVC budgets, social media content strategy from Dubai's #1 production studio.",
  keywords: [
    "video production blog Dubai",
    "production company blog UAE",
    "wedding photography tips Dubai",
    "DVC cost UAE guide",
    "social media content Dubai",
    "filming locations Dubai",
    "drone videography UAE rules",
    "Instagram Reels strategy UAE brands",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com/blog" },
  openGraph: {
    title: "Blog | Video Production Tips & UAE Industry Insights",
    description: "Expert insights on video production, wedding photography, social media content from Dubai's leading production studio.",
    type: "website",
  },
};

const ALL_CATEGORIES = [
  "All", "Industry Guide", "Pricing", "Weddings",
  "Social Media", "Regulations", "UAE Locations", "Food & F&B", "Real Estate", "Corporate",
];

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="pt-24">
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">STUDIO JOURNAL</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">BLOG</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Expert insights on video production costs, UAE filming locations, wedding photography, social media strategy
          and brand storytelling from Dubai&apos;s leading production studio.
        </p>
      </div>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 mb-14 pb-14 border-b border-[#2a2a2a]"
          >
            <div className="aspect-video relative overflow-hidden rounded-sm">
              <Image
                src={featured.image} alt={featured.title} fill priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#e8c547] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-sm">
                <span className="text-white text-[10px] font-semibold">FEATURED</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[#666] text-xs mb-4">
                <span>{featured.date}</span>
                <span>&#183;</span>
                <Clock size={11} />
                <span>{featured.readTime} read</span>
              </div>
              <h2 className="text-white font-bold text-2xl leading-snug mb-3 group-hover:text-[#e8c547] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#e8c547] text-sm font-semibold">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          <div className="flex flex-wrap gap-2 mb-10">
            {ALL_CATEGORIES.map((c) => (
              <span key={c}
                className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#e8c547] hover:text-[#e8c547] transition-all cursor-default">
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group block border border-[#2a2a2a] rounded-sm overflow-hidden bg-[#1a1a1a] card-glow">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#e8c547] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#666] text-xs mb-3">
                    <span>{post.date}</span><span>&#183;</span><Clock size={10} /><span>{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#e8c547] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#666] text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-center">
            <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">READY TO PRODUCE?</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Start Your Project Today</h2>
            <p className="text-[#a0a0a0] text-sm mb-6 max-w-md mx-auto">
              Get a custom production plan delivered within 2 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-gold">Get a Free Quote</Link>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
