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

/**
 * NOTE ON TYPE ERRORS
 * `createClient` without a Database generic resolves every table's Insert type
 * to `never`, so each `.insert([...])` call raises TS2322 "not assignable to
 * type 'never'". There are a handful of these across the API routes. They do
 * not block deploys — the Next build runs with type validation skipped — and
 * the inserts work correctly at runtime.
 *
 * I tried threading a proper `Database` generic through here and the errors
 * persisted through the Proxy, so it was reverted rather than left half-done.
 * If it is worth fixing properly later, generate real types with
 * `supabase gen types typescript` and have the routes call `getSupabase()`
 * directly rather than going through the Proxy.
 */

export interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  /**
   * "new"    — completed contact form submission.
   * "intent" — visitor tapped WhatsApp / phone / email instead of the form.
   *            Written by /api/lead/intent. A real enquiry signal, but carries
   *            no name or contact detail because none is known at tap time.
   */
  status: "new" | "intent" | "contacted" | "qualified" | "closed" | "lost";
  notes: string;
  source: string;
}
