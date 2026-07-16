"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ScrollLink from "@/components/ui/ScrollLink";

const HeroScene = dynamic(() => import("@/components/ui/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-ink" aria-hidden />
  ),
});

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollFade = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <Section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      <HeroScene className="absolute inset-0 z-0 opacity-40 md:opacity-100 md:left-[42%] md:right-0 md:inset-y-0" />

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-ink via-ink/90 to-ink/40 md:to-transparent pointer-events-none"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="max-w-xl pt-20 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-bone mb-5"
          >
            Tristan Cable
            <span className="mt-3 block h-1 w-16 bg-accent" aria-hidden />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted mb-4"
          >
            Software engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-bone/80 text-base md:text-lg mb-10 leading-relaxed"
          >
            Building full-stack products with sharp interfaces, solid systems,
            and motion that earns its place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <ScrollLink
              targetId="projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-bone text-ink font-medium hover:opacity-90 transition"
            >
              View work
              <span aria-hidden>→</span>
            </ScrollLink>

            <ScrollLink
              targetId="contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-accent text-accent font-medium hover:bg-accent/10 transition"
            >
              Contact
            </ScrollLink>
          </motion.div>
        </div>
      </Container>

      <motion.div
        style={{ opacity: scrollFade }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted text-sm hidden md:block z-10"
      >
        ↓ Scroll
      </motion.div>
    </Section>
  );
}
