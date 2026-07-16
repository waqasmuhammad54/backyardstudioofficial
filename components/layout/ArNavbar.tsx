"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "خدماتنا",       href: "/ar/services" },
  { label: "الأسعار",       href: "/ar/pricing"  },
  { label: "المدوّنة",      href: "/ar/blog"     },
  { label: "عن الاستوديو",  href: "/ar/about"    },
];

const LANGS = [
  { label: "EN",   href: "/",   current: false },
  { label: "RU",   href: "/ru", current: false },
  { label: "中文",  href: "/zh", current: false },
  { label: "عربي", href: "/ar", current: true  },
];

const SOCIALS = [
  { label: "انستقرام", href: "https://www.instagram.com/backyardstudioofficial/" },
  { label: "تيك توك",  href: "https://www.tiktok.com/@backyardstudio_official5"  },
  { label: "فيسبوك",   href: "https://www.facebook.com/Backyardstudioofficial/"  },
];

export default function ArNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        dir="rtl"
        className={`nav-top-grad fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-nav py-3" : "py-6"
        }`}
      >
        <div className="container-xl flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/ar"
            className="relative flex items-center gap-3 group"
            aria-label="باكيارد ستوديو أوفيشيال"
          >
            <div className="relative w-16 h-16 shrink-0 transition-all duration-500 group-hover:scale-110">
              <Image
                src="/logo-black.png"
                alt="باكيارد ستوديو أوفيشيال"
                fill
                className="object-contain"
                sizes="64px"
                priority
                quality={60}
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <div className="hidden sm:block leading-none">
              <span className="block font-display text-xl tracking-[0.3em] gold-glow">BACKYARD</span>
              <span
                className="block font-display text-[0.6rem] tracking-[0.3em] mt-0.5"
                style={{ color: "var(--silver)", fontFamily: "Cairo, sans-serif" }}
              >
                ستوديو أوفيشيال
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <ul
            className="hidden lg:flex items-center gap-6"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-sm transition-colors duration-300 hover:text-gold-light"
                  style={{ color: "var(--silver)" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + LANGUAGE SWITCHER */}
          <div className="hidden lg:flex items-center gap-4">
            {LANGS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  color:      l.current ? "var(--gold)" : "rgba(212,175,55,0.45)",
                  fontSize:   "0.7rem",
                  fontWeight: l.current ? 700 : 400,
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/ar/contact"
              className="btn-gold"
              style={{
                display:    "inline-flex",
                alignItems: "center",
                gap:        "0.4rem",
                fontFamily: "Cairo, sans-serif",
              }}
            >
              <span>ابدأ مشروعك</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          >
            <span className={`block h-px bg-cream transition-all duration-500 ${open ? "w-6 rotate-45 translate-y-1.5" : "w-6"}`} />
            <span className={`block h-px bg-gold  transition-all duration-500 ${open ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-px bg-cream transition-all duration-500 ${open ? "w-6 -rotate-45 -translate-y-1.5" : "w-6"}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        dir="rtl"
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(212,160,23,0.06) 0%, #050505 60%)",
        }}
      >
        <span className="absolute bottom-10 left-10 font-display text-[12rem] text-white/[0.02] leading-none select-none">
          BSO
        </span>

        <div className="flex flex-col justify-center items-end h-full container-xl">
          <p
            className="eyebrow mb-8 opacity-60"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            القائمة
          </p>

          <ul
            className="space-y-1 mb-10"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {[...NAV, { label: "تواصل معنا", href: "/ar/contact" }].map((n, i) => (
              <li
                key={n.href}
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
                className={`transition-all duration-700 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl sm:text-6xl text-cream hover:text-stroke transition-all duration-300 tracking-wider group flex items-end gap-4"
                >
                  {n.label}
                  <ArrowUpRight
                    size={20}
                    className="text-gold opacity-0 group-hover:opacity-100 transition-opacity mb-2"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="gold-line-full w-64 mb-6" />

          {/* Language switcher */}
          <div className="flex gap-6 mb-6">
            {LANGS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  color:      l.current ? "var(--gold)" : "rgba(212,175,55,0.45)",
                  fontSize:   "0.75rem",
                  fontWeight: l.current ? 700 : 400,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.6rem] tracking-[0.2em] transition-colors hover:text-gold-light"
                style={{ color: "var(--muted)", fontFamily: "Cairo, sans-serif" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
