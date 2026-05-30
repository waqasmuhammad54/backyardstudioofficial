export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isAuthorised(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  let query = supabase.from("leads").select("*").order("created_at", { ascending: false });
  if (status && status !== "all") query = query.eq("status", status);
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data });
}
