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
import { faqSchema, itemListSchema, personSchema, videoObjectSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Video Production Company Dubai | Backyard Studio" },
  description: "Dubai production studio for commercial video, events, weddings, photography and social media across all 7 UAE emirates. 2,400+ projects, GCAA licensed.",
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
    "video production company Dubai UAE",
    "ads production company Dubai",
    "best production company UAE",
    "top production companies UAE",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com" },
};

const HOME_FAQS = [
  {
    question: "Why do UAE brands choose Backyard Studio for production?",
    answer: "Backyard Studio Official has delivered more than 2,400 projects and provides commercial video, events, weddings, photography, social media content, and commercial photography across all seven UAE emirates. The studio was founded in 2019 and launched UAE operations in 2023.",
  },
  {
    question: "How should I choose a Dubai production house for weddings and events?",
    answer: "Compare relevant portfolio work, crew continuity, delivery schedules, licensing, written scope and coverage. Backyard Studio provides wedding, event and social media production across all seven UAE emirates, with deliverables and turnaround agreed in the project proposal.",
  },
  {
    question: "What wedding photography and videography does Backyard Studio provide?",
    answer: "Backyard Studio covers nikah ceremonies, engagements, pre-wedding sessions and receptions with photography, cinematic videography, highlight edits. Packages and delivery timing are confirmed in writing before booking.",
  },
  {
    question: "How much does video production cost in the UAE?",
    answer: "Video production costs in the UAE range from AED 2,500 for social media reels to AED 500,000+ for high-end DVCs or brand films. Wedding photography and videography packages currently start from AED 7,500. Backyard Studio Official confirms final scope in an itemised quote.",
  },
  {
    question: "Does Backyard Studio do social media content and Instagram Reels in Dubai?",
    answer: "Yes. Backyard Studio produces Instagram Reels, TikTok videos, YouTube Shorts and multi-platform content packages for brands, creators and businesses across the UAE.",
  },
  {
    question: "Which production company in Dubai covers all UAE emirates?",
    answer: "Backyard Studio Official covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — plus key free zones including DIFC, Dubai Media City, Yas Island, and Saadiyat Island. We mobilise same-day for urgent shoots.",
  },
  {
    question: "Does Backyard Studio offer drone or aerial filming in the UAE?",
    answer: "No. Aerial and drone filming is not offered as a bookable service. Backyard Studio Official holds a GCAA drone operator licence as a credential, but drone work is not part of the current service catalogue. Production covers events, weddings, corporate films, DVCs, social media content, and commercial photography across all 7 UAE emirates.",
  },
  {
    question: "How quickly does Backyard Studio respond to briefs?",
    answer: "Our production team responds to all project briefs within 2 hours, 7 days a week. WhatsApp, email, or our contact form all reach the same dedicated team. Most projects can be mobilised within 48–72 hours of a confirmed brief.",
  },
  {
    question: "Who founded Backyard Studio Official in Dubai?",
    answer: "Backyard Studio Official was founded in 2019 by Fahad Iqbal Butt, Founder and CEO. Syed Mazhar Zaidi is Co-Founder and Creative Head. The studio launched UAE operations in 2023 and is officially registered as 'Backyardstudio official For Commercial Photographs Production'.",
  },
  {
    question: "What languages does Backyard Studio serve clients in?",
    answer: "Backyard Studio Official serves clients in English, Arabic, Urdu, Hindi, Tagalog, and Russian — reflecting Dubai's diverse international community. Our website is also available in Arabic (/ar), Chinese (/zh), and Russian (/ru) for international brands and visitors.",
  },
  {
    question: "Does Backyard Studio handle large corporate events and government productions in Abu Dhabi?",
    answer: "Yes. Backyard Studio Official regularly handles large-scale corporate events, government productions, brand activations, and summits in Abu Dhabi — including venues such as Yas Island, Saadiyat Island, ADNEC, and Etihad Towers. We deploy full multi-camera production teams within 48 hours across all UAE.",
  },
  {
    question: "Does Backyard Studio offer green screen and in-studio shoots in Dubai?",
    answer: "Yes. Backyard Studio Official offers green screen studio shoots, controlled lighting setups, and full in-studio productions in Dubai. Studio hire starts from AED 1,500 and includes professional lighting rigs, multiple backdrops, and full post-production editing. Ideal for ads, TVCs, testimonials, and talking-head interviews.",
  },
];

const HOME_SERVICES_LIST = [
  { name: "Event Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/event-shoots", description: "Professional event photography and videography across Dubai and UAE from AED 2,000." },
  { name: "Wedding Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/wedding-photography", description: "Wedding photography and videography packages from AED 7,500." },
  { name: "Digital Video Commercials (DVC) Dubai", url: "https://www.backyardstudioofficial.com/services/dvcs", description: "Professional DVC production in Dubai from AED 8,000. Social media, broadcast and digital." },
  { name: "Instagram Reels & TikTok Production Dubai", url: "https://www.backyardstudioofficial.com/services/reels", description: "Algorithm-first Reels and TikTok content for UAE brands from AED 2,500." },
  { name: "Social Media Content Creation Dubai", url: "https://www.backyardstudioofficial.com/services/social-media-content", description: "Full-service social media content creation for UAE brands from AED 2,500." },
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
      {/* VideoObject — matches the primary Vimeo reel rendered below */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObjectSchema({
            name: "Couple Shoots — Backyard Studio Official",
            description: "A 2026 couple-shoot production reel filmed and edited by Backyard Studio Official.",
            thumbnailUrl: "https://www.backyardstudioofficial.com/images/wedding/wedding-05.webp",
            uploadDate: "2026-05-20",
            duration: "PT1M53S",
            embedUrl: "https://player.vimeo.com/video/1194038771",
          }))
        }}
      />
      {/* Person schemas — GEO/LLM entity signals for founders */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema({
            name: "Fahad Iqbal Butt",
            jobTitle: "Founder & CEO",
            description: "Fahad Iqbal Butt is the Founder and CEO of Backyard Studio Official. He founded the studio in 2019 and leads its production business and creative direction.",
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
            jobTitle: "Co-Founder & Creative Head",
            description: "Syed Mazhar Zaidi is the Co-Founder and Creative Head of Backyard Studio Official. He leads cinematography, documentary storytelling, post-production, and creative craft.",
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
                ))}
              </ul>
            </div>

            {/* Social & Digital */}
            <div>
              <p className="text-[9px] tracking-widest uppercase mb-3 opacity-55" style={{ color: "var(--silver)" }}>Social &amp; Digital</p>
              <ul className="space-y-2">
                {[
                  ["Instagram Reels Dubai", "/services/reels"],
                  ["Reels Production Dubai", "/services/reels-production"],
                  ["Social Media Shoots Dubai", "/services/social-media-shoots"],
                  ["TikTok Content Dubai", "/services/social-media-content"],
                  ["Ads Production Dubai", "/services/ads-shooting"],
                  ["YouTube Video Production", "/services/youtube-content"],
                  ["Podcast Production Dubai", "/services/podcast"],
                  ["Testimonial Videos Dubai", "/services/testimonial-videos"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-xs opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--silver)" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations & Industries */}
            <div>
              <p className="text-[9px] tracking-widest uppercase mb-3 opacity-55" style={{ color: "var(--silver)" }}>Locations &amp; Industries</p>
              <ul className="space-y-2">
                {[
                  ["Production Company Dubai", "/locations/dubai"],
                  ["Video Production Abu Dhabi", "/locations/abu-dhabi"],
                  ["Photography Sharjah", "/locations/sharjah"],
                  ["Production RAK", "/locations/ras-al-khaimah"],
                  ["Sports Production UAE", "/industries/sports"],
                  ["Automotive Production UAE", "/industries/automotive"],
                  ["Healthcare Content UAE", "/industries/healthcare"],
                  ["Tech Video Production UAE", "/industries/tech"],
                  ["Education Video UAE", "/industries/education"],
                  ["All UAE Locations", "/locations"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-xs opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--silver)" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* ══ END INTERNAL LINKS ══════════════════════════════════════ */}

      <ContactSection />
    </>
  );
}
