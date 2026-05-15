import Image from "next/image";
import Link from "next/link";

import { LandingHeader } from "./LandingHeader";
import { PartnerStrip } from "./PartnerStrip";

const pilgrims = [
  { initials: "AM", color: "bg-[#f0d7b4]", text: "text-[#3d2a1c]" },
  { initials: "ZR", color: "bg-[#0a6045]", text: "text-white" },
  { initials: "HN", color: "bg-[#d7e9f4]", text: "text-[#214152]" },
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden border-b border-[#dfcfb5]">
      <Image
        src="/qibla-hero.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/85 to-transparent" />

      <LandingHeader />

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col px-5 pb-6 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <p
            lang="ar"
            dir="rtl"
            className="rounded-full bg-white/80 px-8 py-3 text-2xl leading-none text-black shadow-sm ring-1 ring-black/5"
          >
            لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
          </p>

          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.03] text-[#202020] sm:text-6xl lg:text-7xl xl:text-8xl">
            Begin Your Sacred Journey with Peace of Mind
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#40505a] sm:text-2xl">
            Experience a seamless and spiritually enriching pilgrimage with
            expert guidance, premium accommodations, and fully transparent
            arrangements.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {pilgrims.map((pilgrim) => (
                <span
                  key={pilgrim.initials}
                  className={`grid size-14 place-items-center rounded-full border-2 border-white text-sm font-semibold shadow-sm ${pilgrim.color} ${pilgrim.text}`}
                >
                  {pilgrim.initials}
                </span>
              ))}
            </div>
            <p className="text-lg font-semibold text-black sm:text-xl">
              Trusted by 12k+ Pilgrims
            </p>
          </div>

          <Link
            href="/packages"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#075f42] px-8 text-lg font-semibold text-white shadow-sm transition hover:bg-[#064b36] focus:outline-none focus:ring-4 focus:ring-[#075f42]/25"
          >
            View Packages
          </Link>
        </div>

        <PartnerStrip />
      </div>
    </section>
  );
}
