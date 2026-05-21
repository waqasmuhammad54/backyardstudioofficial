import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/blog");
  revalidatePath("/services");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
