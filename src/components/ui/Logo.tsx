import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "default" | "large";
}

export function Logo({ className, size = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center group", className)}
      aria-label="AI Astra Innovations — Home"
    >
      <Image
        src="/images/ai-astra-logo.png"
        alt="AI Astra"
        width={1024}
        height={347}
        className={cn(
          "w-auto object-contain transition-opacity group-hover:opacity-90",
          size === "large"
            ? "h-16 sm:h-[4.5rem]"
            : "h-14 sm:h-16"
        )}
        priority
      />
    </Link>
  );
}
