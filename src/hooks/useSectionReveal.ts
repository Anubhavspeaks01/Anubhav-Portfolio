"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Options = {
  selector?: string; // query selector for items within container
  y?: number;
  duration?: number;
  stagger?: number;
};

export default function useSectionReveal(container: React.RefObject<HTMLElement>, opts: Options = {}) {
  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const {
        selector = "[data-reveal]",
        y = 24,
        duration = 0.6,
        stagger = 0.06,
      } = opts;

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
  }, [container, opts.selector, opts.y, opts.duration, opts.stagger]);
}
