import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Video Production Locations UAE — All 7 Emirates | Backyard Studio Official",
  description: "Backyard Studio Official covers all 7 UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah & Umm Al Quwain for video, photography & events. No travel fees within UAE. Free quote in 2 hours.",
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
  { name: "Abu Dhabi",      slug: "abu-dhabi",     image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80", areas: 10, desc: "Yas Island, Saadiyat, Corniche, Al