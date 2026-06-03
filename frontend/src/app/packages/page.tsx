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
    <div className="bg-[#0B1210] text-white min-h-screen font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="North Bengal Mountains"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <Image 
            src="/images/Logo.jpeg" 
            alt="Tourex Logo" 
            width={120} 
            height={120} 
            className="rounded-3xl shadow-2xl mb-8 animate-fade-in"
          />
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
            TOUREX
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-200 italic">
            Stress-Free North Bengal Escapes
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => document.getElementById('featured-packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Explore Packages
            </button>

            <Link href="https://wa.me/918768683198" target="_blank" className="border border-white/30 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm mb-3">
              About Tourex
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Cinematic Travel Experiences Across North Bengal
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              TOUREX is a North Bengal based travel brand focused on
              meaningful offbeat experiences, cinematic storytelling and
              stress-free mountain escapes.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-[#D4AF37]">15+</h3>
                <p className="text-gray-300 mt-2">Offbeat Destinations</p>
              </div>

              <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-[#D4AF37]">24/7</h3>
                <p className="text-gray-300 mt-2">Travel Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[32px] shadow-2xl"
              alt="Mountain View"
            />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="featured-packages" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm">
              Featured Packages
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Explore North Bengal With TOUREX
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white/5 border border-white/10 rounded-[28px] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    alt={pkg.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-3xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-200 mt-1">{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pkg.highlights.map((item) => (
                      <span
                        key={item}
                        className="bg-[#D4AF37]/10 text-[#D4AF37] text-sm px-3 py-1 rounded-full border border-[#D4AF37]/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-gray-400 text-sm">Package</p>
                      <h4 className="text-xl font-semibold mt-1">
                        {pkg.price}
                      </h4>
                    </div>

                    <Link 
                      href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      className="bg-[#D4AF37] text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TOUREX */}
      <section className="bg-[#101916] py-24 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm">
            Why Choose Tourex
          </p>

          <h2 className="text-5xl font-bold mt-4">
            More Than Just A Travel Company
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-14">
            {[
              "Local Trusted Guides",
              "Offbeat Hidden Destinations",
              "Comfortable Stays",
              "Stress-Free Travel Experience",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 rounded-3xl p-8 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 mx-auto mb-5 flex items-center justify-center text-[#D4AF37] text-2xl">
                  ✦
                </div>

                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Nature Background"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm">
            Let’s Travel Together
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mt-5">
            Escape The Routine.
            <br />
            Embrace Nature.
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Explore the hidden beauty of North Bengal with cinematic mountain
            experiences curated by TOUREX.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/packages" className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl">
              Book Your Escape
            </Link>

            <Link href="https://wa.me/918768683198" target="_blank" className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <Image 
              src="/images/Logo.jpeg" 
              alt="Tourex Logo" 
              width={50} 
              height={50} 
              className="rounded-xl object-contain"
            />
            <div>
              <h3 className="text-2xl font-black">TOUREX</h3>
              <p className="text-gray-400 mt-1">
                Stress-Free North Bengal Escapes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
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
