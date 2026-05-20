import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-700/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter text-[#0f172a]">
          Ready to <span className="text-[#15803d]">escape the city?</span>
        </h2>
        <p className="text-xl md:text-2xl text-[#4b5563] mb-12 max-w-2xl mx-auto leading-relaxed">
          Your journey to peace starts with a single message. Let&apos;s plan your stress-free getaway today.
        </p>
        <Link href="https://wa.me/918768683198" target="_blank" className="btn-premium px-12 py-6 text-xl inline-block">
          DM on WhatsApp
        </Link>
      </div>
    </section>
  );
};

export default CTA;
