"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <p className="newsletter-success" role="status">
        <Check size={17} aria-hidden="true" /> You&apos;re on the list. Demo
        only.
      </p>
    );
  }

  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubscribed(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="Email address"
        required
      />
      <button type="submit" aria-label="Join newsletter">
        <ArrowRight aria-hidden="true" />
      </button>
    </form>
  );
}
