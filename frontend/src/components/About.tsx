"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]">
              <Image 
                src="/images/about-custom.png" 
                alt="North Bengal Travel Agency - Tourex Local Experts" 
                width={800}
                height={1000}
                className="w-full h-full object-cover rounded-[1.5rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Elegant Floating Element */}
            <div className="absolute -bottom-12 -right-12 bg-accent text-primary p-10 rounded-3xl shadow-2xl hidden md:block animate-fade-rise border border-primary/20">
              <p className="text-4xl font-display font-black mb-1 italic">100%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Local Soul</p>
            </div>
          </div>

          <div ref={textRef} className="lg:pl-10">
            <span className="about-reveal inline-block text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-8">The Heritage Collective</span>
            <h2 className="about-reveal text-5xl md:text-7xl font-display font-black mb-10 leading-[1.1] tracking-tighter text-accent">
              Not just a trip.<br />
              <span className="italic font-normal text-primary">A transformation.</span>
            </h2>
            <div className="space-y-8 text-xl text-secondary-text leading-relaxed font-medium">
              <p className="about-reveal">
                Tourex was born from a simple realization: the modern world has lost its connection to silence. We don&apos;t just sell itineraries; we curate <span className="text-accent font-black">sensory escapes</span> that recalibrate your soul against the backdrop of the Himalayas.
              </p>
            </div>
            
            <div className="about-reveal mt-16 grid grid-cols-2 gap-12 border-t border-gray-100 pt-16">
              <div className="flex flex-col gap-2">
                <h4 className="text-4xl font-display font-black text-accent tracking-tighter">10+ Years</h4>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Deep Heritage</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-4xl font-display font-black text-accent tracking-tighter">5k+</h4>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Escaped with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
