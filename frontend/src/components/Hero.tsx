"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

const visuals = [
  {
    url: "/images/Hero Image.jpeg",
    title: "Premium North Bengal Landscape - Tourex Travel"
  }
];

const Hero = () => {
  const mountainRef = useRef(null);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(mountainRef.current, {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[#0f172a]">
      {/* Cinematic Ken Burns Background */}
      <div 
        ref={mountainRef}
        className="absolute inset-0 z-0 scale-125 animate-ken-burns"
      >
        <Image
          src={visuals[0].url}
          alt={visuals[0].title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
          quality={95}
        />
      </div>
      
      {/* Advanced Gradient Overlays for Cinematic Depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0f172a]/80 via-transparent to-[#0f172a]/90" />
      <div className="absolute inset-0 z-10 bg-black/20" />

      <div className="relative z-20 px-6 max-w-7xl mx-auto pt-40 pb-12 flex flex-col items-center">
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-[-2px] leading-[0.95] text-white mb-4 drop-shadow-2xl">
          North Bengal & <br />
          <span className="text-[#22c55e]">Dooars Tour Packages.</span>
        </h1>
        <p className="animate-fade-rise text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-200 mb-8 drop-shadow-lg">
          The Premier travel agency in Siliguri for Darjeeling & Sikkim Escapes.
        </p>

        <div className="animate-fade-rise-delay bg-black/30 backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-3xl mx-auto mb-8 shadow-2xl">
          <p className="text-lg text-white font-medium leading-relaxed">
            Tourex provides <strong>all-inclusive North Bengal tour packages</strong> starting from Siliguri. Our 2026 itineraries cover Darjeeling, Kalimpong, and the Dooars forests with private transport, local guides, and 100% customized stays. 
          </p>
        </div>

        <SearchBar />

        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 mb-16">
          <Link href="/packages" className="btn-premium bg-[#15803d] hover:bg-[#16a34a] text-white px-10 py-4 rounded-full font-black transition-all hover:scale-105 shadow-xl">
            Explore Packages
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black transition-all hover:bg-white/20">
            WhatsApp Us
          </Link>
        </div>
      </div>

      {/* Cinematic Dust/Mist Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
