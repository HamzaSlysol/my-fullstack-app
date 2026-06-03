import { db } from "@/db";
import { hotels } from "@/db/schema";
import { and, asc, eq } from "drizzle-orm";

type HotelCity = "makkah" | "madinah";

const CITY_LABELS: Record<HotelCity, string> = {
  makkah: "Makkah",
  madinah: "Madinah",
};

function normalizeCity(value: unknown): HotelCity | null {
  if (typeof value !== "string") {
    return null;
  }

  const city = value.trim().toLowerCase();

  if (city === "makkah" || city === "mecca") {
    return "makkah";
  }

  if (city === "madinah" || city === "madina" || city === "medina") {
    return "madinah";
  }

  return null;
}

function normalizeString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();

  return normalized.length > 0 ? normalized : null;
}

function normalizeOptionalString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();

  return normalized.length > 0 ? normalized : null;
}

function normalizeDistanceMeters(
  distanceMeters: unknown,
  distanceKm: unknown,
): number | null {
  const meters = Number(distanceMeters);

  if (Number.isFinite(meters) && meters > 0) {
    return Math.round(meters);
  }

  const kilometers = Number(distanceKm);

  if (Number.isFinite(kilometers) && kilometers > 0) {
    return Math.round(kilometers * 1000);
  }

  return null;
}

function normalizeRating(value: unknown): string | null {
  const rating = Number(value);

  if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
    return null;
  }

  return rating.toFixed(1);
}

function normalizeReviewCount(value: unknown): number {
  const reviewCount = Number(value);

  if (!Number.isFinite(reviewCount) || reviewCount < 0) {
    return 0;
  }

  return Math.round(reviewCount);
}

function formatDistance(distanceMeters: number) {
  if (distanceMeters < 1000) {
    return `${distanceMeters} m`;
  }

  const kilometers = distanceMeters / 1000;

  return `${kilometers.toFixed(kilometers >= 10 ? 0 : 1)} km`;
}

function canWriteHotels(request: Request) {
  const apiKey = process.env.HOTELS_API_KEY;

  if (!apiKey) {
    return process.env.NODE_ENV !== "production";
  }

  return request.headers.get("x-api-key") === apiKey;
}

function toHotelPayload(row: typeof hotels.$inferSelect) {
  const city = normalizeCity(row.city) ?? "makkah";

  return {
    id: row.id,
    city,
    displayCity: CITY_LABELS[city],
    name: row.name,
    nearestLandmark: row.nearestLandmark,
    distanceMeters: row.distanceMeters,
    distanceLabel: formatDistance(row.distanceMeters),
    rating: row.rating,
    reviewCount: row.reviewCount,
    reviewSummary: row.reviewSummary,
    priceFrom: row.priceFrom,
    imageUrl: row.imageUrl,
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = normalizeCity(searchParams.get("city"));

    const rows = city
      ? await db
          .select()
          .from(hotels)
          .where(and(eq(hotels.isActive, true), eq(hotels.city, city)))
          .orderBy(asc(hotels.distanceMeters), asc(hotels.name))
      : await db
          .select()
          .from(hotels)
          .where(eq(hotels.isActive, true))
          .orderBy(asc(hotels.city), asc(hotels.distanceMeters), asc(hotels.name));

    return Response.json({
      hotels: rows.map(toHotelPayload),
    });
  } catch (error) {
    console.error("HOTELS_GET_ERROR:", error);

    return Response.json(
      { message: "Hotel listings are unavailable." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!canWriteHotels(request)) {
      return Response.json(
        { message: "Hotel API key is required." },
        { status: 401 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;
    const city = normalizeCity(body.city);
    const name = normalizeString(body.name);
    const nearestLandmark = normalizeString(body.nearestLandmark);
    const distanceMeters = normalizeDistanceMeters(
      body.distanceMeters,
      body.distanceKm,
    );
    const rating = normalizeRating(body.rating);
    const reviewCount = normalizeReviewCount(body.reviewCount);
    const reviewSummary = normalizeString(body.reviewSummary);
    const priceFrom = normalizeOptionalString(body.priceFrom);
    const imageUrl = normalizeOptionalString(body.imageUrl);

    if (
      !city ||
      !name ||
      !nearestLandmark ||
      !distanceMeters ||
      !rating ||
      !reviewSummary
    ) {
      return Response.json(
        {
          message:
            "city, name, nearestLandmark, distanceMeters or distanceKm, rating, and reviewSummary are required.",
        },
        { status: 400 },
      );
    }

    await db.insert(hotels).values({
      city,
      name,
      nearestLandmark,
      distanceMeters,
      rating,
      reviewCount,
      reviewSummary,
      priceFrom,
      imageUrl,
    });

    return Response.json(
      {
        message: "Hotel created.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("HOTELS_POST_ERROR:", error);

    return Response.json(
      { message: "Hotel could not be created." },
      { status: 500 },
    );
  }
}
