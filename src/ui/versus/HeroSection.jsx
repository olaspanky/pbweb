"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import HeroImage1 from "@/assets/images/vs.png";

const heroImages = [HeroImage1];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10 h-full">
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide relative flex-[0_0_100%] h-full"
              >
                <Image
                  src={image}
                  fill
                  alt={`Hero background ${index + 1}`}
                  className="object-cover object-center"
                  priority={index === 0}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/70 to-brand-light-blue/10" />
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Content - Now truly centered */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-[1440px] px-6 lg:px-18 mx-auto w-full flex flex-col gap-6 md:gap-3">
          <h1 className="text-grey-0 uppercase text-3xl sm:text-5xl lg:text-6xl w-full sm:w-[85%] md:w-[70%] font-medium leading-tight">
            VERSUS<sup className="text-xl sm:text-2xl">TM</sup>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-grey-0 max-w-2xl">
            Real-World Pharmacy Performance
          </p>
          <p className="text-base sm:text-lg md:text-lg text-grey-0 max-w-2xl">
            View the complete picture of your brand's journey at the pharmacy counter.
          </p>

          <Button content={{ to: "/", label: "Request A Demo" }} className="uppercase w-48" />
        </div>
      </div>
    </header>
  );
}