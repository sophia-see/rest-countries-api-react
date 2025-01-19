import type { Metadata } from "next";
import {  Nunito_Sans } from "next/font/google";
import "./globals.css";
import { MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "./components/Header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REST Countries",
  description: "View / search countries data",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased text-light-foreground`}
      >
        <Header />
        <main className="bg-light-background min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
