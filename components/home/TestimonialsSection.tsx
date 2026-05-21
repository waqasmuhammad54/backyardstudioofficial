"use client";
import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const T = [
  { name:"Sarah Al Mansouri", role:"Marketing Director", company:"Emaar Properties",   service:"Event Shoots",     rating:5, quote:"Backyard Studio delivered our event coverage with a level of professionalism and creativity that exceeded every expectation. The final film moved our entire leadership to tears. Pure cinematic magic." },
  { name:"James McKinley",    role:"CEO",                company:"FinTech Hub UAE",     service:"Testimonials",     rating:5, quote:"Our testimonial video series increased our website conversion rate by 47% within the first month. The team understood our brand voice perfectly and made our clients look and sound incredible on screen." },
  { name:"Noor Khalifa",      role:"Brand Manager",      company:"Noon.com",            service:"Social Media",     rating:5, quote:"The Instagram Reels campaign Backyard Studio produced for our Ramadan 2026 launch garnered 2.3 million organic views in 72 hours. They genuinely understand what works for the UAE audience in 2026." },
  { name:"Ahmed Rashid",      role:"Founder",            company:"Luxury Motors Dubai", service:"DVCs",             rating:5, quote:"Our DVC was flawless — from location scouting in Fujairah to the final colour grade. Backyard Studio are in a completely different league to everyone else we've tried in the UAE market." },
];

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCur(c => (c + dir + T.length) % T.length);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, []);

  const t = T[cur];

  return (
    <section id="testimonials" className="section-pad bg-ink relative overflow-hidden">
      {/* Giant quote background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[25rem] text-white/[0.015] leading-none">&ldquo;</span>
      </div>

      {/* Radial gold glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background:"radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,160,23,0.04) 0%, transparent 70%)" }} />

      <div className="container-xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Social Proof</p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none">
            <span className="text-cream">CLIENT</span>{" "}
            <span className="gold-text">LOVE</span>
          </h2>
          {/* Aggregate stars — GEO signal */}
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#d4a017" color="#d4a017" />)}
            <span className="text-silver/50 text-xs ml-2 font-light">5.0 average — 120+ reviews across Google, Instagram & direct</span>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-400 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#d4a017" color="#d4a017" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed italic mb-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col items-center gap-1">
              <div className="gold-line mx-auto mb-4" />
              <p className="text-cream font-semibold tracking-wide">{t.name}</p>
              <p className="text-silver/50 text-sm font-light">{t.role} — {t.company}</p>
              <span className="mt-3 text-[0.6rem] tracking-[0.3em] text-gold border border-gold/25 px-3 py-1 uppercase">{t.service}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button onClick={() => go(-1)} aria-label="Previous"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-silver/50 hover:border-gold hover:text-gold transition-all duration-300">
              <ArrowLeft size={16} />
            </button>

            <div className="flex gap-2">
              {T.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`rounded-full transition-all duration-500 ${i === cur ? "w-8 h-1.5 bg-gold shadow-[0_0_8px_rgba(212,160,23,0.6)]" : "w-1.5 h-1.5 bg-white/15"}`} />
              ))}
            </div>

            <button onClick={() => go(1)} aria-label="Next"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-silver/50 hover:border-gold hover:text-gold transition-all duration-300">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* All testimonials CTA */}
        <div className="text-center mt-14">
          <a href="/testimonials" className="link-gold">Read All 120+ Reviews →</a>
        </div>
      </div>
    </section>
  );
}
