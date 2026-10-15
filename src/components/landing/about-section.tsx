import { ArrowUpRight } from "lucide-react";
import { team } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <>
      <section className="partner-strip" aria-label="Sample partner logos">
        <div className="shell partner-strip__inner">
          <p>Built alongside ambitious teams</p>
          <div className="partner-marquee" aria-hidden="true">
            <div className="partner-marquee__track">
              <span>NORTHSTAR</span>
              <span>LUMEN°</span>
              <span>COMMON GROUND</span>
              <span>KINSHIP</span>
              <span>ARC WORKS</span>
              <span>NOMAD+</span>
              <span>NORTHSTAR</span>
              <span>LUMEN°</span>
              <span>COMMON GROUND</span>
              <span>KINSHIP</span>
              <span>ARC WORKS</span>
              <span>NOMAD+</span>
            </div>
          </div>
          <small>Sample names</small>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell">
          <div className="about__intro">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="Progress, made practical."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about__statement">
                <p>
                  Prosperis exists to turn ambitious ideas into useful systems:
                  businesses people trust, products they understand, and
                  services that hold up in the real world.
                </p>
                <p>
                  We bring commercial thinking, technology, and operations to
                  the same table—because meaningful progress rarely fits into
                  one neat discipline.
                </p>
                <a className="text-link" href="#team">
                  Meet the people behind the work
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="principles" delay={0.1}>
            <article>
              <span>01</span>
              <h3>See the whole system.</h3>
              <p>
                We connect the commercial, human, and operational parts of a
                challenge before choosing the answer.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Make it genuinely useful.</h3>
              <p>
                Every decision has a job to do. Clarity, access, and everyday
                usefulness matter more than theatre.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Build for what comes next.</h3>
              <p>
                We design flexible foundations that can learn, adapt, and grow
                as the people around them do.
              </p>
            </article>
          </Reveal>

          <div className="team" id="team">
            <Reveal>
              <div className="team__heading">
                <div>
                  <p className="eyebrow">
                    <span /> The team
                  </p>
                  <h3>Many perspectives. One standard.</h3>
                </div>
                <p>
                  A sample leadership team combining experience across strategy,
                  technology, mobility, and partnerships.
                </p>
              </div>
            </Reveal>
            <div className="team__grid">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.06}>
                  <article className="team-card">
                    <div
                      className={`team-card__portrait portrait-${index + 1}`}
                    >
                      <span>{member.initials}</span>
                    </div>
                    <div>
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
