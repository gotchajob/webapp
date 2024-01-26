import { UserCreateForgotPassword } from "@/package/api/user/create-forgot-password";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await UserCreateForgotPassword(params);
  return NextResponse.json(data);
}
