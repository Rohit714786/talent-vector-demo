import { GradientText } from "../GradientText";
import { IconCheck } from "../icons";

const checklist = [
  "No data migration required",
  "API-first approach for custom workflows",
  "Pre-built connectors for major HRIS and ATS platforms",
  "Enterprise-grade security and compliance",
];

const integrations = ["Workday", "SAP", "Oracle", "Slack", "Salesforce", "LinkedIn"];

export function Integrations() {
  return (
    <section className="section-pad bg-slate-50/50" aria-labelledby="integrations-heading">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Make Your Existing <GradientText>Stack Work Better</GradientText>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Talent Vector layers on top of your current HR tech—enriching the tools you already
              use instead of replacing them.
            </p>
            <ul className="mt-8 space-y-4" role="list">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="card-shadow relative flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-100 bg-white p-8"
            aria-label="Integration ecosystem diagram"
          >
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <svg className="h-full w-full max-h-[280px]" viewBox="0 0 400 280">
                {integrations.map((_, i) => {
                  const angle = (i / integrations.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 200 + Math.cos(angle) * 120;
                  const y = 140 + Math.sin(angle) * 100;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="140"
                      x2={x}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-sm font-bold text-white shadow-xl">
              TV
            </div>
            <ul className="absolute inset-0" role="list">
              {integrations.map((name, i) => {
                const angle = (i / integrations.length) * Math.PI * 2 - Math.PI / 2;
                const left = 50 + Math.cos(angle) * 38;
                const top = 50 + Math.sin(angle) * 32;
                return (
                  <li
                    key={name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
