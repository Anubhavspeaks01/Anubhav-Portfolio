"use client";
import { useRef } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";

export default function CurrentWork() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  const items = [
    { title: "DSA Mastery", desc: "Consistent practice and problem-solving" },
    { title: "Real-World Projects", desc: "Applying tech to practical solutions" },
    { title: "AI Exploration", desc: "Deep diving into emerging AI technologies" },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold">What I'm Currently Doing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-colors" data-reveal>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
