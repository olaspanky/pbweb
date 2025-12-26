import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import img from "./../../../public/images/ab22.png";

export default function PartnersSection() {
return ( 
<section className="max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto py-20"> <div className="flex flex-col lg:flex-row items-center gap-12">
{/* Text Content */} <div className="flex flex-col items-start gap-6 lg:w-1/2"> <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
A Vision for Inclusive Innovation </H2>
      <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
        We envision a world where African and emerging market data enriches global healthcare, fostering equitable access to superior health decisions. By expanding to key hubs like Ghana and Kenya, integrating blockchain for secure data sharing, and contributing to drug discovery and clinical research, PBR Life Sciences is committed to representing diverse populations in life sciences advancements, creating a healthier, more inclusive tomorrow for all.
      </p>
    </div>

    {/* Image */}
    <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden relative">
      <Image
        src={img}
        alt="Man pointing to statistics"
        fill
        className="object-cover object-top"
      />
    </div>
  </div>
</section>

);
}
