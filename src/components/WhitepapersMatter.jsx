'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const WhitepapersMatter = () => {
  const whitepaperItems = [
    {
      id: 1,
      title: 'EVIDENCE-BASED INTELLIGENCE',
      imageUrl: '/images/assets/ww1.png',
      imageAlt: 'Professional analyzing data',
      description:
        'Our reports are grounded in real-time market data, regulatory updates, and verified research.',
    },
    {
      id: 2,
      title: 'THERAPY-AREA DEEP DIVES',
      imageUrl: '/images/assets/ww2.png',
      imageAlt: 'Medical professional examining x-ray',
      description:
        'From oncology to infectious diseases, gain in-depth analysis across key therapeutic areas shaping Africa\'s pharma future.',
    },
    {
      id: 3,
      title: 'AFRICA-FOCUSED, GLOBALLY RELEVANT',
      imageUrl: '/images/assets/wl.png',
      imageAlt: 'Team collaboration meeting',
      description:
        'Understand how local innovation intersects with global investment opportunities.',
    },
  ];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Refs and inView hooks
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-[50px] text-center font-light tracking-wide text-[#2B4886] mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isSectionInView ? 'visible' : 'hidden'}
        >
          WHY OUR WHITEPAPERS MATTER
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whitepaperItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col group hover:shadow-3xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isSectionInView ? 'visible' : 'hidden'}
              custom={index}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate={isSectionInView ? 'visible' : 'hidden'}
                  className="w-full h-full"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-6 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhitepapersMatter;