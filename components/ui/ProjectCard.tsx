"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { techIcons } from "@/lib/tech-icons";

type ProjectCardProps = {
    project: {
        slug: string;
        title: string;
        description: string;
        tech: string[];
        screenshots?: string[];
    };
    spotlight: Record<string, { x: number; y: number }>;
    setSpotlight: React.Dispatch<
        React.SetStateAction<Record<string, { x: number; y: number }>>
    >;
};

export default function ProjectCard({ project, spotlight, setSpotlight }: ProjectCardProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };
    const [imageIndex, setImageIndex] = useState(0);
    const carouselRef = useRef<NodeJS.Timeout | null>(null);
    const screenshots = project.screenshots ?? [];
    useEffect(() => {
        return () => {
            if (carouselRef.current) clearInterval(carouselRef.current);
        };
    }, []);


    return (
        <motion.div
            key={project.slug}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSpotlight((prev) => ({
                    ...prev,
                    [project.slug]: {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                    },
                }));
            }}
        >
            {/* spotlight */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at ${spotlight[project.slug]?.x || 0
                        }px ${spotlight[project.slug]?.y || 0}px, rgba(59,130,246,0.22), transparent 40%)`,
                }}
            />

            <div className="relative">

                {screenshots.length > 0 && (
                    <Link
                        href={`/projects/${project.slug}`}
                        className="relative block mb-6 overflow-hidden rounded-xl border border-zinc-800 group/image cursor-pointer"
                        onMouseEnter={() => {
                            if (screenshots.length > 1) {
                                carouselRef.current = setInterval(() => {
                                    setImageIndex((i) => (i + 1) % screenshots.length);
                                }, 1200);
                            }
                        }}
                        onMouseLeave={() => {
                            if (carouselRef.current) clearInterval(carouselRef.current);
                            setImageIndex(0);
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={screenshots[imageIndex]}
                                src={screenshots[imageIndex]}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                            />
                        </AnimatePresence>
                    </Link>
                )}

                {screenshots.length > 1 && (
                    <div className="flex gap-1 justify-center mt-3 mb-3">
                        {screenshots.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === imageIndex
                                    ? "w-4 bg-cyan-400"
                                    : "w-1.5 bg-zinc-600"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => {
                        const Icon = techIcons[tech];

                        return (
                            <span
                                key={tech}
                                className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-zinc-900/80 backdrop-blur border border-zinc-700 text-gray-300 hover:border-cyan-400 transition"
                            >
                                {Icon && <Icon className="text-sm text-cyan-400" />}
                                {tech}
                            </span>
                        );
                    })}
                </div>

                <motion.div
                    whileHover="hover"
                    initial="initial"
                    className="inline-block"
                >
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 text-white font-medium hover:border-cyan-400/50 hover:bg-cyan-400/10 transition"
                    >
                        View Project
                        <motion.span
                            className="inline-block"
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 4 }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}