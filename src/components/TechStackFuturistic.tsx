"use client";
import { useRef } from "react";
import Image from "next/image";
import useParallax from "@/hooks/useParallax";
import useSectionReveal from "@/hooks/useSectionReveal";

export default function TechStackFuturistic() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  // Prefer brand-colored Simple Icons for these slugs
  const brandIconSlug: Record<string, string> = {
    github: "github",
    vercel: "vercel",
    flask: "flask",
    numpy: "numpy",
    pandas: "pandas",
    streamlit: "streamlit",
    html: "html5",
    css: "css3",
    tailwind: "tailwindcss",
  };
  const brandIconColors: Record<string, string> = {
    github: "ffffff",
    vercel: "ffffff",
    flask: "ffffff",
    numpy: "4D77CF",
    pandas: "150458",
    streamlit: "FF4B4B",
    html: "E34F26",
    css: "1572B6",
    tailwind: "38B2AC",
  };
  const technologies = [
    { name: "Python", category: "Languages", icon: "python" },
    { name: "C++", category: "Languages", icon: "cpp" },
    { name: "C", category: "Languages", icon: "c" },
    { name: "JavaScript", category: "Languages", icon: "js" },

  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind" },
  { name: "HTML", category: "Frontend", icon: "html" },
  { name: "JavaScript", category: "Frontend", icon: "js" },
  { name: "Streamlit", category: "Frontend", icon: "streamlit" },

    { name: "FastAPI", category: "Backend", icon: "fastapi" },
    { name: "Flask", category: "Backend", icon: "flask" },

    { name: "TensorFlow", category: "ML/AI", icon: "tensorflow" },
    { name: "PyTorch", category: "ML/AI", icon: "pytorch" },
    { name: "OpenCV", category: "ML/AI", icon: "opencv" },
    { name: "NumPy", category: "ML/AI", icon: "numpy" },
    { name: "Pandas", category: "ML/AI", icon: "pandas" },
    { name: "scikit-learn", category: "ML/AI", icon: "sklearn" },

    { name: "MongoDB", category: "Databases", icon: "mongodb" },

    { name: "Git", category: "Tools", icon: "git" },
    { name: "GitHub", category: "Tools", icon: "github" },
    { name: "Vercel", category: "Tools", icon: "vercel" },
    { name: "Docker", category: "Tools", icon: "docker" },
    { name: "AWS", category: "Tools", icon: "aws" },
    { name: "VS Code", category: "Tools", icon: "vscode" },
  ];

  const languages = technologies.filter(t => t.category === "Languages");
  const frontend = technologies.filter(t => t.category === "Frontend");
  const backend = technologies.filter(t => t.category === "Backend");
  const mlai = technologies.filter(t => t.category === "ML/AI");
  const databases = technologies.filter(t => t.category === "Databases");
  const tools = technologies.filter(t => t.category === "Tools");

  const Column = ({ title, items }: { title: string; items: typeof technologies }) => {
    const colRef = useRef<HTMLDivElement | null>(null);
    useParallax(colRef, { amount: 14 });
    return (
    <div data-reveal ref={colRef}>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((tech, i) => (
          <div key={`${tech.name}-${i}`} className="glass-card p-4" data-reveal>
            <div className="flex items-center gap-3">
              {tech.icon ? (
                <Image
                  src={brandIconSlug[tech.icon]
                    ? `https://cdn.simpleicons.org/${brandIconSlug[tech.icon]}/${brandIconColors[tech.icon] ?? "ffffff"}`
                    : `https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={`${tech.name} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-sm"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    // fallback to white simple icons alias
                    const alias = brandIconSlug[tech.icon] ?? tech.icon;
                    img.src = `https://cdn.simpleicons.org/${alias}/ffffff`;
                  }}
                />
              ) : (
                <div className="w-6 h-6 rounded-sm bg-cyan-400/20" />
              )}
              <div className="font-medium leading-tight">{tech.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); };

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
  <div className="text-center mb-16 animate-pulse [animation-duration:3s]" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="text-lg text-white/70">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          <Column title="Languages" items={languages} />
          <Column title="ML/AI" items={mlai} />
          <Column title="Backend & APIs" items={backend} />
          <Column title="Frontend" items={frontend} />
          <Column title="Databases" items={databases} />
          <Column title="Tools & Platforms" items={tools} />
        </div>
      </div>
    </section>
  );
}
