"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <>
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max">
          <SectionLabel>Projects</SectionLabel>
          <SectionHeading>Our work in action</SectionHeading>
          <SectionDescription>
            Explore projects across AI assistants, healthcare, nonprofit
            technology, automation, and more.
          </SectionDescription>

          <div className="mt-8 flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "min-h-[44px] rounded-xl border px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border bg-white text-muted hover:border-primary/30 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-background-secondary section-padding">
        <div className="container-max">
          {filtered.length === 0 ? (
            <p className="text-center text-muted py-12">
              No projects found in this category.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <article
                  key={project.slug}
                  className="card-base card-hover group flex flex-col overflow-hidden"
                >
                  <div
                    className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden="true">
                        <circle cx="100" cy="75" r="40" fill="white" opacity="0.1" />
                        <circle cx="60" cy="50" r="8" fill="white" opacity="0.3" />
                        <circle cx="140" cy="60" r="6" fill="white" opacity="0.3" />
                      </svg>
                    </div>
                  </div>
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
                    <p className="mt-3 text-sm font-medium text-accent-teal">
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
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
