"use client";

import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import HeroSection from "@/ui/versus/HeroSection";
import OurDifferenceSection from "@/ui/versus/OurDifferenceSection";
import OurSolutions from "@/ui/versus/OurSolutionsSection";

export default function Page() {
  return (
    <SectionObserverProvider>
      {/* Hero – no animation */}
      <HeroSection />

      {/* All other sections – no animation */}
      <ObservedSection id="difference">
        <OurDifferenceSection />
      </ObservedSection>

      <ObservedSection id="solutions">
        <OurSolutions />
      </ObservedSection>

     

      {/* Contact Card & Footer – no animation */}
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}