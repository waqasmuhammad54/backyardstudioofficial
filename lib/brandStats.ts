/**
 * Single source of truth for studio-wide brand statistics.
 * Subset stats (weddings, happy clients, properties shot, etc.) stay local —
 * do NOT reuse PROJECTS_DELIVERED for those.
 */

export const PROJECTS_DELIVERED = 2400;
export const PROJECTS_DELIVERED_DISPLAY = "2,400+";

/** Compact display without thousands separator (e.g. CountUp SSR fallback). */
export const PROJECTS_DELIVERED_COMPACT = "2400+";

export function formatProjectsDelivered(
  locale: "en" | "ar" | "ru" | "zh" = "en"
): string {
  switch (locale) {
    case "ar":
      return "أكثر من 2,400";
    case "ru":
      return "Более 2,400";
    case "zh":
      return "超过2,400";
    default:
      return PROJECTS_DELIVERED_DISPLAY;
  }
}

export function formatProjectsDeliveredPhrase(
  locale: "en" | "ar" | "ru" | "zh" = "en"
): string {
  switch (locale) {
    case "ar":
      return "أكثر من 2,400 مشروع";
    case "ru":
      return "Более 2,400 проектов";
    case "zh":
      return "超过2,400个项目";
    default:
      return `${PROJECTS_DELIVERED_DISPLAY} projects`;
  }
}
