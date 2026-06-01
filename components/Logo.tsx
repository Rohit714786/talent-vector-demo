import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textClass = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Talent Vector home"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 36 36" className="h-9 w-9" fill="none">
          <path d="M6 28L18 6L22 18L30 28H6Z" fill="url(#logoGrad1)" />
          <path d="M18 6L30 28H22L18 18L14 28H6L18 6Z" fill="url(#logoGrad2)" opacity="0.85" />
          <defs>
            <linearGradient id="logoGrad1" x1="6" y1="28" x2="30" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7c3aed" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="6" y1="28" x2="30" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${textClass}`}>
        Talent<span className="text-gradient"> Vector</span>
      </span>
    </Link>
  );
}
