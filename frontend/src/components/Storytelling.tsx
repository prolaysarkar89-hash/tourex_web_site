"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Storytelling = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        }
      });

      tl.to(leftRef.current, { xPercent: -100, ease: 'none' }, 0);
      tl.to(rightRef.current, { xPercent: 100, ease: 'none' }, 0);
      
      tl.fromTo('.story-text', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5 }, 
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-white">
      {/* Left Side: Stress */}
      <div 
        ref={leftRef}
        className="absolute inset-0 w-1/2 left-0 h-full z-10 grayscale brightness-50 flex items-center justify-center border-r border-[#0f172a]/10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/40" />
      </div>

      {/* Right Side: Peace */}
      <div 
        ref={rightRef}
        className="absolute inset-0 w-1/2 left-1/2 h-full z-10 flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Text Overlay */}
      <div className="relative z-20 text-center pointer-events-none px-6">
        <h2 className="story-text text-6xl md:text-9xl font-display font-black tracking-[-4px] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-[0.9]">
          Same person.<br />
          <span className="text-green-500 italic font-normal drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">Different life.</span>
        </h2>
        <p className="mt-12 text-xl md:text-2xl text-white max-w-2xl mx-auto font-display italic opacity-0 story-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          Escape the monochrome of the city. Reconnect with the vibrant soul of the wild North.
        </p>
      </div>
    </section>
  );
};

export default Storytelling;
