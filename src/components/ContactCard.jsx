import Image from "next/image";
import image1 from "@/assets/images/contact-1.jpg";
import Button from "./Button";

export default function ContactCard() {
  return (
    <section className="relative px-6 md:px-12 lg:px-18 py-16 md:py-24 flex flex-col items-center gap-8 md:gap-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark-blue/80 via-brand-blue/80 to-brand-light-blue/10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={image1}
          fill
          alt="Image of Business Meeting"
          className="object-cover"
          placeholder="blur"
        />
      </div>

      {/* Content */}
      <div className="text-center text-grey-0 flex flex-col gap-3 px-4 md:px-0">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="font-medium text-base md:text-lg">
          Partner with us for expert guidance and strategies that drive growth
          and success.
        </p>
      </div>

      {/* Button */}
      <Button
        content={{ label: "Contact Us", to: "/contact" }}
        className="border border-grey-0 bg-transparent mt-4"
      />
    </section>
  );
}
