import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1] pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src="/images/Logo.jpeg" 
                  alt="Tourex Logo" 
                  width={50} 
                  height={50} 
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-display font-bold tracking-tight text-white">
                TOUREX
              </span>
            </Link>
            <p className="text-[#94A3B8] max-w-sm text-lg leading-relaxed">
              Curating silence and cinematic travel experiences across the North Bengal Himalayas. Reconnect with the wild.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8">Popular Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/darjeeling-tour-package" className="hover:text-white transition-colors">Darjeeling</Link></li>
              <li><Link href="/dooars-tour-package" className="hover:text-white transition-colors">Dooars</Link></li>
              <li><Link href="/sikkim-tour-package" className="hover:text-white transition-colors">Sikkim</Link></li>
              <li><Link href="/bhutan-tour-package" className="hover:text-white transition-colors">Bhutan</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8">Contact Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-500" />
                <span>+91 8768683198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-500" />
                <span>tourex.officials@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-[#64748B]">
          <p>© 2026 Tourex Collective. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Partner Program</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
