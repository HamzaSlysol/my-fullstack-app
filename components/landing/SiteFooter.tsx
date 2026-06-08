import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Services", href: "/services" },
  { label: "Chat", href: "/chat" },
];

const serviceLinks = [
  { label: "Umrah Packages", href: "/packages" },
  { label: "Hajj Programs", href: "/packages" },
  { label: "Documentation", href: "/documents" },
  { label: "Ritual Guidance", href: "/services/ritual-guidance" },
];

const supportLinks = [
  { label: "Customer Support", href: "tel:+923001234567" },
  { label: "Package Help", href: "/chat" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="pure-path-pattern border-t border-[#d89c34] bg-[#075f42] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.85fr_0.85fr]">
          <div className="max-w-xl">
            <Link
              href="/"
              className="font-serif text-4xl font-semibold leading-none text-white transition hover:text-[#f0b34b]"
            >
              Pure Path
            </Link>

            <p className="mt-5 max-w-md text-base leading-7 text-white/82">
              We provide the teachings of the Hajj and Umrah rituals, along with
              comprehensive travel packages and support to ensure a smooth and
              spiritually fulfilling pilgrimage experience for our users.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/packages"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#075f42] transition hover:bg-[#d89c34] hover:text-[#17211f] focus:outline-none focus:ring-4 focus:ring-white/25"
              >
                View Packages
              </Link>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Pilgrimage Care" links={serviceLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/18 pt-6 text-sm text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>Pure Path. All rights reserved.</p>
          <p>Guided travel for Hajj and Umrah pilgrims.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#f0b34b]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            {link.href.startsWith("/") ? (
              <Link
                href={link.href}
                className="inline-flex min-h-8 items-center text-base font-medium text-white/82 transition hover:text-[#f0b34b]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="inline-flex min-h-8 items-center text-base font-medium text-white/82 transition hover:text-[#f0b34b]"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
