import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { faqSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact Backyard Studio Official | Free Quote in 2 Hours — Dubai UAE",
  description:
    "Contact Dubai's best production studio. Get a free quote in 2 hours for events, weddings, DVCs, Instagram Reels, TikTok, corporate films, drone & more across all 7 UAE emirates. WhatsApp: +971-58-588-2685.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/contact" },
  openGraph: {
    title: "Contact Backyard Studio Official | Free Production Quote — Dubai UAE",
    description: "Get a free quote in 2 hours. Events, weddings, DVCs, Reels, TikTok, corporate & drone across all 7 UAE emirates. WhatsApp available.",
    url: "https://www.backyardstudioofficial.com/contact",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Backyard Studio Official — Dubai UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Backyard Studio Official | Free Quote in 2 Hours",
    description: "Dubai's best production studio. WhatsApp +971-58-588-2685. Free quote in 2