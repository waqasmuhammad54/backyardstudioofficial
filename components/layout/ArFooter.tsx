import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES_AR = [
  { label: "تصوير الأعراس",              href: "/ar/services/photo-shoots"         },
  { label: "تصوير الفعاليات",            href: "/ar/services/event-shoots"         },
  { label: "إنتاج الإعلانات والDVC",      href: "/ar/services/dvcs"                },
  { label: "إنتاج ريلز انستقرام",         href: "/ar/services/reels"               },
  { label: "محتوى وسائل التواصل",         href: "/ar/services/social-media-content" },
  { label: "تصوير جوي بالطائرة المسيّرة", href: "/ar/services/aerial-drone"        },
  { label: "الأفلام المؤسسية",            href: "/ar/services/corporate-films"      },
  { label: "تصوير العقارات",             href: "/ar/services/real-estate"          },
  { label: "تصوير المنتجات",             href: "/ar/services/product-shoots"       },
  { label: "إنتاج البودكاست",            href: "/ar/services/podcast"              },
];

const COMPANY_AR = [
  { label: "عن الاستوديو",  href: "/ar/about"   },
  { label: "الأسعار",       href: "/ar/pricing"  },
  { label: "المدوّنة",      href: "/ar/blog"     },
  { label: "تواصل معنا",   href: "/ar/contact"  },
];

const CITIES_AR = [
  { label: "دبي",         href: "/locations/dubai"           },
  { label: "أبوظبي",      href: "/locations/abu-dhabi"       },
  { label: "الشارقة",     href: "/locations/sharjah"         },
  { label: "عجمان",       href: "/locations/ajman"           },
  { label: "رأس الخيمة",  href: "/locations/ras-al-khaimah"  },
  { label: "الفجيرة",     href: "/locations/fujairah"        },
  { label: "أم القيوين",  href: "/locations/umm-al-quwain"   },
];

const SOCIALS_AR = [
  { label: "IG", href: "https://www.instagram.com/backyardstudioofficial/",    aria: "Instagram"  },
  { label: "FB", href: "https://www.facebook.com/Backyardstudioofficial/",     aria: "Facebook"   },
  { label: "TT", href: "https://www.tiktok.com/@backyardstudio_official5",     aria: "TikTok"     },
  { label: "YT", href: "https://youtube.com/@backyardstudioofficial",          aria: "YouTube"    },
  { label: "WA", href: "https://wa.me/971585882685",                           aria: "WhatsApp"   },
];

export default function ArFooter() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden"
      style={{
        background:  "var(--black)",
        borderTop:   "1px solid var(--border)",
        fontFamily:  "Cairo, sans-serif",
      }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(212,160,23,0.04) 0%, transparent 70%)" }}
      />

      {/* Big CTA bar */}
      <div className="border-b py-20 text-center relative" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs tracking-[0.4em] uppercase mb-6 font-medium" style={{ color: "var(--gold)" }}>
          ✦ هل أنت مستعد للبدء؟
        </p>
        <h2
          className="font-display leading-none mb-8"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)", color: "var(--cream)" }}
        >
          ابدأ مشروعك الآن
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/ar/contact"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.15em] text-sm transition-all"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            احصل على عرض سعر مجاني
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/971585882685?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
            target="_blank"
            rel="noreferrer"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.15em] text-sm transition-all"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            راسلنا على واتساب
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-6">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/ar" className="flex items-center gap-4 mb-7 group" aria-label="باكيارد ستوديو أوفيشيال">
              <div className="relative w-20 h-20 shrink-0 transition-all duration-300">
                <Image
                  src="/logo-black.png"
                  alt="باكيارد ستوديو أوفيشيال"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: "screen" }}
                />
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

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--muted)" }}>
              شركة الإنتاج الإبداعي الرائدة في دبي والإمارات.
              محتوى سينمائي احترافي عبر جميع الإمارات السبع.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                "رخصة GCAA للطائرات المسيّرة",
                "عمليات في الإمارات منذ 2023",
                "أكثر من 2,400 مشروع منجز",
                "تغطية جميع الإمارات السبع",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-xs" style={{ color: "var(--silver)" }}>{badge}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 flex-wrap">
              {SOCIALS_AR.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.aria}
                  className="footer-social w-9 h-9 flex items-center justify-center border text-[10px] font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="font-display text-sm tracking-[0.2em] mb-5" style={{ color: "var(--cream)" }}>الخدمات</h3>
            <ul className="space-y-2.5">
              {SERVICES_AR.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-xs transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company + UAE Coverage */}
          <div>
            <h3 className="font-display text-sm tracking-[0.2em] mb-5" style={{ color: "var(--cream)" }}>الشركة</h3>
            <ul className="space-y-2.5 mb-8">
              {COMPANY_AR.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-xs transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-sm tracking-[0.2em] mb-5" style={{ color: "var(--cream)" }}>مواقع التصوير</h3>
            <ul className="space-y-2.5">
              {CITIES_AR.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-xs transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Response time */}
          <div>
            <h3 className="font-display text-sm tracking-[0.2em] mb-5" style={{ color: "var(--cream)" }}>تواصل معنا</h3>
            <div className="space-y-2.5 mb-8">
              <a
                href="tel:+971585882685"
                className="block text-xs transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                +971 58 588 2685
              </a>
              <a
                href="mailto:info@backyardstudioofficial.com"
                className="block text-xs transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                info@backyardstudioofficial.com
              </a>
              <p className="text-xs" style={{ color: "var(--muted)" }}>دبي، الإمارات العربية المتحدة</p>
            </div>

            {/* Response guarantee box */}
            <div className="p-4 border" style={{ borderColor: "var(--border)" }}>
              <div className="w-1.5 h-1.5 rounded-full mb-2" style={{ background: "var(--gold)" }} />
              <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                وقت الاستجابة
              </p>
              <p className="font-display text-xl" style={{ color: "var(--cream)" }}>ساعتان</p>
              <p className="text-[10px] mt-1" style={{ color: "var(--muted)" }}>
                ضمان رد على جميع الطلبات
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} باكيارد ستوديو أوفيشيال. جميع الحقوق محفوظة. دبي، الإمارات.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "English", href: "/" },
              { label: "عربي",   href: "/ar" },
              { label: "РУС",    href: "/ru" },
              { label: "中文",    href: "/zh" },
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
