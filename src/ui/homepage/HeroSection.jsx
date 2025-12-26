// "use client";

// import Navigation from "@/components/Navigation";
// import Button from "@/components/Button";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import HeroImage1 from "@/assets/images/her2.png";
// import HeroImage2 from "@/assets/images/hero-2.png";

// const heroImages = [HeroImage1, HeroImage2];

// export default function HeroSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 5000, stopOnInteraction: false })]
//   );

//   return (
//     <header className="relative w-full h-screen overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 -z-10 h-full">
//         <div className="embla h-full w-full" ref={emblaRef}>
//           <div className="embla__container flex h-full">
//             {heroImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="embla__slide relative flex-[0_0_100%] h-full"
//               >
//                 <Image
//                   src={image}
//                   fill
//                   alt={`Hero background ${index + 1}`}
//                   className="object-cover object-center"
//                   priority={index === 0}
//                   placeholder="blur"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/70 to-brand-light-blue/10" />
//       </div>

//       {/* Navigation */}
//       <div className="absolute top-0 left-0 right-0 z-50">
//         <Navigation />
//       </div>

//       {/* Hero Content - Now truly centered */}
//       <div className="relative z-20 h-full flex items-center pt-24 lg:pt-48">
//         <div className="max-w-[1440px] px-6 lg:px-18 mx-auto w-full flex flex-col gap-6 md:gap-8">
//           <h1 className="text-grey-0 uppercase text-3xl sm:text-5xl lg:text-6xl w-full sm:w-[85%] md:w-[70%] font-medium leading-tight">
            // Transforming{" "}
            // <span className="text-brand-green">Healthcare</span> In Emerging
            // Markets Through{" "}
            // <span className="text-brand-gold">Intelligent Data</span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-grey-0 max-w-2xl">
//             Unlocking Insights to Improve Access, Efficiency, and Outcomes
//           </p>

//           <Button content={{ to: "/", label: "Learn More" }} className="uppercase w-48" />
          
//           {/* Slider Dots */}
        
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

import HeroImage1 from "@/assets/images/her2.png";
import HeroImage2 from "@/assets/images/hero-2.png";

const slides = [
  {
    image: HeroImage1,
    title: (
      <>
       Transforming{" "}
            <span className="text-brand-green">Healthcare</span> In Emerging
            Markets Through{" "}
            <span className="text-brand-gold">Intelligent Data</span>
      </>
    ),
    subtitle: "Unlocking Insights to Improve Access, Efficiency, and Outcomes",
  },
  {
    image: HeroImage2,
    title: (
      <>
       Advancing <span className="text-brand-green">Healthcare </span> through{" "}
            <span className="text-[#D3A352]">intelligence</span> 
      </>
    ),
    subtitle: "Transforming Data into Global Impact Across Emerging Markets" ,
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