"use client";
import { useState, useEffect, useCallback } from "react";
import { Search, LogOut, RefreshCw, Phone, Mail, MessageSquare, ChevronDown, X } from "lucide-react";

type Status = "new" | "contacted" | "qualified" | "closed" | "lost";

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  status: Status;
  notes: string;
  source: string;
}

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string }> = {
  new:       { label: "New",       color: "#e8c547", bg: "rgba(232,197,71,0.15)" },
  contacted: { label: "Contacted", color: "#60a5fa", bg: "rgba(96,165,250,0.15)" },
  qualified: { label: "Qualified", color: "#34d399", bg: "rgba(52,211,153,0.15)" },
  closed:    { label: "Closed",    color: "#a78bfa", bg: "rgba(167,139,250,0.15)" },
  lost:      { label: "Lost",      color: "#f87171", bg: "rgba(248,113,113,0.15)" },
};

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) onLogin();
    else setErr("Invalid password. Try again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0a0a" }}>
      <div style={{ width: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>
            BACKYARD STUDIO OFFICIAL
          </p>
          <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>Leads CRM</h1>
          <p style={{ color: "#666", fontSize: 13, marginTop: 8 }}>Admin access only</p>
        </div>
        <form onSubmit={submit} style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, padding: 32 }}>
          <label style={{ display: "block", color: "#666", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>
            Password
          </label>
          <input
            type="password" value={pw} onChange={e => setPw(e.target.value)} required
            style={{ width: "100%", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 2, color: "#fff", fontSize: 14, padding: "12px 14px", outline: "none", boxSizing: "border-box" }}
            placeholder="Enter admin password"
          />
          {err && <p style={{ color: "#f87171", fontSize: 12, marginTop: 8 }}>{err}</p>}
          <button type="submit" disabled={loading}
            style={{ width: "100%", background: "#e8c547", color: "#0a0a0a", border: "none", borderRadius: 2, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px", marginTop: 16, cursor: "pointer" }}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Lead Detail Modal ─────────────────────────────────────────────────────────
function LeadModal({ lead, onClose, onUpdate }: { lead: Lead; onClose: () => void; onUpdate: (id: string, updates: Partial<Lead>) => void }) {
  const [status, setStatus] = useState<Status>(lead.status);
  const [notes, setNotes] = useState(lead.notes || "");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/update-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: lead.id, status, notes }),
    });
    setSaving(false);
    onUpdate(lead.id, { status, notes });
    onClose();
  };

  const sc = STATUS_CONFIG[status];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, width: "100%", maxWidth: 640, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ color: "#fff", margin: 0, fontSize: 18, fontWeight: 700 }}>{lead.name}</h2>
            <p style={{ color: "#666", margin: "2px 0 0", fontSize: 12 }}>
              {new Date(lead.created_at).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", padding: 4 }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Email", value: lead.email, href: `mailto:${lead.email}` },
              { label: "Phone", value: lead.phone || "—", href: lead.phone ? `https://wa.me/${lead.phone.replace(/[^0-9]/g,"")}` : undefined },
              { label: "Service", value: lead.service || "—" },
              { label: "Budget", value: lead.budget || "—" },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 4, padding: "12px 16px" }}>
                <p style={{ color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 4px" }}>{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" style={{ color: "#e8c547", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>{value}</a>
                ) : (
                  <p style={{ color: "#e0e0e0", fontSize: 13, fontWeight: 600, margin: 0 }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          {lead.message && (
            <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderLeft: "3px solid #e8c547", borderRadius: 4, padding: 16, marginBottom: 24 }}>
              <p style={{ color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 8px" }}>Project Brief</p>
              <p style={{ color: "#c0c0c0", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{lead.message}</p>
            </div>
          )}

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>Status</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(Object.keys(STATUS_CONFIG) as Status[]).map((s) => {
                const cfg = STATUS_CONFIG[s];
                return (
                  <button key={s} onClick={() => setStatus(s)}
                    style={{ padding: "6px 14px", borderRadius: 2, border: `1px solid ${status === s ? cfg.color : "#2a2a2a"}`, background: status === s ? cfg.bg : "transparent", color: status === s ? cfg.color : "#666", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
                    {cfg.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>Notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={4}
              placeholder="Add notes about this lead..."
              style={{ width: "100%", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 2, color: "#e0e0e0", fontSize: 13, padding: 12, resize: "vertical", outline: "none", boxSizing: "border-box" }} />
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={save} disabled={saving}
              style={{ flex: 1, background: "#e8c547", color: "#0a0a0a", border: "none", borderRadius: 2, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", padding: "12px", cursor: "pointer" }}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <a href={`mailto:${lead.email}?subject=Re%3A%20Your%20Enquiry%20%E2%80%94%20Backyard%20Studio`}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 2, color: "#e8c547", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none" }}>
              <Mail size={14} /> Reply
            </a>
            {lead.phone && (
              <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g,"")}`} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", background: "#25d366", border: "none", borderRadius: 2, color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none" }}>
                <MessageSquare size={14} /> WA
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/leads?status=${filter}`);
    if (res.status === 401) { setAuthed(false); setLoading(false); return; }
    if (res.ok) {
      const data = await res.json();
      setLeads(data.leads || []);
      setAuthed(true);
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const handleLogin = () => { setAuthed(true); fetchLeads(); };

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setLeads([]);
  };

  const updateLead = (id: string, updates: Partial<Lead>) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
  };

  if (authed === null || (authed === false && leads.length === 0)) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const filtered = leads.filter(l =>
    search === "" ||
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.email.toLowerCase().includes(search.toLowerCase()) ||
    (l.service || "").toLowerCase().includes(search.toLowerCase())
  );

  const counts = leads.reduce((acc, l) => {
    acc[l.status] = (acc[l.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: "#111", borderBottom: "1px solid #2a2a2a", padding: "0 24px", display: "flex", alignItems: "center", height: 60, gap: 16 }}>
        <div style={{ flex: 1 }}>
          <span style={{ color: "#e8c547", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>BACKYARD STUDIO</span>
          <span style={{ color: "#444", fontSize: 13, marginLeft: 12 }}>Leads CRM</span>
        </div>
        <button onClick={fetchLeads} disabled={loading}
          style={{ background: "none", border: "1px solid #2a2a2a", borderRadius: 2, color: "#a0a0a0", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
          <RefreshCw size={13} style={{ animation: loading ? "spin 1s linear infinite" : "none" }} /> Refresh
        </button>
        <button onClick={handleLogout}
          style={{ background: "none", border: "1px solid #2a2a2a", borderRadius: 2, color: "#a0a0a0", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
          <LogOut size={13} /> Logout
        </button>
      </div>

      <div style={{ padding: 24 }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: 24 }}>
          {(["all", ...Object.keys(STATUS_CONFIG)] as const).map((s) => {
            const cfg = s === "all" ? { label: "All Leads", color: "#fff", bg: "rgba(255,255,255,0.05)" } : { ...STATUS_CONFIG[s as Status], label: STATUS_CONFIG[s as Status].label };
            const count = s === "all" ? leads.length : (counts[s] || 0);
            return (
              <button key={s} onClick={() => setFilter(s)}
                style={{ background: filter === s ? cfg.bg : "#111", border: `1px solid ${filter === s ? cfg.color : "#2a2a2a"}`, borderRadius: 4, padding: "12px 16px", cursor: "pointer", textAlign: "left" }}>
                <p style={{ color: cfg.color, fontSize: 22, fontWeight: 700, margin: "0 0 2px" }}>{count}</p>
                <p style={{ color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>{cfg.label}</p>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#444" }} />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email, or service..."
            style={{ width: "100%", background: "#111", border: "1px solid #2a2a2a", borderRadius: 2, color: "#e0e0e0", fontSize: 13, padding: "10px 12px 10px 36px", outline: "none", boxSizing: "border-box" }} />
        </div>

        {/* Leads table */}
        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#444" }}>Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, color: "#444" }}>
            {search ? "No leads match your search." : "No leads yet. They will appear here when enquiries are submitted."}
          </div>
        ) : (
          <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, overflow: "hidden" }}>
            {filtered.map((lead, i) => {
              const sc = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
              return (
                <div key={lead.id} onClick={() => setSelected(lead)}
                  style={{ display: "grid", gridTemplateColumns: "1fr 180px 140px 120px 100px", gap: 16, padding: "14px 20px", borderBottom: i < filtered.length - 1 ? "1px solid #1a1a1a" : "none", cursor: "pointer", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#1a1a1a")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, margin: "0 0 2px" }}>{lead.name}</p>
                    <p style={{ color: "#666", fontSize: 12, margin: 0 }}>{lead.email}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ color: "#a0a0a0", fontSize: 12, margin: 0 }}>{lead.service || "—"}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ color: "#a0a0a0", fontSize: 12, margin: 0 }}>{lead.budget || "—"}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ background: sc.bg, color: sc.color, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 2 }}>
                      {sc.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ color: "#444", fontSize: 11, margin: 0 }}>
                      {new Date(lead.created_at).toLocaleDateString("en-AE", { day: "numeric", month: "short" })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selected && (
        <LeadModal
          lead={selected}
          onClose={() => setSelected(null)}
          onUpdate={updateLead}
        />
      )}

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
