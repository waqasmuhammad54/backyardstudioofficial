import { createClient } from "@supabase/supabase-js";

// Lazy singleton — only initialised at request time, not at build time
let _supabase: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_supabase) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Supabase env vars not set");
    _supabase = createClient(url, key);
  }
  return _supabase;
}

// Keep named export for backwards compat — resolves at call time
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_t, prop) {
    return (getSupabase() as any)[prop];
  },
});

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
