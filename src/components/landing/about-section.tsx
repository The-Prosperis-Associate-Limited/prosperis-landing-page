import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="about__intro">
          <Reveal>
            <SectionHeading
              eyebrow="About Prosperis"
              title="A group story visitors can understand."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about__statement">
              <p>
                Prosperis brings its businesses, capabilities, and services
                together under one group identity.
              </p>
              <p>
                The final company story should make clear what the group does,
                who it serves, and how each part connects. This wording stays
                deliberately broad until the official description, history, and
                group structure are approved.
              </p>
              <a className="text-link" href="#content-review">
                See what still needs confirmation
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="principles" delay={0.1}>
          <article>
            <span>01</span>
            <h3>Who is Prosperis?</h3>
            <p>
              Replace the broad opening with the approved legal and commercial
              description of the group.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>What does it do?</h3>
            <p>
              Name the services and business activities in plain language,
              including who each one is intended for.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>How does it connect?</h3>
            <p>
              Explain the relationship between the group, its portfolio
              companies, and any customer-facing brands.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
