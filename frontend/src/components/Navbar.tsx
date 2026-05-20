"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#0f172a]">
            TOUREX
          </span>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold -mt-1">
            Stress-Free North Bengal Escapes
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <button onClick={() => scrollTo('home')} className="text-sm font-medium text-black">Home</button>
          <button onClick={() => scrollTo('experiences')} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Experiences</button>
          <button onClick={() => scrollTo('about')} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">About</button>
          <button onClick={() => scrollTo('trust')} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Why Us</button>
          
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="rounded-full px-6 py-2.5 bg-green-700 text-white text-sm font-semibold hover:scale-105 transition-transform"
          >
            Plan My Trip
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#0f172a] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center gap-8 p-10">
          <button onClick={() => scrollTo('home')} className="text-2xl font-black text-[#0f172a]">Home</button>
          <button onClick={() => scrollTo('experiences')} className="text-2xl font-black text-[#0f172a]">Experiences</button>
          <button onClick={() => scrollTo('about')} className="text-2xl font-black text-[#0f172a]">About</button>
          <button onClick={() => scrollTo('trust')} className="text-2xl font-black text-[#0f172a]">Why Us</button>
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="w-full text-center rounded-full px-8 py-4 bg-green-700 text-white text-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
