"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Send, Sparkles, X } from "lucide-react";

type ChatMessage = {
  id: string;
  sender: "assistant" | "visitor";
  text: string;
};

const quickReplies = [
  "Company information",
  "Services & partnerships",
  "Haya Drivers",
] as const;

const initialMessage: ChatMessage = {
  id: "assistant-0",
  sender: "assistant",
  text: "Hi, I’m the Prosperis website assistant. What would you like help with?",
};

function getReply(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes("partner")) {
    return "For partnership enquiries, share the organisation, opportunity, and best contact details in the enquiry form. I can take you there now.";
  }

  if (normalized.includes("service")) {
    return "Prosperis is currently presenting three service areas: business strategy and growth, digital products and technology, and mobility services. The final scope is still under review.";
  }

  if (
    normalized.includes("haya") ||
    normalized.includes("driver") ||
    normalized.includes("mobility")
  ) {
    return "Haya Drivers is the mobility business featured in this draft. For detailed service information, use the Haya Drivers link in the portfolio section.";
  }

  if (
    normalized.includes("company") ||
    normalized.includes("about") ||
    normalized.includes("prosperis")
  ) {
    return "Prosperis brings its businesses, capabilities, and services together under one group identity. The company story on this preview is awaiting final approval.";
  }

  return "Thanks for your message. Live support is not connected to this preview yet, but the enquiry form is ready to capture what you need.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("prosperis:open-chat", openChat);
    return () => window.removeEventListener("prosperis:open-chat", openChat);
  }, []);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = (text: string) => {
    const message = text.trim();
    if (!message) return;

    setMessages((current) => {
      const nextIndex = current.length;

      return [
        ...current,
        {
          id: `visitor-${nextIndex}`,
          sender: "visitor",
          text: message,
        },
        {
          id: `assistant-${nextIndex + 1}`,
          sender: "assistant",
          text: getReply(message),
        },
      ];
    });
    setDraft("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(draft);
  };

  return (
    <div className="chat-widget">
      {open ? (
        <section
          className="chat-panel"
          id="prosperis-chat"
          role="dialog"
          aria-modal="false"
          aria-labelledby="chat-title"
        >
          <header className="chat-panel__header">
            <div className="chat-avatar" aria-hidden="true">
              <Sparkles />
            </div>
            <div>
              <strong id="chat-title">Prosperis help</strong>
              <span>
                <i aria-hidden="true" /> Website assistant
              </span>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </header>

          <div
            className="chat-panel__messages"
            ref={logRef}
            role="log"
            aria-live="polite"
          >
            <p className="chat-panel__note">Preview assistant</p>
            {messages.map((message) => (
              <div
                className={`chat-message chat-message--${message.sender}`}
                key={message.id}
              >
                {message.text}
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="chat-quick-replies" aria-label="Suggested topics">
                {quickReplies.map((reply) => (
                  <button
                    type="button"
                    key={reply}
                    onClick={() => sendMessage(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            ) : null}

            <a
              className="chat-contact-link"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Continue to the enquiry form
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          <form className="chat-panel__composer" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="chat-message">
              Type your message
            </label>
            <input
              id="chat-message"
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your message…"
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!draft.trim()}
            >
              <Send aria-hidden="true" />
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className={`chat-launcher ${open ? "chat-launcher--open" : ""}`}
        aria-expanded={open}
        aria-controls="prosperis-chat"
        aria-label={open ? "Close chat" : "Need help? Let's talk"}
        onClick={() => setOpen((current) => !current)}
      >
        <span>
          <small>Need help?</small>
          Let&apos;s talk
        </span>
        {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
      </button>
    </div>
  );
}
