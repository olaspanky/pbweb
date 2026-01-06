"use client";

import BackedBy from "@/components/BackedBy2";
import ContactCard from "@/components/ContactCard";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import HeroSection from "@/ui/partner/HeroSection";
import OurDifferenceSection from "@/ui/partner/OurDifferenceSection";


export default function Page() {
  return (
    <SectionObserverProvider>

      {/* Hero – no animation */}
      <HeroSection />

      

      {/* All other sections – no animation */}
      <ObservedSection id="difference">
        <OurDifferenceSection />
      </ObservedSection>

      <FAQSection/>

    
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}