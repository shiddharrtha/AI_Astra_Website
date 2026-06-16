import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { responsibleAI } from "@/lib/data";
import { Check } from "lucide-react";

export function ResponsibleAISection() {
  return (
    <AnimatedSection className="bg-white section-padding">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionLabel>Trust</SectionLabel>
          <SectionHeading>Built with trust at the center</SectionHeading>
          <SectionDescription>
            Every AI solution we build considers privacy, accuracy, and human
            oversight from the ground up.
          </SectionDescription>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {responsibleAI.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent-cyan/10" />
            <svg
              viewBox="0 0 200 200"
              className="relative h-full w-full p-8"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>

              <path
                d="M100 30 L160 55 L160 100 C160 135 135 165 100 175 C65 165 40 135 40 100 L40 55 Z"
                fill="url(#shieldGrad)"
                opacity="0.15"
                stroke="url(#shieldGrad)"
                strokeWidth="1.5"
              />

              <circle cx="100" cy="95" r="25" fill="none" stroke="#4F46E5" strokeWidth="0.8" opacity="0.4" />
              <circle cx="100" cy="95" r="15" fill="#4F46E5" opacity="0.2" />
              <circle cx="100" cy="95" r="6" fill="#4F46E5" opacity="0.8" />

              {[
                [100, 55], [130, 70], [145, 95], [130, 120], [100, 135],
                [70, 120], [55, 95], [70, 70],
              ].map(([cx, cy], i) => (
                <g key={i}>
                  <line x1="100" y1="95" x2={cx} y2={cy} stroke="#22D3EE" strokeWidth="0.5" opacity="0.4" />
                  <circle cx={cx} cy={cy} r="4" fill="#22D3EE" opacity="0.6" />
                </g>
              ))}

              <path
                d="M92 95 L98 101 L110 89"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
