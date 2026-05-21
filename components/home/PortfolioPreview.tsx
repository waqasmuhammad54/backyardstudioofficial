"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";

const CATS = ["All", "Events", "Creative", "Products", "Wedding"];

const PROJECTS = [
  {
    id: 1,
    title: "Corporate Gala — Dubai",
    client: "Fortune 500 Client",
    category: "Events",
    image: "/images/events/event-01.webp",
    slug: "corporate-gala-dubai",
    featured: true,
  },
  {
    id: 2,
    title: "Neon Beauty Editorial",
    client: "Fashion Brand UAE",
    category: "Creative",
    image: "/images/creative/creative-04.webp",
    slug: "neon-beauty-editorial",
    featured: false,
  },
  {
    id: 3,
    title: "Luxury Perfume Campaign",
    client: "Premium Fragrance Co.",
    category: "Products",
    image: "/images/products/product-03.webp",
    slug: "luxury-perfume-campaign",
    featured: false,
  },
  {
    id: 4,
    title: "Sunset Wedding — Abu Dhabi",
    client: "Private Client",
    category: "Wedding",
    image: "/images/wedding/wedding-01.webp",
    slug: "sunset-wedding-abu-dhabi",
    featured: true,
  },
  {
    id: 5,
    title: "Office Celebration Shoot",
    client: "Regional Enterprise",
    category: "Events",
    image: "/images/events/event-04.webp",
    slug: "office-celebration-shoot",
    featured: false,
  },
  {
    id: 6,
    title: "Studio Fashion Series",
    client: "Boutique Brand",
    category: "Creative",
    image: "/images/creative/creative-13.webp",
    slug: "studio-fashion-series",
    featured: false,
  },
];

export default function PortfolioPreview() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="work" className="section-pad bg-ink-2 relative overflow-hidden">
      <div className="section-num">04</div>
      <div className="container-xl">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none">
              <span className="text-cream">OUR</span><br />
              <span className="gold-text">PORTFOLIO</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`text-[0.6rem] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-300 font-medium
                  ${active === c
                    ? "border-gold bg-gold/10 text-gold shadow-[0_0_20px_rgba(212,160,23,0.15)]"
                    : "border-white/10 text-silver/50 hover:border-gold/30 hover:text-silver"}`}
                style={{ clipPath: active === c ? "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" : "none" }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <Link key={p.id} href={`/portfolio/${p.slug}`}
              className={`group relative overflow-hidden block card-dark
                ${i === 0 && active === "All" ? "md:col-span-2 md:row-span-2" : ""}`}>

              <div className={`relative overflow-hidden ${i === 0 && active === "All" ? "aspect-square md:aspect-auto md:h-full min-h-[400px]" : "aspect-video"}`}>
                <Image src={p.image} alt={p.title} fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 img-cinematic"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full border border-gold/60 bg-gold/10 backdrop-blur-sm flex items-center justify-center">
                    <Play size={20} fill="#d4a017" color="#d4a017" className="ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[0.55rem] tracking-[0.35em] text-gold uppercase font-semibold">{p.category}</span>
                    <h3 className="text-cream font-display text-xl mt-0.5">{p.title.toUpperCase()}</h3>
                    <p className="text-silver/50 text-xs">{p.client}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-gold" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6">
          <Link href="/portfolio" className="btn-gold"><span>View All Work</span><ArrowUpRight size={13} /></Link>
          <p className="text-silver/40 text-xs font-light">500+ projects delivered across the UAE</p>
        </div>
      </div>
    </section>
  );
}
