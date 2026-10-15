import { Quote } from "lucide-react";
import { partnerNames, testimonials } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function VoicesSection() {
  return (
    <section className="section voices" aria-labelledby="voices-title">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="What partners say"
            title="Good work should feel good to do."
            description="Sample testimonials are clearly marked for replacement with approved client feedback before launch."
            align="center"
          />
        </Reveal>
        <h2 id="voices-title" className="sr-only">
          Sample testimonials
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="testimonial-card">
                <div className="testimonial-card__top">
                  <Quote aria-hidden="true" />
                  <span>Sample testimonial</span>
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>
                  <span>{testimonial.name.slice(0, 1)}</span>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="client-wall">
          <p>Sample client & partner ecosystem</p>
          <div>
            {partnerNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
