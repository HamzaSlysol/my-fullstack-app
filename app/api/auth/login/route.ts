import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key";
const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

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

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: "1d" },
    );

    const response = NextResponse.json({
      message: "Login successful.",
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });

    response.cookies.set({
      name: "accessToken",
      value: token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: ONE_DAY_IN_SECONDS,
    });

    return response;
  } catch {
    return Response.json({ message: "Something went wrong." }, { status: 500 });
  }
}
