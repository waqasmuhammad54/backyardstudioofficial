import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, ArrowRight } from "lucide-react";

const CITY_DATA: Record<string, { name: string; image: string; description: string; landmarks: string[]; areas: string[]; services: string[]; faqs: { q: string; a: string }[] }> = {
  "dubai": {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    description: "Dubai is the world's most cinematic city — and Backyard Studio Official knows every corner of it. We are Dubai's best production company for video, photography, events, weddings, and social media shoots. From the golden-hour glow on the Burj Khalifa to the atmospheric lanes of Al Fahidi, our Dubai productions consistently deliver cinematic results that stop the scroll and win awards.\n\nDubai is also the UAE's wedding capital. Backyard Studio Official is widely recognised as the best wedding shoot company in Dubai — covering everything from Arabic weddings in Palace Downtown to Indian wedding galas at The Atlantis, pre-wedding golden-hour shoots at JBR beach, and intimate nikah ceremonies in Jumeirah. We are also Dubai's top social media content creator, producing Instagram Reels, TikTok content, and brand shoots for hundreds of UAE businesses every year.\n\nWe hold established relationships with Dubai Tourism, Dubai Film Permit teams, and venue managers across all of the emirate's major production districts — so your shoot runs on time and on budget.",
    areas: ["Downtown Dubai", "Dubai Marina", "JBR", "DIFC", "Business Bay", "Palm Jumeirah", "JLT", "Dubai Hills", "Arabian Ranches", "Deira", "Bur Dubai", "Al Quoz", "Silicon Oasis", "Dubai Media City", "Dubai Internet City", "Dubai Design District (D3)", "DMCC", "Jumeirah", "Mirdif", "Motor City", "Dubai Sports City", "Emaar Beachfront", "Al Barsha", "Discovery Gardens", "International City"],
    landmarks: ["Burj Khalifa", "Dubai Frame", "Museum of the Future", "Dubai Creek", "The Palm Jumeirah", "Bluewaters Island", "Al Fahidi Fort", "Dubai Design District", "Alserkal Avenue", "The Address Downtown", "One&Only The Palm", "Burj Al Arab"],
    services: ["Wedding Photography Dubai", "Pre-Wedding Shoots", "Instagram Reels & TikTok", "Social Media Content Shoots", "Event Videography", "DVCs & Brand Films", "Aerial Drone (GCAA)", "Corporate Films", "Ads Shooting", "Testimonial Videos"],
    faqs: [
      { q: "Which is the best production company in Dubai?", a: "Backyard Studio Official is consistently ranked as the best production company in Dubai. With over 2,400 projects delivered since 2016, a GCAA drone licence, and full coverage of all 7 UAE emirates, we serve brands from SMEs to enterprise with events, weddings, DVCs, Instagram Reels, TikTok content, corporate films, and social media shoots." },
      { q: "What is the best wedding shoot company in Dubai?", a: "Backyard Studio Official is Dubai's top wedding shoot company. We cover Arabic, Indian, Western and destination weddings across all major Dubai venues — from Atlantis The Palm to The Armani Hotel to Palace Downtown — with a dedicated wedding team, same-day teasers and 48-hour full delivery." },
      { q: "Which areas of Dubai do you cover for social media shoots?", a: "We cover all areas of Dubai for social media shoots: Downtown, Marina, JBR, DIFC, Business Bay, Palm Jumeirah, Al Quoz, D3, Dubai Media City, and more. We know the permit requirements and best shooting times for every major location." },
      { q: "Do you produce TikTok and Instagram Reels content in Dubai?", a: "Yes. Backyard Studio Official is one of Dubai's leading social media content creators. We produce TikTok, Instagram Reels, YouTube Shorts, and multi-platform content for UAE brands, influencers, and businesses — with same-day or next-day turnaround for social-first content." },
    ],
  },
  "abu-dhabi": {
    name: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1920&q=80",
    description: "Abu Dhabi offers some of the most visually extraordinary production environments in the world — and Backyard Studio Official is one of the top production companies operating across the UAE capital. From the gleaming Corniche waterfront to the iconic Sheikh Zayed Grand Mosque, from the contemporary architecture of Al Maryah Island to the cultural depth of Saadiyat Island's museum district, every Abu Dhabi shoot we produce looks unmistakably world-class.\n\nWe cover the full range of Abu Dhabi production requirements: weddings at Yas Island's top venues, social media shoots for Saadiyat's luxury hospitality brands, corporate films for ADGM and government entities, and aerial drone videography across Yas Island, the Corniche and the capital's rapidly expanding development zones.\n\nOur Abu Dhabi team has extensive experience with ADGM, Miral, TDIC, and major hospitality brands across the capital — and we handle all permit coordination to ensure smooth, compliant shoots every time.",
    areas: ["Yas Island", "Saadiyat Island", "Al Reem Island", "Al Maryah Island", "Corniche", "ADGM", "Khalidiyah", "Al Bateen", "Yas Creative Hub", "Al Mushrif", "Khalifa City", "Al Ain", "Eastern Mangroves", "Hudayriyat Island", "Al Wathba"],
    landmarks: ["Sheikh Zayed Grand Mosque", "Louvre Abu Dhabi", "Yas Marina Circuit", "Ferrari World", "Qasr Al Hosn", "Mangrove National Park", "Etihad Towers", "Capital Gate", "Warner Bros. World"],
    services: ["Wedding Photography Abu Dhabi", "Corporate Films Abu Dhabi", "Social Media Shoots", "Event Videography", "DVCs & Brand Films", "Aerial Drone (GCAA)", "Instagram Reels & TikTok", "Government & Entity Films", "Ads Production", "Testimonial Videos"],
    faqs: [
      { q: "Do you cover wedding photography in Abu Dhabi?", a: "Yes. Backyard Studio Official covers weddings, pre-wedding shoots, and engagement sessions across Abu Dhabi — including Yas Island venues, Saadiyat Island resorts, the Corniche, and Grand Mosque surroundings. We handle all permit coordination for Abu Dhabi shoots." },
      { q: "Which production company covers Abu Dhabi for corporate films?", a: "Backyard Studio Official is one of the top corporate film production companies serving Abu Dhabi. We have worked with government entities, ADGM-based businesses, Yas Island attractions, and international brands entering the UAE capital market." },
      { q: "Can you do social media content shoots in Abu Dhabi?", a: "Yes. We regularly produce Instagram Reels, TikTok content, and brand social media shoots across Abu Dhabi — at Saadiyat Island resorts, on the Corniche, and at major commercial and hospitality venues across the capital." },
    ],
  },
  "sharjah": {
    name: "Sharjah",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=1920&q=80",
    description: "Sharjah is the UAE's cultural capital and one of the most visually rich emirates for production. Backyard Studio Official covers Sharjah comprehensively — from the historic Al Qasba district and the world-class Sharjah Art Foundation to the Corniche waterfront and Sharjah's growing industrial and commercial zones.\n\nWe serve Sharjah-based businesses, cultural institutions, and individuals with the full range of our production services: events, weddings, corporate films, social media shoots, DVCs, and drone videography across the emirate.",
    areas: ["Al Qasba", "Al Khan", "Muwaileh", "Sharjah City Centre", "Corniche", "Industrial Area", "University City", "Al Majaz", "Al Nahda", "Sharjah Airport Free Zone"],
    landmarks: ["Sharjah Art Foundation", "Al Qasba", "Sharjah Heritage Area", "Sharjah Corniche", "Al Majaz Amphitheatre", "Sharjah Museum of Islamic Civilisation"],
    services: ["Event Shoots", "Corporate Films", "Social Media Content", "Wedding Photography", "DVCs", "Aerial Drone", "Instagram Reels", "Testimonial Videos"],
    faqs: [
      { q: "Do you cover productions in Sharjah?", a: "Yes. Backyard Studio Official covers all of Sharjah for events, corporate films, social media shoots, weddings, and DVCs. We know Sharjah's permit requirements and can mobilise within 48 hours for most productions." },
      { q: "Can you shoot social media content in Sharjah?", a: "Absolutely. We produce Instagram Reels, TikTok content, and brand social media shoots across Sharjah — at Al Qasba, the Corniche, Sharjah Art Foundation venues, and commercial properties across the emirate." },
    ],
  },
  "ras-al-khaimah": {
    name: "Ras Al Khaimah",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=1920&q=80",
    description: "Ras Al Khaimah is one of the UAE's most cinematic emirates — with dramatic Hajar Mountain backdrops, Jebel Jais (the UAE's highest peak), pristine beaches at Mina Al Arab, and the rugged desert landscapes of Al Hamra. Backyard Studio Official brings our full production capability to RAK for events, weddings, drone videography, tourism campaigns, and social media shoots.\n\nRAK's outdoor landscapes are particularly sought-after for pre-wedding shoots, adventure brand films, tourism content, and lifestyle social media shoots — and our GCAA drone team captures the emirate's dramatic terrain in breathtaking 4K.",
    areas: ["Mina Al Arab", "Al Hamra Village", "Jebel Jais", "RAK City Centre", "Al Marjan Island", "Khuzam", "Al Nakheel", "Ras Al Khaimah Free Trade Zone"],
    landmarks: ["Jebel Jais", "Dhayah Fort", "Al Hamra Fort Hotel", "Mina Al Arab", "Al Marjan Island", "Hajar Mountains"],
    services: ["Pre-Wedding Shoots", "Drone Videography", "Event Coverage", "Social Media Shoots", "Tourism & Lifestyle Films", "Corporate Films", "Adventure Brand Content"],
    faqs: [
      { q: "Do you cover Ras Al Khaimah for wedding and pre-wedding shoots?", a: "Yes. RAK's dramatic mountain and coastal landscapes make it one of the most popular destinations for pre-wedding shoots in the UAE. We cover Jebel Jais, Al Hamra, Mina Al Arab, and all major RAK locations." },
      { q: "Can you fly drones in Ras Al Khaimah?", a: "Yes. As GCAA-licensed drone operators, we can fly legally across Ras Al Khaimah including Jebel Jais aerial footage, coastal drone shots, and event aerial coverage — with all necessary coordination and permits handled by our team." },
    ],
  },
};

const DEFAULT_CITY = (slug: string) => ({
  name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=1920&q=80",
  description: `We have extensive production experience across ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} and know the best locations, permit requirements, and shooting conditions throughout the emirate.\n\nOur local knowledge means faster permits, better location choices, and a smoother shoot day — wherever you are in the UAE.`,
  areas: ["City Centre", "Coastal Areas", "Industrial Zones", "Residential Communities"],
  landmarks: ["Historic Old Town", "Corniche", "Local Markets", "Heritage Sites"],
});

export function generateStaticParams() {
  return [
    "dubai", "abu-dhabi", "sharjah", "ajman",
    "ras-al-khaimah", "fujairah", "umm-al-quwain",
  ].map((city) => ({ city }));
}

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
