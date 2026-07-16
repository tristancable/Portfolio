"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  const dashOffset = useTransform(progress, [0, 1], [126, 0]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-12 right-8 z-50"
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="relative w-12 h-12 rounded-sm bg-surface border border-edge flex items-center justify-center text-bone hover:border-accent hover:text-accent transition cursor-pointer"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" aria-hidden>
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(232,228,220,0.12)"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="#FF3B1F"
            strokeWidth="2"
            fill="none"
            strokeDasharray="126"
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <ArrowUp size={18} />
      </button>
    </motion.div>
  );
}
