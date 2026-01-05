import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion

const WhitepapersMatter = () => {
  // This data can be moved to a separate file or fetched from an API
  const whitepaperItems = [
    {
      id: 1,
      title: 'Evidence-Based Intelligence',
      imageUrl: '/images/assets/ww1.png',
      imageAlt: 'Whitepapers importance illustration',
      description:
        'Our reports are grounded in real-time market data, regulatory updates, and verified research.',
    },
    {
      id: 2, // Fixed duplicate ID
      title: 'Therapy-Area Deep Dives',
      imageUrl: '/images/assets/ww2.png',
      imageAlt: 'Whitepapers importance illustration',
      description:
        'From oncology to infectious diseases, gain in-depth analysis across key therapeutic areas shaping Africa’s pharma future.',
    },
    {
      id: 3, // Fixed duplicate ID
      title: 'Emerging Markets-Focused',
      imageUrl: '/images/assets/wl.png',
      imageAlt: 'Whitepapers importance illustration',
      description:
        'Understand how local innovation intersects with global investment opportunities.',
    },
  ];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger each card
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const dividerVariants = {
    hidden: { width: 0 },
    visible: {
      width: '97%',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Refs and inView hooks for scroll detection
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className=" px-4 sm:px-6 lg:px-8 bg-white "
    >
      <motion.h2
        className="lg:text-5xl text-3xl text-center font-extralight text-[#2B4886] mb-6"
        variants={titleVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
      >
        WHY OUR WHITEPAPERS MATTER
      </motion.h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1 lg:gap-3">
        {whitepaperItems.map((item, index) => (
         <motion.div
  key={item.id}
  className="flex flex-col gap-12 mb-16 pr-2 border-r border-gray-300 md:[&:nth-child(3n)]:border-r-0"
  variants={cardVariants}
  initial="hidden"
  animate={isSectionInView ? 'visible' : 'hidden'}
  custom={index}
>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>

              <motion.div
                className="my-1 w-[97%] mt-3  border-black border-[0.1px] pr-2"
                variants={dividerVariants}
                initial="hidden"
                animate={isSectionInView ? 'visible' : 'hidden'}
              />

              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <p className="mt-8 text-lg text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}

        <div className="mt-12">
          {/* Placeholder for future content */}
        </div>
      </div>
    </section>
  );
};

export default WhitepapersMatter;