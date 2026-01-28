"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Search, ChevronDown, X } from "lucide-react";
import HeroImage1 from "@/assets/images/cu.png";
import Script from "next/script";

const heroImages = [HeroImage1];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const leadSources = [
  '-None-', 'Advertisement', 'Cold Call', 'Employee Referral', 'External Referral', 
  'Online Store', 'Twitter', 'Facebook', 'Partner', 'Google+', 'Public Relations', 
  'Sales Email Alias', 'Seminar Partner', 'Internal Seminar', 'Trade Show', 
  'Web Download', 'Web Research', 'Chat'
];

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [formData, setFormData] = useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Phone': '',
    'Company': '',
    'Country': '',
    'Lead Source': '',
    'Description': ''
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isLeadSourceOpen, setIsLeadSourceOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countryDropdownRef = useRef(null);
  const leadSourceDropdownRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      'Country': country
    }));
    setIsCountryOpen(false);
    setSearchTerm('');
  };

  const handleLeadSourceSelect = (source) => {
    setFormData(prev => ({
      ...prev,
      'Lead Source': source
    }));
    setIsLeadSourceOpen(false);
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Email validation
  const validateEmail = (email) => {
    if (!email || email.trim().length === 0) return true; // Email is optional
    const atpos = email.indexOf('@');
    const dotpos = email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Check mandatory fields
  const checkMandatory = () => {
    if (!formData['Company'] || formData['Company'].trim().length === 0) {
      alert('Company cannot be empty.');
      return false;
    }
    if (!formData['Last Name'] || formData['Last Name'].trim().length === 0) {
      alert('Last Name cannot be empty.');
      return false;
    }
    return validateEmail(formData['Email']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!checkMandatory()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Track visitor before submission
      if (window.$zoho && window.$zoho.salesiq) {
        const name = formData['First Name'] 
          ? `${formData['First Name']} ${formData['Last Name']}` 
          : formData['Last Name'];
        window.$zoho.salesiq.visitor.name(name);
        if (formData['Email']) {
          window.$zoho.salesiq.visitor.email(formData['Email']);
        }
      }

      // Create form data for submission
      const submitFormData = new FormData();
      submitFormData.append('xnQsjsdp', '4b6b0ea2b7e4d1b1874166f6a57bc505923caf9aa465b05d35799b45b8854f1c');
      submitFormData.append('zc_gad', '');
      submitFormData.append('xmIwtLD', '9f1676cda2c88594a4c738ce8537260f438c62a856081fed257b42097a3a52cdd172ad5b6608b7b5a21e0adad55cc32e');
      submitFormData.append('actionType', 'TGVhZHM=');
      submitFormData.append('returnURL', 'https://pweb-blue-zeta.vercel.app/thanks');
      
      // Add visitor tracking IDs if available
      if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.visitor) {
        const uniqueId = window.$zoho.salesiq.visitor.uniqueid();
        if (uniqueId) {
          submitFormData.append('LDTuvid', uniqueId);
        }
      }
      
      // Add form fields
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          submitFormData.append(key, formData[key]);
        }
      });

      // Submit to Zoho
      const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        body: submitFormData
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = 'https://pweb-blue-zeta.vercel.app/thanks';
      } else {
        alert('There was an error submitting the form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false);
        setSearchTerm('');
      }
      if (leadSourceDropdownRef.current && !leadSourceDropdownRef.current.contains(event.target)) {
        setIsLeadSourceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initialize Zoho SalesIQ
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: 'siq41258c3cb2e1c0b1f7d16f7dedd532bfca2050e92ced5e33f49f4d17b7992720',
        values: {},
        ready: function(){}
      };
    }
  }, []);

  return (
    <>
      {/* Zoho SalesIQ Script */}
      <Script
        id="zsiqscript"
        src="https://salesiq.zoho.com/widget"
        strategy="lazyOnload"
      />

      {/* Zoho Analytics Script */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=3f047f4b75530f9d03b796f588fb54f2b8816e45452850a85d60e45be6105c0181e1d68bc553ce5c42c43384e6130195gid8dadd95754a5f124f6287cd5ef0aefcbcb6d46555bc6705fead330b4f8cc8073gidc4a4329e1b267f886a30eb2cd5624d12837eb6e84edf6fee5ab0de5ec8d5b395gidfb3168520dbd18325d9b304de787578f8884ec86a73cbd2741c1c3e31786815d&tw=2257f00a8cd8430fc387959cd751a26d55ff2bc81ec1c42796c759b5e5e25537"
        strategy="lazyOnload"
      />

      <header className="relative w-full min-h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 -z-10 h-full">
          <div className="embla h-full w-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide relative flex-[0_0_100%] h-full"
                >
                  <Image
                    src={image}
                    fill
                    alt={`Hero background ${index + 1}`}
                    className="object-cover object-center"
                    priority={index === 0}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/80 via-brand-blue/70 to-brand-light-blue/60" />
        </div>

        {/* Navigation */}
        <div className="relative z-50">
          <Navigation />
        </div>

        {/* Contact Form Content */}
        <div className="relative z-20 max-w-[1440px] px-6 lg:px-18 mx-auto py-5 md:py-9 flex items-center justify-end min-h-[calc(100vh-80px)]">
          <div className="w-full max-w-xl">
            <div className="text-left mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in touch with Us
              </h1>
              <p className="text-lg text-blue-100">
                Kick-start your business planning with real-world data and market insight today
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden Zoho Fields */}
              <input type="hidden" name="xnQsjsdp" value="4b6b0ea2b7e4d1b1874166f6a57bc505923caf9aa465b05d35799b45b8854f1c" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="9f1676cda2c88594a4c738ce8537260f438c62a856081fed257b42097a3a52cdd172ad5b6608b7b5a21e0adad55cc32e" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="https://pweb-blue-zeta.vercel.app/thanks" />
              <input type="hidden" id="ldeskuid" name="ldeskuid" />
              <input type="hidden" id="LDTuvid" name="LDTuvid" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First name"
                  value={formData['First Name']}
                  onChange={handleChange}
                  maxLength="40"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last name *"
                  value={formData['Last Name']}
                  onChange={handleChange}
                  maxLength="80"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email address"
                  value={formData['Email']}
                  onChange={handleChange}
                  maxLength="100"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone number"
                  value={formData['Phone']}
                  onChange={handleChange}
                  maxLength="30"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              <input
                type="text"
                name="Company"
                placeholder="Company / Organization *"
                value={formData['Company']}
                onChange={handleChange}
                maxLength="200"
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />

              {/* Country Dropdown */}
              <div className="relative" ref={countryDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all flex items-center justify-between"
                >
                  <span className={formData['Country'] ? "text-white" : "text-white/70"}>
                    {formData['Country'] || "Choose country"}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCountryOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-blue-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-3 border-b border-white/10">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-10 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          autoFocus
                        />
                        {searchTerm && (
                          <button
                            type="button"
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country}
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                          >
                            <span>{country}</span>
                            {formData['Country'] === country && (
                              <span className="text-cyan-400">✓</span>
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center text-white/50">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Lead Source Dropdown */}
              <div className="relative" ref={leadSourceDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLeadSourceOpen(!isLeadSourceOpen)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all flex items-center justify-between"
                >
                  <span className={formData['Lead Source'] ? "text-white" : "text-white/70"}>
                    {formData['Lead Source'] || "Lead Source"}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isLeadSourceOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLeadSourceOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-blue-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl overflow-hidden">
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {leadSources.map((source) => (
                        <button
                          key={source}
                          type="button"
                          onClick={() => handleLeadSourceSelect(source)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                        >
                          <span>{source}</span>
                          {formData['Lead Source'] === source && (
                            <span className="text-cyan-400">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <textarea
                name="Description"
                placeholder="Message"
                value={formData['Description']}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#0794D4] hover:bg-[#036593] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </header>
    </>
  );
}