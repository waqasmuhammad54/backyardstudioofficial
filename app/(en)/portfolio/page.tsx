"use client";
import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";

const CATS = ["All", "Events", "Creative", "Products", "Wedding", "Corporate"];

const ALL_PROJECTS = [
  // Events
  { id:1,  title:"Corporate Gala — Dubai",          client:"Fortune 500 Client",        category:"Events",    year:2025, location:"Dubai",      image:"/images/events/event-01.webp",    slug:"corporate-gala-dubai" },
  { id:2,  title:"Office Celebration Series",        client:"Regional Enterprise",       category:"Events",    year:2025, location:"Dubai",      image:"/images/events/event-03.webp",    slug:"office-celebration" },
  { id:3,  title:"Executive Awards Night",           client:"Private Client",            category:"Events",    year:2025, location:"Abu Dhabi",  image:"/images/events/event-04.webp",    slug:"executive-awards" },
  { id:4,  title:"Product Launch — Champagne Toast", client:"FMCG Brand UAE",            category:"Events",    year:2024, location:"Dubai",      image:"/images/events/event-02.webp",    slug:"product-launch-event" },
  { id:5,  title:"Annual Conference Coverage",       client:"Multinational Corp",        category:"Corporate", year:2025, location:"Dubai",      image:"/images/events/event-05.webp",    slug:"annual-conference" },
  { id:6,  title:"Team Celebration — Year End",      client:"Tech Company UAE",          category:"Corporate", year:2024, location:"Dubai",      image:"/images/events/event-06.webp",    slug:"year-end-celebration" },
  // Creative / Fashion
  { id:7,  title:"Neon Beauty Editorial",            client:"Fashion Brand UAE",         category:"Creative",  year:2025, location:"Dubai",      image:"/images/creative/creative-04.webp", slug:"neon-beauty-editorial" },
  { id:8,  title:"Studio Fashion Series — Vol I",    client:"Boutique Brand",            category:"Creative",  year:2025, location:"Dubai",      image:"/images/creative/creative-13.webp", slug:"studio-fashion-vol1" },
  { id:9,  title:"UV Paint Art Direction",           client:"Music Artist UAE",          category:"Creative",  year:2025, location:"Dubai",      image:"/images/creative/creative-05.webp", slug:"uv-paint-art" },
  { id:10, title:"Bold Makeup Campaign",             client:"Beauty Brand",              category:"Creative",  year:2024, location:"Dubai",      image:"/images/creative/creative-10.webp", slug:"bold-makeup-campaign" },
  { id:11, title:"Neon Portrait Series",             client:"Independent Artist",        category:"Creative",  year:2024, location:"Dubai",      image:"/images/creative/creative-01.webp", slug:"neon-portrait-series" },
  { id:12, title:"Fluorescent Studio Shoot",         client:"Lifestyle Brand",           category:"Creative",  year:2024, location:"Dubai",      image:"/images/creative/creative-24.webp", slug:"fluorescent-studio" },
  // Products
  { id:13, title:"Luxury Perfume Campaign",          client:"Premium Fragrance Co.",     category:"Products",  year:2025, location:"Dubai",      image:"/images/products/product-03.webp",  slug:"luxury-perfume-campaign" },
  { id:14, title:"Skincare Editorial",               client:"Wellness Brand UAE",        category:"Products",  year:2025, location:"Dubai",      image:"/images/products/product-01.webp",  slug:"skincare-editorial" },
  { id:15, title:"Fragrance Flat Lay Series",        client:"Cosmetics House",           category:"Products",  year:2024, location:"Dubai",      image:"/images/products/product-05.webp",  slug:"fragrance-flat-lay" },
  // Wedding
  { id:16, title:"Sunset Wedding — Abu Dhabi",       client:"Private Client",            category:"Wedding",   year:2025, location:"Abu Dhabi",  image:"/images/wedding/wedding-01.webp",   slug:"sunset-wedding-abu-dhabi" },
  { id:17, title:"Lakeside Ceremony Film",           client:"Private Client",            category:"Wedding",   year:2025, location:"Dubai",      image:"/images/wedding/wedding-02.webp",   slug:"lakeside-ceremony" },
  { id:18, title:"Golden Hour Bridal Portraits",     client:"Private Client",            category:"Wedding",   year:2024, location:"Sharjah",    image:"/images/wedding/wedding-05.webp",   slug:"golden-hour-bridal" },
  { id:19, title:"Pier Wedding — Sunset Ceremony",   client:"Private Client",            category:"Wedding",   year:2024, location:"Dubai",      image:"/images/wedding/wedding-16.webp",   slug:"pier-wedding" },
  { id:20, title:"Romantic Dock Session",            client:"Private Client",            category:"Wedding",   year:2024, location:"Dubai",      image:"/images/wedding/wedding-08.webp",   slug:"romantic-dock-session" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="relative py-24 text-center overflow-hidden" style={{ background: "var(--black-2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.07) 0%, transparent 65%)" }} />
        <p className="eyebrow mb-4">500+ Projects Delivered</p>
        <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-none text-cream">PORTFOLIO</h1>
        <p className="text-silver/60 mt-4 max-w-md mx-auto text-sm">
          Events, creative shoots, product campaigns & weddings — across all 7 UAE emirates.
        </p>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-[68px] z-30 border-b" style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)", borderColor: "var(--border)" }}>
        <div className="container-xl py-4 flex flex-wrap gap-2">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`text-[0.6rem] tracking-[0.25em] uppercase px-5 py-2 border transition-all duration-300 font-medium
                ${active === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/10 text-silver/50 hover:border-gold/30 hover:text-silver"}`}>
              {c}
              <span className="ml-2 opacity-50">
                {c === "All" ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <Link key={p.id} href={`/portfolio/${p.slug}`}
                className={`group relative overflow-hidden block card-dark
                  ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-video sm:h-full sm:min-h-[440px]" : "aspect-video"}`}>
                  <Image src={p.image} alt={p.title} fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 img-cinematic"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full border border-gold/60 bg-gold/10 backdrop-blur-sm flex items-center justify-center">
                      <Play size={20} fill="#d4a017" color="#d4a017" className="ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold px-2 py-1 tracking-widest uppercase" style={{ background: "var(--gold)", color: "var(--black)" }}>{p.category}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-cream font-display text-lg leading-tight">{p.title.toUpperCase()}</h3>
                      <p className="text-silver/50 text-xs mt-0.5">{p.client} · {p.location} · {p.year}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mb-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-silver/40 text-sm mb-6">Showing {filtered.length} of 500+ projects</p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-3">
              <span>Commission Your Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
