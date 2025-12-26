import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import insights1 from "@/assets/images/insights-1.jpg";
import insights2 from "@/assets/images/insights-2.png";
import insights3 from "@/assets/images/insights-3.png";

export default function InsightsSection() {
return ( <section
   id="insights"
   className="max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto py-20 flex flex-col items-center gap-12"
 >
{/* Header */} <div className="flex flex-col gap-3 items-center text-center"> <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
Navigating Africa's Healthcare Evolution </H2> <p className="text-grey-700 font-medium max-w-3xl text-base sm:text-lg md:text-xl">
Gain from 200% revenue-backed insights across 10,958 SKUs and
Sub-Saharan Africa's dynamic pharmaceutical landscape. </p> </div>

  {/* Insights Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {[insights1, insights2, insights3].map((imgSrc, idx) => (
      <figure key={idx} className="rounded-xl overflow-hidden relative h-64 sm:h-80 md:h-96">
        <Image
          src={imgSrc}
          alt={`Insight ${idx + 1}`}
          fill
          className="object-cover object-top"
        />
        <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent absolute inset-0"></div>
        <figcaption className="absolute bottom-0 z-10 m-4 sm:m-6 text-grey-0 font-semibold text-sm sm:text-base md:text-lg">
          Lorem Ipsum has been the industry's standard dummy text
        </figcaption>
      </figure>
    ))}
  </div>

  {/* CTA Button */}
  <Button
    content={{ label: "Learn More", to: "/contact" }}
    className="uppercase mt-8"
  />
</section>

);
}
