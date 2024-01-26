import { UserLogin } from "@/package/api/user/login";
import { setUserToken } from "@/package/cookies/token";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  setUserToken("", cookies());
  return NextResponse.json({
    responseText: "Đăng xuất thành công",
    status: "success",
  });
}
