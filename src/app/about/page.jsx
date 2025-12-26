"use client";

import BackedBy from "@/components/BackedBy";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/SectionNavigation";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/about/CareersSection";
import HeroSection from "@/ui/about/HeroSection";
import InsightsSection from "@/ui/about/InsightsSection";
import OurDifferenceSection from "@/ui/about/OurDifferenceSection";
import OurSolutions from "@/ui/about/OurSolutionsSection";
import PartnersSection from "@/ui/about/PartnersSection";
import ProductsSection from "@/ui/about/ProductsSection";
import FreeReportsSection from "@/components/Reports";
import Testimonial from "@/ui/about/Testimonial";

export default function Page() {
  return (
    <SectionObserverProvider>

     <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      {/* Hero – no animation */}
      <HeroSection />

      {/* All other sections – no animation */}
      <ObservedSection id="difference">
        <OurDifferenceSection />
      </ObservedSection>

      <ObservedSection id="solutions">
        <OurSolutions />
      </ObservedSection>

      <ObservedSection id="partners">
        <div className="">
        <PartnersSection />

        </div>
      </ObservedSection>

      <ObservedSection id="insights">
        <FreeReportsSection />
      </ObservedSection>

      {/* Optional Careers section (still commented out as in your original) */}
      {/* <ObservedSection id="careers">
        <CareersSection />
      </ObservedSection> */}
<InsightsSection/>
<Testimonial/>


      {/* Contact Card & Footer – no animation */}
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}