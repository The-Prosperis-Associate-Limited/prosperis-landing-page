import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { navigation } from "./data";
import { LegalDialogs } from "./legal-dialogs";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="newsletter">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <BrandMark inverse />
            <p>
              Ideas, products, and partnerships built to move people and
              businesses forward.
            </p>
            <div className="social-links" aria-label="Social media">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn placeholder"
              >
                <Linkedin aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram placeholder"
              >
                <Instagram aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook placeholder"
              >
                <Facebook aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p>Explore</p>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#faq">FAQ</a>
          </nav>

          <div className="site-footer__newsletter">
            <p>Occasional notes on building useful things.</p>
            <span>No noise. Just the good stuff.</span>
            <NewsletterForm />
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Prosperis Group. Preview website.</p>
          <LegalDialogs />
          <a href="#top" aria-label="Back to top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
