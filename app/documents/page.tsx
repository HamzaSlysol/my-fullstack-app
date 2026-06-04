import type { Metadata } from "next";
import Image from "next/image";

import Documents from "@/components/landing/Documents";
import { LandingHeader } from "@/components/landing/LandingHeader";

export const metadata: Metadata = {
  title: "Documents | Pure Path",
  description:
    "Review the documents required for Umrah and Hajj travel with Pure Path.",
};

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#17211f]">
      <section className="relative isolate overflow-hidden border-b border-[#dfcfb5] bg-white pt-20">
        <Image
          src="/pure-path-hero.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbfbfa] to-transparent" />

        <LandingHeader />

        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-5xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#075f42]">
            Documents
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
            Documents Required for Umrah and Hajj
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#40505a] sm:text-lg">
            Keep your paperwork ready before booking so visa processing and
            travel approval can move smoothly.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Documents showHeading={false} />
        </div>
      </section>
    </main>
  );
}
