/**
 * Portfolio project data — single source of truth.
 * VideoObject schema fields are ready for Google Video Search & AI engines.
 *
 * Real Vimeo IDs from vimeo.com/user258944063 (Backyard Studio official uae).
 * REQUIRED: Go to each video in Vimeo → Settings → Privacy → set to "Anyone"
 * and enable "Allow this video to be embedded" so iframes work on the site.
 */

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: "Events" | "Creative" | "Products" | "Wedding" | "Corporate";
  year: number;
  location: string;
  image: string;
  vimeoId: string;
  description: string;
  duration: string;
  uploadDate: string;
}

// Real Vimeo IDs — Backyard Studio Official (vimeo.com/user258944063)
const SHOWREEL   = "1197648921"; // Echoes of Untold Stories — B-Roll Showreel
const DVC_PARCO  = "1197640824"; // DVC — Parco Pakistan × Shoaib Akhtar
const DUBAI_REEL = "1197642715"; // Dubai Destination Reel
const REELS_UAE  = "1194798861"; // Reels — UAE (portrait)
const SADPARA    = "1195316550"; // Sadpara Documentary
const BSPEAKS    = "1197642569"; // #Backyardspeaks Brand Film
const GOLDEN_TMP = "1197642639"; // Golden Temple, India — Travel Film

export const ALL_PROJECTS: PortfolioProject[] = [
  // ── Events ──────────────────────────────────────────────────────────────────
  { id:1,  slug:"corporate-gala-dubai",      title:"Corporate Gala — Dubai",           client:"Fortune 500 Client",    category:"Events",    year:2025, location:"Dubai",     image:"/images/events/event-01.webp",      vimeoId:DUBAI_REEL,  description:"Full-scale corporate gala event coverage in Dubai. Cinematic multi-camera production capturing speeches, entertainment, and key moments for a Fortune 500 client.", duration:"PT3M00S", uploadDate:"2025-02-10" },
  { id:2,  slug:"office-celebration",        title:"Office Celebration Series",         client:"Regional Enterprise",   category:"Events",    year:2025, location:"Dubai",     image:"/images/events/event-03.webp",      vimeoId:BSPEAKS,     description:"Dynamic office celebration video series for a regional enterprise in Dubai. Highlights team culture and milestone moments.", duration:"PT2M30S", uploadDate:"2025-03-05" },
  { id:3,  slug:"executive-awards",          title:"Executive Awards Night",            client:"Private Client",        category:"Events",    year:2025, location:"Abu Dhabi", image:"/images/events/event-04.webp",      vimeoId:DUBAI_REEL,  description:"Prestigious executive awards ceremony filmed in Abu Dhabi. Elegant, cinematic coverage of the entire gala evening.", duration:"PT4M00S", uploadDate:"2025-01-20" },
  { id:4,  slug:"product-launch-event",      title:"Product Launch — Champagne Toast",  client:"FMCG Brand UAE",        category:"Events",    year:2024, location:"Dubai",     image:"/images/events/event-02.webp",      vimeoId:DVC_PARCO,   description:"High-energy product launch event video for a leading FMCG brand in the UAE. Captures the brand reveal, guest reactions, and celebration moments.", duration:"PT2M00S", uploadDate:"2024-11-12" },
  // ── Corporate ───────────────────────────────────────────────────────────────
  { id:5,  slug:"annual-conference",         title:"Annual Conference Coverage",        client:"Multinational Corp",    category:"Corporate", year:2025, location:"Dubai",     image:"/images/events/event-05.webp",      vimeoId:DVC_PARCO,   description:"Comprehensive annual conference video production for a multinational corporation in Dubai. Includes keynotes, panels, and highlight reel.", duration:"PT5M00S", uploadDate:"2025-04-08" },
  { id:6,  slug:"year-end-celebration",      title:"Team Celebration — Year End",       client:"Tech Company UAE",      category:"Corporate", year:2024, location:"Dubai",     image:"/images/events/event-06.webp",      vimeoId:BSPEAKS,     description:"Year-end team celebration film for a UAE tech company. Warm, authentic storytelling showcasing company culture.", duration:"PT2M30S", uploadDate:"2024-12-20" },
  // ── Creative ────────────────────────────────────────────────────────────────
  { id:7,  slug:"neon-beauty-editorial",     title:"Neon Beauty Editorial",             client:"Fashion Brand UAE",     category:"Creative",  year:2025, location:"Dubai",     image:"/images/creative/creative-04.webp", vimeoId:SHOWREEL,    description:"Striking neon beauty editorial shoot for a UAE fashion brand. High-contrast lighting and bold colour grading throughout.", duration:"PT1M30S", uploadDate:"2025-02-28" },
  { id:8,  slug:"studio-fashion-vol1",       title:"Studio Fashion Series — Vol I",     client:"Boutique Brand",        category:"Creative",  year:2025, location:"Dubai",     image:"/images/creative/creative-13.webp", vimeoId:REELS_UAE,   description:"First instalment of the Studio Fashion Series — a cinematic fashion film produced entirely in Backyard Studio, Dubai.", duration:"PT2M00S", uploadDate:"2025-01-15" },
  { id:9,  slug:"uv-paint-art",              title:"UV Paint Art Direction",            client:"Music Artist UAE",      category:"Creative",  year:2025, location:"Dubai",     image:"/images/creative/creative-05.webp", vimeoId:SHOWREEL,    description:"Vibrant UV paint art direction and music video shoot for a UAE music artist. Experimental lighting design in a controlled studio environment.", duration:"PT3M00S", uploadDate:"2025-03-20" },
  { id:10, slug:"bold-makeup-campaign",      title:"Bold Makeup Campaign",              client:"Beauty Brand",          category:"Creative",  year:2024, location:"Dubai",     image:"/images/creative/creative-10.webp", vimeoId:REELS_UAE,   description:"Bold, editorial-style makeup campaign video for a Dubai beauty brand. Showcases products through dramatic close-ups and vivid storytelling.", duration:"PT1M30S", uploadDate:"2024-10-05" },
  { id:11, slug:"neon-portrait-series",      title:"Neon Portrait Series",              client:"Independent Artist",    category:"Creative",  year:2024, location:"Dubai",     image:"/images/creative/creative-01.webp", vimeoId:SHOWREEL,    description:"Artistic neon portrait series created in collaboration with a Dubai independent artist. Moody lighting and dramatic compositions.", duration:"PT1M00S", uploadDate:"2024-09-18" },
  { id:12, slug:"fluorescent-studio",        title:"Fluorescent Studio Shoot",          client:"Lifestyle Brand",       category:"Creative",  year:2024, location:"Dubai",     image:"/images/creative/creative-24.webp", vimeoId:SADPARA,     description:"Fluorescent-lit studio production for a Dubai lifestyle brand. Energetic, vibrant visuals designed for social media campaigns.", duration:"PT1M30S", uploadDate:"2024-08-22" },
  // ── Products ─────────────────────────────────────────────────────────────────
  { id:13, slug:"luxury-perfume-campaign",   title:"Luxury Perfume Campaign",           client:"Premium Fragrance Co.", category:"Products",  year:2025, location:"Dubai",     image:"/images/products/product-03.webp",  vimeoId:REELS_UAE,   description:"Cinematic luxury perfume campaign for a premium UAE fragrance brand. Macro photography, liquid motion, and golden-hour colour palette.", duration:"PT1M00S", uploadDate:"2025-02-14" },
  { id:14, slug:"skincare-editorial",        title:"Skincare Editorial",                client:"Wellness Brand UAE",    category:"Products",  year:2025, location:"Dubai",     image:"/images/products/product-01.webp",  vimeoId:BSPEAKS,     description:"Clean, editorial skincare video for a UAE wellness brand. Soft lighting, texture close-ups, and aspirational lifestyle framing.", duration:"PT1M30S", uploadDate:"2025-03-01" },
  { id:15, slug:"fragrance-flat-lay",        title:"Fragrance Flat Lay Series",         client:"Cosmetics House",       category:"Products",  year:2024, location:"Dubai",     image:"/images/products/product-05.webp",  vimeoId:REELS_UAE,   description:"Overhead flat-lay fragrance video series for a Dubai cosmetics house. Art-directed compositions with precise colour grading.", duration:"PT1M00S", uploadDate:"2024-07-30" },
  // ── Wedding ──────────────────────────────────────────────────────────────────
  { id:16, slug:"sunset-wedding-abu-dhabi",  title:"Sunset Wedding — Abu Dhabi",        client:"Private Client",        category:"Wedding",   year:2025, location:"Abu Dhabi", image:"/images/wedding/wedding-01.webp",   vimeoId:SHOWREEL,    description:"Romantic sunset wedding film in Abu Dhabi. Cinematic wide-angle coverage of the ceremony, first dance, and golden-hour portraits.", duration:"PT4M30S", uploadDate:"2025-01-05" },
  { id:17, slug:"lakeside-ceremony",         title:"Lakeside Ceremony Film",            client:"Private Client",        category:"Wedding",   year:2025, location:"Dubai",     image:"/images/wedding/wedding-02.webp",   vimeoId:GOLDEN_TMP,  description:"Intimate lakeside wedding ceremony film in Dubai. Aerial drone shots, candid moments, and a cinematic highlight reel.", duration:"PT5M00S", uploadDate:"2025-02-22" },
  { id:18, slug:"golden-hour-bridal",        title:"Golden Hour Bridal Portraits",      client:"Private Client",        category:"Wedding",   year:2024, location:"Sharjah",   image:"/images/wedding/wedding-05.webp",   vimeoId:SHOWREEL,    description:"Stunning golden hour bridal portrait film in Sharjah. Warm tones, soft bokeh, and artful compositions for the bridal suite.", duration:"PT2M30S", uploadDate:"2024-11-08" },
  { id:19, slug:"pier-wedding",              title:"Pier Wedding — Sunset Ceremony",    client:"Private Client",        category:"Wedding",   year:2024, location:"Dubai",     image:"/images/wedding/wedding-16.webp",   vimeoId:DUBAI_REEL,  description:"Breathtaking pier wedding sunset ceremony in Dubai. Sea reflections, natural light, and emotional storytelling throughout.", duration:"PT4M00S", uploadDate:"2024-10-18" },
  { id:20, slug:"romantic-dock-session",     title:"Romantic Dock Session",             client:"Private Client",        category:"Wedding",   year:2024, location:"Dubai",     image:"/images/wedding/wedding-08.webp",   vimeoId:SHOWREEL,    description:"Romantic dock session film at Dubai Marina. Intimate moments captured with shallow depth-of-field and warm cinematic grading.", duration:"PT3M00S", uploadDate:"2024-09-25" },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

export function buildVideoObjectSchema(project: PortfolioProject) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${project.title} | Backyard Studio Official`,
    description: project.description,
    thumbnailUrl: `https://www.backyardstudioofficial.com${project.image}`,
    uploadDate: (() => {
      // Normalize to ISO 8601 with timezone for Google VideoObject schema.
      const d = new Date(project.uploadDate);
      if (isNaN(d.getTime())) return project.uploadDate;
      const fmt = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const parts = Object.fromEntries(fmt.formatToParts(d).map((p) => [p.type, p.value]));
      const hour = parts.hour === "24" ? "00" : parts.hour;
      return `${parts.year}-${parts.month}-${parts.day}T${hour}:${parts.minute}:${parts.second}+04:00`;
    })(),
    duration: project.duration,
    embedUrl: `https://player.vimeo.com/video/${project.vimeoId}`,
    contentUrl: `https://vimeo.com/${project.vimeoId}`,
    url: `https://www.backyardstudioofficial.com/portfolio/${project.slug}`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
      logo: { "@type": "ImageObject", url: "https://www.backyardstudioofficial.com/logo-black.png", width: 400, height: 400 },
    },
    productionCompany: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    },
    genre: project.category,
    locationCreated: {
      "@type": "Place",
      name: project.location,
      address: { "@type": "PostalAddress", addressLocality: project.location, addressCountry: "AE" },
    },
  };
}

export function buildPortfolioItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Backyard Studio Official — Portfolio",
    description: "Award-winning video production and photography portfolio from Backyard Studio Official, Dubai UAE. 500+ projects across events, weddings, corporate, creative, and product categories.",
    url: "https://www.backyardstudioofficial.com/portfolio",
    numberOfItems: ALL_PROJECTS.length,
    itemListElement: ALL_PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.backyardstudioofficial.com/portfolio/${p.slug}`,
      name: p.