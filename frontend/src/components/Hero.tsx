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
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-white">
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
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </div>
      
      {/* Soft Light Overlay for Local-Friendly Vibe */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-20 px-6 max-w-7xl mx-auto pt-24 flex flex-col items-center perspective-1000">
        <span className="animate-fade-rise text-green-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 drop-shadow-md">
          Welcome to the Himalayas
        </span>
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-display font-black leading-[1.1] text-white mb-6 drop-shadow-xl">
          Discover the Soul of<br />
          <span className="text-green-400">North Bengal.</span>
        </h1>
        <p className="animate-fade-rise-delay text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mb-12 max-w-3xl drop-shadow-lg">
          Authentic local experiences, comfortable stays, and cinematic mountain escapes designed just for you.
        </p>

        {/* 3D Floating Search Bar */}
        <div className="animate-fade-rise-delay-2 w-full max-w-5xl preserve-3d translate-z-10 hover:translate-z-20 transition-transform duration-500">
          <SearchBar />
        </div>

        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 mb-16">
          <Link href="/packages" className="btn-primary">
            Explore Packages
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/30 hover:-translate-y-1">
            Plan via WhatsApp
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
