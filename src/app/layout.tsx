import type { Metadata } from "next";
import { Fraunces, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/content/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased text-[var(--foreground)] bg-[var(--background)]">
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto max-w-6xl px-6 py-10 md:px-12 md:py-20">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
