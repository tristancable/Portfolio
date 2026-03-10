import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";
import BackToTop from "@/components/ui/BackToTop";
import AnimatedBackgroundWrapper from "@/components/ui/AnimatedBackgroundWrapper";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import VisitorCounter from "@/components/ui/VisitorCounter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tristan Cable | Software Engineer",
  description:
    "Full-Stack Software Engineer building scalable web applications with React and TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-white antialiased">
        <PageTransition>
          <AnimatedBackgroundWrapper />
          {children}
          <BackToTop />
          <VisitorCounter className="fixed bottom-3 right-4 text-gray-400 bg-zinc-900/50 px-3 py-1 rounded-lg text-sm" />
        </PageTransition>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}