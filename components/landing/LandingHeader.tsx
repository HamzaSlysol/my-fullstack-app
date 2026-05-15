import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pages", href: "/#about", hasChevron: true },
  { label: "About Us", href: "/#about" },
  { label: "Why Choose", href: "/#why-choose-us" },
  { label: "Process", href: "/#process" },
  { label: "Packages", href: "/packages" },
  { label: "Services", href: "/#services" },
];

export function LandingHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-[#dfcfb5]/80 bg-white/20 backdrop-blur-[2px]">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-4xl font-semibold leading-none text-[#075f42]"
        >
          Qibla
        </Link>

        <div className="hidden items-center gap-9 text-lg font-medium text-black md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 transition hover:text-[#075f42]"
            >
              <span>{item.label}</span>
              {item.hasChevron && (
                <span
                  className="mt-1 size-2 rotate-45 border-b-2 border-r-2 border-current"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f42] px-5 text-base font-semibold text-white transition hover:bg-[#064b36] focus:outline-none focus:ring-4 focus:ring-[#075f42]/25 sm:min-h-14 sm:px-8 sm:text-lg"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
