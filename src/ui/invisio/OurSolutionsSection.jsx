import React from "react";
import { FileText, GitBranch, ClipboardCheck, LayoutGrid, RefreshCw } from "lucide-react";

const PrescriberInsightsGrid = () => {
  const features = [
    {
      icon: FileText,
      title: "Decipher Prescriber Motivations",
      description:
        "Identify the specific patient diagnoses that lead to prescriptions for your brand versus competitors.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: GitBranch,
      title: "Map Treatment Pathways",
      description:
        "Understand physician behavior and treatment preferences across specialties and regions.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: ClipboardCheck,
      title: "Generate Real-World Evidence",
      description:
        "Build a robust case to guide brand strategy, launch planning, and scientific engagement with healthcare professionals.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: LayoutGrid,
      title: "Evaluate Engagement ROI",
      description:
        "Measure how effectively medical and marketing activities translate into changed prescribing patterns.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: RefreshCw,
      title: "Forecast Patient Flow",
      description:
        "Model future brand demand based on actual diagnosis rates and treatment initiation patterns.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-3 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
         <div className="text-left lg:text-center mb-16 mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            How it Drives Decision-Making:
          </h2>
        </div>

        {/* Features Grid - 3 columns on desktop, 5 items total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                {/* Icon */}
                <div className={`${feature.color} rounded-full p-4 mb-6`}>
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrescriberInsightsGrid;