"use client";

import { Suspense } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import dynamic from "next/dynamic";

// Dynamically import the client-only scroll handler
const ScrollHandler = dynamic(() => import("@/components/ui/ScrollHandler"), {
  ssr: false, // <-- this prevents SSR
});

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}