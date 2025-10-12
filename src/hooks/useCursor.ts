"use client";
import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const ring = document.getElementById("cursor-ring");
    if (!ring) return;
    const move = (e: MouseEvent) => {
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}
