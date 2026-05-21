import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const IMAGES = [
  { src: "/images/events/event-01.webp",      label: "Events" },
  { src: "/images/creative/creative-04.webp", label: "Creative" },
  { src: "/images/wedding/wedding-01.webp",   label: "Wedding" },
  { src: "/images/products/product-03.webp",  label: "Products" },
  { src: "/images/events/event-03.webp",      label: "Corporate" },
  { src: "/images/creative/creative-13.webp", label: "Fashion" },
  { src: "/images/wedding/wedding-16.webp",   label: "Lifestyle" },
  { src: "/images/creative/creative-05.webp", label: "Editorial" },
];

export default function GalleryStrip() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--black-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      {/* Header */}
      <div className="container-xl pt-16 pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Visual Work</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-cream">
            FROM THE<br /><span style={{ color: "var(--gold)" }}>LENS</span>
          </h2>
        </div>
        <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2 self-start sm:self-auto">
          Full Portfolio <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Horizontal scroll grid */}
      <div className="pb-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-square md:aspect-auto md:h-full md:min-h-[380px]" : i === 3 ? "aspect-video" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.label + " photography by Backyard Studio Official Dubai"}
                  fill
                  className="object-cover img-cinematic transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase px-2 py-1" style={{ background: "var(--gold)", color: "var(--black)" }}>
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
