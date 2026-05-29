import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from './FAQ';
import CTA from './CTA';

interface PackagePageProps {
  title: string;
  description: string;
  places: string[];
  itinerary: { day: string; description: string }[];
  price: string;
  image?: string;
}

const PackagePage: React.FC<PackagePageProps> = ({ title, description, places, itinerary, price, image }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": description,
    "touristType": "Family, Solo, Couples",
    "itinerary": itinerary.map((item, index) => ({
      "@type": "HowToStep",
      "name": item.day,
      "text": item.description,
      "position": index + 1
    })),
    "offers": {
      "@type": "Offer",
      "price": price.replace(/[^0-9]/g, ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Tourex",
      "url": "https://www.tourextravel.com"
    }
  };

  return (
    <article className="pt-32 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-8 text-[#0f172a] tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl text-[#4b5563] leading-relaxed mb-8">
            {description}
          </p>

          {image && (
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image 
                src={image} 
                alt={`${title} - Tourex Best Experience`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}
        </header>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#15803d]">Best Places Covered</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {places.map((place, index) => (
              <li key={index} className="flex items-center gap-3 text-[#4b5563]">
                <span className="w-2 h-2 bg-[#15803d] rounded-full" />
                {place}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#15803d]">Detailed Tour Itinerary</h2>
          <div className="space-y-8 border-l-2 border-gray-100 pl-8 ml-4">
            {itinerary.map((item, index) => (
              <section key={index} className="relative">
                <span className="absolute -left-[41px] top-0 w-4 h-4 bg-[#15803d] rounded-full border-4 border-white" />
                <h3 className="font-bold text-[#0f172a] mb-2 text-xl">{item.day}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[#0f172a]">Package Pricing</h2>
          <p className="text-4xl font-black text-[#15803d] mb-4">{price}</p>
          <p className="text-[#4b5563]">Customized based on group size and luxury preferences. Includes premium accommodation, private transport, and expert local guides from Siliguri.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#15803d]">Why Choose Tourex for {title.replace('Tour Package', '')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#0f172a] mb-2 text-lg">Local Expertise</h4>
              <p className="text-[#4b5563]">We are born and raised in North Bengal. We know the shortcuts, the secret views, and the best local tea spots that typical agencies miss.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#0f172a] mb-2 text-lg">Curated Experiences</h4>
              <p className="text-[#4b5563]">We don't just sell tickets; we build itineraries that breathe. Real, raw, and deeply personal travel experiences in the Himalayas.</p>
            </div>
          </div>
        </section>
      </div>

      <FAQ />
      <CTA />
    </article>
  );
};

export default PackagePage;
