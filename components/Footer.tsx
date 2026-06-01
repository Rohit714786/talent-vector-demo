import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  Products: [
    { label: "Skill Inventory", href: "#platform" },
    { label: "AI Interviewer", href: "#pricing" },
    { label: "Talent Analytics", href: "#solutions" },
    { label: "Integrations", href: "#platform" },
  ],
  Platform: [
    { label: "Integrations", href: "#platform" },
    { label: "Security", href: "#about" },
    { label: "API", href: "#resources" },
    { label: "Enterprise", href: "#pricing" },
  ],
  Resources: [
    { label: "Blog", href: "#resources" },
    { label: "Case Studies", href: "#resources" },
    { label: "Whitepapers", href: "#resources" },
    { label: "Webinars", href: "#resources" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
};

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="about" className="bg-brand-dark pt-16 pb-8 text-slate-400">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Talent Vector helps organizations build a living, validated talent inventory—so every
              hire, development, and retention decision is backed by data.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.061 2.061 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{title}</h3>
              <ul className="mt-4 space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Talent Vector. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
