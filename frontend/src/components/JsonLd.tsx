import React from 'react';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Tourex",
    "url": "https://tourex-web-frontend.vercel.app",
    "logo": "https://tourex-web-frontend.vercel.app/images/Logo.jpeg",
    "image": "https://tourex-web-frontend.vercel.app/og-image.jpg",
    "description": "Tourex specializes in curated nature retreats that help travelers transition from urban office chaos to environmental tranquility. We offer premium, stress-free escapes into the heart of the mountains and forests.",
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
      "https://instagram.com/tou.rex",
      "https://facebook.com/tourex"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "North Bengal"
      },
      {
        "@type": "State",
        "name": "Sikkim"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
