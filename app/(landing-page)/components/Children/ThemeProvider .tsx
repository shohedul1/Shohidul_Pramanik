// ThemeProvider.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

const colors = [
  "bg-red-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-indigo-50",
];

export function ThemeProvider({ children, ...props }: ProviderProps) {
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <NextThemesProvider {...props}>
      <div className={`min-h-screen ${bgColor} transition-colors duration-1000`}>
        {children}
      </div>
    </NextThemesProvider>
  );
}