import Link from "next/link";
import type { ReactNode } from "react";
import { GradientText } from "../GradientText";

type VectorStatus = "available" | "coming-soon";

type Vector = {
  title: string;
  subtitle: string;
  description: string;
  status: VectorStatus;
  icon: "hire" | "learn" | "mobility" | "succession" | "perform" | "plan";
};

const vectors: Vector[] = [
  {
    title: "HireVector",
    subtitle: "AI-Powered Hiring Transformation",
    description:
      "Make better hiring decisions faster with AI-validated candidate insights. Reduce time-to-fill by upto 60% while improving quality of hire.",
    status: "available",
    icon: "hire",
  },
  {
    title: "LearnVector",
    subtitle: "Personalized Learning Paths",
    description:
      "Connect validated skills gaps to targeted learning recommendations that actually move the needle on capability development.",
    status: "coming-soon",
    icon: "learn",
  },
  {
    title: "MobilityVector",
    subtitle: "Internal Talent Mobility",
    description:
      "Match employees to internal opportunities based on validated skills and aspirations, not just job titles or tenure.",
    status: "coming-soon",
    icon: "mobility",
  },
  {
    title: "SuccessionVector",
    subtitle: "Strategic Succession Planning",
    description:
      "Build robust succession pipelines with validated insights into leadership readiness and development potential.",
    status: "coming-soon",
    icon: "succession",
  },
  {
    title: "PerformVector",
    subtitle: "Performance Optimization",
    description:
      "Align development conversations and coaching with validated insights about how people work and grow best.",
    status: "coming-soon",
    icon: "perform",
  },
  {
    title: "PlanVector",
    subtitle: "Workforce Planning",
    description:
      "Build workforce plans based on real capability data, identifying skill gaps and future readiness across the organization.",
    status: "coming-soon",
    icon: "plan",
  },
];

function VectorIcon({
  type,
  available,
  size = "md",
  bare = false,
}: {
  type: Vector["icon"];
  available: boolean;
  size?: "sm" | "md";
  bare?: boolean;
}) {
  const boxClass = available
    ? "bg-gradient-to-br from-violet-500 to-blue-600 text-white"
    : "bg-slate-100 text-slate-600";

  const boxSize = size === "sm" ? "h-7 w-7 rounded-lg" : "h-12 w-12 rounded-xl";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-6 w-6";

  const icons: Record<Vector["icon"], ReactNode> = {
    hire: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-1a6 6 0 0112 0v1" strokeLinecap="round" />
      </svg>
    ),
    learn: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 10l-10-5L2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
    mobility: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M7 17L17 7M17 7h-6M17 7v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    succession: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-1a6 6 0 0112 0v1" strokeLinecap="round" />
        <path d="M16 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    perform: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    plan: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 19V5M4 19h16M8 17V11M12 17V7M16 17v-4" strokeLinecap="round" />
      </svg>
    ),
  };

  if (bare) {
    return <span aria-hidden="true">{icons[type]}</span>;
  }

  return (
    <span
      className={`inline-flex items-center justify-center ${boxSize} ${boxClass}`}
      aria-hidden="true"
    >
      {icons[type]}
    </span>
  );
}

function StatusBadge({ status }: { status: VectorStatus }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-brand-blue">
        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Available Now
      </span>
    );
  }

  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
      Coming Soon
    </span>
  );
}

function BackboneIcon({ type, active }: { type: Vector["icon"]; active?: boolean }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
        active ? "bg-blue-100 text-brand-blue" : "bg-slate-100 text-slate-500"
      }`}
      aria-hidden="true"
    >
      <VectorIcon type={type} available={false} size="sm" bare />
    </span>
  );
}

export function SixVectors() {
  return (
    <section className="section-pad" aria-labelledby="vectors-heading">
      <div className="section-container">
        <h2 id="vectors-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The 6 Vectors of <GradientText>Talent Transformation</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          TalentVector is more than a recruiting point solution. Our modular platform addresses the
          complete talent lifecycle — start with one vector and expand as your needs grow.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vectors.map((v) => {
            const isAvailable = v.status === "available";
            return (
              <article
                key={v.title}
                className={`card-shadow relative flex flex-col rounded-2xl border p-6 transition hover:shadow-lg ${
                  isAvailable
                    ? "border-violet-200/80 bg-gradient-to-br from-violet-50/80 to-blue-50/50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <VectorIcon type={v.icon} available={isAvailable} />
                  <StatusBadge status={v.status} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p
                  className={`mt-1 text-sm font-medium ${
                    isAvailable ? "text-brand-blue" : "text-slate-500"
                  }`}
                >
                  {v.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{v.description}</p>
                {isAvailable && (
                  <Link
                    href="#platform"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-blue hover:text-blue-700"
                  >
                    Learn More →
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-full border border-slate-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:justify-center sm:gap-5">
          <div className="flex items-center gap-2" aria-hidden="true">
            <BackboneIcon type="hire" active />
            <BackboneIcon type="learn" />
            <BackboneIcon type="mobility" />
            <BackboneIcon type="succession" />
          </div>
          <p className="text-center text-sm text-slate-700 sm:text-left">
            All vectors powered by the{" "}
            <strong className="font-semibold text-slate-900">TalentVector Backbone</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
