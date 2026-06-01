import { GradientText } from "../GradientText";
import { IconCheck } from "../icons";

const checklist = [
  "Real-time data across your entire workforce",
  "Validated skills backed by evidence, not self-reports",
  "Actionable insights for hiring and development",
];

const metrics = [
  { label: "Total Employees", value: "2,847", color: "text-blue-600" },
  { label: "Skills Distribution", value: "142 skills", color: "text-violet-600" },
  { label: "Skill Gaps", value: "23 identified", color: "text-amber-600" },
  { label: "Top Talent", value: "186 flagged", color: "text-emerald-600" },
];

export function TalentInventory() {
  return (
    <section id="platform" className="section-pad" aria-labelledby="inventory-heading">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Get Started</p>
            <h2 id="inventory-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Living, Validated <GradientText>Talent Inventory</GradientText>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Move beyond static HRIS records. Talent Vector builds a dynamic skills graph that
              updates as your people grow—giving leaders a single source of truth for talent decisions.
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

          <div className="grid grid-cols-2 gap-4" aria-label="Talent inventory metrics preview">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="card-shadow rounded-xl border border-slate-100 bg-white p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{m.label}</p>
                <p className={`mt-2 text-2xl font-bold ${m.color}`}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
