"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons/Icons";
import H2 from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth =
      scrollRef.current.firstChild?.clientWidth ||
      scrollRef.current.firstElementChild?.clientWidth ||
      350;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cardWidth =
        container.firstChild?.clientWidth ||
        container.firstElementChild?.clientWidth ||
        350;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="products"
      className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-18 py-16 md:py-20 flex flex-col gap-12"
    >
      {/* ======================== TOP SECTION ======================== */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        <div className="flex flex-col gap-3 w-full md:w-[70%]">
          <H2>Data Solutions for Global Pharma Future</H2>

          <p className="text-grey-700 font-medium w-full md:w-[80%] leading-relaxed">
            Leverage our proprietary platforms to navigate 78 therapy areas and
            a $45.3B global antibiotics market with confidence.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-12 h-12 md:w-14 md:h-14 text-brand-light-blue hover:bg-brand-light-blue hover:text-grey-0 transition"
          >
            <ArrowLeft className="h-6 w-6 md:h-7 md:w-7 stroke-current" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-12 h-12 md:w-14 md:h-14 text-brand-light-blue hover:bg-brand-light-blue hover:text-grey-0 transition"
          >
            <ArrowRight className="h-6 w-6 md:h-7 md:w-7 stroke-current" />
          </button>
        </div>
      </div>

      {/* ======================== HORIZONTAL SCROLL SECTION ======================== */}
      <div
        ref={scrollRef}
        className="
          grid grid-flow-col 
          auto-cols-[85%] sm:auto-cols-[50%] lg:auto-cols-[33%] 
          gap-6 overflow-x-auto snap-x snap-mandatory px-1
          no-scrollbar
        "
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Edge
        }}
      >
        {/* FORCE HIDE SCROLLBAR */}
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* ======================== CARD 1 ======================== */}
        <div className="bg-brand-light-blue px-8 md:px-10 py-10 relative snap-start rounded-xl min-h-[360px] flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-grey-0 mb-8">
              Data Platforms & Subscriptions
            </h3>

            <p className="text-grey-0 font-medium flex flex-col gap-2 mb-6">
              <span>Turn complex data into actionable insights</span>
              <span>
                <strong>VERSUS</strong> – Retail Pharmacy Analytics (Nigeria)
              </span>
              <span>
                <strong>VERSUS Ghana</strong> – Retail Pharmacy Analytics (Ghana)
              </span>
              <span>
                <strong>Invisio</strong> – Hospital Analytics
              </span>
            </p>

            <Link href="/versus" className="text-grey-0 underline font-medium">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={220}
            height={220}
            alt="Decor"
            className="absolute top-0 left-0 opacity-60 pointer-events-none"
          />
        </div>

        {/* ======================== CARD 2 ======================== */}
        <div className="bg-grey-50 px-8 md:px-10 py-10 relative snap-start rounded-xl min-h-[360px] flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-grey-900 mb-8">
              Analytics Engine
            </h3>

            <p className="text-grey-700 font-medium leading-relaxed mb-6">
              <strong>Research Data Lab</strong> – A first-of-its-kind analytic
              engine designed to drive faster, safer, and more inclusive global
              health innovation from Africa.
            </p>

            <Link
              href="https://researchdatalab.pbrinsight.com/"
              className="text-brand-light-blue underline font-medium"
            >
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh2.svg"
            width={220}
            height={220}
            alt="Decor"
            className="absolute bottom-0 right-0 opacity-70 pointer-events-none"
          />
        </div>

        {/* ======================== CARD 3 ======================== */}
        <div className="bg-brand-gold px-8 md:px-10 py-10 relative snap-start rounded-xl min-h-[360px] flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-grey-0 mb-8">
              Consulting & Market Insights
            </h3>

            <p className="text-grey-0 font-medium flex flex-col gap-2 mb-6">
              <span>Expert guidance to unlock growth opportunities</span>
              <span>Market Intelligence Reports</span>
              <span>White Papers</span>
            </p>

            <Link href="#" className="text-grey-0 underline font-medium">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={220}
            height={220}
            alt="Decor"
            className="absolute top-0 right-0 rotate-90 opacity-60 pointer-events-none"
          />
        </div>

        {/* ======================== CARD 4 ======================== */}
        <div className="bg-grey-50 px-8 md:px-10 py-10 relative snap-start rounded-xl min-h-[360px] flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-8">
              Embedded Finance & Business Tools
            </h3>

            <p className="text-black font-medium flex flex-col gap-2 mb-6">
              <span>Financial solutions tailored for healthcare providers</span>
              <span>Easystock – Smart financing for retail pharmacy stock</span>
            </p>

            <Link
              href="/solutions"
              className="text-brand-light-blue underline font-medium"
            >
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={220}
            height={220}
            alt="Decor"
            className="absolute top-0 right-0 rotate-90 opacity-60 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
