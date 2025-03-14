import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./(landing-page)/components/Children/ThemeProvider ";
import Header from "./(landing-page)/components/Header/Header";
import Footer from "./(landing-page)/components/footer/Footer";
import ScrollToTop from "./(landing-page)/components/ScrollToTop/ScrollToTop";


const SenFont = Sen({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Shohidul Pramanik",
  description: "Shohidul Pramanik",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SenFont.className} overflow-x-hidden overflow-y-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="mt-20 px-5">{children}</main> {/* Added margin to prevent content from hiding behind the header */}
          <div className="container">
            <Footer />
          </div>
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
