import { createHash, randomBytes } from "node:crypto";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error(
    "JWT_SECRET is not set. Add it to .env — the app refuses to sign tokens with a default secret.",
  );
}

export const JWT_SECRET: string = secret;

export const ACCESS_TOKEN_COOKIE = "accessToken";
export const REFRESH_TOKEN_COOKIE = "refreshToken";

export const ACCESS_TOKEN_MAX_AGE = 60 * 60 * 24; // 24 hours
export const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export type AccessTokenPayload = AuthUser & {
  iat: number;
  exp: number;
};

export function signAccessToken(user: AuthUser) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_MAX_AGE },
  );
}

export function verifyAccessToken(token: string): AccessTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AccessTokenPayload;
  } catch {
    return null;
  }
}

/** Opaque refresh token. Only its SHA-256 hash is persisted. */
export function generateRefreshToken() {
  const token = randomBytes(48).toString("base64url");

  return { token, tokenHash: hashRefreshToken(token) };
}

export function hashRefreshToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function refreshTokenExpiry() {
  return new Date(Date.now() + REFRESH_TOKEN_MAX_AGE * 1000);
}

/**
 * Reads the access token from the cookie (web) or the `Authorization: Bearer`
 * header (mobile, which has no cookie jar).
 */
export function readAccessToken(request: NextRequest | Request) {
  const cookieToken =
    "cookies" in request
      ? request.cookies.get(ACCESS_TOKEN_COOKIE)?.value
      : undefined;

  if (cookieToken) {
    return cookieToken;
  }

  const header = request.headers.get("authorization");

  if (header?.toLowerCase().startsWith("bearer ")) {
    return header.slice(7).trim() || null;
  }

  return null;
}

/** Reads the refresh token from the cookie (web) or the JSON body (mobile). */
export function readRefreshToken(
  request: NextRequest | Request,
  body?: { refreshToken?: unknown },
) {
  const cookieToken =
    "cookies" in request
      ? request.cookies.get(REFRESH_TOKEN_COOKIE)?.value
      : undefined;

  if (cookieToken) {
    return cookieToken;
  }

  return typeof body?.refreshToken === "string" ? body.refreshToken : null;
}

/**
 * The authenticated user for the current request, or `null`.
 *
 * Proxy is a coarse gate; per the Next.js data-security guidance, call this in
 * route handlers and Server Functions rather than trusting proxy alone.
 */
export function getAuthUser(request: NextRequest | Request): AuthUser | null {
  const token = readAccessToken(request);

  if (!token) {
    return null;
  }

  const payload = verifyAccessToken(token);

  if (!payload) {
    return null;
  }

  return {
    id: payload.id,
    name: payload.name,
    email: payload.email,
    username: payload.username,
  };
}

const isProduction = process.env.NODE_ENV === "production";

export function accessCookie(value: string, maxAge = ACCESS_TOKEN_MAX_AGE) {
  return {
    name: ACCESS_TOKEN_COOKIE,
    value,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProduction,
    path: "/",
    maxAge,
  };
}

export function refreshCookie(value: string, maxAge = REFRESH_TOKEN_MAX_AGE) {
  return {
    name: REFRESH_TOKEN_COOKIE,
    value,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProduction,
    // Scoped to the endpoints that consume it, so it is not sent on every request.
    path: "/api/auth",
    maxAge,
  };
}
