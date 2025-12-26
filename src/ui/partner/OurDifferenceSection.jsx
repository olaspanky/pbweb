import Image from "next/image";
import image from "@/assets/images/pt1.png";
import image2 from "@/assets/images/pt2.png";
import H2 from "@/components/Typography";

export default function OurDifferenceSection() {
  return (
    <div className="flex flex-col">
      {/* =================== SECTION 1 =================== */}
      <section className="py-5 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          {/* Image */}
          <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src={image}
              alt="Man pointing to statistics"
              fill
              className="object-cover object-top"
            />
          </figure>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6">
            <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
              Your Pharmacy. Your Impact. Powered by Data.
            </H2>

            <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
              As a community pharmacy, you are already a vital part of the
              healthcare system. With PBR Life Sciences, your data can go even
              further by helping researchers and organizations make
              evidence-based decisions that improve public health.
            </p>
          </div>
        </div>
      </section>

      {/* =================== SECTION 2 =================== */}
      <section className="py-5 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-semibold text-grey-900">Designed for</h3>
              <p className="text-grey-700 text-base text-justify font-medium">
                Pharmaceutical brand managers, commercial strategy teams, pricing
                and revenue management specialists, and sales leadership seeking
                to validate performance with ground-truth data.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-semibold text-grey-900">Enjoy rewards</h3>
              <p className="text-grey-700 text-base text-justify font-medium">
                Earn benefits for participating—from direct incentives to early
                access to new services.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-semibold text-grey-900">Guaranteed privacy</h3>
              <p className="text-grey-700 text-base text-justify font-medium">
                All data collected is fully anonymised, secured, and handled with
                your pharmacy’s data security in mind. We use trusted AWS
                infrastructure and strictly comply with data regulations including
                the Nigeria Data Protection Act (NDPA), Ghana’s Data Protection
                Act, and the EU’s General Data Protection Regulation (GDPR).
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src={image2}
              alt="Pharmacy data illustration"
              fill
              className="object-cover object-top"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
