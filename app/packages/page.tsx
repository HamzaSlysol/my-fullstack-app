import type { Metadata } from "next";

import { sacredOffers, pilgrimagePackages } from "@/components/packages/data";
import { FlightsSection } from "@/components/packages/FlightsSection";
import { HotelsSection } from "@/components/packages/HotelsSection";
import { OffersSection } from "@/components/packages/OffersSection";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { PackagesHero } from "@/components/packages/PackagesHero";
import { RestaurantsSection } from "@/components/packages/RestaurantsSection";
import { getActiveFlights } from "@/lib/flights";
import { getActiveHotels } from "@/lib/hotels";
import { getActiveRestaurants } from "@/lib/restaurants";

export const metadata: Metadata = {
  title: "Packages | Pure Path",
  description:
    "Explore Pure Path Hajj and Umrah packages with guided support, accommodations, transport, and limited time offers.",
};

export const dynamic = "force-dynamic";

export default async function PackagesPage() {
  const [hotels, restaurants, flights] = await Promise.all([
    getActiveHotels(),
    getActiveRestaurants(),
    getActiveFlights(),
  ]);

  return (
    <main className="min-h-screen bg-[#f8fbfb] text-[#17211f]">
      <PackagesHero />
      <HotelsSection hotels={hotels} />
      <RestaurantsSection restaurants={restaurants} />
      <FlightsSection flights={flights} />
      <PackagesGrid packages={pilgrimagePackages} />
      <OffersSection offers={sacredOffers} />
    </main>
  );
}
