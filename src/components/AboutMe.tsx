"use client";
import { useRef } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";
import useParallax from "@/hooks/useParallax";

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  const headingRef = useRef<HTMLDivElement | null>(null);
  useParallax(headingRef, { amount: 12 });

  const features = [
    { title: "Education", desc: "B.Tech (AIML), KIET Group Of Institutions, Ghaziabad (2024–2028),  BS(DS&ML), IIT Madras" },
    { title: "Experience", desc: "Ex-Machine Learning Intern – worked on diverse ML projects, currently developing a real estate–based predictive model. Also led management operations at my college club to drive impactful initiatives." },
    { title: "Focus Areas", desc: "AI/ML/DL · Computer Vision · Generative AI · NLP · Neural Networks · Data Analysis · Model Optimization · DSA · Competitive Programming · Python · TensorFlow · PyTorch · Git" },
    { title: "Expertise", desc: "Expertise: Python · C++ · Flask · TensorFlow · PyTorch · Scikit-learn · Computer Vision · DSA · Competitive Programming" },
  ];

  // Simple tilt handler for cards (no external libs)
  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -8; // rotateX
    const ry = ((x / rect.width) - 0.5) * 8; // rotateY
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(2px)`;
  };
  const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <section id="about" ref={ref} className="relative py-20">
      {/* Animated ring backdrop */}
      <div aria-hidden className="pointer-events-none absolute -inset-x-10 -top-16 h-40 blur-3xl opacity-30 md:opacity-40">
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_0deg,rgba(51,208,255,0.15),rgba(180,51,255,0.15),transparent_60%)] animate-[spin_18s_linear_infinite]" />
      </div>
      <div className="container mx-auto px-6">
  <div className="text-center mb-12" data-reveal ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
           Hi, I’m Anubhav Singh — an AI & ML Developer, problem solver, and DSA enthusiast who loves turning ideas into intelligent, high-impact digital products. I’m passionate about crafting efficient solutions, exploring emerging technologies, and writing clean, elegant code that bridges innovation with real-world value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm will-change-transform transition-transform duration-150 touch-smooth hover:shadow-[0_0_20px_rgba(51,208,255,0.15)]"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              data-reveal
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
