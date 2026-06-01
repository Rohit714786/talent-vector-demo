import Link from "next/link";
import { GradientText } from "../GradientText";

const vectors = [
  {
    title: "Skills Profile",
    description: "Comprehensive view of validated skills and proficiency levels across every employee.",
    highlighted: true,
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    title: "Experience",
    description: "Track career history, projects, and role transitions to map expertise pathways.",
    highlighted: false,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Performance",
    description: "Connect outcomes and feedback to skills development and team effectiveness.",
    highlighted: false,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Potential",
    description: "Identify high-potential talent and readiness for leadership or critical roles.",
    highlighted: false,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Engagement",
    description: "Understand motivation, satisfaction, and flight risk alongside capability data.",
    highlighted: false,
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    title: "Culture Fit",
    description: "Align values and working styles with team dynamics and organizational goals.",
    highlighted: false,
    iconBg: "bg-cyan-100 text-cyan-600",
  },
];

function VectorIcon({ className }: { className: string }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${className}`} aria-hidden="true">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
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
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          A multidimensional model that captures everything that makes your people valuable.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vectors.map((v) => (
            <article
              key={v.title}
              className={`card-shadow flex flex-col rounded-2xl border p-6 transition hover:shadow-lg ${
                v.highlighted
                  ? "border-violet-200 bg-violet-50/50"
                  : "border-slate-100 bg-white"
              }`}
            >
              <VectorIcon className={v.iconBg} />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{v.description}</p>
              <Link
                href="#platform"
                className="mt-4 inline-flex text-sm font-semibold text-brand-blue hover:text-blue-700"
              >
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
