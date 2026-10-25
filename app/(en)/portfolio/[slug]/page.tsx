import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { ALL_PROJECTS, getProjectBySlug, buildVideoObjectSchema } from "@/lib/portfolio-data";

const CATEGORY_GUIDANCE: Record<string, { heading: string; body: string[] }> = {
  Events: {
    heading: "Planning event coverage in the UAE",
    body: [
      "Strong event coverage starts with the running order, venue access and the moments that cannot be repeated. Before the shoot, we agree the priority speakers, sponsor details, guest arrivals and delivery deadlines so the crew can cover the room without interrupting it.",
      "A useful brief should also list the formats you need after the event. A highlight film, vertical social edits, speaker clips and a searchable photo gallery require different coverage on the day. Defining those outputs early helps us plan camera positions and build an efficient review schedule.",
    ],
  },
  Creative: {
    heading: "Planning a creative campaign",
    body: [
      "Creative shoots work best when the visual reference, audience and final placements are agreed before production. We turn those inputs into a practical shot list covering locations, talent, styling, lighting and the aspect ratios needed for web, advertising and social channels.",
      "The review process matters as much as the shoot. We recommend one consolidated feedback round from the client team, followed by final colour, sound and export checks. That keeps the campaign consistent across every deliverable.",
    ],
  },
  Products: {
    heading: "Planning product photography and video",
    body: [
      "Product work begins with the sales context: where the assets will appear, which features must be visible and what should distinguish the product from its category. From there we plan surfaces, props, lighting, movement and close-up details around a clear shot list.",
      "Please confirm pack shots, lifestyle frames, vertical clips and marketplace dimensions before the session. Capturing the complete asset list together reduces reshoots and gives the brand a consistent visual library for campaigns, e-commerce and social media.",
    ],
  },
  Wedding: {
    heading: "Planning wedding photo and film coverage",
    body: [
      "Wedding coverage depends on timing, access and family priorities. We review the ceremony schedule, key people, venue rules and portrait window before the day so the team can anticipate each moment while remaining unobtrusive.",
      "Couples should also decide whether they need a highlight film, full ceremony edit, social preview and photography collection. Agreeing the deliverables in advance lets us protect time for portraits and capture the audio and coverage each final format requires.",
    ],
  },
};

export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: { absolute: `${project.title} | Backyard Studio` },
    description: project.description,
    openGraph: {
      title: `${project.title} | Backyard Studio`,
      description: project.description,
      images: [{ url: `https://www.backyardstudioofficial.com${project.image}` }],
      type: "website",
    },
    alternates: {
      canonical: `https://www.backyardstudioofficial.com/portfolio/${params.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const schema = buildVideoObjectSchema(project);
  const guidance = CATEGORY_GUIDANCE[project.category];

  return (
    <div className="pt-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Back */}
      <div className="container-xl py-6">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#e8c547] transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Image — project thumbnail */}
      <div className="relative max-w-5xl mx-auto mx-4 rounded-sm overflow-hidden border border-[#2a2a2a]"
           style={{ aspectRatio: "16/9" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Category badge */}
        <span className="absolute bottom-4 left-4 bg-[#e8c547] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {project.category}
        </span>
      </div>

      {/* CTA strip — link to showreel */}
      <div className="max-w-5xl mx-auto px-4 mt-4">
        <a
          href="https://www.youtube.com/@BackyardStudioofficialuae"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#e8c547] text-sm hover:underline"
        >
          ▶ Watch our showreel on YouTube →
        </a>
      </div>

      {/* Details */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-6">{project.title}</h1>
            <p className="text-[#a0a0a0] leading-relaxed mb-4">
              {project.description}
            </p>
            {guidance && (
              <div className="mt-10 border-t border-[#2a2a2a] pt-8">
                <h2 className="font-display text-2xl text-white mb-4">{guidance.heading}</h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  {guidance.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm space-y-4">
              {[
                { icon: Tag,      label: "Service",  value: project.category },
                { icon: MapPin,   label: "Location", value: `${project.location}, UAE` },
                { icon: Calendar, label: "Year",     value: String(project.year) },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <Icon size={16} className="text-[#e8c547] mt-0.5" />
                    <div>
                      <p className="text-[#666] text-xs uppercase tracking-widest">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href="/contact" className="btn-gold w-full justify-center">Book a Similar Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
