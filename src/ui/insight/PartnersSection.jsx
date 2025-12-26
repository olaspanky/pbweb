import Button from "@/components/Button";
import H2 from "@/components/Typography";
import VideoPlayer from "@/components/VideoPlayer";

export default function PartnersSection() {
  return (
    <section className="max-w-[1440px] px-6 md:px-12 lg:px-18 mx-auto py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
      
      {/* Text Column */}
      <div className="flex flex-col items-start gap-6">
        <H2>Partner with us Today!</H2>

        <p className="text-base md:text-lg text-justify text-grey-700 font-medium">
          Join over 1,000+ pharmacies in Nigeria, Ghana, and Kenya already
          partnering with PBR Life Sciences to share anonymized data, unlock
          powerful insights, and influence national health policy.
        </p>

        <Button
          content={{ label: "Learn More", to: "/partner" }}
          className="uppercase mt-2"
        />
      </div>

      {/* Video Column */}
      <div className="w-full rounded-xl overflow-hidden">
        <VideoPlayer
          src="/videos/partnership-video.mp4"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
