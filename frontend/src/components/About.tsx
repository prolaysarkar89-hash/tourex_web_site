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
    <section id="about" ref={sectionRef} className="section-padding bg-sky relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden bg-white p-2 shadow-xl">
              <Image 
                src="/images/about-custom.png" 
                alt="North Bengal Travel Agency - Tourex Local Experts" 
                width={800}
                height={1000}
                className="w-full h-full object-cover rounded-[18px] transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Elegant Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl hidden md:block animate-fade-rise">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Local Soul</p>
            </div>
          </div>

          <div ref={textRef} className="lg:pl-10">
            <span className="about-reveal inline-block text-primary font-bold uppercase tracking-widest text-sm mb-6">Stress-Free North Bengal Escapes</span>
            <h2 className="about-reveal text-4xl md:text-5xl font-bold mb-8 leading-tight text-text-primary">
              Not just a trip.<br />
              <span className="text-primary italic">A transformation.</span>
            </h2>
            <div className="space-y-6 text-lg text-text-body leading-relaxed">
              <p className="about-reveal">
                Tourex was born from a simple realization: the modern world has lost its connection to silence. We don&apos;t just sell itineraries; we curate <span className="text-primary font-bold">sensory escapes</span> that recalibrate your soul against the backdrop of the Himalayas.
              </p>
            </div>
            
            <div className="about-reveal mt-12 grid grid-cols-2 gap-8 border-t border-slate-200 pt-12">
              <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-bold text-primary">10+ Years</h4>
                <p className="text-sm text-text-light font-medium">Deep Heritage</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-bold text-primary">5k+</h4>
                <p className="text-sm text-text-light font-medium">Escaped with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
