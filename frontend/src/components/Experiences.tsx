"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const sectionRef = useRef(null);

  const fetchExperiences = useCallback(async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${apiUrl}/api/destinations`);
      setExperiences(res.data);
    } catch (err) {
      console.error("Error fetching experiences", err);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      await fetchExperiences();
    };
    load();
  }, [fetchExperiences]);

  useEffect(() => {
    if (experiences.length > 0) {
      const cards = gsap.utils.toArray('.experience-card');
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        gsap.from(cardElement, {
          scrollTrigger: {
            trigger: cardElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }
  }, [experiences]);

  return (
    <section id="experiences" ref={sectionRef} className="py-40 bg-white relative overflow-hidden">
      {/* Product Schema for AI & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": experiences.map((exp, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": exp.name,
                "description": exp.description,
                "image": exp.image,
                "offers": {
                  "@type": "Offer",
                  "price": exp.price,
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                "brand": {
                  "@type": "Brand",
                  "name": "Tourex"
                }
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="mb-24 text-center">
           <span className="text-green-700 font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Exclusive Journeys</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter text-[#1A1A1A]">Curated <span className="italic font-normal text-green-700">Experiences</span></h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">Not just packages — handpicked memories designed to reset your soul.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="experience-card preserve-3d card-3d-hover cursor-pointer bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                <Image 
                  src={exp.image} 
                  alt={`${exp.name} - ${exp.region} Tour Package by Tourex`} 
                  fill
                  className="object-cover"
                />
                
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-green-800 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                  {exp.type}
                </span>
              </div>
              
              <div className="px-4 translate-z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-green-600 mb-2">{exp.tagline}</p>
                <h3 className="text-3xl font-display font-black leading-none mb-4 text-[#1A1A1A]">{exp.name}</h3>
                
                <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium line-clamp-2">
                  {exp.description}
                </p>
                
                <div className="flex justify-between items-center mb-6 py-4 border-y border-gray-50">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-gray-400">
                    <Clock size={14} className="text-green-600" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-gray-400">
                    <MapPin size={14} className="text-green-600" />
                    <span>{exp.region}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-2">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-black uppercase tracking-widest mb-1">Starting from</span>
                    <span className="text-2xl font-display font-black text-green-800">₹{exp.price}</span>
                  </div>
                  <Link 
                    href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${exp.name} package.`}
                    target="_blank"
                    className="rounded-full bg-green-50 text-green-700 px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-green-700 hover:text-white transition-all"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
