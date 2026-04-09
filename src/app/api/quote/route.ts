import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: Wire to Resend, webhook, or email service
  console.log("=== NEW QUOTE REQUEST ===");
  console.log(JSON.stringify(data, null, 2));
  console.log("========================");

  return NextResponse.json({ success: true });
}
