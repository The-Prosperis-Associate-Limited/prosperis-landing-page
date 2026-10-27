import { ArrowUpRight } from "lucide-react";
import { coreValues } from "./data";
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
              title="Building stronger businesses through people and technology."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about__statement">
              <p>
                We help organisations strengthen their systems, find the right
                people and develop the capabilities they need to perform and
                grow.
              </p>
              <p>
                Every engagement begins with a conversation about your
                objectives. We agree on the scope, deliverables, timelines,
                responsibilities and costs before work begins, then focus on the
                solution that best fits your business.
              </p>
              <a className="text-link" href="#approach">
                See how we work
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="principles" delay={0.1}>
          <article>
            <span>01</span>
            <h3>Our Mission</h3>
            <p>
              To empower businesses through innovative technology, strategic
              recruitment and impactful training that drive performance and
              sustainable growth.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Our Vision</h3>
            <p>
              To become a trusted partner in business growth, recognised for
              connecting organisations with the right talent, developing
              people’s capabilities and delivering technology solutions that
              create lasting value.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Our Promise</h3>
            <p>
              Practical solutions designed around real business needs, the
              people who will use them and the value they should create.
            </p>
          </article>
        </Reveal>

        <div className="values-block">
          <Reveal className="values-block__heading">
            <p className="eyebrow">
              <span aria-hidden="true" /> Our Core Values
            </p>
            <h3>How we show up in every engagement.</h3>
          </Reveal>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.04}>
                <article className="value-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
