"use client";

import { GraduationCap, Briefcase, Target, Code2 } from "lucide-react";
import { useRef } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";

export default function HighlightsGrid() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education",
      desc: "B.Tech (AIML),  KIET Group Of Institutions, Ghaziabad (2024–2028),  BS (DS-ML), IIT Madras",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Experience",
      desc: "Ex-Machine Learning Intern – worked on diverse ML projects, currently developing a real estate–based predictive model. Also led management operations at my college club to drive impactful initiatives.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Focus Areas",
      desc: "AI/ML/DL · Computer Vision · Generative AI · NLP · Neural Networks · Data Analysis · Model Optimization · DSA · Competitive Programming · Python · TensorFlow · PyTorch · Git",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Expertise",
      desc: "💻 Expertise: Python · C++ · Flask · TensorFlow · PyTorch · Scikit-learn · Computer Vision · DSA · Competitive Programming",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-colors" data-reveal>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 mb-4">
                {c.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
