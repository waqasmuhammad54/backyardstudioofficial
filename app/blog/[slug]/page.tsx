import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title,
    description: `Read this article from Backyard Studio Official's blog — expert insights on video production in the UAE.`,
    openGraph: { title, type: "article" },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="pt-24">
      <article className="container-xl max-w-3xl mx-auto py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-sm mb-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-[#666] text-xs mb-4">
          <span className="bg-[#e8c547] text-[#0a0a0a] font-bold px-2 py-0.5 rounded-sm uppercase text-[10px]">Tips & Tricks</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> May 10, 2025</span>
          <span className="flex items-center gap-1"><Clock size={11} /> 5 min read</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">{title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 py-4 border-y border-[#2a2a2a] mb-8">
          <div className="w-10 h-10 rounded-full bg-[#e8c547]/20 flex items-center justify-center text-[#e8c547] font-bold text-sm">AF</div>
          <div>
            <p className="text-white text-sm font-medium">Ahmad Al Farsi</p>
            <p className="text-[#666] text-xs">Founder & Creative Director, Backyard Studio Official</p>
          </div>
          <button className="ml-auto flex items-center gap-1 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-xs">
            <Share2 size={14} /> Share
          </button>
        </div>

        {/* Hero image */}
        <div className="aspect-video relative rounded-sm overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Body */}
        <div className="prose prose-invert max-w-none text-[#a0a0a0] leading-relaxed space-y-5">
          <p>When it comes to video production in the UAE, the market has never been more competitive — or more full of opportunity. Whether you&apos;re planning a corporate launch event in Downtown Dubai, a product DVC for social media, or a testimonial series to build trust with your audience, choosing the right production partner makes all the difference.</p>
          <h2 className="font-display text-3xl text-white">What to Look for in a UAE Production Studio</h2>
          <p>Not all production companies are equal. In the UAE market, you need a partner who understands the region&apos;s unique visual culture, knows how to navigate local permits and logistics, and has a proven track record of delivering on time — in this fast-moving business environment.</p>
          <p>Here&apos;s what we recommend you evaluate before signing any production contract in Dubai or Abu Dhabi:</p>
          <ul className="list-none space-y-3 pl-0">
            {["Portfolio quality — Does their work match the aesthetic you&apos;re aiming for?", "UAE market experience — Have they shot in your target locations?", "Turnaround time — Can they deliver within your campaign timeline?", "Post-production capability — Is editing, colour grading and sound included?", "Client testimonials — What do previous UAE clients say?"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#a0a0a0]">
                <span className="text-[#e8c547] font-bold mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display text-3xl text-white">The Backyard Studio Difference</h2>
          <p>At Backyard Studio Official, we&apos;ve spent 8+ years perfecting our craft in the UAE market. We know what works for Dubai audiences, how to maximise golden hour light in the desert, and how to turn around broadcast-quality edits within 48 hours of shoot day — without sacrificing an inch of quality.</p>
          <p>If you&apos;re planning an event, campaign, or content series in the UAE, we&apos;d love to be your production partner. Drop us a brief today.</p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-center">
          <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-2">READY TO SHOOT?</p>
          <h3 className="font-display text-3xl text-white mb-4">Let&apos;s Work Together</h3>
          <Link href="/contact" className="btn-gold">Start a Project →</Link>
        </div>
      </article>
    </div>
  );
}
