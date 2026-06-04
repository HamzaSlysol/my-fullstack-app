import { db } from "@/db";
import { flights } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export type Flight = {
  id: number;
  airline: string;
  departureCity: string;
  arrivalCity: string;
  departureLabel: string;
  arrivalLabel: string;
  durationLabel: string;
  fare: string;
  fareLabel: string;
  seatsAvailable: number;
  rating: string;
  bookingLink: string;
};

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function toDate(value: Date | string) {
  return value instanceof Date ? value : new Date(value);
}

function formatDateTime(value: Date | string) {
  const date = toDate(value);

  if (!Number.isFinite(date.getTime())) {
    return "Schedule pending";
  }

  return DATE_TIME_FORMATTER.format(date);
}

function formatDuration(departureTime: Date | string, arrivalTime: Date | string) {
  const departure = toDate(departureTime);
  const arrival = toDate(arrivalTime);
  const durationMs = arrival.getTime() - departure.getTime();

  if (!Number.isFinite(durationMs) || durationMs <= 0) {
    return "Duration TBD";
  }

  const totalMinutes = Math.round(durationMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

function formatFare(value: string) {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return value;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

function formatRating(value: string) {
  const rating = Number(value);

  if (!Number.isFinite(rating)) {
    return value;
  }

  return rating.toFixed(1);
}

function toFlightPayload(row: typeof flights.$inferSelect): Flight {
  const departureTime = toDate(row.departureTime);
  const arrivalTime = toDate(row.arrivalTime);

  return {
    id: row.id,
    airline: row.airline,
    departureCity: row.departureCity,
    arrivalCity: row.arrivalCity,
    departureLabel: formatDateTime(departureTime),
    arrivalLabel: formatDateTime(arrivalTime),
    durationLabel: formatDuration(departureTime, arrivalTime),
    fare: row.fare,
    fareLabel: formatFare(row.fare),
    seatsAvailable: row.seatsAvailable,
    rating: formatRating(row.rating),
    bookingLink: row.bookingLink,
  };
}

export async function getActiveFlights(): Promise<Flight[]> {
  try {
    const rows = await db
      .select()
      .from(flights)
      .where(eq(flights.isActive, true))
      .orderBy(
        asc(flights.departureCity),
        asc(flights.arrivalCity),
        asc(flights.departureTime),
        asc(flights.airline),
      );

    return rows.map(toFlightPayload);
  } catch (error) {
    console.error("GET_ACTIVE_FLIGHTS_ERROR:", error);
    return [];
  }
}
