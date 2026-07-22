import { db } from "@/db";
import { refreshTokens, users } from "@/db/schema";
import { and, eq, isNull } from "drizzle-orm";
import { NextResponse } from "next/server";
import {
  ACCESS_TOKEN_MAX_AGE,
  accessCookie,
  generateRefreshToken,
  hashRefreshToken,
  readRefreshToken,
  refreshCookie,
  refreshTokenExpiry,
  signAccessToken,
} from "@/lib/auth";

function unauthorized(message: string) {
  const response = NextResponse.json({ message }, { status: 401 });

  response.cookies.set(accessCookie("", 0));
  response.cookies.set(refreshCookie("", 0));

  return response;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const presented = readRefreshToken(request, body);

    if (!presented) {
      return unauthorized("Refresh token is required.");
    }

    const [row] = await db
      .select({
        id: refreshTokens.id,
        expiresAt: refreshTokens.expiresAt,
        user: {
          id: users.id,
          name: users.name,
          email: users.email,
          username: users.username,
          isActive: users.isActive,
        },
      })
      .from(refreshTokens)
      .innerJoin(users, eq(users.id, refreshTokens.userId))
      .where(
        and(
          eq(refreshTokens.tokenHash, hashRefreshToken(presented)),
          isNull(refreshTokens.revokedAt),
        ),
      )
      .limit(1);

    if (!row) {
      return unauthorized("Invalid refresh token.");
    }

    if (row.expiresAt.getTime() <= Date.now()) {
      await db
        .update(refreshTokens)
        .set({ revokedAt: new Date() })
        .where(eq(refreshTokens.id, row.id));

      return unauthorized("Refresh token has expired.");
    }

    if (!row.user.isActive) {
      return unauthorized("This account is disabled.");
    }

    const authUser = {
      id: row.user.id,
      name: row.user.name,
      email: row.user.email,
      username: row.user.username,
    };

    // Rotate: the presented token is single-use.
    const accessToken = signAccessToken(authUser);
    const { token: nextRefreshToken, tokenHash } = generateRefreshToken();

    await db
      .update(refreshTokens)
      .set({ revokedAt: new Date() })
      .where(eq(refreshTokens.id, row.id));

    await db.insert(refreshTokens).values({
      userId: authUser.id,
      tokenHash,
      expiresAt: refreshTokenExpiry(),
    });

    const response = NextResponse.json({
      message: "Token refreshed.",
      accessToken,
      refreshToken: nextRefreshToken,
      expiresIn: ACCESS_TOKEN_MAX_AGE,
      user: authUser,
    });

    response.cookies.set(accessCookie(accessToken));
    response.cookies.set(refreshCookie(nextRefreshToken));

    return response;
  } catch (error) {
    console.error("REFRESH_ERROR:", error);

    return Response.json({ message: "Something went wrong." }, { status: 500 });
  }
}
