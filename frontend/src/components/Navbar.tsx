"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
    : "bg-transparent";

  const textColor = scrolled ? "text-[#020617]" : "text-white";
  const subTextColor = scrolled ? "text-gray-500" : "text-gray-300";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 ${navBg} ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative overflow-hidden rounded-xl">
             <Image 
              src="/images/Logo.jpeg" 
              alt="Tourex Logo" 
              width={40} 
              height={40} 
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-500 ${textColor}`}>
              TOUREX
            </span>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold -mt-1 transition-colors duration-500 ${subTextColor}`}>
              The Local Collective
            </span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 items-center">
          <Link href="/" className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-green-500 ${pathname === '/' ? "text-green-600" : textColor}`}>
            Home
          </Link>
          <Link href="/packages" className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-green-500 ${pathname === '/packages' ? "text-green-600" : textColor}`}>
            Packages
          </Link>
          <Link href="/blog" className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-green-500 ${pathname?.startsWith('/blog') ? "text-green-600" : textColor}`}>
            Blog
          </Link>
          <button onClick={() => scrollTo('about')} className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-green-500 ${textColor}`}>
            Heritage
          </button>
          <Link href="/join-us" className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-green-500 ${pathname === '/join-us' ? "text-green-600" : textColor}`}>
            Join Us
          </Link>
          
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="rounded-full px-8 py-3 text-xs uppercase tracking-widest font-black transition-all hover:scale-105 bg-green-700 text-white shadow-lg shadow-green-900/20"
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
      } md:hidden bg-white`}>
        <div className="flex flex-col h-full justify-center items-center gap-8 p-10">
          <Link href="/" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/packages" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Packages</Link>
          <Link href="/blog" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Blog</Link>
          <button onClick={() => scrollTo('about')} className={`text-2xl font-black ${textColor}`}>About</button>
          <button onClick={() => scrollTo('trust')} className={`text-2xl font-black ${textColor}`}>Why Us</button>
          <Link href="/join-us" className={`text-2xl font-black ${textColor}`} onClick={() => setIsOpen(false)}>Join Us</Link>
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="w-full text-center rounded-full px-8 py-4 text-lg font-bold bg-green-700 text-white"
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
