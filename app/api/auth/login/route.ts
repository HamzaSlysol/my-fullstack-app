import { db } from "@/db";
import { refreshTokens, users } from "@/db/schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import {
  ACCESS_TOKEN_MAX_AGE,
  accessCookie,
  generateRefreshToken,
  refreshCookie,
  refreshTokenExpiry,
  signAccessToken,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { username, password } = body;

    if (!username || !password) {
      return Response.json(
        { message: "Username and password are required." },
        { status: 400 },
      );
    }

    const [user] = await db
      .select()
      .from(users)
      .where(or(eq(users.username, username), eq(users.email, username)))
      .limit(1);

    if (!user) {
      return Response.json(
        { message: "Invalid username or password." },
        { status: 401 },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { message: "Invalid username or password." },
        { status: 401 },
      );
    }

    if (!user.isActive) {
      return Response.json(
        { message: "This account is disabled." },
        { status: 403 },
      );
    }

    const authUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    };

    const accessToken = signAccessToken(authUser);
    const { token: refreshToken, tokenHash } = generateRefreshToken();

    await db.insert(refreshTokens).values({
      userId: user.id,
      tokenHash,
      expiresAt: refreshTokenExpiry(),
    });

    const response = NextResponse.json({
      message: "Login successful.",
      accessToken,
      refreshToken,
      expiresIn: ACCESS_TOKEN_MAX_AGE,
      user: authUser,
    });

    response.cookies.set(accessCookie(accessToken));
    response.cookies.set(refreshCookie(refreshToken));

    return response;
  } catch (error) {
    console.error("LOGIN_ERROR:", error);

    return Response.json({ message: "Something went wrong." }, { status: 500 });
  }
}
