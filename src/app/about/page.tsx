import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { aboutValues, responsibleAI } from "@/lib/data";
import { Heart, Target, Users, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Astra makes advanced technology practical and accessible for organizations working to create meaningful impact.",
};

const impactAreas = [
  "Nonprofit and community organizations",
  "Schools and educational institutions",
  "Healthcare and patient support",
  "Startups and small businesses",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max max-w-3xl">
          <SectionLabel>About</SectionLabel>
          <SectionHeading>Making AI practical for those who need it most</SectionHeading>
          <SectionDescription>
            AI Astra makes advanced technology practical and accessible for
            organizations working to create meaningful impact.
          </SectionDescription>
        </div>
      </section>

      <AnimatedSection className="bg-background-secondary section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <blockquote className="mt-4 border-l-4 border-primary pl-6 text-lg leading-relaxed text-muted italic">
            &ldquo;AI Astra makes advanced technology practical and accessible for
            organizations working to create meaningful impact.&rdquo;
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-muted">
            We believe artificial intelligence should serve people — not replace
            them. Our work focuses on helping nonprofits, schools, community
            organizations, startups, and small businesses use AI to reduce
            manual work, improve accessibility, and reach more people with
            limited resources.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              AI Astra was founded on a simple observation: the organizations
              doing the most important community work often have the least access
              to modern technology. While enterprise companies invest heavily in
              AI, nonprofits and small organizations are left behind.
            </p>
            <p>
              We set out to change that by building practical, affordable AI
              solutions — chatbots that answer community questions, platforms
              that streamline registration, and tools that help organizations
              understand and serve their users better.
            </p>
            <p>
              Every project we take on is guided by a commitment to human-centered
              design, responsible AI practices, and measurable impact for the
              communities our clients serve.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-secondary section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => (
              <div key={value.title} className="card-base p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-dark section-padding">
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionLabel dark>Responsible AI</SectionLabel>
            <SectionHeading dark>Our philosophy on AI</SectionHeading>
            <SectionDescription dark>
              We build AI systems that are grounded, transparent, and designed
              with human oversight at every step.
            </SectionDescription>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {responsibleAI.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white section-padding">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Founder</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              AI Astra was founded by a technologist passionate about making AI
              accessible to organizations that create real community impact. With
              experience building AI assistants, health platforms, and community
              engagement tools, the focus has always been on practical solutions
              that work for real users.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The approach combines modern engineering — React, Next.js, Google
              Gemini, Firebase, and cloud infrastructure — with a deep
              understanding of the constraints and needs of mission-driven
              organizations.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 rounded-3xl bg-gradient-to-br from-primary/20 to-accent-cyan/20 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary-blue flex items-center justify-center text-4xl font-bold text-white">
                AA
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-secondary section-padding">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Community Impact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We work with organizations that serve real communities — from
                nonprofits connecting people with resources, to healthcare
                platforms supporting patients, to community groups scaling their
                outreach.
              </p>
              <ul className="mt-6 space-y-2">
                {impactAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <Heart className="h-4 w-4 text-accent-teal shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Technology Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We choose proven, modern technologies that balance capability
                with maintainability. Our stack includes React and Next.js for
                frontends, Python and Node.js for backends, Google Gemini and
                Vertex AI for intelligence, and Firebase and cloud services for
                reliable deployment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every architecture decision considers scalability, security,
                accessibility, and the long-term sustainability of the solution
                for organizations with limited technical staff.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-white section-padding border-t border-border">
        <div className="container-max text-center">
          <Target className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Ready to work together?
          </h2>
          <p className="mt-2 text-muted">
            Let&apos;s discuss how AI can help your organization serve more people.
          </p>
          <ButtonLink href="/contact" className="mt-6">
            Get in Touch
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
