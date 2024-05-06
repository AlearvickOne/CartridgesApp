import type { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const;
}

export const configMW = {
  matcher: ["/:path"],
};
