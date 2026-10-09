/**
 * Second pass: locale titles where the brand sits MID-string.
 *
 * scripts/fix-locale-titles.mjs strips a trailing brand, which is safe to
 * automate. These 16 are not: the brand is in the middle, and in several the
 * brand IS the grammatical subject —
 *
 *   ar/about  "عن باكيارد ستوديو أوفيشيال | …"   = "About Backyard Studio Official | …"
 *   ru/about  "О нас — Backyard Studio Official | …"
 *
 * Deleting the brand mechanically would leave "عن | …" / "О нас — | …".
 * So each replacement below was written by hand, keeping the meaning and
 * leaving room for the template the layout appends:
 *
 *   ar adds " | باكيارد ستوديو"          (~17 chars)
 *   ru adds " | Backyard Studio"          (~18)
 *   zh adds " | Backyard Studio Official" (~27)
 *
 * Target is roughly 60 characters INCLUDING that suffix, which is where Google
 * truncates.
 *
 * Re-runnable.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** [file, oldTitle, newTitle] */
const EDITS = [
  // ── Arabic ───────────────────────────────────────────────────────────
  ["app/ar/about/page.tsx",
    "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
    "عن الفريق | فهد إقبال بط وسيد مظهر زيدي — دبي"],
  ["app/ar/blog/intaj-klip-musiqi-dubai-2026/page.tsx",
    "إنتاج كليب موسيقي في دبي | باكيارد ستوديو الإمارات",
    "إنتاج كليب موسيقي في دبي والإمارات"],
  ["app/ar/blog/page.tsx",
    "مدوّنة باكيارد ستوديو | نصائح الإنتاج والتصوير في دبي والإمارات 2026",
    "المدوّنة | نصائح الإنتاج والتصوير في دبي 2026"],
  ["app/ar/contact/page.tsx",
    "تواصل معنا | باكيارد ستوديو أوفيشيال دبي — عرض سعر مجاني",
    "تواصل معنا | عرض سعر مجاني خلال ساعتين"],
  ["app/ar/portfolio/page.tsx",
    "معرض الأعمال | باكيارد ستوديو أوفيشيال — دبي",
    "معرض الأعمال | إنتاج فيديو وتصوير في دبي"],
  ["app/ar/pricing/page.tsx",
    "أسعار الإنتاج دبي 2026 | باكيارد ستوديو أوفيشيال — عروض وباقات",
    "أسعار الإنتاج في دبي 2026 | الباقات والعروض"],
  ["app/ar/testimonials/page.tsx",
    "آراء العملاء | باكيارد ستوديو أوفيشيال دبي",
    "آراء العملاء | إنتاج فيديو وتصوير في دبي"],

  // ── Russian ──────────────────────────────────────────────────────────
  ["app/ru/about/page.tsx",
    "О нас — Backyard Studio Official | Фахад Икбал Батт и Сайед Мазар Зайди — Дубай",
    "О нас | Фахад Икбал Батт и Сайед Мазар Зайди — Дубай"],
  ["app/ru/contact/page.tsx",
    "Контакты | Backyard Studio Official Дубай — Бесплатный расчёт",
    "Контакты | Бесплатный расчёт за 2 часа — Дубай"],
  ["app/ru/portfolio/page.tsx",
    "Портфолио | Backyard Studio Official — Дубай",
    "Портфолио | Видеосъёмка и фото в Дубае"],
  ["app/ru/pricing/page.tsx",
    "Цены на производство в Дубае 2026 | Backyard Studio Official — Пакеты",
    "Цены на производство в Дубае 2026 | Пакеты"],
  ["app/ru/testimonials/page.tsx",
    "Отзывы клиентов | Backyard Studio Official Дубай",
    "Отзывы клиентов | Видеопродакшн в Дубае"],

  // ── Chinese ──────────────────────────────────────────────────────────
  ["app/zh/contact/page.tsx",
    "联系我们 | Backyard Studio Official 迪拜 — 免费报价",
    "联系我们 | 迪拜免费报价，2小时内回复"],
  ["app/zh/portfolio/page.tsx",
    "作品集 | 迪拜摄影摄像作品 Backyard Studio Official",
    "作品集 | 迪拜摄影摄像作品精选"],
  ["app/zh/pricing/page.tsx",
    "迪拜制作价格2026 | Backyard Studio Official — 套餐与报价",
    "迪拜制作价格2026 | 套餐与报价"],
  ["app/zh/testimonials/page.tsx",
    "客户评价 | Backyard Studio Official 迪拜",
    "客户评价 | 迪拜客户真实反馈"],
];

let changed = 0;
let missed = 0;

for (const [rel, oldTitle, newTitle] of EDITS) {
  const file = resolve(root, rel);
  let src = readFileSync(file, "utf8");
  const needle = `title: "${oldTitle}"`;

  if (!src.includes(needle)) {
    console.log(`  no match  ${rel}`);
    missed++;
    continue;
  }

  src = src.replace(needle, `title: "${newTitle}"`);
  writeFileSync(file, src);
  console.log(`  ${rel}`);
  console.log(`     - ${oldTitle}  (${oldTitle.length})`);
  console.log(`     + ${newTitle}  (${newTitle.length})`);
  changed++;
}

console.log(`\n${changed} changed, ${missed} not matched.`);
