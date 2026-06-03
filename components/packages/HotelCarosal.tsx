"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  children: React.ReactNode;
};

export function HotelCarousel({ children }: Props) {
  const [emblaRef] = useEmblaCarousel(
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

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}
