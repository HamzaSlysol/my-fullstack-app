import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LandingHeader } from "@/components/landing/LandingHeader";

type BenefitIcon = "license" | "hotel" | "support" | "luggage";
type ServiceIconName =
  | "minaret"
  | "kaaba"
  | "passport"
  | "insurance"
  | "plane"
  | "guide";

type Benefit = {
  title: string;
  description: string;
  icon: BenefitIcon;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: ServiceIconName;
  items: string[];
  detailsHref?: string;
};

const benefits: Benefit[] = [
  {
    title: "Licensed & Reliable",
    description:
      "Travel confidently with a licensed, transparent, and compliant Hajj & Umrah provider.",
    icon: "license",
  },
  {
    title: "Comfortable Accommodations",
    description:
      "Stay with trusted hotel partners near the holy mosques for easy access and comfort.",
    icon: "hotel",
  },
  {
    title: "Experts Tour Guidance",
    description:
      "Experienced mutawwif and tour leaders guide your journey with spiritual briefings.",
    icon: "support",
  },
  {
    title: "Hassle-Free Travel",
    description:
      "Complete support for visas, transport, documentation, and logistics.",
    icon: "luggage",
  },
];

const services: ServiceCard[] = [
  {
    title: "Umrah Packages",
    description: "Comfortable and guided Umrah journeys for all travelers.",
    icon: "minaret",
    items: [
      "9-12 days",
      "Hotels in Makkah & Madinah",
      "Full transportation",
      "Guided ziyarah tours",
    ],
  },
  {
    title: "Hajj Programs",
    description: "Structured and compliant Hajj programs with full support.",
    icon: "kaaba",
    items: [
      "20-30 days",
      "Tent ordering (Mina-Arafah)",
      "Experienced mutawwif",
      "Full movement management",
    ],
  },
  {
    title: "Visa & Documentation",
    description: "Fast and complete support for visa and document processing.",
    icon: "passport",
    detailsHref: "/documents",
    items: [
      "2-5 days",
      "Fast visa processing",
      "Document verification",
      "Family & senior assistance",
    ],
  },
  {
    title: "Travel Insurance",
    description:
      "Comprehensive protection ensuring safety throughout the pilgrimage journey.",
    icon: "insurance",
    items: [
      "Medical coverage",
      "Emergency support",
      "Travel protection",
      "Peace assistance",
    ],
  },
  {
    title: "Airport Assistance",
    description: "Dedicated support services for smooth arrival and departure.",
    icon: "plane",
    items: [
      "Arrival guidance",
      "Luggage handling service",
      "Immigration support",
      "Safety compliance",
    ],
  },
  {
    title: "Pilgrim Guidance",
    description:
      "Spiritual and practical guidance provided throughout the entire journey.",
    icon: "guide",
    items: [
      "Ritual education",
      "Daily briefings",
      "Group coordination",
      "Spiritual mentoring",
    ],
  },
];

const archClipPath =
  "polygon(50% 0, 58% 8%, 70% 13%, 82% 17%, 91% 25%, 94% 34%, 94% 40%, 100% 44%, 100% 100%, 0 100%, 0 44%, 6% 40%, 6% 34%, 9% 25%, 18% 17%, 30% 13%, 42% 8%)";

export const metadata: Metadata = {
  title: "Services | Pure Path",
  description:
    "Explore Pure Path services for Umrah, Hajj, visas, insurance, airport support, and guided pilgrimage care.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#17211f]">
      <ServicesHero />
      <WhyChooseServices />
      <ServicesGrid />
    </main>
  );
}

function ServicesHero() {
  return (
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

      <div className="relative z-10 mx-auto flex min-h-[250px] max-w-5xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-16">
        <h1 className="font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#40505a] sm:text-base">
          Pure Path provides comprehensive services designed to support pilgrims
          throughout their sacred journey.
        </p>
      </div>
    </section>
  );
}

function WhyChooseServices() {
  return (
    <section className="bg-[#fbfbfa] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          className="mx-auto w-full max-w-xl bg-[#e7a43a] p-1.5 drop-shadow-2xl lg:mx-0"
          style={{ clipPath: archClipPath }}
        >
          <div
            className="relative aspect-[0.82] min-h-[520px] overflow-hidden"
            style={{ clipPath: archClipPath }}
          >
            <Image
              src="/why-choose-us.png"
              alt="Pilgrims gathered on a mosque carpet"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div>
          <p className="text-base font-bold uppercase tracking-[0.08em] text-[#075f42]">
            Why Choose Us
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.06] text-[#202020] sm:text-5xl lg:text-6xl">
            Where Comfort, Guidance, and Spiritual Care Come Together
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-7 text-[#40505a] sm:text-lg">
            From preparation to your return home, our services prioritize
            safety, clarity, and genuine care. These key benefits help ensure
            that every pilgrim feels supported at every moment of the journey.
          </p>

          <div className="mt-10 grid gap-x-9 gap-y-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  return (
    <article className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075f42] text-white">
        <BenefitIcon type={benefit.icon} />
      </div>

      <div>
        <h3 className="font-serif text-xl text-[#075f42] sm:text-2xl">
          {benefit.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#40505a] sm:text-base">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}

function ServicesGrid() {
  return (
    <section
      id="services"
      className="pure-path-pattern bg-[#075f42] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f0b34b]">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Everything You Need for a Safe & Seamless Pilgrimage
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">
            From travel logistics to spiritual guidance, our services are
            designed to ensure your journey remains comfortable, meaningful, and
            stress-free.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceCard }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
      <h3 className="mt-6 text-center font-serif text-3xl text-[#075f42]">
        {service.title}
      </h3>

      <p className="mt-3 text-center text-base leading-7 text-[#40505a]">
        {service.description}
      </p>

      <ul className="mt-8 flex-1 space-y-3">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#e7a43a]" />
            <span className="text-[#40505a]">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={service.detailsHref ?? "/packages"}
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#075f42] px-6 font-semibold text-white transition hover:bg-[#064b36]"
      >
        See Details
      </Link>
    </article>
  );
}

function CardDivider() {
  return (
    <div className="mt-6 flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-[#e7a43a]" />
      <span className="grid size-6 place-items-center text-[#e7a43a]">
        <svg viewBox="0 0 24 24" className="size-6">
          <path
            d="M12 2.5 14.6 7l5.1 1.1-3.5 3.9.5 5.2-4.7-2.1-4.7 2.1.5-5.2-3.5-3.9L9.4 7 12 2.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="h-px flex-1 bg-[#e7a43a]" />
    </div>
  );
}

function RosetteBullet() {
  return (
    <span className="mt-0.5 grid size-5 shrink-0 place-items-center text-[#075f42]">
      <svg viewBox="0 0 32 32" className="size-5" aria-hidden="true">
        <path
          d="M16 1.5 20 6l6-.5.5 6 4.5 4-4.5 4-.5 6-6-.5-4 4.5-4-4.5-6 .5-.5-6-4.5-4 4.5-4 .5-6 6 .5L16 1.5Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="6" fill="#e7a43a" />
      </svg>
    </span>
  );
}

function BenefitIcon({ type }: { type: BenefitIcon }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {type === "license" && (
        <>
          <path d="M7 7h16v18H7z" />
          <path d="M11 12h6" />
          <path d="M11 16h6" />
          <path d="M11 20h4" />
          <circle cx="23" cy="14" r="3" />
          <path d="m21 17-1 5 3-2 3 2-1-5" />
        </>
      )}

      {type === "hotel" && (
        <>
          <path d="M8 25V7h13v18" />
          <path d="M5 25h22" />
          <path d="M12 11h2" />
          <path d="M17 11h2" />
          <path d="M12 15h2" />
          <path d="M17 15h2" />
          <path d="M14 25v-5h4v5" />
          <path d="M21 13h4v12" />
        </>
      )}

      {type === "support" && (
        <>
          <path d="M7 17v-2a9 9 0 0 1 18 0v2" />
          <path d="M7 17h4v6H8a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3Z" />
          <path d="M21 17h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3v-6Z" />
          <path d="M21 23c0 2-2 4-5 4h-2" />
        </>
      )}

      {type === "luggage" && (
        <>
          <path d="M9 12h14v14H9z" />
          <path d="M13 12V9h6v3" />
          <path d="M12 16h8" />
          <path d="M12 26v2" />
          <path d="M20 26v2" />
        </>
      )}
    </svg>
  );
}
