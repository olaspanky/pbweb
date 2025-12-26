import React, { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="./images/cr1.png" 
              alt="Team collaboration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              We regard our workforce as highly as our customers
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Growth Opportunities
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reward the hard work and excellence of our people with growth opportunities and other incentives.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Diverse Teams
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We welcome professionals from every race and ethnic background. We see diversity as a source of strength.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Professional Development
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Working with us will help you learn a lot about life sciences landscape and develop your skills and abilities.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Global Outlook
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are a local company with a global outlook. Our services are extended to other emerging markets in life sciences globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Join a team of experts to achieve exploits
              </h2>
              <p className="text-gray-700 mb-8">
                As we seek to deliver industry-shaping value to our clients, we are constantly screening candidates with experience or qualification in life sciences
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  required
                >
                  <option value="">Choose country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="ng">Nigeria</option>
                  <option value="other">Other</option>
                </select>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-500 hover:text-blue-600"
                  >
                    Click to upload
                  </label>
                  <span className="text-gray-500"> or drag & drop</span>
                  {formData.file && (
                    <p className="mt-2 text-sm text-gray-700">
                      Selected: {formData.file.name}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              <img 
              src="./images/cr2.png" 
                alt="Team celebration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}