"use client";
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Clock, MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Experience {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  region: string;
  type: string;
  tagline: string;
  duration: string;
  inclusions: string[];
}

export default function PackagesPage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExperiences = useCallback(async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${apiUrl}/api/destinations`);
      setExperiences(res.data);
    } catch (err) {
      console.error("Error fetching experiences", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#15803d] transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-[#0f172a] mb-6">
              Our Curated <span className="text-[#15803d]">Packages</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Explore the hidden gems of North Bengal and Sikkim. From misty mountains to lush tea gardens, choose your next unforgettable journey.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#15803d]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src={exp.image} 
                      alt={exp.name} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#15803d] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-display font-black text-[#0f172a] leading-tight group-hover:text-[#15803d] transition-colors">
                        {exp.name}
                      </h3>
                    </div>
                    
                    <p className="text-[#15803d] font-bold mb-3 text-xs uppercase tracking-widest">{exp.tagline}</p>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8 mt-auto pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock size={16} className="text-[#15803d]" />
                        <span className="text-xs font-bold uppercase tracking-wider">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin size={16} className="text-[#15803d]" />
                        <span className="text-xs font-bold uppercase tracking-wider">{exp.region}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-black uppercase tracking-[0.2em] mb-1">Total Package</span>
                        <span className="text-2xl font-black text-[#0f172a]">₹{exp.price}</span>
                      </div>
                      <Link 
                        href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${exp.name} package.`}
                        target="_blank"
                        className="rounded-2xl bg-[#0f172a] text-white px-8 py-4 text-sm font-black hover:bg-[#15803d] transition-all transform active:scale-95 shadow-lg shadow-slate-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
