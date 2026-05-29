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
    <section id="about" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 p-2 shadow-2xl">
              <Image 
                src="/images/about-custom.png" 
                alt="North Bengal Travel Agency - Tourex Local Experts" 
                width={800}
                height={1000}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-1000"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-700/10 rounded-full blur-3xl" />
          </div>

          <div ref={textRef}>
            <span className="about-reveal inline-block text-green-700 font-bold uppercase tracking-[0.3em] mb-6">Our Philosophy</span>
            <h2 className="about-reveal text-4xl md:text-6xl font-display font-black mb-8 leading-tight tracking-tighter text-[#0f172a]">
              Not just a trip.<br />
              <span className="text-[#15803d]">A transformation.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#4b5563] leading-relaxed">
              <p className="about-reveal">
                At Tourex, we believe travel should be an antidote to modern life. We don&apos;t just sell itineraries; we curate escapes that recalibrate your senses and connect you with the raw beauty of the Himalayas.
              </p>
              <p className="about-reveal">
                <strong>Based in Siliguri</strong>, the gateway to the North East, our team of local explorers identifies hidden river canyons, offbeat Darjeeling trails, and quiet hill retreats in Sikkim that you won&apos;t find on any generic travel portal.
              </p>
              <p className="about-reveal">
                Whether it&apos;s a <strong>Dooars jungle safari</strong> in Lataguri, a spiritual hike to <strong>Tiger&apos;s Nest</strong>, or a luxury escape in the tea gardens, we ensure every moment is stress-free, cinematic, and deeply authentic to the local culture.
              </p>
            </div>
            
            <div className="about-reveal mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div>
                <h4 className="text-3xl font-black text-[#15803d] mb-2">10+ Years</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Local Expertise</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-[#15803d] mb-2">5,000+</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
