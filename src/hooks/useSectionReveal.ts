"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

type Options = {
  selector?: string; // query selector for items within container
  y?: number;
  duration?: number;
  stagger?: number;
};

export default function useSectionReveal(
  container: React.RefObject<HTMLElement>,
  {
    selector = "[data-reveal]",
    y = 24,
    duration = 0.6,
    stagger = 0.06,
  }: Options = {}
) {
  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      items.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y,
          duration,
          ease: "power3.out",
          delay: i * stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, container);
    return () => ctx.revert();
  // Only re-run when container or defined option values change
  }, [container, selector, y, duration, stagger]);
}
