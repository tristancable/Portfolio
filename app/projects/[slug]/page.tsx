import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    const index = projects.findIndex((p) => p.slug === slug);
    const prevProject = projects[(index - 1 + projects.length) % projects.length];
    const nextProject = projects[(index + 1) % projects.length];

    if (!project) return notFound();

    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

            <div className="relative container py-24 max-w-4xl mx-auto">
                {/* Back Button */}
                <AnimatedSection>
                    <div className="mb-12">
                        <BackButton buttonText="Back to Projects" targetLink="projects" />
                    </div>
                </AnimatedSection>

                {/* HERO */}
                <AnimatedSection>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-gray-400 mb-8">{project.description}</p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-3 mb-16">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>

                {project.screenshots && (
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="text-2xl font-semibold mb-8">Product Preview</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {project.screenshots.map((src, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-video"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Screenshot ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index === 0}
                                            loading="eager"
                                            className="object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                )}

                {/* PROBLEM */}
                <AnimatedSection>
                    <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl mb-10 backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
                        <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>
                </AnimatedSection>

                {/* SOLUTION */}
                <AnimatedSection>
                    <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl mb-10 backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
                        <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>
                </AnimatedSection>

                {/* CHALLENGES */}
                <AnimatedSection>
                    <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl mb-12 backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-6">Technical Challenges</h2>
                        <ul className="space-y-4 text-gray-400">
                            {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-cyan-400">•</span>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>

                {/* LINKS */}
                <AnimatedSection>
                    <div className="flex flex-wrap gap-6 mt-8">
                        <a
                            href={project.github}
                            target="_blank"
                            className="group px-6 py-3 bg-white text-black rounded-xl font-medium flex items-center gap-2 transition transform-gpu hover:scale-105 shadow-md"
                        >
                            View Code
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </a>

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                className="group px-6 py-3 border border-cyan-400 rounded-xl text-cyan-400 font-medium flex items-center gap-2 transition transform-gpu hover:bg-cyan-400 hover:text-black hover:scale-105 shadow-md"
                            >
                                Live Demo
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </a>
                        )}
                    </div>
                </AnimatedSection>

                {/* NEXT / PREVIOUS PROJECT */}
                <AnimatedSection>
                    <div className="mt-24 pt-12 border-t border-zinc-800 flex justify-center">
                        <div className="flex gap-6">

                            <a
                                href={`/projects/${prevProject.slug}`}
                                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-cyan-400 transition transform-gpu"
                            >
                                <span className="text-gray-500 group-hover:text-cyan-400 transition">
                                    ←
                                </span>

                                <div className="text-left">
                                    <p className="text-xs text-gray-500">Previous</p>
                                    <p className="text-sm font-medium">{prevProject.title}</p>
                                </div>
                            </a>

                            <a
                                href={`/projects/${nextProject.slug}`}
                                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-cyan-400 transition transform-gpu"
                            >
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Next</p>
                                    <p className="text-sm font-medium">{nextProject.title}</p>
                                </div>

                                <span className="text-gray-500 group-hover:text-cyan-400 transition">
                                    →
                                </span>
                            </a>

                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div >
    );
}