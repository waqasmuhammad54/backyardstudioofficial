import fs from "node:fs";

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const overlay = read("lib/gscQuestionGrowth.ts");
const resources = read("lib/growthResources.ts");
const service = read("app/(en)/services/[slug]/page.tsx");
const pricing = read("app/(en)/pricing/page.tsx");
const report = read("app/(en)/uae-video-production-cost-report-2026/page.tsx");
const dynamic = read("lib/dynamicPosts.ts");
const blogRoute = read("app/(en)/blog/[slug]/page.tsx");
const guideRoute = read("app/(en)/guides/[slug]/page.tsx");

const failures = [];
const requireText = (source, needle, label) => {
  if (!source.includes(needle)) failures.push(`${label}: missing ${needle}`);
};

for (const needle of [
  '"video-podcast-production-dubai-2026"',
  'How to Start a Video Podcast in the UAE: Dubai Guide 2026',
  'How much does a vlogging setup cost in the UAE?',
  'UAE podcast launch checklist',
  '/images/blog/podcast-uae-guide-hero-v2.webp',
  '"corporate-videography-uae-pricing-process-booking-guide-2026"',
  'How Much Does a Corporate Video Cost in the UAE? 2026 Guide',
  'How to compare two corporate-video quotes',
  '/images/blog/corporate-video-cost-uae-hero-v2.webp',
]) requireText(overlay, needle, "question-owner overlay");

for (const needle of [
  'Can You Film in Dubai? Filming Permit Guide',
  'How do you get a filming permit in Dubai?',
  'How much is a film permit in Dubai?',
  'https://www.filmdubai.gov.ae/s/faq',
]) requireText(resources, needle, "filming-permit owner");

for (const needle of [
  '/blog/video-podcast-production-dubai-2026',
  '/blog/corporate-videography-uae-pricing-process-booking-guide-2026',
]) {
  requireText(service, needle, "service internal linking");
  requireText(pricing, needle, "pricing internal linking");
  requireText(report, needle, "report internal linking");
}

requireText(dynamic, 'GSC_QUESTION_POST_OVERRIDES', "admin-post protection");
requireText(dynamic, '.map(withQuestionGrowth)', "admin-post protection");
requireText(blogRoute, 'dateModified: post.dateModified', "Article schema update date");
requireText(report, 'dateModified: "2026-11-17"', "cost report freshness");
requireText(guideRoute, '<div className="min-w-0">', "guide mobile table containment");
requireText(guideRoute, 'max-w-full overflow-x-auto', "guide mobile table containment");

for (const artifact of ["<p># ", "<p>---", "<p>| Package |", "<p>### "]) {
  if (overlay.includes(artifact)) failures.push(`rendered-content hygiene: markdown artifact ${artifact}`);
}

if (failures.length) {
  console.error("GSC question-growth regression failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("GSC question-growth regression passed (podcast, corporate cost, filming permit, internal links, schema freshness).");
