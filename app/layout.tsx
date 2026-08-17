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
  metadataBase: new URL("https://amrithajalajadevi.com"),
  title: {
    default: "Amritha Jalaja Devi | Visual Artist & Sculptor",
    template: "%s | Amritha Jalaja Devi",
  },
  description:
    "Official portfolio of Amritha Jalaja Devi, contemporary visual artist and sculptor featuring paintings, UK commissions, exhibitions, press features, and selected works.",
  keywords: [
    "Amritha Jalaja Devi",
    "Visual Artist",
    "Painter",
    "Sculptor",
    "UK Commissions",
    "Art Portfolio",
    "Contemporary Art",
    "Exhibitions",
    "Fine Art",
  ],
  authors: [{ name: "Amritha Jalaja Devi", url: "https://amrithajalajadevi.com" }],
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
    url: "https://amrithajalajadevi.com",
    siteName: "Amritha Jalaja Devi Visual Art",
    title: "Amritha Jalaja Devi | Visual Artist & Sculptor",
    description:
      "Official portfolio of Amritha Jalaja Devi featuring contemporary paintings, sculptures, UK commissions, and gallery exhibitions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amritha Jalaja Devi Selected Artworks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritha Jalaja Devi | Visual Artist & Sculptor",
    description:
      "Official portfolio of Amritha Jalaja Devi featuring contemporary paintings, sculptures, UK commissions, and gallery exhibitions.",
    images: ["/og-image.jpg"],
    creator: "@amrithajalaja",
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
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-gallery-bg text-gallery-text min-h-screen">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

