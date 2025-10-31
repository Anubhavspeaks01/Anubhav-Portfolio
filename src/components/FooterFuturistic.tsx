"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterFuturistic() {
  return (
    <footer className="mt-16 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">Anubhav Singh</div>
          <p className="text-white/70 mt-2">AI/ML Enthusiast building intelligent solutions for real-world problems.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-white/80">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Connect</div>
          <div className="flex gap-3">
            <a href="https://github.com/Anubhavspeaks01" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub profile" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anubhavsinghiitm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn profile" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:singhanubhav9415@gmail.com" aria-label="Send email" title="Send email" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
