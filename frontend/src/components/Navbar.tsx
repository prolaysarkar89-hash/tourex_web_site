"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isDarkPage = pathname === '/packages';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled 
    ? (isDarkPage ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-white/90 backdrop-blur-md shadow-sm")
    : "bg-transparent";

  const textColor = isDarkPage 
    ? (scrolled ? "text-white" : "text-white/90")
    : (scrolled ? "text-[#0f172a]" : "text-[#0f172a]");

  const subTextColor = isDarkPage ? "text-gray-400" : "text-gray-500";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className={`font-display text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-500 ${textColor}`}>
            TOUREX
          </span>
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold -mt-1 transition-colors duration-500 ${subTextColor}`}>
            Stress-Free North Bengal Escapes
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className={`text-sm font-bold transition-colors duration-500 ${pathname === '/' ? (isDarkPage ? "text-[#D4AF37]" : "text-green-700") : textColor}`}>
            Home
          </Link>
          <Link href="/packages" className={`text-sm font-bold transition-colors duration-500 ${pathname === '/packages' ? (isDarkPage ? "text-[#D4AF37]" : "text-green-700") : textColor}`}>
            Packages
          </Link>
          <button onClick={() => scrollTo('about')} className={`text-sm font-bold hover:text-[#D4AF37] transition-colors duration-500 ${textColor}`}>
            About
          </button>
          <button onClick={() => scrollTo('trust')} className={`text-sm font-bold hover:text-[#D4AF37] transition-colors duration-500 ${textColor}`}>
            Why Us
          </button>
          
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className={`rounded-full px-6 py-2.5 text-sm font-bold hover:scale-105 transition-all shadow-lg ${
              isDarkPage ? "bg-[#D4AF37] text-black" : "bg-green-700 text-white"
            }`}
          >
            Plan My Trip
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className={`md:hidden p-2 transition-colors duration-500 ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden ${isDarkPage ? "bg-[#0B1210]" : "bg-white"}`}>
        <div className="flex flex-col h-full justify-center items-center gap-8 p-10">
          <Link href="/" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/packages" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Packages</Link>
          <button onClick={() => scrollTo('about')} className={`text-2xl font-black ${textColor}`}>About</button>
          <button onClick={() => scrollTo('trust')} className={`text-2xl font-black ${textColor}`}>Why Us</button>
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className={`w-full text-center rounded-full px-8 py-4 text-lg font-bold ${
              isDarkPage ? "bg-[#D4AF37] text-black" : "bg-green-700 text-white"
            }`}
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
