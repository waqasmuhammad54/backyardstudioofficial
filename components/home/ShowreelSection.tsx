"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";

const VIDEOS = [
  {
    id: "1194038771",
    title: "Couple Shoots",
    poster: "/images/wedding/wedding-05.webp",
    category: "Photography",
  },
  {
    id: "1194038751",
    title: "Wedding Shoots",
    poster: "/images/wedding/wedding-01.webp",
    category: "Weddings",
  },
  {
    id: "1194038719",
    title: "Fashion Shoots",
    poster: "/images/creative/creative-04.webp",
    category: "Creative",
  },
];

export default function ShowreelSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Cinematic hero banner ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "70vh", minHeight: "500px" }}>
        <Image
          src="/images/events/event-02.webp"
          alt="Backyard Studio — Showreel 2026"
          fill
          className="object-cover img-cinematic"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)" }}
        />

        {/* Corner marks */}
        <div className="absolute inset-6 border border-gold/10 pointer-events-none" />
        <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/40 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/40 pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="eyebrow mb-6 opacity-70">Showreel 2026</p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] text-cream leading-none mb-10">
            WATCH WHAT<br /><span className="gold-text">WE CREATE</span>
          </h2>

          <button
            onClick={() => setOpen(true)}
            aria-label="Play showreel"
            className="group relative w-24 h-24 flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full border border-gold/30 animate-ping" style={{ animationDuration: "2.5s" }} />
            <span className="absolute inset-2 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
            <div className="relative w-20 h-20 rounded-full border border-gold bg-gold/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-gold/30 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,160,23,0.5)]">
              <Play size={28} fill="#d4a017" color="#d4a017" className="ml-1.5" />
            </div>
          </button>

          <p className="text-silver/50 text-xs tracking-[0.3em] uppercase mt-6 font-light">Play Reel — Couple Shoots</p>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/5 py-2.5 overflow-hidden bg-ink/50 backdrop-blur-sm">
          <div className="marquee-track-rev">
            {Array(10).fill("TRUSTED BY UAE'S FINEST BRANDS").map((t, i) => (
              <span key={i} className="mx-8 font-display text-[0.6rem] tracking-[0.4em] text-gold/30">
                {t} <span className="mx-4 text-gold/20">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Highlights — 3 Vimeo embeds ────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--black-2)" }}>
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow mb-3">Work Highlights</p>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none text-cream">
                OUR LATEST<br /><span style={{ color: "var(--gold)" }}>PRODUCTIONS</span>
              </h2>
            </div>
            <p className="text-sm max-w-xs text-right hidden sm:block" style={{ color: "var(--muted)" }}>
              Click any thumbnail to play. More work added regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <div key={v.id} className="group">
                <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                  <VimeoEmbed
                    vimeoId={v.id}
                    poster={v.poster}
                    title={v.title}
                    aspectRatio="16/9"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-1" style={{ color: "var(--gold)" }}>
                    {v.category}
                  </p>
                  <h3 className="font-display text-lg text-cream tracking-wider">{v.title.toUpperCase()}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fullscreen modal (Couple Shoots reel) ────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-ink/98 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-silver hover:text-gold transition-colors z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video rounded-sm overflow-hidden border border-gold/20 shadow-[0_0_80px_rgba(212,160,23,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://player.vimeo.com/video/1194038771?autoplay=1&color=d4a017&title=0&byline=0&portrait=0"
              title="Backyard Studio Official — Couple Shoots"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
