import { API_BASE_URL } from "../config";

export type HotelCity = "makkah" | "madinah";

export type Hotel = {
  id: number;
  city: HotelCity;
  displayCity: string;
  name: string;
  nearestLandmark: string;
  distanceMeters: number;
  distanceLabel: string;
  rating: string;
  reviewCount: number;
  reviewSummary: string;
  priceFrom: string | null;
  imageUrl: string | null;
};

type HotelsResponse = {
  hotels?: Hotel[];
};

export async function getHotels() {
  const response = await fetch(`${API_BASE_URL}/api/hotels`);

  if (!response.ok) {
    throw new Error("Hotel listings are unavailable.");
  }

  const data = (await response.json()) as HotelsResponse;

  return Array.isArray(data.hotels) ? data.hotels : [];
}
