"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Providers from "./providers";

const Main = ({ children }) => {
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <NextUIProvider>
      <Providers>
        <main className="flex min-h-screen">
          <Sidebar hovered={sidebarHovered} setHovered={setSidebarHovered} />
          <div
            className={`flex-1 ${
              sidebarHovered ? "tablet:w-[80%]" : "tablet:w-[90%]"
            } transition-width duration-400 overflow-hidden`}
          >
            <Navbar />
            <div className="tablet:p-8 p-4">{children}</div>
          </div>
        </main>
      </Providers>
    </NextUIProvider>
  );
};

export default Main;
