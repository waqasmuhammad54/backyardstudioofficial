import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { label: "Event Shoots",         href: "/services/event-shoots" },
  { label: "Event Video Editing",  href: "/services/event-video-editing" },
  { label: "DVCs",                 href: "/services/dvcs" },
  { label: "Reels & Short Films",  href: "/services/reels" },
  { label: "Photo Shoots",         href: "/services/photo-shoots" },
  { label: "Social Media Content", href: "/services/social-media-content" },
  { label: "Testimonial Videos",   href: "/services/testimonial-videos" },
  { label: "Ads Shooting",         href: "/services/ads-shooting" },
  { label: "Aerial / Drone",       href: "/services/aerial-drone" },
  { label: "Corporate Films",      href: "/services/corporate-films" },
];

const COMPANY = [
  { label: "About Us",     href: "/about" },
  { label: "Portfolio",    href: "/portfolio" },
  { label: "Blog",         href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact",      href: "/contact" },
  { label: "Studio",       href: "/studio" },
];

const CITIES = [
  { label: "Dubai",          href: "/locations/dubai" },
  { label: "Abu Dhabi",      href: "/locations/abu-dhabi" },
  { label: "Sharjah",        href: "/locations/sharjah" },
  { label: "Ajman",          href: "/locations/ajman" },
  { label: "Ras Al Khaimah", href: "/locations/ras-al-khaimah" },
  { label: "Fujairah",       href: "/locations/fujairah" },
  { label: "Umm Al Quwain",  href: "/locations/umm-al-quwain" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--black)", borderTop: "1px solid var(--border)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(212,160,23,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Big CTA bar */}
      <div
        className="border-b py-20 text-center relative"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: "var(--gold)" }}>
          â¦ Ready to Create?
        </p>
        <h2
          className="font-display leading-none mb-8"
          style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--cream)" }}
        >
          START YOUR PROJECT
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.2em] text-sm transition-all"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            GET A FREE QUOTE
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank" rel="noreferrer"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.2em] text-sm transition-all"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            WHATSAPP US
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Col 1 â Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-7 group" aria-label="Backyard Studio Official Home">
              <div className="relative w-24 h-24 shrink-0 transition-all duration-300">
                <Image src="/logo-black.png" alt="Backyard Studio Official Logo" fill className="object-contain" style={{ mixBlendMode: "screen" }} />
              </div>
              <div>
                <p className="font-display tracking-[0.3em] leading-none text-base" style={{ color: "var(--gold)" }}>
                  BACKYARD
                </p>
                <p className="font-display tracking-[0.25em] leading-none text-[11px] mt-1" style={{ color: "var(--silver)" }}>
                  STUDIO OFFICIAL
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "var(--muted)" }}>
              Dubai&apos;s premier creative production studio. We craft cinematic content that
              moves brands forward across every UAE emirate â from corporate headquarters to
              desert horizons.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mb-8">
              {["GCAA Licensed Drone Operator", "8+ Years in UAE Production", "2,400+ Projects Delivered", "All 7 Emirates Covered"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-xs" style={{ color: "var(--silver)" }}>{badge}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.instagram.com/backyardstudioofficial/" target="_blank" rel="noreferrer"
                aria-label="Instagram" className="footer-social w-10 h-10 flex items-center justify-center border">
                <Instagram size={15} />
              </a>
              <a href="https://www.facebook.com/Backyardstudioofficial/" target="_blank" rel="noreferrer"
                aria-label="Facebook" className="footer-social w-10 h-10 flex items-center justify-center border text-[10px] font-bold">
                FB
              </a>
              <a href="https://www.tiktok.com/@backyardstudio_official5" target="_blank" rel="noreferrer"
                aria-label="TikTok" className="footer-social w-10 h-10 flex items-center justify-center border text-[10px] font-bold">
                TT
              </a>
              <a href="https://youtube.com/@backyardstudioofficial" target="_blank" rel="noreferrer"
                aria-label="YouTube" className="footer-social w-10 h-10 flex items-center justify-center border">
                <Youtube size={15} />
              </a>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
                aria-label="WhatsApp" className="footer-social w-10 h-10 flex items-center justify-center border text-[10px] font-bold">
                WA
              </a>
            </div>
          </div>

          {/* Col 2 â Services */}
          <div>
            <h4
              className="font-display text-lg tracking-[0.25em] mb-6"
              style={{ color: "var(--cream)" }}
            >
              SERVICES
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 â Company */}
          <div>
            <h4
              className="font-display text-lg tracking-[0.25em] mb-6"
              style={{ color: "var(--cream)" }}
            >
              COMPANY
            </h4>
            <ul className="space-y-3 mb-10">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick contact */}
            <h4
              className="font-display text-lg tracking-[0.25em] mb-5"
              style={{ color: "var(--cream)" }}
            >
              CONTACT
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+971585882685"
                className="block text-sm transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                +971 58 588 2685
              </a>
              <a
                href="mailto:info@backyardstudioofficial.com"
                className="block text-sm transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                info@backyardstudioofficial.com
              </a>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Col 4 â UAE Coverage */}
          <div>
            <h4
              className="font-display text-lg tracking-[0.25em] mb-6"
              style={{ color: "var(--cream)" }}
            >
              UAE COVERAGE
            </h4>
            <ul className="space-y-3 mb-8">
              {CITIES.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Response guarantee */}
            <div
              className="p-5 border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                Response Time
              </p>
              <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>
                2 HOURS
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Guaranteed reply on all briefs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Â© {new Date().getFullYear()} Backyard Studio Official. All Rights Reserved. Dubai, UAE.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
