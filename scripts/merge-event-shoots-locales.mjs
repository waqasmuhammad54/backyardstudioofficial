/**
 * Finish the event-shoots merge across AR, RU and ZH.
 *
 * The English page now 301s to /services/event-videography. Left as-is, the
 * locale copies would still build at /ar|ru|zh/services/event-shoots, and
 * their hreflang maps would name the English URL — which is now a redirect.
 * hreflang pointing at a redirect is an invalid annotation, and we spent
 * yesterday making every cluster reciprocal, so leaving this would undo part
 * of that.
 *
 * Also removes "event-shoots" from LOCALISED_SERVICE_SLUGS in the English
 * route, which existed to emit hreflang for slugs present in all four
 * languages. The slug is present in none of them now.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(resolve(root, p), "utf8");
const write = (p, s) => writeFileSync(resolve(root, p), s);

// ── 1. Drop it from the English hreflang set ──────────────────────────────
const enPath = "app/(en)/services/[slug]/page.tsx";
let en = read(enPath);
en = en.replace(/"event-shoots",\s*/, "");
write(enPath, en);
console.log("  removed from LOCALISED_SERVICE_SLUGS");

// ── 2. Drop the slug from each locale route ───────────────────────────────
for (const locale of ["ar", "ru", "zh"]) {
  const p = `app/${locale}/services/[slug]/page.tsx`;
  let src = read(p);
  const before = (src.match(/event-shoots/g) || []).length;
  if (!before) { console.log(`  ${locale}: nothing to do`); continue; }

  // slug list entry
  src = src.replace(/"event-shoots",\s*/g, "");
  // any object entry keyed on it
  const lines = src.split("\n");
  const idx = lines.findIndex((l) => /^\s{2,4}"event-shoots":\s*\{\s*$/.test(l));
  if (idx !== -1) {
    let depth = 0;
    let end = idx;
    for (let i = idx; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === "{") depth++;
        else if (ch === "}") depth--;
      }
      if (depth === 0 && i > idx) { end = i; break; }
    }
    src = [...lines.slice(0, idx), ...lines.slice(end + 1)].join("\n");
  }
  write(p, src);
  const after = (read(p).match(/event-shoots/g) || []).length;
  console.log(`  ${locale}: ${before} -> ${after} references`);
}

// ── 3. Locale redirects ───────────────────────────────────────────────────
const cfgPath = "next.config.mjs";
let cfg = read(cfgPath);
const anchor = `      { source: "/services/event-shoots", destination: "/services/event-videography", permanent: true },`;
if (cfg.includes('source: "/ar/services/event-shoots"')) {
  console.log("  locale redirects already present");
} else {
  cfg = cfg.replace(
    anchor,
    `${anchor}
      // Same merge, applied in all four languages. hreflang pointing at a
      // redirect is an invalid annotation, so the locale copies cannot be left
      // behind naming an English URL that now 301s.
      { source: "/ar/services/event-shoots", destination: "/ar/services/event-videography", permanent: true },
      { source: "/ru/services/event-shoots", destination: "/ru/services/event-videography", permanent: true },
      { source: "/zh/services/event-shoots", destination: "/zh/services/event-videography", permanent: true },`
  );
  write(cfgPath, cfg);
  console.log("  locale redirects added");
}
