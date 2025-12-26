import React from "react";
import { BarChart3, FileText, Building2, Infinity, Globe, Lightbulb } from "lucide-react";

const DecisionMakingGrid = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Track Performance in Real-Time",
      description:
        "Monitor brand sales, volume, and market share as they happen, moving beyond shipment data to true consumption.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "Unpack Formulation & Pricing Trends",
      description:
        "Analyze SKU-level performance and understand how price positioning influences uptake and market competitiveness.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Building2,
      title: "Measure Commercial Impact",
      description:
        "Quantify the direct effect of marketing campaigns and sales force activities on pharmacy dispense.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Infinity,
      title: "Forecast with Confidence",
      description:
        "Leverage historical and real-time data to build more accurate demand forecasts.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Identify New Opportunities",
      description:
        "Spot gaps in the market for new formulations or uncover under-served geographic areas for distribution expansion.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Navigate New Markets",
      description:
        "Access country-specific insights to plan international launches with precision.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
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

        {/* Features Grid */}
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

export default DecisionMakingGrid;