"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function Projects() {
    const [filters, setFilters] = useState<string[]>([]);
    const [matchAll, setMatchAll] = useState(true);

    const techStacks = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

    const toggleFilter = (tech: string) =>
        setFilters((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );

    const resetFilters = () => setFilters([]);

    const filteredProjects = filters.length
        ? projects.filter((project) =>
            matchAll
                ? filters.every((filter) => project.tech.includes(filter)) // AND
                : filters.some((filter) => project.tech.includes(filter))   // OR
        )
        : projects;

    return (
        <Section id="projects">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Projects
                    </h2>
                    <hr className="w-16 border-t-2 border-cyan-400 mx-auto mt-4" />
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                    <button
                        onClick={resetFilters}
                        className="px-4 py-2 rounded-full border border-zinc-800 font-medium text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-white transition"
                    >
                        Reset All Filters
                    </button>

                    <button
                        onClick={() => setMatchAll(!matchAll)}
                        className={`px-4 py-2 rounded-full border font-medium text-sm transition
            ${matchAll
                                ? "bg-cyan-400/20 border-cyan-400 text-white hover:bg-cyan-400/30"
                                : "bg-zinc-900/40 border-zinc-700 text-gray-300 hover:bg-cyan-400/10 hover:text-white"
                            }`}
                    >
                        Match {matchAll ? "All" : "Any"}
                    </button>
                </div>

                {/* Tech Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    {techStacks.map((tech) => {
                        const isSelected = filters.includes(tech);
                        return (
                            <button
                                key={tech}
                                onClick={() => toggleFilter(tech)}
                                className={`px-4 py-2 rounded-full border font-medium text-sm transition
                  ${isSelected
                                        ? "bg-cyan-400/20 border-cyan-400 text-white hover:bg-cyan-400/30"
                                        : "bg-zinc-900/40 border-zinc-700 text-gray-300 hover:bg-cyan-400/10 hover:text-white"
                                    }`}
                            >
                                {tech}
                            </button>
                        );
                    })}
                </div>

                {/* Project Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.slug}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8"
                            >
                                {/* Spotlight background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(600px circle at 50% 50%, rgba(59,130,246,0.15), transparent 40%)`,
                                    }}
                                />

                                {/* Border glow */}
                                <div className="absolute inset-0 rounded-2xl border border-zinc-800 group-hover:border-cyan-400 transition-all duration-300" />

                                {/* Bottom gradient fade */}
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                                <div className="relative">
                                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <p className="text-sm text-cyan-400 mb-6">{project.tech.join(" • ")}</p>

                                    <motion.div whileHover="hover" initial="initial" className="inline-block">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 text-white font-medium hover:border-cyan-400/50 hover:bg-cyan-400/10 transition shadow-lg"
                                        >
                                            View Project
                                            <motion.span
                                                className="inline-block"
                                                variants={{ initial: { x: 0 }, hover: { x: 4 } }}
                                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            >
                                                →
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </Section>
    );
}