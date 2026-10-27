export const BASE_URL = "https://www.backyardstudioofficial.com";
export const RESOURCE_REVIEW_DATE = "2026-10-27";

export type ResourceTable = {
  headers: string[];
  rows: string[][];
};

export type ResourceSection = {
  id: string;
  title: string;
  answer: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ResourceTable;
};

export type ResourceSource = {
  label: string;
  publisher: string;
  url: string;
  note: string;
};

export type ResourceLink = {
  label: string;
  href: string;
  description: string;
};

export type ResourceGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  scopeNote: string;
  readingTime: string;
  sections: ResourceSection[];
  questions: { question: string; answer: string }[];
  sources: ResourceSource[];
  related: ResourceLink[];
  download?: { label: string; href: string; detail: string };
  tool?: "roi-calculator";
};

export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    slug: "dubai-filming-permit",
    eyebrow: "Dubai production planning guide",
    title: "Dubai Filming Permit Guide",
    shortTitle: "Dubai filming permits",
    metaTitle: "Dubai Filming Permit Guide | 2026 Checklist",
    metaDescription:
      "Plan a legal Dubai shoot with the current DFTC process, exemptions, script approval, location consent, timelines and drone approval checkpoints.",
    keywords: [
      "Dubai filming permit",
      "film permit Dubai",
      "commercial photography permit Dubai",
      "DFTC filming permit",
      "Dubai video shoot permit",
      "filming in Dubai requirements",
    ],
    summary:
      "For commercial filming in Dubai, start with the Dubai Film and TV Commission (DFTC), then confirm consent and any separate requirements with the location owner. DFTC says weddings, events, educational filming, press conferences and personal-use filming are scenarios that do not require its filming permit; that does not automatically remove venue, privacy, access, road, security or drone approvals. International productions must use a local production company for the filming request.",
    scopeNote:
      "This is a production-planning guide, not legal advice. Rules, fees and location conditions can change. Verify the live requirement with DFTC and the location owner before locking crew, travel or media dates.",
    readingTime: "9 minute read",
    sections: [
      {
        id: "permit-or-exemption",
        title: "Do you need a filming permit in Dubai?",
        answer:
          "A DFTC filming permit is the normal starting point for commercial production, broadcasting and photography in Dubai. The DFTC FAQ lists weddings, events, educational purposes, press conferences and personal-use filming as scenarios that do not require its permit. Treat an exemption as narrow: the property owner, venue, community, road authority or security team may still require written approval, access passes or insurance.",
        paragraphs: [
          "The deciding factors are not simply whether the camera is small or whether the crew calls the shoot 'content'. Define the client, purpose, locations, equipment footprint, public impact and distribution. A brand film on a hotel terrace is different from a guest filming a personal clip, even if both use a mirrorless camera.",
          "When the brief includes a drone, road control, a public-space build, actors, large lighting, generators or sensitive infrastructure, plan additional approvals from the beginning. Do not wait until the filming permit is issued to discover that another authority or the property owner has not approved the operation.",
        ],
        table: {
          headers: ["Scenario", "DFTC starting point", "Other checks that may remain"],
          rows: [
            ["Commercial brand, advertising or corporate shoot", "Confirm filming-permit route", "Location owner, access, insurance, privacy and any specialist authority"],
            ["Film, TV series or documentary", "Script approval before filming application", "Locations, visas, equipment, road or aerial requirements"],
            ["Wedding, event, education or press conference", "DFTC FAQ lists as permit-exempt", "Venue rules, consent, access and specialist operations"],
            ["Personal-use filming", "DFTC FAQ lists as permit-exempt", "Respect privacy, restricted sites and property rules"],
            ["Any drone capture", "Can be included with ground filming", "Separate aviation, security and mission approvals still apply"],
          ],
        },
      },
      {
        id: "application-order",
        title: "What is the correct application order?",
        answer:
          "The safest order is scope first, approvals second, production booking third. Build one accurate location and activity schedule, secure script approval when required, obtain location-owner consent, submit the DFTC request, and run drone or specialist approvals in parallel only when their prerequisites are ready.",
        bullets: [
          "Freeze the production purpose, distribution channels and responsible client entity.",
          "List every location, access window, filming date, crew member, vehicle and significant equipment item.",
          "Confirm whether the DFTC exemption list applies to the exact activity—not merely the event name.",
          "For films, TV series and documentaries, submit the complete script in the required language and include the planned scene/location itinerary.",
          "Secure the location owner's NOC or booking terms and record any restricted angles, public areas or operating hours.",
          "Submit the filming request through the current DFTC portal using the eligible local production entity.",
          "Add aerial, road, security, building-management or other authority approvals as separate workstreams.",
          "Carry the issued permit and all supporting NOCs on the shoot; film only within the approved place, date, time and activity.",
        ],
      },
      {
        id: "script-approval",
        title: "When is script approval required?",
        answer:
          "DFTC states that movie, television-series and documentary productions require script clearance before the filming-permit application. The complete script is required even when only one sequence will be filmed in Dubai. Arabic productions submit Arabic; other languages are submitted in English.",
        paragraphs: [
          "A corporate interview, product film or social campaign may use a treatment, storyboard or question list rather than a feature script. Still prepare the creative in a reviewable form. It helps the location owner and production team understand what will be filmed and exposes approval problems before the crew arrives.",
          "DFTC's published timelines are materially longer for scripted formats than for a routine filming permit. Build script review into pre-production and avoid promising a shoot date before the relevant approval is complete.",
        ],
      },
      {
        id: "timelines-fees",
        title: "How long does a Dubai filming permit take and what does it cost?",
        answer:
          "DFTC's FAQ states a one-working-day filming-permit approval target, subject to location-owner approval, and a two-working-day registration timeline. It lists longer review windows for TV series, feature films and documentaries. These are service timelines, not a guarantee that a complex multi-location production will be ready in one day.",
        paragraphs: [
          "DFTC points applicants to its government-location fee schedule; private-location charges are decided by the owner. There is therefore no honest single 'Dubai film permit price'. Budget separately for authority fees, location hire, deposits, parking, security, building supervision, road control, insurance and any drone operation.",
          "For a simple corporate shoot, keep at least one contingency day between approval and filming. For controlled public space, multiple owners, a drone or scripted entertainment, plan in weeks and confirm dependencies with each authority.",
        ],
      },
      {
        id: "permit-ready-brief",
        title: "What should a permit-ready production brief contain?",
        answer:
          "A permit-ready brief lets every reviewer see the same production. It should identify the responsible company, client, purpose, audience, distribution, dates, locations, activity, crew, equipment, vehicles, talent, special effects, drone use and the exact person responsible on location.",
        bullets: [
          "Project title, client and production-company legal names",
          "Short synopsis, treatment, script or interview questions",
          "Exact locations with maps, access points and owner contacts",
          "Filming dates, setup/strike windows and weather contingency",
          "Crew, talent, vehicles, equipment and power requirements",
          "Public interaction, crowd control, road or parking impact",
          "Aerial capture, rigging, lighting, haze, animals or other special activity",
          "Insurance, risk assessment, emergency contact and nearest safe assembly point",
          "Intended channels, territories and usage period",
        ],
      },
      {
        id: "day-of-check",
        title: "What must be checked on the shoot day?",
        answer:
          "Before the first setup, match the actual plan to the issued permissions. A valid approval for one location, time or activity does not cover a different rooftop, an extended wrap, a spontaneous drone flight or a larger crew.",
        bullets: [
          "Permit and location NOC available to the producer or location manager",
          "Crew and vehicle access passes confirmed",
          "Approved boundaries, angles, dates and hours briefed to department heads",
          "Public walkways, emergency routes and neighbouring operations kept clear",
          "Consent and release process ready for identifiable talent or contributors",
          "No restricted, security-sensitive or private material captured outside scope",
          "Any change is paused and cleared before filming continues",
        ],
      },
    ],
    questions: [
      {
        question: "Can an international company apply for a Dubai filming permit directly?",
        answer:
          "DFTC says international companies must go through a local production company to film in Dubai. Individuals and international companies may submit script approval directly, but the filming request itself requires a local production house.",
      },
      {
        question: "Does a private location remove the need for DFTC approval?",
        answer:
          "No automatic exemption follows from a location being privately owned. DFTC describes itself as the permitting authority for filming operations in Dubai, while the private owner separately controls access, dates and location fees. Confirm both layers for the exact shoot.",
      },
      {
        question: "Can ground filming and drone filming be requested together?",
        answer:
          "DFTC's FAQ says aerial and ground filming can be included in one permit application. The drone operation still needs the applicable aviation, security and mission approvals; a ground permit is not a flight authorisation.",
      },
      {
        question: "Do small social-media shoots need permits?",
        answer:
          "Equipment size is not the reliable test. Check whether the activity is commercial, where it occurs, whether it affects the public, and whether the DFTC exemption list applies. The venue or property owner may still require written consent even when DFTC does not require a permit.",
      },
    ],
    sources: [
      {
        label: "DFTC Frequently Asked Questions",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/faq",
        note: "Permit exemptions, eligible activities, registration and approval timelines, local-company rule, aerial/ground application and fee ownership.",
      },
      {
        label: "Applying for Script Approval",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/site/how-to-film-in-dubai/applying-for-script-approval",
        note: "Script formats, languages, local production requirement and published approval process.",
      },
      {
        label: "Filming Permit Terms and Conditions",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/terms-and-condition",
        note: "Permit scope, authority and permit-holder responsibilities.",
      },
    ],
    related: [
      { label: "Drone filming checklist", href: "/guides/drone-filming-checklist-dubai", description: "Separate operator, mission and on-set checks for aerial capture." },
      { label: "Production brief template", href: "/guides/video-production-brief-template", description: "Prepare the information approvals teams and producers need." },
      { label: "Pre- and post-production", href: "/services/pre-post-production", description: "Location planning, scheduling and production support in Dubai." },
      { label: "Dubai production services", href: "/locations/dubai", description: "Browse Backyard's services across Dubai." },
    ],
  },
  {
    slug: "drone-filming-checklist-dubai",
    eyebrow: "Commercial aerial production checklist",
    title: "Dubai Drone Filming Checklist",
    shortTitle: "Drone filming checklist",
    metaTitle: "Dubai Drone Filming Checklist | 2026",
    metaDescription:
      "A current commercial drone filming checklist for Dubai: operator readiness, aircraft registration, mission approvals, location consent and shoot-day safety.",
    keywords: [
      "Dubai drone filming checklist",
      "drone filming permit Dubai",
      "commercial drone photography Dubai rules",
      "DCAA drone permit",
      "GCAA drone operation approval",
      "aerial filming Dubai requirements",
    ],
    summary:
      "Commercial drone filming in Dubai is not covered by buying or registering an aircraft alone. The production must use an appropriately authorised operator and pilot, register the aircraft, obtain the required Dubai and federal mission approvals, secure capture/security clearance where applicable, and hold the location owner's consent. The issued approval must match the exact coordinates, altitude, date, time and activity.",
    scopeNote:
      "Use this checklist for planning, then verify the live mission with DCAA, GCAA, DFTC and the location owner. Airspace status and security requirements can change; only an issued approval authorises the operation.",
    readingTime: "10 minute read",
    sections: [
      {
        id: "registration-is-not-permission",
        title: "Is drone registration enough to film in Dubai?",
        answer:
          "No. DCAA's commercial-drone registration service registers the aircraft for use in Dubai, while the DCAA regulations separately require approval for the flight or mission. GCAA likewise distinguishes an organisation's operator authorisation from operational permission for a specific activity. Keep aircraft registration, operator authorisation and mission approval as three separate checklist items.",
        paragraphs: [
          "The mission approval is tied to what will actually happen: operating area, altitude, date, time and purpose. If the brief changes, the approval may need to change. Never substitute a registration certificate, pilot card or previous NOC for the current mission approval.",
        ],
      },
      {
        id: "operator-readiness",
        title: "Phase 1: operator, pilot and aircraft readiness",
        answer:
          "Complete the standing credentials before selling or scheduling aerial capture. This work should be finished before a client depends on a specific flight date.",
        bullets: [
          "Confirm the operating company's UAE trade-licence activity covers the planned commercial operation.",
          "Hold the applicable organisation/operator authorisation for professional UAS work.",
          "Register each aircraft with the required authority and keep serial, model, weight and photographs current.",
          "Assign a pilot with the applicable UAE-recognised training and licence for the operation category.",
          "Maintain insurance that covers the aircraft, activity, dates, location and required third-party liability.",
          "Keep maintenance, firmware, battery-cycle and incident records available for the aircraft.",
          "Define who is pilot in command and who controls the camera; one person should not be overloaded on a complex set.",
        ],
      },
      {
        id: "mission-approval",
        title: "Phase 2: mission and location approvals",
        answer:
          "Build the application from exact mission data, not a general intention to film 'somewhere in Dubai'. DCAA states that mission authorisation is based on the operator's category, location, altitude, date and time, and that additional documents may be required for the mission profile.",
        bullets: [
          "Plot exact coordinates, operating radius, take-off/landing point and maximum altitude.",
          "State the filming purpose, client, capture device and whether live transmission is involved.",
          "Set exact operating dates and times plus a realistic weather-contingency plan.",
          "Obtain DCAA registration and the DCAA flight/mission NOC applicable to Dubai operations.",
          "Obtain the applicable GCAA operator and operational approvals through the current e-services route.",
          "Complete security clearance for camera or other capture equipment where required.",
          "Secure DFTC ground/aerial filming approval when the production falls within its permitting scope.",
          "Obtain the property owner's NOC and any building, community, venue or master-developer approval.",
          "Check controlled airspace, heliports, airports, temporary restrictions and sensitive locations for additional clearance.",
        ],
      },
      {
        id: "lead-time",
        title: "How much lead time should commercial drone filming allow?",
        answer:
          "Plan in weeks, not days. GCAA's public UAS page lists a three-week service target for an organisation's operator authorisation and 14 working days for operational permission, subject to requirements. DCAA may process aircraft registration quickly, but aircraft registration is not the mission NOC and does not collapse the other approval timelines.",
        paragraphs: [
          "If a shoot depends on a one-off sunrise, public event or talent travel, prepare a non-aerial shot plan in parallel. Weather, airspace or authority conditions can cancel a flight even when the rest of the production is ready.",
        ],
      },
      {
        id: "day-of-flight",
        title: "Phase 3: shoot-day go/no-go checklist",
        answer:
          "The pilot in command makes the final go/no-go decision. Client pressure, a permit deadline or sunk production cost never overrides the aircraft limits, weather, airspace, crowd safety or the approved mission conditions.",
        bullets: [
          "Carry the current DCAA/GCAA approvals, registration, pilot credentials, insurance and location NOC.",
          "Confirm the coordinates, altitude, operating window and captured activity match the approval.",
          "Recheck airspace status, weather, wind, visibility, satellites, compass environment and radio link.",
          "Inspect propellers, motors, batteries, firmware, payload mount, storage and return-to-home settings.",
          "Secure the take-off/landing area and brief spotters, crew, venue security and emergency contacts.",
          "Maintain the required visual line of sight and separation; never improvise over people, roads or restricted sites.",
          "Protect privacy and avoid government, military, security-sensitive or private areas outside the approved scope.",
          "Log the mission, incidents, battery use and captured media immediately after landing.",
        ],
      },
      {
        id: "client-handover",
        title: "What should the client receive before approving a drone supplier?",
        answer:
          "A responsible proposal separates aerial creative from regulatory readiness. Ask for the operator's legal entity, the named pilot, aircraft details, insurance evidence, approval responsibilities, lead time, weather cancellation terms and a ground-camera alternative.",
        table: {
          headers: ["Client question", "Good evidence", "Warning sign"],
          rows: [
            ["Who operates the drone?", "Named authorised entity and pilot", "A generic freelancer will be found later"],
            ["What approvals are included?", "Each authority and owner responsibility itemised", "'Permit included' with no issuing body"],
            ["What if approval or weather fails?", "Written reschedule and ground-shot fallback", "The client absorbs every cost regardless"],
            ["Where can it fly?", "Coordinates reviewed before quoting", "Promise made from a mood board only"],
            ["Who keeps the approvals?", "Producer and pilot carry copies on set", "No documents available at call time"],
          ],
        },
      },
    ],
    questions: [
      {
        question: "Can a tourist bring a drone and film a commercial in Dubai?",
        answer:
          "Do not plan a commercial Dubai shoot around a visitor simply carrying a drone. Commercial work requires the applicable operator, pilot, aircraft, mission and capture approvals. Use a properly authorised local operation and verify the current process before travel.",
      },
      {
        question: "Does a green-zone map mean commercial camera filming is automatically allowed?",
        answer:
          "No. A fly-zone indication does not replace commercial operator, mission, capture/security, property and filming approvals. GCAA specifically notes that operations involving capture devices require security clearance regardless of red or green zone.",
      },
      {
        question: "Can a ground filming permit authorise the drone flight?",
        answer:
          "No. DFTC can process aerial and ground filming together, but aviation authorities still authorise the aircraft operation. Keep the filming permission and flight authorisation in the same production file, but do not treat them as interchangeable.",
      },
      {
        question: "What happens if the approved drone location changes on the day?",
        answer:
          "Pause the flight. DCAA states that mission authorisation depends on the location, altitude, date and time. Moving the operation may invalidate the approval or introduce controlled airspace, heliport, privacy or owner restrictions.",
      },
    ],
    sources: [
      {
        label: "UAS Registration",
        publisher: "UAE General Civil Aviation Authority",
        url: "https://www.gcaa.gov.ae/en/uas-registration",
        note: "Professional operator authorisation, operational permission, capture-device security clearance and published service targets.",
      },
      {
        label: "Commercial Drone Registration in Dubai",
        publisher: "Dubai Civil Aviation Authority",
        url: "https://www.dcaa.gov.ae/services/aviation-safety-operations/drone-commercial-purpose",
        note: "Dubai aircraft registration service, required documents, current fees and delivery information.",
      },
      {
        label: "Dubai Civil Aviation Regulations for UAS Operations",
        publisher: "Dubai Civil Aviation Authority",
        url: "https://betawebapi.dcaa.gov.ae/Uploads/Dubai%20Civil%20Aviation%20Regulations%20for%20UAS%20Operations.pdf",
        note: "Operator categories, commercial filming requirements and mission authorisation conditions.",
      },
      {
        label: "DFTC Frequently Asked Questions",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/faq",
        note: "Aerial and ground filming applications through the film-permit workflow.",
      },
    ],
    related: [
      { label: "Dubai filming permit guide", href: "/guides/dubai-filming-permit", description: "Coordinate ground, location and aerial approvals." },
      { label: "Drone videography service", href: "/locations/dubai/drone-videography", description: "See Backyard's Dubai aerial-production service." },
      { label: "Production brief template", href: "/guides/video-production-brief-template", description: "Capture coordinates, dates, responsibilities and fallback plans." },
      { label: "Pre- and post-production", href: "/services/pre-post-production", description: "Plan logistics before crew and equipment are booked." },
    ],
  },
  {
    slug: "video-production-brief-template",
    eyebrow: "Free planning template",
    title: "Video Production Brief Template",
    shortTitle: "Production brief template",
    metaTitle: "Video Production Brief Template | Free Word File",
    metaDescription:
      "Download a practical video production brief template for UAE shoots, with objectives, audience, deliverables, approvals, usage rights, schedule and KPIs.",
    keywords: [
      "video production brief template",
      "creative brief template video",
      "corporate video brief template",
      "production brief Word template",
      "Dubai video production brief",
      "film production checklist template",
    ],
    summary:
      "A useful video production brief is a decision document, not a mood board. It tells the production team what business problem the video must solve, who must act after watching, where the assets will run, what must be delivered, who approves them, and how success will be measured. It also records practical constraints—locations, permits, languages, accessibility, usage rights, schedule and budget—before they become change orders.",
    scopeNote:
      "The downloadable Word file is deliberately vendor-neutral. Use it with Backyard Studio or any production supplier. Replace the prompts with confirmed information and mark unknowns openly rather than guessing.",
    readingTime: "8 minute read",
    download: {
      label: "Download the Word brief template",
      href: "/downloads/backyard-studio-video-production-brief-template.docx",
      detail: "Editable .docx · 10 planning sections · includes approval matrix, deliverables table and pre-shoot checklist",
    },
    sections: [
      {
        id: "one-page-core",
        title: "What belongs on the first page of a production brief?",
        answer:
          "The first page should let a producer explain the job in one minute: the business problem, target audience, desired viewer action, single most important message, core deliverables, deadline, working budget and final approver. Everything else supports those decisions.",
        bullets: [
          "Project name and version date",
          "Business problem or opportunity in one paragraph",
          "Primary audience and the behaviour or belief that must change",
          "Single call to action",
          "One-sentence message hierarchy",
          "Core deliverables and channels",
          "Launch date and immovable milestones",
          "Approved budget range and decision owner",
        ],
      },
      {
        id: "objective-audience",
        title: "Write an objective that can guide creative decisions",
        answer:
          "Replace 'make an engaging video' with an observable outcome. A stronger objective names the audience, desired action, channel and measurement window—for example: help UAE facilities managers request a site assessment from the landing page during the 60-day campaign.",
        paragraphs: [
          "Separate the business objective from the communication task. Revenue growth may be the business objective; helping a buyer understand a technical advantage may be the video's job. The production team can control clarity, proof, pacing and format. It cannot guarantee sales without the offer, distribution, landing page and sales follow-up working too.",
          "Choose one primary audience. Secondary viewers can be listed, but a film written equally for customers, investors, recruits and staff usually becomes vague for everyone.",
        ],
      },
      {
        id: "deliverables",
        title: "Specify deliverables by channel, not by one master video",
        answer:
          "List every required asset with duration, aspect ratio, language, captions, safe zones, file format and publishing channel. A 16:9 corporate film does not automatically become an effective 9:16 Reel by cropping it after approval.",
        table: {
          headers: ["Asset", "Example specification", "Decision to confirm"],
          rows: [
            ["Main film", "90 seconds, 16:9, 4K master", "Website, event screen or sales presentation"],
            ["Vertical cutdowns", "3 × 20 seconds, 9:16", "Hook, subtitles, safe zones and platform"],
            ["Square/social cut", "1 × 30 seconds, 1:1", "Paid or organic distribution"],
            ["Still frames", "10 graded selects", "Web, PR, thumbnail or campaign use"],
            ["Language versions", "English master plus Arabic subtitles", "Translation, voice-over and approval owner"],
            ["Accessibility", "Captions, transcript and audio clarity", "Burned-in versus selectable captions"],
          ],
        },
      },
      {
        id: "creative-guardrails",
        title: "Give references without asking for a copy",
        answer:
          "For each reference, explain the specific quality you want—the interview intimacy, product lighting, pace, sound design or transition logic. Also document what the brand must avoid. This turns taste into usable direction without copying another campaign.",
        bullets: [
          "Three adjectives the film should earn from viewers",
          "Proof points that must appear on screen",
          "Claims that require legal or compliance evidence",
          "Brand colours, fonts, logo rules and product naming",
          "Competitor conventions to avoid",
          "Music, humour, casting or visual treatments that are off-brand",
        ],
      },
      {
        id: "production-facts",
        title: "Record the facts that change the quote",
        answer:
          "Crew size and edit complexity are not the only cost drivers. Locations, access, permits, talent, languages, usage territory, archive requirements, review rounds and rush delivery can materially change the production plan. Put them in the brief before suppliers quote.",
        bullets: [
          "Confirmed and proposed locations, owner contacts and access windows",
          "On-camera contributors, casting, release forms and language needs",
          "Interview count, question owner and subject availability",
          "Travel, parking, loading, security, power, noise and working-hour restrictions",
          "Ground filming, drone, road, venue or specialist approvals",
          "Existing footage, logos, product files and music licences",
          "Final-deliverable rights, raw-footage access, territories and usage period",
          "Number of review rounds and one person authorised to consolidate feedback",
        ],
      },
      {
        id: "approval-measurement",
        title: "Close the brief with approvals and measurement",
        answer:
          "Name the decision-makers and the evidence required at each gate: concept, script, casting, rough cut, fine cut and final delivery. Then connect the video to a measurement plan that existed before launch.",
        paragraphs: [
          "For lead generation, that may mean a dedicated landing page, tagged campaign links, form-source capture and CRM campaign membership. For awareness, it may mean reach, qualified completion, brand lift or target-account engagement. For internal communications, it may mean completion, comprehension and follow-up action.",
          "A brief is approved only when the people who can change scope have signed off. 'The team likes it' is not an approval route.",
        ],
      },
      {
        id: "quality-check",
        title: "Run this 12-question brief quality check",
        answer:
          "If a supplier cannot answer these questions from the brief, the project is not ready to quote accurately. Unknown answers are acceptable; invisible assumptions are not.",
        bullets: [
          "What problem are we solving?",
          "Who is the one primary audience?",
          "What should that person do next?",
          "What proof makes the message believable?",
          "Where will every asset be published?",
          "Which formats, durations and languages are required?",
          "Who appears on camera and who secures consent?",
          "Which locations and approvals are involved?",
          "What usage rights and archive access are needed?",
          "What is fixed: budget, date, scope or quality?",
          "Who gives consolidated approval at each stage?",
          "Which metric will determine whether the video worked?",
        ],
      },
    ],
    questions: [
      {
        question: "How long should a video production brief be?",
        answer:
          "The decision summary should fit on one page. Supporting details—deliverables, locations, schedules, approvals and references—can take several more pages. Length is less important than whether the brief removes ambiguity before quoting and filming.",
      },
      {
        question: "Should the production company write the brief?",
        answer:
          "The client should own the business objective, audience, approvals and constraints. The production company can facilitate discovery, challenge assumptions and turn the approved inputs into a creative treatment and production plan.",
      },
      {
        question: "Do I need a finished script before asking for a quote?",
        answer:
          "Not always. A clear objective, audience, deliverable list, location plan, schedule and budget range can support an initial estimate. Script length, scenes, talent and specialist requirements must be known before the final production quote is locked.",
      },
      {
        question: "What is the difference between a brief and a treatment?",
        answer:
          "The brief defines the problem, audience, constraints and required outcome. The treatment is the creative response: story structure, visual approach, tone, references and production method. Approve the brief before comparing treatments.",
      },
    ],
    sources: [
      {
        label: "DFTC Frequently Asked Questions",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/faq",
        note: "Used for the permit and local-production planning prompts in the template.",
      },
      {
        label: "Applying for Script Approval",
        publisher: "Dubai Film and TV Commission",
        url: "https://www.filmdubai.gov.ae/s/site/how-to-film-in-dubai/applying-for-script-approval",
        note: "Used to distinguish script review from the wider production brief.",
      },
    ],
    related: [
      { label: "Corporate video ROI guide", href: "/guides/corporate-video-roi", description: "Choose KPIs and calculate the value the brief should target." },
      { label: "Dubai filming permit guide", href: "/guides/dubai-filming-permit", description: "Turn locations and activities into an approval plan." },
      { label: "Published production pricing", href: "/pricing", description: "Match the brief to Backyard's published starting packages." },
      { label: "Start a project", href: "/contact", description: "Send the completed brief for a scoped production quote." },
    ],
  },
  {
    slug: "corporate-video-roi",
    eyebrow: "Measurement guide and calculator",
    title: "Corporate Video ROI Guide",
    shortTitle: "Corporate video ROI",
    metaTitle: "Corporate Video ROI Guide & Calculator",
    metaDescription:
      "Calculate corporate video ROI, set measurable objectives and build a UAE campaign measurement plan across awareness, leads, sales and recruitment.",
    keywords: [
      "corporate video ROI",
      "video marketing ROI calculator",
      "measure corporate video performance",
      "video production return on investment",
      "corporate video KPIs",
      "Dubai corporate video cost ROI",
    ],
    summary:
      "Corporate video ROI is the financial return attributable to a video programme after production, distribution and operating costs. Use ROI = (incremental gross profit − total video cost) ÷ total video cost. The difficult part is not the equation; it is defining an incremental outcome, assigning a credible value, and tracking the viewer from exposure to CRM or transaction without giving the video credit for demand it did not create.",
    scopeNote:
      "The calculator produces planning estimates, not guaranteed results. Use contribution margin or gross profit rather than revenue when possible, document attribution assumptions, and compare actual performance with a pre-campaign baseline or control.",
    readingTime: "11 minute read",
    tool: "roi-calculator",
    sections: [
      {
        id: "roi-formula",
        title: "How do you calculate corporate video ROI?",
        answer:
          "Add production and distribution cost, estimate the incremental gross profit created by the programme, subtract total cost, then divide by total cost. If a AED 40,000 video programme produces AED 60,000 in incremental gross profit, ROI is (60,000 − 40,000) ÷ 40,000 = 50%. Do not use total pipeline value as realised return.",
        table: {
          headers: ["Metric", "Formula", "Use"],
          rows: [
            ["Total video cost", "Production + media + landing page + tracking + internal time", "True investment base"],
            ["Expected customers", "Incremental qualified leads × lead-to-customer rate", "Planning conversion outcome"],
            ["Incremental gross profit", "Expected customers × gross profit per customer", "Value created after direct delivery cost"],
            ["ROI", "(Incremental gross profit − total cost) ÷ total cost", "Return relative to investment"],
            ["Break-even customers", "Total cost ÷ gross profit per customer", "Minimum customers required"],
          ],
        },
      },
      {
        id: "objective-metrics",
        title: "Match metrics to the video's actual job",
        answer:
          "A corporate film cannot be judged fairly by one universal metric. Select a primary business outcome before production, then use diagnostic video metrics to explain performance rather than replacing the business result.",
        table: {
          headers: ["Video job", "Primary outcome", "Useful diagnostic metrics"],
          rows: [
            ["Brand awareness", "Incremental awareness, recall or qualified reach", "View rate, completion, frequency, brand-lift result"],
            ["Demand generation", "Qualified leads and pipeline created", "Landing-page visits, form completion, cost per qualified lead"],
            ["Sales enablement", "Influenced opportunity progression", "Target-account engagement, sales usage, stage movement, win-rate comparison"],
            ["Product education", "Activation or reduced support friction", "Feature-page action, tutorial completion, support deflection"],
            ["Recruitment", "Qualified applicants or improved acceptance", "Careers-page action, completed applications, source quality"],
            ["Internal communication", "Comprehension and required action", "Completion, knowledge check, policy/process completion"],
          ],
        },
      },
      {
        id: "measurement-plan",
        title: "Build the measurement plan before the script",
        answer:
          "The production brief should name the conversion event, value, tracking owner, attribution window and source of truth. If tracking is added after launch, the most important baseline and source data may already be lost.",
        bullets: [
          "Create a dedicated landing page or clearly tagged destination for the campaign.",
          "Use consistent UTM parameters by channel, campaign, creative and placement.",
          "Mark the meaningful form, call, booking or transaction as the conversion—not a page view.",
          "Pass campaign/source fields into the CRM and preserve first-touch plus latest-touch values.",
          "Assign a defensible gross-profit or expected-value figure to each qualified outcome.",
          "Agree the measurement window before launch and keep it long enough for the sales cycle.",
          "Compare performance by creative version, audience and placement; do not blend every cut into one total.",
          "Where volume allows, use a holdout, geography test or lift study to estimate incrementality.",
        ],
      },
      {
        id: "attribution",
        title: "Avoid giving the video credit for every conversion",
        answer:
          "Attribution distributes credit across touchpoints; incrementality asks what would not have happened without the campaign. Google Analytics offers data-driven and last-click attribution views, while Google Ads lift methods compare exposed and control groups. Neither removes the need for business judgement and clean CRM data.",
        paragraphs: [
          "For a long B2B cycle, record video engagement as one influence alongside search, events, sales outreach and referrals. Report sourced pipeline separately from influenced pipeline. A buyer who watches a film after already requesting a proposal is not a video-sourced lead.",
          "For small campaigns without enough volume for an experiment, use a documented estimate range. Show conservative, expected and upside cases instead of presenting one precise forecast as fact.",
        ],
      },
      {
        id: "asset-economics",
        title: "Measure a video system, not only the hero film",
        answer:
          "A production can create a master film, vertical cutdowns, testimonials, stills, event loops, sales clips and recruitment edits from the same shoot. Allocate cost across the assets actually used, then measure each channel. Reuse can improve economics, but only if those versions were planned, published and tracked.",
        bullets: [
          "Count final approved assets, not every export file.",
          "Track where and how long each asset remains in active use.",
          "Include paid distribution and localisation in total cost.",
          "Record sales-team and event usage that analytics cannot observe automatically.",
          "Review creative fatigue and replace weak openings without reshooting the entire film.",
          "Archive project files and rights documentation so valuable footage can be reused legally.",
        ],
      },
      {
        id: "reporting",
        title: "What should the monthly ROI report show?",
        answer:
          "Use one page: investment, distribution, qualified reach, conversion outcomes, attributed and incremental value, assumptions, and the next decision. Separate facts from estimates and show comparison periods.",
        bullets: [
          "Spend to date: production, media, landing page, tools and internal cost",
          "Audience delivered: relevant reach and frequency by channel",
          "Creative quality: hook, completion, click and conversion rates by asset",
          "Business results: qualified leads, opportunities, customers or approved internal actions",
          "Value: gross profit or expected pipeline value with the chosen attribution model",
          "Confidence: known tracking gaps, delayed conversions and sample-size limits",
          "Decision: scale, revise, redistribute, pause or produce the next asset",
        ],
      },
    ],
    questions: [
      {
        question: "What is a good ROI for a corporate video?",
        answer:
          "There is no universal benchmark because margins, sales cycles, distribution spend and objectives differ. Set the threshold against your company's required return and alternative uses of the budget. A lead-generation film and an internal safety film should not share the same ROI target.",
      },
      {
        question: "Should corporate video ROI use revenue or profit?",
        answer:
          "Use incremental gross profit or contribution margin when data is available. Revenue can overstate value because it ignores the direct cost of fulfilling the sale. If only revenue is available, label the calculation as ROAS or revenue return rather than profit ROI.",
      },
      {
        question: "How do we measure brand video when there is no direct sale?",
        answer:
          "Set an awareness or consideration outcome, use qualified reach and completion as diagnostics, and measure lift with an exposed-versus-control study when scale allows. Do not convert views into invented revenue. Report brand impact and financial outcomes separately.",
      },
      {
        question: "Can one video be measured across website, LinkedIn, YouTube and events?",
        answer:
          "Yes, but use channel-specific tracking and keep offline usage visible. Tag web destinations, preserve platform metrics, record event screenings and sales usage, and reconcile qualified outcomes in the CRM. Avoid adding platform view counts together when their view definitions differ.",
      },
    ],
    sources: [
      {
        label: "Return on investment (ROI)",
        publisher: "Google Ads Help",
        url: "https://support.google.com/google-ads/answer/14090/return-on-investment-roi?hl=en-uk",
        note: "ROI definition, formula and conversion-tracking requirement.",
      },
      {
        label: "Get started with attribution",
        publisher: "Google Analytics Help",
        url: "https://support.google.com/analytics/answer/10596866",
        note: "Current attribution models and how credit is assigned across touchpoints.",
      },
      {
        label: "Track Video Performance and Prove ROI",
        publisher: "LinkedIn Marketing Solutions",
        url: "https://business.linkedin.com/advertise/video-microsite/measure",
        note: "Four-phase measurement framework and full-funnel video metrics for B2B campaigns.",
      },
      {
        label: "Understand Conversion Lift Measurement",
        publisher: "Google Ads Help",
        url: "https://support.google.com/google-ads/answer/14102450?hl=en",
        note: "Incremental conversion value and incremental ROAS definitions.",
      },
    ],
    related: [
      { label: "Production brief template", href: "/guides/video-production-brief-template", description: "Put the objective, conversion and measurement owner into the brief." },
      { label: "UAE production cost report", href: "/uae-video-production-cost-report-2026", description: "Build the investment side of the ROI model from published cost bands." },
      { label: "Corporate film production", href: "/services/corporate-films", description: "Explore Backyard's corporate film service." },
      { label: "Corporate production portfolio", href: "/production-portfolio/corporate-events", description: "Review published corporate and event work before scoping." },
    ],
  },
];

export function getResourceGuide(slug: string): ResourceGuide | undefined {
  return RESOURCE_GUIDES.find((guide) => guide.slug === slug);
}

export type PortfolioCollection = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  summary: string;
  projectIds: number[];
  serviceLinks: ResourceLink[];
  planningTitle: string;
  planningIntro: string;
  planningPoints: string[];
  deliverables: string[];
  honestNote: string;
};

export const PORTFOLIO_COLLECTIONS: PortfolioCollection[] = [
  {
    slug: "corporate-events",
    title: "Corporate & Events Production Portfolio",
    shortTitle: "Corporate & events",
    metaTitle: "Corporate Video Portfolio Dubai | Events & Brands",
    metaDescription:
      "View Backyard Studio's published corporate and event video portfolio, then plan interviews, live moments, cutdowns, delivery and ROI for a UAE production.",
    keywords: ["corporate video portfolio Dubai", "event videography portfolio UAE", "company film examples Dubai", "corporate event video production"],
    eyebrow: "Published work · Corporate and events",
    summary:
      "This collection brings together Backyard Studio's published corporate and event projects: conference coverage, awards, product launches and culture-led team films. It shows the range between documentary event coverage and planned brand storytelling without claiming performance results that the public portfolio cannot verify.",
    projectIds: [1, 2, 3, 4, 5, 6],
    serviceLinks: [
      { label: "Corporate films", href: "/services/corporate-films", description: "Company profiles, brand documentaries and culture films." },
      { label: "Event videography", href: "/services/event-videography", description: "Multi-camera event capture and highlight delivery." },
      { label: "Corporate industry services", href: "/industries/corporate", description: "Production planning for UAE corporate teams." },
    ],
    planningTitle: "What a corporate or event portfolio should prove",
    planningIntro:
      "A reel proves visual taste; a useful portfolio should also show whether a team can hold continuity across speeches, reactions, interviews, venue details and branded moments. Review complete examples in the format closest to your job.",
    planningPoints: [
      "Interview lighting and sound remain consistent across different rooms.",
      "Brand, sponsor and stage details are readable without overwhelming the human story.",
      "The crew captures unscripted reactions without obstructing guests or operations.",
      "The edit can produce a main film plus fast social cutdowns from the same coverage plan.",
      "Delivery timing matches the useful life of the event or announcement.",
    ],
    deliverables: ["Company profile or culture film", "Conference or gala highlight", "Speaker and testimonial edits", "Vertical social cutdowns", "Event photography selects", "Interview transcripts and captions"],
    honestNote:
      "Project descriptions identify the type of production and published client label. They do not state revenue, reach or conversion results unless Backyard has a documented, client-approved measurement source.",
  },
  {
    slug: "fashion-beauty",
    title: "Fashion & Beauty Production Portfolio",
    shortTitle: "Fashion & beauty",
    metaTitle: "Fashion & Beauty Portfolio Dubai | Photo and Film",
    metaDescription:
      "Explore Backyard Studio's published Dubai fashion, beauty and creative portfolio, with campaign planning notes for lighting, talent, formats and usage rights.",
    keywords: ["fashion production portfolio Dubai", "beauty photography portfolio UAE", "Dubai fashion film examples", "creative studio portfolio Dubai"],
    eyebrow: "Published work · Fashion and beauty",
    summary:
      "This collection uses Backyard Studio's published creative work to show controlled studio lighting, colour, styling and short-form movement. The projects cover fashion, beauty, artist and lifestyle treatments while keeping client and result claims limited to what is already public.",
    projectIds: [7, 8, 9, 10, 11, 12],
    serviceLinks: [
      { label: "Fashion shoots", href: "/services/fashion-shoots", description: "Editorial, lookbook and campaign production." },
      { label: "Reels production", href: "/services/reels-production", description: "Vertical edits planned for short-form platforms." },
      { label: "Fashion industry services", href: "/industries/fashion", description: "Sector-specific production planning in Dubai." },
    ],
    planningTitle: "What to check in a fashion or beauty portfolio",
    planningIntro:
      "Creative similarity is not enough. Check whether the team can reproduce skin tone, product colour, fabric texture and movement across the actual formats your campaign needs.",
    planningPoints: [
      "Lighting supports the product and skin rather than only the set design.",
      "Colour grading stays consistent across stills, hero film and vertical cutdowns.",
      "Hair, makeup, wardrobe and art direction have clear approval checkpoints.",
      "Framing anticipates crops for 16:9, 4:5, 1:1 and 9:16 deliverables.",
      "Talent, music, location and asset usage rights match the campaign territory and duration.",
    ],
    deliverables: ["Campaign hero film", "Editorial photography", "Lookbook or catalogue selects", "Beauty macro details", "Vertical Reels and TikTok cuts", "Retouched key visuals"],
    honestNote:
      "These pages display published visual examples and production descriptions. They do not imply endorsement by unnamed brands or promise a campaign outcome based on aesthetics alone.",
  },
  {
    slug: "product-ecommerce",
    title: "Product & E-Commerce Production Portfolio",
    shortTitle: "Product & e-commerce",
    metaTitle: "Product Photography Portfolio Dubai | E-Commerce Film",
    metaDescription:
      "See Backyard Studio's published product and e-commerce portfolio for fragrance, skincare and lifestyle campaigns, with practical asset and channel planning.",
    keywords: ["product photography portfolio Dubai", "ecommerce video portfolio UAE", "fragrance campaign photography Dubai", "product film production UAE"],
    eyebrow: "Published work · Product and e-commerce",
    summary:
      "This collection focuses on Backyard Studio's published fragrance, skincare and lifestyle product work. It demonstrates macro detail, controlled reflections, art direction and channel-ready framing without inventing sales results or retailer listings.",
    projectIds: [13, 14, 15],
    serviceLinks: [
      { label: "Product shoots", href: "/services/product-shoots", description: "Photography and film for commerce and campaigns." },
      { label: "E-commerce industry services", href: "/industries/ecommerce-retail", description: "Marketplace, catalogue and social-commerce production." },
      { label: "Social media content", href: "/services/social-media-content", description: "Build recurring assets around each product shoot." },
    ],
    planningTitle: "What product work should prove before you book",
    planningIntro:
      "Product content must be attractive and accurate. Review how the portfolio handles packaging colour, reflective surfaces, texture, readable labels and repeated angles across a product family.",
    planningPoints: [
      "Lighting preserves material texture and manages glass, chrome or glossy packaging.",
      "Colour workflow is designed around the product reference, not only a dramatic grade.",
      "Shot lists distinguish mandatory catalogue views from optional campaign frames.",
      "The capture plan supports retailer, website, paid social and organic dimensions.",
      "Retouching scope and final background requirements are agreed per SKU.",
    ],
    deliverables: ["E-commerce catalogue stills", "Campaign key visuals", "Macro and texture details", "Product demonstration clips", "Vertical social cutdowns", "Web hero loops and thumbnails"],
    honestNote:
      "The collection is intentionally limited to published product examples. A quote should be based on SKU count, surfaces, angles, styling, talent and required retouching—not a generic per-image promise.",
  },
  {
    slug: "weddings-celebrations",
    title: "Weddings & Celebrations Production Portfolio",
    shortTitle: "Weddings & celebrations",
    metaTitle: "Wedding Film Portfolio Dubai & UAE | Celebrations",
    metaDescription:
      "View Backyard Studio's published Dubai and UAE wedding film portfolio, with planning guidance for ceremony coverage, portraits, sound, privacy and delivery.",
    keywords: ["wedding film portfolio Dubai", "wedding videography examples UAE", "Dubai wedding photography portfolio", "cinematic wedding films UAE"],
    eyebrow: "Published work · Weddings and celebrations",
    summary:
      "This collection groups Backyard Studio's published wedding and couple projects across Dubai, Abu Dhabi and Sharjah. It shows ceremony coverage, portrait direction and location-led storytelling while respecting that private-client work should not be turned into unapproved marketing claims.",
    projectIds: [16, 17, 18, 19, 20],
    serviceLinks: [
      { label: "Wedding videography", href: "/services/wedding-videography", description: "Cinematic coverage and highlight films." },
      { label: "Wedding photography", href: "/services/wedding-photography", description: "Full-day photography across the UAE." },
      { label: "Wedding packages", href: "/wedding-packages", description: "Compare published coverage and starting prices." },
    ],
    planningTitle: "What to look for in a wedding portfolio",
    planningIntro:
      "Choose examples that resemble your schedule, light, venue and cultural requirements. A sunset couple film does not by itself prove a team can cover a multi-event wedding, speeches and low-light dancing.",
    planningPoints: [
      "Ceremony audio and speeches are captured independently of the camera microphone.",
      "The team can work discreetly around guests, prayer, private areas and venue rules.",
      "Portrait direction feels natural for the couple rather than copied across every wedding.",
      "Coverage plans name simultaneous moments that require a second camera or photographer.",
      "Privacy, family approvals and publication permissions are agreed before any portfolio use.",
    ],
    deliverables: ["Wedding highlight film", "Full ceremony or speeches edit", "Photography gallery", "Vertical teaser", "Same-day or next-day selects where scoped", "Private delivery and archive options"],
    honestNote:
      "Private clients are described generically. Publication in this collection is not permission to infer names, venue endorsements or private details beyond the visible project record.",
  },
];

export function getPortfolioCollection(slug: string): PortfolioCollection | undefined {
  return PORTFOLIO_COLLECTIONS.find((collection) => collection.slug === slug);
}
