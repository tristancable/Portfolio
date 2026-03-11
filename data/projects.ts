import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "ai-skincare-quiz",
        title: "AI-Powered Skincare Quiz",
        description:
            "A personalized skincare recommendation platform built with Next.js and Supabase.",
        tech: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "TailwindCSS",
        ],
        github: "https://github.com/nexusrex/skincare-ai",
        live: "https://your-live-url.com",
        problem:
            "Users struggle to find skincare products tailored to their unique skin type and concerns.",
        solution:
            "Built a quiz-based system that collects user inputs, stores responses in Supabase, and dynamically generates product recommendations.",
        challenges: [
            "Designing relational database schema for quiz + users",
            "Handling authentication securely",
            "Creating dynamic recommendation logic",
            "Managing server/client data boundaries in Next.js App Router",
        ],
        screenshots: [
            
        ]
    },
    {
        slug: "portfolio-v1",
        title: "Portfolio Website v1",
        description:
            "My first personal portfolio website built with Astro to showcase my projects and experience.",
        tech: [
            "Astro",
            "HTML",
            "CSS",
            "MDX",
            "JavaScript",
            "TypeScript",
        ],
        github: "https://github.com/tristancable/portfolio",
        live: "https://tristancable.vercel.app",
        problem:
            "I needed a personal website to showcase my projects, skills, and resume when applying for internships and developer positions.",
        solution:
            "I built my first portfolio using Astro with MDX-based project pages, allowing me to write project content in Markdown while keeping the site fast and easy to maintain.",
        challenges: [
            "Learning Astro and component-based static site architecture",
            "Structuring project pages using MDX",
            "Designing a clean layout for showcasing projects",
            "Deploying and configuring the site for public access",
        ],
        screenshots: [
            "/projects/portfolio-v1/home.png",
            "/projects/portfolio-v1/about.png",
            "/projects/portfolio-v1/skills.png",
            "/projects/portfolio-v1/career.png",
            "/projects/portfolio-v1/projects.png",
            "/projects/portfolio-v1/contact.png",
        ]
    },
];