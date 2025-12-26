import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import image1 from "@/assets/images/careers.jpg";

export default function CareersSection() {
  return (
    <section
      id="careers"
      className="max-w-[1440px] px-18 mx-auto pb-20 grid grid-cols-2 items-center gap-12"
    >
      <figure className="rounded-xl overflow-hidden aspect-square relative">
        <Image
          src={image1}
          width={400}
          height={400}
          alt="PBR Webinar Image"
          className="w-full h-full object-cover"
        />
        <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent h-full w-full absolute bottom-0"></div>
        <figcaption className="absolute bottom-0 z-1 m-8 text-grey-0 font-semibold text-lg">
          Join a team of expert to achieve exploits
        </figcaption>
      </figure>

      <div className="flex flex-col items-start gap-6">
        <p className="font-medium text-xl text-grey-900">Careers</p>

        <H2>Deliver industry-shaping value with us</H2>

        <p className="text-lg text-justify text-grey-700 font-medium">
          We believe in our people and the enormous value they bring to our
          clients. Join us as we passionately make a difference for patients,
          healthcare professionals, and the life science industry.
        </p>

        <Button
          content={{ label: "Apply Today", to: "/contact" }}
          className="uppercase"
        />
      </div>
    </section>
  );
}
