import Image from "next/image";
import Link from "next/link";

import type { OfferItem } from "./data";

export function OffersSection({ offers }: { offers: OfferItem[] }) {
  return (
    <section id="offers" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.45fr] lg:items-center lg:px-0">
        <div>
          <p className="text-sm font-bold uppercase text-[#075f42]">
            Special Savings
          </p>
          <h2 className="mt-3 max-w-sm font-serif text-4xl leading-tight text-[#202020] sm:text-5xl">
            Limited Time Sacred Journey Offers
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#40505a]">
            Enjoy trusted services, premium accommodations, and valuable savings
            for a spiritually fulfilling experience.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#075f42] transition hover:text-[#064b36]"
          >
            View All Offers
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer }: { offer: OfferItem }) {
  return (
    <article className="overflow-hidden rounded-lg border-2 border-[#d99a32] bg-[#075f42] p-4 text-white shadow-[0_18px_45px_rgba(7,95,66,0.14)]">
      <div className="relative aspect-[1.45] overflow-hidden rounded-md bg-[#064533]">
        <Image
          src={offer.imageSrc}
          alt={offer.imageAlt}
          fill
          sizes="(max-width: 768px) 88vw, 260px"
          className="object-cover"
          style={{ objectPosition: offer.imagePosition ?? "center" }}
        />
      </div>

      <div className="pt-5">
        <p className="text-xs font-bold text-white/90">{offer.title}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#f0b34b] sm:text-3xl">
          {offer.discount}
        </h3>
        <p className="mt-2 text-sm leading-5 text-white/90">
          {offer.description}
        </p>

        <Link
          href="/#contact"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#075f42] transition hover:bg-[#fff7e8] focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          Get Offer
        </Link>
      </div>
    </article>
  );
}
