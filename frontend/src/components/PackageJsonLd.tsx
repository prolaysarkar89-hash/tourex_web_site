import React from 'react';

interface PackageJsonLdProps {
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  currency?: string;
  ratingValue?: number;
  reviewCount?: number;
  availability?: string;
  itinerary?: string[];
  duration?: string;
}

const PackageJsonLd = ({
  name = "Dooars & Hills",
  description = "A serene 4-night 5-day itinerary covering Charkhole, Rishop, and Lataguri. Experience the tranquility of North Bengal's hills and forests.",
  image = "https://tourex-web-frontend.vercel.app/images/Hero%20Image.jpeg",
  price = 8500,
  currency = "INR",
  ratingValue = 4.9,
  reviewCount = 124,
  availability = "https://schema.org/InStock",
  itinerary = ["Charkhole", "Rishop", "Lataguri"],
  duration = "P5D" // ISO 8601 duration for 5 days
}: PackageJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "Tourex"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://tourex-web-frontend.vercel.app/packages",
      "priceCurrency": currency,
      "price": price.toString(),
      "availability": availability,
      "itemCondition": "https://schema.org/NewCondition"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": duration === "P5D" ? "5 Days / 4 Nights" : duration
      },
      {
        "@type": "PropertyValue",
        "name": "Destinations",
        "value": itinerary.join(", ")
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

export default PackageJsonLd;
