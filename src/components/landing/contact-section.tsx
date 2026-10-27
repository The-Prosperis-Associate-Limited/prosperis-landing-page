import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let’s Talk About What You Want to Build."
            description="Whether you have a clear project brief or are still exploring an idea, we’d like to hear from you. Tell us about your business, the challenge you want to solve and the outcome you hope to achieve."
            theme="dark"
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__aside" delay={0.05}>
            <div className="contact-guide">
              <p className="eyebrow eyebrow--lime">
                <span /> Other ways to connect
              </p>
              <h3>Speak with the Prosperis team.</h3>
              <div className="contact-methods">
                <a href="tel:+2348065415059">
                  <Phone aria-hidden="true" />
                  <span>
                    <small>Phone / WhatsApp</small>
                    0806 541 5059
                  </span>
                </a>
                <a href="tel:+2348033199000">
                  <MessageCircle aria-hidden="true" />
                  <span>
                    <small>Phone / WhatsApp</small>
                    0803 319 9000
                  </span>
                </a>
                <a href="mailto:enquiry@prosperisassociates.com">
                  <Mail aria-hidden="true" />
                  <span>
                    <small>Email</small>
                    enquiry@prosperisassociates.com
                  </span>
                </a>
                <div className="contact-method">
                  <MapPin aria-hidden="true" />
                  <span>
                    <small>Office address</small>7 Jibowu, Yaba, Lagos State,
                    Nigeria
                  </span>
                </div>
                <div className="contact-method">
                  <Clock3 aria-hidden="true" />
                  <span>
                    <small>Business hours</small>
                    9am – 5pm
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-status">
              <strong>What happens next?</strong>
              <p>
                Once we receive your enquiry, we will review your requirements
                and contact you using the details provided, subject to our
                response process.
              </p>
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
