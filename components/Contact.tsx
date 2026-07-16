"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import GithubCalendar from "@/components/ui/GithubCalendar";

export default function Contact() {
  const socialLinks = [
    {
      label: "Email",
      href: "mailto:tristancable@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/tristancable",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tristancable",
    },
  ];

  return (
    <Section id="contact" className="bg-surface border-t border-edge">
      <Container className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-bone">
          Get in touch
        </h2>

        <p className="text-muted mb-10 max-w-lg mx-auto">
          Open to collaborations and new opportunities. Say hello.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-medium transition border border-edge text-bone hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <GithubCalendar />
      </Container>
    </Section>
  );
}
