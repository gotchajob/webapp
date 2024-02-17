import { SendAnswer } from "@/package/api/answer";
import { AdviceService } from "@/package/api/home/advice-service";
import { getUserToken } from "@/package/cookies/token";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const accessToken = await getUserToken(cookies());
  const data = await SendAnswer(params, accessToken);
  return NextResponse.json(data);
}
