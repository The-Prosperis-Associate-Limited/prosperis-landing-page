import { ArrowDown, ArrowRight, Check, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

      <div className="shell hero__inner">
        <Reveal className="hero__content">
          <p className="hero-kicker">
            <span /> Independent. Ambitious. African.
          </p>
          <h1>
            Built for the
            <span>roads ahead.</span>
          </h1>
          <p className="hero__lead">
            We shape businesses, digital products, and mobility services that
            help people and organizations move with confidence.
          </p>
          <div className="hero__actions">
            <a className="button button--lime" href="#services">
              Explore what we do
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link text-link--light" href="#work">
              See selected work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.16}>
          <div className="hero-visual__glow" aria-hidden="true" />
          <div className="route-card">
            <div className="route-card__head">
              <div>
                <span className="route-card__eyebrow">LIVE ECOSYSTEM</span>
                <strong>Haya Drivers</strong>
              </div>
              <span className="route-card__status">Active</span>
            </div>

            <div className="route-map" aria-hidden="true">
              <span className="route-map__road route-map__road--a" />
              <span className="route-map__road route-map__road--b" />
              <span className="route-map__road route-map__road--c" />
              <span className="route-map__pin route-map__pin--start">
                <Check size={14} />
              </span>
              <span className="route-map__path" />
              <span className="route-map__pin route-map__pin--end">
                <MapPin size={15} />
              </span>
              <span className="route-map__car">P</span>
            </div>

            <div className="route-card__meta">
              <div>
                <span>Focus</span>
                <strong>Everyday mobility</strong>
              </div>
              <div>
                <span>Experience</span>
                <strong>Human-first</strong>
              </div>
            </div>

            <a
              href="https://www.hayadrivers.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit hayadrivers.com
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="signal-card signal-card--top">
            <span className="signal-dot" />
            Building useful ventures
          </div>
          <div className="signal-card signal-card--bottom">
            <span>03</span>
            <p>Connected disciplines</p>
          </div>
        </Reveal>
      </div>

      <div className="hero__footer shell">
        <p>Strategy · Product · Mobility</p>
        <a href="#about" aria-label="Scroll to about">
          <ArrowDown size={17} /> Scroll to discover
        </a>
      </div>
    </section>
  );
}
