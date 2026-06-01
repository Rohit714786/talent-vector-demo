import { GradientText } from "../GradientText";
import { IconHiddenSkills, IconHires, IconMismatched, IconProcess } from "../icons";

const cards = [
  {
    title: "Hidden Skills",
    description:
      "Untapped potential sits in your workforce. Without visibility, skills go unrecognized and opportunities are missed.",
    icon: IconHiddenSkills,
    iconBg: "bg-rose-50 text-rose-500",
  },
  {
    title: "Mismatched Talent",
    description:
      "Roles and skills drift apart over time. Misalignment drives disengagement and underperformance across teams.",
    icon: IconMismatched,
    iconBg: "bg-orange-50 text-orange-500",
  },
  {
    title: "Slow Process & Turnover",
    description:
      "Lengthy hiring cycles and attrition drain resources. Every delay compounds the cost of talent gaps.",
    icon: IconProcess,
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    title: "Expensive New Hires",
    description:
      "External recruiting costs far more than developing from within. Blind spots push you toward costly replacements.",
    icon: IconHires,
    iconBg: "bg-red-50 text-red-500",
  },
];

export function BlindSpot() {
  return (
    <section id="solutions" className="section-pad bg-slate-50/50" aria-labelledby="blind-spot-heading">
      <div className="section-container text-center">
        <h2 id="blind-spot-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Your Most Expensive <GradientText>Blind Spot</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Poor talent visibility costs organizations millions—in turnover, missed internal mobility,
          and misaligned hiring. These four gaps are where it starts.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="card-shadow rounded-2xl border border-slate-100 bg-white p-6 text-left transition hover:shadow-lg"
            >
              <div className={`mb-4 inline-flex rounded-full p-3 ${card.iconBg}`}>
                <card.icon />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
