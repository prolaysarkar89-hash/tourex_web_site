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
    ? "bg-white/95 backdrop-blur-sm shadow-none"
    : "bg-transparent";

  const textColor = scrolled ? "text-[#0f172a]" : "text-[#0f172a]";

  const subTextColor = "text-gray-500";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Image 
            src="/images/Logo.jpeg" 
            alt="Tourex Logo" 
            width={45} 
            height={45} 
            className="rounded-lg object-contain shadow-sm"
          />
          <div className="flex flex-col">
            <span className={`font-display text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${textColor}`}>
              TOUREX
            </span>
            <span className={`text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold -mt-1 transition-colors duration-300 ${subTextColor}`}>
              Stress-Free North Bengal Escapes
            </span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className={`text-sm font-semibold transition-colors duration-300 ${pathname === '/' ? "text-green-700" : textColor}`}>
            Home
          </Link>
          <Link href="/packages" className={`text-sm font-semibold transition-colors duration-300 ${pathname === '/packages' ? "text-green-700" : textColor}`}>
            Packages
          </Link>
          <Link href="/blog" className={`text-sm font-semibold transition-colors duration-300 ${pathname?.startsWith('/blog') ? "text-green-700" : textColor}`}>
            Blog
          </Link>
          <button onClick={() => scrollTo('about')} className={`text-sm font-semibold hover:text-[#D4AF37] transition-colors duration-300 ${textColor}`}>
            About
          </button>
          <button onClick={() => scrollTo('trust')} className={`text-sm font-semibold hover:text-[#D4AF37] transition-colors duration-300 ${textColor}`}>
            Why Us
          </button>
          <Link href="/join-us" className={`text-sm font-semibold transition-colors duration-300 ${pathname === '/join-us' ? "text-green-700" : textColor}`}>
            Join Us
          </Link>
          
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="rounded-full px-6 py-2 text-sm font-bold hover:scale-105 transition-all bg-green-700 text-white"
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
