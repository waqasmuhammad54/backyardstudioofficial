import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  service: z.string().optional(),
  budget:  z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from:    "Backyard Studio <info@backyardstudioofficial.com>",
      to:      ["info@backyardstudioofficial.com"],
      reply_to: data.email,
      subject: `New Project Brief from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #e8c547; font-size: 24px; margin: 0;">BACKYARD STUDIO</h1>
            <p style="color: #666; font-size: 12px; letter-spacing: 4px;">NEW PROJECT BRIEF</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["Name",    data.name],
              ["Email",   data.email],
              ["Phone",   data.phone   || "—"],
              ["Service", data.service || "—"],
              ["Budget",  data.budget  || "—"],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 80px;">${label}</td>
                <td style="padding: 10px 0; color: #fff; font-size: 14px;">${value}</td>
              </tr>
            `).join("")}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a1a; border-radius: 4px; border-left: 3px solid #e8c547;">
            <p style="color: #e8c547; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">Project Details</p>
            <p style="color: #d0d0d0; font-size: 14px; line-height: 1.6; margin: 0;">${data.message}</p>
          </div>
          <p style="text-align: center; margin-top: 24px; color: #444; font-size: 11px;">Sent from backyardstudioofficial.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
