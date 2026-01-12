import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
      <h2 className="text-gray-900 text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-12">
        What a Pharma Industry expert has to say about PBR Life Science
      </h2>

      <div className="relative flex items-center justify-center gap-4 md:gap-8">
        {/* Left Arrow - hidden on very small screens */}
        <button
          className="hidden sm:flex flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full 
                     bg-blue-50 hover:bg-blue-100 items-center justify-center transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Main Content Card */}
        <div
          className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 
                     p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8 lg:items-center"
        >
          {/* Video Section */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="aspect-video rounded-xl overflow-hidden bg-black/5">
              <VideoPlayer
                src="/videos/part.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 md:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gray-400 transform rotate-45" />
                <span className="text-2xl font-bold text-red-500">gdm</span>
              </div>
              <span className="text-gray-500 text-sm sm:text-base">nigeria</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              "In this testimonial, the Dexa team shares how they utilize, our SaaS/DaaS platform, to gain actionable insights from pharmaceutical market data enabling their plan into pharmaceutical manufacturing in Nigera and also making other smarter sales strategies."
            </p>

            {/* Author */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl">
                Mr Emmanuel Maduke
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">GM Sales & Marketing</p>
            </div>
          </div>
        </div>

        {/* Right Arrow - hidden on very small screens */}
        <button
          className="hidden sm:flex flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full 
                     bg-blue-600 hover:bg-blue-700 items-center justify-center transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;