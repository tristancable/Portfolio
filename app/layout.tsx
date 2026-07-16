import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";
import BackToTop from "@/components/ui/BackToTop";
import { Syne, IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import VisitorCounter from "@/components/ui/VisitorCounter";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tristan Cable | Software Engineer",
  description:
    "Full-Stack Software Engineer building scalable web applications with React and TypeScript.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable}`}>
      <body className="bg-ink text-bone antialiased font-sans">
        <PageTransition>
          {children}
          <BackToTop />
          <VisitorCounter className="fixed bottom-3 right-4 text-muted bg-surface border border-edge px-3 py-1 rounded-sm text-sm" />
        </PageTransition>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
