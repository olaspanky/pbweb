"use client";

import BackedBy from "@/components/BackedBy2";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/SectionNavigation";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/about/CareersSection";
import HeroSection from "@/ui/consult/HeroSection";
import InsightsSection from "@/ui/consult/InsightsSection";
import OurDifferenceSection from "@/ui/consult/OurDifferenceSection";
import OurSolutions from "@/ui/consult/OurSolutionsSection";
import PartnersSection from "@/ui/consult/PartnersSection";
import ProductsSection from "@/ui/about/ProductsSection";

export default function Page() {
  return (
    <SectionObserverProvider>

  
      {/* Hero – no animation */}
      <HeroSection />

              <BackedBy />
      

      {/* All other sections – no animation */}
      <ObservedSection id="difference">
        <OurDifferenceSection />
      </ObservedSection>

    
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}