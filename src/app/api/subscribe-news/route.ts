import { OrderSerivce } from "@/package/api/order-service";
import { SubscribeNews } from "@/package/api/subscribe-news";
import { UserLogin } from "@/package/api/user/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await SubscribeNews(params);
  return NextResponse.json(data);
}
