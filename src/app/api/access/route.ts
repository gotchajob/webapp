import { UpdateAccess } from "@/package/api/access";
import { setAccessTime } from "@/package/cookies/token";
import { formatDate } from "@/package/util";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await UpdateAccess({});
  const currentDate = new Date();
  if (data.status === "success") {
    setAccessTime(
      formatDate(currentDate.toISOString(), "dd/MM/yyyy"),
      cookies()
    );
  }
  return NextResponse.json(data);
}
