import type { Metadata, Viewport } from "next";
import { AppProvider } from "@/providers/AppProvider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://prosperis.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prosperis Group | Built for the roads ahead",
    template: "%s | Prosperis Group",
  },
  description:
    "Prosperis Group builds useful businesses, digital products, and mobility services for organizations ready to move forward.",
  keywords: [
    "Prosperis Group",
    "business strategy",
    "digital products",
    "mobility services",
    "Haya Drivers",
    "Lagos",
    "Nigeria",
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
    title: "Prosperis Group | Built for the roads ahead",
    description:
      "Ideas, products, and partnerships built to move people and businesses forward.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prosperis Group - Built for the roads ahead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperis Group | Built for the roads ahead",
    description:
      "Ideas, products, and partnerships built to move people and businesses forward.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
