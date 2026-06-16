"use client";

import { useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn } from "@/components/ui/AnimatedSection";

const outcomes = [
  { label: "Smarter support", x: 75, y: 15, color: "#4F46E5" },
  { label: "Automated workflows", x: 85, y: 40, color: "#2563EB" },
  { label: "Better insights", x: 70, y: 65, color: "#22D3EE" },
  { label: "Greater community impact", x: 80, y: 90, color: "#14B8A6" },
];

const nodes = [
  { cx: 50, cy: 50, r: 8, color: "#4F46E5" },
  { cx: 30, cy: 30, r: 5, color: "#2563EB" },
  { cx: 70, cy: 25, r: 5, color: "#22D3EE" },
  { cx: 25, cy: 65, r: 5, color: "#14B8A6" },
  { cx: 75, cy: 70, r: 5, color: "#4F46E5" },
  { cx: 50, cy: 20, r: 4, color: "#2563EB" },
  { cx: 20, cy: 45, r: 4, color: "#22D3EE" },
  { cx: 80, cy: 50, r: 4, color: "#14B8A6" },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 5], [2, 7], [3, 6], [4, 7],
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-cyan/5 blur-3xl" />
      </div>

      <div className="container-max relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background-secondary px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-teal animate-pulse" />
            AI Solutions for Real Impact
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build Smarter.{" "}
            <span className="text-gradient">Serve More.</span>{" "}
            Grow with AI.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            AI Astra creates intelligent websites, AI assistants, automation
            systems, and digital platforms that help organizations reduce manual
            work, improve engagement, and deliver better experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact" size="lg">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline" size="lg">
              Explore Our Work
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-muted italic">
            AI solutions designed for real people, real organizations, and
            measurable impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
          <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary-blue/5 to-accent-cyan/10 glow-primary" />
            <svg
              viewBox="0 0 100 100"
              className="relative h-full w-full p-6"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connections.map(([a, b], i) => (
                <line
                  key={i}
                  x1={nodes[a].cx}
                  y1={nodes[a].cy}
                  x2={nodes[b].cx}
                  y2={nodes[b].cy}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.3"
                  opacity="0.5"
                >
                  {!prefersReducedMotion && (
                    <animate
                      attributeName="opacity"
                      values="0.3;0.7;0.3"
                      dur={`${2 + i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </line>
              ))}

              {nodes.map((node, i) => (
                <g key={i}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 2}
                    fill={node.color}
                    opacity="0.15"
                    filter="url(#glow)"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill={node.color}
                    opacity="0.9"
                  >
                    {!prefersReducedMotion && (
                      <animate
                        attributeName="r"
                        values={`${node.r};${node.r + 0.5};${node.r}`}
                        dur={`${3 + i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                </g>
              ))}

              {outcomes.map((outcome, i) => (
                <g key={outcome.label}>
                  <rect
                    x={outcome.x - 18}
                    y={outcome.y - 3}
                    width="36"
                    height="6"
                    rx="3"
                    fill="white"
                    stroke={outcome.color}
                    strokeWidth="0.2"
                    opacity="0.95"
                  />
                  <text
                    x={outcome.x}
                    y={outcome.y + 1}
                    textAnchor="middle"
                    fontSize="2.2"
                    fill={outcome.color}
                    fontWeight="600"
                  >
                    {outcome.label}
                  </text>
                  <line
                    x1="50"
                    y1="50"
                    x2={outcome.x}
                    y2={outcome.y}
                    stroke={outcome.color}
                    strokeWidth="0.2"
                    strokeDasharray="1 1"
                    opacity="0.4"
                  >
                    {!prefersReducedMotion && (
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-4"
                        dur={`${2 + i * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </line>
                </g>
              ))}
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
