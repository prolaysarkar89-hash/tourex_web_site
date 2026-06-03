import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-5 mb-10 group">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black">
                <Image 
                  src="/images/Logo.jpeg" 
                  alt="Tourex Logo" 
                  width={60} 
                  height={60} 
                  className="object-contain brightness-90 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black tracking-tighter text-white">
                  TOUREX
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 -mt-1 transition-colors group-hover:text-green-500">
                  Stress-Free North Bengal Escapes
                </span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed font-medium italic">
              We curate sensory escapes that help you recalibrate against the backdrop of the North Bengal wild.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-black">Direct Line</span>
                <span className="text-gray-400 font-bold hover:text-green-500 transition-colors cursor-pointer">8768683198 / 8116413984</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-black">Electronic Mail</span>
                <span className="text-gray-400 font-bold hover:text-green-500 transition-colors cursor-pointer">tourex.officials@gmail.com</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-black">Social Handle</span>
                <span className="text-gray-400 font-bold hover:text-green-500 transition-colors cursor-pointer">@tou.rex</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-10">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/packages" className="text-gray-400 font-bold hover:text-green-500 transition-colors uppercase tracking-widest text-[10px]">Journeys</Link></li>
              <li><Link href="#about" className="text-gray-400 font-bold hover:text-green-500 transition-colors uppercase tracking-widest text-[10px]">Heritage</Link></li>
              <li><Link href="/join-us" className="text-gray-400 font-bold hover:text-green-500 transition-colors uppercase tracking-widest text-[10px]">Collective</Link></li>
              <li><Link href="/blog" className="text-gray-400 font-bold hover:text-green-500 transition-colors uppercase tracking-widest text-[10px]">Stories</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-black text-gray-700">
          <p>© 2026 Tourex Collective. Crafted for explorers.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
