import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password, confirmPassword } = body;

    if (!name || !email || !password || !confirmPassword) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (password !== confirmPassword) {
      return Response.json(
        { message: "Password and confirm password do not match." },
        { status: 400 },
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.username, email)))
      .limit(1);

    if (existingUser.length > 0) {
      return Response.json(
        { message: "User already exists." },
        { status: 409 },
      );
    }

    await db.insert(users).values({
      name,
      email,
      username: email,
      password: await bcrypt.hash(password, 10),
    });

    return Response.json(
      {
        message: "Registration successful.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("REGISTER_ERROR:", error);

    return Response.json({ message: "Registration failed." }, { status: 500 });
  }
}
