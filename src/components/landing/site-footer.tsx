import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { navigation } from "./data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <BrandMark inverse />
            <p>
              A concise introduction to Prosperis Group, its services, and its
              portfolio.
            </p>
            <div className="social-links" aria-label="Social media">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter aria-hidden="true" />
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
          </nav>

          <div className="site-footer__status">
            <p>Content status</p>
            <strong>Draft for review</strong>
            <span>
              Company facts, service details, contact information, and legal
              copy still require approval before launch.
            </span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Prosperis Group. Content review website.</p>
          <a href="#top" aria-label="Back to top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
