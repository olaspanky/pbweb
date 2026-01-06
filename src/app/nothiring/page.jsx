"use client";
import React, { useEffect, useState } from 'react';

export default function NotHiringPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15
  }));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950 overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-xl"
            style={{
              width: `${el.size}px`,
              height: `${el.size}px`,
              left: `${el.left}%`,
              animation: `float ${el.duration}s ease-in-out infinite`,
              animationDelay: `${el.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax cursor effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Elegant "Pause" Icon (symbolizing temporary hold) */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <svg 
              className="w-48 h-48 md:w-64 md:h-64 text-purple-300 animate-pulse"
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))',
              }}
            >
              <path d="M10 9v6m4-6v6m-8-3h16" />
            </svg>
            <div className="absolute inset-0 blur-2xl opacity-50">
              <svg className="w-48 h-48 md:w-64 md:h-64 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 9v6m4-6v6m-8-3h16" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Not Currently Hiring
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
            We're not actively recruiting at the moment, but we're always interested in exceptional talent.
          </p>
          <p className="text-lg md:text-xl text-purple-300 max-w-2xl mx-auto">
            Feel free to send your resume or portfolio — we'll keep it on file and reach out when the right opportunity arises!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            onClick={() => window.history.back()}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
            onClick={() => window.location.href = '/'}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </span>
          </button>
        </div>

        {/* Optional: Add your careers email */}
        <p className="mt-12 text-purple-300 text-lg">
          Send applications to: <a href="mailto:careers@yourcompany.com" className="underline hover:text-white transition">marketanalytics@pbrinsight.com</a>
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-50px) translateX(20px);
          }
          50% {
            transform: translateY(-100px) translateX(-20px);
          }
          75% {
            transform: translateY(-50px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}