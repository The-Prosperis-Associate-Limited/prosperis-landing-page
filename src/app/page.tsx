import { HomePage } from "@/components/landing/home-page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Prosperis Associates Limited",
  alternateName: "TPAL",
  description:
    "The Prosperis Associates Limited partners with organisations to solve business challenges through technology, talent and learning.",
  telephone: ["+2348065415059", "+2348033199000"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Jibowu",
    addressLocality: "Yaba",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  ...(siteUrl ? { url: siteUrl } : {}),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Prosperis Associates Limited",
  description:
    "Technology, talent and learning solutions that help businesses perform and grow.",
  ...(siteUrl ? { url: siteUrl } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <HomePage />
    </>
  );
}
