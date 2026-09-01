import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "@/components/layout/GlobalLayout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amrithajalajadevi.art";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amritha Jalaja Devi | Contemporary Artist",
    template: "%s | Amritha Jalaja Devi",
  },
  description:
    "Official portfolio of UK visual artist Amritha Jalaja Devi. Contemporary figurative paintings, public art murals, UK commissions, printmaking, and studio practice exploring line, texture, and quiet human moments.",
  keywords: [
    "Amritha Jalaja Devi",
    "Contemporary Artist",
    "Visual Artist",
    "Figurative Painter",
    "Public Art Murals",
    "UK Fine Art Commissions",
    "Printmaking Etching Aquatint",
    "British Council Creative Connections",
    "De Montfort University Fine Art",
    "Raja Ravi Varma College of Fine Arts",
  ],
  authors: [{ name: "Amritha Jalaja Devi", url: siteUrl }],
  creator: "Amritha Jalaja Devi",
  publisher: "Amritha Jalaja Devi",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Amritha Jalaja Devi",
    title: "Amritha Jalaja Devi | Contemporary Artist",
    description:
      "Official portfolio of Amritha Jalaja Devi featuring contemporary figurative paintings, public murals, UK commissions, printmaking, and gallery exhibitions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amritha Jalaja Devi Contemporary Art Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritha Jalaja Devi | Contemporary Artist",
    description:
      "Official portfolio of Amritha Jalaja Devi featuring contemporary figurative paintings, public murals, UK commissions, printmaking, and gallery exhibitions.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-[#F7F4F0] text-[#4A2E35] min-h-screen">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
