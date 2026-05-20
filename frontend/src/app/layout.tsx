import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tourextravel.com"),

  title: {
    default: "Tourex - North Bengal & Dooars Tour Packages",
    template: "%s | Tourex",
  },

  description:
    "Explore Dooars, Darjeeling, Sikkim and North Bengal with Tourex travel agency. Affordable tour packages, luxury stays, jungle safari and customized tours.",

  keywords: [
    "North Bengal tour package",
    "Dooars tour package",
    "Darjeeling package",
    "Sikkim tour",
    "Silk Route tour",
    "Lataguri resort",
    "North Bengal travel agency",
    "Tour operator in Siliguri",
    "Dooars jungle safari",
    "Tourex"
  ],

  openGraph: {
    title: "Tourex Travel Agency",
    description:
      "Best North Bengal, Dooars & Darjeeling tour packages.",
    url: "https://www.tourextravel.com",
    siteName: "Tourex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tourex Travel",
    description:
      "Affordable and luxury North Bengal tour packages.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Tourex",
              "url": "https://www.tourextravel.com",
              "logo": "https://www.tourextravel.com/logo.png",
              "description": "North Bengal and Dooars travel agency offering Darjeeling, Sikkim, Silk Route and jungle safari packages.",
              "areaServed": [
                "North Bengal",
                "Dooars",
                "Darjeeling",
                "Sikkim"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Siliguri",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://instagram.com/tourex",
                "https://facebook.com/tourex"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
