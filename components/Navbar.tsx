"use client";

import ScrollLink from "@/components/ui/ScrollLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    `relative transition ${
      activeSection === section
        ? "text-bone font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-accent"
        : "text-muted hover:text-bone"
    }`;

  const mobileLinkClass = (section: string) =>
    `block w-full text-left px-4 py-3 rounded-sm text-base transition border ${
      activeSection === section
        ? "border-accent text-accent bg-accent/10 font-semibold"
        : "border-transparent text-muted hover:bg-surface hover:text-bone"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-ink border-b border-edge">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <ScrollLink
          targetId="home"
          onNavigate={closeMenu}
          className="font-display font-bold text-lg tracking-tight text-bone hover:text-accent transition"
        >
          Tristan Cable
        </ScrollLink>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(({ id, label }) => (
            <ScrollLink key={id} targetId={id} className={linkClass(id)}>
              {label}
            </ScrollLink>
          ))}
          <Link
            href="/resume"
            className="text-muted hover:text-bone transition"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden p-2 -mr-2 rounded-sm text-muted hover:text-bone hover:bg-surface transition cursor-pointer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-edge bg-ink px-4 py-4">
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
            <Link
              href="/resume"
              onClick={closeMenu}
              className="block w-full text-left px-4 py-3 rounded-sm text-base text-muted hover:bg-surface hover:text-bone border border-transparent"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
