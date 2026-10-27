import {
  Handshake,
  Lightbulb,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import { differentiators } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Target, Lightbulb, UsersRound, Workflow, Handshake] as const;

export function ReviewSection() {
  return (
    <section className="section review-section" id="why-us">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why Prosperis"
            title="Solutions shaped around your business."
            description="We combine clear business thinking, practical innovation and close collaboration to deliver work that fits your operational realities."
          />
        </Reveal>

        <div className="review-grid">
          {differentiators.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={(index % 2) * 0.06}>
                <article className="review-card">
                  <div>
                    <span>{item.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="review-note" delay={0.1}>
          <strong>Our promise</strong>
          <p>
            We help organisations strengthen their systems, find the right
            people and develop the capabilities they need to perform and grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
