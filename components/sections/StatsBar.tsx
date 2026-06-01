const stats = [
  { value: "Up to 60%", label: "Reduction in costly external hiring" },
  { value: "3×", label: "Faster internal mobility decisions" },
  { value: "80%", label: "Improvement in skills data accuracy" },
  { value: "28%", label: "Increase in employee retention" },
];

export function StatsBar() {
  return (
    <section className="bg-brand-dark py-14" aria-label="Platform impact statistics">
      <div className="section-container">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
