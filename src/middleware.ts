import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { decode } from "./helpers/jwtHelper";

const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    // protecting hybrid routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  let decodedToken = null;

  decodedToken = decode(accessToken) as any;
  const role = decodedToken?.role;

  if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
    return NextResponse.next();
  }

  if (role === "user" && pathname.match(/^\/dashboard/)) {
    return NextResponse.next();
  }
  if (role === "user" || (role === "admin" && pathname.match("/"))) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/",
  ],
};
