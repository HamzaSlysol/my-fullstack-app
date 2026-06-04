import { db } from "@/db";
import { hotels } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    const result = city
      ? await db.select().from(hotels).where(eq(hotels.city, city))
      : await db.select().from(hotels);

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch hotels",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const hotel = await db.insert(hotels).values(body);

    return Response.json(
      {
        success: true,
        data: hotel[0],
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to create hotel",
      },
      { status: 500 },
    );
  }
}
