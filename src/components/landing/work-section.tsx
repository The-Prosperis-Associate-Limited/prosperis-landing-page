import { ArrowUpRight, Play } from "lucide-react";
import { caseStudies } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function WorkSection() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <Reveal>
          <div className="work__heading">
            <SectionHeading
              eyebrow="Selected work"
              title="Proof lives in the details."
              description="Illustrative case-study content showing how this section will present real outcomes once final project material is supplied."
            />
            <span className="sample-label">Preview content</span>
          </div>
        </Reveal>

        <div className="case-studies">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06}>
              <article className={`case-study ${study.className}`}>
                <div className="case-study__visual" aria-hidden="true">
                  <span className="case-study__number">{study.index}</span>
                  {index === 0 ? (
                    <div className="case-art case-art--route">
                      <span className="case-route case-route--a" />
                      <span className="case-route case-route--b" />
                      <span className="case-node case-node--a" />
                      <span className="case-node case-node--b" />
                      <span className="case-node case-node--c" />
                    </div>
                  ) : null}
                  {index === 1 ? (
                    <div className="case-art case-art--system">
                      <span>ASK</span>
                      <span>ALIGN</span>
                      <span>ACT</span>
                    </div>
                  ) : null}
                  {index === 2 ? (
                    <div className="case-art case-art--signal">
                      <span>P</span>
                      <span>Built to be clear.</span>
                    </div>
                  ) : null}
                </div>

                <div className="case-study__copy">
                  <p>{study.eyebrow}</p>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div>
                    <span>{study.result}</span>
                    <a href="#contact" aria-label={`Discuss ${study.title}`}>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="gallery-block" id="gallery">
          <Reveal>
            <div className="gallery-block__heading">
              <div>
                <p className="eyebrow">
                  <span /> Inside the work
                </p>
                <h3>Notes from the field.</h3>
              </div>
              <p>
                A flexible gallery area for real project photography, short
                films, behind-the-scenes moments, and event coverage.
              </p>
            </div>
          </Reveal>

          <div className="gallery-grid">
            <Reveal className="gallery-card gallery-card--large">
              <div
                className="gallery-art gallery-art--workshop"
                aria-hidden="true"
              >
                <span className="workshop-table" />
                <span className="workshop-note note-a" />
                <span className="workshop-note note-b" />
                <span className="workshop-note note-c" />
                <span className="workshop-person person-a" />
                <span className="workshop-person person-b" />
              </div>
              <div className="gallery-card__caption">
                <div>
                  <span>PHOTO JOURNAL</span>
                  <h4>Ideas become clearer around a table.</h4>
                </div>
                <span>01 / 03</span>
              </div>
            </Reveal>

            <Reveal className="gallery-card gallery-card--video" delay={0.08}>
              <div
                className="gallery-art gallery-art--street"
                aria-hidden="true"
              >
                <span className="street-sun" />
                <span className="street-road" />
                <span className="street-car" />
                <span className="street-building building-a" />
                <span className="street-building building-b" />
                <span className="street-building building-c" />
              </div>
              <span className="gallery-play" aria-hidden="true">
                <Play fill="currentColor" aria-hidden="true" />
              </span>
              <div className="gallery-card__caption gallery-card__caption--light">
                <div>
                  <span>BRAND FILM · 00:42</span>
                  <h4>Movement is a shared language.</h4>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
