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
      <div className="absolute inset-0 z-10 bg-black/45 backdrop-blur-[1px]" />

      <div className="relative z-20 px-8 max-w-7xl mx-auto pt-20 flex flex-col items-center">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 max-w-5xl leading-tight">
          Discover Hidden Destinations Across the Himalayas
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl opacity-90 font-medium">
          Connect directly with trusted local guides, transport operators and unique travel experiences.
        </p>

        {/* 3D Floating Search Bar */}
        <div className="w-full max-w-4xl mb-16">
          <SearchBar />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/packages" className="btn-primary py-4 px-10 text-lg">
            Explore Destinations
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="btn-secondary py-4 px-10 text-lg bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
            Plan Your Journey
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
