"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { useState } from "react";
import { techIcons } from "@/lib/tech-icons";
import ProjectCard from "@/components/ui/ProjectCard";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
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

    const [spotlight, setSpotlight] = useState<Record<string, { x: number; y: number }>>({});

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
                        const Icon = techIcons[tech];
                        const isSelected = filters.includes(tech);

                        return (
                            <button
                                key={tech}
                                onClick={() => toggleFilter(tech)}
                                className={`flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-zinc-800 border text-gray-300 hover:border-cyan-400 transition
      ${isSelected
                                        ? "bg-cyan-400/20 border-cyan-400 text-white hover:bg-cyan-400/30"
                                        : "bg-zinc-900/40 border-zinc-700 text-gray-300 hover:bg-cyan-400/10 hover:text-white"
                                    }`}
                            >
                                {Icon && <Icon className="text-sm text-cyan-400" />}
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
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                spotlight={spotlight}
                                setSpotlight={setSpotlight}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container >
        </Section >
    );
}