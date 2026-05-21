import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Book Your Video Production in UAE",
  description:
    "Get in touch with Backyard Studio Official. Book event shoots, DVCs, reels, ads & more across Dubai, Abu Dhabi and all UAE. Response within 2 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">REACH OUT</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">CONTACT US</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-md mx-auto text-sm">
          Send us your brief and we&apos;ll respond within 2 hours. Let&apos;s make something cinematic.
        </p>
      </div>

      <ContactSection />

      {/* Map embed placeholder */}
      <div className="h-72 bg-[#1a1a1a] border-t border-[#2a2a2a] flex items-center justify-center">
        <p className="text-[#666] text-sm">📍 Google Maps embed — add your API key in .env.local</p>
      </div>
    </div>
  );
}
