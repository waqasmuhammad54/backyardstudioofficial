/**
 * Replace present-tense aviation-licence claims with accurate wording.
 *
 * Exact-string replacements only, hand-checked per language. A global regex
 * sweep was tried on this codebase in August and produced grammatical damage
 * that had to be thrown away — do not repeat that, especially across Arabic,
 * Russian and Chinese.
 *
 * Each pair below was read in context before being written. Capability stays
 * described; only the ownership claim changes. Re-runnable: already-fixed
 * strings simply will not match.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** [file, [[find, replace], ...]] */
const EDITS = [
  // ── RUSSIAN ────────────────────────────────────────────────────────────
  // "Do you have a drone licence?" -> "Yes. ... under a valid (GCAA) licence"
  [
    "app/ru/page.tsx",
    [
      [
        "Да. Аэросъёмка выполняется по действующей лицензии (Генеральное управление гражданской авиации) на коммерческую аэросъёмку по всем эмиратам ОАЭ.",
        "Аэросъёмка доступна в рамках производства по всем эмиратам ОАЭ. Необходимые разрешения для каждой локации оформляются заранее — этим занимаемся мы, а не заказчик.",
      ],
      [
        "Есть ли у вас лицензия на съёмку дронами в ОАЭ?",
        "Как организуется аэросъёмка в ОАЭ?",
      ],
    ],
  ],
  // "Backyard Studio Official HAS the necessary licence" — the most explicit
  // ownership claim anywhere on the site.
  [
    "app/ru/services/page.tsx",
    [
      [
        "Да. Backyard Studio Official имеет необходимую лицензию (Генеральное управление гражданской авиации) на коммерческую аэросъёмку. Это гарантирует легальность всех наших дроновых съёмок по всем эмиратам",
        "Аэросъёмка доступна в рамках производства по всем эмиратам ОАЭ. Все необходимые разрешения для конкретной локации оформляются заранее",
      ],
      [
        "Есть ли у вас аэросъёмка на аэросъёмку дроном в ОАЭ?",
        "Как организуется аэросъёмка в ОАЭ?",
      ],
    ],
  ],

  // ── CHINESE ────────────────────────────────────────────────────────────
  // "Yes, our aerial work is performed under a GCAA commercial drone licence"
  [
    "app/zh/services/page.tsx",
    [
      [
        "是的，航拍在（阿联酋民用航空局）商业无人机飞行执照下执行，可在迪拜及阿联酋全境合法进行商业航拍。",
        "航拍可作为制作的一部分提供，覆盖迪拜及阿联酋全境。每个拍摄地点所需的许可均由我们提前安排，无需客户处理。",
      ],
      [
        "你们的无人机航拍是否获得飞行许可？",
        "航拍是如何安排的？",
      ],
      // Service card: drone sold as a standalone bookable service with a price
      // that does not appear on /pricing.
      [
        "航拍在商业飞行执照下执行，提供阿联酋合法航拍服务。建筑、景观、活动全方位空中视角，影视级画质。",
        "航拍可作为制作的一部分提供，用于建筑、景观与活动的空中视角。拍摄地点所需许可由我们提前安排。",
      ],
    ],
  ],
  [
    "app/zh/page.tsx",
    [
      [
        "在迪拜进行商业无人机拍摄必须持有（阿联酋民用航空局）颁发的商业飞行执照。所有航拍均在合法许可下依法合规执行，并会为特定区域申请必要的飞行许可。",
        "在迪拜进行商业航拍需要相应的许可，特定区域还需额外申请。我们会在拍摄前安排好所需许可，客户无需自行处理。",
      ],
    ],
  ],

  // ── ARABIC ─────────────────────────────────────────────────────────────
  // "we guarantee full compliance with Civil Aviation Authority regulations"
  // plus "certified drone pilot" in the includes list.
  [
    "app/ar/services/[slug]/page.tsx",
    [
      [
        "جميع جلساتنا مؤمّنة ومنسّقة مع الجهات المختصة في الإمارات، ونضمن الامتثال الكامل للوائح هيئة الطيران المدني.",
        "جميع جلساتنا منسّقة مع الجهات المختصة في الإمارات، ويتم ترتيب التصاريح اللازمة لكل موقع مسبقاً.",
      ],
      ["طيار مسيّرة معتمد ", "تنسيق التصوير الجوي ضمن الإنتاج "],
    ],
  ],
  // Meta description — appears directly in search results.
  [
    "app/ar/blog/taswir-zifaf-emirati-dubai-2026/page.tsx",
    [
      [
        "رخصة طيران مسيّر من هيئة الطيران المدني، ",
        "تصوير جوي ضمن الإنتاج مع ترتيب التصاريح مسبقاً، ",
      ],
      [
        "نعم، التصوير الجوي يُنفَّذمن هيئة الطيران المدني الإماراتية لتشغيل الطائرات المسيّرة.",
        "نعم، التصوير الجوي متاح ضمن الإنتاج، مع ترتيب التصاريح اللازمة للموقع مسبقاً.",
      ],
    ],
  ],
  [
    "app/ar/blog/taswiremolak-dubai-2026/page.tsx",
    [
      [
        "تصوير جوي مرخص من هيئة الطيران المدني، ",
        "تصوير جوي ضمن الإنتاج مع ترتيب التصاريح، ",
      ],
      // This one is a third-person explanation of UAE law, which is acceptable
      // under the standing rule. Only the trailing first-person sentence
      // implying we hold the licence is changed.
      [
        "التصوير الجوي يُنفَّذ بموجب الترخيص اللازم، ونتولى إجراءات التصريح نيابة عن العملاء.",
        "نتولى إجراءات التصاريح اللازمة للموقع نيابة عن العملاء قبل التصوير.",
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

  for (const [find, replace] of pairs) {
    if (!src.includes(find)) {
      console.log(`  no match     ${rel}\n               "${find.slice(0, 60)}..."`);
      missed++;
      continue;
    }
    src = src.split(find).join(replace);
    fileChanged = true;
    changed++;
  }

  if (fileChanged) {
    writeFileSync(file, src);
    console.log(`patched        ${rel}`);
  }
}

console.log(`\n${changed} replacement(s) applied, ${missed} not matched.`);
