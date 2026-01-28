

'use client';

import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

import HeroImage1 from "@/assets/images/wp.png";

const slides = [
  {
    image: HeroImage1,
    title: (
      <>
     Unlock Intelligence, Drive Impact,
Shape the
            <span className="text-brand-gold"> Future</span>
      </>
    ),
    subtitle: "Access our expertly curated whitepaper covering trends, data, and forecasts across priority therapeutic areas empowering investors, healthcare leaders, and policymakers with actionable insights.",
  },
 

];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 15000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10">
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {slides.map((slide, index) => (
              <div
                className="embla__slide relative flex-[0_0_100%] min-w-0"
                key={index}
              >
                <Image
                  src={slide.image}
                  fill
                  alt={`Hero slide ${index + 1}`}
                  className="object-cover object-center"
                  priority={index === 0}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/80 to-brand-light-blue/10" />
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Dynamic Hero Content - Vertically Centered */}
      <div className="relative z-20 h-screen flex items-center pt-24 lg:pt-32">
        <div className="max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-20 mx-auto w-full flex flex-col gap-6 md:gap-8">
          <h1 className="text-grey-0 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug md:leading-tight animate-fade-in w-full md:w-[85%]">
            {slides[selectedIndex].title}
          </h1>

          <p className="text-grey-0 text-base sm:text-lg md:text-xl  animate-fade-in delay-150 md:w-[70%] ">
            {slides[selectedIndex].subtitle}
          </p>

          {/* Active Dots */}

         <div className="flex flex-wrap gap-5 items-center">
  {/* Solid Blue Button - View Reports */}
  <button
    onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
    className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200 shadow-sm"
  >
    View Reports
  </button>

  {/* Outline Button - View Archive */}
  <button
    onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
    className="px-8 py-3 border border-sky-500 text-sky-500 font-semibold rounded-lg hover:bg-sky-500 hover:text-white transition-colors duration-200 shadow-sm"
  >
    View Archive
  </button>
</div>
        
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .delay-150 {
          animation-delay: 15s;
        }
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          transform-origin: left;
          animation: progress 15s linear forwards;
        }
      `}</style>
    </header>
  );
}