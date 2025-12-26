"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

const SectionObserverContext = createContext();

export function SectionObserverProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    Object.values(sectionsRef.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const registerSection = (id, el) => {
    sectionsRef.current[id] = el;
  };

  return (
    <SectionObserverContext.Provider
      value={{ activeSection, registerSection }}
    >
      {children}
    </SectionObserverContext.Provider>
  );
}

export function useSectionObserver() {
  return useContext(SectionObserverContext);
}
