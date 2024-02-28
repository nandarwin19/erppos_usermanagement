"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Providers>
            <main className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 w-full">
                <Navbar />
                <div className="p-6">{children}</div>
              </div>
            </main>
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
