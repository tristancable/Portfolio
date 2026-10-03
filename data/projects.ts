import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "waypoint",
    title: "Waypoint",
    description:
      "A VS Code extension that finds and jumps to TODO comments scattered across your project, all in one sidebar panel.",
    tech: ["TypeScript", "VS Code Extension API", "JavaScript", "esbuild"],
    github: "https://github.com/tristancable/Waypoint",
    live: "",
    problem:
      "TODO, FIXME, HACK, and NOTE comments get scattered across a codebase, making it hard to track open work without manually searching every file.",
    solution:
      "Built a VS Code sidebar extension that scans the workspace for configurable comment tags, groups them by file, supports click-to-jump navigation, live refresh on save, mark-as-done, custom tag colors, and a status bar open-todo count.",
    challenges: [
      "Scanning common file types efficiently across a full workspace",
      "Keeping the todo list in sync with live file saves",
      "Supporting custom tags and colors via the waypoint.tags setting",
      "Handling mark-as-done without deleting the underlying comment",
      "Packaging and distributing the extension as a .vsix before Marketplace publishing",
    ],
    screenshots: [
      "/projects/waypoint/Waypoint.png",
      "/projects/waypoint/Waypoint Settings.png",
    ],
  },
  {
    slug: "car-patterns-final",
    title: "Car Patterns Final",
    description:
      "A simple C# console application showcasing three design patterns—one from each category—using a car-related example.",
    tech: ["C#", ".NET"],
    github: "https://github.com/tristancable/Car-Patterns-Final",
    live: "",
    problem:
      "Design patterns are easier to understand when each creational, structural, and behavioral example lives in one cohesive domain instead of isolated snippets.",
    solution:
      "Built a console app that wires Factory Method (Creators) to build different Car types, Observer (Behaviors) to notify listeners on speed changes, and Adapter (Structurals) to wrap a legacy Telemetry API, with shared Core models and interfaces.",
    challenges: [
      "Organizing the project into Console, Core, Creators, Behaviors, and Structurals layers",
      "Implementing Factory Method for different Car types via ICarFactory",
      "Using Observer to notify listeners on speed changes",
      "Adapting a legacy Telemetry API into the current model",
    ],
    screenshots: [],
  },
  {
    slug: "automarket-watch",
    title: "AutoMarket Watch",
    description:
      "A full-stack automotive market tracking platform for enthusiasts to track vehicle valuations, curate watchlists, and connect with collectors.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    github: "https://github.com/tristancable/AutoMarketWatch",
    live: "",
    problem:
      "Car enthusiasts need a single place to track real-time vehicle valuations, maintain a personal watchlist, and discover what other collectors are following.",
    solution:
      "Built a MERN-style app with a live NHTSA market feed, JWT auth, per-user MongoDB watchlists, CarQuery trim details, public profiles, a community page, and likes — evolved across five development phases from React UI to a full authenticated API.",
    challenges: [
      "Integrating NHTSA vPIC, CarQuery, and IMAGIN.studio APIs into a cohesive market feed",
      "Implementing JWT authentication with persistent sessions via AuthContext",
      "Scoping watchlist CRUD and likes per user with a DAL over MongoDB Atlas",
      "Building public profiles and a community page on top of private watchlist data",
      "Proxying trim-level data through the Express backend for secure API access",
    ],
    screenshots: [
      "/projects/automarket-watch/home.png",
      "/projects/automarket-watch/market.png",
      "/projects/automarket-watch/market add to watchlist.png",
      "/projects/automarket-watch/watchlist.png",
    ],
  },
  {
    slug: "bannershift",
    title: "BannerShift",
    description:
      "A Windows tray app that lets you reposition toast notifications, choose a monitor, adjust transparency, and customize notification sounds per app.",
    tech: ["C#", ".NET 8", "WinForms", "Win32", "TypeScript", "React", "Vite", "CSS", "HTML"],
    github: "https://github.com/tristancable/bannershift",
    live: "",
    download:
      "https://github.com/tristancable/BannerShift/releases/latest/download/BannerShift.exe",
    problem:
      "Windows notification banners offer limited control over where they appear and how they behave, especially across multi-monitor setups.",
    solution:
      "Built a .NET 8 Windows tray app that repositions real toast windows and provides controls for corner or custom placement, monitor selection, transparency, click-through, startup behavior, and per-app sounds. A React and Vite preview UI lets users configure and export settings outside the Windows app.",
    challenges: [
      "Finding Windows toast windows reliably and repositioning them through Win32 APIs",
      "Supporting custom positions and preferred monitors in multi-display setups",
      "Applying transparency and click-through behavior without disrupting notifications",
      "Keeping the settings preview and Windows app aligned through an exported configuration file",
    ],
    screenshots: ["/projects/bannershift/home.png"],
  },
  {
    slug: "distributed-systems",
    title: "Retro Video Game Exchange",
    description:
      "A Kubernetes-orchestrated microservices project from my distributed systems course, load-tested with k6 and autoscaled via HPA.",
    tech: [
      "Kubernetes",
      "Docker",
      "Kafka",
      "Nginx",
      "Prometheus",
      "k6",
      "JavaScript",
    ],
    github: "",
    live: "",
    problem:
      "A multi-service exchange needs to stay responsive under sudden traffic spikes without manually resizing pods or losing message flow between services.",
    solution:
      "Deployed the Retro Video Game Exchange on Kubernetes with Kafka messaging, Nginx, and Prometheus, then ran a k6 load test (100 VUs) while watching the Horizontal Pod Autoscaler scale the API from 1 to 10 replicas under CPU pressure and back down after the spike.",
    challenges: [
      "Configuring Kubernetes deployments, resources, and HPA targets so autoscaling could react to CPU load",
      "Wiring Kafka bootstrap servers and supporting services (Kafdrop, Prometheus exporters) into the cluster",
      "Writing and running k6 load tests that drove ~39k iterations against the live API",
      "Observing and validating scale-up/scale-down behavior under watch with kubectl",
    ],
    screenshots: ["/projects/distributed-systems/Kubernetes Load Test.png"],
  },
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
    screenshots: [
      "/projects/lumiere/home-1.png",
      "/projects/lumiere/home-2.png",
      "/projects/lumiere/home-3.png",
      "/projects/lumiere/shop.png",
      "/projects/lumiere/ai chat.png",
      "/projects/lumiere/cart.png",
      "/projects/lumiere/sign in.png",
      "/projects/lumiere/sign up.png",
    ],
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
    screenshots: [
      "/projects/carspec/home.png",
      "/projects/carspec/replay-1.png",
      "/projects/carspec/replay-2.png",
      "/projects/carspec/codes.png",
      "/projects/carspec/garage-1.png",
      "/projects/carspec/garage-2.png",
      "/projects/carspec/garage-3.png",
      "/projects/carspec/maintenance-1.png",
      "/projects/carspec/maintenance-2.png",
      "/projects/carspec/bluetooth.png",
    ],
  },
  {
    slug: "notesplusplus",
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
    screenshots: ["/projects/notesplusplus/home.png"],
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
    screenshots: [
      "/projects/shanes-story/home.png",
      "/projects/shanes-story/about.png",
      "/projects/shanes-story/gallery.png",
      "/projects/shanes-story/contact.png",
    ],
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
    screenshots: [
      "/projects/drivesync/dashboard.png",
      "/projects/drivesync/activity.png",
      "/projects/drivesync/settings.png",
    ],
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
    screenshots: [
      "/projects/redline/home.png",
      "/projects/redline/about.png",
      "/projects/redline/register.png",
      "/projects/redline/login.png",
      "/projects/redline/my profile.png",
      "/projects/redline/edit profile.png",
      "/projects/redline/search users.png",
      "/projects/redline/other user.png",
    ],
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
    screenshots: ["/projects/digit-recognizer/digit recognizer.png"],
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
    screenshots: [
      "/projects/goal-tracker/home.png",
      "/projects/goal-tracker/login.png",
      "/projects/goal-tracker/register.png",
      "/projects/goal-tracker/calendar-1.png",
      "/projects/goal-tracker/calendar-2.png",
      "/projects/goal-tracker/create goal.png",
    ],
  },
  {
    slug: "game-launcher",
    title: "Web Game Launcher",
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
    screenshots: [
      "/projects/websitegamelauncher/home.png",
      "/projects/websitegamelauncher/minesweeper.png",
      "/projects/websitegamelauncher/idle atom.png",
      "/projects/websitegamelauncher/ttyd.png",
      "/projects/websitegamelauncher/tic-tac-toe.png",
      "/projects/websitegamelauncher/login.png",
      "/projects/websitegamelauncher/register.png",
    ],
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
    screenshots: ["/projects/bootify/bootify.png"],
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
