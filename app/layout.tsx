import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/ai/chat-widget";
import { Loader } from "@/components/loader";
import { ThemeProvider } from "@/components/theme-provider";
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
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <MotionConfig reducedMotion="user">
            <Loader />
            <SmoothScroll>
              <Nav />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
            <ChatWidget />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
