"use client";

import { useEffect } from "react";

export default function useTilt(ref: React.RefObject<HTMLElement | null>, maxTilt = 10) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let rx = 0, ry = 0;

    function onMove(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;
      rx = -(py * maxTilt);
      ry = px * maxTilt;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    }

    function onLeave(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      cancelAnimationFrame(raf);
      target.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, maxTilt]);
}
