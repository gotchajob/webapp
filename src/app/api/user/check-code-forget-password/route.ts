import { UserCheckCodeForgetPassword } from "@/package/api/user/check-code-forget-password";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await UserCheckCodeForgetPassword(params);
  return NextResponse.json(data);
}
