import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./types/enums";
import { AllPagesClass } from "./app/all-pages.class";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isDashboardPage = url.includes("/:path");
  const isAuthPage = url.includes("/");

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(AllPagesClass.NOT_PAID_ORDERS_PAGE, url));
  }
}

export const configMW = {
  matcher: ["/:path"],
};
