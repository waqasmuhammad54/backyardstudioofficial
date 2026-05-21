import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Video Production Tips, UAE Industry Insights & Behind-the-Scenes",
  description:
    "The Backyard Studio Official journal — expert tips on video production, Instagram Reels, UAE filming locations, DVC costs, and brand storytelling.",
};

const POSTS = [
  { slug: "best-event-videographers-dubai-2025",      title: "Best Event Videographers in Dubai 2025",                        category: "Tips & Tricks",    date: "May 10, 2025",  readTime: "5 min", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",  excerpt: "How to choose the right production partner for your next big event — from corporate launches to gala dinners in Dubai." },
  { slug: "instagram-reels-strategy-uae-brands",      title: "The Instagram Reels Strategy Working for UAE Brands in 2025",   category: "Social Media",     date: "Apr 28, 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",  excerpt: "Organic reach isn't dead. Here's the playbook our clients are using to hit millions of views without spending on ads." },
  { slug: "how-much-does-dvc-cost-uae",               title: "How Much Does a DVC Cost in the UAE? (2025 Breakdown)",         category: "Industry Insight", date: "Apr 15, 2025", readTime: "6 min", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",  excerpt: "A transparent guide to video commercial production budgets in Dubai and Abu Dhabi — from AED 5,000 to AED 500,000+." },
  { slug: "drone-videography-rules-dubai-2025",       title: "Drone Videography Rules in Dubai 2025 — What You Need to Know", category: "Regulations",      date: "Apr 2, 2025",  readTime: "4 min", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",  excerpt: "GCAA permits, no-fly zones, fines — everything a UAE brand needs to know before booking aerial videography." },
  { slug: "best-filming-locations-abu-dhabi",         title: "15 Best Filming Locations in Abu Dhabi for Brand Videos",       category: "UAE Locations",    date: "Mar 20, 2025", readTime: "8 min", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",  excerpt: "From Yas Island to Saadiyat Beach — a cinematographer's guide to Abu Dhabi's most photogenic backdrops." },
  { slug: "video-testimonials-uae-business",          title: "Why Every UAE Business Needs Video Testimonials in 2025",       category: "Case Studies",     date: "Mar 5, 2025",  readTime: "5 min", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",  excerpt: "Video testimonials drive 34% higher conversion rates. Here's how UAE brands are using them to close more deals." },
];

const CATEGORIES = ["All", "Tips & Tricks", "Social Media", "Industry Insight", "UAE Locations", "Case Studies", "Regulations"];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">STUDIO JOURNAL</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">BLOG</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-md mx-auto text-sm">
          Expert insights on video production, UAE filming, social media content and brand storytelling.
        </p>
      </div>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 mb-14 pb-14 border-b border-[#2a2a2a]">
            <div className="aspect-video relative overflow-hidden rounded-sm">
              <Image src={featured.image} alt={featured.title} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#e8c547] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">{featured.category}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[#666] text-xs mb-4">
                <span>{featured.date}</span><span>·</span><Clock size={11} /><span>{featured.readTime} read</span>
              </div>
              <h2 className="text-white font-bold text-2xl leading-snug mb-3 group-hover:text-[#e8c547] transition-colors">{featured.title}</h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#e8c547] text-sm font-semibold">Read Article <ArrowRight size={14} /></span>
            </div>
          </Link>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button key={c} className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#e8c547] hover:text-[#e8c547] transition-all">{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block border border-[#2a2a2a] rounded-sm overflow-hidden bg-[#1a1a1a] card-glow">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#e8c547] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">{p.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#666] text-xs mb-3"><span>{p.date}</span><span>·</span><Clock size={10} /><span>{p.readTime}</span></div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#e8c547] transition-colors">{p.title}</h3>
                  <p className="text-[#666] text-xs leading-relaxed line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
