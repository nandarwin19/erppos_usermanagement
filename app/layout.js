"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DarkLight from "./provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sidebarHovered, setSidebarHovered] = useState(false);
  // const [openSidebar, setOpenSidebar] = useState(false);

  // const toggleSidebar = () => {
  //   setOpenSidebar(true);
  // };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextUIProvider>
          <Providers>
            {/* <DarkLight> */}
            <main className="flex min-h-screen">
              <Sidebar
                // openSidebar={openSidebar}
                hovered={sidebarHovered}
                setHovered={setSidebarHovered}
              />
              <div
                className={`flex-1 ${
                  sidebarHovered ? "tablet:w-[80%]" : "tablet:w-[90%]"
                } transition-width duration-400 overflow-hidden`}
              >
                <Navbar />
                <div className="tablet:p-8 p-4">{children}</div>
              </div>
            </main>
            {/* </DarkLight> */}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
