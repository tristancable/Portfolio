"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ScrollLink from "@/components/ui/ScrollLink";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel } from "react-icons/si";

const subtitle =
  "Web Developer · Software Engineer · Full-Stack Developer";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Vercel", icon: SiVercel },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollFade = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <Section
      id="home"
      className="relative flex items-center min-h-screen overflow-x-hidden overflow-y-visible"
    >
      <Container className="text-center relative z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Tristan Cable
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4 min-h-[4.5rem] md:min-h-8 flex items-center justify-center px-4">
            {subtitle}
          </h2>
          <p className="text-gray-400 text-md md:text-lg mb-10">
            Crafting clean, modern web experiences with responsive design and
            smooth interactions.
          </p>

          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
              Built with
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-900/70 border border-zinc-800 rounded-full backdrop-blur-md hover:border-cyan-400 transition-colors"
                >
                  <Icon className="text-lg text-cyan-400" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ScrollLink
              targetId="projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition shadow-lg"
            >
              View My Work
              <span className="inline-block">→</span>
            </ScrollLink>

            <ScrollLink
              targetId="contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 text-white font-medium hover:bg-cyan-400/20 transition"
            >
              Contact Me
            </ScrollLink>

            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-400 text-white font-medium hover:bg-purple-400/20 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>

      <motion.div
        style={{ opacity: scrollFade }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm hidden md:block"
      >
        ↓ Scroll
      </motion.div>
    </Section>
  );
}