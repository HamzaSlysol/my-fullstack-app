import Image from "next/image";

import { LandingHeader } from "@/components/landing/LandingHeader";

export function PackagesHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#dfcfb5] bg-white pt-20">
      <Image
        src="/qibla-hero.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-top opacity-25"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fbfb] to-transparent" />

      <LandingHeader />

      <div className="relative z-10 mx-auto flex min-h-[250px] max-w-5xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-16">
        <h1 className="font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
          Packages
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#40505a] sm:text-lg">
          Discover flexible Hajj and Umrah packages tailored to your needs.
          Qibla supports every step of your pilgrimage with care and expertise.
        </p>
      </div>
    </section>
  );
}
