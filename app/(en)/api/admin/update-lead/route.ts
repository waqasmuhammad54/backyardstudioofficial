import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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
  const updates: Record<string, string> = {};
  if (status) updates.status = status;
  if (notes !== undefined) updates.notes = notes;
  const { error } = await supabase.from("leads").update(updates).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
