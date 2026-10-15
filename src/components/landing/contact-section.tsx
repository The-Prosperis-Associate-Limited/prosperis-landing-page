import {
  ArrowDownToLine,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Start a conversation"
            title="What should we build next?"
            description="Tell us what you are working toward. We will bring the questions, perspective, and practical next steps."
            theme="dark"
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__aside" delay={0.05}>
            <div className="contact-methods">
              <a href="mailto:hello@prosperis.example">
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  hello@prosperis.example
                </span>
              </a>
              <a href="tel:+2348000000000">
                <Phone aria-hidden="true" />
                <span>
                  <small>Phone</small>
                  +234 800 000 0000
                </span>
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                <span>
                  <small>WhatsApp</small>
                  Chat with our team
                </span>
              </a>
            </div>

            <a
              className="brochure-card"
              href="/prosperis-company-profile.pdf"
              download
            >
              <ArrowDownToLine aria-hidden="true" />
              <span>
                <strong>Company profile</strong>
                <small>Download the overview · PDF</small>
              </span>
            </a>

            <div className="office-card">
              <div className="office-map" aria-hidden="true">
                <span className="office-road office-road--a" />
                <span className="office-road office-road--b" />
                <span className="office-road office-road--c" />
                <span className="office-water" />
                <span className="office-pin">
                  <MapPin />
                </span>
              </div>
              <div className="office-card__copy">
                <p>
                  <MapPin size={16} aria-hidden="true" /> Lagos, Nigeria
                </p>
                <p>
                  <Clock3 size={16} aria-hidden="true" /> Mon–Fri, 9am–5pm WAT
                </p>
                <small>Placeholder office location</small>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
