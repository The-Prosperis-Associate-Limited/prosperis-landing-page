import { HomePage } from "@/components/landing/home-page";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://prosperis.example";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prosperis Group",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  description:
    "Prosperis Group is a multi-disciplinary organization shaping useful businesses, digital products, and mobility services.",
  email: "hello@prosperis.example",
  telephone: "+234-800-000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://www.facebook.com/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prosperis Group",
  url: siteUrl,
  description:
    "Ideas, products, and partnerships built to move people and businesses forward.",
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
