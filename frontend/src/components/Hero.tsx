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
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[#020617]">
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
          className="object-cover opacity-50"
          sizes="100vw"
          quality={100}
        />
      </div>
      
      {/* Advanced Gradient Overlays for Cinematic Depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617]/95" />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 px-6 max-w-7xl mx-auto pt-20 flex flex-col items-center">
        <span className="animate-fade-rise text-green-500 font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 drop-shadow-md">
          Escape the City Noise
        </span>
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-[-3px] leading-[0.9] text-white mb-6 drop-shadow-2xl">
          North Bengal & <br />
          <span className="text-[#22c55e]">Dooars Escapes.</span>
        </h1>
        <p className="animate-fade-rise-delay text-xl sm:text-2xl md:text-3xl font-display italic tracking-tight text-gray-200 mb-12 max-w-4xl drop-shadow-lg">
          The Premier Local Travel Collective for Darjeeling & Sikkim.
        </p>

        <div className="animate-fade-rise-delay-2 w-full max-w-5xl scale-95 md:scale-100">
          <SearchBar />
        </div>

        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 mb-20">
          <Link href="/packages" className="btn-premium group flex items-center gap-3">
            <span>Explore Packages</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="text-white font-bold hover:text-green-400 transition-colors flex items-center gap-2 border-b border-white/20 pb-1">
            Plan My Trip via WhatsApp
          </Link>
        </div>
      </div>

      {/* Cinematic Ambient Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-green-500/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
