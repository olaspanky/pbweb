"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      return;
    }

    console.log("Form submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", phone: "" });

    // Auto-hide success message after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Full-screen background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/assets/wp3.png')",
        }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="fixed inset-0 -z-10 bg-black/40" />

      <main className="flex   justify-end  px-4 lg:px-20 py-12">
        <div className="w-full max-w-lg rounded-2xl bg-white/10 p-10 shadow-2xl backdrop-blur-md transition-all">
          <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-900 md:text-5xl">
            Request a Demo
          </h1>
          <p className="mb-10 text-center text-lg text-gray-700">
            Fill in your details and we'll get back to you soon!
          </p>

          <div aria-live="polite">
            {status === "success" && (
              <div className="mb-8 rounded-lg bg-green-100 p-4 text-center text-green-800 animate-in fade-in slide-in-from-top duration-500">
                Thank you! We'll contact you shortly.
              </div>
            )}

            {status === "error" && (
              <div className="mb-8 rounded-lg bg-red-100 p-4 text-center text-red-800 animate-in fade-in slide-in-from-top duration-500">
                Please fill in all fields.
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-600 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-blue-700 hover:shadow-xl active:scale-[0.98] transition-all duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}