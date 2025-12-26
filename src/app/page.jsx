import BackedBy from "@/components/BackedBy2";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/SectionNavigation";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/homepage/CareersSection";
import HeroSection from "@/ui/homepage/HeroSection";
import InsightsSection from "@/ui/homepage/InsightsSection";
import OurDifferenceSection from "@/ui/homepage/OurDifferenceSection";
import OurSolutions from "@/ui/homepage/OurSolutionsSection";
import PartnersSection from "@/ui/homepage/PartnersSection";
import ProductsSection from "@/ui/homepage/ProductsSection";

export default function Page() {
  return (
    <div className="w-[100vw] ">
      
      <SectionObserverProvider>
        <HeroSection />


        <BackedBy />

        {/* Correctly observed sections */}
        <ObservedSection id="difference">
          <OurDifferenceSection />
        </ObservedSection>

        <ObservedSection id="solutions">
          <OurSolutions />
        </ObservedSection>

        <ObservedSection id="products">
          <ProductsSection />
        </ObservedSection>

         <ObservedSection id="expertise">
          <PartnersSection />
        </ObservedSection>

        {/* <ObservedSection id="insights">
          <InsightsSection />
        </ObservedSection> */}

       

        <ObservedSection id="careers">
          <CareersSection />
        </ObservedSection>

        <ContactCard />
        <Footer />
      </SectionObserverProvider>
    </div>
  );
}
