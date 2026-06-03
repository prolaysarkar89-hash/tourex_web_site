import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-60 bg-white relative overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-700/10 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-green-700 font-bold uppercase tracking-[0.5em] text-xs mb-10 block animate-fade-rise">Start Your Journey</span>
        <h2 className="text-6xl md:text-9xl font-display font-black mb-12 tracking-[-4px] text-[#020617] leading-[0.9]">
          Ready to <br /><span className="italic font-normal text-green-800">escape the city?</span>
        </h2>
        <p className="text-xl md:text-3xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-display italic">
          Your recalibration starts with a single conversation. Allow us to curate your next transformation.
        </p>
        <Link href="https://wa.me/918768683198" target="_blank" className="btn-premium px-16 py-8 text-xs uppercase tracking-[0.3em] font-black inline-block shadow-[0_30px_60px_rgba(21,128,61,0.2)]">
          Connect with a Specialist
        </Link>
      </div>
    </section>
  );
};

export default CTA;
