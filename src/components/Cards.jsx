import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const cards = [
    "/images/g1.png",
    "/images/g2.png",
    "/images/g3.png",
    "/images/g4.png",
  ];

  return (
    <div className="w-full mx-auto p-8">
      {/* Container must be relative */}
      <div className="relative w-[500px] h-[350px]">
        {/* First image (down a bit) */}
        <motion.img
          src={cards[1]}
          alt="Happy Clients"
          className="
            absolute
            top-24
            left-0
            w-96
            drop-shadow-lg
            z-32
          "
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />

        {/* Second image (overlapping) */}
        <motion.img
          src={cards[0]}
          alt="Pre-seed funding"
          className="
            absolute
            top-0
            left-84
            w-96
            drop-shadow-xl
            z-20
          "
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05, 
            rotate: -2,
            transition: { duration: 0.3 }
          }}
        />
      </div>
      <div className="relative w-[500px] h-[350px] mt-[-96] z-50">
        {/* First image (down a bit) */}
        <motion.img
          src={cards[3]}
          alt="Happy Clients"
          className="
            absolute
            top-24
            left-0
            w-96
            drop-shadow-lg
            z-32
          "
          initial={{ opacity: 0, y: 100, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />

        {/* Second image (overlapping) */}
        <motion.img
          src={cards[2]}
          alt="Pre-seed funding"
          className="
            absolute
            top-0
            left-84
            w-96
            drop-shadow-xl
            z-20
          "
          initial={{ opacity: 0, y: 100, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05, 
            rotate: -2,
            transition: { duration: 0.3 }
          }}
        />
      </div>
    </div>
  );
}