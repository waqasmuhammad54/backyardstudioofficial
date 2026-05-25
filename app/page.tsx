import type { Metadata } from "next";
import HeroSlider          from "@/components/home/HeroSlider";
import AboutSection        from "@/components/home/AboutSection";
import ServicesGrid        from "@/components/home/ServicesGrid";
import ShowreelSection     from "@/components/home/ShowreelSection";
import PortfolioPreview    from "@/components/home/PortfolioPreview";
import ProcessSection      from "@/components/home/ProcessSection";
import UAECoverage         from "@/components/home/UAECoverage";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview         from "@/components/home/BlogPreview";
import GalleryStrip        from "@/components/home/GalleryStrip";
import ContactSection      from "@/components/home/ContactSection";
import { faqSchema }       from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Best Production Company in Dubai | Backyard Studio Official — UAE #1 2026",
  description: "Dubai's best production company for video, events, weddings & social media. DVCs, Instagram Reels, TikTok, drone, corporate films & wedding shoots across all 7 UAE emirates. 2,400+ projects. GCAA licensed. Free quote in 2 hours.",
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
    answer: "Yes. Backyard Studio Official is one of Dubai's leading social media content creators, producing Instagram Reels, TikTok videos, YouTube Shorts, and multi-platform content packages for brands, influencers, and businesses across the UAE. Our vertical-first, algorithm-aware content consistently achieves high organic reach.",
  },
  {
    question: "Which production company in Dubai covers all UAE emirates?",
    answer: "Backyard Studio Official covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — plus key free zones including DIFC, Dubai Media City, Yas Island, and Saadiyat Island. We mobilise same-day for urgent shoots.",
  },
  {
    question: "Is Backyard Studio GCAA licensed for drone videography in UAE?",
    answer: "Yes. Backyard Studio Official holds a GCAA drone operator licence, making us fully legal for aerial videography at events, weddings, real estate, and outdoor locations across all UAE emirates. Our drone team captures cinematic 4K aerial footage from desert to coastline.",
  },
  {
    question: "How quickly does Backyard Studio respond to briefs?",
    answer: "Our production team responds to all project briefs within 2 hours, 7 days a week. WhatsApp, email, or our contact form all reach the same dedicated team. Most projects can be mobilised within 48–72 hours of a confirmed brief.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }}
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
      <ContactSection />
    </>
  );
}
