import {
  ArrowRight,
  Blocks,
  Compass,
  ExternalLink,
  Route,
} from "lucide-react";
import { services } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Compass, Blocks, Route] as const;

export function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One partner. Three connected disciplines."
            description="We move from the boardroom to the interface to the frontline, keeping the original purpose intact at every step."
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
                    <span>{service.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href="#contact" aria-label={`Discuss ${service.title}`}>
                    Discuss a project <ArrowRight size={17} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="product-spotlight" delay={0.12}>
          <div className="product-spotlight__copy">
            <p className="eyebrow eyebrow--lime">
              <span /> Featured product
            </p>
            <h3>Haya Drivers</h3>
            <p>
              A dedicated home for the mobility side of our ecosystem. Explore
              the live Haya Drivers website and see the product in its own
              context.
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
            <div className="product-badge product-badge--one">MOVE BETTER</div>
            <div className="product-badge product-badge--two">BUILT FOR PEOPLE</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
