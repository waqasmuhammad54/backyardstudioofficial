"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/events/event-01.webp",
    eyebrow: "Event Coverage",
    line1: "Every Moment",
    line2: "Deserves",
    line3: "Cinema.",
    sub: "Dubai's finest event shoots — delivered within 48 hours.",
  },
  {
    image: "/images/wedding/wedding-01.webp",
    eyebrow: "Wedding & Lifestyle",
    line1: "Your Story,",
    line2: "Told With",
    line3: "Precision.",
    sub: "Cinematic wedding and lifestyle photography across all UAE emirates.",
  },
  {
    image: "/images/creative/creative-04.webp",
    eyebrow: "Creative Shoots",
    line1: "Bold Vision.",
    line2: "Flawless",
    line3: "Execution.",
    sub: "Editorial, fashion & creative direction for brands that stand out.",
  },
  {
    image: "/images/events/event-03.webp",
    eyebrow: "Corporate & Ads",
    line1: "Campaigns",
    line2: "That Close",
    line3: "Deals.",
    sub: "High-production ad content for Meta, TikTok & OOH — UAE-wide.",
  },
];

const MARQUEE = ["EVENT SHOOTS","DVCs","INSTAGRAM REELS","TIKTOK CONTENT","VIDEO EDITING",
                 "ADS PRODUCTION","TESTIMONIALS","AERIAL DRONE","CORPORATE FILMS","PHOTO SHOOTS"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const next = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
      setTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const s = SLIDES[current];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden bg-ink">

      {SLIDES.map((sl, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={sl.image} alt={sl.eyebrow} fill priority={i === 0}
            className="object-cover scale-[1.04] img-cinematic"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/60" />
        <p className="font-display text-[0.55rem] tracking-[0.5em] text-gold/70 rotate-90 whitespace-nowrap origin-center" style={{ writingMode:"vertical-rl" }}>
          BACKYARD STUDIO — 2026
        </p>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-28">
        <div className="container-xl">
          <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            <div className="w-8 h-px bg-gold" />
            <p className="eyebrow">{s.eyebrow}</p>
            <span className="text-[0.6rem] text-silver/50 tracking-widest">
              {String(current + 1).padStart(2,"0")} / {String(SLIDES.length).padStart(2,"0")}
            </span>
          </div>

          <div className={`transition-all duration-700 delay-100 ${transitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
            <h1 className="font-display leading-none">
              <span className="block text-[clamp(3.5rem,10vw,9rem)] text-cream">{s.line1}</span>
              <span className="block text-[clamp(3.5rem,10vw,9rem)] gold-text">{s.line2}</span>
              <span className="block text-[clamp(3.5rem,10vw,9rem)] text-stroke">{s.line3}</span>
            </h1>
          </div>

          <div className={`mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-200 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            <p className="text-silver/80 text-sm font-light max-w-xs leading-relaxed">{s.sub}</p>
            <div className="flex gap-4">
              <Link href="/portfolio" className="btn-gold"><span>View Our Work</span><ArrowUpRight size={13} /></Link>
              <Link href="/contact"   className="btn-outline"><span>Get a Quote</span></Link>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${i === current ? "w-10 h-[3px] bg-gold shadow-[0_0_10px_rgba(212,160,23,0.8)]" : "w-3 h-[2px] bg-white/20 hover:bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/60" />
        <p className="font-display text-[0.5rem] tracking-[0.4em] text-gold/60" style={{ writingMode:"vertical-rl" }}>SCROLL</p>
      </div>

      <div className="absolute bottom-0 inset-x-0 border-t border-white/5 bg-ink/60 backdrop-blur-sm py-3 overflow-hidden z-10">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="mx-8 font-display text-[0.65rem] tracking-[0.35em] text-silver/40 whitespace-nowrap">
              {item}<span className="mx-8 text-gold/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
