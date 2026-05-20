import React from 'react';
import Link from 'next/link';
import { Camera, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[var(--glass-border)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-4xl font-black tracking-tighter mb-6 block">
              TOUREX<span className="text-[var(--primary)]">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Stress-Free North Bengal Escapes. We curate local experiences that help you escape the city noise and find peace in nature.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[var(--primary)]" />
                <span>8768683198 / 8116413984</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[var(--primary)]" />
                <span>tourex.officials@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Camera size={18} className="text-[var(--primary)]" />
                <span>@tou.rex</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#experiences" className="text-gray-400 hover:text-[var(--primary)] transition-colors">Experiences</Link></li>
              <li><Link href="#story" className="text-gray-400 hover:text-[var(--primary)] transition-colors">Our Story</Link></li>
              <li><Link href="#trust" className="text-gray-400 hover:text-[var(--primary)] transition-colors">Why Tourex</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--glass-border)] pt-8 flex flex-col md:row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Tourex. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
