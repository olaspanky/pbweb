import React from 'react';
import { FileText, Stethoscope, TrendingUp, BookOpen, Grid3x3 } from 'lucide-react';



export default function PrescriberInsights() {
  const features = [
    {
      icon: FileText,
      title: 'Uncover Deep Prescriber Insights',
      description: 'Understand the underlying reasons from clinical differentiators to brand perception that drive brand choice.',
      color: 'bg-green-50'
    },
    {
      icon: Stethoscope,
      title: 'Identify Unmet Needs',
      description: 'Discover gaps and opportunities within a therapy area directly from those who treat it.',
      color: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Track Evolving Perceptions',
      description: 'Monitor shifts in prescriber behavior and sentiment with platform updates twice a year.',
      color: 'bg-green-50'
    },
    {
      icon: BookOpen,
      title: 'Optimize Resource Deployment',
      description: 'Assess the effectiveness of marketing materials and sales force strategy with direct feedback.',
      color: 'bg-blue-50'
    },
    {
      icon: Grid3x3,
      title: 'Refine Engagement Strategy',
      description: 'Guide messaging, targeting, and segmentation with qualitative insights straight from the field.',
      color: 'bg-blue-50'
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

