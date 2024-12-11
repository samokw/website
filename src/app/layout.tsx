import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

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
      <body className=" antialiased max-w-xl mx-4 mt-4 lg:mx-auto">
        <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div className="flex justify-end">
          <Navbar/>
          </div>
        {children}
        </div>
      </body>
    </html>
  );
}
