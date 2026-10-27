const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  HeadingLevel,
  LevelFormat,
  PageBreak,
  PageNumber,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = require("docx");

const GOLD = "C89D2B";
const BLACK = "111111";
const GREY = "5B5B5B";
const LIGHT = "F3F0E8";
const WHITE = "FFFFFF";
const tableWidth = 9360;

const border = { style: BorderStyle.SINGLE, size: 4, color: "D8D3C7" };
const cellBorders = { top: border, bottom: border, left: border, right: border };

function p(text = "", options = {}) {
  return new Paragraph({
    spacing: { after: 120, line: 300 },
    ...options,
    children: [new TextRun({ text, size: 21, color: BLACK, ...options.run })],
  });
}

function label(text) {
  return new Paragraph({
    spacing: { before: 80, after: 50 },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 18, color: GOLD, characterSpacing: 80 })],
  });
}

function blankLines(count = 2) {
  return Array.from({ length: count }, () => new Paragraph({
    spacing: { after: 130 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: "CFC9BA" } },
    children: [new TextRun({ text: " ", size: 20 })],
  }));
}

function sectionTitle(number, title, intro) {
  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 120, after: 100 },
      children: [
        new TextRun({ text: `${number}  `, color: GOLD, bold: true, size: 34 }),
        new TextRun({ text: title, color: BLACK, bold: true, size: 34 }),
      ],
    }),
    ...(intro ? [p(intro, { run: { color: GREY, italics: true } })] : []),
  ];
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "brief-bullets", level: 0 },
    spacing: { after: 90, line: 280 },
    children: [new TextRun({ text, size: 21, color: BLACK })],
  });
}

function checkbox(text) {
  return new Paragraph({
    spacing: { after: 85, line: 280 },
    children: [
      new TextRun({ text: "☐  ", size: 22, color: GOLD, font: "Arial" }),
      new TextRun({ text, size: 21, color: BLACK }),
    ],
  });
}

function cell(text, width, opts = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders: cellBorders,
    shading: opts.header ? { fill: BLACK, type: ShadingType.CLEAR } : opts.shade ? { fill: LIGHT, type: ShadingType.CLEAR } : undefined,
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    children: [new Paragraph({
      spacing: { after: 0 },
      children: [new TextRun({ text, bold: Boolean(opts.header), color: opts.header ? WHITE : BLACK, size: opts.header ? 19 : 20 })],
    })],
  });
}

function twoColumnPrompts(rows) {
  return new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: [3000, 6360],
    rows: rows.map((row, index) => new TableRow({
      children: [
        cell(row[0], 3000, { shade: index % 2 === 0 }),
        cell(row[1], 6360, { shade: index % 2 === 0 }),
      ],
    })),
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

const children = [
  new Paragraph({ spacing: { before: 1100, after: 180 }, children: [new TextRun({ text: "BACKYARD", bold: true, size: 22, color: GOLD, characterSpacing: 220 })] }),
  new Paragraph({ spacing: { after: 450 }, children: [new TextRun({ text: "STUDIO OFFICIAL", bold: true, size: 18, color: GREY, characterSpacing: 150 })] }),
  new Paragraph({ spacing: { after: 220 }, children: [new TextRun({ text: "VIDEO PRODUCTION", bold: true, size: 52, color: BLACK })] }),
  new Paragraph({ spacing: { after: 500 }, children: [new TextRun({ text: "BRIEF TEMPLATE", bold: true, size: 52, color: GOLD })] }),
  p("A vendor-neutral planning document for corporate, commercial, event and social video production in Dubai and the UAE.", { run: { size: 26, color: GREY } }),
  new Paragraph({ spacing: { before: 800, after: 120 }, border: { top: { style: BorderStyle.SINGLE, size: 12, color: GOLD } }, children: [new TextRun({ text: "FREE EDITABLE TEMPLATE", bold: true, size: 20, color: GOLD })] }),
  p("Prepared by Backyard Studio Official · Version 1.0 · Reviewed 27 October 2026", { run: { size: 18, color: GREY } }),
  p("Guidance: https://www.backyardstudioofficial.com/guides/video-production-brief-template", { run: { size: 18, color: GREY } }),
  pageBreak(),

  ...sectionTitle("00", "How to use this template", "Complete the decision summary first. Then use the detailed sections to remove assumptions before suppliers quote, schedule or film."),
  bullet("Write confirmed facts in plain language. Mark unknowns as open decisions instead of guessing."),
  bullet("Choose one primary audience and one primary viewer action. Secondary audiences may be listed separately."),
  bullet("List every required asset by channel, duration, aspect ratio, language and caption requirement."),
  bullet("Name one person who consolidates feedback and one person who gives final approval."),
  bullet("Confirm filming, venue, property, road, aerial and security approvals before locking the shoot date."),
  bullet("Attach brand guidelines, product facts, reference links, previous research and legal wording as appendices."),
  p("This template is a production-planning aid, not legal advice. Verify current permit and aviation requirements with the responsible authorities and location owner.", { run: { italics: true, color: GREY } }),
  ...sectionTitle("01", "One-page decision summary"),
  label("Project name and version"), ...blankLines(1),
  label("Business problem or opportunity"), ...blankLines(3),
  label("Primary audience"), ...blankLines(2),
  label("Desired viewer action"), ...blankLines(2),
  label("Single most important message"), ...blankLines(2),
  twoColumnPrompts([
    ["Launch / delivery date", ""],
    ["Working budget range", ""],
    ["Final approver", ""],
    ["Primary success metric", ""],
  ]),
  pageBreak(),

  ...sectionTitle("02", "Audience, objective and message", "Define the change the video must create before discussing visual style."),
  label("Business objective"), ...blankLines(3),
  label("Communication task for this video"), ...blankLines(3),
  label("Primary audience: role, market, current belief and barrier"), ...blankLines(4),
  label("Secondary audiences, if any"), ...blankLines(2),
  label("Call to action"), ...blankLines(2),
  label("Message hierarchy"),
  twoColumnPrompts([
    ["Main message", ""],
    ["Proof point 1", ""],
    ["Proof point 2", ""],
    ["Proof point 3", ""],
    ["Required legal wording", ""],
  ]),
  pageBreak(),

  ...sectionTitle("03", "Deliverables and channels", "Add one row for every final asset. Do not rely on a single 'master video' line."),
  new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: [1680, 1000, 900, 1120, 1300, 1700, 1660],
    rows: [
      new TableRow({ children: [
        cell("Asset", 1680, { header: true }), cell("Qty", 1000, { header: true }), cell("Length", 900, { header: true }),
        cell("Ratio", 1120, { header: true }), cell("Language", 1300, { header: true }), cell("Channel", 1700, { header: true }), cell("Due", 1660, { header: true }),
      ] }),
      ...Array.from({ length: 8 }, (_, index) => new TableRow({ children: [
        cell(index === 0 ? "Hero film" : "", 1680, { shade: index % 2 === 0 }),
        cell("", 1000, { shade: index % 2 === 0 }), cell("", 900, { shade: index % 2 === 0 }),
        cell("", 1120, { shade: index % 2 === 0 }), cell("", 1300, { shade: index % 2 === 0 }),
        cell("", 1700, { shade: index % 2 === 0 }), cell("", 1660, { shade: index % 2 === 0 }),
      ] })),
    ],
  }),
  label("Technical and accessibility requirements"),
  checkbox("Captions / subtitles"), checkbox("Transcript"), checkbox("Audio description or descriptive script where required"), checkbox("Platform-safe text and logo zones"), checkbox("Brand-approved thumbnails"),
  label("File delivery and archive requirements"), ...blankLines(3),
  pageBreak(),

  ...sectionTitle("04", "Creative direction and proof", "References are useful only when each one names the quality to borrow—not a campaign to copy."),
  label("Three words the audience should use after watching"), ...blankLines(2),
  label("Desired tone and pace"), ...blankLines(3),
  label("Reference links and the exact quality each demonstrates"), ...blankLines(5),
  label("Visual, music, casting or messaging choices to avoid"), ...blankLines(4),
  label("Claims and proof that must appear"), ...blankLines(4),
  label("Existing brand assets available"),
  checkbox("Brand guidelines"), checkbox("Logo files"), checkbox("Fonts"), checkbox("Product renders / pack shots"), checkbox("Existing footage"), checkbox("Approved music / stock licences"),
  pageBreak(),

  ...sectionTitle("05", "People, locations and production facts"),
  label("On-camera contributors and availability"), ...blankLines(4),
  label("Interview owner and approved question themes"), ...blankLines(3),
  label("Language, translation, voice-over and cultural requirements"), ...blankLines(3),
  label("Locations and access contacts"),
  new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: [2200, 1900, 1900, 1660, 1700],
    rows: [
      new TableRow({ children: [cell("Location", 2200, { header: true }), cell("Owner / contact", 1900, { header: true }), cell("Access window", 1900, { header: true }), cell("Approval", 1660, { header: true }), cell("Restrictions", 1700, { header: true })] }),
      ...Array.from({ length: 6 }, (_, index) => new TableRow({ children: [
        cell("", 2200, { shade: index % 2 === 0 }), cell("", 1900, { shade: index % 2 === 0 }), cell("", 1900, { shade: index % 2 === 0 }), cell("", 1660, { shade: index % 2 === 0 }), cell("", 1700, { shade: index % 2 === 0 }),
      ] })),
    ],
  }),
  label("Special operations"),
  checkbox("Ground filming permit"), checkbox("Drone / aerial operation"), checkbox("Road or parking control"), checkbox("Rigging / elevated platform"), checkbox("Haze, effects, animals or weapons"), checkbox("Generator, high-load power or overnight work"),
  label("Weather and approval fallback plan"), ...blankLines(3),
  pageBreak(),

  ...sectionTitle("06", "Rights, privacy, legal and approvals"),
  twoColumnPrompts([
    ["Usage territory", ""],
    ["Usage period", ""],
    ["Paid media included?", ""],
    ["Talent releases owner", ""],
    ["Location release owner", ""],
    ["Music / stock licence owner", ""],
    ["Raw footage required?", ""],
    ["Project files required?", ""],
    ["Confidentiality / embargo", ""],
    ["Data retention requirement", ""],
  ]),
  label("Approval matrix"),
  new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: [2300, 1900, 1900, 1630, 1630],
    rows: [
      new TableRow({ children: [cell("Stage", 2300, { header: true }), cell("Prepares", 1900, { header: true }), cell("Reviews", 1900, { header: true }), cell("Final approver", 1630, { header: true }), cell("Deadline", 1630, { header: true })] }),
      ...["Brief", "Treatment", "Script", "Casting / locations", "Rough cut", "Fine cut", "Final masters"].map((stage, index) => new TableRow({ children: [
        cell(stage, 2300, { shade: index % 2 === 0 }), cell("", 1900, { shade: index % 2 === 0 }), cell("", 1900, { shade: index % 2 === 0 }), cell("", 1630, { shade: index % 2 === 0 }), cell("", 1630, { shade: index % 2 === 0 }),
      ] })),
    ],
  }),
  pageBreak(),

  ...sectionTitle("07", "Schedule, budget and change control"),
  label("Milestones"),
  new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: [3100, 2100, 2100, 2060],
    rows: [
      new TableRow({ children: [cell("Milestone", 3100, { header: true }), cell("Owner", 2100, { header: true }), cell("Due date", 2100, { header: true }), cell("Status", 2060, { header: true })] }),
      ...["Brief approved", "Treatment approved", "Script locked", "Permits confirmed", "Shoot", "Rough cut", "Final approval", "Masters delivered"].map((stage, index) => new TableRow({ children: [
        cell(stage, 3100, { shade: index % 2 === 0 }), cell("", 2100, { shade: index % 2 === 0 }), cell("", 2100, { shade: index % 2 === 0 }), cell("", 2060, { shade: index % 2 === 0 }),
      ] })),
    ],
  }),
  label("Budget guardrails"),
  twoColumnPrompts([
    ["Approved working range", ""],
    ["Contingency owner", ""],
    ["Purchase order process", ""],
    ["Included review rounds", ""],
    ["Rush / overtime rule", ""],
    ["Change approval owner", ""],
  ]),
  label("What is fixed and what may flex?"), ...blankLines(4),
  pageBreak(),

  ...sectionTitle("08", "Measurement plan"),
  label("Primary outcome and baseline"), ...blankLines(3),
  label("Primary conversion or action"), ...blankLines(2),
  label("Value per qualified outcome and source"), ...blankLines(2),
  label("Tracking setup"),
  checkbox("Dedicated or clearly tagged landing page"), checkbox("UTM convention approved"), checkbox("Meaningful analytics event marked"), checkbox("CRM source and campaign fields preserved"), checkbox("Phone / WhatsApp attribution method agreed"), checkbox("Offline use recorded by sales or events team"),
  twoColumnPrompts([
    ["Attribution model", ""],
    ["Measurement window", ""],
    ["Reporting owner", ""],
    ["Review cadence", ""],
    ["Decision threshold", ""],
  ]),
  label("Known measurement limits"), ...blankLines(3),
  pageBreak(),

  ...sectionTitle("09", "Pre-shoot readiness checklist"),
  checkbox("Brief, treatment and script approved by the named final approver"),
  checkbox("Deliverables table includes every channel, ratio, language and deadline"),
  checkbox("Crew, talent and contributors confirmed with contact details"),
  checkbox("Talent, location, music and stock usage rights documented"),
  checkbox("Locations booked and owner / venue conditions distributed"),
  checkbox("Filming, access, road, aerial and specialist approvals confirmed where required"),
  checkbox("Insurance and risk assessment meet venue and authority requirements"),
  checkbox("Call sheet, access map, parking and loading plan distributed"),
  checkbox("Equipment, power, data, backup and weather plan checked"),
  checkbox("Interview questions and factual claims approved"),
  checkbox("Wardrobe, products, props, brand assets and legal wording ready"),
  checkbox("Review links, feedback deadline and consolidated approver confirmed"),
  checkbox("Landing page, tracking tags, CRM fields and reporting owner ready before launch"),
  new Paragraph({ spacing: { before: 500, after: 120 }, border: { top: { style: BorderStyle.SINGLE, size: 8, color: GOLD } }, children: [new TextRun({ text: "READY TO BRIEF A PRODUCTION TEAM?", bold: true, size: 24, color: BLACK })] }),
  p("Send the completed template to info@backyardstudioofficial.com or visit https://www.backyardstudioofficial.com/contact for a scoped response."),
];

const doc = new Document({
  creator: "Backyard Studio Official",
  title: "Video Production Brief Template",
  subject: "Vendor-neutral video production brief for Dubai and UAE projects",
  description: "Editable production brief covering objectives, audience, deliverables, approvals, rights, logistics, schedule, budget and measurement.",
  keywords: "video production brief, corporate video brief, Dubai production template",
  numbering: {
    config: [{
      reference: "brief-bullets",
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: "•",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 420, hanging: 220 } } },
      }],
    }],
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 21, color: BLACK } } },
    paragraphStyles: [{
      id: "Title",
      name: "Title",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: { font: "Arial", size: 52, bold: true, color: BLACK },
    }],
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 900, right: 900, bottom: 900, left: 900 },
      },
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "BACKYARD STUDIO OFFICIAL  ·  VIDEO PRODUCTION BRIEF  ·  ", size: 16, color: GREY }),
            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GOLD }),
          ],
        })],
      }),
    },
    children,
  }],
});

const output = path.resolve(__dirname, "..", "public", "downloads", "backyard-studio-video-production-brief-template.docx");
fs.mkdirSync(path.dirname(output), { recursive: true });
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(output, buffer);
  process.stdout.write(`${output}\n`);
});
