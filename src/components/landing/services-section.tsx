import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  Code2,
  GraduationCap,
  Lightbulb,
  MonitorSmartphone,
  RefreshCw,
  UserSearch,
  Workflow,
} from "lucide-react";
import { portfolioProjects, servicePillars, technologyServices } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const pillarIcons = [BrainCircuit, UserSearch, GraduationCap] as const;
const technologyIcons = [
  MonitorSmartphone,
  Code2,
  Blocks,
  Workflow,
  Lightbulb,
  BrainCircuit,
  RefreshCw,
] as const;

export function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Three pillars. One business-first approach."
            description="We combine technology, talent and learning to help organisations strengthen their systems, find the right people and develop the capabilities they need to perform and grow."
            theme="dark"
          />
        </Reveal>

        <div className="service-pillars">
          {servicePillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <article className="pillar-card">
                  <div>
                    <span>{pillar.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="technology-heading" delay={0.08}>
          <p className="eyebrow eyebrow--lime">
            <span aria-hidden="true" /> Technology and Digital Solutions
          </p>
          <h3>Practical Technology. Purposeful Solutions.</h3>
          <p>
            We help businesses identify, build and implement digital solutions
            that address real operational and customer needs.
          </p>
        </Reveal>

        <div className="services__grid">
          {technologyServices.map((service, index) => {
            const Icon = technologyIcons[index];
            return (
              <Reveal key={service.title} delay={(index % 2) * 0.07}>
                <article className="service-card">
                  <div className="service-card__top">
                    <span>{service.number} · Technology service</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <p className="service-card__outcome">
                    <strong>Outcome:</strong> {service.outcome}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Discuss this service <ArrowRight size={17} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="product-spotlight" delay={0.1}>
          <span id="portfolio" className="anchor-target" />
          <div className="product-spotlight__copy">
            <p className="eyebrow eyebrow--lime">
              <span /> Our Portfolio
            </p>
            <h3>Ideas Put into Practice.</h3>
            <p>
              Every project starts with a challenge. Our work is guided by the
              goal of developing digital solutions that respond to real needs
              and create value for the people who use them.
            </p>
            <a className="button button--lime" href="#contact">
              Have a project in mind?
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="portfolio-types">
            {portfolioProjects.map((project) => (
              <article key={project.title}>
                <span>{project.number}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <p className="portfolio-proof">
            Each case study explains the challenge, approach, solution, outcome
            and technology used, with results supported by evidence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
