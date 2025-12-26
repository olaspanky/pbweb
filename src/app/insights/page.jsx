import BackedBy from "@/components/BackedBy";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/ReportSearchBar";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/insight/CareersSection";
import HeroSection from "@/ui/insight/HeroSection";
import OurDifferenceSection from "@/ui/insight/OurDifferenceSection";

export default function Page() {
  return (
    <div className="w-[100vw] ">
      <SectionObserverProvider>
        <div className="z-40">
          <HeroSection />
        </div>
        {/* Correctly observed sections */}
        <div className="mt-[-48] z-99">
          <OurDifferenceSection />
        </div>

        <ContactCard />
        <Footer />
      </SectionObserverProvider>
    </div>
  );
}
