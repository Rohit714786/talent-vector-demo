import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#platform", label: "Platform" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          <Link href="/" className="text-sm font-medium text-brand-blue">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#login"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:inline"
          >
            Login
          </Link>
          <Link href="#request-demo" className="btn-primary px-5 py-2.5 text-sm">
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
