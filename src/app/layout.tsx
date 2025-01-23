"use client"

import {  Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import React from "react";
import { AppProvider } from "./context/AppContext";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <AppProvider>
        <body
          className={`${nunitoSans.className} antialiased`}
        >
          <Header/>
          <main>
            {children}
          </main>
        </body>
      </AppProvider>
    </html>
  );
}
