import { ArrowRight, ClipboardCheck } from "lucide-react";
import { processSteps } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function PartnersSection() {
  return (
    <section className="section partners" id="approach">
      <div className="shell">
        <div className="partners__intro">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A clear path from challenge to solution."
              description="Every engagement begins with a conversation about your objectives. We agree on scope, deliverables, timelines, responsibilities and costs before work begins."
            />
          </Reveal>

          <Reveal className="partners__action" delay={0.08}>
            <ClipboardCheck aria-hidden="true" />
            <p>
              Not every business needs a complex system. Sometimes the right
              solution is a simple website, a better workflow or an improvement
              to an existing application.
            </p>
            <a className="text-link" href="#contact">
              Let&apos;s identify what you need
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="partner-roster" aria-label="Our five-step process">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="partner-slot">
                <span>{step.number}</span>
                <div className="partner-slot__mark" aria-hidden="true">
                  {step.number}
                </div>
                <strong>{step.title}</strong>
                <small>{step.description}</small>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
