import React from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import H2 from "@/components/Typography";

const Testimonial = () => {
  return (
    <div       className="max-w-[1440px] px-18 mx-auto py-20 flex flex-col gap-12"
>
               <H2 className="text-grey-900 text-center  font-semibold">
What a Pharma Industry expert has to say about PBR Life Science </H2>

         <div className="w-full rounded-xl overflow-hidden ">
                <VideoPlayer
                  src="/videos/part.mp4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
    </div>
  )
}

export default Testimonial