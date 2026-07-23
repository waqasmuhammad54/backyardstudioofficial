import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES_RU = [
  { label: "Свадебная съёмка",           href: "/ru/services/photo-shoots"         },
  { label: "Съёмка мероприятий",         href: "/ru/services/event-shoots"         },
  { label: "Видеореклама (DVC)",          href: "/ru/services/dvcs"                },
  { label: "Reels и короткое видео",      href: "/ru/services/reels"               },
  { label: "Контент для соцсетей",        href: "/ru/services/social-media-content" },
  { label: "Аэросъёмка дроном (GCAA)",    href: "/ru/services/aerial-drone"        },
  { label: "Корпоративные фильмы",        href: "/ru/services/corporate-films"      },
  { label: "Фото и видео недвижимости",   href: "/ru/services/real-estate"          },
  { label: "Фотография продукции",        href: "/ru/services/product-shoots"       },
  { label: "Видеозапись подкастов",       href: "/ru/services/podcast"              },
];

const COMPANY_RU = [
  { label: "О нас",       href: "/ru/about"   },
  { label: "Цены",        href: "/ru/pricing"  },
  { label: "Блог",        href: "/ru/blog"     },
  { label: "Контакты",    href: "/ru/contact"  },
];

const CITIES_RU = [
  { label: "Дубай",           href: "/locations/dubai"           },
  { label: "Абу-Даби",        href: "/locations/abu-dhabi"       },
  { label: "Шарджа",          href: "/locations/sharjah"         },
  { label: "Аджман",          href: "/locations/ajman"           },
  { label: "Рас-эль-Хайма",   href: "/locations/ras-al-khaimah"  },
  { label: "Фуджейра",        href: "/locations/fujairah"        },
  { label: "Умм-эль-Кайвайн", href: "/locations/umm-al-quwain"   },
];

const SOCIALS = [
  { label: "IG", href: "https://www.instagram.com/backyardstudioofficial/",   aria: "Instagram" },
  { label: "FB", href: "https://www.facebook.com/Backyardstudioofficial/",    aria: "Facebook"  },
  { label: "TT", href: "https://www.tiktok.com/@backyardstudio_official5",    aria: "TikTok"    },
  { label: "YT", href: "https://www.youtube.com/@BackyardStudioofficialuae", aria: "YouTube"   },
  { label: "LI", href: "https://www.linkedin.com/in/backyard-studio-508532417/", aria: "LinkedIn" },
  { label: "WA", href: "https://wa.me/971585882685",                          aria: "WhatsApp"  },
];

export default function RuFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--black)", borderTop: "1px solid var(--border)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(212,160,23,0.04) 0%, transparent 70%)" }}
      />

      {/* Big CTA bar */}
      <div className="border-b py-20 text-center relative" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: "var(--gold)" }}>
          ✦ Готовы начать?
        </p>
        <h2
          className="font-display leading-none mb-8"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)", color: "var(--cream)" }}
        >
          НАЧАТЬ ПРОЕКТ
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/ru/contact"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.2em] text-sm transition-all"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            ПОЛУЧИТЬ БЕСПЛАТНЫЙ РАСЧЁТ
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/971585882685?text=Здравствуйте%2C%20Backyard%20Studio!%20Хочу%20узнать%20о%20ваших%20услугах."
            target="_blank"
            rel="noreferrer"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.2em] text-sm transition-all"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            НАПИСАТЬ В WHATSAPP
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-6">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/ru" className="flex items-center gap-4 mb-7 group" aria-label="Backyard Studio Official">
              <div className="relative w-20 h-20 shrink-0 transition-all duration-300">
                <Image
                  src="/logo-black.png"
                  alt="Backyard Studio Official"
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
              Ведущая творческая продакшн-студия Дубая и ОАЭ.
              Кинематографический контент по всем эмиратам.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                "Лицензия GCAA на аэросъёмку дронами",
                "Работа в ОАЭ с 2023 года",
                "Более 2,400 реализованных проектов",
                "Все 7 эмиратов ОАЭ",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-xs" style={{ color: "var(--silver)" }}>{badge}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map((s) => (
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
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>УСЛУГИ</h3>
            <ul className="space-y-2.5">
              {SERVICES_RU.map((s) => (
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

          {/* Col 3 — Company + Cities */}
          <div>
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>КОМПАНИЯ</h3>
            <ul className="space-y-2.5 mb-8">
              {COMPANY_RU.map((c) => (
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

            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>ГОРОДА</h3>
            <ul className="space-y-2.5">
              {CITIES_RU.map((c) => (
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

          {/* Col 4 — Contact + Response */}
          <div>
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>КОНТАКТЫ</h3>
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
              <p className="text-xs" style={{ color: "var(--muted)" }}>Дубай, ОАЭ</p>
            </div>

            {/* Response guarantee box */}
            <div className="p-4 border" style={{ borderColor: "var(--border)" }}>
              <div className="w-1.5 h-1.5 rounded-full mb-2" style={{ background: "var(--gold)" }} />
              <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                Время ответа
              </p>
              <p className="font-display text-xl" style={{ color: "var(--cream)" }}>2 ЧАСА</p>
              <p className="text-[10px] mt-1" style={{ color: "var(--muted)" }}>
                Гарантируем ответ на все заявки
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Backyard Studio Official. Все права защищены. Дубай, ОАЭ.
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
