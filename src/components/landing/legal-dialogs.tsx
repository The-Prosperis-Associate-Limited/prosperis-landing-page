"use client";

import { useRef } from "react";
import { X } from "lucide-react";

const legalItems = [
  {
    id: "privacy",
    label: "Privacy",
    title: "Privacy notice",
    copy: [
      "This is placeholder legal content for design and development review only. Before launch, replace it with a policy approved for your organization, services, and operating regions.",
      "A final privacy notice should explain what personal information is collected, why it is used, how long it is retained, who it may be shared with, and how people can exercise their rights.",
    ],
  },
  {
    id: "terms",
    label: "Terms",
    title: "Website terms",
    copy: [
      "These sample terms outline the intended location of the final website conditions. They are not legal advice and should not be published as final terms.",
      "Your approved terms should cover permitted use, intellectual property, third-party links, service availability, limitations, governing law, and how updates will be communicated.",
    ],
  },
  {
    id: "cookies",
    label: "Cookies",
    title: "Cookie notice",
    copy: [
      "This demo does not intentionally set marketing cookies. The final notice should reflect the analytics, embedded services, and consent tools actually used on the production website.",
      "Only necessary technologies should load before consent where required. Visitors should be able to review and change their preferences at any time.",
    ],
  },
] as const;

function LegalItem({ item }: { item: (typeof legalItems)[number] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        id={item.id}
        className="footer-legal-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        {item.label}
      </button>
      <dialog
        ref={dialogRef}
        className="legal-dialog"
        onClick={(event) => {
          if (event.currentTarget === event.target) event.currentTarget.close();
        }}
      >
        <div>
          <button
            className="legal-dialog__close"
            type="button"
            aria-label={`Close ${item.title}`}
            onClick={() => dialogRef.current?.close()}
          >
            <X aria-hidden="true" />
          </button>
          <p className="eyebrow">
            <span /> Legal preview
          </p>
          <h2>{item.title}</h2>
          <p>Last updated: 15 October 2026</p>
          {item.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <button
            className="button button--blue"
            type="button"
            onClick={() => dialogRef.current?.close()}
          >
            Close notice
          </button>
        </div>
      </dialog>
    </>
  );
}

export function LegalDialogs() {
  return (
    <div className="footer-legal">
      {legalItems.map((item) => (
        <LegalItem key={item.id} item={item} />
      ))}
    </div>
  );
}
