import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./types/enums";
import { AllPagesClass } from "./app/all-pages.class";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const refreshToken = await cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes("/");

  console.log(cookies);

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(AllPagesClass.NOT_PAID_ORDERS_PAGE, url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path*"],
};
