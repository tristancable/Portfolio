"use client";

import { motion } from "framer-motion";
import ScrollLink from "@/components/ui/ScrollLink";

export default function BackButton({
    buttonText,
    targetLink = "/",
}: {
    buttonText: string;
    targetLink?: string;
}) {
    return (
        <motion.div
            whileHover="hover"
            initial="initial"
            className="inline-block"
        >
            <ScrollLink
                targetId={targetLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition shadow-md"
            >
                <motion.span
                    className="inline-block"
                    variants={{
                        initial: { x: 0 },
                        hover: { x: -4 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                    ←
                </motion.span>

                {buttonText}
            </ScrollLink>
        </motion.div>
    );
}