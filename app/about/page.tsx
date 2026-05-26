import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { personSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "About Us | Fahad Iqbal Butt & Syed Mazhar Zaidi — Dubai Production Studio",
  description:
    "Meet the team behind Dubai's best production studio. Co-founded by filmmaker Fahad Iqbal Butt and cinematographer Syed Mazhar Zaidi (IMDB) — 2,400+ projects across all 7 UAE emirates since 2019. GCAA licensed. Free quote in 2 hours.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/about" },
};

const TEAM = [
  {
    name: "Fahad Iqbal Butt",
    role: "Founder & CEO",
    photo: "/images/team/fahad.webp",
    bio: "Creative entrepreneur, filmmaker and fashion photographer. BSc Fashion Design (UK Excel Board) — Film & TV, National College of Arts Lahore. Founded Backyard Studio in 2019 with a vision to blend emotion, craft and cinematic storytelling.",
    links: [],
  },
  {
    name: "Syed Mazhar Zaidi",
    role: "Co-Founder & Creative Head",
    photo: "/images/team/mazhar.webp",
    bio: "Filmmaker, cinematographer and documentary storyteller. NCA Lahore + Master's in Mass Communication, GC University. Documented 900+ Partition stories across 84 Gurdwaras. DOP & colorist on 50+ music videos and commercials. Collaborated with 40+ national and international brands.",
    links: [{ label: "IMDB Profile", href: "https://www.imdb.com/name/nm14029494/" }],
  },
  {
    name: "Shabana Basheer",
    role: "Art Director",
    photo: "/images/team/shabana.webp",
    bio: "Leads the visual identity and creative direction across all Backyard Studio productions, ensuring every frame reflects a consistent, elevated aesthetic.",
    links: [],
  },
  {
    name: "Behram Shahid",
    role: "Director of Sales",
    photo: "/images/team/behram.webp",
    bio: "Drives revenue strategy and client acquisition across the UAE market, building long-term partnerships with brands, agencies, and event organisers.",
    links: [],
  },
  {
    name: "Waqas Muhammad",
    role: "Director of Strategy",
    photo: "/images/team/waqas.webp",
    bio: "Shapes Backyard Studio's growth roadmap — from market positioning and digital strategy to the operational frameworks that power 2,400+ delivered projects.",
    links: [],
  },
  {
    name: "Reem",
    role: "Business Development Manager",
    photo: "/images/team/reem.webp",
    bio: "Leads client partnerships and business growth across the UAE market, connecting brands with Backyard Studio's cinematic production capabilities.",
    links: [],
  },
  {
    name: "Rajaa",
    role: "Business Development Manager",
    photo: "/images/team/rajaa.webp",
    bio: "Drives new business opportunities and strategic relationships, helping brands across all 7 UAE emirates access world-class production services.",
    links: [],
  },
];

const MILESTONES = [
  { year: "2019", event: "Founded in Lahore — music videos, fashion films, TVCs" },
  { year: "2021", event: "Expanded into corporate & branded content across Pakistan" },
  { year: "2023", event: "Launched UAE operations — Dubai headquarters" },
  { year: "2024", event: "GCAA drone licence acquired — aerial production UAE-wide" },
  { year: "2025", event: "2,400+ projects delivered across all 7 UAE emirates" },
  { year: "2026", event: "Growing toward international market — Europe & Asia" },
];

const fahadSchema = personSchema({
  name: "Fahad Iqbal Butt",
  jobTitle: "Founder & CEO",
  description: "Fahad Iqbal Butt is a filmmaker, fashion photographer, and creative entrepreneur. He studied Film & TV at the National College of Arts (NCA) Lahore and holds a BSc in Fashion Design under the UK Excel Board. He founded Backyard Studio Official in 2019.",
  url: "https://www.backyardstudioofficial.com/about",
  image: "https://www.backyardstudioofficial.com/images/team/fahad.webp",
  alumniOf: [{ name: "National College of Arts, Lahore" }],
});

const mazharSchema = personSchema({
  name: "Syed Mazhar Zaidi",
  jobTitle: "Co-Founder & Creative Head",
  description: "Syed Mazhar Zaidi is a filmmaker, cinematographer, and documentary storyteller with 20+ years of experience. He studied at NCA Lahore and holds a Master's in Mass Communication from GC University. His IMDB-verified work spans 50+ music videos, TVCs, and brand films.",
  url: "https://www.backyardstudioofficial.com/about",
  image: "https://www.backyardstudioofficial.com/images/team/mazhar.webp",
  sameAs: ["https://www.imdb.com/name/nm14029494/"],
  alumniOf: [
    { name: "National College of Arts, Lahore" },
    { name: "GC University, Lahore" },
  ],
});

const aboutBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://www.backyardstudioofficial.com" },
  { name: "About Us", url: "https://www.backyardstudioofficial.com/about" },
]);

export default function AboutPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fahadSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mazharSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden" style={{ background: "var(--black)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(212,160,23,0.06) 0%, transparent 60%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
          <Image src="/images/team/fahad.webp" alt="Fahad Iqbal Butt — Founder & CEO Backyard Studio Official Dubai"
            fill className="object-cover object-top img-cinematic" sizes="50vw" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--black) 0%, transparent 50%)" }} />
        </div>
        <div className="container-xl relative z-10 max-w-2xl">
          <p className="eyebrow mb-5">Our Story</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-cream mb-8">
            BUILT ON<br /><span style={{ color: "var(--gold)" }}>VISION.</span><br />DRIVEN BY<br />CRAFT.
          </h1>
          <p className="text-silver/70 text-lg leading-relaxed max-w-lg">
            Founded in 2019 by filmmaker and fashion photographer Fahad Iqbal Butt,
            Backyard Studio Official has grown from a creative studio in Lahore to one of
            Dubai's most trusted production houses — serving brands, artists, and businesses
            across all 7 UAE emirates.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="section-pad" style={{ background: "var(--black-2)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">The Founder</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-cream mb-8">
              FAHAD IQBAL BUTT
            </h2>
            <div className="space-y-5 text-silver/70 leading-relaxed">
              <p>
                Fahad Iqbal Butt is a creative entrepreneur, filmmaker, and fashion photographer
                with a rare combination of formal training in both fashion and cinematic production.
                He holds a Bachelor&apos;s degree in Fashion Design under the UK Excel Board and
                completed professional studies in Film &amp; TV at the National College of Arts (NCA) Lahore —
                one of Pakistan&apos;s most prestigious creative institutions.
              </p>
              <p>
                In 2019, Fahad founded Backyard Studio Official in Lahore with a vision to create
                impactful visual content that blends creativity, emotion, and modern storytelling.
                The studio has since worked across music videos, TV commercials, DVCs, short films,
                fashion films, wedding productions, corporate events, and branded content.
              </p>
              <p>
                Alongside filmmaking, Fahad has built deep experience as a fashion photographer,
                collaborating with magazine cover photographers and creative professionals within
                the fashion and media industry. Today, through Backyard Studio, he continues to
                bring cinematic ideas to life for brands, businesses, artists, and creators across
                the UAE — with a growing vision toward the international market.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Work With Us <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <Image src="/images/team/fahad.webp" alt="Fahad Iqbal Butt Founder CEO Backyard Studio Official Dubai"
              fill className="object-cover img-cinematic" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 border" style={{ borderColor: "var(--border)" }} />
            <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p className="font-display text-2xl text-cream">FAHAD IQBAL BUTT</p>
              <p className="text-xs tracking-[0.3em] mt-1" style={{ color: "var(--gold)" }}>FOUNDER & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founder story */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden order-2 lg:order-1">
            <Image src="/images/team/mazhar.webp" alt="Syed Mazhar Zaidi Co-Founder Creative Head Backyard Studio Official Dubai"
              fill className="object-cover img-cinematic" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 border" style={{ borderColor: "var(--border)" }} />
            <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p className="font-display text-2xl text-cream">SYED MAZHAR ZAIDI</p>
              <p className="text-xs tracking-[0.3em] mt-1" style={{ color: "var(--gold)" }}>CO-FOUNDER & CREATIVE HEAD</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">The Co-Founder</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-cream mb-8">
              SYED MAZHAR<br />ZAIDI
            </h2>
            <div className="space-y-5 text-silver/70 leading-relaxed">
              <p>
                Syed Mazhar Zaidi is a filmmaker, cinematographer, documentary storyteller, and
                creative producer with two decades of experience across Pakistan and the Gulf.
                He studied at the National College of Arts (NCA) Lahore and holds a Master&apos;s
                degree in Mass Communication from GC University — two of Pakistan&apos;s most
                prestigious academic institutions.
              </p>
              <p>
                As Co-Founder and Creative Head of Backyard Studio Official, Mazhar brings
                extraordinary depth to every production. His most celebrated work is a landmark
                documentary project in which he documented more than 900 Partition stories and
                covered 84 Gurdwaras across Pakistan — a body of work that stands as one of the
                most significant cultural preservation efforts in South Asian documentary cinema.
              </p>
              <p>
                Mazhar has worked as DOP, cinematographer, editor, and colorist on more than 50
                music videos and commercials, and has collaborated with over 40 national and
                international brands. His IMDB-verified credits span TVCs, short films, music
                videos, and branded documentary content across Pakistan and the UAE.
              </p>
            </div>
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 btn-outline">
              View IMDB Profile <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl">
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-cream mb-16">
            MILESTONES
          </h2>
          <div className="relative">
            <div className="absolute left-[4.5rem] top-0 bottom-0 w-px hidden md:block" style={{ background: "var(--border)" }} />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 shrink-0 text-right">
                    <span className="font-display text-2xl" style={{ color: "var(--gold)" }}>{m.year}</span>
                  </div>
                  <div className="relative pt-1 hidden md:block">
                    <div className="w-3 h-3 rounded-full border-2 mt-0.5 transition-colors duration-300 group-hover:bg-gold"
                      style={{ borderColor: "var(--gold)", background: "var(--black)" }} />
                  </div>
                  <p className="text-silver/70 leading-relaxed pt-0.5 flex-1">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-pad" style={{ background: "var(--black-2)" }}>
        <div className="container-xl">
          <p className="eyebrow mb-4">The People</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-cream mb-16">
            MEET THE TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={member.photo} alt={`${member.name} — ${member.role} at Backyard Studio Official Dubai`}
                    fill className="object-cover img-cinematic transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.1) 50%, transparent 100%)" }} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-cream">{member.name.toUpperCase()}</h3>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase mt-1 mb-3" style={{ color: "var(--gold)" }}>{member.role}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{member.bio}</p>
                  {member.links.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-[0.65rem] tracking-widest uppercase transition-colors hover:text-gold"
                      style={{ color: "var(--gold)" }}>
                      {link.label} <ArrowUpRight size={11} />
                    </a>
                  ))}
                </div>
         