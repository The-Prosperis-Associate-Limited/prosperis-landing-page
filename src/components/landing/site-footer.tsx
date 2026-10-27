import { ArrowUp } from "lucide-react";
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
              Technology that moves business forward through practical digital
              solutions, strategic recruitment and impactful training.
            </p>
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
            <p>Contact</p>
            <strong>Let&apos;s discuss your project.</strong>
            <a href="tel:+2348065415059">0806 541 5059</a>
            <a href="tel:+2348033199000">0803 319 9000</a>
            <a href="mailto:enquiry@prosperisassociates.com">
              enquiry@prosperisassociates.com
            </a>
            <span>7 Jibowu, Yaba, Lagos State, Nigeria</span>
            <span>Business hours: 9am – 5pm</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 The Prosperis Associates Limited.</p>
          <a href="#top" aria-label="Back to top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
