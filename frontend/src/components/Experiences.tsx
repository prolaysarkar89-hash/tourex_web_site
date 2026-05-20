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
    <section id="experiences" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
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
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight text-[#0f172a]">Curated <span className="text-[#15803d]">Experiences</span></h2>
          <p className="text-[#4b5563] text-xl max-w-2xl mx-auto">Not just packages — handpicked memories designed to reset your soul.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="experience-card group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={exp.image} 
                  alt={`${exp.name} - ${exp.region} Tour Package by Tourex`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#15803d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {exp.type}
                </span>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <h3 className="text-2xl font-display font-black text-[#15803d] leading-tight">{exp.name}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-[#15803d] font-bold mb-2 text-sm uppercase tracking-tighter">{exp.tagline}</p>
                <p className="text-[#4b5563] text-sm mb-6 leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
                
                <div className="flex justify-between items-center mb-6 text-gray-400 text-xs font-medium">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-[#15803d]" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-[#15803d]" />
                    <span>{exp.region}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block font-bold uppercase tracking-widest mb-1">Starting from</span>
                    <span className="text-2xl font-black text-[#0f172a]">₹{exp.price}</span>
                  </div>
                  <Link 
                    href={`https://wa.me/918768683198?text=Hi Tourex! I'm interested in the ${exp.name} package.`}
                    target="_blank"
                    className="rounded-full bg-green-700 text-white px-6 py-3 text-sm font-bold hover:scale-105 transition-all"
                  >
                    View Journey
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
