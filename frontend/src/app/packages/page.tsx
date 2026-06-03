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
    <div className="bg-white text-[#0f172a] min-h-screen font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="North Bengal Mountains"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <Image 
            src="/images/Logo.jpeg" 
            alt="Tourex Logo" 
            width={120} 
            height={120} 
            className="rounded-3xl shadow-xl mb-8 animate-fade-in"
          />
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-[#0f172a]">
            TOUREX
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-600 italic">
            Stress-Free North Bengal Escapes
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => document.getElementById('featured-packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Explore Packages
            </button>

            <Link href="https://wa.me/918768683198" target="_blank" className="border border-gray-200 bg-white/50 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white transition-all text-[#0f172a] font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm mb-3">
              About Tourex
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0f172a]">
              Cinematic Travel Experiences Across North Bengal
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              TOUREX is a North Bengal based travel brand focused on
              meaningful offbeat experiences, cinematic storytelling and
              stress-free mountain escapes.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
                <h3 className="text-3xl font-bold text-green-700">15+</h3>
                <p className="text-gray-600 mt-2">Offbeat Destinations</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
                <h3 className="text-3xl font-bold text-green-700">24/7</h3>
                <p className="text-gray-600 mt-2">Travel Support</p>
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
      <section id="featured-packages" className="px-6 pb-24 bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
              Featured Packages
            </p>

            <h2 className="text-5xl font-bold mt-4 text-[#0f172a]">
              Explore North Bengal With TOUREX
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white border border-gray-100 rounded-[28px] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    alt={pkg.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-3xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-100 mt-1">{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pkg.highlights.map((item) => (
                      <span
                        key={item}
                        className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full border border-green-100 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Package</p>
                      <h4 className="text-xl font-bold mt-1 text-[#0f172a]">
                        {pkg.price}
                      </h4>
                    </div>

                    <Link 
                      href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      className="bg-green-700 text-white px-5 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-md"
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
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
            Why Choose Tourex
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#0f172a]">
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
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 mx-auto mb-5 flex items-center justify-center text-green-700 text-2xl">
                  ✦
                </div>

                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center relative overflow-hidden bg-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Nature Background"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-green-200 text-sm font-bold">
            Let’s Travel Together
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mt-5 text-white">
            Escape The Routine.
            <br />
            Embrace Nature.
          </h2>

          <p className="text-green-50 text-lg mt-6 max-w-2xl mx-auto">
            Explore the hidden beauty of North Bengal with cinematic mountain
            experiences curated by TOUREX.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/packages" className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
              Book Your Escape
            </Link>

            <Link href="https://wa.me/918768683198" target="_blank" className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all font-bold">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 px-6 bg-gray-50">
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
              <h3 className="text-2xl font-black text-[#0f172a]">TOUREX</h3>
              <p className="text-gray-500 mt-1">
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
