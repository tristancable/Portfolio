"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, memo } from "react";
import { techIcons } from "@/lib/tech-icons";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    screenshots?: string[];
  };
};

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<NodeJS.Timeout | null>(null);
  const screenshots = project.screenshots ?? [];
  const hasImages = screenshots.length > 0;

  const startCarousel = () => {
    if (hasImages && screenshots.length > 1 && !carouselRef.current) {
      carouselRef.current = setInterval(() => {
        setImageIndex((i) => (i + 1) % screenshots.length);
      }, 1200);
    }
  };

  const stopCarousel = () => {
    if (carouselRef.current) {
      clearInterval(carouselRef.current);
      carouselRef.current = null;
    }
    setImageIndex(0);
  };

  useEffect(() => {
    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, scale: 1.01 }}
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      // Added h-full and flex-col back to ensure consistent card heights in the row
      className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 cursor-pointer transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] h-full flex flex-col"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.12), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {hasImages && (
          <div className="relative h-48 mb-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={screenshots[imageIndex]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {screenshots.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {screenshots.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === imageIndex ? "w-4 bg-cyan-400" : "w-1 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-3 text-white">
          {project.title}
        </h3>

        {/* Added flex-grow here. This allows the description to take up available space, 
            pushing the tech tags and button to the bottom even if there is no image. */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => {
            const Icon = techIcons[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] rounded-lg bg-zinc-800/50 border border-zinc-700 text-gray-300"
              >
                {Icon && <Icon className="text-cyan-400" />}
                {tech}
              </span>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider transition-colors group-hover:text-cyan-300">
          <Link
            href={`/projects/${project.slug}`}
            className="after:content-[''] after:absolute after:inset-0 after:z-20"
          >
            View Project
          </Link>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
