import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-blue shadow-sm transition-shadow group-hover:shadow-md">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="6" r="2" fill="white" opacity="0.9" />
          <circle cx="6" cy="14" r="2" fill="white" opacity="0.7" />
          <circle cx="18" cy="14" r="2" fill="white" opacity="0.7" />
          <circle cx="12" cy="18" r="2" fill="#22D3EE" />
          <line
            x1="12"
            y1="8"
            x2="6"
            y2="12"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="12"
            y1="8"
            x2="18"
            y2="12"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="6"
            y1="16"
            x2="12"
            y2="16"
            stroke="#22D3EE"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="18"
            y1="16"
            x2="12"
            y2="16"
            stroke="#22D3EE"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base font-bold tracking-tight",
            dark ? "text-white" : "text-foreground"
          )}
        >
          AI Astra
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-widest",
            dark ? "text-slate-400" : "text-muted"
          )}
        >
          Innovations
        </span>
      </div>
    </Link>
  );
}
