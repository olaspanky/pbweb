import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import image1 from "@/assets/images/del.png";

export default function CareersSection() {
  return (
    <section
      id="careers"
      className="max-w-[1440px] px-6 md:px-12 lg:px-18 mx-auto pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12"
    >
      {/* Image */}
      <figure className="rounded-xl overflow-hidden w-full aspect-square relative">
        <Image
          src={image1}
          width={400}
          height={400}
          alt="PBR Careers Image"
          className="w-full h-full object-cover"
        />
        <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent h-full w-full absolute bottom-0"></div>
        <figcaption className="absolute bottom-0 z-10 m-6 md:m-8 text-grey-0 font-semibold text-base md:text-lg">
          Join a team of experts to achieve exploits
        </figcaption>
      </figure>

      {/* Text */}
      <div className="flex flex-col items-start gap-6">
        <p className="font-bold text-xl md:text-xl text-grey-900">Careers</p>

        <H2>Deliver industry-shaping value with us</H2>

        <p className="text-base md:text-lg text-justify text-grey-700 font-medium">
          We believe in our people and the enormous value they bring to our
          clients. Join us as we passionately make a difference for patients,
          healthcare professionals, and the life science industry.
        </p>

        <Button
          content={{ label: "Apply Today", to: "/contact" }}
          className="uppercase mt-2"
        />
      </div>
    </section>
  );
}
