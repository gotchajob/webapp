import { AdviceService } from "@/package/api/home/advice-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await AdviceService(params);
  return NextResponse.json(data);
}
