import Image from "next/image";
import image from "@/assets/images/ab21.png";
import H2 from "@/components/Typography";

export default function OurDifferenceSection() {
return ( <section id="difference" className="py-5 sm:py-12 bg-grey-50"> <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
{/* Image */} <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]"> 
<Image
         src={image}
         alt="Man pointing to statistics"
         fill
         className="object-cover object-top"
       /> </figure>

    {/* Text Content */}
    <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6">
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20 rounded-xl -z-10 lg:hidden" />
      
      <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
        Pioneering Data for a Healthier Future
      </H2>

      <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
        At PBR Life Sciences, we are dedicated to bridging the gaps in global healthcare by delivering intelligent, AI-powered analytics tailored to emerging markets. Our mission is to transform complex real-world data into precise, actionable insights that empower pharmaceutical companies, NGOs, and life sciences organizations to drive growth, innovation, and impact especially in underserved regions like Africa.
      </p>
    </div>
  </div>
</section>


);
}
