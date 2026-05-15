const partners = [
  { name: "Noor Routes", mark: "bg-[#bda7ff]" },
  { name: "Haram Stay", mark: "bg-[#23457a]" },
  { name: "Safwa Care", mark: "bg-[#e63746]" },
  { name: "Mina Direct", mark: "bg-[#f47a1f]" },
  { name: "Qamar Group", mark: "bg-[#d82732]" },
];

export function PartnerStrip() {
  return (
    <div className="mt-auto flex w-full flex-col gap-5 py-4 text-[#243a47] lg:flex-row lg:items-center">
      <p className="shrink-0 text-base sm:text-xl">In partnership with:</p>

      <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
        {partners.map((partner) => (
          <li key={partner.name} className="flex min-w-0 items-center gap-3">
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-full ${partner.mark}`}
              aria-hidden="true"
            >
              <span className="size-3 rounded-sm bg-white/90" />
            </span>
            <span className="truncate text-lg font-bold text-[#303044] sm:text-xl">
              {partner.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
