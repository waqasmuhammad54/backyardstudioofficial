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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check auth on mount by pinging an existing admin API
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

    if (res.ok) {
      const { path } = await res.json();
      setImage(path);
      setStatus("ok");
      setMsg(`✓ Image uploaded — path set to ${path}. It will appear on the post after Vercel rebuilds (~60s).`);
    } else {
      const body = await res.json().catch(() => ({}));
      setStatus("err");
      setMsg(body.error || "Image upload failed. Check GITHUB_TOKEN in Vercel.");
    }
  }

  async function handlePublish() {
    if (!title || !metaTitle || !metaDesc || !content) {
      setMsg("Fill in title, meta title, meta description, and content."); return;
    }
    if (metaTitle.length > 55) { setMsg("Meta title must be ≤55 characters."); return; }
    if (metaDesc.length > 155) { setMsg("Meta description must be ≤155 characters."); return; }
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
      setMsg(`Published! Live at /blog/${slug} after Vercel deploys (~60 seconds).`);
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
        <div>
          <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", margin: "0 0 4px" }}>BLOG ADMIN</p>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#fff" }}>New Blog Post</h1>
        </div>
        <a href="/admin" style={{ color: "#888", fontSize: 13, textDecoration: "none" }}>← Back to CRM</a>
      </div>

      {/* Title */}
      <div style={F}>
        <label style={LABEL}>Post Title</label>
        <input style={INPUT} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Best Production Companies in Dubai 2026" />
        {title && <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>Slug: <code style={{ color: "#e8c547" }}>/blog/{slug}</code></p>}
      </div>

      {/* Meta Title */}
      <div style={F}>
        <label style={LABEL}>Meta Title <span style={{ color: "#e8c547", fontWeight: 400 }}>(≤55 chars)</span></label>
        <input
          style={{ ...INPUT, borderColor: metaTitle.length > 55 ? "#e55" : "#333" }}
          value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)}
          placeholder="Production Companies Dubai 2026 | Backyard" maxLength={60}
        />
        <p style={{ fontSize: 11, color: counterColor(metaTitle.length, 55), textAlign: "right", marginTop: 4 }}>{metaTitle.length} / 55</p>
      </div>

      {/* Meta Description */}
      <div style={F}>
        <label style={LABEL}>Meta Description <span style={{ color: "#e8c547", fontWeight: 400 }}>(≤155 chars)</span></label>
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

      {/* Hero Image */}
      <div style={F}>
        <label style={LABEL}>Hero Image</label>
        <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
          <input
            style={{ ...INPUT, flex: 1 }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="/images/blog/my-photo.webp"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={{
              padding: "10px 18px",
              background: uploading ? "#1a1a1a" : "#e8c547",
              border: "none",
              borderRadius: 4,
              color: uploading ? "#555" : "#0a0a0a",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: 13,
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {uploading ? "Uploading…" : "Upload Image"}
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/webp,image/jpeg,image/jpg,image/png"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <p style={{ fontSize: 11, color: "#555", marginTop: 6 }}>
          Upload a new image (WebP or JPEG · 1200×630px · under 300KB) — or type an existing /images/ path.
        </p>
      </div>

      {/* Excerpt */}
      <div style={F}>
        <label style={LABEL}>Excerpt (blog listing preview — leave blank to use meta description)</label>
        <textarea style={{ ...INPUT, resize: "vertical", minHeight: 56 }} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
      </div>

      {/* Content */}
      <div style={F}>
        <label style={LABEL}>Content</label>
        <p style={{ fontSize: 11, color: "#555", margin: "0 0 6px" }}>
          Plain text. <code style={{ color: "#e8c547" }}>## Heading</code> for H2 sections. Blank line = new paragraph.
        </p>
        <textarea
          style={{ ...INPUT, resize: "vertical", minHeight: 340, lineHeight: 1.8, fontSize: 13 }}
          value={content} onChange={(e) => setContent(e.target.value)}
          placeholder={"## Introduction\n\nWrite your intro paragraph here.\n\n## Section 2\n\nNext section."}
        />
        <p style={{ fontSi