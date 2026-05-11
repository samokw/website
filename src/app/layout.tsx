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
          <main className="mx-auto max-w-[560px] px-8 py-10 sm:px-6 md:py-12">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
