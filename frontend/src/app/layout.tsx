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
    url: "https://www.tourextravel.com",
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
              "logo": "https://www.tourextravel.com/images/Logo.jpeg",
              "image": "https://www.tourextravel.com/og-image.jpg",
              "description": "Premium North Bengal and Dooars travel agency in Siliguri offering Darjeeling, Sikkim, Silk Route and jungle safari packages.",
              "telephone": "+91-8768683198",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sevoke Road",
                "addressLocality": "Siliguri",
                "addressRegion": "West Bengal",
                "postalCode": "734001",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.7271",
                "longitude": "88.3953"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://instagram.com/tourex",
                "https://facebook.com/tourex"
              ],
              "areaServed": [
                { "@type": "State", "name": "West Bengal" },
                { "@type": "State", "name": "Sikkim" },
                { "@type": "Country", "name": "Bhutan" }
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
