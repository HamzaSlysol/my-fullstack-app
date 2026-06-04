import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AboutSection } from "@/components/landing/AboutSection";
import { LandingHeader } from "@/components/landing/LandingHeader";

type ValueIcon = "integrity" | "services" | "care" | "knowledge";

type Value = {
  title: string;
  description: string;
  icon: ValueIcon;
};

type TeamMember = {
  name: string;
  role: string;
  imagePosition: string;
};

const values: Value[] = [
  {
    title: "Spiritual Integrity",
    description: "Upholding sincere worship guidance through authentic Islamic teachings.",
    icon: "integrity",
  },
  {
    title: "Trusted Services",
    description: "Providing reliable pilgrimage support with honesty and transparency.",
    icon: "services",
  },
  {
    title: "Compassionate Care",
    description: "Supporting pilgrims with empathy, patience, and understanding.",
    icon: "care",
  },
  {
    title: "Guided Knowledge",
    description: "Delivering clear religious guidance from qualified scholars.",
    icon: "knowledge",
  },
];

const team: TeamMember[] = [
  {
    name: "Abdul Razak",
    role: "Pure Path Founder",
    imagePosition: "18% 25%",
  },
  {
    name: "Ahmad Faris",
    role: "Program Manager",
    imagePosition: "52% 20%",
  },
  {
    name: "Fahim Zain",
    role: "Travel Coordinator",
    imagePosition: "46% 82%",
  },
  {
    name: "Salman Firdaus",
    role: "Customer Support",
    imagePosition: "88% 40%",
  },
];

export const metadata: Metadata = {
  title: "About Us | Pure Path",
  description:
    "Learn about Pure Path's values, experienced team, and trusted support for Hajj and Umrah pilgrims.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#17211f]">
      <AboutHero />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#dfcfb5] bg-white pt-20">
      <Image
        src="/pure-path-hero.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-top opacity-20"
      />
      <div className="absolute inset-0 bg-white/78" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <LandingHeader />

      <div className="relative z-10 mx-auto flex min-h-[230px] max-w-5xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-16">
        <h1 className="font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
          About
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#40505a] sm:text-base">
          Pure Path assists pilgrims in fulfilling their sacred obligations
          smoothly. We combine organization, guidance, and spiritual care.
        </p>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-[#fbfbfa] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.8fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#075f42]">
            Our Value
          </p>
          <h2 className="mt-4 max-w-md font-serif text-4xl leading-[1.05] text-[#202020] sm:text-5xl">
            Values Guiding Every Sacred Journey
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#40505a] sm:text-lg">
            Pure Path is founded on values that honor faith, trust, and
            responsibility. We serve pilgrims with devotion and accountability.
          </p>
          <Link
            href="/packages"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f42] px-7 text-base font-semibold text-white transition hover:bg-[#064b36] focus:outline-none focus:ring-4 focus:ring-[#075f42]/25"
          >
            Learn More
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-lg border-2 border-[#e7a43a] bg-[#075f42] shadow-[0_24px_70px_rgba(7,95,66,0.18)]">
          <div className="relative aspect-[0.72] min-h-[390px]">
            <Image
              src="/pure-path-hero.png"
              alt="The Kaaba in Makkah"
              fill
              sizes="(max-width: 1024px) 85vw, 25vw"
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#075f42]/10 to-[#075f42]/95" />
          </div>
          <div className="border-t border-white/75 px-7 py-5 text-right font-serif text-lg font-semibold text-white">
            Pure Path, Since 2002
          </div>
        </div>

        <div className="space-y-7">
          {values.map((value) => (
            <ValueRow key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueRow({ value }: { value: Value }) {
  return (
    <article className="grid grid-cols-[54px_1fr] gap-5 border-b border-[#e7a43a] pb-6 last:border-b-0 last:pb-0">
      <span className="grid size-11 place-items-center rounded bg-[#075f42] text-[#f0b34b] ring-2 ring-[#e7a43a]">
        <ValueIcon type={value.icon} />
      </span>
      <div>
        <h3 className="font-serif text-2xl leading-tight text-[#075f42]">
          {value.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-[#40505a] sm:text-base">
          {value.description}
        </p>
      </div>
    </article>
  );
}

function TeamSection() {
  return (
    <section className="bg-[#fbfbfa] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <OrnamentalDivider />

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#075f42]">
            Our Team
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#202020] sm:text-5xl">
            Dedicated Team Serving Sacred Journeys
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#40505a]">
            Every member is committed to guiding pilgrims with care and
            sincerity. We work together to ensure a calm and meaningful journey.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-lg border-2 border-[#e7a43a] bg-[#075f42] shadow-[0_18px_45px_rgba(7,95,66,0.14)]">
      <div className="relative aspect-[0.82] min-h-[260px]">
        <Image
          src="/why-choose-us.png"
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 22vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: member.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e7fbf4]/30 via-transparent to-[#075f42]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center text-white">
          <h3 className="font-serif text-xl font-semibold leading-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/85">
            {member.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function OrnamentalDivider() {
  return (
    <div className="flex items-center gap-3 text-[#e7a43a]" aria-hidden="true">
      <span className="h-px flex-1 bg-[#e7a43a]" />
      <svg viewBox="0 0 24 24" className="size-5">
        <path
          d="M12 2.5 14.6 7l5.1 1.1-3.5 3.9.5 5.2-4.7-2.1-4.7 2.1.5-5.2-3.5-3.9L9.4 7 12 2.5Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px flex-1 bg-[#e7a43a]" />
    </div>
  );
}

function ValueIcon({ type }: { type: ValueIcon }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      {type === "integrity" && (
        <>
          <path d="M16 4 25 8v7c0 6-4 10-9 13-5-3-9-7-9-13V8l9-4Z" />
          <path d="m11 16 3 3 7-8" />
        </>
      )}

      {type === "services" && (
        <>
          <path d="M8 10h16v14H8z" />
          <path d="M12 10V8a4 4 0 0 1 8 0v2" />
          <path d="M8 15h16" />
          <path d="M12 20h3" />
          <path d="M18 20h2" />
        </>
      )}

      {type === "care" && (
        <>
          <path d="M16 27S6 21 6 13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 8-8 14-8 14Z" />
          <path d="M10 16h4l2-4 2 7 2-3h2" />
        </>
      )}

      {type === "knowledge" && (
        <>
          <path d="M6 8h8a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H6z" />
          <path d="M26 8h-8a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h8z" />
          <path d="M10 13h4" />
          <path d="M10 17h4" />
          <path d="M20 13h2" />
          <path d="M20 17h2" />
        </>
      )}
    </svg>
  );
}
