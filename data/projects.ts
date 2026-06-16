import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "lumiere",
    title: "Lumiere",
    description:
      "A personalized skincare recommendation platform built with Next.js and Supabase.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/tristancable/lumiere",
    live: "",
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
    screenshots: [],
  },
  {
    slug: "carspec",
    title: "CarSpec",
    description:
      "A Windows desktop application for real-time OBD-II vehicle diagnostics and maintenance tracking.",
    tech: [".NET MAUI", "Blazor Hybrid", "C#", "HTML", "JavaScript", "CSS"],
    github: "https://github.com/tristancable/CarSpec",
    live: "",
    problem:
      "Vehicle owners often find OBD-II data difficult to interpret and struggle to keep a digital log of routine maintenance.",
    solution:
      "Developed a hybrid desktop app that interfaces with vehicle hardware to provide user-friendly diagnostic readouts and automated maintenance reminders.",
    challenges: [
      "Interfacing C# with low-level OBD hardware protocols",
      "Managing cross-platform state in a Blazor Hybrid environment",
      "Designing a dashboard that remains readable in a garage setting",
    ],
    screenshots: [],
  },
  {
    slug: "notes-plus-plus",
    title: "NotesPlusPlus",
    description:
      "A cross-platform, user-friendly note-taking application designed for seamless desktop and mobile use.",
    tech: [".NET MAUI", "Blazor Hybrid", "C#", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/tristancable/NotesPlusPlus",
    live: "",
    problem:
      "Existing note apps are often cluttered with unnecessary features or lack a consistent experience across desktop and mobile.",
    solution:
      "Created a streamlined 'no-instructions-needed' UI that leverages .NET MAUI for native performance and Blazor for a modern web-style interface.",
    challenges: [
      "Implementing a robust file saving system for local storage",
      "Optimizing the UI for both touch and mouse input",
      "Ensuring 100% feature parity across different OS environments",
    ],
    screenshots: [],
  },
  {
    slug: "shanes-story",
    title: "Shane's Story",
    description:
      "A professional fundraising and informational landing page for an upcoming film production.",
    tech: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/NexusRex/shanes-story",
    live: "https://shanes-story.vercel.app/",
    problem:
      "A film project needed a central hub to build credibility, share movie details, and drive fundraising efforts.",
    solution:
      "Built a high-performance, responsive website using Vite and React to ensure fast load times and a modern aesthetic for potential donors.",
    challenges: [
      "Balancing high-quality media assets with site performance",
      "Creating an engaging narrative flow through web design",
      "Implementing responsive layouts for mobile users",
    ],
    screenshots: [],
  },
  {
    slug: "drivesync",
    title: "DriveSync",
    description:
      "A desktop file synchronization or management utility built as a native-feeling experience.",
    tech: ["Electron", "React", "TypeScript", "HTML", "CSS"],
    github: "https://github.com/tristancable/DriveSync",
    live: "",
    problem:
      "Managing files across different environments can be clunky through standard web browsers.",
    solution:
      "Used Electron to wrap a React frontend, allowing the application to interact with the local file system while maintaining a modern web UI.",
    challenges: [
      "Handling Inter-Process Communication (IPC) in Electron",
      "Managing large file streams without blocking the UI thread",
      "Securing the Electron bridge to prevent vulnerabilities",
    ],
    screenshots: [],
  },
  {
    slug: "redline",
    title: "Redline",
    description:
      "A social media platform prototype featuring user interaction and dynamic content feeds.",
    tech: [".NET", "C#", "Razor Pages", "CSS"],
    github: "https://github.com/tristancable/Redline/",
    live: "",
    problem:
      "Traditional social platforms are often opaque in how they handle data and user posts.",
    solution:
      "Built a server-side rendered social application using .NET and Razor, focusing on secure user authentication and relational data management.",
    challenges: [
      "Implementing a secure 'Like' and 'Follow' system in C#",
      "Managing complex SQL joins for social feeds",
      "Handling image uploads and server-side processing",
    ],
    screenshots: [],
  },
  {
    slug: "digit-recognizer",
    title: "Handwritten Digit Recognizer",
    description:
      "An AI-powered desktop application that identifies handwritten numbers in real-time.",
    tech: [".NET MAUI", "C#", "Machine Learning"],
    github: "https://github.com/tristancable/Biscuit/",
    live: "",
    problem:
      "Bridging the gap between machine learning models and end-user desktop applications.",
    solution:
      "Integrated a digit recognition model into a .NET MAUI app, allowing users to draw on a canvas and receive instant predictions.",
    challenges: [
      "Processing canvas drawing data into a format the model understands",
      "Optimizing model inference for real-time results",
      "Designing an intuitive drawing interface",
    ],
    screenshots: [],
  },
  {
    slug: "goal-tracker",
    title: "Goal Tracker & Planner",
    description:
      "A productivity app featuring user registration and structured goal planning.",
    tech: ["Vue.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/tristancable/BlepBlipBlop/",
    live: "",
    problem:
      "Staying consistent with long-term goals is difficult without a structured tracking system.",
    solution:
      "Developed a Vue-based planner that allows users to create accounts, break goals into tasks, and track progress over time.",
    challenges: [
      "Managing complex application state with Vue",
      "Implementing persistent user data across sessions",
      "Creating a drag-and-drop or checklist interface",
    ],
    screenshots: [],
  },
  {
    slug: "game-launcher",
    title: "Web Game Hub",
    description:
      "An interactive gaming portal with custom idle games, a points-based economy, and a shop.",
    tech: ["HTML", "JavaScript", "EJS", "CSS", "Node.js"],
    github: "https://github.com/tristancable/WebsiteGameLauncher/",
    live: "",
    problem:
      "Simple web games often lack a sense of progression or persistent rewards.",
    solution:
      "Created a centralized hub where playing games like 'Idle Atom' and 'TTYD' earns currency to be spent in a global shop, tied to user accounts.",
    challenges: [
      "Preventing front-end 'cheating' in JavaScript games",
      "Designing a balanced virtual economy and shop prices",
      "Managing dynamic templates using EJS",
    ],
    screenshots: [],
  },
  {
    slug: "bootify",
    title: "Bootify",
    description:
      "A system utility that monitors computer uptime and sends automated email notifications on startup.",
    tech: ["C#", ".NET", "SMTP"],
    github: "https://github.com/tristancable/Bootify/",
    live: "",
    problem:
      "Users needing to know if their remote computers have rebooted (e.g., after a power outage) without manual checking.",
    solution:
      "A lightweight C# service that triggers an SMTP email event as soon as the Windows user profile loads.",
    challenges: [
      "Configuring the app to run silently on startup",
      "Securely handling SMTP credentials",
      "Ensuring the app waits for network connectivity before sending",
    ],
    screenshots: [],
  },
  {
    slug: "discord-bot-dashboard",
    title: "Discord Bot & Dashboard",
    description:
      "A full-stack Discord integration featuring a bot, a management dashboard, and a custom backend.",
    tech: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    github: "",
    live: "https://kamigrove.com/",
    problem:
      "Discord bots are often difficult to configure via text commands alone.",
    solution:
      "Built a web-based dashboard using React that allows users to toggle bot features and view logs via a dedicated backend API.",
    challenges: [
      "Syncing Discord OAuth2 authentication with the dashboard",
      "Real-time communication between the bot and the web server",
      "Scaling the bot to handle multiple guild events",
    ],
    screenshots: [],
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio Website v1",
    description:
      "My first personal portfolio website built with Astro to showcase my projects and experience.",
    tech: ["Astro", "HTML", "CSS", "MDX", "JavaScript", "TypeScript"],
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
    ],
  },
];
