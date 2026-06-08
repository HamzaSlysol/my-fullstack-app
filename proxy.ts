import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key";

const PUBLIC_PAGE_PATHS = [
  "/",
  "/about",
  "/packages",
  "/services",
  "/documents",
  "/chat",
  "/login",
  "/register",
];
const PUBLIC_MUTATION_API_PATHS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/chat",
];
const PUBLIC_READ_API_PATHS = [
  "/api/flights",
  "/api/hotels",
  "/api/restaurants",
];

function isPublicPage(pathname: string) {
  return PUBLIC_PAGE_PATHS.includes(pathname);
}

function isPublicApi(request: NextRequest) {
  const { method, nextUrl } = request;
  const { pathname } = nextUrl;

  if (PUBLIC_MUTATION_API_PATHS.includes(pathname)) {
    return method === "POST";
  }

  return method === "GET" && PUBLIC_READ_API_PATHS.includes(pathname);
}

function isApiRoute(pathname: string) {
  return pathname.startsWith("/api/");
}

function hasValidToken(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    return false;
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

function clearAuthCookie(response: NextResponse) {
  response.cookies.set({
    name: "accessToken",
    value: "",
    path: "/",
    maxAge: 0,
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = hasValidToken(request);

  if (isAuthenticated && isPublicPage(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    isAuthenticated ||
    isPublicPage(pathname) ||
    isPublicApi(request)
  ) {
    return NextResponse.next();
  }

  if (isApiRoute(pathname)) {
    const response = NextResponse.json(
      { message: "Authentication required." },
      { status: 401 },
    );
    clearAuthCookie(response);
    return response;
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  const response = NextResponse.redirect(loginUrl);
  clearAuthCookie(response);
  return response;
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
