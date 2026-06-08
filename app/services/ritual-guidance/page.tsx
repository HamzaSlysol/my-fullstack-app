import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LandingHeader } from "@/components/landing/LandingHeader";

type RitualPlace = {
  name: string;
  location: string;
  description: string;
  guidance: string;
};

const makkahPlaces: RitualPlace[] = [
  {
    name: "Masjid al-Haram and the Kaaba",
    location: "Makkah",
    description:
      "The central sanctuary where pilgrims begin tawaf and gather around the Kaaba.",
    guidance:
      "We brief pilgrims on tawaf flow, group meeting points, and calm movement through crowded areas.",
  },
  {
    name: "Safa and Marwah",
    location: "Masjid al-Haram",
    description:
      "The two hills connected by the mas'a where pilgrims complete sa'i during Umrah and Hajj.",
    guidance:
      "Our guides explain each round, accessible routes, and how families can stay together.",
  },
  {
    name: "Mina",
    location: "Near Makkah",
    description:
      "The tent valley used during Hajj for overnight stays and movement toward the Jamarat.",
    guidance:
      "We prepare groups for tent locations, daily timing, and safe movement between camps.",
  },
  {
    name: "Arafat",
    location: "Plain of Arafat",
    description:
      "The key Hajj site where pilgrims spend the Day of Arafah in worship and supplication.",
    guidance:
      "Pilgrims receive schedule support, hydration reminders, and clear group coordination.",
  },
  {
    name: "Muzdalifah",
    location: "Between Arafat and Mina",
    description:
      "The open area where Hajj pilgrims spend the night after Arafat before returning to Mina.",
    guidance:
      "We guide pilgrims on rest, movement timing, and collecting pebbles for the Jamarat.",
  },
  {
    name: "Jamarat",
    location: "Mina",
    description:
      "The site where Hajj pilgrims perform the stoning ritual in the days of Eid and Tashreeq.",
    guidance:
      "Our team helps groups follow assigned times and avoid unsafe crowd pressure.",
  },
];

const madinahPlaces: RitualPlace[] = [
  {
    name: "Al-Masjid an-Nabawi",
    location: "Madinah",
    description:
      "The Prophet's Mosque, a deeply important place for prayer and reflection in Madinah.",
    guidance:
      "We help pilgrims understand prayer areas, entrances, and respectful visit etiquette.",
  },
  {
    name: "Rawdah",
    location: "Al-Masjid an-Nabawi",
    description:
      "A blessed area inside the Prophet's Mosque visited by many pilgrims during their stay.",
    guidance:
      "Our support includes timing guidance and reminders for calm, patient movement.",
  },
  {
    name: "Jannat al-Baqi",
    location: "Beside Al-Masjid an-Nabawi",
    description:
      "The historic cemetery near the Prophet's Mosque, visited with quiet respect.",
    guidance:
      "Pilgrims are briefed on visiting manners and the best route from the mosque area.",
  },
  {
    name: "Quba Mosque",
    location: "Madinah",
    description:
      "The first mosque established by the Prophet Muhammad, peace be upon him.",
    guidance:
      "We include visit planning, group timing, and practical transport coordination.",
  },
  {
    name: "Masjid al-Qiblatain",
    location: "Madinah",
    description:
      "A historic mosque associated with the change in prayer direction toward Makkah.",
    guidance:
      "Guides explain the site's significance and keep the visit simple and organized.",
  },
  {
    name: "Mount Uhud",
    location: "North of Madinah",
    description:
      "The historic area connected with the Battle of Uhud and the martyrs of Uhud.",
    guidance:
      "Pilgrims receive context before arrival and clear time windows for the group visit.",
  },
];

export const metadata: Metadata = {
  title: "Ritual Guidance | Pure Path",
  description:
    "Explore Pure Path ritual guidance for important Makkah and Madinah pilgrimage places.",
};

export default function RitualGuidancePage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#17211f]">
      <RitualHero />
      <OverviewSection />
      <PlacesSection
        eyebrow="Makkah"
        title="Ritual places around Makkah"
        description="These are the key places where pilgrims complete the core rites of Umrah and Hajj, with practical group guidance at each step."
        places={makkahPlaces}
      />
      <PlacesSection
        eyebrow="Madinah"
        title="Sacred visits in Madinah"
        description="Madinah visits are arranged with reverence, clear timing, and calm movement so pilgrims can focus on prayer and reflection."
        places={madinahPlaces}
        alternate
      />
    </main>
  );
}

function RitualHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#dfcfb5] bg-white pt-20">
      <Image
        src="/about-kaaba.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-white/72" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbfbfa] to-transparent" />

      <LandingHeader />

      <div className="relative z-10 mx-auto flex min-h-[330px] max-w-5xl flex-col items-center justify-center px-5 py-14 text-center sm:px-8 sm:py-18">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#075f42]">
          Ritual Guidance
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
          Ritual Places in Makkah and Madinah
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#40505a] sm:text-lg">
          A clear guide to the sacred places pilgrims visit, with practical
          support for movement, timing, worship preparation, and group care.
        </p>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="bg-[#fbfbfa] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border-2 border-[#d89c34] bg-[#075f42] shadow-[0_22px_60px_rgba(7,95,66,0.16)]">
          <div className="relative aspect-[1.05] min-h-[320px]">
            <Image
              src="/pure-path-hero.png"
              alt="Pilgrims gathered near the Kaaba in Makkah"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#075f42]/10 to-[#075f42]/75" />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#075f42]">
            Guided Journey
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#202020] sm:text-5xl">
            Know where you are going before each sacred step
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#40505a] sm:text-lg">
            Pure Path prepares pilgrims with simple briefings, route awareness,
            and group coordination for the major places connected with Hajj,
            Umrah, and Madinah visits.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Route clarity", "Ritual timing", "Group support"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#d9e3df] bg-white p-4 text-sm font-bold text-[#075f42] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlacesSection({
  eyebrow,
  title,
  description,
  places,
  alternate = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  places: RitualPlace[];
  alternate?: boolean;
}) {
  return (
    <section
      className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-12 ${
        alternate ? "bg-white" : "pure-path-pattern bg-[#075f42] text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p
              className={`text-sm font-bold uppercase tracking-[0.18em] ${
                alternate ? "text-[#075f42]" : "text-[#f0b34b]"
              }`}
            >
              {eyebrow}
            </p>
            <h2
              className={`mt-3 font-serif text-4xl leading-tight sm:text-5xl ${
                alternate ? "text-[#202020]" : "text-white"
              }`}
            >
              {title}
            </h2>
          </div>
          <p
            className={`max-w-3xl text-base leading-7 sm:text-lg ${
              alternate ? "text-[#40505a]" : "text-white/85"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.name} place={place} />
          ))}
        </div>

        {alternate ? (
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f42] px-7 text-base font-semibold text-white transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-[#075f42]/25"
            >
              Back to Services
            </Link>
            <Link
              href="/packages"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d89c34] bg-white px-7 text-base font-semibold text-[#075f42] transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-[#d89c34]/25"
            >
              View Packages
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PlaceCard({ place }: { place: RitualPlace }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[#d9e3df] bg-white p-5 text-[#17211f] shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b7791f]">
            {place.location}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-[#075f42]">
            {place.name}
          </h3>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#075f42] text-[#f0b34b]">
          <PlaceIcon />
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#40505a]">
        {place.description}
      </p>
      <p className="mt-5 border-t border-[#d9e3df] pt-4 text-sm font-semibold leading-6 text-[#17211f]">
        {place.guidance}
      </p>
    </article>
  );
}

function PlaceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.1 7-12a7 7 0 0 0-14 0c0 6.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
