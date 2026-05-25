import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side client using service role key (bypasses RLS — for API routes only)
export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "closed" | "lost";
  notes: string;
  source: string;
}
