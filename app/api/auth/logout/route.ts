import { db } from "@/db";
import { refreshTokens } from "@/db/schema";
import { and, eq, isNull } from "drizzle-orm";
import { NextResponse } from "next/server";
import {
  accessCookie,
  hashRefreshToken,
  readRefreshToken,
  refreshCookie,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const presented = readRefreshToken(request, body);

  if (presented) {
    try {
      await db
        .update(refreshTokens)
        .set({ revokedAt: new Date() })
        .where(
          and(
            eq(refreshTokens.tokenHash, hashRefreshToken(presented)),
            isNull(refreshTokens.revokedAt),
          ),
        );
    } catch (error) {
      console.error("LOGOUT_ERROR:", error);
    }
  }

  // Always clear cookies, even if the token was already unknown.
  const response = NextResponse.json({ message: "Logged out." });

  response.cookies.set(accessCookie("", 0));
  response.cookies.set(refreshCookie("", 0));

  return response;
}
