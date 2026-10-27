const ORIGIN = process.env.GROWTH_VERIFY_ORIGIN || "http://localhost:3010";

const pages = [
  { path: "/guides", kind: "hub", minWords: 220, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { path: "/guides/dubai-filming-permit", kind: "guide", minWords: 1200, schemas: ["Article", "BreadcrumbList", "ItemList"] },
  { path: "/guides/drone-filming-checklist-dubai", kind: "guide", minWords: 1100, schemas: ["Article", "BreadcrumbList", "ItemList"] },
  { path: "/guides/video-production-brief-template", kind: "guide", minWords: 1100, schemas: ["Article", "BreadcrumbList", "ItemList"] },
  { path: "/guides/corporate-video-roi", kind: "guide", minWords: 1100, schemas: ["Article", "BreadcrumbList", "ItemList"] },
  { path: "/production-portfolio", kind: "hub", minWords: 250, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { path: "/production-portfolio/corporate-events", kind: "portfolio", minWords: 450, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { path: "/production-portfolio/fashion-beauty", kind: "portfolio", minWords: 450, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { path: "/production-portfolio/product-ecommerce", kind: "portfolio", minWords: 400, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { path: "/production-portfolio/weddings-celebrations", kind: "portfolio", minWords: 450, schemas: ["CollectionPage", "BreadcrumbList", "ItemList"] },
];

const failures = [];
const internalTargets = new Set();

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function matchOne(html, pattern) {
  const match = html.match(pattern);
  return match ? decode(match[1].trim()) : "";
}

function schemaTypes(value, into = []) {
  if (!value || typeof value !== "object") return into;
  if (Array.isArray(value)) {
    value.forEach((item) => schemaTypes(item, into));
    return into;
  }
  if (typeof value["@type"] === "string") into.push(value["@type"]);
  if (Array.isArray(value["@graph"])) schemaTypes(value["@graph"], into);
  return into;
}

for (const page of pages) {
  const response = await fetch(`${ORIGIN}${page.path}`);
  if (response.status !== 200) {
    failures.push(`${page.path}: expected 200, received ${response.status}`);
    continue;
  }
  const html = await response.text();
  const title = matchOne(html, /<title>([^<]*)<\/title>/i);
  const description = matchOne(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = matchOne(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const robots = matchOne(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const visible = decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  );
  const wordCount = visible.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;

  if (!title || title.length > 60) failures.push(`${page.path}: title length ${title.length}`);
  if (description.length < 70 || description.length > 160) failures.push(`${page.path}: description length ${description.length}`);
  if (canonical !== `https://www.backyardstudioofficial.com${page.path}`) failures.push(`${page.path}: canonical mismatch (${canonical})`);
  if (h1Count !== 1) failures.push(`${page.path}: expected one H1, found ${h1Count}`);
  if (/noindex/i.test(robots)) failures.push(`${page.path}: unexpected noindex`);
  if (wordCount < page.minWords) failures.push(`${page.path}: thin rendered copy (${wordCount} words; minimum ${page.minWords})`);

  const blocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const types = [];
  for (const block of blocks) {
    try {
      schemaTypes(JSON.parse(decode(block[1])), types);
    } catch (error) {
      failures.push(`${page.path}: invalid JSON-LD (${error.message})`);
    }
  }
  for (const expected of page.schemas) {
    if (!types.includes(expected)) failures.push(`${page.path}: missing ${expected} schema (${types.join(", ")})`);
  }
  if (types.includes("HowTo")) failures.push(`${page.path}: deprecated HowTo schema found`);
  if (types.includes("FAQPage")) failures.push(`${page.path}: FAQPage schema found on commercial guide`);

  if (page.kind === "guide" && !html.includes("SOURCES REVIEWED")) failures.push(`${page.path}: visible sources section missing`);
  for (const match of html.matchAll(/href="([^"]+)"/gi)) {
    const href = decode(match[1]);
    if (href.startsWith("/") && !href.startsWith("//")) internalTargets.add(href.split("#")[0]);
  }

  process.stdout.write(`${page.path}  200  ${wordCount} words  schemas=${[...new Set(types)].join(",")}\n`);
}

const sitemapResponse = await fetch(`${ORIGIN}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
if (sitemapResponse.status !== 200) failures.push(`/sitemap.xml: ${sitemapResponse.status}`);
for (const page of pages) {
  const liveUrl = `https://www.backyardstudioofficial.com${page.path}`;
  if (!sitemap.includes(`<loc>${liveUrl}</loc>`)) failures.push(`/sitemap.xml missing ${liveUrl}`);
}
const sitemapCount = (sitemap.match(/<url>/g) || []).length;
if (sitemapCount < 496) failures.push(`/sitemap.xml: expected at least 496 URLs, found ${sitemapCount}`);
process.stdout.write(`/sitemap.xml  ${sitemapResponse.status}  ${sitemapCount} URLs\n`);

const docx = await fetch(`${ORIGIN}/downloads/backyard-studio-video-production-brief-template.docx`);
const docxBytes = (await docx.arrayBuffer()).byteLength;
if (docx.status !== 200) failures.push(`DOCX download: ${docx.status}`);
if (docxBytes < 14000) failures.push(`DOCX download unexpectedly small: ${docxBytes} bytes`);
if (!/officedocument|octet-stream/i.test(docx.headers.get("content-type") || "")) failures.push(`DOCX content type: ${docx.headers.get("content-type")}`);
process.stdout.write(`DOCX  ${docx.status}  ${docxBytes} bytes  ${docx.headers.get("content-type")}\n`);

for (const target of [...internalTargets].sort()) {
  if (!target || target.startsWith("/downloads/")) continue;
  const response = await fetch(`${ORIGIN}${target}`, { redirect: "manual" });
  if (response.status !== 200) failures.push(`Internal target ${target}: ${response.status}`);
}
process.stdout.write(`Checked ${internalTargets.size} unique internal targets from the new pages.\n`);

if (failures.length) {
  process.stderr.write(`\nFAILED (${failures.length})\n${failures.map((failure) => `- ${failure}`).join("\n")}\n`);
  process.exit(1);
}

process.stdout.write("Growth-page verification passed.\n");
