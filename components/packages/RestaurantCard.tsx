import type { Restaurant } from "@/lib/restaurants";
import Link from "next/link";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const cardContent = (
    <article className="flex w-72 shrink-0 snap-start flex-col gap-3.5 rounded-lg border border-[#d9e3df] bg-white p-4 shadow-[0_12px_30px_rgba(23,33,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,33,31,0.14)]">
      {restaurant.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="h-32 w-full rounded-md bg-[#f8fbfb] object-cover"
        />
      ) : (
        <div className="flex h-32 items-center justify-center rounded-md bg-[#075f42]">
          <span className="font-serif text-5xl font-bold text-[#f0b34b]">
            {restaurant.name.slice(0, 1)}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-black uppercase text-[#075f42]">
            {restaurant.displayCity}
          </p>
          <p className="mt-1 truncate text-xs font-extrabold text-[#40505a]">
            {restaurant.category}
          </p>
        </div>
        <span className="rounded-full bg-[#e7a43a] px-2.5 py-1 text-xs font-black text-white">
          {restaurant.rating}
        </span>
      </div>

      <div>
        <h3 className="font-serif text-2xl leading-tight text-[#17211f]">
          {restaurant.name}
        </h3>
        <p className="mt-3 text-sm font-extrabold leading-5 text-[#075f42]">
          {restaurant.distanceLabel} from {restaurant.nearestLandmark}
        </p>
      </div>

      <p className="rounded-md bg-[#f8fbfb] p-3 text-sm leading-5 text-[#40505a]">
        {restaurant.reviewSummary}
      </p>

      <div className="mt-auto border-t border-[#d9e3df] pt-3">
        <p className="text-sm leading-5 text-[#40505a]">
          {restaurant.address}
        </p>
        <p className="text-sm font-extrabold text-[#17211f]">
          {restaurant.reviewCount.toLocaleString()} reviews
        </p>
      </div>
    </article>
  );

  if (!restaurant.link) {
    return cardContent;
  }

  return (
    <Link href={restaurant.link} target="_blank" className="block">
      {cardContent}
    </Link>
  );
}
