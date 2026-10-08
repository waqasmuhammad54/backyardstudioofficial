/**
 * Grammar repair in the Arabic and Russian aviation copy.
 *
 * NOT a policy change. The owner confirmed on 8 Oct 2026 that the civil
 * aviation licence is issued and in hand, so the licensed wording is correct
 * and stays — see lib/aviationStatus.ts. This script only fixes two sentences
 * that are genuinely malformed and currently live.
 *
 *   AR  "يُنفَّذمن هيئة الطيران المدني" — words dropped and no space after
 *       يُنفَّذ, so it reads "is carried out-from the Authority to operate
 *       drones". The licence reference was lost in the middle of the sentence.
 *
 *   RU  "Есть ли у вас аэросъёмка на аэросъёмку дроном в ОАЭ?" — "do you have
 *       aerial photography for aerial photography by drone", i.e. the word
 *       лицензия was overwritten by аэросъёмка. This is an FAQ heading, so it
 *       is visible and it is also in FAQPage schema.
 *
 * Exact-string replacements only, hand-checked. A global regex sweep on this
 * codebase in August produced grammatical damage that had to be thrown away —
 * do not repeat that, least of all across Arabic and Russian.
 *
 * Re-runnable: fixed strings will not match.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** [file, [[find, replace, why], ...]] */
const EDITS = [
  [
    "app/ar/blog/taswir-zifaf-emirati-dubai-2026/page.tsx",
    [
      [
        "نعم، التصوير الجوي يُنفَّذمن هيئة الطيران المدني الإماراتية لتشغيل الطائرات المسيّرة.",
        "نعم، التصوير الجوي يُنفَّذ بموجب ترخيص من الهيئة العامة للطيران المدني الإماراتية لتشغيل الطائرات المسيّرة.",
        "restores the dropped 'under a licence from' and the missing space",
      ],
    ],
  ],
  [
    "app/ru/services/page.tsx",
    [
      [
        "Есть ли у вас аэросъёмка на аэросъёмку дроном в ОАЭ?",
        "Есть ли у вас лицензия на аэросъёмку дроном в ОАЭ?",
        "restores 'лицензия', which had been overwritten by 'аэросъёмка'",
      ],
    ],
  ],
];

let changed = 0;
let missed = 0;

for (const [rel, pairs] of EDITS) {
  const file = resolve(root, rel);
  let src = readFileSync(file, "utf8");
  let fileChanged = false;

  for (const [find, replace, why] of pairs) {
    if (!src.includes(find)) {
      console.log(`  no match     ${rel}  (${why})`);
      missed++;
      continue;
    }
    src = src.split(find).join(replace);
    fileChanged = true;
    changed++;
    console.log(`  fixed        ${rel}  (${why})`);
  }

  if (fileChanged) writeFileSync(file, src);
}

console.log(`\n${changed} repair(s) applied, ${missed} not matched.`);
