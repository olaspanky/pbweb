import Image from "next/image";
import image from "@/assets/images/inv1.png";
import image2 from "@/assets/images/inv2.png";
import H2 from "@/components/Typography";

export default function OurDifferenceSection() {
return ( 
<div className="flex flex-col">
<section id="difference" className="py-5 sm:py-12 "> <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
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
      <div className="absolute inset-0  rounded-xl -z-10 lg:hidden" />
      
      <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
       What it is
      </H2>

      <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
INVISIO™ is a powerful analytics platform that illuminates the critical link between clinical diagnosis and prescribing behavior. By integrating anonymized patient diagnosis data with prescription records, we reveal how diseases are truly treated across different medical specialties, brands, and patient types.  
</p>  </div>
  </div>
</section>
<section id="difference" className="py-5 sm:py-12 "> 
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">



    {/* Text Content */}
    <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6">
      {/* Optional overlay for readability */}
      <div className="absolute inset-0  rounded-xl -z-10 lg:hidden" />
      
      <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
Designed for      </H2>

      <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
Prescription-driven pharmaceutical brands, medical affairs professionals, market access teams, and strategists who need to understand the "why" behind the prescription.</p>
</div>
    {/* Image */} <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]"> 
<Image
         src={image2}
         alt="Man pointing to statistics"
         fill
         className="object-cover object-top"
       /> </figure>
  </div>
</section>

</div>


);
}
