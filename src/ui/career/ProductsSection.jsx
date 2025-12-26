import { ArrowLeft, ArrowRight } from "@/components/icons/Icons";
import H2 from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="max-w-[1440px] px-18 mx-auto py-20 flex flex-col gap-12"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <H2>Data Solutions for Global Pharma Future</H2>
          <p className="text-grey-700 font-medium w-[80%]">
            Leverage our proprietary platforms to navigate 78 therapy areas and
            a $45.3B global antibiotics market with confidence.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-14 h-14 text-brand-light-blue hover:text-grey-0 hover:bg-brand-light-blue transition-all">
            <ArrowLeft className="h-7 w-7 stroke-current" />
          </button>
          <button className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-14 h-14 text-brand-light-blue hover:text-grey-0 hover:bg-brand-light-blue transition-all">
            <ArrowRight className="h-7 w-7 stroke-current" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="bg-brand-light-blue px-10 py-10 relative">
          <h3 className="text-3xl font-medium text-grey-0 mb-10">
            Data Platforms & Subscriptions
          </h3>

          <div className="flex flex-col gap-6 pb-30">
            <p className="text-grey-0 font-medium flex flex-col">
              <span className="mb-2">
                Turn complex data into actionable insights
              </span>
              <span>
                <strong>VERSUS</strong> – Retail Pharmacy Analytics (Nigeria)
              </span>
              <span>
                <strong>VERSUS Ghana</strong> – Retail Pharmacy Analytics
                (Ghana)
              </span>
              <span>
                <strong>Invisio</strong> – Hospital Analytics
              </span>
            </p>
            <Link href="#" className="text-grey-0 font-medium underline">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={250}
            height={250}
            alt="Mesh"
            className="absolute top-0 left-0"
          />
        </div>

        <div className="bg-grey-50 px-10 py-10 relative">
          <h3 className="text-3xl font-medium text-grey-900 mb-10">
            Analytics Engine
          </h3>

          <div className="flex flex-col gap-6 pb-20">
            <p className="text-grey-700 font-medium">
              <strong>Research data lab</strong> – A first of its kind
              all-in-one analytic engine designed to drive faster, safer, and
              more inclusive global health innovation from Africa
            </p>
            <Link
              href="#"
              className="text-brand-light-blue font-medium underline"
            >
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh2.svg"
            width={250}
            height={250}
            alt="Mesh"
            className="absolute bottom-0 right-0 opacity-80"
          />
        </div>

        <div className="bg-brand-gold px-10 py-10 relative">
          <h3 className="text-3xl font-medium text-grey-0 mb-10">
            Consulting & Market Insights
          </h3>

          <div className="flex flex-col gap-6 pb-20">
            <p className="text-grey-0 font-medium flex flex-col">
              <span className="mb-2">
                Expert guidance to unlock growth opportunities
              </span>
              <span className="mb-2">Market Intelligence Reports</span>
              <span>White Papers</span>
            </p>
            <Link href="#" className="text-grey-0 font-medium underline">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={250}
            height={250}
            alt="Mesh"
            className="absolute top-0 right-0 rotate-90"
          />
        </div>
      </div>
    </section>
  );
}

// flex flex-col gap-10
