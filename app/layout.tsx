import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Talent Vector | Stop Guessing. Start Knowing Your Talent.",
    template: "%s | Talent Vector",
  },
  description:
    "Talent Vector provides a real-time, validated talent inventory—skills intelligence for hiring, development, and retention. Request a demo today.",
  keywords: [
    "talent management",
    "skills inventory",
    "workforce intelligence",
    "AI interviewer",
    "HR analytics",
    "talent transformation",
  ],
  authors: [{ name: "Talent Vector" }],
  creator: "Talent Vector",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Talent Vector",
    title: "Talent Vector | Stop Guessing. Start Knowing Your Talent.",
    description:
      "Real-time, validated skills inventory for data-driven hiring, development, and retention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talent Vector | Stop Guessing. Start Knowing Your Talent.",
    description:
      "Real-time, validated skills inventory for data-driven hiring, development, and retention.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talent Vector",
  url: siteUrl,
  description:
    "Talent Vector provides a real-time, validated inventory of workforce skills for hiring, development, and retention.",
  sameAs: [],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Talent Vector",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Request a demo",
  },
  description:
    "Workforce intelligence platform with validated skills inventory, AI interviewer, and HR stack integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
