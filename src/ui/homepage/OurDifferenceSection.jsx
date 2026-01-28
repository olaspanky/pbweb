import Image from "next/image";
import image from "@/assets/images/difference.jpg";
import H2 from "@/components/Typography";
import Button from "@/components/Button";

export default function OurDifferenceSection() {
  return (
    <section id="difference" className="py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Image */}
          <figure className="rounded-xl overflow-hidden relative h-[350px] sm:h-[420px] ">
            <Image
              src={image}
              alt="Man pointing to statistics"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Stats card */}
            <figcaption className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-grey-0 px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-4 divide-y divide-brand-green rounded-lg shadow-md">
              {[
                { value: "8,269+", label: "Brands" },
                { value: "10,958+", label: "SKUs" },
                { value: "$1M", label: "Company Growth" },
                { value: "1000+", label: "Partnerships" },
              ].map((item) => (
                <p key={item.label} className="flex flex-col pt-4 first:pt-0">
                  <span className="text-xl sm:text-2xl font-semibold text-grey-900">
                    {item.value}
                  </span>
                  <span className="text-sm sm:text-base text-grey-700">
                    {item.label}
                  </span>
                </p>
              ))}
            </figcaption>
          </figure>

          {/* Text */}
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <div className="flex flex-wrap gap-y-2 font-medium text-base sm:text-lg text-grey-900">
              <span>
                Key statistics<span className="text-brand-green mx-2">|</span>
              </span>
              <span>
                Company Growth<span className="text-brand-green mx-2">|</span>
              </span>
              <span>Brand Coverage</span>
            </div>

            <H2>
              Pioneering Insights for Emerging Markets in Life Sciences
            </H2>

            <p className="text-base sm:text-lg text-grey-700 font-medium leading-relaxed">
              PBR Life Sciences captures the pulse of African pharmaceuticals
              with AI-powered analytics. Our data highlights a $1.01B Nigerian
              pharma market by 2028, driven by a population set to exceed 377
              million by 2050, yet challenged by 70% import reliance. 
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}
