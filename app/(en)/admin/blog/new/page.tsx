"use client";
import { useState, useRef } from "react";

const INPUT: React.CSSProperties = {
  width: "100%", boxSizing: "border-box", padding: "10px 14px",
  background: "#1a1a1a", border: "1px solid #333", borderRadius: 4,
  color: "#f0f0f0", fontSize: 14, outline: "none", fontFamily: "inherit",
};
const LABEL: React.CSSProperties = {
  display: "block", fontSize: 11, color: "#888", marginBottom: 6,
  textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700,
};
const counterColor = (len: number, max: number) =>
  len > max ? "#e55" : len >= max * 0.85 ? "#e8c547" : "#666";

type FAQ = { question: string; answer: string };

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function textToHtml(raw: string): string {
  const lines = raw.split(/\n/);
  let html = "";
  let buffer: string[] = [];
  const flush = () => {
    if (buffer.length) { html += `<p>${buffer.join(" ").trim()}</p>`; buffer = []; }
  };
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) { flush(); html += `<h2>${trimmed.slice(3)}</h2>`; }
    else if (trimmed === "") { flush(); }
    else { buffer.push(trimmed); }
  }
  flush();
  return html;
}

// Parse a Markdown file -- supports YAML frontmatter OR no-frontmatter format.
// Extracts FAQs from ### Q + paragraph pairs inside FAQ section.
// Strips schema blocks and publishing checklists from the body.
function parseMdFile(text: string): {
  title: string; metaTitle: string; metaDesc: string; keywords: string;
  category: string; author: string; readTime: string; image: string;
  excerpt: string; body: string; faqs: FAQ[];
} {
  const defaults = {
    title: "", metaTitle: "", metaDesc: "", keywords: "",
    category: "Photography", author: "Backyard Studio Team",
    readTime: "6 min read", image: "/images/creative/creative-04.webp",
    excerpt: "", body: "", faqs: [] as FAQ[],
  };

  const meta: Record<string, string> = {};
  let bodyText = "";

  // Path A: YAML frontmatter
  const fmMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (fmMatch) {
    const fmRaw = fmMatch[1];
    bodyText = fmMatch[2].trim();
    for (const line of fmRaw.split(/\r?\n/)) {
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim().replace(/^["\']|["\']$/g, "");
      meta[key] = val;
    }
  } else {
    // Path B: No frontmatter -- extract from H1 and bottom meta section
    bodyText = text.trim();
    const h1 = bodyText.match(/^#\s+(.+)$/m);
    if (h1) meta.title = h1[1].trim();
    const mt = bodyText.match(/\*\*Meta Title[^:*]*:\*\*\s*(.+)/i);
    if (mt) meta.metaTitle = mt[1].trim();
    const md2 = bodyText.match(/\*\*Meta Description[^:*]*:\*\*\s*(.+)/i);
    if (md2) meta.metaDescription = md2[1].trim();
  }

  // FAQ extraction: ### Q\nA pattern inside a FAQ section
  const faqs: FAQ[] = [];
  const faqSecMatch = bodyText.match(/##\s*(?:FAQ|Frequently Asked Questions)[^\n]*\n([\s\S]*?)(?=\n---|\n##\s[^#]|$)/i);
  if (faqSecMatch) {
    const faqContent = faqSecMatch[1];
    const faqRe = /###\s+(.+?)\r?\n([\s\S]*?)(?=###\s|$)/g;
    let m: RegExpExecArray | null;
    while ((m = faqRe.exec(faqContent)) !== null) {
      const question = m[1].trim();
      const answer = m[2].trim().replace(/\r?\n+/g, " ");
      if (question && answer) faqs.push({ question, answer });
    }
  }

  // Strip non-content sections from body
  const cleanBody = bodyText
    .replace(/\n##\s*SCHEMA MARKUP[\s\S]*$/i, "")
    .replace(/\n###?\s*(?:Title\s*\/|Meta)\s*Options[\s\S]*$/i, "")
    .replace(/\n###?\s*Publishing Checklist[\s\S]*$/i, "")
    .replace(/\n---\n---\n[\s\S]*$/g, "")
    .trim();

  return {
    title: meta.title || defaults.title,
    metaTitle: meta.metaTitle || meta["meta-title"] || defaults.metaTitle,
    metaDesc: meta.metaDescription || meta.metaDesc || meta["meta-description"] || defaults.metaDesc,
    keywords: meta.keywords || defaults.keywords,
    category: meta.category || defaults.category,
    author: meta.author || defaults.author,
    readTime: meta.readTime || meta["read-time"] || defaults.readTime,
    image: meta.image || defaults.image,
    excerpt: meta.excerpt || defaults.excerpt,
    body: cleanBody,
    faqs,
  };
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) onLogin(); else setErr("Invalid password.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a" }}>
      <div style={{ width: 380, background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, padding: 40 }}>
        <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", margin: "0 0 8px" }}>BACKYARD STUDIO</p>
        <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 700, margin: "0 0 24px" }}>Blog Admin</h1>
        <form onSubmit={submit}>
          <label style={LABEL}>Password</label>
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required
            style={{ ...INPUT, marginBottom: 12 }} placeholder="Enter admin password" />
          {err && <p style={{ color: "#e55", fontSize: 12, margin: "0 0 12px" }}>{err}</p>}
          <button type="submit" disabled={loading}
            style={{ width: "100%", padding: "12px", background: "#e8c547", color: "#0a0a0a", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 13, cursor: "pointer", opacity: loading ? 0.7 : 1 }}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function BlogNewPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("Photography");
  const [author, setAuthor] = useState("Backyard Studio Team");
  const [readTime, setReadTime] = useState("6 min read");
  const [image, setImage] = useState("/images/creative/creative-04.webp");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }]);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  const [uploading, setUploading] = useState(false);
  const [mdLoaded, setMdLoaded] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mdInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Check auth on mount
  useState(() => {
    fetch("/api/admin/leads?status=new").then((r) => setAuthed(r.ok || r.status !== 401));
  });

  const slug = slugify(title) + (title.toLowerCase().endsWith("-2026") ? "" : "-2026");

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", val: string) => {
    const updated = [...faqs];
    updated[i] = { ...updated[i], [field]: val };
    setFaqs(updated);
  };

  function handleMdUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const parsed = parseMdFile(text);
      setTitle(parsed.title);
      setMetaTitle(parsed.metaTitle);
      setMetaDesc(parsed.metaDesc);
      setKeywords(parsed.keywords);
      setCategory(parsed.category || "Photography");
      setAuthor(parsed.author || "Backyard Studio Team");
      setReadTime(parsed.readTime || "6 min read");
      if (parsed.image) setImage(parsed.image);
      setExcerpt(parsed.excerpt);
      setContent(parsed.body);
      if (parsed.faqs.length > 0) setFaqs(parsed.faqs);
      setMdLoaded(true);
      setStatus("idle");
      setMsg(`Loaded: "${file.name}" -- review fields below then click Publish.`);
    };
    reader.readAsText(file);
    if (mdInputRef.current) mdInputRef.current.value = "";
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setMsg("");

    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    });

    const res = await fetch("/api/admin/upload-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, content: base64 }),
    });

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (imageInputRef.current) imageInputRef.current.value = "";

    if (res.ok) {
      const { path } = await res.json();
      setImage(path);
      setStatus("ok");
      setMsg("Image uploaded to " + path + " (live after Vercel rebuilds ~60s)");
    } else {
      const body = await res.json().catch(() => ({}));
      setStatus("err");
      setMsg(body.error || "Image upload failed.");
    }
  }

  async function handlePublish() {
    if (!title || !metaTitle || !metaDesc || !content) {
      setMsg("Fill in title, meta title, meta description, and content."); return;
    }
    if (metaTitle.length > 55) { setMsg("Meta title must be 55 characters or fewer."); return; }
    if (metaDesc.length > 155) { setMsg("Meta description must be 155 characters or fewer."); return; }
    setStatus("loading"); setMsg("");

    const today = new Date();
    const post = {
      slug,
      title,
      metaTitle,
      metaDescription: metaDesc,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      category,
      date: today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      dateISO: today.toISOString().split("T")[0],
      readTime,
      image,
      excerpt: excerpt || metaDesc.substring(0, 120),
      author,
      content: textToHtml(content),
      faqs: faqs.filter((f) => f.question && f.answer),
      relatedSlugs: [],
    };

    const res = await fetch("/api/admin/publish", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(post),
    });
    if (res.ok) {
      setStatus("ok");
      setMsg("Published! Live at /blog/" + slug + " after Vercel deploys (~60 seconds).");
    } else {
      const body = await res.json().catch(() => ({}));
      setStatus("err");
      setMsg(body.error || "Publish failed. Check your GITHUB_TOKEN in Vercel env vars.");
    }
  }

  if (authed === false) return <LoginScreen onLogin={() => setAuthed(true)} />;
  if (authed === null) return <div style={{ minHeight: "100vh", background: "#0a0a0a" }} />;

  const F: React.CSSProperties = { marginBottom: 24 };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 80px", background: "#0a0a0a", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", margin: "0 0 4px" }}>BLOG ADMIN</p>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#fff" }}>New Blog Post</h1>
        </div>
        <a href="/admin" style={{ color: "#888", fontSize: 13, textDecoration: "none" }}>Back to CRM</a>
      </div>

      {/* QUICK UPLOAD SECTION */}
      <div style={{
        background: "#111", border: "1px solid #2a2a2a", borderRadius: 6,
        padding: 24, marginBottom: 36,
      }}>
        <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", margin: "0 0 4px" }}>QUICK UPLOAD</p>
        <p style={{ color: "#aaa", fontSize: 13, margin: "0 0 20px" }}>
          Upload a <code style={{ color: "#e8c547" }}>.md</code> file + hero image to auto-fill the form, then click Publish.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* MD Upload */}
          <div style={{ background: "#0a0a0a", border: "1px solid #333", borderRadius: 4, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>MD</div>
            <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>Upload .md File</p>
            <p style={{ color: "#555", fontSize: 11, margin: "0 0 14px" }}>Auto-fills all text fields</p>
            <button
              type="button"
              onClick={() => mdInputRef.current?.click()}
              style={{
                padding: "8px 20px", background: mdLoaded ? "#1a3a1a" : "#e8c547",
                border: mdLoaded ? "1px solid #2a5a2a" : "none",
                borderRadius: 4, color: mdLoaded ? "#4caf50" : "#0a0a0a",
                cursor: "pointer", fontSize: 13, fontWeight: 700,
              }}
            >
              {mdLoaded ? "MD Loaded" : "Choose .md File"}
            </button>
            <input ref={mdInputRef} type="file" accept=".md,.markdown" style={{ display: "none" }} onChange={handleMdUpload} />
          </div>

          {/* Image Upload */}
          <div style={{ background: "#0a0a0a", border: "1px solid #333", borderRadius: 4, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>IMG</div>
            <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>Upload Hero Image</p>
            <p style={{ color: "#555", fontSize: 11, margin: "0 0 14px" }}>WebP/JPEG, 1200x630px, under 300KB</p>
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              disabled={uploading}
              style={{
                padding: "8px 20px",
                background: uploading ? "#1a1a1a" : "#333",
                border: "1px solid #444",
                borderRadius: 4, color: uploading ? "#555" : "#fff",
                cursor: uploading ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 700,
              }}
            >
              {uploading ? "Uploading..." : "Choose Image"}
            </button>
            <input ref={imageInputRef} type="file" accept="image/webp,image/jpeg,image/jpg,image/png" style={{ display: "none" }} onChange={handleImageUpload} />
          </div>
        </div>

        {/* MD format hint */}
        <details style={{ marginTop: 16 }}>
          <summary style={{ color: "#555", fontSize: 11, cursor: "pointer" }}>What should my .md file look like?</summary>
          <pre style={{
            marginTop: 10, padding: 14, background: "#0a0a0a", borderRadius: 4,
            color: "#888", fontSize: 11, lineHeight: 1.7, overflowX: "auto",
            border: "1px solid #222",
          }}>{"---\ntitle: Event Videography UAE -- Pricing 2026\nmetaTitle: Event Videography UAE | Pricing 2026\nmetaDescription: Event videography in UAE costs AED 6,000-20,000.\nkeywords: event videography uae, event videography dubai\ncategory: Videography\nauthor: Backyard Studio Team\nreadTime: 8 min read\nexcerpt: Short preview for the blog listing page.\n---\n\n# Title Here\n\n## Quick Answer\n\nDirect answer paragraph here.\n\n## Section\n\nContent here.\n\n## Frequently Asked Questions\n\n### Question here?\n\nFull paragraph answer here.\n\n## Book Now\n\nCall +971 58 588 2685"}</pre>
        </details>
      </div>

      {/* FORM FIELDS */}
      <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 32 }}>
        <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", marginBottom: 24 }}>OR FILL MANUALLY</p>

        {/* Title */}
        <div style={F}>
          <label style={LABEL}>Post Title</label>
          <input style={INPUT} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Best Production Companies in Dubai 2026" />
          {title && <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>Slug: <code style={{ color: "#e8c547" }}>/blog/{slug}</code></p>}
        </div>

        {/* Meta Title */}
        <div style={F}>
          <label style={LABEL}>Meta Title (55 chars max)</label>
          <input
            style={{ ...INPUT, borderColor: metaTitle.length > 55 ? "#e55" : "#333" }}
            value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)}
            placeholder="Production Companies Dubai 2026 | Backyard" maxLength={60}
          />
          <p style={{ fontSize: 11, color: counterColor(metaTitle.length, 55), textAlign: "right", marginTop: 4 }}>{metaTitle.length} / 55</p>
        </div>

        {/* Meta Description */}
        <div style={F}>
          <label style={LABEL}>Meta Description (155 chars max)</label>
          <textarea
            style={{ ...INPUT, resize: "vertical", minHeight: 72 }}
            value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)}
            placeholder="Discover the top video production companies in Dubai for 2026..." maxLength={160}
          />
          <p style={{ fontSize: 11, color: counterColor(metaDesc.length, 155), textAlign: "right", marginTop: 4 }}>{metaDesc.length} / 155</p>
        </div>

        {/* Keywords */}
        <div style={F}>
          <label style={LABEL}>Keywords (comma-separated)</label>
          <input style={INPUT} value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="production company dubai, video production uae" />
        </div>

        {/* Category / Author / Read Time */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Category", val: category, set: setCategory, ph: "Photography" },
            { label: "Author", val: author, set: setAuthor, ph: "Backyard Studio Team" },
            { label: "Read Time", val: readTime, set: setReadTime, ph: "6 min read" },
          ].map(({ label, val, set, ph }) => (
            <div key={label}>
              <label style={LABEL}>{label}</label>
              <input style={INPUT} value={val} onChange={(e) => set(e.target.value)} placeholder={ph} />
            </div>
          ))}
        </div>

        {/* Hero Image path */}
        <div style={F}>
          <label style={LABEL}>Hero Image Path</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input style={{ ...INPUT, flex: 1 }} value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/blog/my-photo.webp" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={{
                padding: "10px 14px", background: uploading ? "#1a1a1a" : "#222",
                border: "1px solid #444", borderRadius: 4,
                color: uploading ? "#555" : "#e8c547",
                cursor: uploading ? "not-allowed" : "pointer", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
              }}
            >
              {uploading ? "..." : "Upload"}
            </button>
          </div>
          <input ref={fileInputRef} type="file" accept="image/webp,image/jpeg,image/jpg,image/png" style={{ display: "none" }} onChange={handleImageUpload} />
          <p style={{ fontSize: 11, color: "#555", marginTop: 4 }}>Path auto-fills when you use Quick Upload above.</p>
        </div>

        {/* Excerpt */}
        <div style={F}>
          <label style={LABEL}>Excerpt (blog listing preview)</label>
          <textarea style={{ ...INPUT, resize: "vertical", minHeight: 56 }} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        </div>

        {/* Content */}
        <div style={F}>
          <label style={LABEL}>Content</label>
          <p style={{ fontSize: 11, color: "#555", margin: "0 0 6px" }}>
            Plain text. <code style={{ color: "#e8c547" }}>## Heading</code> for H2. Blank line = new paragraph.
          </p>
          <textarea
            style={{ ...INPUT, resize: "vertical", minHeight: 340, lineHeight: 1.8, fontSize: 13 }}
            value={content} onChange={(e) => setContent(e.target.value)}
            placeholder={"## Introduction\n\nWrite your intro paragraph here.\n\n## Section 2\n\nNext section."}
          />
          <p style={{ fontSize: 11, color: "#555", marginTop: 4 }}>{content.split(/\s+/).filter(Boolean).length} words</p>
        </div>

        {/* FAQs */}
        <div style={F}>
          <label style={{ ...LABEL, marginBottom: 12 }}>FAQs</label>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, padding: 16, marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: "#555", fontWeight: 700 }}>FAQ {i + 1}</span>
                {faqs.length > 1 && <button onClick={() => removeFaq(i)} style={{ background: "none", border: "none", color: "#e55", cursor: "pointer", fontSize: 12 }}>Remove</button>}
              </div>
              <input style={{ ...INPUT, marginBottom: 8 }} value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} placeholder="Question" />
              <textarea style={{ ...INPUT, resize: "vertical", minHeight: 60 }} value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} placeholder="Answer" />
            </div>
          ))}
          <button onClick={addFaq}
            style={{ background: "none", border: "1px solid #333", color: "#888", padding: "8px 16px", borderRadius: 4, cursor: "pointer", fontSize: 13 }}>
            + Add FAQ
          </button>
        </div>
      </div>

      {/* Status message */}
      {msg && (
        <div style={{
          padding: "12px 16px", borderRadius: 4, marginBottom: 20,
          background: status === "ok" ? "#0a2a0a" : status === "err" ? "#2a0a0a" : "#1a1a0a",
          border: `1px solid ${status === "ok" ? "#1a5a1a" : status === "err" ? "#5a1a1a" : "#3a3a0a"}`,
          color: status === "ok" ? "#4caf50" : status === "err" ? "#e55" : "#e8c547", fontSize: 13,
        }}>
          {msg}
        </div>
      )}

      {/* Publish */}
      <button onClick={handlePublish} disabled={status === "loading"}
        style={{
          width: "100%", padding: "14px 0", background: "#e8c547", color: "#0a0a0a",
          border: "none", borderRadius: 4, fontWeight: 700, fontSize: 15,
          cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1,
        }}>
        {status === "loading" ? "Publishing..." : "Publish Post"}
      </button>
    </div>
  );
}
