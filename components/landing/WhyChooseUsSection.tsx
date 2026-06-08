import Image from "next/image";

type BenefitIcon = "license" | "hotel" | "support" | "luggage";

type Benefit = {
  title: string;
  description: string;
  icon: BenefitIcon;
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

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-24 bg-[#fbfbfa] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-base font-bold uppercase tracking-[0.08em] text-[#075f42]">
            Why Choose Us
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[#202020] sm:text-6xl">
            Where Comfort, Guidance, and Spiritual Care Come Together
          </h2>
          <p className="mt-9 max-w-3xl text-xl leading-8 text-[#40505a]">
            From preparation to your return home, our services prioritise
            safety, clarity, and genuine care. These key benefits help ensure
            that every pilgrim feels supported at every moment of the journey.
          </p>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>

        <div className="pure-path-arch-frame mx-auto w-full max-w-xl drop-shadow-2xl lg:mr-0">
          <div className="pure-path-arch-card relative aspect-[0.82] min-h-140">
            <Image
              src="/why-choose-us.png"
              alt="Pilgrims gathered on a mosque carpet"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-center"
            />
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

function BenefitIcon({ type }: { type: BenefitIcon }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
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
