import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiSupabase,
    SiPostgresql,
    SiAstro,
    SiMdx,
} from "react-icons/si";

export const techIcons: Record<string, any> = {
    "Next.js": SiNextdotjs,
    React: FaReact,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
    Supabase: SiSupabase,
    PostgreSQL: SiPostgresql,
    Astro: SiAstro,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    MDX: SiMdx,
};