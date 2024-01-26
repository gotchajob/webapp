import { OrderSerivce } from "@/package/api/home/order-service";
import { UserLogin } from "@/package/api/user/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await OrderSerivce(params);
  return NextResponse.json(data);
}
