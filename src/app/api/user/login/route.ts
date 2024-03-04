import { UserLogin } from "@/package/api/user/login";
import { setUserToken } from "@/package/cookies/token";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await UserLogin(params);
  setUserToken(data.data?.token || "", cookies())
  return NextResponse.json(data);
}
