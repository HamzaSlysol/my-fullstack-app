import type { Metadata } from "next";

import { sacredOffers, pilgrimagePackages } from "@/components/packages/data";
import { OffersSection } from "@/components/packages/OffersSection";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { PackagesHero } from "@/components/packages/PackagesHero";

export const metadata: Metadata = {
  title: "Packages | Qibla",
  description:
    "Explore Qibla Hajj and Umrah packages with guided support, accommodations, transport, and limited time offers.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#f8fbfb] text-[#17211f]">
      <PackagesHero />
      <PackagesGrid packages={pilgrimagePackages} />
      <OffersSection offers={sacredOffers} />
    </main>
  );
}
