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
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a0f0d] perspective-2000">
      {/* Stunning Cinematic Background */}
      <div 
        ref={mountainRef}
        className="absolute inset-0 z-0 animate-cinematic"
      >
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=100"
          alt="North Bengal Stunning Mountains"
          fill
          priority
          className="object-cover brightness-75 grayscale-[0.2]"
          sizes="100vw"
          quality={100}
        />
      </div>
      
      {/* Premium Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0f0d]/80 via-transparent to-[#0a0f0d]/90" />
      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="relative z-20 px-8 max-w-7xl mx-auto pt-20 flex flex-col items-center preserve-3d">
        <span className="hero-3d-layer text-primary font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 drop-shadow-2xl">
          The Tourex Collective
        </span>
        
        <h1 className="hero-3d-layer text-6xl sm:text-8xl md:text-[10rem] font-display font-black leading-[0.85] text-zinc-100 mb-10 tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          NORTH<br />
          <span className="text-primary italic font-normal tracking-normal">Bengal.</span>
        </h1>
        
        <p className="hero-3d-layer text-lg sm:text-xl md:text-2xl font-display italic text-slate-200 mb-16 max-w-2xl drop-shadow-lg opacity-90">
          Curating silence and cinematic escapes across the Himalayas.
        </p>

        {/* 3D Floating Search Bar */}
        <div className="hero-3d-layer w-full max-w-5xl transition-transform duration-700 hover:scale-[1.02]">
          <SearchBar />
        </div>

        <div className="hero-3d-layer flex flex-col sm:flex-row gap-10 justify-center items-center mt-20">
          <Link href="/packages" className="btn-gold">
            Reserve Your Journey
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors border-b-2 border-primary/30 pb-1">
            Consult a Specialist
          </Link>
        </div>
      </div>

      {/* Cinematic Fog Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-15 mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-40">
        <div className="w-px h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
