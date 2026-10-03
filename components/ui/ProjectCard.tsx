"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, memo, type MouseEvent } from "react";
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
  const carouselRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const screenshots = project.screenshots ?? [];
  const hasImages = screenshots.length > 0;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

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
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 16);
    rotateX.set((0.5 - py) * 16);
  };

  useEffect(() => {
    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current);
    };
  }, []);

  return (
    <div className="h-full" style={{ perspective: 1000 }}>
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={startCarousel}
        onMouseLeave={stopCarousel}
        onMouseMove={handleMove}
        className="relative group rounded-sm overflow-hidden bg-surface border border-edge p-8 cursor-pointer h-full flex flex-col transition-colors hover:border-accent"
      >
        <div
          className="relative z-10 flex flex-col h-full"
          style={{ transform: "translateZ(20px)" }}
        >
          {hasImages && (
            <div
              className="relative h-48 mb-6 overflow-hidden rounded-sm border border-edge bg-ink"
              style={{ transform: "translateZ(28px)" }}
            >
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
                    quality={100}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {screenshots.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                  {screenshots.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-sm transition-all duration-300 ${
                        i === imageIndex ? "w-4 bg-accent" : "w-1 bg-bone/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <h3 className="font-display text-xl font-semibold mb-3 text-bone">
            {project.title}
          </h3>

          <p className="text-muted text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => {
              const Icon = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] rounded-sm bg-ink border border-edge text-muted"
                >
                  {Icon && <Icon className="text-accent" />}
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wide transition-colors group-hover:text-bone">
            <Link
              href={`/projects/${project.slug}`}
              className="after:content-[''] after:absolute after:inset-0 after:z-20"
            >
              View project
            </Link>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
