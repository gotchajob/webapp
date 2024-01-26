import { UserCreateVerify } from "@/package/api/user/create-verify-email";
import { UserRegister } from "@/package/api/user/register";
import { UserVerify } from "@/package/api/user/verify-email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await UserVerify(params);
  return NextResponse.json(data);
}
