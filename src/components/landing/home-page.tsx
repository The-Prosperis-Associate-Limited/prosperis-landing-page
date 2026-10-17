import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { Hero } from "./hero";
import { ReviewSection } from "./review-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ReviewSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
