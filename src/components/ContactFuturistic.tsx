"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";

export default function ContactFuturistic() {
  const ref = useRef<HTMLElement>(null!);
  useSectionReveal(ref);
  const cards = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "dsgaur1125@gmail.com", href: "mailto:dsgaur1125@gmail.com" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "DurgeshRajput11", href: "https://github.com/DurgeshRajput11" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Durgesh Singh", href: "https://www.linkedin.com/in/durgesh-singh-09844b253/" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "IIIT Una, Himachal Pradesh" },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-white/70">Open to collaboration, internships, and exciting opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {cards.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/40"
              data-reveal
              target={c.href?.startsWith('http') ? '_blank' : undefined}
              rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 ring-1 ring-cyan-400/30 text-cyan-300 group-hover:text-cyan-200">
                {c.icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-white/60 text-xs">{c.label}</span>
                <span className="text-base md:text-lg font-semibold text-white truncate">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="text-center glass-card p-6 rounded-xl border border-white/10" data-reveal>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Let&apos;s Build Something Amazing Together!</h3>
          <p className="text-white/70 mb-5 text-sm md:text-base">I&apos;m always interested in hearing about new projects, opportunities, and ways to collaborate. Whether you have a question or just want to say hi, feel free to reach out!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:dsgaur1125@gmail.com" className="rounded-lg bg-gradient-to-r from-cyan-500/80 to-teal-500/80 hover:from-cyan-500 hover:to-teal-500 py-2 px-5 text-sm">Send Email</a>
            <a href="https://www.linkedin.com/in/durgesh-singh-09844b253/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-400/40 hover:bg-cyan-400/10 py-2 px-5 text-sm">Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
