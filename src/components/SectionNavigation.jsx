"use client";

import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSectionObserver } from "@/contexts/SectionObserverContext";

export default function SectionNavigation() {
  const sections = [
    { id: "difference", label: "Our Difference" },
    { id: "solutions", label: "Explore Solutions" },
    { id: "products", label: "Products" },
    { id: "expertise", label: "Expertise" },
    // { id: "insights", label: "Insights" },
    { id: "careers", label: "Careers" },
  ];

  const { activeSection } = useSectionObserver();
  const containerRef = useRef(null);
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ x: 0, width: 0, opacity: 0 });

  // Measure and animate underline position
  useLayoutEffect(() => {
    const update = () => {
      const el = linkRefs.current[activeSection];
      const container = containerRef.current;
      if (!el || !container) return setIndicator((p) => ({ ...p, opacity: 0 }));

      const rect = el.getBoundingClientRect();
      const parent = container.getBoundingClientRect();
      setIndicator({
        x: rect.left - parent.left,
        width: rect.width,
        opacity: 1,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeSection]);

  return (
    <nav className="hidden lg:block bg-grey-0 py-6 sticky top-0 z-20 shadow-md">
      <ul
        ref={containerRef}
        className="relative max-w-[1440px] px-18 mx-auto flex items-center justify-between font-semibold text-lg text-brand-blue"
      >
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              ref={(el) => (linkRefs.current[section.id] = el)}
              className={`relative inline-block py-2 transition-colors duration-300 ${
                activeSection === section.id ? "text-brand-blue" : ""
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}

        <motion.div
          className="absolute left-0 bottom-0 h-[3px] bg-brand-blue rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            x: indicator.x,
            width: indicator.width,
            opacity: indicator.opacity,
            scaleX: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          style={{
            transformOrigin: "center", // expands from center
          }}
        />
      </ul>
    </nav>
  );
}
