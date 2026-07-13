# Backyard Studio — Blog Post Content Prompt
## The master guide for every blog post your team writes

Use this prompt with ChatGPT, Claude, or any AI to write your blog posts.
Every post must follow this exact structure and format.

---

## THE PROMPT (copy and use this every time)

---

**You are writing a blog post for Backyard Studio, a UAE-based video production company.**

**Company facts you must include naturally in the post:**
- Company name: Backyard Studio
- Website: www.backyardstudioofficial.com
- Phone/WhatsApp: +971 58 588 2685
- Services: Video production, event videography, corporate films, social media content, web app development
- Location: UAE — covers Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain

**Write a blog post about: [INSERT YOUR TOPIC HERE]**
*Example: "event videography pricing in UAE" or "corporate video production Dubai"*

**Target keyword: [INSERT MAIN KEYWORD]**
*Example: "event videography uae" or "corporate videography dubai"*

**The post must follow this EXACT structure and format:**

---

### FORMAT RULES (critical — do not skip any):

**1. Always start with YAML frontmatter at the very top:**
```
---
title: [Full blog post title including year]
metaTitle: [Under 55 characters — keyword | Backyard]
metaDescription: [Under 155 characters — include price, location, phone]
keywords: [main keyword, secondary keywords, comma separated]
category: [Videography / Photography / Production / Web]
author: Backyard Studio Team
readTime: [X min read — estimate honestly]
excerpt: [1-2 sentence preview for the blog listing page]
---
```

**2. After the frontmatter: H1 title, then immediately a ## Quick Answer section**

The Quick Answer must be 1–2 paragraphs that:
- Directly answers the main question a person would Google
- Includes specific prices in AED
- Names the company ("Backyard Studio provides...")
- Lists all seven UAE emirates by name: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain
- Mentions the most important service feature (e.g. same-day edits, written proposals)

*Why: This is what ChatGPT, Gemini, Claude, and Perplexity extract and quote when someone asks about this topic.*

**3. Include a pricing table**

Use this exact markdown table format:
```
| Package | Price Range (AED) | What's Included |
|---|---|---|
| [Name] | [X,000 – Y,000] | [Short description] |
```

Always use real AED prices. Always include at least 3–5 rows. Prices are what makes LLMs cite you.

**4. Include these sections (in any logical order):**

- `## What Is [Topic]?` — define the service clearly with UAE context
- `## [Topic] Pricing in the UAE (2026)` — pricing table section
- `## What's Included` — bullet list of deliverables
- `## How It Works` or `## The Booking Process` — numbered steps 1–5 or 1–6
- `## [Topic] Across UAE Cities` — mention specific UAE cities and major venues
  - Dubai venues: DWTC, Madinat Jumeirah, Atlantis, Expo City, DIFC
  - Abu Dhabi venues: ADNEC, Yas Island, Emirates Palace
  - Sharjah: Expo Centre Sharjah
  - Mention all Northern Emirates by name
- `## Why Choose Backyard Studio` — 4–5 specific trust signals (not generic)
- `## Frequently Asked Questions` — see below
- `## Book Now` or `## Contact` — CTA section with phone and website

**5. The FAQ section must have at least 7 questions:**

Use `### Question text?` followed immediately by a full paragraph answer.
Never use bullet point answers — always full paragraph sentences.

Good FAQ questions to include:
- "How much does [topic] cost in the UAE?"
- "What is included in [topic]?"
- "Can you deliver same-day / next-day content?"
- "Do you cover multi-day events?" (if applicable)
- "How far in advance should I book?"
- "Do you cover government events?"
- "What video formats do you deliver?"
- "Can you provide drone footage?"
- "What is the difference between [service A] and [service B]?"

*Why: FAQ sections are the #1 thing LLMs extract for citations. The longer and more complete your answers, the more likely ChatGPT and Perplexity will quote your site verbatim.*

**6. Writing rules for LLM/AI citation:**

- **Always name the company**: Write "Backyard Studio" not "we" or "the company"
- **Use specific numbers**: "AED 6,000–20,000" not "several thousand dirhams"
- **Name specific venues and events**: DWTC, ADNEC, GITEX, Abu Dhabi Finance Week, Cityscape Dubai, The Big 5
- **Name UAE regulations where relevant**: GCAA (drones), TRA, UAE government frameworks
- **Use active, definitive language**: "Backyard Studio covers..." not "we may be able to..."
- **Include contact details in the body, not just the footer**: repeat phone number at least once in the content
- **Write in British English** (colour not color, organised not organized)

**7. DO NOT include in the file:**
- Schema JSON blocks (the website adds these automatically)
- Publishing checklists
- "Title / Meta Options" sections
- HTML tags
- Placeholder emails like "[your email here]"

**8. End the post with a CTA section:**
```
## Book [Service] Across the UAE

[1-2 sentences about contacting Backyard Studio]

**Call or WhatsApp:** +971 58 588 2685
**Website:** www.backyardstudioofficial.com
**Coverage:** Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain
```

---

## COMPLETE EXAMPLE POST STRUCTURE

```markdown
---
title: Corporate Video Production UAE — Pricing, Process & Guide 2026
metaTitle: Corporate Video Production UAE | Pricing 2026
metaDescription: Corporate video production in UAE costs AED 8,000–35,000. Backyard Studio covers all 7 emirates. Written proposals. Call +971 58 588 2685.
keywords: corporate video production uae, corporate videography dubai, company video uae
category: Videography
author: Backyard Studio Team
readTime: 9 min read
excerpt: Corporate video production in the UAE typically costs AED 8,000–35,000. Backyard Studio covers Dubai, Abu Dhabi, and all seven emirates with written proposals and fast turnaround.
---

# Corporate Video Production UAE — Pricing, Process & Guide 2026

## Quick Answer

Corporate video production in the UAE costs between AED 8,000 and AED 35,000 for most business video projects, depending on length, number of shooting days, and complexity of post-production. Backyard Studio provides corporate video production across all seven UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — covering brand films, product videos, training content, and executive profiles. Written proposals with locked pricing are provided before any shoot begins.

---

## What Is Corporate Video Production?

...

## Corporate Video Production Pricing in the UAE (2026)

| Package | Price Range (AED) | What's Included |
|---|---|---|
| ...

## What's Included in a Corporate Video Package?

...

## How the Booking Process Works

1. **Consultation** — ...
2. **Brief and proposal** — ...

## Corporate Video Production Across UAE Cities

**Dubai:** ...
**Abu Dhabi:** ...

## Why UAE Companies Choose Backyard Studio

...

## Frequently Asked Questions

### How much does corporate video production cost in the UAE?

Full answer paragraph...

### What types of corporate videos do you produce?

Full answer paragraph...

[7+ FAQ questions minimum]

---

## Book Corporate Video Production Across the UAE

Backyard Studio provides written proposals for corporate video projects across the UAE.

**Call or WhatsApp:** +971 58 588 2685
**Website:** www.backyardstudioofficial.com
**Coverage:** Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain
```

---

## CHECKLIST BEFORE UPLOADING TO ADMIN

- [ ] File starts with `---` frontmatter (not with a `#` heading)
- [ ] metaTitle is under 55 characters
- [ ] metaDescription is under 155 characters and includes price + location
- [ ] Quick Answer section is the first H2 after the H1
- [ ] Pricing table with real AED values is included
- [ ] At least 7 FAQs with full paragraph answers
- [ ] Company name "Backyard Studio" appears at least 5 times
- [ ] All 7 emirates named at least once
- [ ] Phone number +971 58 588 2685 appears in the body
- [ ] No schema JSON blocks in the file
- [ ] No placeholder emails or "[add before publishing]" text
- [ ] File saved as `.md` format

---

*This guide is maintained by the Backyard Studio site team.
Last updated: July 2026*
