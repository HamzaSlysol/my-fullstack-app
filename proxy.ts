import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  accessCookie,
  readAccessToken,
  refreshCookie,
  verifyAccessToken,
} from "@/lib/auth";

/**
 * The entire site is private. Only the pages needed to obtain a session, and
 * the auth endpoints backing them, are reachable while logged out.
 */
const AUTH_PAGE_PATHS = ["/login", "/register"];
const PUBLIC_API_PATHS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/refresh",
  "/api/auth/logout",
];

function isAuthPage(pathname: string) {
  return AUTH_PAGE_PATHS.includes(pathname);
}

function isPublicApi(request: NextRequest) {
  return (
    request.method === "POST" &&
    PUBLIC_API_PATHS.includes(request.nextUrl.pathname)
  );
}

function isApiRoute(pathname: string) {
  return pathname.startsWith("/api/");
}

function clearAuthCookies(response: NextResponse) {
  response.cookies.set(accessCookie("", 0));
  response.cookies.set(refreshCookie("", 0));
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = readAccessToken(request);
  const isAuthenticated = token !== null && verifyAccessToken(token) !== null;

  if (isAuthenticated) {
    // Logged-in users have no reason to see the login/register pages.
    if (isAuthPage(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (isAuthPage(pathname) || isPublicApi(request)) {
    return NextResponse.next();
  }

  if (isApiRoute(pathname)) {
    // 401 tells the client to try /api/auth/refresh; only clear cookies when
    // there is no refresh token to recover with.
    const canRefresh = request.cookies.has(REFRESH_TOKEN_COOKIE);
    const response = NextResponse.json(
      { message: "Authentication required.", code: "UNAUTHENTICATED" },
      { status: 401 },
    );

    return canRefresh ? response : clearAuthCookies(response);
  }

  const loginUrl = new URL("/login", request.url);

  if (pathname !== "/") {
    loginUrl.searchParams.set("next", pathname + request.nextUrl.search);
  }

  const response = NextResponse.redirect(loginUrl);

  // A stale access token with a live refresh token should not force re-login,
  // so leave the refresh cookie in place for the client to use.
  if (request.cookies.has(ACCESS_TOKEN_COOKIE)) {
    response.cookies.set(accessCookie("", 0));
  }

  return response;
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
