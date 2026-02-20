import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EUDEN | Designing for a Shared Future",
  description: "EUDEN is a research-driven architecture firm based in Milan and Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#F4F4F4] text-[#1A1A1A]`}
      >
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
