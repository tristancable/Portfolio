export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    problem: string;
    solution: string;
    challenges: string[];
    screenshots?: string[];
}