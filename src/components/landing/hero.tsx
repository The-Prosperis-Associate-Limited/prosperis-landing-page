import { ArrowDown, ArrowRight, Check } from "lucide-react";
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
            <span /> Technology / Talent / Learning
          </p>
          <h1>
            The right people.
            <span>The right skills.</span>
            <b>The right solutions.</b>
          </h1>
          <p className="hero__lead">
            The Prosperis Associates Limited partners with organisations to
            solve business challenges through technology, talent and learning.
            We help businesses access skilled professionals, develop workforce
            capabilities and adopt digital solutions that improve how they
            operate, serve customers and grow.
          </p>
          <div className="hero__actions">
            <a className="button button--lime" href="#about">
              Discover Prosperis
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link text-link--light" href="#services">
              Explore our services <span aria-hidden="true">↘</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.16}>
          <div className="hero-visual__glow" aria-hidden="true" />
          <div className="route-card">
            <div className="route-card__head">
              <div>
                <span className="route-card__eyebrow">OUR SERVICE MODEL</span>
                <strong>Three connected pillars</strong>
              </div>
              <span className="route-card__status">TPAL</span>
            </div>

            <div className="overview-list">
              <span>
                <Check size={14} aria-hidden="true" /> Technology and digital
                solutions
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> Recruitment and talent
                solutions
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> Training and development
              </span>
            </div>

            <div className="route-card__meta">
              <div>
                <span>Purpose</span>
                <strong>Business growth</strong>
              </div>
              <div>
                <span>Approach</span>
                <strong>Practical and tailored</strong>
              </div>
            </div>

            <a href="#services">
              Explore our service pillars
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="signal-card signal-card--top">
            <span className="signal-dot" />
            Technology · Talent · Learning
          </div>
          <div className="signal-card signal-card--bottom">
            <span>03</span>
            <p>Connected service pillars</p>
          </div>
        </Reveal>
      </div>

      <div className="hero__footer shell">
        <p>Technology · Talent · Learning</p>
        <a href="#about" aria-label="Scroll to about">
          <ArrowDown size={17} /> Scroll to discover
        </a>
      </div>
    </section>
  );
}
