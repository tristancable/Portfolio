"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ScrollLink from "@/components/ui/ScrollLink";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel } from "react-icons/si";

export default function Hero() {
    const { scrollY } = useScroll();
    const scrollFade = useTransform(scrollY, [0, 100], [1, 0]);

    const [typedText, setTypedText] = useState("");
    const fullText = "Web Developer · Software Engineer · Full-Stack Developer";

    const techStack = [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Vercel", icon: SiVercel },
    ]

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 35);
        return () => clearInterval(interval);
    }, []);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <Section className="relative flex items-center min-h-screen overflow-x-hidden overflow-y-visible">
            {/* Fixed background blobs, horizontally centered */}
            {/* <motion.div
                animate={{ x: mouse.x, y: mouse.y }}
                transition={{ type: "spring", stiffness: 50 }}
                className="fixed -z-20 w-[600px] h-[800px] bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-indigo-500/10 blur-3xl rounded-full top-[-800px] left-1/2 -translate-x-1/2"
            />
            <motion.div
                animate={{ x: -mouse.x, y: -mouse.y }}
                transition={{ type: "spring", stiffness: 50 }}
                className="fixed -z-20 w-[1100px] h-[1800px] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/20 blur-3xl rounded-full bottom-[-700px] left-1/2 -translate-x-1/2"
            /> */}

            {/* Grain overlay */}
            {/* <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,#ffffff0a 0 1px,#00000000 1px 2px)]" /> */}

            <Container className="text-center relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                            Tristan Cable
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 mb-4 h-8">
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </h2>
                    <p className="text-gray-400 text-md md:text-lg mb-10">
                        Crafting clean, modern web experiences with responsive design and smooth interactions.
                    </p>

                    <div className="mb-12">
                        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
                            Built with
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.map(({ name, icon: Icon }) => (
                                <motion.span
                                    key={name}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-900/70 border border-zinc-800 rounded-full backdrop-blur-md hover:border-cyan-400 transition-colors"
                                >
                                    <Icon className="text-lg text-cyan-400" />
                                    {name}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <ScrollLink
                            targetId="projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition shadow-lg"
                        >
                            View My Work
                            <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                                →
                            </motion.span>
                        </ScrollLink>

                        <ScrollLink
                            targetId="contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 text-white font-medium hover:bg-cyan-400/20 transition"
                        >
                            Contact Me
                        </ScrollLink>

                        <a href="/resume" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-400 text-white font-medium hover:bg-purple-400/20 transition">
                            Resume
                        </a>
                    </div>
                </motion.div>
            </Container>

            <motion.div style={{ opacity: scrollFade }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
                ↓ Scroll
            </motion.div>
        </Section>
    );
}