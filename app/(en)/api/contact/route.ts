import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAILS = [
  "info@backyardstudioofficial.com",
  "ragnarking786@gmail.com",
  "waqasmuhammad54@gmail.com",
  "behramshahid.72@gmail.com",
];

function buildRow(label: string, value: string) {
  return `
    <tr style="border-bottom:1px solid #2a2a2a;">
      <td style="padding:12px 16px;background:#1a1a1a;color:#666;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;width:38%;white-space:nowrap;">${label}</td>
      <td style="padding:12px 16px;color:#e0e0e0;font-size:14px;">${value}</td>
    </tr>`;
}

function buildEmailHTML(d: { name:string; email:string; phone:string; service:string; budget:string; message:string }) {
  const waLink = d.phone
    ? `https://wa.me/${d.phone.replace(/[^0-9]/g,"")}?text=Hi%20${encodeURIComponent(d.name)}%2C%20Backyard%20Studio%20here!`
    : null;
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid #2a2a2a;border-radius:4px;">
<tr><td style="background:#e8c547;padding:20px 32px;">
  <p style="margin:0;color:#0a0a0a;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">BACKYARD STUDIO OFFICIAL</p>
  <h1 style="margin:4px 0 0;color:#0a0a0a;font-size:22px;font-weight:700;">New Lead Received</h1>
</td></tr>
<tr><td style="padding:32px;">
  <p style="color:#a0a0a0;font-size:13px;margin:0 0 24px;">A new enquiry was submitted on <strong style="color:#e8c547;">backyardstudioofficial.com</strong>. Respond within 2 hours.</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #2a2a2a;border-radius:4px;margin-bottom:24px;">
    ${buildRow("Full Name", d.name)}
    ${buildRow("Email", `<a href="mailto:${d.email}" style="color:#e8c547;">${d.email}</a>`)}
    ${buildRow("Phone", d.phone ? `<a href="https://wa.me/${d.phone.replace(/[^0-9]/g,"")}" style="color:#e8c547;">${d.phone}</a>` : "<em style='color:#666;'>Not provided</em>")}
    ${buildRow("Service", d.service || "<em style='color:#666;'>Not specified</em>")}
    ${buildRow("Budget", d.budget || "<em style='color:#666;'>Not specified</em>")}
  </table>
  <p style="color:#666;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">PROJECT BRIEF</p>
  <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-left:3px solid #e8c547;border-radius:4px;padding:16px 20px;margin-bottom:24px;">
    <p style="color:#c0c0c0;font-size:14px;line-height:1.7;margin:0;">${d.message || "<em style='color:#666;'>No message</em>"}</p>
  </div>
  <table width="100%" cellpadding="0" cellspacing="0"><tr>
    <td style="padding-right:8px;">
      <a href="mailto:${d.email}?subject=Re%3A%20Your%20Enquiry%20%E2%80%94%20Backyard%20Studio"
        style="display:block;background:#e8c547;color:#0a0a0a;text-align:center;padding:12px;font-size:12px;font-weight:700;letter-spacing:2px;text-decoration:none;border-radius:2px;">REPLY BY EMAIL</a>
    </td>
    ${waLink ? `<td style="padding-left:8px;"><a href="${waLink}" style="display:block;background:#25d366;color:#fff;text-align:center;padding:12px;font-size:12px;font-weight:700;letter-spacing:2px;text-decoration:none;border-radius:2px;">WHATSAPP THEM</a></td>` : ""}
  </tr></table>
  <p style="color:#444;font-size:11px;text-align:center;margin:24px 0 0;">View all leads: <a href="https://www.backyardstudioofficial.com/admin" style="color:#e8c547;">backyardstudioofficial.com/admin</a></p>
</td></tr>
<tr><td style="background:#0a0a0a;padding:16px 32px;border-top:1px solid #2a2a2a;">
  <p style="color:#444;font-size:11px;margin:0;text-align:center;">Backyard Studio Official &middot; Dubai, UAE &middot; +971 58 588 2685</p>
</td></tr>
</table></td></tr></table></body></html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone = "", service = "", budget = "", message = "" } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // 1. Save to Supabase
    let leadId: string | null = null;
    try {
      const { data, error } = await supabase
        .from("leads")
        .insert([{ name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), service, budget, message: message.trim(), status: "new", source: "website-contact-form", notes: "" }])
        .select("id")
        .single();
      if (error) console.error("Supabase error:", error);
      else leadId = data?.id;
    } catch (dbErr) {
      console.error("DB error:", dbErr);
    }

    // 2. Send notification emails to all 4 recipients
    const subject = `New Lead: ${name} — ${service || "General Enquiry"} | Backyard Studio`;
    const emailHTML = buildEmailHTML({ name, email, phone, service, budget, message });
    try {
      await resend.emails.send({
        from: "Backyard Studio Leads <noreply@backyardstudioofficial.com>",
        to: NOTIFY_EMAILS,
        subject,
        html: emailHTML,
        replyTo: email,
      });
    } catch (emailErr) {
      console.error("Resend error:", emailErr);
    }

    // 3. Auto-reply to the lead
    try {
      await resend.emails.send({
        from: "Backyard Studio Official <info@backyardstudioofficial.com>",
        to: [email],
        subject: "We received your brief — Backyard Studio Official",
        html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid #2a2a2a;border-radius:4px;">
<tr><td style="background:#e8c547;padding:20px 32px;">
  <p style="margin:0;color:#0a0a0a;font-size:11px;font-weight:700;letter-spacing:4px;">BACKYARD STUDIO OFFICIAL</p>
  <h1 style="margin:4px 0 0;color:#0a0a0a;font-size:22px;font-weight:700;">Brief Received</h1>
</td></tr>
<tr><td style="padding:32px;">
  <p style="color:#c0c0c0;font-size:15px;line-height:1.7;margin:0 0 16px;">Hi ${name},</p>
  <p style="color:#a0a0a0;font-size:14px;line-height:1.7;margin:0 0 16px;">Thank you for reaching out! We have received your enquiry and our production team will contact you within <strong style="color:#e8c547;">2 hours</strong>.</p>
  <p style="color:#a0a0a0;font-size:14px;line-height:1.7;margin:0 0 24px;">For a faster response, WhatsApp us directly:</p>
  <a href="https://wa.me/971585882685" style="display:inline-block;background:#25d366;color:#fff;padding:14px 28px;font-size:13px;font-weight:700;letter-spacing:2px;text-decoration:none;border-radius:2px;">WhatsApp Us Now</a>
  <p style="color:#444;font-size:12px;margin:24px 0 0;padding-top:24px;border-top:1px solid #2a2a2a;">Backyard Studio Official &middot; Dubai, UAE &middot; info@backyardstudioofficial.com</p>
</td></tr>
</table></td></tr></table></body></html>`,
      });
    } catch (replyErr) {
      console.error("Auto-reply error:", replyErr);
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
