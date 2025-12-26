"use client";

import { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "@/components/Button";

export default function HeroCarousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 -z-1" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative flex-none w-full h-full">
            {/* BACKGROUND IMAGE */}
            <Image
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover object-top -z-10"
              priority={idx === 0}
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/80 to-brand-light-blue/10 -z-5"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-18 max-w-[1440px] mx-auto gap-8">
              <h1
                className="text-grey-0 uppercase text-6xl w-[80%] font-medium"
                dangerouslySetInnerHTML={{ __html: slide.heading }}
              />
              <p className="text-2xl text-grey-0">{slide.subheading}</p>

              <Button content={slide.button} className="uppercase" />

              {/* DOT INDICATORS */}
              <div className="flex items-center gap-6 mt-16">
                {slides.map((_, dotIdx) => {
                  const isActive = emblaApi?.selectedScrollSnap() === dotIdx;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => emblaApi?.scrollTo(dotIdx)}
                      className={`h-4 w-4 rounded-full border border-grey-0 transition-all duration-300 ${
                        isActive ? "bg-brand-blue" : "bg-grey-0"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
