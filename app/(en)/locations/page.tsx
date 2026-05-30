import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Production Locations Across UAE — All 7 Emirates",
  description: "Backyard Studio Official shoots video and photography across all 7 UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. No travel fees within UAE. Get a quote in 2 hours.",
};

const EMIRATES = [
  { name: "Dubai",          slug: "dubai",         image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", areas: 25, desc: "Downtown, Marina, JBR, DIFC, Palm, Business Bay, JLT and more." },
  { name: "Abu Dhabi",      slug: "abu-dhabi",     image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80", areas: 10, desc: "Yas Island, Saadiyat, Corniche, Al Reem, ADGM and more." },
  { name: "Sharjah",        slug: "sharjah",       image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", areas: 5,  desc: "Al Majaz, Al Qasba, Sharjah Waterfront, Al Khan." },
  { name: "Ajman",          slug: "ajman",         image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80", areas: 4,  desc: "Ajman Corniche, Al Jurf, Al Rashidiya." },
  { name: "Ras Al Khaimah", slug: "ras-al-khaimah",image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80", areas: 4,  desc: "RAK City, Al Hamra Village, Jebel Jais." },
  { name: "Fujairah",       slug: "fujairah",      image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=800&q=80", areas: 3,  desc: "Fujairah City, Dibba, Khorfakkan coastline." },
  { name: "Umm Al Quwain",  slug: "umm-al-quwain", image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=800&q=80", areas: 2,  desc: "UAQ City, Dreamland Aqua Park area." },
];

export default function LocationsPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">NATIONWIDE</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">UAE COVERAGE</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-md mx-auto text-sm">
          We shoot across all 7 UAE emirates — every city, every community, every vision.
        </p>
      </div>
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {EMIRATES.map((e) => (
            <Link key={e.slug} href={`/locations/${e.slug}`} className="group block border border-[#2a2a2a] rounded-sm overflow-hidden bg-[#1a1a1a] card-glow">
              <div className="aspect-video relative overflow-hidden">
                <Image src={e.image} alt={`Video production in ${e.name}`} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[#e8c547] text-[10px] font-bold px-2 py-0.5 bg-black/60 rounded-sm">{e.areas}+ Areas</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-white font-bold mb-1 group-hover:text-[#e8c547] transition-colors">{e.name}</h2>
                <p className="text-[#666] text-xs leading-relaxed">{e.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
