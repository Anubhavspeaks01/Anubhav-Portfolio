"use client";
import { useRef } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";
import { ExternalLink, Github } from "lucide-react";
import useParallax from "@/hooks/useParallax";

export default function ProjectsFuturistic() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  const headingRef = useRef<HTMLDivElement>(null!);
  useParallax(headingRef, { amount: 18 });
  const projects = [
    {
      title: "StylishGenie",
      description:
        "A minimal, soothing fashion assistant web app. Explore curated styles and clean UI.",
      tech: ["React", "TypeScript", "Tailwind", "Vercel"],
      url: "https://stylishgenie.vercel.app/",
    },
    {
      title: "AgriSpect",
      description:
        "AI-powered crop detection & counting system for smart farming using deep learning and CV.",
      tech: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/DurgeshRajput11/AgriSpect",
    },
    {
      title: "Rockfall Predictor",
      description:
        "Rockfall risk prediction for open-pit mining using ML with an end-to-end MLOps pipeline.",
      tech: ["Python", "Machine Learning", "MLOps"],
      github: "https://github.com/DurgeshRajput11/Rockfall-predictor",
    },
    {
      title: "MindMate",
      description:
        "Anonymous AI wellness companion focused on empathetic conversations and guidance.",
      tech: ["Python", "AI", "NLP"],
      github: "https://github.com/DurgeshRajput11/MindMate",
    },
    {
      title: "ASL-AI",
      description:
        "Real-time American Sign Language to Text & Speech translator using Computer Vision.",
      tech: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/DurgeshRajput11/ASL-AI",
    },
    {
      title: "FWI Predictor",
      description:
        "Predicting Fire Weather Index from environmental features using classic ML models.",
      tech: ["Python", "Machine Learning", "Data Science"],
      github: "https://github.com/DurgeshRajput11/FWI-Predictor",
    },
  ];

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
  <div className="text-center mb-16" data-reveal ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-lg text-white/70">Some of my recent work in AI/ML and Computer Vision</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-cyan-400/50 transition-all hover:scale-105 flex flex-col touch-smooth"
              data-reveal
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-gradient-to-br from-cyan-400/15 to-teal-400/15 rounded-lg" />
                  <div />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

                 <div className="mt-6 flex gap-3">
                {project.url && (
                  <button
                    className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500/80 to-teal-500/80 hover:from-cyan-500 hover:to-teal-500 py-2.5 text-white inline-flex items-center justify-center gap-2"
                    onClick={() => window.open(project.url!, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                )}
                {project.github && (
                  <button
                    className={`flex-1 rounded-lg py-2.5 ${
                      project.url
                        ? "border border-cyan-400/40 hover:bg-cyan-400/10 text-white inline-flex items-center justify-center gap-2"
                        : "bg-gradient-to-r from-cyan-500/80 to-teal-500/80 hover:from-cyan-500 hover:to-teal-500 text-white inline-flex items-center justify-center gap-2"
                    }`}
                    onClick={() => window.open(project.github!, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                )}
                 </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="rounded-lg border border-cyan-400/40 hover:bg-cyan-400/10 py-2.5 px-5 text-white inline-flex items-center gap-2"
            onClick={() => window.open("https://github.com/DurgeshRajput11", "_blank")}
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
