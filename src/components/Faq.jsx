import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0); // First question open by default

  const faqData = [
    {
      question: "What kind of data do you collect?",
      answer: "We collect anonymized prescription and sales data to help identify national healthcare trends. No personal or patient-level data is collected."
    },
    {
      question: "Do Pharmacies get compensated?",
      answer: "Yes, participating pharmacies receive various forms of compensation including direct financial incentives, early access to new services, and other rewards for their valuable contribution to national health policy development."
    },
    {
      question: "Can our data be traced back to individual pharmacies or patients?",
      answer: "No, all data is fully anonymized and aggregated before analysis. We use advanced anonymization techniques to ensure that no individual pharmacy or patient can be identified from the collected data."
    },
    {
      question: "How strong is your data security?",
      answer: "We employ enterprise-grade security measures including end-to-end encryption, secure data transmission protocols, regular security audits, and AWS infrastructure to ensure the highest level of data protection."
    },
    {
      question: "What specific security measures do you use?",
      answer: "Our security framework includes AES-256 encryption, multi-factor authentication, regular penetration testing, secure API endpoints, automated threat detection, and 24/7 monitoring of all systems."
    },
    {
      question: "Do you comply with data protection laws?",
      answer: "Yes, we fully comply with all relevant data protection regulations including NDPA, GDPR, and Ghana's Data Protection Act. Our legal team ensures ongoing compliance with evolving regulations."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl lg:mx-auto pxx-2 2xl:px-4 lg:py-9 2xl:py-24 px-3 my-3">
      <div className="grid lg:grid-cols-2 lg:gap">
        {/* Left Column - Title and Description */}
        <div className="">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our frequently asked questions to learn more about our partnership program
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#387FF5] focus:ring-inset"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-8 bg-[#387FF5] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openQuestion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pl-11">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;