import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="section-padding bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block animate-fade-rise">Start Your Journey</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-text-primary leading-tight">
          Ready to <br /><span className="text-primary italic">escape the city?</span>
        </h2>
        <p className="text-lg md:text-xl text-text-body mb-12 max-w-2xl mx-auto leading-relaxed">
          Your recalibration starts with a single conversation. Allow us to curate your next transformation.
        </p>
        <Link href="https://wa.me/918768683198" target="_blank" className="btn-primary px-12 py-5 text-lg shadow-lg">
          Connect with a Specialist
        </Link>
      </div>
    </section>
  );
};

export default CTA;
