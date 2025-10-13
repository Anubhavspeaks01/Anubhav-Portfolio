"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

type ParallaxOptions = {
  amount?: number; // pixels to translate on Y across the scroll range
  start?: string;  // ScrollTrigger start
  end?: string;    // ScrollTrigger end
  trigger?: HTMLElement | null; // custom trigger element
};

export default function useParallax(
  target: React.RefObject<HTMLElement | null>,
  { amount = 24, start = "top bottom", end = "bottom top", trigger }: ParallaxOptions = {}
) {
  useEffect(() => {
    if (!target.current) return;
    const el = target.current;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: amount,
        ease: "none",
        scrollTrigger: {
          trigger: trigger ?? el,
          start,
          end,
          scrub: true,
        },
      });
    }, target);
    return () => ctx.revert();
  }, [target, amount, start, end, trigger]);
}
