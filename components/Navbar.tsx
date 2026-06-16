"use client";

import ScrollLink from "@/components/ui/ScrollLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      let current = "home";

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (section: string) =>
    `hover:text-white transition ${
      activeSection === section ? "text-white font-semibold" : "text-gray-300"
    }`;

  const mobileLinkClass = (section: string) =>
    `block w-full text-left px-4 py-3 rounded-xl text-base transition ${
      activeSection === section
        ? "bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30"
        : "text-gray-300 hover:bg-zinc-800/60 hover:text-white"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <ScrollLink
          targetId="home"
          onNavigate={closeMenu}
          className="font-bold text-lg tracking-wide hover:opacity-80 transition"
        >
          Tristan Cable
        </ScrollLink>

        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map(({ id, label }) => (
            <ScrollLink key={id} targetId={id} className={linkClass(id)}>
              {label}
            </ScrollLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden p-2 -mr-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800/60 transition cursor-pointer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ id, label }) => (
              <ScrollLink
                key={id}
                targetId={id}
                onNavigate={closeMenu}
                className={mobileLinkClass(id)}
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
