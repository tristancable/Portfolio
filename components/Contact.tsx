"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import GithubCalendar from "@/components/ui/GithubCalendar";
import { motion } from "framer-motion";

export default function Contact() {
    const socialLinks = [
        {
            label: "Email",
            href: "mailto:tristancable@gmail.com",
            style: "border border-red-400 text-white hover:bg-red-400/20 hover:opacity-90",
        },
        {
            label: "GitHub",
            href: "https://github.com/tristancable",
            style: "border border-white text-white hover:bg-white/20 hover:opacity-90",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/tristancable",
            style: "border border-cyan-400 text-white hover:bg-cyan-400/20 hover:opacity-90",
        },
    ];

    return (
        <Section id="contact" className="bg-zinc-900">
            <Container className="text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Let’s Work Together
                </motion.h2>

                <motion.p
                    className="text-gray-400 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Interested in collaborating or hiring? Reach out below.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-6 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.label !== "Email" ? "_blank" : undefined}
                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition shadow-lg ${link.style}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <h3 className="text-xl font-semibold mb-4">GitHub Activity</h3>
                    <GithubCalendar />
                </motion.div>
            </Container>
        </Section>
    );
}