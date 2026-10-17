import { Building2, CircleHelp, Handshake, Layers3 } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="How can we help?"
            description="Use this section for company information, service enquiries, portfolio questions, partnerships, or general contact."
            theme="dark"
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__aside" delay={0.05}>
            <div className="contact-guide">
              <p className="eyebrow eyebrow--lime">
                <span /> Enquiry guide
              </p>
              <h3>What this form is for</h3>
              <ul>
                <li>
                  <Building2 aria-hidden="true" /> Company information
                </li>
                <li>
                  <CircleHelp aria-hidden="true" /> Service enquiries
                </li>
                <li>
                  <Layers3 aria-hidden="true" /> Portfolio and Haya questions
                </li>
                <li>
                  <Handshake aria-hidden="true" /> Partnerships and media
                </li>
              </ul>
            </div>

            <div className="contact-status">
              <strong>Before public launch</strong>
              <p>
                Add the confirmed company inbox, telephone number, office
                address, form destination, and approved privacy notice. The
                draft no longer presents invented contact details as real.
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
