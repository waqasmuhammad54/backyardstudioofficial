import type { Metadata } from "next";
import Link from "next/link";
import buildSitemap from "@/app/sitemap";
import { breadcrumbSchema } from "@/lib/structuredData";

const SITE = "https://www.backyardstudioofficial.com";

export const metadata: Metadata = {
  title: { absolute: "Backyard Studio HTML Sitemap | Dubai Production Services" },
  description:
    "Browse Backyard Studio services, UAE production locations, industries, case studies and practical video and photography guides.",
  alternates: { canonical: `${SITE}/sitemap` },
};

function label(pathname: string) {
  const last = pathname.split("/").filter(Boolean).at(-1) || "Home";
  return last
    .split("-")
    .map((part) =>
      part.toUpperCase() === "UAE"
        ? "UAE"
        : part[0].toUpperCase() + part.slice(1),
    )
    .join(" ");
}

function group(pathname: string) {
  if (pathname.startsWith("/services/")) return "Production services";
  if (pathname.startsWith("/locations/")) return "UAE locations";
  if (pathname.startsWith("/industries/")) return "Industries";
  if (pathname.startsWith("/case-studies/")) return "Case studies";
  if (pathname.startsWith("/blog/")) return "Journal and production guides";
  if (pathname.startsWith("/ar")) return "Arabic";
  if (pathname.startsWith("/ru")) return "Russian";
  if (pathname.startsWith("/zh")) return "Chinese";
  return "Company and planning";
}

export default function HtmlSitemapPage() {
  const links = buildSitemap()
    .map((entry) => new URL(entry.url))
    .filter((url) => url.pathname !== "/sitemap")
    .map((url) => ({
      href: url.pathname,
      label: label(url.pathname),
      group: group(url.pathname),
    }))
    .sort(
      (a, b) =>
        a.group.localeCompare(b.group) || a.label.localeCompare(b.label),
    );
  const groups = Array.from(new Set(links.map((link) => link.group)));
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Sitemap", url: `${SITE}/sitemap` },
  ]);

  return (
    <div
      className="pt-28 pb-24"
      style={{ background: "var(--black)", color: "var(--cream)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <div className="container-xl">
        <p className="eyebrow mb-5">Site directory</p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none mb-8">
          EVERY PAGE.
          <br />
          <span style={{ color: "var(--gold)" }}>ONE DIRECTORY.</span>
        </h1>
        <p
          className="max-w-3xl text-lg leading-relaxed mb-16"
          style={{ color: "var(--silver)" }}
        >
          Browse our public production services, UAE coverage, industries, case
          studies and practical journal. This page uses ordinary crawlable links;
          private studio and API routes are excluded.
        </p>
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
          {groups.map((name) => (
            <section key={name}>
              <h2
                className="font-display text-3xl mb-6"
                style={{ color: "var(--gold)" }}
              >
                {name}
              </h2>
              <ul className="space-y-3">
                {links
                  .filter((link) => link.group === name)
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-[var(--gold)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-16 text-sm" style={{ color: "var(--muted)" }}>
          Search engine file: {" "}
          <a className="underline" href="/sitemap.xml">
            XML sitemap
          </a>
        </p>
      </div>
    </div>
  );
}
