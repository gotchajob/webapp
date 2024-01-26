import { VerifyForgetPassword } from "@/package/api/user/verify-forget-password";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await VerifyForgetPassword(params);
  return NextResponse.json(data);
}
