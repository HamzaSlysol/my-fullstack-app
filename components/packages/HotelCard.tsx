import type { Hotel } from "@/lib/hotels";
import Link from "next/link";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const cardContent = (
    <article className="flex w-70 shrink-0 snap-start flex-col gap-3.5 rounded-lg border border-[#d9e3df] bg-white p-4 shadow-[0_12px_30px_rgba(23,33,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,33,31,0.14)]">
      {hotel.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={hotel.imageUrl}
          alt={hotel.name}
          className="h-32 w-full rounded-md bg-[#f8fbfb] object-cover"
        />
      ) : (
        <div className="flex h-32 items-center justify-center rounded-md bg-[#075f42]">
          <span className="font-serif text-5xl font-bold text-[#f0b34b]">
            {hotel.name.slice(0, 1)}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs font-black uppercase text-[#075f42]">
            {hotel.displayCity}
          </p>
          <span className="rounded-full bg-[#e7a43a] px-2.5 py-1 text-xs font-black text-white">
            {hotel.rating}
          </span>
        </div>

        <h3 className="font-serif text-2xl leading-tight text-[#17211f]">
          {hotel.name}
        </h3>

        <p className="text-sm font-extrabold leading-5 text-[#075f42]">
          {hotel.distanceLabel} from {hotel.nearestLandmark}
        </p>

        <p className="text-sm leading-5 text-[#40505a]">
          {hotel.reviewSummary}
        </p>
      </div>

      <div className="mt-auto border-t border-[#d9e3df] pt-3">
        <p className="text-sm font-extrabold text-[#17211f]">
          {hotel.reviewCount.toLocaleString()} reviews
        </p>

        {hotel.priceFrom ? (
          <p className="mt-1 font-serif text-lg font-bold text-[#075f42]">
            From {hotel.priceFrom}
          </p>
        ) : null}
      </div>
    </article>
  );

  if (!hotel.link) {
    return cardContent;
  }
  console.log("Hotel link:", hotel.link);
  return (
    <Link href={hotel.link} target="_blank" className="block">
      {cardContent}
    </Link>
  );
}
