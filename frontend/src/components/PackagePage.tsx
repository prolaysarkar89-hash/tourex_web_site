import React from 'react';
import Link from 'next/link';
import FAQ from './FAQ';
import CTA from './CTA';

interface PackagePageProps {
  title: string;
  description: string;
  places: string[];
  itinerary: { day: string; description: string }[];
  price: string;
}

const PackagePage: React.FC<PackagePageProps> = ({ title, description, places, itinerary, price }) => {
  return (
    <main className="pt-32 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-black mb-8 text-[#0f172a] tracking-tight">
          {title}
        </h1>
        
        <p className="text-xl text-[#4b5563] mb-12 leading-relaxed">
          {description}
        </p>

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
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#15803d]">Tour Itinerary</h2>
          <div className="space-y-8 border-l-2 border-gray-100 pl-8 ml-4">
            {itinerary.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[41px] top-0 w-4 h-4 bg-[#15803d] rounded-full border-4 border-white" />
                <h3 className="font-bold text-[#0f172a] mb-2">{item.day}</h3>
                <p className="text-[#4b5563]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[#0f172a]">Package Pricing</h2>
          <p className="text-4xl font-black text-[#15803d] mb-4">{price}</p>
          <p className="text-[#4b5563]">Customized based on group size and luxury preferences. Includes accommodation, transport, and expert local guides.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#15803d]">Why Choose Tourex</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#0f172a] mb-2">Local Expertise</h4>
              <p className="text-sm text-[#4b5563]">We are born and raised in North Bengal. We know the shortcuts, the secret views, and the best local tea.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0f172a] mb-2">Cinematic Experiences</h4>
              <p className="text-sm text-[#4b5563]">We don't just take you to spots; we create atmospheres. Real, raw, and deeply emotional.</p>
            </div>
          </div>
        </section>
      </div>

      <FAQ />
      <CTA />
    </main>
  );
};

export default PackagePage;
