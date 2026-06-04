import type { Flight } from "@/lib/flights";
import Link from "next/link";

export function FlightCard({ flight }: { flight: Flight }) {
  const cardContent = (
    <article className="flex w-72 shrink-0 snap-start flex-col gap-4 rounded-lg border border-[#d9e3df] bg-white p-4 shadow-[0_12px_30px_rgba(23,33,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,33,31,0.14)]">
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-xs font-black uppercase text-[#075f42]">
          {flight.airline}
        </p>
        <span className="rounded-full bg-[#e7a43a] px-2.5 py-1 text-xs font-black text-white">
          {flight.rating}
        </span>
      </div>

      <div className="grid gap-3 rounded-md bg-[#f8fbfb] p-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-black uppercase text-[#40505a]">
              Departure city
            </p>
            <p className="mt-1 font-extrabold text-[#075f42]">
              {flight.departureCity}
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase text-[#40505a]">
              Arrival city
            </p>
            <p className="mt-1 font-extrabold text-[#075f42]">
              {flight.arrivalCity}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase text-[#40505a]">
            Departure time
          </p>
          <p className="mt-1 font-extrabold text-[#17211f]">
            {flight.departureLabel}
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase text-[#40505a]">
            Arrival time
          </p>
          <p className="mt-1 font-extrabold text-[#17211f]">
            {flight.arrivalLabel}
          </p>
        </div>
      </div>

      <div className="mt-auto border-t border-[#d9e3df] pt-3">
        <div className="flex items-center justify-between gap-3 text-sm font-extrabold text-[#17211f]">
          <span>{flight.durationLabel}</span>
          <span>{flight.seatsAvailable.toLocaleString()} seats</span>
        </div>
        <p className="mt-2 font-serif text-lg font-bold text-[#075f42]">
          From {flight.fareLabel}
        </p>
      </div>
    </article>
  );

  if (!flight.bookingLink) {
    return cardContent;
  }

  return (
    <Link href={flight.bookingLink} target="_blank" className="block">
      {cardContent}
    </Link>
  );
}
