"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import {
  projectTypes,
  organizationTypes,
  budgetRanges,
  timelineOptions,
  contactSteps,
} from "@/lib/data";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading>Let&apos;s build something together</SectionHeading>
          <SectionDescription>
            Tell us about your project and we&apos;ll get back to you within 1–2
            business days.
          </SectionDescription>
        </div>
      </section>

      <AnimatedSection className="bg-background-secondary section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-base p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-accent-teal" />
                <h2 className="mt-4 text-2xl font-bold text-foreground">
                  Thank you for reaching out!
                </h2>
                <p className="mt-2 text-muted">
                  We&apos;ve received your message and will be in touch within 1–2
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </FormField>

                  <FormField label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="you@organization.org"
                    />
                  </FormField>

                  <FormField label="Organization" required className="sm:col-span-2">
                    <input
                      type="text"
                      name="organization"
                      required
                      className={inputClass}
                      placeholder="Your organization name"
                    />
                  </FormField>

                  <FormField label="Organization Type" required>
                    <select name="organizationType" required className={inputClass}>
                      <option value="">Select type</option>
                      {organizationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Project Type" required>
                    <select name="projectType" required className={inputClass}>
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Estimated Timeline">
                    <select name="timeline" className={inputClass}>
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Budget Range">
                    <select name="budget" className={inputClass}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Project Description" required className="sm:col-span-2">
                    <textarea
                      name="description"
                      required
                      rows={5}
                      className={cn(inputClass, "resize-y")}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </FormField>
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="card-base p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">
                What happens next?
              </h2>
              <ol className="mt-6 space-y-6">
                {contactSteps.map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 card-base p-6">
              <h3 className="font-semibold text-foreground">Direct contact</h3>
              <p className="mt-2 text-sm text-muted">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:join.aiastra@gmail.com"
                  className="text-primary hover:underline"
                >
                  join.aiastra@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

const inputClass =
  "w-full min-h-[44px] rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function FormField({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
