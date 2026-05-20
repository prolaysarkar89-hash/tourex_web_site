"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const visuals = [
  {
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80",
    title: "Mountain Sunrise"
  },
  {
    url: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1920&q=80",
    title: "Yelbong River Canyon"
  },
  {
    url: "https://images.unsplash.com/photo-1590424744295-9831498b5391?auto=format&fit=crop&w=1920&q=80",
    title: "Dooars Forest"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    title: "Maenam Peak View"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const mountainRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % visuals.length);
        // Small delay before fade in
        setTimeout(() => {
          setOpacity(1);
        }, 100);
      }, 500); // Wait for fade out duration
    }, 6000); // Total loop duration per image

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(mountainRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-white">
      {/* Cinematic Looping Background */}
      <div 
        ref={mountainRef}
        className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out scale-110"
        style={{
          backgroundImage: `url("${visuals[currentIndex].url}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: opacity * 0.3 // Combined opacity for effect
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/80 via-transparent to-white/90" />
      <div className="absolute inset-0 z-10 bg-black/5" />

      <div className="relative z-20 px-6 max-w-7xl mx-auto pt-40 pb-12 flex flex-col items-center">
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-[-2px] leading-[0.95] text-[#0f172a] mb-4">
          North Bengal & <br />
          <span className="text-[#15803d]">Dooars Tour Packages.</span>
        </h1>
        <h2 className="animate-fade-rise text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-[#4b5563] mb-8">
          Premium Travel Agency in Siliguri for Darjeeling & Sikkim Escapes.
        </h2>

        <p className="animate-fade-rise-delay text-base sm:text-lg text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
          From hidden river canyons to luxury Dooars jungle safaris, Tourex helps you experience North Bengal beyond tourist spots — slow, local, and real.
        </p>

        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 mb-16">
          <Link href="#experiences" className="btn-premium">
            Explore Experiences
          </Link>
          <Link href="https://wa.me/918768683198" target="_blank" className="btn-outline-premium bg-white/50 backdrop-blur-sm">
            WhatsApp Us
          </Link>
        </div>
      </div>

      {/* Subtle Mist Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
