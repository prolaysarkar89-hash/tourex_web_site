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

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine if the current page has a dark hero that needs light text initially
  const isDarkHeroPage = pathname === '/' || pathname === '/packages' || pathname === '/join-us';

  const navBg = scrolled 
    ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
    : "bg-transparent";

  const textColor = scrolled 
    ? "text-slate-900" 
    : (isDarkHeroPage ? "text-white" : "text-slate-900");

  const navLinkClass = `text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${textColor} hover:text-sky-600`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navBg} ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
             <Image 
              src="/images/Logo.jpeg" 
              alt="Tourex Logo" 
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-500 ${textColor}`}>
            TOUREX
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className={`${navLinkClass} ${pathname === '/' ? "text-sky-600" : ""}`}>
            Home
          </Link>
          <Link href="/packages" className={`${navLinkClass} ${pathname === '/packages' ? "text-sky-600" : ""}`}>
            Destinations
          </Link>
          <Link href="/packages" className={`${navLinkClass}`}>
            Experiences
          </Link>
          <Link href="/join-us" className={`${navLinkClass} ${pathname === '/join-us' ? "text-sky-600" : ""}`}>
            Local Partners
          </Link>
          <button onClick={() => scrollTo('about')} className={navLinkClass}>
            About
          </button>
          <button onClick={() => scrollTo('contact')} className={navLinkClass}>
            Contact
          </button>
        </div>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link 
            href="https://wa.me/918768683198" 
            target="_blank" 
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Plan Your Journey
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
              Packages <span className="text-green-600 text-sm">02</span>
            </Link>
            <button onClick={() => { setIsOpen(false); scrollTo('about'); }} className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center text-left">
              About Us <span className="text-green-600 text-sm">03</span>
            </button>
            <button onClick={() => { setIsOpen(false); scrollTo('trust'); }} className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center text-left">
              Why Us <span className="text-green-600 text-sm">04</span>
            </button>
            <Link href="/join-us" className="text-2xl font-display font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Join Us <span className="text-green-600 text-sm">05</span>
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
