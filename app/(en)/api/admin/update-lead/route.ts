export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabase, isLeadStatus, LEAD_STATUSES, type Lead } from "@/lib/supabase";

function isAuthorised(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  return token === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  const { id, status, notes } = await req.json();
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  // Typed as Partial<Lead> rather than Record<string, string>. Now that the
  // Supabase client carries a real schema, a loose string map is rejected —
  // which is the point: it means an unknown status can no longer be written to
  // the database by sending arbitrary JSON to this endpoint.
  const updates: Partial<Lead> = {};

  if (status !== undefined) {
    if (!isLeadStatus(status)) {
      return NextResponse.json(
        { error: `Invalid status. Expected one of: ${LEAD_STATUSES.join(", ")}` },
        { status: 400 },
      );
    }
    updates.status = status;
  }

  if (notes !== undefined) {
    if (typeof notes !== "string") {
      return NextResponse.json({ error: "notes must be a string" }, { status: 400 });
    }
    updates.notes = notes;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const { error } = await supabase.from("leads").update(updates).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
