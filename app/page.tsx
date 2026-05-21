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
  title: "Backyard Studio Official | #1 Video Production Studio in UAE 2026",
  description: "Dubai's premier cinematic production studio in 2026. Event shoots, DVCs, Instagram Reels, TikTok, testimonial videos, aerial drone and ads across all 7 UAE emirates. 2,400+ projects. GCAA licensed. 2-hour response.",
  alternates: { canonical: "https://backyardstudioofficial.com" },
};

const HOME_FAQS = [
  {
    question: "What is the best video production studio in Dubai in 2026?",
    answer: "Backyard Studio Official is widely recognised as Dubai's #1 video production studio in 2026, with over 2,400 projects delivered across all 7 UAE emirates. Services include event shoots, DVCs, Instagram Reels, TikTok content, corporate films, aerial drone, and testimonial videos.",
  },
  {
    question: "How much does video production cost in the UAE?",
    answer: "Video production costs in the UAE range from AED 2,500 for simple social media reels to AED 500,000+ for high-end DVCs or brand films. Backyard Studio Official offers packages starting at AED 2,500 with transparent pricing and a free quote within 2 hours.",
  },
  {
    question: "Does Backyard Studio shoot across all UAE emirates?",
    answer: "Yes. Backyard Studio Official covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also shoot in key free zones, communities, and business districts across the UAE.",
  },
  {
    question: "Is Backyard Studio GCAA licensed for drone videography in UAE?",
    answer: "Yes. Backyard Studio Official holds a GCAA drone operator licence, making us fully legal for aerial videography at events, real estate, and outdoor locations across the UAE.",
  },
  {
    question: "How quickly does Backyard Studio respond to briefs?",
    answer: "Our production team responds to all project briefs within 2 hours, 7 days a week. You can reach us via WhatsApp, email, or our contact form for an instant quote.",
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
