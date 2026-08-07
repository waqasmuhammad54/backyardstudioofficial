import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES_ZH = [
  { label: "婚礼摄影与摄像",         href: "/zh/services/photo-shoots"         },
  { label: "活动拍摄",               href: "/zh/services/event-shoots"         },
  { label: "数字视频广告 (DVC)",      href: "/zh/services/dvcs"                },
  { label: "Instagram Reels制作",    href: "/zh/services/reels"               },
  { label: "社交媒体内容创作",        href: "/zh/services/social-media-content" },
  { label: "无人机航拍 (GCAA认可的航拍服务)",   href: "/zh/services/aerial-drone"        },
  { label: "企业宣传片",             href: "/zh/services/corporate-films"      },
  { label: "房地产摄影与摄像",        href: "/zh/services/real-estate"          },
  { label: "产品摄影",               href: "/zh/services/product-shoots"       },
  { label: "播客视频制作",            href: "/zh/services/podcast"              },
];

const COMPANY_ZH = [
  { label: "关于我们",  href: "/zh/about"     },
  { label: "报价",      href: "/zh/pricing"   },
  { label: "作品集",    href: "/zh/portfolio" },
  { label: "博客",      href: "/zh/blog"      },
  { label: "联系我们",  href: "/zh/contact"   },
];

const CITIES_ZH = [
  { label: "迪拜",     href: "/locations/dubai"          },
  { label: "阿布扎比",  href: "/locations/abu-dhabi"      },
  { label: "沙迦",     href: "/locations/sharjah"        },
  { label: "阿治曼",   href: "/locations/ajman"          },
  { label: "哈伊马角",  href: "/locations/ras-al-khaimah" },
  { label: "富查伊拉",  href: "/locations/fujairah"       },
  { label: "乌姆盖万",  href: "/locations/umm-al-quwain"  },
];

const SOCIALS = [
  { label: "IG", href: "https://www.instagram.com/backyardstudioofficial/",   aria: "Instagram" },
  { label: "FB", href: "https://www.facebook.com/Backyardstudioofficial/",    aria: "Facebook"  },
  { label: "TT", href: "https://www.tiktok.com/@backyardstudio_official5",    aria: "TikTok"    },
  { label: "YT", href: "https://www.youtube.com/@BackyardStudioofficialuae", aria: "YouTube"   },
  { label: "LI", href: "https://www.linkedin.com/in/backyard-studio-508532417/", aria: "LinkedIn" },
  { label: "WA", href: "https://wa.me/971585882685",                          aria: "WhatsApp"  },
];

export default function ZhFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:  "var(--black)",
        borderTop:   "1px solid var(--border)",
        fontFamily:  "'Noto Sans SC', sans-serif",
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
          ✦ 准备好开始了吗？
        </p>
        <h2
          className="font-display leading-none mb-8"
          style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)", color: "var(--cream)" }}
        >
          开始您的项目
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/zh/contact"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.15em] text-sm transition-all"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            免费获取报价
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/971585882685?text=%E6%82%A8%E5%A5%BD%EF%BC%8CBackyard%20Studio%EF%BC%81%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%82%A8%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1%E3%80%82"
            target="_blank"
            rel="noreferrer"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 font-display tracking-[0.15em] text-sm transition-all"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            WhatsApp 联系我们
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-6">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/zh" className="flex items-center gap-4 mb-7 group" aria-label="Backyard Studio Official 迪拜制作公司">
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
              迪拜及阿联酋领先的创意制作公司，
              专业打造覆盖全七酋长国的高品质视觉内容。
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                "GCAA认可的无人机商业航拍",
                "8年以上阿联酋制作经验",
                "已完成超过2,400个项目",
                "覆盖阿联酋全七个酋长国",
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
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>服务项目</h3>
            <ul className="space-y-2.5">
              {SERVICES_ZH.map((s) => (
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
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>公司</h3>
            <ul className="space-y-2.5 mb-8">
              {COMPANY_ZH.map((c) => (
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

            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>拍摄地点</h3>
            <ul className="space-y-2.5">
              {CITIES_ZH.map((c) => (
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
            <h3 className="font-display text-sm tracking-[0.25em] mb-5" style={{ color: "var(--cream)" }}>联系方式</h3>
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
              <p className="text-xs" style={{ color: "var(--muted)" }}>阿联酋，迪拜</p>
            </div>

            {/* Response guarantee box */}
            <div className="p-4 border" style={{ borderColor: "var(--border)" }}>
              <div className="w-1.5 h-1.5 rounded-full mb-2" style={{ background: "var(--gold)" }} />
              <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                响应时间
              </p>
              <p className="font-display text-xl" style={{ color: "var(--cream)" }}>2小时</p>
              <p className="text-[10px] mt-1" style={{ color: "var(--muted)" }}>
                所有项目咨询均有保证回复
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Backyard Studio Official. 版权所有。迪拜，阿联酋。
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
