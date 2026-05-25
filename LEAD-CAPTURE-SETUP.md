# Lead Capture & CRM Setup Guide
## Backyard Studio Official

This guide sets up email notifications to 4 addresses + a full CRM at /admin.

---

## STEP 1 — Set up Resend (Email)

1. Go to https://resend.com → Sign up (free: 3,000 emails/month)
2. Go to Domains → Add Domain → enter: `backyardstudioofficial.com`
3. Add the DNS records they show you in Hostinger (similar to how you added Vercel records)
4. Once verified, go to API Keys → Create API Key → copy it

---

## STEP 2 — Set up Supabase (Database)

1. Go to https://supabase.com → Sign up (free tier)
2. Create a new project (choose a region near UAE like "Singapore" or "Frankfurt")
3. Wait ~2 minutes for it to spin up
4. Go to SQL Editor → New Query → paste the contents of `supabase-schema.sql` → Run
5. Go to Settings → API:
   - Copy "Project URL" → this is your SUPABASE_URL
   - Copy "service_role" secret key → this is your SUPABASE_SERVICE_ROLE_KEY

---

## STEP 3 — Add Environment Variables to Vercel

Go to: https://vercel.com → Your Project → Settings → Environment Variables

Add these 4 variables (for Production, Preview, and Development):

| Variable | Value |
|---|---|
| RESEND_API_KEY | re_xxxx (from Resend) |
| SUPABASE_URL | https://xxxx.supabase.co |
| SUPABASE_SERVICE_ROLE_KEY | eyJxxx... |
| ADMIN_PASSWORD | (choose a strong password) |

Then: Settings → Deployments → Redeploy (to pick up the new env vars)

---

## STEP 4 — Access Your CRM

Go to: https://www.backyardstudioofficial.com/admin

Enter the ADMIN_PASSWORD you chose in Step 3.

You'll see:
- All leads sorted by date (newest first)
- Status filters: New / Contacted / Qualified / Closed / Lost
- Click any lead to view full details, reply by email, WhatsApp them
- Add notes and update status

---

## How It Works (automatically, after setup)

When someone fills the contact form:
1. Lead is saved to Supabase database instantly
2. Email notification sent to all 4 addresses:
   - info@backyardstudioofficial.com
   - ragnarking786@gmail.com
   - waqasmuhammad54@gmail.com
   - behramshahid.72@gmail.com
3. Auto-reply sent to the client confirming receipt
4. Lead appears in /admin CRM immediately

---

## Files Created

- `app/api/contact/route.ts` — form handler (email + DB)
- `app/api/admin/leads/route.ts` — fetch leads API
- `app/api/admin/update-lead/route.ts` — update status/notes API
- `app/api/admin/login/route.ts` — login/logout API
- `app/admin/page.tsx` — CRM dashboard
- `lib/supabase.ts` — Supabase client
- `supabase-schema.sql` — run this in Supabase SQL Editor
- `.env.local.example` — environment variables template
