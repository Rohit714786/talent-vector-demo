import { GradientText } from "../GradientText";
import { IconCheck } from "../icons";

const checklist = [
  "Structured, bias-reduced screening at scale",
  "Skills-based evaluation aligned to role requirements",
  "Seamless handoff to human recruiters",
  "Full audit trail for compliance teams",
];

const chatMessages = [
  { role: "ai", text: "Hi! I'm your AI Interviewer. Let's explore your experience with data analytics." },
  { role: "user", text: "I've led three analytics projects in the last two years, including a churn model that reduced attrition by 12%." },
  { role: "ai", text: "That's impressive. Can you walk me through how you validated the model before deployment?" },
];

export function AIInterviewer() {
  return (
    <section id="pricing" className="section-pad" aria-labelledby="ai-heading">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="ai-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Try Our <GradientText>AI Interviewer</GradientText>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Screen candidates faster with conversational AI that assesses skills—not just
              keywords on a resume.
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
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" action="#request-demo" method="get">
              <label htmlFor="trial-email" className="sr-only">
                Work email for trial
              </label>
              <input
                id="trial-email"
                type="email"
                name="email"
                placeholder="Enter your work email"
                className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                required
              />
              <button type="submit" className="btn-primary shrink-0 px-6">
                Start Trial
              </button>
            </form>
          </div>

          <div
            className="card-shadow overflow-hidden rounded-2xl border border-slate-200 bg-white"
            role="region"
            aria-label="AI Interviewer chat preview"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="ml-2 text-xs font-medium text-slate-500">AI Interviewer — Live Demo</span>
            </div>
            <div className="space-y-4 p-5">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "ai"
                        ? "rounded-tl-sm bg-brand-blue text-white"
                        : "rounded-tr-sm bg-slate-100 text-slate-700"
                    }`}
                  >
                    {msg.role === "ai" && (
                      <span className="mb-1 block text-xs font-semibold opacity-80">AI Interviewer</span>
                    )}
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
