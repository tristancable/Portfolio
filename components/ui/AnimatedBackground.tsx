"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black">

            {/* Animated gradient layer */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: [
                        "0% 0%",
                        "100% 100%",
                        "0% 0%",
                    ],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    background: `
                        radial-gradient(circle at 20% 25%, rgba(59,130,246,0.20), transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(6,182,212,0.18), transparent 40%),
                        radial-gradient(circle at 50% 95%, rgba(168,85,247,0.18), transparent 45%)
                    `,
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Floating glow 1 */}
            <motion.div
                animate={{
                    x: [0, 120, -80, 0],
                    y: [0, -100, 60, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-blue-500/25 blur-[120px] rounded-full transform-gpu"
            />

            {/* Floating glow 2 */}
            <motion.div
                animate={{
                    x: [0, -140, 100, 0],
                    y: [0, 120, -80, 0],
                    scale: [1, 0.95, 1.08, 1],
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-cyan-400/25 blur-[130px] rounded-full transform-gpu"
            />

            {/* Purple accent glow */}
            <motion.div
                animate={{
                    x: [0, 90, -60, 0],
                    y: [0, 70, -50, 0],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[45%] left-[35%] w-[520px] h-[520px] bg-purple-500/20 blur-[110px] rounded-full transform-gpu"
            />

            {/* Subtle grain */}
            <div className="absolute inset-0 opacity-[0.025] bg-[repeating-linear-gradient(45deg,#ffffff 0 1px,transparent 1px 2px)]" />

        </div>
    );
}