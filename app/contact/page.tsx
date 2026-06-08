import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LandingHeader } from "@/components/landing/LandingHeader";

type ContactIconName = "phone" | "email" | "message" | "location" | "clock";

type ContactCard = {
  title: string;
  detail: string;
  note: string;
  href?: string;
  icon: ContactIconName;
};

const contactCards: ContactCard[] = [
  {
    title: "Phone",
    detail: "+92 300 1234567",
    note: "Speak with our pilgrimage support team.",
    href: "tel:+923001234567",
    icon: "phone",
  },
  {
    title: "Email",
    detail: "support@purepath.com",
    note: "Send package, visa, or document questions.",
    href: "mailto:support@purepath.com",
    icon: "email",
  },
  {
    title: "WhatsApp",
    detail: "+92 300 1234567",
    note: "Quick help for travelers and families.",
    href: "https://wa.me/923001234567",
    icon: "message",
  },
  {
    title: "Office",
    detail: "Lahore, Pakistan",
    note: "Office visits are available by appointment.",
    icon: "location",
  },
];

const inquiryItems = [
  "Umrah and Hajj package selection",
  "Visa and documentation requirements",
  "Hotel, flight, and restaurant guidance",
  "Ritual guidance and group travel support",
];

export const metadata: Metadata = {
  title: "Contact | Pure Path",
  description:
    "Contact Pure Path for Hajj and Umrah packages, visa documentation, hotel, flight, and pilgrimage support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#17211f]">
      <ContactHero />
      <ContactDetails />
    </main>
  );
}

function ContactHero() {
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
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fbfbfa] to-transparent" />

      <LandingHeader />

      <div className="relative z-10 mx-auto flex min-h-[280px] max-w-5xl flex-col items-center justify-center px-5 py-14 text-center sm:px-8 sm:py-18">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#075f42]">
          Contact Us
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
          We Are Here to Guide Your Journey
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#40505a] sm:text-lg">
          Reach Pure Path for package advice, document support, travel
          arrangements, and guidance before your pilgrimage begins.
        </p>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {contactCards.map((card) => (
              <ContactInfoCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <aside className="rounded-lg border-2 border-[#d89c34] bg-[#075f42] p-7 text-white shadow-[0_22px_60px_rgba(7,95,66,0.16)] sm:p-8 ">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f0b34b]">
            Inquiry Help
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Tell Us What You Need
          </h2>
          <p className="mt-5 text-base leading-7 text-white/85">
            Our team can help you compare packages, prepare documents, and
            understand the next steps for Hajj or Umrah travel.
          </p>

          <ul className="mt-7 space-y-4">
            {inquiryItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 size-2.5 shrink-0 rounded-full bg-[#f0b34b]"
                  aria-hidden="true"
                />
                <span className="leading-7 text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:support@purepath.com?subject=Pure%20Path%20Inquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#075f42] transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Email Us
            </a>
            <Link
              href="/chat"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d89c34] px-6 text-sm font-bold text-white transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-[#d89c34]/25"
            >
              Chat Now
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactInfoCard({ card }: { card: ContactCard }) {
  const content = (
    <>
      <span className="grid size-12 place-items-center rounded-full bg-[#075f42] text-[#f0b34b]">
        <ContactIcon name={card.icon} />
      </span>
      <div className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#075f42]">
          {card.title}
        </h2>
        <p className="mt-2 font-serif text-2xl leading-tight text-[#202020]">
          {card.detail}
        </p>
        <p className="mt-3 text-sm leading-6 text-[#40505a]">{card.note}</p>
      </div>
    </>
  );

  const className =
    "block h-full rounded-lg border border-[#d9e3df] bg-white p-6 shadow-sm transition hover:border-[#d89c34] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#075f42]/20 sm:p-7";

  if (card.href) {
    return (
      <a href={card.href} className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}

function ContactIcon({ name }: { name: ContactIconName }) {
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
      {name === "phone" && (
        <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.65 2.8a2 2 0 0 1-.45 2.11L8.03 9.9a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.9.3 1.84.52 2.8.65A2 2 0 0 1 22 16.9Z" />
      )}

      {name === "email" && (
        <>
          <path d="M4 5h16v14H4z" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}

      {name === "message" && (
        <>
          <path d="M5 5h14v10H8l-3 3V5Z" />
          <path d="M9 9h6" />
          <path d="M9 12h4" />
        </>
      )}

      {name === "location" && (
        <>
          <path d="M12 21s7-5.4 7-12A7 7 0 0 0 5 9c0 6.6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </>
      )}

      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </>
      )}
    </svg>
  );
}
