import Link from "next/link";

type DetailIcon = "minaret" | "kaaba" | "passport";

type DetailCard = {
  title: string;
  description: string;
  icon: DetailIcon;
  items: string[];
  detailsHref?: string;
};

const detailCards: DetailCard[] = [
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
];

const services = [
  "Visa documentation",
  "Hotel coordination",
  "Ziyarah planning",
  "Group guidance",
];

const features = [
  "Transparent pricing",
  "Vetted accommodation",
  "Flexible departures",
  "Local support team",
];

const patternStyle = {
  backgroundColor: "#075f42",
  backgroundImage:
    "linear-gradient(45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%), linear-gradient(-45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%), linear-gradient(90deg, transparent 47%, rgba(255, 255, 255, 0.03) 48%, rgba(255, 255, 255, 0.03) 52%, transparent 53%)",
  backgroundPosition: "0 0, 0 0, 74px 0",
  backgroundSize: "148px 148px",
};

const archClipPath =
  "polygon(50% 0, 58% 8%, 70% 13%, 82% 17%, 91% 25%, 94% 34%, 94% 40%, 100% 44%, 100% 100%, 0 100%, 0 44%, 6% 40%, 6% 34%, 9% 25%, 18% 17%, 30% 13%, 42% 8%)";

export function PackagesSection() {
  return (
    <>
      <section
        id="packages"
        className="qibla-pattern bg-[#075f42] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12"
        style={patternStyle}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f0b34b]">
              Packages
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Complete care for your sacred travel plans
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
              Every arrangement is planned to make your pilgrimage comfortable,
              meaningful, and stress-free.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {detailCards.map((card) => (
              <DetailCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 border-y border-[#d9e3df] bg-white px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#075f42]">
              Services
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#202020] sm:text-5xl">
              Every step arranged before you depart
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 rounded-lg border border-[#d9e3df] bg-[#f8fbfb] p-4 text-lg font-semibold text-[#17211f]"
              >
                <span
                  className="size-3 rounded-full bg-[#d89c34]"
                  aria-hidden="true"
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 bg-[#f7fbfb] px-5 py-16 sm:px-8 lg:px-12"
      >
        <div
          id="contact"
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"
        >
          <div>
            <p className="text-sm font-bold uppercase text-[#075f42]">
              Features
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#202020] sm:text-5xl">
              Support that stays close to the journey
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-[#d9e3df] bg-white p-5 text-lg font-semibold text-[#17211f] shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DetailCard({ card }: { card: DetailCard }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-lg sm:p-10">
      <h3 className="mt-6 font-serif text-3xl leading-tight text-[#075f42] sm:text-4xl">
        {card.title}
      </h3>

      <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-[#40505a] sm:text-lg">
        {card.description}
      </p>

      <ul className="mt-8 flex-1 space-y-4 text-left text-base leading-7 text-[#40505a] sm:text-lg">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e7a43a]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={card.detailsHref ?? "/packages"}
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f42] px-8 text-base font-bold text-white transition hover:bg-[#064b36] focus:outline-none focus:ring-4 focus:ring-[#075f42]/25 sm:min-h-14 sm:text-lg"
      >
        See Details
      </Link>
    </article>
  );
}

function CardDivider() {
  return (
    <div className="mt-8 flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-[#e7a43a]" />
      <span className="grid size-8 place-items-center text-[#e7a43a]">
        <svg viewBox="0 0 24 24" className="size-8" role="img">
          <path d="M4 8.5 12 5l8 3.5v9L12 21l-8-3.5v-9Z" fill="currentColor" />
          <path
            d="m4 11 8 3.5L20 11"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
          />
          <path d="M12 5v16" fill="none" stroke="#fff" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="h-px flex-1 bg-[#e7a43a]" />
    </div>
  );
}

function RosetteBullet() {
  return (
    <span className="mt-0.5 grid size-8 shrink-0 place-items-center text-[#075f42]">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path
          d="M16 1.5 20 6l6-.5.5 6 4.5 4-4.5 4-.5 6-6-.5-4 4.5-4-4.5-6 .5-.5-6-4.5-4 4.5-4 .5-6 6 .5L16 1.5Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="6" fill="#e7a43a" />
      </svg>
    </span>
  );
}

function ServiceIcon({ type }: { type: DetailIcon }) {
  return (
    <div className="mx-auto grid size-20 place-items-center text-[#075f42]">
      {type === "minaret" && (
        <svg
          viewBox="0 0 64 64"
          className="size-20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M32 9v6" />
          <path d="M27 13c0-3 2-5 5-5s5 2 5 5" />
          <path d="M22 28c0-8 4-13 10-16 6 3 10 8 10 16" />
          <path d="M20 28h24v25H20z" />
          <path d="M16 53h32v7H16z" />
          <path d="M27 53V35c0-3 2-5 5-5s5 2 5 5v18" />
          <path d="M20 40h24" />
          <path d="M12 60h40" />
        </svg>
      )}

      {type === "kaaba" && (
        <svg
          viewBox="0 0 64 64"
          className="size-20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 18 32 12l20 6v35l-20 5-20-5V18Z" />
          <path d="M32 12v46" />
          <path d="m12 18 20 6 20-6" />
          <path d="M12 27h40" />
          <path d="M12 34h40" />
          <path d="M41 38h7v17" />
          <path d="M18 24v4" />
          <path d="M26 25v4" />
          <path d="M38 25v4" />
          <path d="M46 24v4" />
        </svg>
      )}

      {type === "passport" && (
        <svg
          viewBox="0 0 64 64"
          className="size-20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M20 8h28a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H16V12a4 4 0 0 1 4-4Z" />
          <path d="M16 14h28a4 4 0 0 1 4 4v38" />
          <circle cx="34" cy="31" r="12" />
          <path d="M22 31h24" />
          <path d="M34 19c4 3 6 7 6 12s-2 9-6 12" />
          <path d="M34 19c-4 3-6 7-6 12s2 9 6 12" />
          <path d="M26 49h16" />
        </svg>
      )}
    </div>
  );
}
