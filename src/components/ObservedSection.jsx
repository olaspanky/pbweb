"use client";

import { useSectionObserver } from "@/contexts/SectionObserverContext";
import { useEffect, useRef } from "react";

export default function ObservedSection({ id, children }) {
  const ref = useRef(null);
  const { registerSection } = useSectionObserver();

  useEffect(() => {
    if (ref.current) registerSection(id, ref.current);
  }, [id]);

  return (
    <section id={id} ref={ref} className="scroll-mt-[120px] bg-[#eaeef4]">
      {children}
    </section>
  );
}
