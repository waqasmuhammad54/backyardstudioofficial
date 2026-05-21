"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: 500,  suffix: "+", label: "Projects Delivered", detail: "Across all UAE emirates" },
  { value: 7,    suffix: "",  label: "Emirates Covered",   detail: "Every city, every community" },
  { value: 8,    suffix: "+", label: "Years in UAE",       detail: "Since 2017" },
  { value: 100,  suffix: "%", label: "Satisfaction",       detail: "100+ five-star reviews" },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-pad bg-ink-2 relative overflow-hidden">
      {/* Decorative BG number */}
      <div className="section-num">01</div>

      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)" }} />

      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── IMAGE COLLAGE ── */}
          <div className="relative h-[580px] hidden lg:block">
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[70%] h-[60%] overflow-hidden"
                 style={{ clipPath:"polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}>
              <Image src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=900&q=85"
                alt="Backyard Studio crew on set" fill className="object-cover img-cinematic" sizes="35vw" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ink/40" />
            </div>

            {/* Secondary */}
            <div className="absolute bottom-0 right-0 w-[58%] h-[50%] overflow-hidden border border-white/5"
                 style={{ clipPath:"polygon(0 15%, 15% 0, 100% 0, 100% 100%, 0 100%)" }}>
              <Image src="https://images.unsplash.com/photo-1536240478700-b869ad10a2ab?w=800&q=85"
                alt="Video production Dubai" fill className="object-cover img-cinematic" sizes="30vw" />
            </div>

            {/* Floating accent card */}
            <div className="absolute top-[38%] left-[28%] z-10 p-5 bg-ink-4/95 border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
                 style={{ clipPath:"polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
              <p className="font-display text-3xl gold-text">2026</p>
              <p className="text-[0.6rem] tracking-[0.3em] text-silver/60 uppercase">UAE's Premier Studio</p>
            </div>

            {/* Gold corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/50" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-gold/50" />

            {/* Vertical gold rule */}
            <div className="absolute -left-8 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          </div>

          {/* ── COPY ── */}
          <div>
            <p className="eyebrow mb-6">The Studio</p>

            <h2 className="font-display leading-none mb-6">
              <span className="block text-[3.5rem] md:text-[5rem] text-cream">BORN IN</span>
              <span className="block text-[3.5rem] md:text-[5rem] gold-text">DUBAI.</span>
              <span className="block text-[3.5rem] md:text-[5rem] text-stroke">BUILT FOR UAE.</span>
            </h2>

            <p className="text-silver/80 leading-relaxed mb-5 font-light">
              Backyard Studio Official is the UAE's most trusted creative production studio in 2026. We don't just shoot — we craft stories that resonate across every screen, every platform, and every market in the Emirates.
            </p>
            <p className="text-silver/60 leading-relaxed mb-8 font-light text-sm">
              From intimate event coverage in Downtown Dubai to full-scale commercial productions on Yas Island — our team of world-class cinematographers, directors, and editors bring Hollywood craft to every UAE brief.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <Link href="/about" className="btn-outline"><span>Our Story</span><ArrowUpRight size={13} /></Link>
              <Link href="/portfolio" className="link-gold">See the Work →</Link>
            </div>

            {/* Stats grid */}
            <div ref={ref} className="grid grid-cols-2 gap-5 pt-8 border-t border-white/5">
              {STATS.map((st) => (
                <div key={st.label} className="group">
                  <p className="font-display text-4xl md:text-5xl gold-glow leading-none mb-1">
                    {inView ? <CountUp end={st.value} duration={2.5} suffix={st.suffix} /> : `0${st.suffix}`}
                  </p>
                  <p className="text-cream text-sm font-medium">{st.label}</p>
                  <p className="text-silver/40 text-xs mt-0.5">{st.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
