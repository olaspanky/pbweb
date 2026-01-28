"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Search, ChevronDown, X } from "lucide-react";
import HeroImage1 from "@/assets/images/cu.png";

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
  "-None-",
  "Advertisement",
  "Cold Call",
  "Employee Referral",
  "External Referral",
  "Online Store",
  "Twitter",
  "Facebook",
  "Partner",
  "Google+",
  "Public Relations",
  "Sales Email Alias",
  "Seminar Partner",
  "Internal Seminar",
  "Trade Show",
  "Web Download",
  "Web Research",
  "Chat"
];

export default function ContactFormSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Phone: '',
    Company: '',
    Position: '',
    Country: '',
    Lead_Source: '-None-',
    Description: ''
  });

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.Company.trim()) {
      alert('Company cannot be empty.');
      return;
    }
    
    if (!formData.Last_Name.trim()) {
      alert('Last Name cannot be empty.');
      return;
    }
    
    // Validate email if provided
    if (formData.Email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.Email)) {
        alert('Please enter a valid email address.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Create form data for Zoho
      const zohoFormData = new FormData();
      
      // Hidden Zoho fields
      zohoFormData.append('xnQsjsdp', '4b6b0ea2b7e4d1b1874166f6a57bc505923caf9aa465b05d35799b45b8854f1c');
      zohoFormData.append('zc_gad', '');
      zohoFormData.append('xmIwtLD', '9f1676cda2c88594a4c738ce8537260f438c62a856081fed257b42097a3a52cdd172ad5b6608b7b5a21e0adad55cc32e');
      zohoFormData.append('actionType', 'TGVhZHM=');
      zohoFormData.append('returnURL', 'https://pweb-blue-zeta.vercel.app/thanks');
      zohoFormData.append('ldeskuid', '');
      zohoFormData.append('LDTuvid', '');
      zohoFormData.append('aG9uZXlwb3Q', '');

      // Form fields
      zohoFormData.append('Company', formData.Company);
      zohoFormData.append('Email', formData.Email);
      zohoFormData.append('Last Name', formData.Last_Name);
      zohoFormData.append('Country', formData.Country);
      zohoFormData.append('Phone', formData.Phone);
      zohoFormData.append('Lead Source', formData.Lead_Source);
      zohoFormData.append('First Name', formData.First_Name);
      zohoFormData.append('Description', formData.Description);

      // Submit to Zoho
      const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        body: zohoFormData,
        mode: 'no-cors' // Zoho forms typically require no-cors
      });

      // Redirect to thank you page (handled by Zoho's returnURL)
      window.location.href = 'https://pweb-blue-zeta.vercel.app/thanks';

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      Country: country
    }));
    setIsOpen(false);
    setSearchTerm('');
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
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

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden Zoho Fields */}
            <input type="hidden" name="xnQsjsdp" value="4b6b0ea2b7e4d1b1874166f6a57bc505923caf9aa465b05d35799b45b8854f1c" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="9f1676cda2c88594a4c738ce8537260f438c62a856081fed257b42097a3a52cdd172ad5b6608b7b5a21e0adad55cc32e" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="https://pweb-blue-zeta.vercel.app/thanks" />
            <input type="hidden" name="ldeskuid" value="" />
            <input type="hidden" name="LDTuvid" value="" />
            <input type="hidden" name="aG9uZXlwb3Q" value="" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="First_Name"
                  placeholder="First name"
                  value={formData.First_Name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Last_Name"
                  placeholder="Last name *"
                  value={formData.Last_Name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="Email"
                placeholder="Email address"
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone number"
                value={formData.Phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="Company"
                  placeholder="Company *"
                  value={formData.Company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Position"
                  placeholder="Position"
                  value={formData.Position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all flex items-center justify-between"
              >
                <span className={formData.Country ? "text-white" : "text-white/70"}>
                  {formData.Country || "Choose country"}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
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
                          type="button"
                          key={country}
                          onClick={() => handleCountrySelect(country)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                        >
                          <span>{country}</span>
                          {formData.Country === country && (
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
              <input
                type="hidden"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
              />
            </div>

            {/* Lead Source Dropdown */}
            <div className="relative">
              <select
                name="Lead_Source"
                value={formData.Lead_Source}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none"
              >
                {leadSources.map((source) => (
                  <option key={source} value={source} className="bg-blue-900 text-white">
                    {source}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
            </div>

            <textarea
              name="Description"
              placeholder="Message"
              value={formData.Description}
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

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        
        select option {
          background-color: #1e3a8a;
          color: white;
        }
        
        select:focus option:checked {
          background-color: #0ea5e9;
        }
      `}</style>
    </header>
  );
}