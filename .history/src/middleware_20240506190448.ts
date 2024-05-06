import type { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./types/enums";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
}

export const configMW = {
  matcher: ["/:path"],
};
