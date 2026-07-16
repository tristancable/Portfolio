"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-ink text-bone py-24">
      <div className="relative container mx-auto max-w-4xl px-6">
        <BackButton buttonText="Back to Home" targetLink="home" />

        <motion.h1
          className="font-display text-5xl md:text-6xl font-bold mb-8 mt-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h1>

        <motion.div
          className="border border-edge rounded-sm overflow-hidden mb-6 bg-surface"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src="/Resume.pdf"
            className="w-full h-[80vh]"
            title="Resume Preview"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <a
            href="/Resume.pdf"
            download="Tristan-Cable-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-accent text-accent font-medium hover:bg-accent/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}
