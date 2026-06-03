import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tourex-web-frontend.vercel.app"),

  title: {
    default: "Tourex - Best North Bengal & Dooars Tour Packages from Siliguri",
    template: "%s | Tourex Travel Agency",
  },

  description:
    "Book affordable Dooars, Darjeeling, Sikkim and North Bengal tour packages with Tourex. Expert travel agency in Siliguri for jungle safari, luxury stays and customized tours.",

  keywords: [
    "North Bengal tour package",
    "Dooars tour package",
    "Darjeeling package",
    "Sikkim tour",
    "Silk Route tour",
    "Lataguri resort booking",
    "North Bengal travel agency",
    "Best tour operator in Siliguri",
    "Dooars jungle safari booking",
    "Tourex Siliguri"
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tourex - Premium North Bengal & Dooars Tour Packages",
    description:
      "Experience the raw beauty of the Himalayas with the best tour operator in Siliguri.",
    url: "https://tourex-web-frontend.vercel.app",
    siteName: "Tourex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tourex Travel Agency - North Bengal Tours"
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tourex - North Bengal Tour Packages",
    description:
      "Affordable and luxury North Bengal tour packages. Local expertise, real experiences.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "KD2ZCorf2ZeTcAapYJi-2uN8g6ThpntXLMIxY0FmarE",
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
        <JsonLd />
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
