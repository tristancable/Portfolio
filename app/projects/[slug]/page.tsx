import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { getRepoStats } from "@/lib/github";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/ui/BackButton";
import ImageModal from "@/components/ui/ImageModal";

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

  let repoStats = null;

  if (project.github) {
    const parts = project.github.split("/").filter(Boolean);
    const owner = parts[parts.length - 2];
    const repo = parts[parts.length - 1];
    repoStats = await getRepoStats(owner, repo);
  }

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <div className="relative py-24 max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
        <AnimatedSection>
          <div className="mb-12">
            <BackButton buttonText="Back to Projects" targetLink="projects" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted mb-8">{project.description}</p>

          {repoStats && (
            <div className="flex gap-6 text-sm text-muted mb-8">
              <span>★ {repoStats.stars}</span>
              <span>⑂ {repoStats.forks}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-16">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-surface border border-edge rounded-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {project.screenshots && project.screenshots.length > 0 && (
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold mb-8">
                Product Preview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-sm border border-edge bg-surface aspect-video"
                  >
                    <ImageModal src={src} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <div className="bg-surface border border-edge p-8 rounded-sm mb-10">
            <h2 className="font-display text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-surface border border-edge p-8 rounded-sm mb-10">
            <h2 className="font-display text-2xl font-semibold mb-4">
              The Solution
            </h2>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-surface border border-edge p-8 rounded-sm mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Technical Challenges
            </h2>
            <ul className="space-y-4 text-muted">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-4 mt-8">
            {project.download && (
              <a
                href={project.download}
                className="group px-6 py-3 bg-bone text-ink rounded-sm font-medium flex items-center gap-2 transition hover:opacity-90"
              >
                Download for Windows
                <span className="group-hover:translate-x-1 transition">↓</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-bone text-ink rounded-sm font-medium flex items-center gap-2 transition hover:opacity-90"
              >
                View Code
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 border border-accent rounded-sm text-accent font-medium flex items-center gap-2 transition hover:bg-accent/10"
              >
                Live Demo
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-24 pt-12 border-t border-edge flex justify-center">
            <div className="flex gap-4">
              <a
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-sm border border-edge bg-surface hover:border-accent transition"
              >
                <span className="text-muted group-hover:text-accent transition">
                  ←
                </span>
                <div className="text-left">
                  <p className="text-xs text-muted">Previous</p>
                  <p className="text-sm font-medium">{prevProject.title}</p>
                </div>
              </a>

              <a
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-sm border border-edge bg-surface hover:border-accent transition"
              >
                <div className="text-right">
                  <p className="text-xs text-muted">Next</p>
                  <p className="text-sm font-medium">{nextProject.title}</p>
                </div>
                <span className="text-muted group-hover:text-accent transition">
                  →
                </span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
