import Image from "next/image";
import Link from "next/link";

const patternStyle = {
  backgroundColor: "#075f42",
  backgroundImage:
    "linear-gradient(45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%), linear-gradient(-45deg, transparent 43%, rgba(255, 255, 255, 0.045) 44%, rgba(255, 255, 255, 0.045) 46%, transparent 47%), linear-gradient(90deg, transparent 47%, rgba(255, 255, 255, 0.03) 48%, rgba(255, 255, 255, 0.03) 52%, transparent 53%)",
  backgroundPosition: "0 0, 0 0, 74px 0",
  backgroundSize: "148px 148px",
};

const archClipPath =
  "polygon(50% 0, 58% 8%, 70% 13%, 82% 17%, 91% 25%, 94% 34%, 94% 40%, 100% 44%, 100% 100%, 0 100%, 0 44%, 6% 40%, 6% 34%, 9% 25%, 18% 17%, 30% 13%, 42% 8%)";

export function AboutSection() {
  return (
    <section
      id="about"
      className="pure-path-pattern bg-[#075f42] px-5 py-20 text-white sm:px-8 lg:px-12"
      style={patternStyle}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          className="mx-auto w-full max-w-xl bg-[#e7a43a] p-1.5 drop-shadow-2xl"
          style={{ clipPath: archClipPath }}
        >
          <div
            className="relative aspect-[0.82] min-h-[520px] overflow-hidden"
            style={{ clipPath: archClipPath }}
          >
            <Image
              src="/about-kaaba.png"
              alt="Kaaba surrounded by pilgrims"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="text-base font-bold uppercase tracking-[0.08em] text-[#f0b34b]">
            About Us
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">
            Guiding Pilgrims with Honesty and Experience
          </h2>
          <div className="mt-8 space-y-6 text-xl leading-8 text-white">
            <p>
              For over a decade, we&apos;ve supported thousands of pilgrims on
              their journey to the Holy Lands. Our team provides transparent
              guidance, reliable arrangements, and heartfelt service rooted in
              integrity.
            </p>
            <p>
              Whether you&apos;re traveling alone or with family, we ensure you
              feel prepared, safe, and fully supported throughout the
              experience.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              href="/packages"
              className="inline-flex min-h-16 items-center justify-center rounded-full bg-white px-8 text-xl font-semibold text-[#075f42] transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Learn More
            </Link>

            <div className="flex items-center gap-5">
              <span className="grid size-16 place-items-center rounded-full border border-white/70">
                <PhoneIcon />
              </span>
              <div>
                <p className="text-xl font-semibold">Customer Support</p>
                <a
                  href="tel:+181234560000"
                  className="font-serif text-3xl leading-tight text-white"
                >
                  +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.65 2.8a2 2 0 0 1-.45 2.11L8.03 9.9a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.9.3 1.84.52 2.8.65A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}
