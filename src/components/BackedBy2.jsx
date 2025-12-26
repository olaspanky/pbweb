"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/lo1.png" },
  { src: "/logos/lo2.png" },
  { src: "/logos/lo4.png" },
  { src: "/logos/lo5.png" },
  { src: "/logos/lo6.png" },
  { src: "/logos/lo7.png" },
  { src: "/logos/lo8.png" },
  { src: "/logos/lo9.png" },
  { src: "/logos/lox.png" },
];

export default function BackedBy() {
  return (
    <div>
      {/* Header */}
      <div className="py-6 bg-gradient-to-r from-brand-dark-blue via-brand-blue/90 to-brand-light-blue/30">
        <p className="text-grey-0 text-center text-xl md:text-2xl font-semibold">
          Trusted by companies in Life Sciences
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden bg-white">
        <div className="py-6 animate-marquee whitespace-nowrap bg-white">
          <div className="inline-flex items-center gap-16 md:gap-32 px-6 md:px-18 bg-white">

            {/* First Loop */}
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70px] h-[40px] md:w-[90px] md:h-[50px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt="Backed by"
                  width={120}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}

            {/* Duplicate Loop */}
            {logos.map((logo, i) => (
              <div
                key={i + logos.length}
                className="flex-shrink-0 w-[70px] h-[40px] md:w-[90px] md:h-[50px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt="Backed by"
                  width={90}
                  height={50}
                  className="object-contain w-full h-full"
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
