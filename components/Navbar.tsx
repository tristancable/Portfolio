"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollLink from "@/components/ui/ScrollLink";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projects", "contact"];
            let current = "home";

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            // If at bottom, set last section
            if (scrollY + windowHeight >= docHeight - 2) {
                current = sections[sections.length - 1];
            } else {
                sections.forEach((section) => {
                    const el = document.getElementById(section);
                    if (el) {
                        const offsetTop = el.offsetTop;
                        if (scrollY >= offsetTop - 100) {
                            current = section;
                        }
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (section: string) =>
        `hover:text-white transition ${activeSection === section ? "text-white font-semibold" : "text-gray-300"
        }`;

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-zinc-800"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <ScrollLink targetId="home" className="font-bold text-lg tracking-wide hover:opacity-80 transition">
                    Tristan Cable
                </ScrollLink>

                <div className="flex gap-6 text-sm">

                    <ScrollLink targetId="home" className={linkClass("home")}>
                        Home
                    </ScrollLink>
                    <ScrollLink targetId="projects" className={linkClass("projects")}>
                        Projects
                    </ScrollLink>
                    <ScrollLink targetId="contact" className={linkClass("contact")}>
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </motion.nav>
    );
}