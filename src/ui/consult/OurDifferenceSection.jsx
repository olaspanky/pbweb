import Image from "next/image";
import HeroImage1 from "@/assets/images/cl2.png";
import HeroImage2 from "@/assets/images/cl1.png";
import HeroImage4 from "../../assets/images/cl4.png";
import stats from "../../assets/images/stats.png"
import g1 from "../../../public/images/g1.png"
import g2 from "../../../public/images/g2.png"
import g3 from "../../../public/images/g3.png"
import g4 from "../../../public/images/g4.png"
import Cards from "../../components/Cards"
import Button from "@/components/Button";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="flex  flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto px-6 py-9">
          {/* Left: Image */}
          <div className=" lg:w-7/12 w-full relative h-96 bg-gray-200 rounded-lg overflow-hidden z-20">
            {/* Replace with your image */}
            <Image
              src={HeroImage2}
              fill
              className="object-cover object-center "
              placeholder="blur"
            />{" "}
          </div>

          {/* Right: Content */}
          <div className="bg-gray-50 p-8 border border-[#51BC4A] shadow-sm lg:ml-[-96] z-99">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              What We Help You Achieve
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. Decide Where to Play:
                </h3>
                <p className="text-gray-600 text-sm">
                  Market & portfolio segmentation, opportunity sizing, country
                  entry sequencing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. Decide How to Win:
                </h3>
                <p className="text-gray-600 text-sm">
                  Pricing & pack strategy, RWE/HEOR evidence, market access
                  strategy, KOL engagement models.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Scale Fast & Stay in Control:
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time commercial dashboards, omnichannel orchestration,
                  field + call-center execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Core Solutions Section */}
      <section
        className="py-5 
      "
      >
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 relative"
          style={{
            backgroundImage: `url("/bg.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/80 z-30"></div>

          <div className="relative z-99">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Core Solutions
              </h2>
              <p className="text-white max-w-2xl">
                Understand your data better and act on it for free from the same
                secure platform you use to run your business.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className=" p-8  shadow-sm hover:shadow-md transition-shadow border border-white/20 rounded-2xl ">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  GTM & Evidence for Emerging Markets
                </h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Market & portfolio prioritization</li>
                  <li>• Pricing & reimbursement strategy</li>
                  <li>• RWE/HEOR programs</li>
                  <li>• Product registration & distributor design</li>
                </ul>
              </div>

              {/* Solution 2 */}
              <div className=" p-8  shadow-sm hover:shadow-md transition-shadow border border-white/20 rounded-2xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  HCP & Patient Engagement
                </h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• SONUS e-consent</li>
                  <li>• Call Centre as a Service</li>
                  <li>• Druglied patient support programs</li>
                  <li>• Digital pharmacovigilance</li>
                </ul>
              </div>

              {/* Solution 3 */}
              <div className=" p-8 shadow-sm hover:shadow-md transition-shadow border border-white/20 rounded-2xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Commercial Intelligence & Omnichannel Performance
                </h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Performance Mgt dashboards</li>
                  <li>• Sales Navigator CRM</li>
                  <li>• Campaign Tracker</li>
                  <li>• Real-time resource allocation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PBR Section */}
      <section className=" text-white py-5">
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 relative"
          style={{
            backgroundImage: `url("/bg1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Why Emerging-Market Leaders Choose PBR
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Africa Real-World Data
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Emerging-markets real-world data assets, including pharmacy
                  sell-out, hospital, claims and programme data from markets
                  across Asia, Africa, Latin America & Europe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Local Realities, Global Rigor
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Proven in-market experience translating local realities like
                  resource constraints, regulatory and registration
                  requirements, and infrastructure constraints into practical
                  GTM and engagement models that can scale across emerging
                  markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Strategy, Tech & Execution
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Integrated consulting + technology + operations: strategy,
                  platforms and call-centre/field execution in one stack.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Compliance by Design</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Data governance, pharma/intelligence-aligned processes and
                  traceable e-consent across channels, aligned with local and
                  international standards.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className=" w-full relative h-96 bg-gray-200 rounded-lg overflow-hidden z-20">
              {/* Replace with your image */}
              <Image
                src={HeroImage1}
                fill
                className="object-cover object-center "
                placeholder="blur"
              />{" "}
            </div>
          </div>
        </div>
      </section>

  

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How We Work
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    1. Start with Your Real Questions - <span className="font-normal"> We frame the work around the decisions your regional and
                    country leadership actually need to make now.</span>
                  </h3>
                
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    2. Co-Design a Practical Roadmap - <span className="font-normal"> Strategy, evidence, technology, and execution in one aligned plan.</span>
                  </h3>
                
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    3. Implement, Measure, Refine - <span className="font-normal"> We stay in the market with you with dashboards, field teams, call centers – until results are locked in.</span>
                  </h3>
                 
                </div>
              </div>

                <div className="hidden md:block">
                        <Button content={{ label: "LEARN MORE", to: "/contact" }} />
                      </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with your image */}
              <div className=" w-full relative h-96 bg-gray-200 rounded-lg overflow-hidden z-20">
                {/* Replace with your image */}
                <Image
                  src={HeroImage4}
                  fill
                  className="object-cover object-center "
                  placeholder="blur"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row">
           <div className=" w-full relative  rounded-lg overflow-hidden z-20">
               <Cards />
              </div>
          {/* Experience Section */}
          <div className=" text-left flex flex-col justify-center items-center ">
        
            <h3 className="text-4xl font-bold text-blue-900 mb-4">
              100+ years put together experience
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Validated by investors, accelerating with global leaders, and
              already delivering results across high-growth markets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
