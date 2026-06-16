import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { projects } from "@/lib/data";

function ProjectVisual({ color, title }: { color: string; title: string }) {
  return (
    <div
      className={`relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br ${color}`}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id={`grid-${title}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="150" fill={`url(#grid-${title})`} />
          <circle cx="100" cy="75" r="30" fill="white" opacity="0.1" />
          <circle cx="60" cy="50" r="8" fill="white" opacity="0.3" />
          <circle cx="140" cy="60" r="6" fill="white" opacity="0.3" />
          <circle cx="80" cy="100" r="5" fill="white" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3">
          <div className="h-2 w-16 rounded bg-white/40 mb-2" />
          <div className="h-2 w-24 rounded bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <AnimatedSection id="solutions" className="bg-white section-padding">
      <div className="container-max">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Projects</SectionLabel>
            <SectionHeading>Solutions built for real-world needs</SectionHeading>
            <SectionDescription>
              Real projects delivering measurable impact for nonprofits,
              healthcare, and community organizations.
            </SectionDescription>
          </div>
          <ButtonLink href="/projects" variant="outline">
            View All Projects
          </ButtonLink>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <article className="card-base card-hover group flex h-full flex-col overflow-hidden">
                <ProjectVisual color={project.color} title={project.slug} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <TechBadgeList
                    technologies={project.technologies}
                    className="mt-4"
                  />
                  <p className="mt-4 text-sm font-medium text-accent-teal">
                    {project.impact}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-blue"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
