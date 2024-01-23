import { UserCreateVerify } from "@/package/api/user/create-verify";
import { UserRegister } from "@/package/api/user/register";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await UserCreateVerify(params);
  return NextResponse.json(data);
}
