import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider ";
import { Toaster } from "@/components/ui/toaster"



const SenFont = Sen({ subsets: ["latin"], weight: ['400', '600', '700',], display: 'swap' });

export const metadata: Metadata = {
  title: "Shohidul Pramanik",
  description: "Shohidul Pramanik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SenFont.className} overflow-x-hidden `}>
        <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
          <div className="container">
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}



