import type { Metadata, Viewport } from "next";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const siteUrl = configuredSiteUrl ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prosperis Group | Company overview",
    template: "%s | Prosperis Group",
  },
  description:
    "An introduction to Prosperis Group, its current service areas, and its portfolio.",
  keywords: [
    "Prosperis Group",
    "company overview",
    "business services",
    "portfolio",
  ],
  authors: [{ name: "Prosperis Group" }],
  creator: "Prosperis Group",
  publisher: "Prosperis Group",
  alternates: { canonical: "/" },
  category: "Business",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Prosperis Group",
    title: "Prosperis Group | Company overview",
    description:
      "An introduction to Prosperis Group, its current service areas, and its portfolio.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prosperis Group company overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperis Group | Company overview",
    description:
      "An introduction to Prosperis Group, its current service areas, and its portfolio.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: Boolean(configuredSiteUrl),
    follow: Boolean(configuredSiteUrl),
    googleBot: {
      index: Boolean(configuredSiteUrl),
      follow: Boolean(configuredSiteUrl),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#073fa7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
