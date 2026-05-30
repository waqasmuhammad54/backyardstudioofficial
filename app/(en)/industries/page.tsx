import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Video & Photography Production Services Dubai UAE",
  description: "Industry-specialised video and photography for hospitality, real estate, fashion, F&B, and corporate brands across UAE. Dubai's leading vertical-specific content studio — 2,400+ projects, 48-hour delivery, GCAA drone licensed.",
  keywords: [
    "hospitality video production Dubai",
    "real estate photography UAE",
    "fashion photography Dubai",
    "food photography UAE",
    "corporate video production Dubai",
    "industry specific production UAE",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com/industries" },
};

const INDUSTRIES = [
  {
    slug: "hospitality",
    label: "Hospitality",
    desc: "Hotel photography, resort videos, F&B shoots, and tourism campaigns for 5-star UAE properties.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    tags: ["Hotel Photography", "Resort Video", "F&B Shoots", "Drone Aerials"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    desc: "Property photography, walkthrough videos, developer brand films, and aerial drone for UAE listings.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tags: ["Listing Photography", "Walkthrough Video", "Developer Films", "Drone"],
  },
  {
    slug: "fashion",
    label: "Fashion",
    desc: "Editorial shoots, lookbooks, campaign films, and social media content for UAE fashion brands.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    tags: ["Editorial", "Lookbooks", "Campaign Video", "TikTok & Reels"],
  },
  {
    slug: "food-beverage",
    label: "Food & Beverage",
    desc: "Menu photography, delivery app content, restaurant shoots, and F&B brand films across UAE.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Menu Photography", "Talabat Content", "Restaurant Shoots", "FMCG"],
  },
  {
    slug: "corporate",
    label: "Corporate",
    desc: "Company profile films, executive photography, office shoots, and investor content for UAE businesses.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Company Films", "Headshots", "Office Photography", "Testimonials"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad pt-40" style={{ background: "var(--black)" }}>
        <div className="container-xl text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Industry Expertise</p>
          <h1 className="font-display text-6xl sm:text-8xl leading-none mb-8" style={{ color: "var(--cream)" }}>
            WE SPEAK<br />YOUR INDUSTRY
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--silver)" }}>
            Generic production doesn't cut it. Every industry has different visual language, buyer psychology,
            and platform requirements. We've mastered the content that works for yours.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                className="group block border overflow-hidden transition-all duration-300 hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border)" }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={ind.image} alt={ind.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.8), transparent)" }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>{ind.label.toUpperCase()}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{ind.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ind.tags.map((t) => (
                      <span key={t} className="text-[10px] tracking-widest uppercase px-2 py-1 border"
                        style={{ borderColor: "var(--border)", color: "var(--silver)" }}>{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                    <span>Explore</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <p className="eyebrow mb-6">Not Sure Where to Start?</p>
        <h2 className="font-display text-5xl mb-8" style={{ color: "var(--cream)" }}>TALK TO OUR TEAM</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold">
            <span>Get a Free Quote</span>
            <ArrowUpRight size={14} />
          </Link>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
            className="btn-gold" style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}>
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
