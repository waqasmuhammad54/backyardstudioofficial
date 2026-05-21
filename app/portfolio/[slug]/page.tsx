import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | Portfolio`,
    description: "Watch this project from Backyard Studio Official — UAE's premier creative production studio.",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="pt-24">
      {/* Back */}
      <div className="container-xl py-6">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Video */}
      <div className="aspect-video relative bg-[#111111] max-w-5xl mx-auto mx-4 rounded-sm overflow-hidden border border-[#2a2a2a]">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&q=80"
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full border-2 border-[#e8c547] flex items-center justify-center bg-black/50 hover:bg-[#e8c547]/20 transition-all">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="#e8c547"><path d="M1 1l18 10L1 21V1z"/></svg>
          </button>
        </div>
      </div>

      {/* Details */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-6">{title}</h1>
            <p className="text-[#a0a0a0] leading-relaxed mb-4">
              This project exemplifies Backyard Studio Official&apos;s commitment to cinematic excellence. From the initial brief through to final delivery, every decision was made to maximise the visual impact and emotional resonance of the final piece.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Shot across iconic UAE locations with our elite crew, this production combined cutting-edge camera technology with a deeply considered creative approach — resulting in content that far outperformed benchmark engagement metrics for the client.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm space-y-4">
              {[
                { icon: Tag,      label: "Service",  value: "Event Shoots" },
                { icon: MapPin,   label: "Location", value: "Dubai, UAE" },
                { icon: Calendar, label: "Year",     value: "2025" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <Icon size={16} className="text-[#e8c547] mt-0.5" />
                    <div>
                      <p className="text-[#666] text-xs uppercase tracking-widest">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href="/contact" className="btn-gold w-full justify-center">Book a Similar Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
