"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function PackagesPage() {
  const packages = [
    {
      name: "Lava",
      subtitle: "Cloudy Pine Forest Escape",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Pine Forest", "Monastery", "Foggy Weather", "Nature Stay"],
      price: "Starting From ₹1400",
    },
    {
      name: "Rishop",
      subtitle: "Land Of Serenity",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Kanchenjunga Views", "Sunrise", "Peaceful Stay", "Mountain Trails"],
      price: "Starting From ₹1500",
    },
    {
      name: "Charkhole",
      subtitle: "Hidden Paradise Of Kalimpong",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Bonfire", "Pine Forest", "Homestay", "Photography"],
      price: "Starting From ₹1300",
    },
    {
      name: "Yelbong River Canyon",
      subtitle: "Adventure Beyond The Mountains",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      highlights: ["River Canyon", "Adventure Trek", "Hanging Bridge", "Water Streams"],
      price: "Adventure Packages Available",
    },
    {
      name: "Lepchajagat",
      subtitle: "Forest Above The Clouds",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Foggy Forest", "Kanchenjunga View", "Silent Nature", "Cozy Stay"],
      price: "Starting From ₹1600",
    },
    {
      name: "Lataguri",
      subtitle: "Where Wilderness Welcomes You",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Elephant Safari", "Wildlife", "Forest Trails", "Nature Escape"],
      price: "Custom Packages Available",
    },
  ];

  return (
    <div className="bg-white text-[#020617] min-h-screen font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[var(--foreground)] perspective-2000">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2] brightness-75"
            alt="North Bengal Mountains"
          />
        </div>
        
        {/* Advanced Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--foreground)]/80 via-transparent to-[var(--foreground)]/90 z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center preserve-3d">
          <span className="text-primary font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 animate-fade-rise drop-shadow-2xl hero-3d-layer">
            Curated Journeys
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[1.1] text-white animate-fade-rise hero-3d-layer drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            PACKAGES
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-200 italic font-display max-w-2xl animate-fade-rise drop-shadow-lg opacity-90 hero-3d-layer">
            Sensory escapes designed for those who seek the silence of the hills.
          </p>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section id="featured-packages" className="px-8 md:px-16 pb-40 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="preserve-3d card-3d-hover cursor-pointer bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                  <img
                    src={pkg.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={pkg.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white translate-z-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-green-300 mb-2">{pkg.highlights[0]}</p>
                    <h3 className="text-3xl font-display font-black leading-none">{pkg.name}</h3>
                  </div>
                </div>

                <div className="px-4 translate-z-10">
                   <h4 className="text-xl font-display font-bold text-[#1A1A1A] mb-3">
                    {pkg.subtitle}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.highlights.slice(1).map((item) => (
                      <span
                        key={item}
                        className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">Exclusive Access</p>
                      <h4 className="text-2xl font-display font-black mt-1 text-green-800">
                        {pkg.price}
                      </h4>
                    </div>

                    <Link 
                      href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      className="rounded-full bg-green-50 text-green-700 px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-green-700 hover:text-white transition-all shadow-sm"
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

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-24 px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <Image 
              src="/images/Logo.jpeg" 
              alt="Tourex Logo" 
              width={60} 
              height={60} 
              className="rounded-2xl object-contain shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-display font-black text-[#020617] tracking-tighter">TOUREX</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mt-1">
                Stress-Free North Bengal Escapes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium">
            <span>📞 8116413984</span>
            <span>📞 8768683198</span>
            <span>📸 @tou.rex</span>
            <span>📧 tourex.officials@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
