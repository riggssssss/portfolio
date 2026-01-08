import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/utils/ScrollToTop";
import SmoothScroller from "@/components/utils/SmoothScroller";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"; window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-background text-foreground antialiased selection:bg-black selection:text-white`}
      >
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
