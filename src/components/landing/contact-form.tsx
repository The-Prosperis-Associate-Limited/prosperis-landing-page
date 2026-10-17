"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Preview submission complete.</h3>
        <p>
          No message was sent. Connect this form to the approved Prosperis inbox
          or CRM before the website is published.
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
      <div className="contact-form__intro">
        <p>Enquiry form</p>
        <h3>Tell the team what you need.</h3>
        <span>
          The fields below are ready for review; submission delivery is not yet
          connected.
        </span>
      </div>
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
              Choose an enquiry type
            </option>
            <option>Company information</option>
            <option>Business strategy & growth</option>
            <option>Digital products & technology</option>
            <option>Mobility services or Haya Drivers</option>
            <option>Partnership or media enquiry</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us a little about it</span>
        <textarea
          name="message"
          placeholder="Tell us what you would like to know about Prosperis, a service area, or a portfolio business."
          rows={5}
          required
        />
      </label>
      <div className="contact-form__footer">
        <p>
          Preview only. The form is not connected to an inbox and does not send
          or store this information.
        </p>
        <button className="button button--lime" type="submit">
          Submit preview enquiry <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
