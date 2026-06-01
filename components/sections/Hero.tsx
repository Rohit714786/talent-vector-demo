import Link from "next/link";
import { GradientText } from "../GradientText";
import { IconArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="hero-pattern section-pad overflow-hidden" aria-labelledby="hero-heading">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue">
              All Your People Data in One Place
            </p>
            <h1 id="hero-heading" className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Stop Guessing.{" "}
              <GradientText as="span">
                Start Knowing Your Talent.
              </GradientText>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Talent Vector gives you a real-time, validated inventory of skills across your
              organization—so you can hire, develop, and retain with confidence instead of
              guesswork.
            </p>
            <div className="mt-8">
              <Link href="#request-demo" className="btn-primary px-8 py-3.5 text-base">
                Request Demo
                <IconArrowRight />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative h-[320px] w-full max-w-md sm:h-[380px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-200/40 to-blue-200/30 blur-2xl" />
              <svg viewBox="0 0 400 380" className="relative h-full w-full" fill="none">
                <circle cx="200" cy="190" r="140" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 8" />
                <circle cx="200" cy="190" r="100" stroke="#c7d2fe" strokeWidth="1" />
                <circle cx="200" cy="190" r="60" fill="url(#heroGlow)" />
                <circle cx="200" cy="190" r="28" fill="url(#heroIconGrad)" />
                <path
                  d="M200 178v24M188 190h24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="120" r="20" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
                <path d="M120 112v16M112 120h16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                <circle cx="300" cy="140" r="18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                <circle cx="300" cy="140" r="6" stroke="#7c3aed" strokeWidth="2" />
                <circle cx="280" cy="260" r="16" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <path d="M280 252c0 4.4 3.6 8 8 8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <radialGradient id="heroGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop stopColor="#a78bfa" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#60a5fa" stopOpacity="0.1" />
                  </radialGradient>
                  <linearGradient id="heroIconGrad" x1="172" y1="162" x2="228" y2="218">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-12">
          <p className="text-center text-sm font-medium text-slate-500">
            Trusted by forward-thinking companies
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-50 grayscale" role="list">
            {["DXC", "Northwood", "BetterUp", "Workday", "Salesforce"].map((name) => (
              <li key={name}>
                <span className="text-lg font-bold tracking-wider text-slate-600" aria-label={name}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
