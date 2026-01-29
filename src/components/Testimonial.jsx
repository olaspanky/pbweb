'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ rating, quote, name, title, initials, variant, index }) => {
  const borderRadiusClass = variant === 'left' 
    ? 'rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[150px]'
    : 'rounded-tl-[20px] rounded-tr-[150px] rounded-br-[20px] rounded-bl-[20px]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`relative border-[3.33px] bg-transparent p-8 md:p-12 flex flex-col h-full ${borderRadiusClass}`}
      style={{ 
        gap: '32px',
        backdropFilter: 'blur(33.32px)',
        WebkitBackdropFilter: 'blur(33.32px)',
        borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%) 1',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      {/* Star Rating */}
      <motion.div 
        className="flex gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
      >
        {[...Array(5)].map((_, starIndex) => (
          <motion.svg
            key={starIndex}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.2 + 0.4 + starIndex * 0.1,
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className={`h-7 w-7 ${
              starIndex < rating
                ? 'fill-green-400 text-green-400'
                : 'fill-none text-white/40'
            }`}
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </motion.svg>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.p 
        className="flex-1 text-base md:text-lg leading-relaxed text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      >
        {quote}
      </motion.p>

      {/* Author Info */}
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
      >
        <motion.div 
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-lg font-bold text-blue-600">{initials}</span>
        </motion.div>
        <div>
          <h4 className="text-base md:text-lg font-semibold text-white">{name}</h4>
          <p className="text-sm md:text-base text-white/70">{title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 4,
      quote:
        "Their detailed insights into state-level dynamics and financial trends provided crucial information that streamlined our project on maternal and neonatal products in Nigeria, significantly enhancing our strategic planning.",
      name: "Azhee Akinrin",
      title: "Consultant, Global Health and Development, Market Access Africa",
      initials: "AA",
      variant: "left"
    },
    {
      rating: 4,
      quote:
        "The Versus platform delivered substantial time and cost savings, enabling us to benchmark strategies effectively and navigate regulatory challenges with greater confidence.",
      name: "Adeyanju Adedamola",
      title: "Merit Healthcare",
      initials: "AA",
      variant: "right"
    },
  ];

  return (
    <div className="h-[60vh] min-h-[700px] bg-[#1A3A7B] flex items-center p-20">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 h-full max-h-[450px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;