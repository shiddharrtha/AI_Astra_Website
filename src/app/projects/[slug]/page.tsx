import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  const sections = [
    { title: "Project Overview", content: project.overview },
    { title: "Client Challenge", content: project.challenge },
    { title: "Users and Requirements", content: project.users },
    { title: "Proposed Solution", content: project.proposedSolution },
    { title: "Architecture", content: project.architecture },
    { title: "Development Process", content: project.developmentProcess },
    { title: "Results and Impact", content: project.results },
  ];

  return (
    <>
      <section className={`bg-gradient-to-br ${project.color} section-padding`}>
        <div className="container-max">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/70">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            {project.summary}
          </p>
          <TechBadgeList
            technologies={project.technologies}
            className="mt-6 [&_span]:border-white/30 [&_span]:bg-white/10 [&_span]:text-white"
          />
        </div>
      </section>

      <AnimatedSection className="bg-white section-padding">
        <div className="container-max max-w-4xl">
          <div className="rounded-2xl border border-accent-teal/30 bg-accent-teal/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-teal">
              Impact
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              {project.impact}
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Screenshots
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 w-3/4">
                      <div className="h-3 w-20 rounded bg-white/40 mb-3" />
                      <div className="h-2 w-full rounded bg-white/20 mb-2" />
                      <div className="h-2 w-4/5 rounded bg-white/20 mb-2" />
                      <div className="h-2 w-3/5 rounded bg-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Lessons Learned
            </h2>
            <ul className="mt-4 space-y-3">
              {project.lessonsLearned.map((lesson) => (
                <li
                  key={lesson}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background-secondary p-4 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {related.length > 0 && (
        <AnimatedSection className="bg-background-secondary section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Related Projects
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="card-base card-hover group p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <section className="bg-white section-padding border-t border-border">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Interested in a similar solution?
          </h2>
          <p className="mt-2 text-muted">
            Let&apos;s discuss how we can help your organization.
          </p>
          <ButtonLink href="/contact" className="mt-6">
            Start a Project
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
