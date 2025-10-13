"use client";
import { useRef } from "react";
import useTilt from "@/hooks/useTilt";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);
  return (
    <div
      ref={ref}
      className={`relative will-change-transform group ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(51,208,255,0.15)_0%,transparent_60%)]" />
      {children}
    </div>
  );
}
