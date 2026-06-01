import { GradientText } from "../GradientText";

const steps = [
  {
    step: "01",
    title: "Capture",
    description:
      "Gather skills data from resumes, LinkedIn, performance reviews, and internal systems into one unified profile.",
    color: "from-blue-500 to-blue-600",
    ring: "ring-blue-100",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "AI-driven insights surface skill gaps, high-potential employees, and succession risks across your organization.",
    color: "from-violet-500 to-purple-600",
    ring: "ring-violet-100",
  },
  {
    step: "03",
    title: "Act",
    description:
      "Make confident talent decisions—hire smarter, develop faster, and retain your best people with data you can trust.",
    color: "from-violet-600 to-blue-600",
    ring: "ring-indigo-100",
  },
];

export function ThreeSteps() {
  return (
    <section className="section-pad bg-slate-50/50" aria-labelledby="steps-heading">
      <div className="section-container">
        <h2 id="steps-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Three Steps to <GradientText>Talent Transformation</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          From scattered data to decisive action—a proven path to workforce intelligence.
        </p>

        <ol className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute top-24 hidden h-0.5 w-[calc(100%-8rem)] border-t-2 border-dashed border-slate-200 md:left-16 md:block md:w-[calc(100%-4rem)]"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <article className="card-shadow flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-lg font-bold text-white shadow-lg ring-4 ${s.ring}`}
                >
                  {s.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden text-slate-300 md:block" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
