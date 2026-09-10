import React from "react";
import type { Metadata } from "next";
import JssRegistryProvider from "./registry";
import Navbar from "../components/navbar/landing";
import Footer from "../components/footer/index";
import MainContent from "./main-content";
import JsonLd from "../components/JsonLd";
import "../index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://weblings.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Weblings - Simply Affordable Business Tools",
    template: "%s | Weblings",
  },
  description:
    "Weblings provides modern, all-in-one business software including Mail, Chat, Calendar, Streamline sprint management, and eOffice.",
  applicationName: "Weblings",
  authors: [{ name: "Weblings Team", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Weblings",
    "Business Tools",
    "Worksuite",
    "Enterprise Email",
    "Team Chat",
    "Shared Calendar",
    "Streamline Issue Tracking",
    "eOffice HR",
    "Affordable Workspace",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Weblings - Simply Affordable Business Tools",
    description:
      "Weblings provides modern, all-in-one business software including Mail, Chat, Calendar, Streamline sprint management, and eOffice.",
    url: siteUrl,
    siteName: "Weblings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Weblings Worksuite Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weblings - Simply Affordable Business Tools",
    description:
      "Weblings provides modern, all-in-one business software including Mail, Chat, Calendar, Streamline sprint management, and eOffice.",
    creator: "@weblings",
    site: "@weblings",
    images: ["/logo.svg"],
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
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Weblings",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Weblings provides modern, all-in-one business tools including Mail, Chat, Calendar, Streamline sprint management, and eOffice.",
  email: "enquire@weblings.com",
  sameAs: [
    "https://twitter.com/weblings",
    "https://linkedin.com/company/weblings",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "enquire@weblings.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Weblings",
  url: siteUrl,
  description: "Weblings - Simply Affordable Business Tools",
  publisher: {
    "@type": "Organization",
    name: "Weblings",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <JssRegistryProvider>
          <Navbar />
          <MainContent>{children}</MainContent>
          <Footer />
        </JssRegistryProvider>
      </body>
    </html>
  );
}

