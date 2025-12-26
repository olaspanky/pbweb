import React from "react";

const DifferentiatingEdge = () => {
const features = [
{
title: "Deep Roots in Emerging Markets",
description:
"We thrive where others hesitate, filling critical voids in real-world healthcare data across Africa and beyond. Sourcing anonymized insights directly from African pharmacies on drug quantities, purchase patterns, and market behaviors, we offer unparalleled local intelligence. This granular understanding of regulatory landscapes, commercial dynamics, and consumer realities equips our clients to navigate and conquer these high-potential markets with confidence.",
},
{
title: "AI-Powered Analytics",
description:
"Our robust AI and machine learning infrastructure turns millions of data points into instant, transformative analytics. Through generative AI, clients can pose natural language queries and receive tailored responses for pricing optimization, demand forecasting, and new product launches. This sophistication enables faster, smarter decisions that propel commercial success and patient impact.",
},
{
title: "Real-World Data as a Service",
description:
"Operating on a flexible Data-as-a-Service model, we deliver anonymized real-world evidence via intuitive dashboards, subscriptions, bespoke reports, and expert consultancy. Beyond raw data, our platform generates real-world evidence tailored for strategic planning, ensuring life sciences leaders gain a competitive edge in commercial execution and beyond.",
},
{
title: "Local Insight Meets Global Acumen",
description:
"Our team unites pharmacy professionals, medical experts, data scientists, and seasoned consultants, many with direct experience from giants like Pfizer, AstraZeneca, and GSK. Led by founder Ayodeji Alaran, we maintain a strong on-the-ground presence in Lagos, Sub-Saharan Africa, complemented by an international network. This fusion of local nuance and multidisciplinary prowess delivers holistic solutions attuned to the unique rhythms of emerging healthcare ecosystems.",
},
{
title: "Unmatched Scale",
description:
"Backed by a proprietary repository encompassing over 50 million pharmaceutical data points, 10,000+ brands, and performance metrics for 1,500+ companies, our assets form the bedrock for reliable, predictive analytics. This depth ensures our insights are not only comprehensive but also scalable, supporting everything from tactical operations to visionary R&D.",
},
{
title: "Traction, Growth, and Trusted Partnership",
description:
"With $1 million in pre-seed funding from esteemed backers like Techstars, Launch Africa, and ARM Labs, we've achieved explosive 200% revenue growth since 2023. Serving marquee clients including Sanofi and Roche, we validate our model daily turning emerging market challenges into opportunities for sustainable expansion.",
},
];

return ( <section className="relative py-24 sm:py-32">
{/* Background wrapper with inline style */}
<div
className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 relative"
style={{
backgroundImage: `url("/bg1.png")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
> <div className="relative z-10">
{/* Header */} <div className="text-center mb-16"> <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
Our Differentiating Edge: Connected Intelligence for Emerging Markets </h2> <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
What sets PBR Life Sciences apart is our unique blend of localized expertise, cutting-edge technology, and vast proprietary data assets. We don't just provide data; we connect it with advanced AI to accelerate decision-making from market entry strategies to product forecasting, delivering results in minutes, not months. </p> </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


);
};

export default DifferentiatingEdge;
