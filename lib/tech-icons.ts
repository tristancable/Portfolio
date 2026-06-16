import { IconType } from "react-icons"; // Import the specific type
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaVuejs,
  FaWindows,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiAstro,
  SiMdx,
  SiDotnet,
  SiSharp,
  SiElectron,
  SiVite,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";

// Define the Record with IconType instead of any
export const techIcons: Record<string, IconType> = {
  // Web Core
  "Next.js": SiNextdotjs,
  React: FaReact,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  Vite: SiVite,
  "Vue.js": FaVuejs,
  EJS: FaJs,
  "Node.js": FaNodeJs,

  // Backend & Database
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  SQL: DiDatabase,

  // .NET & Desktop
  ".NET": SiDotnet,
  ".NET MAUI": SiDotnet,
  "Blazor Hybrid": SiDotnet,
  "C#": SiSharp,
  Electron: SiElectron,
  Windows: FaWindows,

  // Content & Tools
  Astro: SiAstro,
  MDX: SiMdx,
  SMTP: FaWindows,
};
