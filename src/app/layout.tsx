import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import { Analytics } from "@vercel/analytics/react"

const lora = Lora ({
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: "sam's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.className} antialiased`}>
      <body className="antialiased text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950">
        <div className="flex flex-col md:flex-row min-h-screen">
          <Navbar/>
          <main className="flex-auto min-w-0 py-8 md:py-20 px-6 md:px-12">
            <div className="max-w-3xl">
              {children}
              <Analytics/>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
