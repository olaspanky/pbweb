import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "./icons/Socials";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-20 bg-brand-dark-blue relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Column 4 Navigation Columns */}
          <div className="flex flex-col gap-4 text-grey-0 font-medium text-sm md:text-base">
            <Link href="/about" className="hover:underline transition">About Us</Link>
            <Link href="/versus" className="hover:underline transition">Versus</Link>
            <Link href="/invisio" className="hover:underline transition">Inviso</Link>
            <Link href="/sonus" className="hover:underline transition">Sonus</Link>
            <Link href="/contact" className="hover:underline transition">Contact Us</Link>
            <Link href="/career" className="hover:underline transition">Career</Link>
          </div>

          <div className="flex flex-col gap-4 text-grey-0 font-medium text-sm md:text-base">
            <Link href="/versus" className="hover:underline transition">Products</Link>
            {/* Add more product links here if needed */}
          </div>

          <div className="flex flex-col gap-4 text-grey-0 font-medium text-sm md:text-base">
            <Link href="/solutions" className="hover:underline transition">Solutions</Link>
            {/* Add more solution links here if needed */}
          </div>

          <div className="flex flex-col gap-4 text-grey-0 font-medium text-sm md:text-base">
            <Link href="/insights" className="hover:underline transition">Insights</Link>
            {/* Add more testimonial links here if needed */}
          </div>

          {/* Contact & Socials Column */}
          <div className="flex flex-col gap-8 text-grey-0 font-medium text-sm md:text-base">
            <p className="leading-relaxed">
              Reach us at{" "}
              <Link 
                href="mailto:marketanalytics@pbrinsight.com" 
                className="hover:underline font-semibold transition"
              >
                marketanalytics@pbrinsight.com
              </Link>{" "}
              or through our online contact form.
            </p>

            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/PBR-Life-Sciences-61554007611436" aria-label="Facebook" className="hover:opacity-70 transition">
                <Facebook />
              </a>
              <a href="https://ng.linkedin.com/company/pbr-life-sciences" aria-label="LinkedIn" className="hover:opacity-70 transition">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/pbrlifesciences/?hl=en" aria-label="Instagram" className="hover:opacity-70 transition">
                <Instagram />
              </a>
              <a href="https://x.com/pbrlifesciences" aria-label="Twitter" className="hover:opacity-70 transition">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-grey-0/30 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-grey-0 font-medium text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <p>©{year} PBR Life Sciences.</p>
            <div className="flex items-center gap-3 sm:gap-4 text-sm">
              <Link href="#" className="hover:underline transition">Privacy</Link>
              <span className="text-grey-0/60">•</span>
              <Link href="#" className="hover:underline transition">Terms</Link>
              <span className="text-grey-0/60">•</span>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Countries */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm uppercase tracking-wider">
            <p>United Kingdom</p>
            <p>Nigeria</p>
            <p>Ghana</p>
            <p>Kenya</p>
          </div>
        </div>
      </div>

      {/* Optional subtle map background (uncomment if desired) */}
      {/* <Image
        src="/map.png"
        width={600}
        height={600}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      /> */}
    </footer>
  );
}