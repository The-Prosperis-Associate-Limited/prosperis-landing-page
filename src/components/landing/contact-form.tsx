"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whatsappNumber = "2348065415059";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Prosperis, I would like to discuss a project.",
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Organisation: ${form.get("organization") || "Not provided"}`,
      `Enquiry: ${form.get("interest")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Your enquiry is ready.</h3>
        <p>
          We opened WhatsApp with your message. Review it there and tap send to
          share it with the Prosperis team.
        </p>
        <a href="https://wa.me/2348065415059" target="_blank" rel="noreferrer">
          Open WhatsApp
        </a>
        <button type="button" onClick={() => setSubmitted(false)}>
          Prepare another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__intro">
        <p>Project enquiry</p>
        <h3>Tell us what you need.</h3>
        <span>
          Complete the form and continue to WhatsApp to send your enquiry.
        </span>
      </div>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="name@company.com"
            required
          />
        </label>
      </div>
      <div className="field-row">
        <label>
          <span>Organisation</span>
          <input name="organization" type="text" placeholder="Company name" />
        </label>
        <label>
          <span>What can we help with?</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Choose an enquiry type
            </option>
            <option>Technology and digital solutions</option>
            <option>Recruitment and talent solutions</option>
            <option>Training and development</option>
            <option>Partnership enquiry</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us about your project</span>
        <textarea
          name="message"
          placeholder="Describe your business, the challenge you want to solve and the outcome you hope to achieve."
          rows={5}
          required
        />
      </label>
      <div className="contact-form__footer">
        <p>
          Your information stays in your browser until you choose to send it
          through WhatsApp.
        </p>
        <button className="button button--lime" type="submit">
          Continue on WhatsApp <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
