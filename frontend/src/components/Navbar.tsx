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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page has a dark hero that needs light text initially
  const isDarkHeroPage = pathname === '/' || pathname === '/packages' || pathname === '/join-us';

  const navBg = scrolled 
    ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
    : "bg-transparent";

  // If scrolled, text is always dark. If not scrolled, depends on if the page has a dark hero.
  const textColor = scrolled 
    ? "text-slate-900" 
    : (isDarkHeroPage ? "text-white" : "text-slate-900");

  const subTextColor = scrolled 
    ? "text-slate-500" 
    : (isDarkHeroPage ? "text-slate-300" : "text-slate-500");

  const navLinkClass = `text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:text-green-600 whitespace-nowrap ${textColor}`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navBg} ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo Section - flex-shrink-0 prevents compression */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 flex-shrink-0 group">
          <div className="relative w-10 h-10 md:w-12 h-12 overflow-hidden rounded-xl shadow-lg shadow-black/5 border border-white/10 flex-shrink-0">
             <Image 
              src="/images/Logo.jpeg" 
              alt="Tourex Logo" 
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 40px, 48px"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className={`font-display text-xl md:text-2xl font-black tracking-tight transition-colors duration-500 antialiased ${textColor}`}>
              TOUREX
            </span>
            <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.25em] font-black mt-0.5 transition-colors duration-500 ${subTextColor}`}>
              The Local Collective
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation - gap: 2.5rem (gap-10) exceeds 2rem minimum */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className={`${navLinkClass} ${pathname === '/' ? "text-green-600" : ""}`}>
            Home
          </Link>
          <Link href="/packages" className={`${navLinkClass} ${pathname === '/packages' ? "text-green-600" : ""}`}>
            Journeys
          </Link>
          <Link href="/blog" className={`${navLinkClass} ${pathname?.startsWith('/blog') ? "text-green-600" : ""}`}>
            Stories
          </Link>
          <Link href="/join-us" className={`${navLinkClass} ${pathname === '/join-us' ? "text-green-600" : ""}`}>
            Collective
          </Link>
        </div>

        {/* CTA Section - flex-shrink-0 prevents compression */}
        <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="bg-green-700 text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-black transition-all hover:scale-105 hover:bg-green-800 shadow-xl shadow-green-900/10 active:scale-95"
          >
            Plan My Trip
          </Link>
        </div>
        
        {/* Mobile Menu Button - consistently visible below 1024px (lg) */}
        <button 
          className={`lg:hidden p-2 -mr-2 transition-colors duration-300 focus:outline-none ${textColor}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} strokeWidth={2} /> : <Menu size={30} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[-1] transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } lg:hidden`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        
        {/* Content */}
        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-8 pt-24`}>
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Home <span className="text-green-600 text-sm">01</span>
            </Link>
            <Link href="/packages" className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Journeys <span className="text-green-600 text-sm">02</span>
            </Link>
            <Link href="/blog" className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Stories <span className="text-green-600 text-sm">03</span>
            </Link>
            <Link href="/join-us" className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Collective <span className="text-green-600 text-sm">04</span>
            </Link>
            
            <Link 
              href="https://wa.me/918768683198" 
              target="_blank" 
              className="mt-6 w-full text-center rounded-2xl px-8 py-5 text-lg font-black bg-green-700 text-white shadow-xl shadow-green-900/20 active:scale-95 transition-all"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp Us
            </Link>
            
            <div className="mt-auto pt-10 text-center">
               <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-300">Tourex Collective &copy; 2026</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
