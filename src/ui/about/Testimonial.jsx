import React from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import H2 from "@/components/Typography";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  return (
    <div className="max-w-[1440px] px-18 mx-auto py-20 flex flex-col gap-12">
      <h2 className="text-grey-900 text-center font-bold text-3xl">
What a Pharma Industry expert has to say about PBR Life Science      </h2>

      <div className="relative flex items-center gap-8">
        {/* Left Arrow */}
        <button className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors">
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex gap-8 items-center">
          {/* Video Section */}
          <div className="w-1/2 flex-shrink-0">
            <div className="rounded-xl overflow-hidden">
              <VideoPlayer
                src="/videos/part.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-1/2 flex flex-col gap-6">
            {/* GDM Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gray-400 transform rotate-45"></div>
                <span className="text-2xl font-bold text-red-500">gdm</span>
              </div>
              <span className="text-gray-500">nigeria</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud"
            </p>

            {/* Person Info */}
            <div>
              <h3 className="text-gray-900 font-semibold text-xl">Sameer Rai</h3>
              <p className="text-gray-500">Product Head</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

export default Testimonial