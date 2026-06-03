import type { Metadata } from "next";

import { sacredOffers, pilgrimagePackages } from "@/components/packages/data";
import { HotelsSection } from "@/components/packages/HotelsSection";
import { OffersSection } from "@/components/packages/OffersSection";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { PackagesHero } from "@/components/packages/PackagesHero";
import { getActiveHotels } from "@/lib/hotels";

export const metadata: Metadata = {
  title: "Packages | Qibla",
  description:
    "Explore Qibla Hajj and Umrah packages with guided support, accommodations, transport, and limited time offers.",
};

export default async function PackagesPage() {
  const hotels = await getActiveHotels();

  return (
    <main className="min-h-screen bg-[#f8fbfb] text-[#17211f]">
      <PackagesHero />
      <HotelsSection hotels={hotels} />
      <PackagesGrid packages={pilgrimagePackages} />
      <OffersSection offers={sacredOffers} />
    </main>
  );
}
