import type { PackageItem } from "./data";
import { PackageCard } from "./PackageCard";

export function PackagesGrid({ packages }: { packages: PackageItem[] }) {
  return (
    <section className="bg-[#f8fbfb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {packages.map((item) => (
          <PackageCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
