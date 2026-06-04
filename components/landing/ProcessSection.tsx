"use client";

import Link from "next/link";

type ProcessIconType = "document" | "folder" | "plane";

type ProcessStep = {
  id: "package" | "documents" | "journey";
  title: string;
  description: string;
  icon: ProcessIconType;
};

const steps: ProcessStep[] = [
  {
    id: "package",
    title: "Confirm Your Package",
    description:
      "Choose the right Umrah or Hajj package with clear pricing and guidance.",
    icon: "document",
  },
  {
    id: "documents",
    title: "Complete Your Documents",
    description:
      "We help you complete all requirements for visas, records, and travel approvals.",
    icon: "folder",
  },
  {
    id: "journey",
    title: "Begin Your Journey",
    description:
      "Travel with your group and enjoy full support, guidance, and comfortable arrangements from start to finish.",
    icon: "plane",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-[#fbfbfa] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-bold uppercase tracking-[0.08em] text-[#075f42]">
            Our Process
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#202020] sm:text-6xl">
            A Simple Process for a Smooth Pilgrimage
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[#40505a]">
            We take care of the details so you can focus on your worship, every
            step is designed to be simple, guided, and worry-free.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <ProcessStepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step }: { step: ProcessStep }) {
  const cardContent = (
    <>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#075f42] text-white">
        <ProcessIcon type={step.icon} />
      </div>

      <h3 className="mt-6 font-serif text-2xl text-[#075f42]">{step.title}</h3>

      <p className="mt-4 text-base leading-7 text-[#40505a]">
        {step.description}
      </p>
    </>
  );

  const className =
    "block w-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#075f42] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#075f42]/20";

  if (step.id === "documents") {
    return (
      <Link href="/documents" className={className}>
        {cardContent}
      </Link>
    );
  }

  return (
    <article className={className} aria-label={step.title}>
      {cardContent}
    </article>
  );
}

function ProcessIcon({ type }: { type: ProcessIconType }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      aria-hidden="true"
    >
      {type === "document" && (
        <>
          <path d="M20 13h28v38H20z" />
          <path d="M28 24h14" />
          <path d="M28 32h14" />
          <path d="M28 40h8" />
        </>
      )}

      {type === "folder" && (
        <>
          <path d="M18 20h28v32H18z" />
          <path d="M14 25h4v22h-4z" />
          <path d="M46 25h4v22h-4z" />
          <path d="M26 31h12" />
          <path d="M26 39h12" />
        </>
      )}

      {type === "plane" && (
        <>
          <path d="M12 31 52 15 37 52l-7-17-18-4Z" />
          <path d="m30 35 22-20" />
        </>
      )}
    </svg>
  );
}
