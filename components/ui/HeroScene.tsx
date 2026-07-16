"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type PointerEvent,
} from "react";
import * as THREE from "three";

const BONE = "#E8E4DC";
const ACCENT = "#FF3B1F";
const INK = "#090A0C";

function Sculpture({
  reducedMotion,
  pointer,
}: {
  reducedMotion: boolean;
  pointer: MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    if (reducedMotion) {
      group.current.rotation.set(0.35, 0.6, 0.1);
      return;
    }

    const t = state.clock.elapsedTime;
    const targetX = 0.35 + pointer.current.y * 0.35;
    const targetY = 0.6 + pointer.current.x * 0.5 + t * 0.12;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.05,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.05,
    );
  });

  const edges = useMemo(() => {
    const box = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const e = new THREE.EdgesGeometry(box);
    box.dispose();
    return e;
  }, []);

  useEffect(() => {
    return () => {
      edges.dispose();
    };
  }, [edges]);

  const content = (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
        <meshStandardMaterial color={BONE} metalness={0.35} roughness={0.45} />
      </mesh>

      <mesh rotation={[Math.PI / 4, Math.PI / 5, 0]} position={[0.15, 0.2, 0.1]}>
        <boxGeometry args={[0.55, 1.9, 0.55]} />
        <meshStandardMaterial color={ACCENT} metalness={0.2} roughness={0.4} />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 6]} position={[-0.55, -0.35, 0.45]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color={BONE}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      <lineSegments geometry={edges} scale={1.35}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.55} />
      </lineSegments>

      <mesh position={[0.75, -0.55, -0.4]} rotation={[0.4, 0.8, 0.2]}>
        <tetrahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial color={ACCENT} metalness={0.15} roughness={0.5} />
      </mesh>
    </group>
  );

  if (reducedMotion) return content;

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
      {content}
    </Float>
  );
}

function SceneContent({
  reducedMotion,
  pointer,
}: {
  reducedMotion: boolean;
  pointer: MutableRefObject<{ x: number; y: number }>;
}) {
  return (
    <>
      <color attach="background" args={[INK]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} color={BONE} />
      <directionalLight position={[-3, -2, 4]} intensity={0.55} color={ACCENT} />
      <Sculpture reducedMotion={reducedMotion} pointer={pointer} />
    </>
  );
}

export default function HeroScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");
    setReducedMotion(mq.matches);
    setIsMobile(mobileMq.matches);

    const onMotion = () => setReducedMotion(mq.matches);
    const onMobile = () => setIsMobile(mobileMq.matches);
    mq.addEventListener("change", onMotion);
    mobileMq.addEventListener("change", onMobile);
    return () => {
      mq.removeEventListener("change", onMotion);
      mobileMq.removeEventListener("change", onMobile);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
    };
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      className={className}
      aria-hidden
    >
      <Canvas
        dpr={[1, isMobile ? 1.25 : 1.5]}
        camera={{ position: [0, 0.2, 4.2], fov: 42 }}
        frameloop={visible && !reducedMotion ? "always" : "demand"}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <SceneContent reducedMotion={reducedMotion || isMobile} pointer={pointer} />
      </Canvas>
    </div>
  );
}
