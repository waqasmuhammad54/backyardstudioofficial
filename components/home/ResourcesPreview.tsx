import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RESOURCE_GUIDES } from "@/lib/growthResources";

export default function ResourcesPreview() {
  return (
    <section className="section-pad border-t" style={{ background: "var(--black-2)", borderColor: "var(--border)" }}>
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">Free production resources</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none" style={{ color: "var(--cream)" }}>
              PLAN BEFORE<br /><span className="gold-text">THE CAMERA ROLLS</span>
            </h2>
          </div>
          <Link href="/guides" className="btn-outline inline-flex items-center gap-2 self-start md:self-auto">
            <span>All production guides</span><ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESOURCE_GUIDES.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 border hover:border-[var(--gold)] transition-colors"
              style={{ borderColor: "var(--border)", background: "var(--black)" }}
            >
              <span className="block font-display text-3xl mb-8" style={{ color: "var(--gold)" }}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl mb-3 group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>{guide.shortTitle.toUpperCase()}</h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{guide.metaDescription}</p>
              <span className="inline-flex items-center gap-2 text-xs" style={{ color: "var(--gold)" }}>Open guide <ArrowUpRight size={12} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
