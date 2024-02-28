"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Providers>
            <main className="flex min-h-screen">
              <Sidebar
                hovered={sidebarHovered}
                setHovered={setSidebarHovered}
              />
              <div
                className={`flex-1 ${
                  sidebarHovered ? "w-[80%]" : "w-[90%]"
                } transition-width duration-400 `}
              >
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
