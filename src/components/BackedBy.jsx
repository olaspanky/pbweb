'use client';

import Image from "next/image";

const logos = [
  { src: "/logos/xa-africa.png",      width: 50 },
  { src: "/logos/techstars.png",      width: 50 },
  { src: "/logos/octerra.png",        width: 60 },
  { src: "/logos/microtraction.png",  width: 30 },
  { src: "/logos/microsoft.png",      width: 75 },
  { src: "/logos/marula.png",         width: 35 },
  { src: "/logos/launch-africa.png",  width: 50 },
  { src: "/logos/aws.png",            width: 35 },
];

export default function BackedBy() {
  return (
    <div>
      {/* Header */}
      <div className="py-6 bg-gradient-to-r from-brand-dark-blue via-brand-blue/90 to-brand-light-blue/30">
        <p className="text-grey-0 text-center text-xl md:text-2xl font-semibold">
We are backed by        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden">
        <div className="py-6 animate-marquee whitespace-nowrap">
          <div className="inline-flex items-center gap-16 md:gap-32 px-6 md:px-18">

            {/* First Loop */}
            {logos.map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt="Backed by"
                  width={logo.width}
                  height={30}
                  className="w-[32px] sm:w-[48px] md:w-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate Loop for infinite scroll */}
            {logos.map((logo, i) => (
              <div key={i + logos.length} className="flex-shrink-0 ml-6 md:ml-12">
                <Image
                  src={logo.src}
                  alt="Backed by"
                  width={logo.width}
                  height={30}
                  className="w-[32px] sm:w-[48px] md:w-auto object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
