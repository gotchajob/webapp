import { CreateOrderSerivce } from "@/package/api/order-service";
import { UserLogin } from "@/package/api/user/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const params = await req.json();
  const data = await CreateOrderSerivce(params);
  return NextResponse.json(data);
}
