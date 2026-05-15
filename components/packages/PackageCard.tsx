import Image from "next/image";
import Link from "next/link";

import type { PackageItem } from "./data";

export function PackageCard({ item }: { item: PackageItem }) {
  return (
    <article className="relative isolate overflow-hidden rounded-lg border-2 border-[#d99a32] bg-[#075f42] text-white shadow-[0_18px_45px_rgba(7,95,66,0.16)]">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 92vw, 430px"
        className="object-cover"
        style={{ objectPosition: item.imagePosition ?? "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#075f42]/10 via-[#075f42]/65 to-[#064533]" />
      <div className="absolute inset-0 bg-[#075f42]/15" />

      <div className="relative z-10 flex min-h-[395px] flex-col p-5 sm:min-h-[420px] sm:p-6">
        <ul className="ml-auto flex max-w-[78%] flex-wrap justify-end gap-2">
          {item.badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full bg-[#e7a43a] px-3 py-1 text-xs font-semibold leading-none text-white shadow-sm"
            >
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <p className="text-xs font-bold text-white/90">{item.dates}</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
            {item.title}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-5 text-white/90 sm:text-base sm:leading-6">
            {item.description}
          </p>

          <ul className="mt-5 space-y-2 text-sm font-semibold text-white sm:text-base">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <GoldRosette />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
            <span className="text-xs font-semibold text-white/85">
              Start from
            </span>
            <p className="font-serif text-3xl leading-none text-white sm:text-4xl">
              {item.price}
              <span className="ml-1 font-sans text-xs font-semibold text-white/85">
                /person
              </span>
            </p>
          </div>

          <Link
            href="#offers"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#075f42] transition hover:bg-[#fff7e8] focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            See Details
          </Link>
        </div>
      </div>
    </article>
  );
}

function GoldRosette() {
  return (
    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#e7a43a] text-[#075f42]">
      <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
        <path
          d="M8 1.2 9.7 4l3.1-.7-.7 3.1L14.8 8l-2.7 1.6.7 3.1-3.1-.7L8 14.8 6.3 12l-3.1.7.7-3.1L1.2 8l2.7-1.6-.7-3.1 3.1.7L8 1.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
