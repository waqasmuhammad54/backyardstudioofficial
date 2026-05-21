import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, ArrowRight } from "lucide-react";

const CITY_DATA: Record<string, { name: string; image: string; description: string; landmarks: string[]; areas: string[] }> = {
  "dubai": {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    description: "Dubai is the world's most cinematic city — and we know every corner of it. From the golden-hour glow on the Burj Khalifa to the moody industrial aesthetic of Al Quoz, our Dubai productions consistently punch well above their budget thanks to our intimate knowledge of this extraordinary urban landscape.\n\nWe have established relationships with Dubai Tourism, Dubai Film Permit teams, and venue managers across the emirate — meaning permits are handled smoothly and efficiently so you can focus on your creative vision.",
    areas: ["Downtown Dubai", "Dubai Marina", "JBR", "DIFC", "Business Bay", "Palm Jumeirah", "JLT", "Dubai Hills", "Arabian Ranches", "Deira", "Bur Dubai", "Al Quoz", "Silicon Oasis", "Dubai Media City", "Dubai Internet City", "Dubai Design District (D3)", "DMCC", "Jumeirah", "Mirdif", "Motor City", "Dubai Sports City", "Emaar Beachfront"],
    landmarks: ["Burj Khalifa", "Dubai Frame", "Museum of the Future", "Dubai Creek", "The Palm", "Bluewaters Island", "Al Fahidi Fort", "Dubai Design District"],
  },
  "abu-dhabi": {
    name: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1920&q=80",
    description: "Abu Dhabi's visual diversity is unmatched — from the pristine white beaches of Saadiyat Island to the futuristic skyline of Al Maryah, from the world-class architecture of Yas Island to the serene grandeur of the Sheikh Zayed Grand Mosque.\n\nOur Abu Dhabi production arm has worked with ADGM, Miral, TDIC, and major hospitality brands across the capital. We know the permit system, the golden-hour timings, and the cultural sensitivities that make UAE capital productions require extra care.",
    areas: ["Yas Island", "Saadiyat Island", "Al Reem Island", "Al Maryah Island", "Corniche", "ADGM", "Khalidiyah", "Al Bateen", "Yas Creative Hub", "Al Mushrif", "Khalifa City"],
    landmarks: ["Sheikh Zayed Grand Mosque", "Louvre Abu Dhabi", "Yas Marina Circuit", "Ferrari World", "Qasr Al Hosn", "Mangrove National Park"],
  },
};

const DEFAULT_CITY = (slug: string) => ({
  name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=1920&q=80",
  description: `We have extensive production experience across ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} and know the best locations, permit requirements, and shooting conditions throughout the emirate.\n\nOur local knowledge means faster permits, better location choices, and a smoother shoot day — wherever you are in the UAE.`,
  areas: ["City Centre", "Coastal Areas", "Industrial Zones", "Residential Communities"],
  landmarks: ["Historic Old Town", "Corniche", "Local Markets", "Heritage Sites"],
});

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const data = CITY_DATA[params.city] || DEFAULT_CITY(params.city);
  return {
    title: `Video Production in ${data.name}, UAE | Backyard Studio Official`,
    description: `Professional event shoots, DVCs, Reels & ads production in ${data.name}. Backyard Studio Official covers all areas of ${data.name} with fast turnaround and cinematic results.`,
    keywords: [`video production ${data.name}`, `event videography ${data.name}`, `DVC ${data.name}`, `Instagram Reels ${data.name} UAE`],
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const data = CITY_DATA[params.city] || DEFAULT_CITY(params.city);
  const SERVICES = ["Event Shoots", "DVCs", "Instagram Reels", "TikTok Content", "Testimonial Videos", "Ads Shooting", "Aerial Drone", "Corporate Films"];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <Image src={data.image} alt={`Video production in ${data.name}`} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container-xl pb-10">
          <div className="flex items-center gap-2 text-[#a0a0a0] text-xs mb-2">
            <Link href="/locations" className="hover:text-[#e8c547] transition-colors">UAE Coverage</Link>
            <span>→</span>
            <span className="text-[#e8c547]">{data.name}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            VIDEO PRODUCTION IN {data.name.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Description */}
            {data.description.split("\n\n").map((p, i) => (
              <p key={i} className="text-[#a0a0a0] leading-relaxed mb-5">{p}</p>
            ))}

            {/* Areas */}
            <h2 className="font-display text-3xl text-white mt-10 mb-5">AREAS WE COVER IN {data.name.toUpperCase()}</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {data.areas.map((a) => (
                <span key={a} className="text-sm bg-[#1a1a1a] border border-[#2a2a2a] text-[#a0a0a0] px-3 py-1.5 rounded-sm hover:border-[#e8c547]/50 hover:text-[#e8c547] transition-colors cursor-default">
                  <MapPin size={10} className="inline mr-1" />{a}
                </span>
              ))}
            </div>

            {/* Landmarks */}
            <h2 className="font-display text-3xl text-white mb-5">ICONIC SHOOT LOCATIONS</h2>
            <div className="grid grid-cols-2 gap-3">
              {data.landmarks.map((l) => (
                <div key={l} className="flex items-center gap-2 p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-sm text-[#a0a0a0]">
                  <Camera size={14} className="text-[#e8c547] shrink-0" /> {l}
                </div>
              ))}
            </div>

            {/* Services */}
            <h2 className="font-display text-3xl text-white mt-10 mb-5">SERVICES IN {data.name.toUpperCase()}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SERVICES.map((s) => (
                <div key={s} className="text-center p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-xs text-[#a0a0a0]">{s}</div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-4">
            <div className="p-6 bg-[#1a1a1a] border border-[#e8c547]/30 rounded-sm">
              <h3 className="font-display text-2xl text-white mb-2">SHOOT IN {data.name.toUpperCase()}</h3>
              <p className="text-[#a0a0a0] text-sm mb-5">Get a custom quote for your {data.name} production.</p>
              <Link href="/contact" className="btn-gold w-full justify-center block text-center">Get a Quote →</Link>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
                 className="btn-outline w-full justify-center block text-center mt-3">WhatsApp Us</a>
            </div>
            <div className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
              <p className="text-xs text-[#666] uppercase tracking-widest mb-3">Other Emirates</p>
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((c) => (
                <Link key={c} href={`/locations/${c.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-between py-1.5 text-[#a0a0a0] text-sm hover:text-[#e8c547] transition-colors border-b border-[#2a2a2a] last:border-0">
                  <span>{c}</span><ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#111111] text-center border-t border-[#2a2a2a]">
        <h2 className="font-display text-4xl text-white mb-4">READY TO SHOOT IN {data.name.toUpperCase()}?</h2>
        <p className="text-[#a0a0a0] mb-8 max-w-md mx-auto text-sm">Send us your brief and we&apos;ll respond within 2 hours with a custom production plan.</p>
        <Link href="/contact" className="btn-gold">Start Your Project →</Link>
      </section>
    </div>
  );
}
