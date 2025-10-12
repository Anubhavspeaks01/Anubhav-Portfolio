"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import ThreeScene from "./ThreeScene";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import useCursor from "@/hooks/useCursor";

export default function Hero3D() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      nameRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    ).fromTo(
      tagRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
  }, []);
  useCursor();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background blobs */}
  {/* Removed code rain overlay as requested */}
      {/* Animated background elements (soft gradient blobs) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        {/* Removed fuchsia blob to eliminate purple tint */}
      </div>
  {/* Neural network on the left (same style and width as right) */}
  <ThreeScene className="hidden md:block absolute inset-y-0 left-0 w-1/2 z-[1] pointer-events-none" />
      {/* Neural network: visible on the right half (desktop), away from name box */}
      <ThreeScene className="hidden md:block absolute inset-y-0 right-0 w-1/2 z-[1] pointer-events-none" />
  {/* Content container (z-10 ensures it's above background) */}
  <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text column */}
          <div className="order-2 md:order-1 text-center md:text-left relative z-10 p-4 md:p-6">
            {/* Soft backdrop to keep the name box visible on all screens (behind text) */}
            <div className="pointer-events-none absolute -inset-3 md:-inset-6 rounded-2xl bg-black/40 md:bg-black/30 backdrop-blur-sm z-0 ring-1 ring-white/10" aria-hidden="true" />
            {/* Foreground content */}
            <div className="relative z-10">
              <h1
                ref={nameRef}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(51,208,255,0.35)]"
              >
                Durgesh Singh
              </h1>
              <p ref={tagRef} className="mt-4 text-lg md:text-2xl text-cyan-200/90">
                AI/ML Enthusiast • Computer Vision • Gen AI
                <br />
                • Ex- Research Intern IIITDM Jabalpur
              </p>
              <p className="mt-4 text-base md:text-lg text-white/95 drop-shadow-sm leading-relaxed max-w-2xl md:max-w-none mx-auto md:mx-0">
                Passionate about building intelligent solutions with AI, Machine Learning, and Computer Vision.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#projects" className="rounded-lg bg-gradient-to-r from-cyan-500/80 to-teal-500/80 hover:from-cyan-500 hover:to-teal-500 py-2.5 px-6">
                  View Projects
                </a>
                <a href="#contact" className="rounded-lg border border-cyan-400/40 hover:bg-cyan-400/10 py-2.5 px-6">
                  Get in Touch
                </a>
                <a href="/Resume durgesh.pdf" target="_blank" className="rounded-lg border border-cyan-400/40 bg-transparent hover:bg-cyan-400/10 py-2.5 px-6">
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Cyan-only glow (removed fuchsia) */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-56 h-56 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-[0_0_40px_rgba(51,208,255,0.2)] flex items-center justify-center bg-black/20">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Durgesh Singh"
                    fill
                    sizes="(max-width: 768px) 224px, 416px"
                    className="object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="text-center select-none">
                    <div className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                      DS
                    </div>
                    <div className="mt-2 text-white/70">Add /public/profile.jpg</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-8 flex gap-5 justify-center md:justify-start">
          <a
            href="https://github.com/DurgeshRajput11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all hover:scale-110"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/durgesh-singh-09844b253/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all hover:scale-110"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:dsgaur1125@gmail.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all hover:scale-110"
            aria-label="Send email"
            title="Send email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

  {/* Neon gradient overlay (removed purple/fuchsia radial) */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(51,208,255,0.12),transparent_40%)]" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
