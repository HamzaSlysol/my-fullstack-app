"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  children: React.ReactNode;
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

function CarouselButton({
  direction,
  label,
  onClick,
  className = "",
}: {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`grid size-10 place-items-center rounded-full border border-[#d9e3df] bg-white/95 text-[#075f42] shadow-sm transition hover:border-[#d89c34] hover:bg-[#fff7e8] hover:text-[#b7791f] focus:outline-none focus:ring-4 focus:ring-[#075f42]/20 ${className}`}
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}

export function HotelCarousel({ children }: Props) {
  const itemCount = React.Children.count(children);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative mt-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">{children}</div>
      </div>
      {itemCount > 1 ? (
        <>
          <CarouselButton
            direction="left"
            label="Show previous items"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2"
          />
          <CarouselButton
            direction="right"
            label="Show next items"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2"
          />
        </>
      ) : null}
    </div>
  );
}
