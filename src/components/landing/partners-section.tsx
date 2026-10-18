import { ArrowRight, Handshake } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const partnerSlots = ["01", "02", "03", "04"] as const;

export function PartnersSection() {
  return (
    <section className="section partners" id="partners">
      <div className="shell">
        <div className="partners__intro">
          <Reveal>
            <SectionHeading
              eyebrow="Partners"
              title="The right relationships belong in the story."
              description="A dedicated space for the organisations that work with Prosperis. Approved partner names and logos can be added here without overstating relationships that are not yet public."
            />
          </Reveal>

          <Reveal className="partners__action" delay={0.08}>
            <Handshake aria-hidden="true" />
            <p>
              Interested in working together? Tell the team what kind of
              partnership you have in mind.
            </p>
            <a className="text-link" href="#contact">
              Discuss a partnership
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="partner-roster" aria-label="Partner roster preview">
          {partnerSlots.map((slot, index) => (
            <Reveal key={slot} delay={index * 0.05}>
              <div className="partner-slot">
                <span>{slot}</span>
                <div className="partner-slot__mark" aria-hidden="true">
                  P
                </div>
                <strong>Partner name</strong>
                <small>Logo and name to confirm</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
