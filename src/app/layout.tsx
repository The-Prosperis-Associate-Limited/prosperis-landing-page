import type { Metadata, Viewport } from "next";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const siteUrl = configuredSiteUrl ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Prosperis Associates Limited | Technology, Talent & Learning",
    template: "%s | The Prosperis Associates Limited",
  },
  description:
    "Prosperis helps businesses solve challenges through technology, talent and learning, from digital solutions to recruitment and workforce development.",
  keywords: [
    "The Prosperis Associates Limited",
    "technology solutions Nigeria",
    "recruitment solutions",
    "corporate training",
    "software development Lagos",
  ],
  authors: [{ name: "The Prosperis Associates Limited" }],
  creator: "The Prosperis Associates Limited",
  publisher: "The Prosperis Associates Limited",
  alternates: { canonical: "/" },
  category: "Business",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "The Prosperis Associates Limited",
    title: "The Right People. The Right Skills. The Right Solutions.",
    description:
      "Technology, talent and learning solutions that help businesses perform and grow.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Prosperis Associates Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Right People. The Right Skills. The Right Solutions.",
    description:
      "Technology, talent and learning solutions that help businesses perform and grow.",
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
