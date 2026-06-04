import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { getProjectBySlug, buildVideoObjectSchema } from "@/lib/portfolio-data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  const title = project?.title ?? params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Portfolio | Backyard Studio Official`,
    description: project?.description ?? "Watch this project from Backyard Studio Official — UAE's premier creative production studio.",
    openGraph: {
      title: `${title} | Backyard Studio Official`,
      description: project?.description,
      images: project ? [{ url: `https://www.backyardstudioofficial.com${project.image}` }] : [],
      type: "website",
    },
    alternates: {
      canonical: `https://www.backyardstudioofficial.com/portfolio/${params.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const schema = project ? buildVideoObjectSchema(project) : null;
  const title = project?.title ?? params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="pt-24">
      {/* JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

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
          src={project?.image ?? "/images/events/event-01.webp"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Category badge */}
        {project && (
          <span className="absolute bottom-4 left-4 bg-[#e8c547] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {project.category}
          </span>
        )}
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
            <h1 className="font-display text-4xl md:text-5xl text-white mb-6">{title}</h1>
            <p className="text-[#a0a0a0] leading-relaxed mb-4">
              {project?.description ??
                "This project exemplifies Backyard Studio Official's commitment to cinematic excellence. From the initial brief through to final delivery, every decision was made to maximise the visual impact and emotional resonance of the final piece."}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm space-y-4">
              {[
                { icon: Tag,      label: "Service",  value: project?.category ?? "Event Shoots" },
                { icon: MapPin,   label: "Location", value: project ? `${project.location}, UAE` : "Dubai, UAE" },
                { icon: Calendar, label: "Year",     value: String(project?.year ?? 2025) },
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
