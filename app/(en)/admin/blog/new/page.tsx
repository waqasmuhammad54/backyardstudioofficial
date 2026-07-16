"use client";
import { useState, useRef, useEffect } from "react";

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
type PublishStatus = "published" | "draft";
type PostStatus = "published" | "draft" | "deleted";
type PostRecord = {
  slug: string;
  title?: string;
  status?: PostStatus;
  date?: string;
  dateISO?: string;
  deletedAt?: string;
};
type ActiveTab = "new" | "published" | "drafts" | "bin";

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
    bodyText = text.trim();
    const h1 = bodyText.match(/^#\s+(.+)$/m);
    if (h1) meta.title = h1[1].trim();
    const mt = bodyText.match(/\*\*Meta Title[^:*]*:\*\*\s*(.+)/i);
    if (mt) meta.metaTitle = mt[1].trim();
    const md2 = bodyText.match(/\*\*Meta Description[^:*]*:\*\*\s*(.+)/i);
    if (md2) meta.metaDescription = md2[1].trim();
  }

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

function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
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
    if (res.ok) { const d = await res.json(); const tk = d.token || ""; if (tk && typeof sessionStorage !== "undefined") sessionStorage.setItem("bso_token", tk); onLogin(tk); } else setErr("Invalid password.");
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

/* ── Preview Modal ───────────────────────────────────────────────── */
function PreviewModal({ title, metaTitle, metaDesc, excerpt, content, image, onClose }: {
  title: string; metaTitle: string; metaDesc: string; excerpt: string;
  content: string; image: string; onClose: () => void;
}) {
  const html = textToHtml(content);
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999,
      overflowY: "auto", padding: "24px 16px",
    }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{ maxWidth: 780, margin: "0 auto", background: "#fff", borderRadius: 8, overflow: "hidden" }}>
        {/* Toolbar */}
        <div style={{ background: "#111", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em" }}>PREVIEW — How it will look</span>
          <button onClick={onClose} style={{ background: "none", border: "1px solid #444", color: "#aaa", padding: "4px 14px", borderRadius: 4, cursor: "pointer", fontSize: 13 }}>✕ Close</button>
        </div>
        {/* SEO meta preview */}
        <div style={{ background: "#f8f8f8", borderBottom: "1px solid #eee", padding: "16px 24px" }}>
          <p style={{ color: "#1a0dab", fontSize: 18, fontWeight: 500, margin: "0 0 2px", lineHeight: 1.3 }}>{metaTitle || title}</p>
          <p style={{ color: "#006621", fontSize: 13, margin: "0 0 4px" }}>https://backyardstudioofficial.com/blog/{slugify(title)}-2026</p>
          <p style={{ color: "#545454", fontSize: 14, margin: 0, lineHeight: 1.4 }}>{metaDesc || excerpt}</p>
        </div>
        {/* Hero */}
        {image && (
          <div style={{ background: "#000", maxHeight: 300, overflow: "hidden" }}>
            <img src={image} alt={title} style={{ width: "100%", objectFit: "cover", maxHeight: 300, opacity: 0.85 }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        )}
        {/* Content */}
        <div style={{ padding: "32px 36px", color: "#222", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 12px", lineHeight: 1.3, color: "#111" }}>{title}</h1>
          {excerpt && <p style={{ color: "#555", fontSize: 16, margin: "0 0 24px", fontStyle: "italic" }}>{excerpt}</p>}
          <div dangerouslySetInnerHTML={{ __html: html }} style={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ───────────────────────────────────────────────────── */
export default function BlogNewPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [authedToken, setAuthedToken] = useState("");

  // New post form state
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

  // UI state for form
  const [uiState, setUiState] = useState<"idle" | "loading" | "published" | "draft_saved" | "error">("idle");
  const [msg, setMsg] = useState("");
  const [liveSlug, setLiveSlug] = useState("");
  const [uploading, setUploading] = useState(false);
  const [mdLoaded, setMdLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Tab + post list state
  const [activeTab, setActiveTab] = useState<ActiveTab>("new");
  const [posts, setPosts] = useState<PostRecord[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsMsg, setPostsMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mdInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Check auth on mount (cookie fallback)
  useEffect(() => {
    fetch("/api/admin/publish").then((r) => {
      if (r.status === 401) { setAuthed(false); } else {
        // Authed via cookie — but we need a Bearer token too (for upload etc.)
        const saved = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("bso_token") : null;
        if (saved) { setAuthedToken(saved); setAuthed(true); } else { setAuthed(false); }
      }
    });
  }, []);

  const slug = slugify(title) + (title.toLowerCase().endsWith("-2026") ? "" : "-2026");

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", val: string) => {
    const updated = [...faqs];
    updated[i] = { ...updated[i], [field]: val };
    setFaqs(updated);
  };

  function resetForm() {
    setTitle(""); setMetaTitle(""); setMetaDesc(""); setKeywords("");
    setCategory("Photography"); setAuthor("Backyard Studio Team"); setReadTime("6 min read");
    setImage("/images/creative/creative-04.webp"); setExcerpt(""); setContent("");
    setFaqs([{ question: "", answer: "" }]); setMdLoaded(false);
    setUiState("idle"); setMsg(""); setLiveSlug("");
  }

  /* ── Post list helpers ─────────────────────────────────────────── */
  const fetchPosts = async () => {
    setPostsLoading(true); setPostsMsg("");
    const res = await fetch("/api/admin/publish", { headers: { Authorization: `Bearer ${authedToken}` } });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts || []);
    } else {
      setPostsMsg("Failed to load posts. Check GitHub token.");
    }
    setPostsLoading(false);
  };

  const switchTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab !== "new") fetchPosts();
  };

  const moveToBin = async (postSlug: string, postTitle: string) => {
    if (!window.confirm(`Move "${postTitle}" to bin?`)) return;
    setPostsMsg("");
    const res = await fetch("/api/admin/publish", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` },
      body: JSON.stringify({ slug: postSlug }),
    });
    if (res.ok) {
      fetchPosts();
    } else {
      const b = await res.json().catch(() => ({}));
      setPostsMsg(b.error || "Failed to move to bin.");
    }
  };

  const restorePost = async (postSlug: string) => {
    setPostsMsg("");
    const res = await fetch("/api/admin/publish", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` },
      body: JSON.stringify({ slug: postSlug }),
    });
    if (res.ok) {
      fetchPosts();
    } else {
      const b = await res.json().catch(() => ({}));
      setPostsMsg(b.error || "Failed to restore post.");
    }
  };

  const permanentDelete = async (postSlug: string, postTitle: string) => {
    if (!window.confirm(`PERMANENTLY delete "${postTitle}"?\n\nThis cannot be undone.`)) return;
    setPostsMsg("");
    const res = await fetch("/api/admin/publish", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` },
      body: JSON.stringify({ slug: postSlug, permanent: true }),
    });
    if (res.ok) {
      fetchPosts();
    } else {
      const b = await res.json().catch(() => ({}));
      setPostsMsg(b.error || "Failed to permanently delete.");
    }
  };

  /* ── MD + Image upload ─────────────────────────────────────────── */
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
      setUiState("idle");
      setMsg(`✓ Loaded "${file.name}" — review fields below, then Publish or Save as Draft.`);
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
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` },
      body: JSON.stringify({ filename: file.name, content: base64 }),
    });

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (imageInputRef.current) imageInputRef.current.value = "";

    if (res.ok) {
      const { path } = await res.json();
      setImage(path);
      setMsg("✓ Image uploaded to " + path);
    } else {
      const body = await res.json().catch(() => ({}));
      setUiState("error");
      setMsg(body.error || "Image upload failed.");
    }
  }

  /* ── Publish/draft submit ──────────────────────────────────────── */
  async function handleSubmit(publishStatus: PublishStatus) {
    if (!title || !metaTitle || !metaDesc || !content) {
      setMsg("Fill in title, meta title, meta description, and content."); return;
    }
    if (metaTitle.length > 55) { setMsg("Meta title must be 55 characters or fewer."); return; }
    if (metaDesc.length > 155) { setMsg("Meta description must be 155 characters or fewer."); return; }

    setUiState("loading"); setMsg("");

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
      status: publishStatus,
    };

    const res = await fetch("/api/admin/publish", {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` }, body: JSON.stringify(post),
    });

    const body = await res.json().catch(() => ({}));

    if (res.status === 409 && body.duplicate) {
      const confirmed = window.confirm(
        `A post with this URL already exists:\n/blog/${slug}\n\nDo you want to overwrite (update) it?`
      );
      if (confirmed) {
        const res2 = await fetch("/api/admin/publish", {
          method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${authedToken}` },
          body: JSON.stringify({ ...post, overwrite: true }),
        });
        if (res2.ok) {
          setLiveSlug(slug);
          setUiState(publishStatus === "published" ? "published" : "draft_saved");
          setMsg(publishStatus === "published"
            ? "✓ Updated & live at /blog/" + slug
            : "✓ Draft updated.");
        } else {
          const b2 = await res2.json().catch(() => ({}));
          setUiState("error");
          setMsg(b2.error || "Update failed.");
        }
      } else {
        setUiState("idle");
        setMsg("Not overwritten. Change the post title to create a different URL.");
      }
      return;
    }

    if (res.ok) {
      setLiveSlug(slug);
      setUiState(publishStatus === "published" ? "published" : "draft_saved");
      setMsg(publishStatus === "published"
        ? `✓ Done — live at /blog/${slug} after Vercel deploys (~60s).`
        : `✓ Saved as draft. Won't appear on blog until published.`);
    } else {
      setUiState("error");
      setMsg(body.error || "Failed. Check GITHUB_TOKEN in Vercel env vars.");
    }
  }

  if (authed === false) return <LoginScreen onLogin={(tk) => { setAuthedToken(tk); setAuthed(true); }} />;
  if (authed === null) return <div style={{ minHeight: "100vh", background: "#0a0a0a" }} />;

  const F: React.CSSProperties = { marginBottom: 24 };
  const isLocked = uiState === "published" || uiState === "draft_saved";

  /* ── Derived post lists ─────────────────────────────────────────── */
  const publishedPosts = posts.filter((p) => !p.status || p.status === "published");
  const draftPosts = posts.filter((p) => p.status === "draft");
  const binPosts = posts.filter((p) => p.status === "deleted");

  const tabCounts: Record<ActiveTab, number | null> = {
    new: null,
    published: postsLoading ? null : publishedPosts.length,
    drafts: postsLoading ? null : draftPosts.length,
    bin: postsLoading ? null : binPosts.length,
  };

  const currentList =
    activeTab === "published" ? publishedPosts :
    activeTab === "drafts" ? draftPosts :
    activeTab === "bin" ? binPosts : [];

  return (
    <>
      {showPreview && (
        <PreviewModal
          title={title} metaTitle={metaTitle} metaDesc={metaDesc}
          excerpt={excerpt} content={content} image={image}
          onClose={() => setShowPreview(false)}
        />
      )}

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 80px", background: "#0a0a0a", minHeight: "100vh" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", margin: "0 0 4px" }}>BLOG ADMIN</p>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#fff" }}>Blog Manager</h1>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {activeTab === "new" && title && (
              <button
                onClick={() => setShowPreview(true)}
                style={{ padding: "8px 18px", background: "none", border: "1px solid #444", borderRadius: 4, color: "#aaa", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                👁 Preview
              </button>
            )}
            <a href="/admin" style={{ color: "#888", fontSize: 13, textDecoration: "none" }}>Back to CRM</a>
          </div>
        </div>

        {/* ── Tab Bar ── */}
        <div style={{ display: "flex", borderBottom: "1px solid #2a2a2a", marginBottom: 32 }}>
          {([
            { id: "new" as ActiveTab, label: "📝 New Post" },
            { id: "published" as ActiveTab, label: "✅ Published" },
            { id: "drafts" as ActiveTab, label: "🗒 Drafts" },
            { id: "bin" as ActiveTab, label: "🗑 Bin" },
          ]).map(({ id, label }) => {
            const count = tabCounts[id];
            return (
              <button key={id} onClick={() => switchTab(id)}
                style={{
                  padding: "10px 20px", background: "none", border: "none",
                  borderBottom: activeTab === id ? "2px solid #e8c547" : "2px solid transparent",
                  color: activeTab === id ? "#e8c547" : "#666",
                  cursor: "pointer", fontSize: 13, fontWeight: 700, marginBottom: -1,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                {label}
                {count !== null && (
                  <span style={{
                    background: activeTab === id ? "#2a2000" : "#1a1a1a",
                    color: activeTab === id ? "#e8c547" : "#555",
                    fontSize: 10, fontWeight: 700, borderRadius: 10,
                    padding: "1px 6px", minWidth: 18, textAlign: "center",
                  }}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ══ NEW POST TAB ══════════════════════════════════════════ */}
        {activeTab === "new" && (
          <>
            {/* SUCCESS STATE */}
            {isLocked && (
              <div style={{
                background: uiState === "published" ? "#0a2a0a" : "#1a1a08",
                border: `1px solid ${uiState === "published" ? "#2a6a2a" : "#4a4a10"}`,
                borderRadius: 8, padding: 28, marginBottom: 32, textAlign: "center",
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{uiState === "published" ? "✅" : "📝"}</div>
                <p style={{
                  color: uiState === "published" ? "#4caf50" : "#e8c547",
                  fontSize: 20, fontWeight: 700, margin: "0 0 8px",
                }}>
                  {uiState === "published" ? "Done — Post is Live!" : "Saved as Draft"}
                </p>
                <p style={{ color: "#aaa", fontSize: 14, margin: "0 0 20px" }}>{msg}</p>
                {uiState === "published" && liveSlug && (
                  <a
                    href={`/blog/${liveSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block", padding: "10px 24px", background: "#1a3a1a",
                      border: "1px solid #2a6a2a", borderRadius: 4, color: "#4caf50",
                      textDecoration: "none", fontSize: 14, fontWeight: 600, marginRight: 12,
                    }}
                  >
                    View Live Post →
                  </a>
                )}
                <button
                  onClick={resetForm}
                  style={{
                    display: "inline-block", padding: "10px 24px", background: "#e8c547",
                    border: "none", borderRadius: 4, color: "#0a0a0a",
                    cursor: "pointer", fontSize: 14, fontWeight: 700,
                  }}
                >
                  + Publish Another Post
                </button>
              </div>
            )}

            {/* QUICK UPLOAD SECTION */}
            {!isLocked && (
              <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 6, padding: 24, marginBottom: 36 }}>
                <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", margin: "0 0 4px" }}>QUICK UPLOAD</p>
                <p style={{ color: "#aaa", fontSize: 13, margin: "0 0 20px" }}>
                  Upload a <code style={{ color: "#e8c547" }}>.md</code> file + hero image to auto-fill the form.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {/* MD Upload */}
                  <div style={{ background: "#0a0a0a", border: "1px solid #333", borderRadius: 4, padding: 20, textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>MD</div>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>Upload .md File</p>
                    <p style={{ color: "#555", fontSize: 11, margin: "0 0 14px" }}>Auto-fills all text fields</p>
                    <button type="button" onClick={() => mdInputRef.current?.click()}
                      style={{
                        padding: "8px 20px", background: mdLoaded ? "#1a3a1a" : "#e8c547",
                        border: mdLoaded ? "1px solid #2a5a2a" : "none",
                        borderRadius: 4, color: mdLoaded ? "#4caf50" : "#0a0a0a",
                        cursor: "pointer", fontSize: 13, fontWeight: 700,
                      }}>
                      {mdLoaded ? "✓ MD Loaded" : "Choose .md File"}
                    </button>
                    <input ref={mdInputRef} type="file" accept=".md,.markdown" style={{ display: "none" }} onChange={handleMdUpload} />
                  </div>

                  {/* Image Upload */}
                  <div style={{ background: "#0a0a0a", border: "1px solid #333", borderRadius: 4, padding: 20, textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>IMG</div>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>Upload Hero Image</p>
                    <p style={{ color: "#555", fontSize: 11, margin: "0 0 14px" }}>JPEG, WebP, PNG — any size or resolution</p>
                    <button type="button" onClick={() => imageInputRef.current?.click()} disabled={uploading}
                      style={{
                        padding: "8px 20px", background: uploading ? "#1a1a1a" : "#333",
                        border: "1px solid #444", borderRadius: 4,
                        color: uploading ? "#555" : "#fff",
                        cursor: uploading ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 700,
                      }}>
                      {uploading ? "Uploading..." : "Choose Image"}
                    </button>
                    <input ref={imageInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
                  </div>
                </div>

                <details style={{ marginTop: 16 }}>
                  <summary style={{ color: "#555", fontSize: 11, cursor: "pointer" }}>What should my .md file look like?</summary>
                  <pre style={{ marginTop: 10, padding: 14, background: "#0a0a0a", borderRadius: 4, color: "#888", fontSize: 11, lineHeight: 1.7, overflowX: "auto", border: "1px solid #222" }}>
                    {"---\ntitle: Event Videography UAE -- Pricing 2026\nmetaTitle: Event Videography UAE | Pricing 2026\nmetaDescription: Event videography in UAE costs AED 3,000-20,000.\nkeywords: event videography uae, event videography dubai\ncategory: Videography\nauthor: Backyard Studio Team\nreadTime: 8 min read\nexcerpt: Short preview for the blog listing page.\n---\n\n# Title Here\n\n## Quick Answer\n\nParagraph...\n\n## Frequently Asked Questions\n\n### Question?\n\nAnswer paragraph."}
                  </pre>
                </details>
              </div>
            )}

            {/* Notification bar */}
            {msg && !isLocked && (
              <div style={{
                padding: "12px 16px", borderRadius: 4, marginBottom: 24,
                background: uiState === "error" ? "#2a0a0a" : "#1a1a08",
                border: `1px solid ${uiState === "error" ? "#5a1a1a" : "#3a3a10"}`,
                color: uiState === "error" ? "#e55" : "#e8c547", fontSize: 13,
              }}>
                {msg}
              </div>
            )}

            {/* FORM FIELDS */}
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 32, opacity: isLocked ? 0.4 : 1, pointerEvents: isLocked ? "none" : "auto" }}>
              <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", marginBottom: 24 }}>OR FILL MANUALLY</p>

              <div style={F}>
                <label style={LABEL}>Post Title</label>
                <input style={INPUT} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Best Production Companies in Dubai 2026" />
                {title && <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>Slug: <code style={{ color: "#e8c547" }}>/blog/{slug}</code></p>}
              </div>

              <div style={F}>
                <label style={LABEL}>Meta Title (55 chars max)</label>
                <input
                  style={{ ...INPUT, borderColor: metaTitle.length > 55 ? "#e55" : "#333" }}
                  value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Production Companies Dubai 2026 | Backyard" maxLength={60}
                />
                <p style={{ fontSize: 11, color: counterColor(metaTitle.length, 55), textAlign: "right", marginTop: 4 }}>{metaTitle.length} / 55</p>
              </div>

              <div style={F}>
                <label style={LABEL}>Meta Description (155 chars max)</label>
                <textarea
                  style={{ ...INPUT, resize: "vertical", minHeight: 72 }}
                  value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)}
                  placeholder="Discover the top video production companies in Dubai for 2026..." maxLength={160}
                />
                <p style={{ fontSize: 11, color: counterColor(metaDesc.length, 155), textAlign: "right", marginTop: 4 }}>{metaDesc.length} / 155</p>
              </div>

              <div style={F}>
                <label style={LABEL}>Keywords (comma-separated)</label>
                <input style={INPUT} value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="production company dubai, video production uae" />
              </div>

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

              <div style={F}>
                <label style={LABEL}>Hero Image Path</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={{ ...INPUT, flex: 1 }} value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/blog/my-photo.webp" />
                  <button type="button" onClick={() => fileInputRef.current?.click()} disabled={uploading}
                    style={{ padding: "10px 14px", background: uploading ? "#1a1a1a" : "#222", border: "1px solid #444", borderRadius: 4, color: uploading ? "#555" : "#e8c547", cursor: uploading ? "not-allowed" : "pointer", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                    {uploading ? "..." : "Upload"}
                  </button>
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
              </div>

              <div style={F}>
                <label style={LABEL}>Excerpt (blog listing preview)</label>
                <textarea style={{ ...INPUT, resize: "vertical", minHeight: 56 }} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
              </div>

              <div style={F}>
                <label style={LABEL}>Content</label>
                <p style={{ fontSize: 11, color: "#555", margin: "0 0 6px" }}>
                  Plain text. <code style={{ color: "#e8c547" }}>## Heading</code> for H2. Blank line = new paragraph.
                </p>
                <textarea
                  style={{ ...INPUT, resize: "vertical", minHeight: 340, lineHeight: 1.8, fontSize: 13 }}
                  value={content} onChange={(e) => setContent(e.target.value)}
                  placeholder={"## Quick Answer\n\nWrite your answer here.\n\n## Section\n\nNext section."}
                />
                <p style={{ fontSize: 11, color: "#555", marginTop: 4 }}>{content.split(/\s+/).filter(Boolean).length} words</p>
              </div>

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
                <button onClick={addFaq} style={{ background: "none", border: "1px solid #333", color: "#888", padding: "8px 16px", borderRadius: 4, cursor: "pointer", fontSize: 13 }}>
                  + Add FAQ
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            {!isLocked && (
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <button
                  onClick={() => handleSubmit("draft")}
                  disabled={uiState === "loading"}
                  style={{ flex: 1, padding: "14px 0", background: "none", border: "1px solid #444", borderRadius: 4, color: "#aaa", fontWeight: 700, fontSize: 15, cursor: uiState === "loading" ? "not-allowed" : "pointer", opacity: uiState === "loading" ? 0.7 : 1 }}>
                  {uiState === "loading" ? "Saving..." : "Save as Draft"}
                </button>
                <button
                  onClick={() => setShowPreview(true)}
                  disabled={!title}
                  style={{ padding: "14px 24px", background: "none", border: "1px solid #555", borderRadius: 4, color: "#888", fontWeight: 700, fontSize: 15, cursor: title ? "pointer" : "not-allowed", opacity: title ? 1 : 0.4 }}>
                  Preview
                </button>
                <button
                  onClick={() => handleSubmit("published")}
                  disabled={uiState === "loading"}
                  style={{ flex: 2, padding: "14px 0", background: "#e8c547", color: "#0a0a0a", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: uiState === "loading" ? "not-allowed" : "pointer", opacity: uiState === "loading" ? 0.7 : 1 }}>
                  {uiState === "loading" ? "Publishing..." : "Publish Post"}
                </button>
              </div>
            )}
          </>
        )}

        {/* POST LIST TABS */}
        {activeTab !== "new" && (
          <div>
            {postsMsg && (
              <div style={{ padding: "12px 16px", borderRadius: 4, marginBottom: 20, background: "#2a0a0a", border: "1px solid #5a1a1a", color: "#e55", fontSize: 13 }}>
                {postsMsg}
              </div>
            )}
            {postsLoading ? (
              <p style={{ color: "#555", textAlign: "center", padding: "60px 20px", fontSize: 14 }}>Loading posts...</p>
            ) : currentList.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <p style={{ fontSize: 16, color: "#555", margin: 0 }}>
                  {activeTab === "bin" ? "Bin is empty" : activeTab === "drafts" ? "No drafts yet" : "No published posts found"}
                </p>
              </div>
            ) : (
              <div>
                <div style={{ padding: "0 4px 10px", borderBottom: "1px solid #1a1a1a", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "#444", fontWeight: 700 }}>
                    {currentList.length} {activeTab === "bin" ? "DELETED" : activeTab === "drafts" ? "DRAFT" : "PUBLISHED"} POST{currentList.length !== 1 ? "S" : ""}
                  </span>
                </div>
                {currentList.map((post) => (
                  <div key={post.slug} style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 6, padding: "14px 18px", marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "#f0f0f0", fontWeight: 600, fontSize: 14, margin: "0 0 4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {post.title || post.slug}
                      </p>
                      <p style={{ color: "#444", fontSize: 11, margin: 0 }}>
                        /blog/{post.slug}
                        {post.date && <span style={{ color: "#555" }}> · {post.date}</span>}
                        {post.deletedAt && <span style={{ color: "#c44" }}> · Deleted</span>}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      {activeTab !== "bin" ? (
                        <>
                          <a href={"/blog/" + post.slug} target="_blank" rel="noopener noreferrer"
                            style={{ padding: "7px 14px", background: "none", border: "1px solid #2a2a2a", borderRadius: 4, color: "#666", fontSize: 12, textDecoration: "none", fontWeight: 600 }}>
                            View
                          </a>
                          <button onClick={() => moveToBin(post.slug, post.title || post.slug)}
                            style={{ padding: "7px 14px", background: "none", border: "1px solid #4a1a1a", borderRadius: 4, color: "#c44", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                            Move to Bin
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => restorePost(post.slug)}
                            style={{ padding: "7px 16px", background: "#0d2a0d", border: "1px solid #1a5a1a", borderRadius: 4, color: "#4caf50", fontSize: 12, cursor: "pointer", fontWeight: 700 }}>
                            Restore
                          </button>
                          <button onClick={() => permanentDelete(post.slug, post.title || post.slug)}
                            style={{ padding: "7px 14px", background: "#2a0808", border: "1px solid #6