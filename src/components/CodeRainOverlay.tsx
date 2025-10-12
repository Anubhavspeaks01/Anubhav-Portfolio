"use client";
import { useEffect, useRef } from "react";

export default function CodeRainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let raf = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 16);
    const drops = Array.from({ length: columns }, () => Math.random() * height);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const chars = "01AI<>[]{}:=+-*/".split("");

    function draw() {
      // fade frame
      ctx.fillStyle = "rgba(7, 11, 18, 0.14)"; // matches bg
      ctx.fillRect(0, 0, width, height);

      // code rain
      ctx.font = "14px monospace";
      for (let i = 0; i < drops.length; i++) {
        const x = i * 16;
        const y = drops[i] as number;
        ctx.fillStyle = i % 5 === 0 ? "rgba(180, 51, 255, 0.85)" : "rgba(51, 208, 255, 0.9)";
        const ch = chars[(Math.random() * chars.length) | 0];
        ctx.fillText(ch, x, y);
        drops[i] = y > height + 20 ? -Math.random() * 200 : y + (12 + Math.random() * 18);
      }

      // horizontal scanlines overlay
      const scanlineH = 3;
      ctx.fillStyle = "rgba(255,255,255,0.02)";
      for (let y = 0; y < height; y += scanlineH) {
        ctx.fillRect(0, y, width, 1);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-50"
    />
  );
}
