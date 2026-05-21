"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const POSTS = [
  {
    slug: "best-event-videographers-dubai-2026",
    title: "Best Event Videographers in Dubai 2026",
    excerpt: "How to choose the right production partner for your next big event — from corporate launches to gala dinners.",
    category: "Industry Insight",
    date: "May 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
    number: "01",
  },
  {
    slug: "instagram-reels-strategy-uae-brands-2026",
    title: "The Reels Strategy Working for UAE Brands Right Now",
    excerpt: "Organic reach rewards creativity. Here's the exact playbook our clients use to hit millions of views in 2026.",
    category: "Social Media",
    date: "Apr 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    number: "02",
  },
  {
    slug: "how-much-does-dvc-cost-uae-2026",
    title: "What a DVC Actually Costs in the UAE — 2026 Breakdown",
    excerpt: "A transparent guide to production budgets in Dubai and Abu Dhabi: from AED 5,000 to AED 500,000+.",
    category: "Production Guide",
    date: "Mar 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    number: "03",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-pad overflow-hidden" style={{ background: "var(--black-3)" }}>
      <div className="container-xl">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.5em] uppercase mb-5 font-medium"
              style={{ color: "var(--gold)" }}
            >
              ✦ Studio Journal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display leading-none"
              style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--cream)" }}
            >
              CREATIVE<br />
              <span className="gold-text">INSIGHTS</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/blog"
              className="btn-gold group inline-flex items-center gap-3 px-8 py-4 font-display tracking-[0.15em] text-sm transition-all"
              style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
            >
              ALL ARTICLES <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Posts — editorial row layout */}
        <div className="space-y-0">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row gap-0 border-t transition-all duration-500 hover:bg-white/[0.02] relative"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Gold sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(212,160,23,0.03) 0%, transparent 60%)" }} />

                {/* Number */}
                <div className="md:w-24 pt-10 pb-8 md:py-10 pr-6 shrink-0">
                  <span className="font-display text-5xl md:text-6xl leading-none transition-colors duration-300"
                    style={{ color: "var(--border)", WebkitTextStroke: "1px var(--border)" }}>
                    <span className="group-hover:gold-text transition-all duration-500">{post.number}</span>
                  </span>
                </div>

                {/* Image */}
                <div className="md:w-56 h-48 md:h-auto shrink-0 relative overflow-hidden">
                  <Image
                    src={post.image} alt={post.title} fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 224px"
                  />
                  {/* Gold tint overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: "var(--gold)" }} />
                </div>

                {/* Content */}
                <div className="flex-1 py-10 px-6 md:px-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-[10px] tracking-[0.35em] uppercase font-semibold px-3 py-1 border"
                        style={{ color: "var(--gold)", borderColor: "rgba(212,160,23,0.3)" }}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--muted)" }}>
                        <Clock size={11} /> {post.readTime} read
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 transition-colors duration-300"
                      style={{ color: "var(--cream)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{post.date}</span>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                      style={{ color: "var(--gold)" }}>
                      Read <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
