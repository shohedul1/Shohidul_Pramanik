"use client";

import * as React from "react";
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
  const [bgColor, setBgColor] = React.useState(colors[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <NextThemesProvider {...props}>
      <div className={`relative transition-all duration-500 ${bgColor} `}>
        {children}
      </div>
    </NextThemesProvider>
  );
}
