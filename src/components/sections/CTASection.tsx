import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTASection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-blue to-indigo-700 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent-cyan/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to turn your idea into an intelligent solution?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-indigo-100">
              Whether you need an AI chatbot, workflow automation, a modern
              website, or a complete digital platform, AI Astra can help you
              plan, build, and launch it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="white" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
              >
                Contact AI Astra
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
