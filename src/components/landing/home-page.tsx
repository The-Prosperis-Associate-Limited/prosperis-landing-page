import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { CookieNotice } from "./cookie-notice";
import { Hero } from "./hero";
import { InsightsSection } from "./insights-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { VoicesSection } from "./voices-section";
import { WorkSection } from "./work-section";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <VoicesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CookieNotice />
    </>
  );
}
