import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// In the browser, register ScrollTrigger once; in SSR this block is skipped
if (typeof window !== "undefined") {
  // gsap.registerPlugin is idempotent; safe to call multiple times
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
