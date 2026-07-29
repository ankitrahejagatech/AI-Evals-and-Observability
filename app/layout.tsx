import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  "https://ankitrahejagatech.github.io/braintrust-trace-2026/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TRACE 2026 — AI Observability & Testing",
  description:
    "Conference field notes from TRACE 2026 by Braintrust: evals, observability, trace-first debugging, and reliable AI agents.",
  keywords: [
    "TRACE 2026",
    "Braintrust",
    "AI observability",
    "AI evals",
    "agent testing",
  ],
  openGraph: {
    title: "TRACE 2026 — AI Observability & Testing",
    description:
      "A practical field guide to the hard part of AI: knowing whether it actually works.",
    url: siteUrl,
    siteName: "TRACE 2026 Conference Notes",
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1732,
        height: 909,
        alt: "TRACE 2026 — AI Observability & Testing conference notes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRACE 2026 — AI Observability & Testing",
    description:
      "Conference field notes on evals, observability, and reliable AI agents.",
    images: [`${siteUrl}og.png`],
  },
  icons: {
    icon: `${siteUrl}favicon.svg`,
    shortcut: `${siteUrl}favicon.svg`,
  },
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
