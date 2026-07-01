import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  services: [
    { href: "/services#ai-chatbots", label: "AI Chatbots" },
    { href: "/services#ai-agents", label: "AI Agents" },
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#workflow-automation", label: "Workflow Automation" },
    { href: "/services#data-analytics", label: "Data & Analytics" },
    { href: "/services#ai-strategy", label: "AI Strategy" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/#solutions", label: "Solutions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-max section-padding !pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              AI Astra makes advanced technology practical and accessible for
              organizations working to create meaningful impact.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:join.aiastra@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  join.aiastra@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} AI Astra Innovations. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
