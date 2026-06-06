import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, ArrowRight } from "lucide-react";
import { faqSchema, speakableSchema, breadcrumbSchema } from "@/lib/structuredData";

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
  "ajman": {
    name: "Ajman",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=1920&q=80",
    description: "Ajman is one of the UAE's most accessible emirates for production — with a beautiful Corniche, historic fort, and a growing commercial and residential community. Backyard Studio Official covers Ajman for events, weddings, corporate films, social media shoots, and DVCs.\n\nOur team knows Ajman's permit processes and best shooting locations, making us the preferred production partner for brands and individuals based in or shooting within the emirate.",
    areas: ["Ajman City Centre", "Ajman Corniche", "Al Jurf", "Al Rashidiya", "Al Nuaimiya", "Al Rawda", "Ajman Free Zone", "Al Hamidiyah"],
    landmarks: ["Ajman Museum", "Ajman Corniche", "Ajman Fort", "City Centre Ajman", "Al Zorah Nature Reserve"],
    services: ["Event Shoots", "Corporate Films", "Social Media Content", "Wedding Photography", "DVCs", "Aerial Drone", "Instagram Reels", "Testimonial Videos"],
    faqs: [
      { q: "Do you cover productions in Ajman?", a: "Yes. Backyard Studio Official covers all of Ajman for events, corporate films, social media shoots, weddings, and DVCs. We handle permit coordination and can mobilise within 48 hours for most Ajman productions." },
      { q: "Can you shoot social media content in Ajman?", a: "Yes. We produce Instagram Reels, TikTok content, and brand social media shoots across Ajman — at the Corniche, Ajman Corniche beachfront, Al Zorah, and commercial venues across the emirate." },
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

  "fujairah": {
    name: "Fujairah",
    image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=1920&q=80",
    description: "Fujairah is one of the UAE's most cinematic emirates — with dramatic Hajar Mountain backdrops, pristine East Coast beaches, and the historic Fujairah Fort. It's a popular destination for pre-wedding shoots, adventure brand films, and tourism content. Backyard Studio Official brings our full production capability to Fujairah, including GCAA drone operations over the East Coast's stunning terrain.\n\nWe cover events in Fujairah City, wedding shoots along the East Coast beaches, corporate films for Fujairah's growing business community, and social media content for tourism and hospitality brands based in the emirate.",
    areas: ["Fujairah City", "Dibba Al Fujairah", "Khorfakkan", "Kalba", "Al Faseel", "Mina Al Fahal", "Qidfa", "Mirbah"],
    landmarks: ["Fujairah Fort", "Al Bidyah Mosque", "Khorfakkan Corniche", "Fujairah Heritage Village", "Hajar Mountains", "East Coast beaches"],
    services: ["Pre-Wedding Shoots", "Drone Videography", "Event Coverage", "Social Media Shoots", "Tourism & Lifestyle Films", "Corporate Films", "Wedding Photography"],
    faqs: [
      { q: "Do you cover wedding and pre-wedding shoots in Fujairah?", a: "Yes. Fujairah's East Coast beaches and Hajar Mountain landscapes make it one of the most popular destinations for pre-wedding shoots in the UAE. We cover all major Fujairah and East Coast locations including Khorfakkan, Dibba, and Kalba." },
      { q: "Can you fly drones in Fujairah?", a: "Yes. As GCAA-licensed drone operators, we can fly legally across Fujairah — capturing stunning aerial footage of the East Coast, Hajar Mountains, and coastal areas with all permit coordination handled by our team." },
    ],
  },
  "umm-al-quwain": {
    name: "Umm Al Quwain",
    image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=1920&q=80",
    description: "Umm Al Quwain is one of the UAE's most tranquil and scenic emirates — with mangrove-lined lagoons, historic old town architecture, and the popular Dreamland Aqua Park. Backyard Studio Official covers UAQ for events, social media shoots, nature and lifestyle content, and productions requiring authentic Old UAE scenery.\n\nOur team handles all permit coordination for Umm Al Quwain productions and can mobilise efficiently for brands and clients based in or shooting within the emirate.",
    areas: ["UAQ City Centre", "Old Town UAQ", "Dreamland Area", "King Faisal Road", "Al Salama", "Al Shamera"],
    landmarks: ["Umm Al Quwain Fort", "UAQ Lagoon", "Dreamland Aqua Park", "UAQ Old Town Corniche", "UAQ Mangroves"],
    services: ["Event Shoots", "Social Media Content", "Corporate Films", "Wedding Photography", "DVCs", "Aerial Drone", "Lifestyle Films"],
    faqs: [
      { q: "Do you cover productions in Umm Al Quwain?", a: "Yes. Backyard Studio Official covers Umm Al Quwain for events, social media shoots, corporate films, and weddings. We can mobilise within 48 hours and handle all UAQ permit requirements." },
      { q: "What makes Umm Al Quwain a good filming location?", a: "UAQ offers authentic Old UAE scenery, mangrove lagoons, and a relaxed environment that's ideal for lifestyle content, nature shoots, and productions seeking a contrast to Dubai's urban aesthetic. The UAQ mangroves in particular are sought after for editorial and fashion shoots." },
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
  const pageUrl = `https://www.backyardstudioofficial.com/locations/${params.city}`;
  return {
    title: `Video & Photography Production in ${data.name}, UAE | Backyard Studio Official`,
    description: `Professional video production, event shoots, weddings, DVCs, Instagram Reels & drone in ${data.name}. Backyard Studio Official covers all areas of ${data.name} — fast turnaround, cinematic results. Free quote in 2 hours.`,
    keywords: [`video production ${data.name}`, `event videography ${data.name}`, `DVC ${data.name}`, `Instagram Reels ${data.name} UAE`, `wedding photography ${data.name}`, `production company ${data.name}`],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `Video & Photography Production in ${data.name} | Backyard Studio Official`,
      description: `Events, weddings, DVCs, Reels & drone in ${data.name}. UAE's leading production studio. Free quote in 2 hours.`,
      url: pageUrl,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Video Production in ${data.name} — Backyard Studio Official` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Vi