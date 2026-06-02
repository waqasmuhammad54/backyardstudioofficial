-- Run this in your Supabase project SQL Editor
-- Go to: https://app.supabase.com → Your Project → SQL Editor → New Query

CREATE TABLE IF NOT EXISTS leads (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT now() NOT NULL,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT DEFAULT '',
  service     TEXT DEFAULT '',
  budget      TEXT DEFAULT '',
  message     TEXT DEFAULT '',
  status      TEXT DEFAULT 'new' CHECK (status IN ('new','contacted','qualified','closed','lost')),
  notes       TEXT DEFAULT '',
  source      TEXT DEFAULT 'website-contact-form'
);

-- Index for fast status filtering
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

-- Disable RLS (we use service role key server-side, no public access needed)
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Optional: view to see lead stats
CREATE OR REPLACE VIEW lead_stats AS
SELECT
  status,
  COUNT(*) as count,
  DATE_TRUNC('day', MIN(created_at)) as first_lead,
  DATE_TRUNC('day', MAX(created_at)) as last_lead
FROM leads
GROUP BY status;
