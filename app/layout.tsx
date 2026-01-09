import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/utils/ScrollToTop";
import SmoothScroller from "@/components/utils/SmoothScroller";
import Cursor from "@/components/ui/Cursor";
import Noise from "@/components/ui/Noise";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Minimalist Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"; window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-background text-foreground antialiased selection:bg-black selection:text-white cursor-none`}
      >
        <Noise />
        <Cursor />
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
