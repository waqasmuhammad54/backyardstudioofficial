import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * MUST stay a `type` alias, not an `interface`.
 *
 * supabase-js requires each table to satisfy:
 *   GenericTable = { Row: Record<string, unknown>; Insert: ...; Update: ...; Relationships: [] }
 *
 * TypeScript gives type aliases of object literals an implicit index signature,
 * but does NOT give one to interfaces — an interface is therefore not assignable
 * to `Record<string, unknown>`. Declared as an interface, `Row: Lead` fails the
 * GenericTable constraint, the schema fails GenericSchema, `Schema` collapses to
 * `never`, and every `.insert()` in the codebase errors with "not assignable to
 * type 'never'" — while the generic still *looks* correctly applied.
 *
 * That is exactly the bug this file had. Changing `interface` to `type` is the
 * whole fix. Do not change it back.
 */
export type Lead = {
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
};

/**
 * Database shape for the typed client.
 *
 * Without this generic, `createClient()` leaves every table's Insert type as
 * `never`, so each `.insert([...])` raised TS2322 "not assignable to type
 * 'never'". Those errors never blocked a deploy — the Next build skips type
 * validation — which is exactly why they survived: invisible in CI, and they
 * mask genuine type errors in the same files.
 *
 * `Relationships` is the load-bearing part. supabase-js 2.110 defines:
 *
 *     type GenericTable = {
 *       Row: Record<string, unknown>
 *       Insert: Record<string, unknown>
 *       Update: Record<string, unknown>
 *       Relationships: GenericRelationship[]   // <-- required
 *     }
 *
 * Omit it and the table fails to satisfy GenericTable, so the schema fails to
 * satisfy GenericSchema, so `Schema` resolves to `never` — and every Insert
 * becomes `never` again. The generic looks applied and silently does nothing.
 * `leads` has no foreign keys, so the correct value is the empty tuple.
 *
 * id and created_at are optional on Insert because Postgres fills them
 * (gen_random_uuid() and now()).
 */
type Database = {
  public: {
    Tables: {
      leads: {
        Row: Lead;
        Insert: Omit<Lead, "id" | "created_at"> & Partial<Pick<Lead, "id" | "created_at">>;
        Update: Partial<Lead>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

export type TypedSupabaseClient = SupabaseClient<Database>;

/**
 * Single source of truth for lead statuses, shared by the admin API routes.
 *
 * `satisfies` ties this list to the Lead["status"] union — add a status there
 * without adding it here (or vice versa) and this line fails to compile, so the
 * two can never drift apart silently.
 */
export const LEAD_STATUSES = [
  "new",
  "intent",
  "contacted",
  "qualified",
  "closed",
  "lost",
] as const satisfies readonly Lead["status"][];

export function isLeadStatus(v: unknown): v is Lead["status"] {
  return typeof v === "string" && (LEAD_STATUSES as readonly string[]).includes(v);
}

// Lazy singleton — only initialised at request time, not at build time
let _supabase: TypedSupabaseClient | null = null;

export function getSupabase(): TypedSupabaseClient {
  if (!_supabase) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Supabase env vars not set");
    _supabase = createClient<Database>(url, key);
  }
  return _supabase;
}

/**
 * Named export kept for backwards compatibility — every call resolves through
 * getSupabase() at request time, so the client is still never constructed
 * during the build. The Proxy target is typed, so callers get full inference.
 */
export const supabase = new Proxy({} as TypedSupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
