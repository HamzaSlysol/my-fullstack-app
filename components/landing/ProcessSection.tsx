type ProcessIcon = "calendar" | "document" | "folder" | "plane";

type ProcessStep = {
  title: string;
  description: string;
  icon: ProcessIcon;
};

const steps: ProcessStep[] = [
  {
    title: "Book a Consultation",
    description:
      "Discuss your goals, travel plans, and preferred departure dates with our advisors.",
    icon: "calendar",
  },
  {
    title: "Confirm Your Package",
    description:
      "Choose the right Umrah or Hajj package with clear pricing and guidance.",
    icon: "document",
  },
  {
    title: "Complete Your Documents",
    description:
      "We help you complete all requirements for visas, records, and travel approvals.",
    icon: "folder",
  },
  {
    title: "Begin Your Journey",
    description:
      "Travel with your group and enjoy full support, guidance, and comfortable arrangements from start to finish.",
    icon: "plane",
  },
];

const rosetteClipPath =
  "polygon(50% 0, 62% 14%, 78% 11%, 88% 23%, 89% 39%, 100% 50%, 89% 61%, 88% 77%, 78% 89%, 62% 86%, 50% 100%, 38% 86%, 22% 89%, 12% 77%, 11% 61%, 0 50%, 11% 39%, 12% 23%, 22% 11%, 38% 14%)";

const patternStyle = {
  backgroundColor: "#075f42",
  backgroundImage:
    "linear-gradient(45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%), linear-gradient(-45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%)",
  backgroundPosition: "0 0, 0 0",
  backgroundSize: "92px 92px",
};

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

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <ProcessStep key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step }: { step: ProcessStep }) {
  return (
    <article className="text-center">
      <div
        className="mx-auto grid size-[220px] place-items-center bg-[#e7a43a] p-1"
        style={{ clipPath: rosetteClipPath }}
        aria-hidden="true"
      >
        <div
          className="grid size-full place-items-center text-white"
          style={{ ...patternStyle, clipPath: rosetteClipPath }}
        >
          <ProcessIcon type={step.icon} />
        </div>
      </div>

      <h3 className="mx-auto mt-8 max-w-xs font-serif text-3xl leading-tight text-[#075f42]">
        {step.title}
      </h3>
      <p className="mx-auto mt-5 max-w-xs text-lg leading-7 text-[#40505a]">
        {step.description}
      </p>
    </article>
  );
}

function ProcessIcon({ type }: { type: ProcessIcon }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="size-24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      aria-hidden="true"
    >
      {type === "calendar" && (
        <>
          <path d="M16 17h32v34H16z" />
          <path d="M16 26h32" />
          <path d="M23 12v10" />
          <path d="M41 12v10" />
          <path d="M23 33h6v6h-6z" />
          <path d="M35 33h6v6h-6z" />
          <path d="M23 43h6v6h-6z" />
          <path d="M35 43h6v6h-6z" />
        </>
      )}

      {type === "document" && (
        <>
          <path d="M20 13h28v38H20z" />
          <path d="M17 13h3v7h-3a3 3 0 0 1 0-6" />
          <path d="M28 24h14" />
          <path d="M28 32h14" />
          <path d="M28 40h8" />
          <path d="m38 48 12-12 4 4-12 12-6 2 2-6Z" />
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
