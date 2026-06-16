import { Suspense } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollHandler from "@/components/ui/ScrollHandler";

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
