"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import HeroImage1 from "@/assets/images/cu.png";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    // Optional: Add confetti or success animation on mount
    const timer = setTimeout(() => {
      // Trigger any success animations here
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden p-3 lg:p-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full">
        <Image
          src={HeroImage1}
          fill
          alt="Thank you background"
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
        {/* Gradient Overlay - matching the contact form */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/80 via-brand-blue/70 to-brand-light-blue/60" />
      </div>

    

      {/* Thank You Content */}
      <div className="relative z-20 max-w-[1440px] px-6 lg:px-18 mx-auto flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-2xl">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in">
            {/* Success Icon */}
            <div className="flex justify-center mb-6 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl animate-pulse-glow"></div>
                <CheckCircle2 className="w-20 h-20 md:w-24 md:h-24 text-cyan-400 relative z-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 animate-slide-up">
              Thank You!
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 text-center mb-6 animate-slide-up-delay-1">
              We've received your message
            </p>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 animate-slide-up-delay-2">
              <p className="text-white/90 text-center text-lg leading-relaxed">
                Thank you for reaching out to us. One of our team members will review your inquiry and get back to you as soon as possible.
              </p>
            </div>

            {/* Next Steps */}
            <div className="space-y-4 mb-8 animate-slide-up-delay-3">
              <h2 className="text-xl font-semibold text-white text-center mb-4">
                What happens next?
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    We'll review your submission within 24 business hours
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    A team member will reach out to discuss your needs
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    We'll provide you with tailored solutions for your business
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-4">
              <Link 
                href="https://pbrinsight.com/"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0794D4] hover:bg-[#036593] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Back to Home</span>
              </Link>

              <Link 
                href="https://pbrinsight.com/about"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center animate-fade-in-delay">
            <p className="text-blue-100/80 text-sm">
              Need immediate assistance?{" "}
              <a 
                href="mailto:info@yourcompany.com" 
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out 0.2s both;
        }

        .animate-slide-up-delay-1 {
          animation: slideUp 0.6s ease-out 0.3s both;
        }

        .animate-slide-up-delay-2 {
          animation: slideUp 0.6s ease-out 0.4s both;
        }

        .animate-slide-up-delay-3 {
          animation: slideUp 0.6s ease-out 0.5s both;
        }

        .animate-slide-up-delay-4 {
          animation: slideUp 0.6s ease-out 0.6s both;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}