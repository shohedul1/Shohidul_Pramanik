// import type { Metadata } from "next";
// import { Sen } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/footer/Footer";
// import { ThemeProvider } from "@/components/Children/ThemeProvider ";
// import { Toaster } from "@/components/ui/toaster"



// const SenFont = Sen({ subsets: ["latin"], weight: ['400', '600', '700',], display: 'swap' });

// export const metadata: Metadata = {
//   title: "Shohidul Pramanik",
//   description: "Shohidul Pramanik",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${SenFont.className} overflow-x-hidden `}>
//         <ThemeProvider attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange>
//           <Header />
//           {children}
//           <div className="container">
//             <Footer />
//           </div>
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/Children/ThemeProvider ";

const SenFont = Sen({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Shohidul Pramanik",
  description: "Shohidul Pramanik",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SenFont.className} overflow-x-hidden overflow-y-auto`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="mt-20">{children}</main> {/* Added margin to prevent content from hiding behind the header */}
          <div className="container">
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
