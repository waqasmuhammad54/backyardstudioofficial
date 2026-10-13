/**
 * Scan rendered-page SOURCE for claims that assert a relationship, credential
 * or track record we have no evidence for. Same class as the claims removed
 * from the two drone pages on 13 Oct, which named the wrong regulators and
 * asserted permits, past shoots in restricted zones and a government client.
 *
 * Pattern-based and deliberately noisy: it surfaces candidates for a human to
 * confirm or cut, it does not decide.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const PATTERNS = [
  [/established relationships? with/gi,            "claims a relationship"],
  [/(?:our|we have|holds?) (?:permit )?relationships?/gi, "claims a relationship"],
  [/one of the (?:few|only)[^.]{0,80}/gi,          "unverifiable superlative"],
  [/we (?:are|hold) (?:the )?only/gi,              "unverifiable superlative"],
  [/all (?:relevant|required) licen[cs]es/gi,      "blanket licence claim"],
  // NOT a defect: DCAA is cited for AIRSPACE clearance on drone flights,
  // which is its actual remit. DFTC issues FILMING permits. The first version
  // of this scan labelled every DCAA reference "wrong body", conflating the
  // two permits, and would have had me "correct" five correct references.
  // Kept as an informational match so the distinction stays visible.
  [/Dubai Civil Aviation Authority|\bDCAA\b/gi,    "aviation body (correct for airspace, NOT a filming permit)"],
  [/\bDTCM\b/gi,                                   "OUTDATED BODY (DFTC since 2014 decree)"],
  [/Abu Dhabi Civil Aviation|\bADAC\b/gi,          "UNCONFIRMED BODY"],
  [/ATC coordination|airspace notifications/gi,    "operational claim"],
  [/\b(?:Emaar|Nakheel|Meraas|DWTC|Aldar|Dubai Land Department|Dubai Tourism|DCT Abu Dhabi|Abu Dhabi Tourism)\b/g, "names a third party"],
  [/(?:most prominent|leading) (?:restaurant|hotel|developer)/gi, "claims notable clients"],
  [/we have (?:produced|structured experience|covered)/gi, "claims track record"],
  [/reduces lead times? to \d+/gi,                 "invented lead time"],
  [/typically \d+ to \d+ (?:hours|business days)/gi, "invented lead time"],
];

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    if (["node_modules", ".next", ".git"].includes(e)) continue;
    const f = join(d, e);
    if (statSync(f).isDirectory()) walk(f);
    else if (/\.(tsx|ts|json)$/.test(e)) files.push(f);
  }
})("app");
files.push("lib/blogPosts.ts", "lib/caseStudies.ts", "content/posts.json");

const hits = new Map();
for (const f of files) {
  let src;
  try { src = readFileSync(f, "utf8"); } catch { continue; }
  for (const [re, why] of PATTERNS) {
    for (const m of src.matchAll(re)) {
      const key = `${why}`;
      if (!hits.has(key)) hits.set(key, new Map());
      const byFile = hits.get(key);
      const rel = f.replace(/\\/g, "/");
      if (!byFile.has(rel)) byFile.set(rel, new Set());
      byFile.get(rel).add(m[0].slice(0, 70).replace(/\s+/g, " "));
    }
  }
}

let total = 0;
for (const [why, byFile] of [...hits.entries()].sort()) {
  let n = 0;
  for (const s of byFile.values()) n += s.size;
  total += n;
  console.log(`\n### ${why}  (${n} distinct phrase(s) in ${byFile.size} file(s))`);
  for (const [f, set] of [...byFile.entries()].slice(0, 8)) {
    console.log(`    ${f}`);
    for (const s of [...set].slice(0, 4)) console.log(`        "${s}"`);
  }
  if (byFile.size > 8) console.log(`    …and ${byFile.size - 8} more files`);
}
console.log(`\n${total} candidate phrase(s) total across ${files.length} files scanned.`);
if (total === 0) console.log("NOTHING MATCHED — check the patterns before concluding the copy is clean.");
