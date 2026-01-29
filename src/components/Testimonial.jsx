'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ quote, name, title, initials, variant }) => {
  const borderRadiusClass = variant === 'left' 
    ? 'rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[100px] md:rounded-bl-[150px]'
    : 'rounded-tl-[20px] rounded-tr-[100px] md:rounded-tr-[150px] rounded-br-[20px] rounded-bl-[20px]';

  return (
    <div
      className={`relative border-[2.5px] md:border-[3.33px] bg-transparent p-6 md:p-8 lg:p-10 flex flex-col h-full min-h-[320px] md:min-h-[400px] ${borderRadiusClass} hover:-translate-y-2 transition-transform duration-300`}
      style={{ 
        gap: '24px',
        backdropFilter: 'blur(33.32px)',
        WebkitBackdropFilter: 'blur(33.32px)',
        borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%) 1',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      {/* Quote */}
      <p className="flex-1 text-sm md:text-base lg:text-lg leading-relaxed text-white">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 md:gap-4">
        <div 
          className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-white"
        >
          <span className="text-base md:text-lg font-bold text-blue-600">{initials}</span>
        </div>
        <div>
          <h4 className="text-sm md:text-base lg:text-lg font-semibold text-white">{name}</h4>
          <p className="text-xs md:text-sm text-white/70">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "PBR exceeded our expectations by providing credible, data-driven insights into therapeutics, offering a comprehensive understanding of market dynamics that has fundamentally transformed our decision-making process.",
      name: "Chishamiso Mawoyo",
      title: "Senior Investment Officer, IFC",
      initials: "CM",
      variant: "left"
    },
    {
      quote: "Their detailed insights into state-level dynamics and financial trends provided crucial information that streamlined our project on maternal and neonatal products in Nigeria, significantly enhancing our strategic planning.",
      name: "Azhee Akinrin",
      title: "Consultant, Global Health and Development, Market Access Africa",
      initials: "AA",
      variant: "right"
    },
    {
      quote: "PBR's data solutions empowered us to make strategic decisions that directly impacted product launches and market segmentation. By providing detailed SKU analysis and granular market insights, PBR enabled us to successfully launch a new product in 2024. The business planning workshop further enriched our approach, offering fresh perspectives on brand penetration and competitive benchmarking that helped streamline product selection and channel prioritization.",
      name: "Yimika Oguns",
      title: "Emzor",
      initials: "YO",
      variant: "left"
    },
    {
      quote: "The Versus platform delivered substantial time and cost savings, enabling us to benchmark strategies effectively and navigate regulatory challenges with greater confidence.",
      name: "Adeyanju Adedamola",
      title: "Merit Healthcare",
      initials: "AD",
      variant: "right"
    },
    {
      quote: "Partnering with PBR Life Sciences on an advanced pricing modeling project was a game-changer for Sanofi. By leveraging real-world pharmacy sales data, we developed a data-driven pricing strategy that not only boosted profitability but also ensured broader patient access to essential medicines.",
      name: "Tolulope Jagun",
      title: "Ex Sanofi Nigeria - Country Revenue and Pricing Manager & Pricing Project Lead",
      initials: "TJ",
      variant: "left"
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Get current testimonial and the next two
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="min-h-[700px] bg-[#1A3A7B] flex items-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg">
            Trusted by leading healthcare organizations across Africa
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 md:p-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white transition-all shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 md:p-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white transition-all shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <TestimonialCard
                    key={testimonial.key}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    initials={testimonial.initials}
                    variant={testimonial.variant}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;