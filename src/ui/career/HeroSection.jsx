"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import HeroImage1 from "@/assets/images/caar.png";
import HeroImage2 from "@/assets/images/hero-2.png";

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
      <div className="relative z-20 h-full flex items-center pt-24 lg:pt-48">
        <div className="max-w-[1440px] px-6 lg:px-18 mx-auto w-full flex flex-col gap-6 md:gap-8">
          <h1 className="text-grey-0 uppercase text-3xl sm:text-5xl lg:text-6xl w-full sm:w-[85%] md:w-[98%] font-medium leading-tight">
           Deliver industry-shaping value with us
          </h1>

          <p className="text-base sm:text-lg md:text-2xl font-extrabold  text-grey-0 max-w-7xl">
Helping pharma and life sciences leaders decide where to play, how to win, and how to scale in emerging markets          </p>

          <p className="text-base sm:text-lg md:text-md text-grey-0 max-w-7xl">
We believe in our people and the enormous value they bring to our clients. Join us as we passionately make a difference for patients, healthcare professionals, and the life science industry.</p>

 <div className="flex flex-wrap gap-5 items-center  " >
      {/* Solid Blue Button */}
     <div className="hidden md:block">
              <Button content={{ label: "Get in Touch", to: "/contact" }} />
            </div>

   
    </div>
         
                
        </div>
      </div>
    </header>
  );
}