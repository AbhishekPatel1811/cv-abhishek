import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/ai/chat-widget";
import { Loader } from "@/components/loader";
import { personJsonLd, websiteJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhishek Patel - AI-Native Full-Stack Engineer",
    template: "%s",
  },
  description:
    "Abhishek Patel builds and ships AI products. AI-native full-stack engineer with live AI SaaS products and international client delivery.",
  keywords: [
    "Abhishek Patel",
    "AI engineer",
    "full-stack engineer",
    "Next.js",
    "RAG",
    "AI SaaS",
    "Mumbai",
  ],
  authors: [{ name: "Abhishek Patel" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abhishek Patel",
    title: "Abhishek Patel - AI-Native Full-Stack Engineer",
    description:
      "Builds and ships AI products. Live AI SaaS products and international client delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Patel - AI-Native Full-Stack Engineer",
    description: "Builds and ships AI products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Fontshare: distinctive editorial-tech faces (Clash Display, General Sans, Satoshi) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600,700&f[]=satoshi@400,500,700,900&display=swap"
        />
        {/* Instrument Serif: editorial accent face for kinetic headline words */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <MotionConfig reducedMotion="user">
          <Loader />
          <Cursor />
          <SmoothScroll>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <ChatWidget />
        </MotionConfig>
      </body>
    </html>
  );
}
