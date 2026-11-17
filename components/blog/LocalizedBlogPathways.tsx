import Link from "next/link";
import type { InternationalBlogLocale } from "@/lib/internationalBlogPosts";

const COPY = {
  ar: {
    heading: "واصل التخطيط لمشروعك",
    journal: "جميع المقالات",
    services: "خدمات الإنتاج والتصوير",
    pricing: "الأسعار والباقات",
    contact: "اطلب عرض سعر",
  },
  ru: {
    heading: "Продолжите планирование проекта",
    journal: "Все статьи",
    services: "Услуги фото- и видеопроизводства",
    pricing: "Цены и пакеты",
    contact: "Запросить предложение",
  },
  zh: {
    heading: "继续规划您的拍摄项目",
    journal: "查看全部文章",
    services: "摄影摄像服务",
    pricing: "价格与套餐",
    contact: "获取报价",
  },
} as const;

export default function LocalizedBlogPathways({ locale }: { locale: InternationalBlogLocale }) {
  const copy = COPY[locale];
  return (
    <nav
      aria-label={copy.heading}
      className="border-t border-[#2a2a2a] bg-[#111] px-6 py-8"
      data-internal-link-bridge
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold text-[#e8c547]">{copy.heading}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href={`/${locale}/blog`} className="text-[#c0c0c0] hover:text-[#e8c547]">{copy.journal}</Link>
          <Link href={`/${locale}/services`} className="text-[#c0c0c0] hover:text-[#e8c547]">{copy.services}</Link>
          <Link href={`/${locale}/pricing`} className="text-[#c0c0c0] hover:text-[#e8c547]">{copy.pricing}</Link>
          <Link href={`/${locale}/contact`} className="text-[#c0c0c0] hover:text-[#e8c547]">{copy.contact}</Link>
        </div>
      </div>
    </nav>
  );
}
