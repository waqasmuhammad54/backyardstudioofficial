"use client";
import Link from "next/link";
import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const EMIRATES = [
  { name:"Dubai",          slug:"dubai",          areas:["Downtown","Marina","JBR","DIFC","Palm Jumeirah","Business Bay","JLT","Dubai Hills","Deira","Al Quoz","Silicon Oasis","D3","Dubai Media City","DMCC"], color:"from-gold/20" },
  { name:"Abu Dhabi",      slug:"abu-dhabi",       areas:["Yas Island","Saadiyat","Corniche","Al Reem","Al Maryah","ADGM","Khalidiyah"],                                                                        color:"from-gold/15" },
  { name:"Sharjah",        slug:"sharjah",         areas:["Al Majaz","Al Qasba","Sharjah Waterfront","Al Khan"],                                                                                                color:"from-gold/10" },
  { name:"Ajman",          slug:"ajman",           areas:["Ajman Corniche","Al Jurf","Al Rashidiya"],                                                                                                           color:"from-gold/8"  },
  { name:"Ras Al Khaimah", slug:"ras-al-khaimah",  areas:["RAK City","Al Hamra","Jebel Jais"],                                                                                                                  color:"from-gold/8"  },
  { name:"Fujairah",       slug:"fujairah",        areas:["Fujairah City","Dibba","Khorfakkan"],                                                                                                                 color:"from-gold/8"  },
  { name:"Umm Al Quwain",  slug:"umm-al-quwain",   areas:["UAQ City","Dreamland"],                                                                                                                              color:"from-gold/6"  },
];

export default function UAECoverage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="coverage" className="section-pad bg-ink-2 relative overflow-hidden">
      <div className="section-num">06</div>

      <div className="container-xl">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="eyebrow mb-4">Nationwide Reach</p>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none">
              <span className="text-cream">WE SHOOT</span><br />
              <span className="gold-text">ACROSS</span><br />
              <span className="text-stroke">THE UAE</span>
            </h2>
          </div>
          <div>
            <p className="text-silver/60 font-light leading-relaxed mb-6">
              From the golden-hour skyline of Downtown Dubai to the turquoise coastline of Fujairah — no location in the UAE is too far, too remote, or too complex for our crew.
            </p>
            <div className="flex flex-wrap gap-3">
              {["GCAA Licensed","Fast Permits","Local Scouts","48hr Turnaround"].map(badge => (
                <span key={badge} className="text-[0.6rem] tracking-[0.25em] text-gold border border-gold/25 px-3 py-1.5 uppercase font-medium">{badge}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Emirates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {EMIRATES.map((e, i) => (
            <Link key={e.slug} href={`/locations/${e.slug}`}
              onMouseEnter={() => setHovered(e.slug)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden border transition-all duration-500 p-6
                ${hovered === e.slug
                  ? "border-gold/40 bg-gradient-to-br " + e.color + " to-transparent shadow-[0_0_40px_rgba(212,160,23,0.1)]"
                  : "border-white/5 bg-ink-4 hover:border-gold/20"
                }
                ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              `}>

              {/* Subtle diagonal line */}
              <div className="absolute inset-0 pointer-events-none opacity-30"
                style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(212,160,23,0.015) 20px, rgba(212,160,23,0.015) 21px)" }} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-8 h-8 border flex items-center justify-center transition-all duration-300 ${hovered === e.slug ? "border-gold bg-gold/10" : "border-white/10"}`}>
                    <MapPin size={14} className={`transition-colors duration-300 ${hovered === e.slug ? "text-gold" : "text-silver/40"}`} />
                  </div>
                  <ArrowUpRight size={14} className={`transition-all duration-300 ${hovered === e.slug ? "text-gold opacity-100" : "text-silver/20 opacity-0 group-hover:opacity-100"}`} />
                </div>

                <h3 className={`font-display text-2xl ${i===0?"md:text-4xl":""} mb-3 transition-colors duration-300 ${hovered === e.slug ? "text-cream" : "text-silver/70"}`}>
                  {e.name.toUpperCase()}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {e.areas.slice(0, i===0 ? 8 : 3).map(a => (
                    <span key={a} className={`text-[0.55rem] px-2 py-0.5 border transition-all duration-300 font-light
                      ${hovered === e.slug ? "border-gold/20 text-silver/70 bg-gold/5" : "border-white/5 text-silver/30"}`}>
                      {a}
                    </span>
                  ))}
                  {e.areas.length > (i===0 ? 8 : 3) && (
                    <span className="text-[0.55rem] text-gold/60">+{e.areas.length - (i===0 ? 8 : 3)} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
