import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { RevealOnScroll } from "@/components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://querra-demo.vercel.app"),
  title: {
    default: "Querra: AI support answers your customers can trust",
    template: "%s · Querra",
  },
  description:
    "Querra turns your docs into an AI support assistant that cites its sources and hands off to a human when it isn't sure. A portfolio demo built with Next.js and Tailwind.",
  openGraph: {
    title: "Querra: AI support answers your customers can trust",
    description: "Answers with sources, human handoff and deflection analytics. Portfolio demo.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
