"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Thanks for reaching out.</h3>
        <p>
          This demo has captured the interaction. Connect the form to your inbox
          or CRM to receive live enquiries.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Work email</span>
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
          <span>Organization</span>
          <input name="organization" type="text" placeholder="Company name" />
        </label>
        <label>
          <span>What can we help with?</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Choose a service
            </option>
            <option>Strategy & growth</option>
            <option>Digital products</option>
            <option>Mobility services</option>
            <option>Partnership opportunity</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us a little about it</span>
        <textarea
          name="message"
          placeholder="What are you trying to make possible?"
          rows={5}
          required
        />
      </label>
      <div className="contact-form__footer">
        <p>
          By sending this form, you agree to our{" "}
          <a href="#privacy">privacy notice</a>.
        </p>
        <button className="button button--lime" type="submit">
          Send enquiry <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
