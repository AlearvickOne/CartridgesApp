import type { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
}

export const configMW = {
  matcher: ["/i/:path*", "/auth/:path"],
};
