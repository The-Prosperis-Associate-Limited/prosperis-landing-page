import {
  BriefcaseBusiness,
  Building2,
  ContactRound,
  Network,
} from "lucide-react";
import { contentReviewItems } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Building2, BriefcaseBusiness, Network, ContactRound] as const;

export function ReviewSection() {
  return (
    <section className="section review-section" id="content-review">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Content review"
            title="What needs to be confirmed next."
            description="These are the specific decisions needed to turn this coherent preview into launch-ready company copy."
          />
        </Reveal>

        <div className="review-grid">
          {contentReviewItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
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
          <strong>Intentionally not shown yet</strong>
          <p>
            Leadership profiles, client logos, testimonials, case studies,
            statistics, article dates, and awards should only appear after the
            corresponding names, facts, quotes, and approvals are supplied.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
