import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Production Locations UAE | All 7 Emirates" },
  description: "Video and photography across all 7 UAE emirates. Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah and UAQ. No travel fees. Free quote in 2 hours.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/locations" },
  openGraph: {
    title: "Video Production Across All 7 UAE Emirates | Backyard Studio Official",
    description: "Professional video & photography production in Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ. No travel fees. Free quote in 2 hours.",
    url: "https://www.backyardstudioofficial.com/locations",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Video Production UAE — All 7 Emirates | Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production in All 7 UAE Emirates | Backyard Studio Official",
    description: "Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ covered. No travel fees within UAE.",
    images: ["/og-image.jpg"],
  },
};

const LOCATIONS_FAQS = [
  {
    question: "Does Backyard Studio cover all 7 UAE emirates?",
    answer: "Yes. Backyard Studio Official provides professional video and photography production across all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We can mobilise production teams across the UAE within 24–48 hours.",
  },
  {
    question: "Are there travel fees for productions outside Dubai?",
    answer: "Backyard Studio Official does not charge travel fees for productions within the UAE. Whether your shoot is in Dubai, Abu Dhabi, or Ras Al Khaimah, the travel is included in your production quote.",
  },
  {
    question: "What types of production does Backyard Studio offer across the UAE?",
    answer: "We offer the full range of production services across all UAE emirates: event videography, wedding photography, DVCs (digital video commercials), Instagram Reels and TikTok content, corporate films, aerial drone footage (GCAA licensed), testimonial videos, and ads production.",
  },
];

const LOCATIONS_ITEM_LIST = [
  { name: "Video Production in Dubai", url: "https://www.backyardstudioofficial.com/locations/dubai" },
  { name: "Video Production in Abu Dhabi", url: "https://www.backyardstudioofficial.com/locations/abu-dhabi" },
  { name: "Video Production in Sharjah", url: "https://www.backyardstudioofficial.com/locations/sharjah" },
  { name: "Video Production in Ajman", url: "https://www.backyardstudioofficial.com/locations/ajman" },
  { name: "Video Production in Ras Al Khaimah", url: "https://www.backyardstudioofficial.com/locations/ras-al-khaimah" },
  { name: "Video Production in Fujairah", url: "https://www.backyardstudioofficial.com/locations/fujairah" },
  { name: "Video Production in Umm Al Quwain", url: "https://www.backyardstudioofficial.com/locations/umm-al-quwain" },
];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "UAE Coverage", url: "https://www.backyardstudioofficial.com/locations" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(LOCATIONS_ITEM_LIST)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(LOCATIONS_FAQS)) }} />

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

      {/* FAQ Section */}
      <section className="py-16 border-t border-[#2a2a2a]" style={{ background: "var(--ink)" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-white text-center mb-10">UAE COVERAGE FAQ</h2>
          <div className="space-y-5">
            {LOCATIONS_FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-[#2a2a2a] pb-5">
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.question}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-gold">Get a UAE-Wide Quote →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
