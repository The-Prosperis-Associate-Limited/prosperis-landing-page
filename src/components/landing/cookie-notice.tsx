"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function CookieNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <button
        type="button"
        aria-label="Dismiss cookie notice"
        onClick={() => setVisible(false)}
      >
        <X aria-hidden="true" />
      </button>
      <strong>A small note about cookies.</strong>
      <p>
        This preview uses only essential website functionality. Review the full
        cookie notice in the footer.
      </p>
      <button type="button" onClick={() => setVisible(false)}>
        Got it
      </button>
    </aside>
  );
}
