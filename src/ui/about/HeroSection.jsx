'use client';

import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

import HeroImage1 from "@/assets/images/ab1.png";
import HeroImage2 from "@/assets/images/ab2.png";
import HeroImage3 from "@/assets/images/ab3.png";
import HeroImage4 from "@/assets/images/ab4.png";
import HeroImage5 from "@/assets/images/ab5.png";

const slides = [
  {
    image: HeroImage5,
    title: (
      <>
        Empowering <span className="text-brand-green">Healthcare</span> Success in{" "}
        <span className="text-brand-gold">Emerging Markets</span>
      </>
    ),
    subtitle: "For healthcare organizations seeking to succeed in emerging markets, PBR Life Sciences is the intelligent data partner that transforms complex healthcare dynamics into actionable insights through AI-powered analytics and deep market understanding.",
  },
  {
    image: HeroImage1,
    title: (
      <>
       To Pioneer the Future of <span className="text-brand-green">Healthcare Intelligence </span> 
      </>
    ),
    subtitle: "Transforming Data into Global Impact Across Emerging Markets" ,
  },
  {
    image: HeroImage2,
    title: (
      <>
        Advancing <span className="text-brand-green">Global Healthcare </span> With Insight and  <span className="text-brand-gold">Intelligence</span> 
       
      </>
    ),
    subtitle: "To transform global healthcare through intelligent data, creating equal access to better health decisions worldwide.",
  },
  {
    image: HeroImage3,
    title: (
      <> 
       Our <span className="text-brand-green">Commitment</span>{" "} to  <span className="text-brand-gold">Excellence</span> and Integrity 
      </>
    ),
subtitle: "Innovation, Excellence, Customer-centricity, Integrity, Global perspective, Respect for people culture and environment", },
  {
    image: HeroImage4,
    title: (
      <>
        Powering <span className="text-brand-green">Strategic Advantage</span> Through <span className="text-brand-gold">Intelligent Data</span> 
      </>
    ),
    subtitle: "Grounded in local realities and built on a global standard of excellence, we provide the clarity you need to win in dynamic markets.",
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

          <p className="text-grey-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-2xl animate-fade-in delay-150">
            {slides[selectedIndex].subtitle}
          </p>

          {/* Active Dots */}
          <div className="flex items-center gap-3 md:gap-4 mt-5 md:mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`relative h-2.5 w-2.5 md:h-4 md:w-4 rounded-full overflow-hidden transition-all ${
                  index === selectedIndex
                    ? "bg-grey-0"
                    : "bg-grey-0/40 hover:bg-grey-0/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === selectedIndex && (
                  <span className="absolute inset-0 bg-brand-blue animate-progress" />
                )}
              </button>
            ))}
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