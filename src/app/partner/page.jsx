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

      <FAQSection/>

    
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}