import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#635bff",
};

export const metadata: Metadata = {
  title: "Xtripe Syndicate",
  description: "An angel syndicate for Stripe alumni.",
  
  // OpenGraph metadata
  openGraph: {
    title: "Xtripe Syndicate",
    description: "An angel syndicate composed of former Stripe employees helping early-stage founders build exceptional companies.",
    url: "https://xtripe.vc",
    siteName: "Xtripe Syndicate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xtripe Syndicate - Angel investing by Stripe alumni",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Xtripe Syndicate",
    description: "An angel syndicate for Stripe alumni.",
    images: ["/twitter-card.jpg"],
    creator: "@XtripeVC",
  },

  // Icons
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  // Additional metadata
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 