"use client";

import { useEffect, useRef, useState } from "react";
import H2 from "@/components/Typography";
import Image from "next/image";
import image1 from "@/assets/images/solutions-1.jpg";

export default function OurSolutions() {
  const solutions = [
    {
      title: "Pbr Life Sciences Market Data & Intelligence Platforms",
      desc: "Cutting-edge, AI-powered digital platforms that provide multi-variate, multi-channel real-world market insights for pharmaceutical and healthcare industries.",
      color: "text-brand-blue",
      highlightBorder: false,
    },
    {
      title: "Pbr Life Sciences Analytics & Advisory",
      desc: "Providing customized data solutions, forecasting models, and strategic recommendations for life sciences companies operating in emerging markets.",
      color: "text-brand-green",
      highlightBorder: true,
    },
    {
      title: "Pbr Global Health Analytics & Advisory",
      desc: "Delivering deep market intelligence and strategic advisory services to global health organisations, policymakers, and private sector players.",
      color: "text-brand-light-blue",
      highlightBorder: false,
    },
    {
      title: "Pbr Research Consultancy",
      desc: "In-depth qualitative and quantitative research for global and emerging markets.",
      color: "text-brand-blue",
      highlightBorder: false,
    },
    {
      title: "Pbr Health Systems Intelligence",
      desc: "Helping governments and NGOs strengthen healthcare delivery using data-driven insights.",
      color: "text-brand-green",
      highlightBorder: false,
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Centered item

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // Detect when the item is centered
      }
    );

    const items = container.querySelectorAll(".solution-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="max-w-[1440px] px-6 md:px-12 lg:px-18 mx-auto ">
      <div className="bg-grey-100 px-6 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col gap-10 md:gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <H2>Our Solutions</H2>
          <p className="text-grey-700 font-medium">
PBR Life Sciences delivers evidence-based insights that help pharmaceutical companies make smarter decisions in emerging markets. By combining proprietary data platforms with deep local expertise, we translate complex market signals into clear answers what to launch, where to launch, and how to win.          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Scrollable Solutions */}
          <div
            ref={containerRef}
            className="flex flex-col gap-6 max-h-[500px] overflow-y-scroll no-scrollbar"
          >
            {solutions.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={idx}
                  data-index={idx}
                  className={`solution-item flex flex-col gap-3 px-6 md:px-10 py-6 rounded-xl bg-grey-0 transition-all duration-300
                    ${isActive ? "border-2 border-brand-light-blue scale-[1.02]" : "border border-transparent"}
                  `}
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold uppercase ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-grey-700 font-medium">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <figure className="rounded-xl overflow-hidden relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
            <Image src={image1} alt="Man with data laptop" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
