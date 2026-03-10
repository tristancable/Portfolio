"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";

export default function ResumePage() {
    return (
        <div className="relative min-h-screen bg-black text-white py-24">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

            <div className="relative container mx-auto max-w-4xl px-6">
                <BackButton buttonText="Back to Home" targetLink="home" />

                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-8 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Resume
                </motion.h1>

                {/* Resume preview */}
                <motion.div
                    className="border border-zinc-800 rounded-2xl overflow-hidden mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-[80vh]"
                        title="Resume Preview"
                    />
                </motion.div>

                {/* Download button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-400 text-white font-medium hover:bg-purple-400/20 transition shadow-lg"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
}