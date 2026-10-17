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
            <span /> Company / Services / Portfolio
          </p>
          <h1>
            Prosperis,
            <span>at a glance.</span>
          </h1>
          <p className="hero__lead">
            Prosperis brings its businesses, capabilities, and services together
            under one group identity. This page introduces the group, explains
            its areas of focus, and gives every visitor a clear next step.
          </p>
          <div className="hero__actions">
            <a className="button button--lime" href="#about">
              About Prosperis
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link text-link--light" href="#services">
              Review the services <span aria-hidden="true">↘</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.16}>
          <div className="hero-visual__glow" aria-hidden="true" />
          <div className="route-card">
            <div className="route-card__head">
              <div>
                <span className="route-card__eyebrow">WEBSITE OVERVIEW</span>
                <strong>Prosperis Group</strong>
              </div>
              <span className="route-card__status">Draft</span>
            </div>

            <div className="overview-list">
              <span>
                <Check size={14} aria-hidden="true" /> Who the company is
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> What services it offers
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> How its portfolio
                connects
              </span>
            </div>

            <div className="route-card__meta">
              <div>
                <span>Purpose</span>
                <strong>Company overview</strong>
              </div>
              <div>
                <span>Audience</span>
                <strong>Clients & partners</strong>
              </div>
            </div>

            <a href="#about">
              Start with the company story
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="signal-card signal-card--top">
            <span className="signal-dot" />
            Content-led landing page
          </div>
          <div className="signal-card signal-card--bottom">
            <span>03</span>
            <p>Core questions answered</p>
          </div>
        </Reveal>
      </div>

      <div className="hero__footer shell">
        <p>Company · Services · Portfolio</p>
        <a href="#about" aria-label="Scroll to about">
          <ArrowDown size={17} /> Scroll to discover
        </a>
      </div>
    </section>
  );
}
