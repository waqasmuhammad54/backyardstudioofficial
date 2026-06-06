import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ShowreelSection from "@/components/home/ShowreelSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ProcessSection from "@/components/home/ProcessSection";
import UAECoverage from "@/components/home/UAECoverage";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import GalleryStrip from "@/components/home/GalleryStrip";
import ContactSection from "@/components/home/ContactSection";
import Link from "next/link";
import { faqSchema, itemListSchema, personSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Best Production Company in Dubai | Backyard Studio Official",
  description: "Dubai's best production company — video, events, weddings & social media across all 7 UAE emirates. GCAA licensed. 2,400+ projects. Free quote in 2 hours.",
  keywords: [
    "best production company in Dubai",
    "top production companies in Dubai",
    "production house Dubai",
    "video production company Dubai",
    "event production company Dubai",
    "best wedding shoot company in Dubai",
    "top wedding shoot company in Dubai",
    "wedding videographer Dubai",
    "wedding photography Dubai",
    "pre wedding photoshoot Dubai",
    "social media content creator Dubai",
    "Instagram reels production Dubai",
    "TikTok content creation Dubai",
    "corporate video production Dubai",
    "film production company Dubai",
    "event videographer Dubai",
    "drone videography Dubai",
    "ads production company Dubai",
    "best production company UAE",
    "top production companies UAE",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com" },
};

const HOME_FAQS = [
  {
    question: "What is the best production company in Dubai in 2026?",
    answer: "Backyard Studio Official is widely recognised as the best production company in Dubai in 2026. With over 2,400 projects delivered across all 7 UAE emirates, 8+ years of cinematic excellence, and a GCAA drone licence, we serve brands from SMEs to enterprise. Services span event shoots, DVCs, Instagram Reels, TikTok, weddings, corporate films, aerial drone, and social media content.",
  },
  {
    question: "Which is the top production house in Dubai for weddings and events?",
    answer: "Backyard Studio Official is Dubai's top production house for weddings, events and social media shoots. We capture weddings, pre-wedding shoots, engagement sessions and lifestyle photography across Dubai, Abu Dhabi, Sharjah and all UAE emirates — with a dedicated wedding team, same-day teasers and 48-hour full delivery.",
  },
  {
    question: "What is the best wedding shoot company in Dubai?",
    answer: "Backyard Studio Official is consistently rated the best wedding shoot company in Dubai. Our cinematic wedding team covers everything from intimate nikah ceremonies to grand reception galas — with cinematic videography, editorial photography, drone coverage, and highlight reels delivered within 48 hours. We cover all UAE venues from Burj Al Arab to Yas Island.",
  },
  {
    question: "How much does video production cost in the UAE?",
    answer: "Video production costs in the UAE range from AED 2,500 for social media reels to AED 500,000+ for high-end DVCs or brand films. Wedding photography and videography packages start from AED 3,500. Backyard Studio Official offers transparent pricing and a free quote within 2 hours.",
  },
  {
    question: "Does Backyard Studio do social media content and Instagram Reels in Dubai?",
    answer: "Yes. Backyard Studio Official is one of Dubai's leading social media content creators, producing Instagram Reels, TikTok videos, YouTube Shorts, and multi-platform content packages for brands, influencers, and businesses across the UAE.",
  },
  {
    question: "Which production company in Dubai covers all UAE emirates?",
    answer: "Backyard Studio Official covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — plus key free zones including DIFC, Dubai Media City, Yas Island, and Saadiyat Island. We mobilise same-day for urgent shoots.",
  },
  {
    question: "Is Backyard Studio GCAA licensed for drone videography in UAE?",
    answer: "Yes. Backyard Studio Official holds a GCAA drone operator licence, making us fully legal for aerial videography at events, weddings, real estate, and outdoor locations across all UAE emirates.",
  },
  {
    question: "How quickly does Backyard Studio respond to briefs?",
    answer: "Our production team responds to all project briefs within 2 hours, 7 days a week. WhatsApp, email, or our contact form all reach the same dedicated team. Most projects can be mobilised within 48–72 hours of a confirmed brief.",
  },
  {
    question: "Who founded Backyard Studio Official in Dubai?",
    answer: "Backyard Studio Official was founded by Fahad Iqbal Butt (Creative Director) and Syed Mazhar Zaidi (Director of Photography). Together they bring over 15 years of combined production experience across Dubai, Abu Dhabi, and the wider UAE. The studio is officially registered as 'Backyardstudio official For Commercial Photographs Production'.",
  },
  {
    question: "What languages does Backyard Studio serve clients in?",
    answer: "Backyard Studio Official serves clients in English, Arabic, Urdu, Hindi, Tagalog, and Russian — reflecting Dubai's diverse international community. Our website is also available in Arabic (/ar), Chinese (/zh), and Russian (/ru) for international brands and visitors.",
  },
  {
    question: "Does Backyard Studio handle large corporate events and government productions in Abu Dhabi?",
    answer: "Yes. Backyard Studio Official regularly handles large-scale corporate events, government productions, brand activations, and summits in Abu Dhabi — including venues such as Yas Island, Saadiyat Island, ADNEC, and Etihad Towers. We deploy full multi-camera production teams with drone operators within 48 hours across all UAE.",
  },
  {
    question: "Does Backyard Studio offer green screen and in-studio shoots in Dubai?",
    answer: "Yes. Backyard Studio Official offers green screen studio shoots, controlled lighting setups, and full in-studio productions in Dubai. Studio hire starts from AED 1,500 and includes professional lighting rigs, multiple backdrops, and full post-production editing. Ideal for ads, TVCs, testimonials, and talking-head interviews.",
  },
];

const HOME_SERVICES_LIST = [
  { name: "Event Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/event-shoots", description: "Professional event photography and videography across Dubai and UAE from AED 2,000." },
  { name: "Wedding Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/photo-shoots", description: "Cinematic wedding photography and videography packages from AED 3,500." },
  { name: "Digital Video Commercials (DVC) Dubai", url: "https://www.backyardstudioofficial.com/services/dvcs", description: "Professional DVC production in Dubai from AED 8,000. Social media, broadcast and digital." },
  { name: "Instagram Reels & TikTok Production Dubai", url: "https://www.backyardstudioofficial.com/services/reels", description: "Algorithm-first Reels and TikTok content for UAE brands from AED 2,500." },
  { name: "Social Media Content Creation Dubai", url: "https://www.backyardstudioofficial.com/services/social-media-content", description: "Full-service social media content creation for UAE brands from AED 2,500." },
  { name: "Aerial Drone Videography Dubai (GCAA Licensed)", url: "https://www.backyardstudioofficial.com/services/aerial-drone", description: "GCAA-licensed drone videography across all 7 UAE emirates from AED 2,500." },
  { name: "Corporate Films Dubai", url: "https://www.backyardstudioofficial.com/services/corporate-films", description: "Brand documentaries and corporate films in Dubai from AED 15,000." },
  { name: "Real Estate Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/real-estate", description: "Professional real estate photo and video for Dubai property listings from AED 1,500." },
  { name: "Product Photography Dubai", url: "https://www.backyardstudioofficial.com/services/product-shoots", description: "Professional product photography for e-commerce and brands in Dubai from AED 1,500." },
  { name: "Podcast Videography Dubai", url: "https://www.backyardstudioofficial.com/services/podcast", description: "Multi-camera video podcast production in Dubai from AED 1,800." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(HOME_SERVICES_LIST)) }}
      />
      {/* Person schemas — GEO/LLM entity signals for founders */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema({
            name: "Fahad Iqbal Butt",
            jobTitle: "Creative Director",
            description: "Fahad Iqbal Butt is the Creative Director and co-founder of Backyard Studio Official, Dubai's leading production company. He leads creative strategy, brand films, DVCs, and event productions across the UAE.",
            url: "https://www.backyardstudioofficial.com/about",
            sameAs: ["https://www.instagram.com/backyardstudioofficial/"],
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema({
            name: "Syed Mazhar Zaidi",
            jobTitle: "Director of Photography",
            description: "Syed Mazhar Zaidi is the Director of Photography and co-founder of Backyard Studio Official in Dubai. He leads all cinematography, wedding films, aerial drone productions, and commercial photography across the UAE.",
            url: "https://www.backyardstudioofficial.com/about",
            sameAs: ["https://www.instagram.com/backyardstudioofficial/"],
          }))
        }}
      />
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <ShowreelSection />
      <PortfolioPreview />
      <GalleryStrip />
      <ProcessSection />
      <UAECoverage />
      <TestimonialsSection />
      <BlogPreview />

      {/* ══════════════════════════════════════════════════════════════
          INTERNAL LINKS — Production Services Dubai & UAE
          Unblocks Google crawl of all service/location/industry pages.
          CRITICAL for indexing — do not remove.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <p className="text-center text-[10px] tracking-widest uppercase mb-10 opacity-60" style={{ color: "var(--silver)" }}>
            Production Services Dubai &amp; UAE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">

            {/* Video Production */}
            <div>
              <p className="text-[9px] tracking-widest uppercase mb-3 opacity-55" style={{ color: "var(--silver)" }}>Video Production</p>
              <ul className="space-y-2">
                {[
                  ["Event Videography Dubai", "/services/event-videography"],
                  ["DVCs & TV Commercials", "/services/dvcs"],
                  ["Car Commercials Dubai", "/services/car-commercials"],
                  ["Corporate Films Dubai", "/services/corporate-films"],
                  ["Corporate Brand Films", "/services/corporate-brand-films"],
                  ["Documentary Films", "/services/documentary"],
                  ["Event Video Editing", "/services/event-video-editing"],
                  ["AI Video Production Dubai", "/services/ai-video"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-xs opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--silver)" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photography */}
            <div>
              <p className="text-[9px] tracking-widest uppercase mb-3 opacity-55" style={{ color: "var(--silver)" }}>Photography</p>
              <ul className="space-y-2">
                {[
                  ["Wedding Photography Dubai", "/services/photo-shoots"],
                  ["Event Photography Dubai", "/services/event-shoots"],
                  ["Product Photography Dubai", "/services/product-shoots"],
                  ["Fashion Photography Dubai", "/services/fashion-shoots"],
                  ["Corporate Photography Dubai", "/services/corporate-videography"],
                  ["Food Photography Dubai", "/services/food"],
                  ["Automotive Photography Dubai", "/services/automotive"],
                  ["Hotel Photography Dubai", "/services/hotel-photography"],
                  ["Real Estate Photography Dubai", "/services/real-estate"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-xs opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--silver)" }}>
                      {label}
                    </Link>
                  </li>
        