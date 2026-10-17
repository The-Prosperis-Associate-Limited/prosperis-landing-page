import { HomePage } from "@/components/landing/home-page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prosperis Group",
  description:
    "Prosperis Group company overview, service areas, and portfolio.",
  ...(siteUrl ? { url: siteUrl } : {}),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prosperis Group",
  description:
    "An introduction to Prosperis Group, its current service areas, and its portfolio.",
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
