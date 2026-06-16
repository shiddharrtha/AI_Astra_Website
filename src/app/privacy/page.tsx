import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max max-w-3xl prose prose-slate">
        <SectionHeading>Privacy Policy</SectionHeading>
        <p className="mt-6 text-muted leading-relaxed">
          This privacy policy page is a placeholder. AI Astra Innovations is
          committed to protecting your privacy. A complete privacy policy will
          be published here covering data collection, usage, storage, and your
          rights regarding personal information submitted through our website
          and services.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          For questions about privacy, contact us at{" "}
          <a
            href="mailto:hello@aiastrainnovations.com"
            className="text-primary hover:underline"
          >
            hello@aiastrainnovations.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
