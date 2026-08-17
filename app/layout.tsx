import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "@/components/layout/GlobalLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amritha Jalaja Devi | Visual Artist & Sculptor",
  description:
    "Official portfolio of Amritha Jalaja Devi, contemporary visual artist and sculptor featuring paintings, commissions, exhibitions, press features, and selected works.",
  keywords: [
    "Amritha Jalaja Devi",
    "Visual Artist",
    "Painter",
    "Sculptor",
    "Art Portfolio",
    "Contemporary Art",
    "Exhibitions",
  ],
  authors: [{ name: "Amritha Jalaja Devi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FAF9F6] text-zinc-900 min-h-screen">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
