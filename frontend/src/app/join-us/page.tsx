"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

import Image from 'next/image';

export default function JoinUsPage() {
  const stakeholders = [
    {
      title: "Homestay Owners",
      desc: "Showcase your property to travelers looking for authentic North Bengal experiences.",
      icon: "🏡",
    },
    {
      title: "Resort Partners",
      desc: "Collaborate with TOUREX to increase bookings and premium visibility.",
      icon: "🌿",
    },
    {
      title: "Cab Drivers & Operators",
      desc: "Get connected with travelers and receive regular transport bookings.",
      icon: "🚖",
    },
    {
      title: "Local Tour Guides",
      desc: "Work with travelers, trekking groups and adventure experiences across North Bengal.",
      icon: "🥾",
    },
  ];

  const benefits = [
    "Professional Digital Presence",
    "More Customer Reach",
    "Social Media Promotion",
    "Booking Support",
    "Travel Tech Support",
    "Brand Collaborations",
    "Local Networking",
    "Growth Opportunities",
  ];

  return (
    <div className="bg-white text-[#0f172a] min-h-screen font-sans">
      <Navbar />
      
      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-[#f8fafc]">
        <img
          src="https://images.unsplash.com/photo-1581390212720-639535798993?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="North Bengal Tea Garden"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/90" />

        <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
          <Image 
            src="/images/Logo.jpeg" 
            alt="Tourex Logo" 
            width={100} 
            height={100} 
            className="rounded-3xl shadow-xl mb-8"
          />
          <p className="uppercase tracking-[5px] text-green-700 font-bold text-sm">
            TOUREX COMMUNITY NETWORK
          </p>

          <h1 className="text-6xl md:text-8xl font-black mt-5 leading-none text-[#0f172a]">
            JOIN US
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Building a collaborative travel ecosystem for
            North Bengal’s local tourism community.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link 
              href="https://wa.me/918768683198?text=Hi Tourex! I want to join as a partner."
              target="_blank"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Become A Partner
            </Link>

            <button 
              onClick={() => document.getElementById('about-platform')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-200 bg-white px-8 py-4 rounded-full hover:bg-gray-50 transition-all text-[#0f172a] font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-platform" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
              About The Platform
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight text-[#0f172a]">
              More Than A Travel Company
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              TOUREX is building a technology-supported collaboration platform
              for local travel stakeholders across North Bengal.
            </p>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              We believe local tourism businesses deserve better visibility,
              better digital support and stronger collaboration opportunities.
            </p>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Our mission is to connect travelers directly with trusted local
              experiences while empowering the people behind North Bengal tourism.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
              className="rounded-[32px] shadow-2xl"
              alt="Darjeeling Hills and Tea Garden"
            />
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="px-6 pb-24 bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
              Who Can Join
            </p>

            <h2 className="text-5xl font-bold mt-4 text-[#0f172a]">
              Local Stakeholders We Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-[28px] p-8 hover:-translate-y-2 transition-all shadow-lg"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold text-[#0f172a]">{item.title}</h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
              Why Join TOUREX
            </p>

            <h2 className="text-5xl font-bold mt-4 text-[#0f172a]">
              What We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 text-2xl mb-6">
                  ✦
                </div>

                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/guide.jpeg"
              className="rounded-[32px] shadow-2xl w-full h-[600px] object-cover"
              alt="Tourex Local Guide Training"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-green-700 font-bold text-sm">
              Training Program
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight text-[#0f172a]">
              Become A Certified Local Travel Guide
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Anyone passionate about tourism and local culture can join our
              training program to become a professional local travel guide.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Professional Guide Training",
                "Practical Field Experience",
                "Hospitality & Communication Skills",
                "Safety & Trek Management",
                "Certificate After Completion",
                "Guidance From Certified Instructors",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-green-700 text-white">
        <img
          src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1400&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          alt="North Bengal River"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-green-200 font-bold text-sm">
            Build Together
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight">
            Let’s Grow North Bengal Tourism Together
          </h2>

          <p className="mt-8 text-lg text-green-50 leading-relaxed max-w-2xl mx-auto">
            Whether you own a homestay, drive a cab, guide treks or simply
            dream of building a career in tourism —
            TOUREX welcomes you.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <Link 
              href="https://wa.me/918768683198?text=Hi Tourex! I'm interested in the Join Us network."
              target="_blank"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
            >
              Join The Network
            </Link>

            <Link 
              href="https://wa.me/918768683198"
              target="_blank"
              className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all font-bold"
            >
              Contact TOUREX
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
