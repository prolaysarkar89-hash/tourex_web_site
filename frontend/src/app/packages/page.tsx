"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PackagesPage() {
  const packages = [
    {
      name: "Lava",
      region: "Kalimpong",
      subtitle: "Cloudy Pine Forest Escape",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      price: "1,400",
      rating: "4.9",
    },
    {
      name: "Rishop",
      region: "Kalimpong",
      subtitle: "Land Of Serenity",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
      price: "1,500",
      rating: "4.8",
    },
    {
      name: "Charkhole",
      region: "Kalimpong",
      subtitle: "Hidden Paradise",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      price: "1,300",
      rating: "4.7",
    },
    {
      name: "Yelbong Canyon",
      region: "Dooars",
      subtitle: "Adventure Beyond",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      price: "2,500",
      rating: "5.0",
    },
    {
      name: "Lepchajagat",
      region: "Darjeeling",
      subtitle: "Forest Above Clouds",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
      price: "1,600",
      rating: "4.9",
    },
    {
      name: "Lataguri",
      region: "Dooars",
      subtitle: "Wilderness Welcome",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
      price: "1,800",
      rating: "4.8",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-60"
            alt="North Bengal Mountains"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
            Curated Journeys
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Explore Destinations
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 opacity-90 font-medium">
            Sensory escapes designed for those who seek the silence of the hills.
          </p>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="section-padding px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="card-premium group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] mb-6">
                  <img
                    src={pkg.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={pkg.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-1 text-primary">
                    ⭐ {pkg.rating}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs uppercase tracking-widest font-bold text-sky-300 mb-1">{pkg.region}</p>
                    <h3 className="text-2xl font-bold leading-none">{pkg.name}</h3>
                  </div>
                </div>

                <div className="px-2">
                   <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {pkg.subtitle}
                  </h4>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Starting Price</p>
                      <h4 className="text-2xl font-bold mt-1 text-primary">
                        ₹{pkg.price}
                      </h4>
                    </div>

                    <Link 
                      href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      className="btn-primary py-2.5 px-6 text-sm"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
