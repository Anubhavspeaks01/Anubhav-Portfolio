"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

// AI-themed Constellation / Neural Network background
function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Config: keep numbers modest for performance
  const COUNT = 140;
  const RADIUS = 3.2;
  const LINK_DIST = 0.9; // max distance to link
  const MAX_LINKS_PER_NODE = 4;

  // base positions and phases
  const base = useMemo(() => {
    const p: number[] = [];
    const phase: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      p.push((Math.random() - 0.5) * RADIUS * 2);
      p.push((Math.random() - 0.5) * RADIUS * 1.4);
      p.push((Math.random() - 0.5) * RADIUS * 2);
      phase.push(Math.random() * Math.PI * 2);
    }
    return { p: new Float32Array(p), phase: new Float32Array(phase) };
  }, []);

  // dynamic positions buffer (mutated each frame)
  const positions = useMemo(() => new Float32Array(COUNT * 3), []);

  // compute link pairs once from base positions (approx)
  const links = useMemo(() => {
    const pairs: number[] = [];
    const linkCount = new Array(COUNT).fill(0);
    const p = base.p;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = p[i * 3] - p[j * 3];
        const dy = p[i * 3 + 1] - p[j * 3 + 1];
        const dz = p[i * 3 + 2] - p[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < LINK_DIST * LINK_DIST && linkCount[i] < MAX_LINKS_PER_NODE && linkCount[j] < MAX_LINKS_PER_NODE) {
          pairs.push(i, j);
          linkCount[i]++;
          linkCount[j]++;
        }
      }
    }
    // preallocate line positions for all pairs (2 points per pair)
    return { pairs: new Uint16Array(pairs), linePositions: new Float32Array(pairs.length * 3) };
  }, [base.p]);

  // build geometries once
  const pointGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const lineGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(links.linePositions, 3));
    return g;
  }, [links.linePositions]);

  // animate: gentle drift using sin/cos around base
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = base.p;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      const phase = base.phase[i];
      positions[idx] = p[idx] + Math.sin(t * 0.35 + phase) * 0.15;
      positions[idx + 1] = p[idx + 1] + Math.cos(t * 0.28 + phase * 1.1) * 0.12;
      positions[idx + 2] = p[idx + 2] + Math.sin(t * 0.31 + phase * 0.9) * 0.15;
    }
    const posAttr = pointsRef.current?.geometry.getAttribute("position");
    if (posAttr) {
      // @ts-ignore - underlying buffer matches
      posAttr.array = positions;
      posAttr.needsUpdate = true;
    }

    // update line positions for pairs
    const lp = links.linePositions;
    let k = 0;
    for (let n = 0; n < links.pairs.length; n += 2) {
      const i = links.pairs[n];
      const j = links.pairs[n + 1];
      const i3 = i * 3;
      const j3 = j * 3;
      lp[k++] = positions[i3];
      lp[k++] = positions[i3 + 1];
      lp[k++] = positions[i3 + 2];
      lp[k++] = positions[j3];
      lp[k++] = positions[j3 + 1];
      lp[k++] = positions[j3 + 2];
    }
    const lineAttr = linesRef.current?.geometry.getAttribute("position");
    if (lineAttr) {
      // @ts-ignore
      lineAttr.array = lp;
      lineAttr.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef} geometry={pointGeometry}>
        {/* @ts-ignore */}
        <PointMaterial size={0.035} sizeAttenuation transparent color="#7af5ff" opacity={0.9} depthWrite={false} />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#45d1ff" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

// (NeuralWave background removed per request)

// Holographic AI brain (wireframe-displaced sphere)
// (Removed AIWireBrain sphere per request)

export default function ThreeScene({ className }: { className?: string }) {
  return (
    <div className={className ?? "absolute inset-0 -z-10"}>
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <NeuralNetwork />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
