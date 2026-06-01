import Link from "next/link";
import { GradientText } from "../GradientText";

export function FinalCTA() {
  return (
    <section
      id="request-demo"
      className="section-pad bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="cta-heading"
    >
      <div className="section-container text-center">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ready to Transform How You{" "}
          <GradientText>Understand Your Talent?</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Join forward-thinking organizations that have replaced guesswork with validated workforce intelligence.
        </p>
        <Link href="#request-demo" className="btn-primary mt-8 px-10 py-4 text-base">
          Request Demo
        </Link>
      </div>
    </section>
  );
}
