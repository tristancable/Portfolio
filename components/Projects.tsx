"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { useState } from "react";
import { techIcons } from "@/lib/tech-icons";
import ProjectCard from "@/components/ui/ProjectCard";
import { FaFilter, FaChevronDown, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [filters, setFilters] = useState<string[]>([]);
  const [matchAll, setMatchAll] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const techStacks = Array.from(
    new Set(projects.flatMap((p) => p.tech)),
  ).sort();

  const toggleFilter = (tech: string) =>
    setFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );

  const resetFilters = () => {
    setFilters([]);
    setIsFiltersOpen(false);
  };

  const filteredProjects = filters.length
    ? projects.filter((project) =>
        matchAll
          ? filters.every((filter) => project.tech.includes(filter))
          : filters.some((filter) => project.tech.includes(filter)),
      )
    : projects;

  return (
    <Section id="projects">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Section */}
        <div className="sticky top-24 z-30 mb-12">
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center px-6 py-4 gap-4">
              <button
                type="button"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="flex flex-1 items-center gap-3 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer text-left min-h-[2rem]"
              >
                <FaFilter
                  className={filters.length > 0 ? "text-cyan-400" : ""}
                />
                Filter by Technology
                {filters.length > 0 && (
                  <span className="bg-cyan-500 text-black text-[10px] px-2 py-0.5 rounded-full font-black">
                    {filters.length}
                  </span>
                )}
                <FaChevronDown
                  className={`ml-auto transition-transform duration-300 ${
                    isFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {filters.length > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetFilters();
                  }}
                  className="shrink-0 text-xs font-bold text-zinc-500 hover:text-red-400 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <FaTimes /> RESET
                </button>
              )}
            </div>

            <AnimatePresence>
              {isFiltersOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="border-t border-zinc-800 bg-zinc-900/50"
                >
                  <div className="p-6 pt-2">
                    <div className="flex items-center gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setMatchAll(!matchAll)}
                        className={`cursor-pointer px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border transition-all ${
                          matchAll
                            ? "bg-cyan-400 border-cyan-400 text-black"
                            : "border-zinc-700 text-zinc-500 hover:border-zinc-500"
                        }`}
                      >
                        Match {matchAll ? "All Selected" : "Any Selected"}
                      </button>
                      <p className="text-[11px] text-zinc-500 font-medium">
                        Showing {filteredProjects.length} projects
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {techStacks.map((tech) => {
                        const Icon = techIcons[tech];
                        const isSelected = filters.includes(tech);
                        return (
                          <button
                            type="button"
                            key={tech}
                            onClick={() => toggleFilter(tech)}
                            className={`cursor-pointer flex items-center gap-2 px-4 py-2 text-xs rounded-xl border transition-all ${
                              isSelected
                                ? "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                : "bg-zinc-800/40 border-zinc-800 text-zinc-400 hover:border-zinc-600"
                            }`}
                          >
                            {Icon && <Icon size={14} />}
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
