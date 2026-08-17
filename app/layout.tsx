import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "@/components/layout/GlobalLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-gallery-bg text-gallery-text min-h-screen">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

