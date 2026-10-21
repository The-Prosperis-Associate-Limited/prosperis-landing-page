import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  UserSearch,
} from "lucide-react";
import { services } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [GraduationCap, UserSearch, Code2, BriefcaseBusiness] as const;

export function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Practical expertise for stronger organisations."
            description="From people and performance to technology and strategy, Prosperis helps organisations build capability, hire well, and move forward with confidence."
            theme="dark"
          />
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="service-card">
                  <div className="service-card__top">
                    <span>{service.number} · Service</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
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

        <Reveal className="product-spotlight" delay={0.12}>
          <span id="portfolio" className="anchor-target" />
          <div className="product-spotlight__copy">
            <p className="eyebrow eyebrow--lime">
              <span /> Portfolio item in this draft
            </p>
            <h3>Haya Drivers</h3>
            <p>
              Haya Drivers is included here as a mobility business associated
              with Prosperis. Before launch, confirm the formal relationship and
              approve a one-sentence description of what Haya offers. Its own
              website should remain the source for detailed service information.
            </p>
            <a
              className="button button--lime"
              href="https://www.hayadrivers.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Haya Drivers
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="product-spotlight__visual" aria-hidden="true">
            <div className="phone-card">
              <div className="phone-card__bar">
                <span />
                <small>Haya</small>
                <span />
              </div>
              <div className="phone-card__map">
                <span className="map-line map-line--one" />
                <span className="map-line map-line--two" />
                <span className="map-line map-line--three" />
                <span className="map-marker map-marker--one">A</span>
                <span className="map-marker map-marker--two">B</span>
              </div>
              <div className="phone-card__sheet">
                <span />
                <strong>Where are you going?</strong>
                <p>Plan the next move</p>
                <span className="phone-card__button">Continue</span>
              </div>
            </div>
            <div className="product-badge product-badge--one">
              RELATIONSHIP TO CONFIRM
            </div>
            <div className="product-badge product-badge--two">
              APPROVED COPY NEEDED
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
