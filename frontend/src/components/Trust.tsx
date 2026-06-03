import React from 'react';
import { ShieldCheck, Compass, Heart, IndianRupee } from 'lucide-react';

const Trust = () => {
  const features = [
    {
      icon: <Compass size={40} className="text-[#15803d]" />,
      title: "Local Expertise",
      desc: "Our guides don't just know the maps; they know the mountains like family."
    },
    {
      icon: <Heart size={40} className="text-[#15803d]" />,
      title: "Authentic Stays",
      desc: "Handpicked homestays and eco-resorts that celebrate North Bengal's soul."
    },
    {
      icon: <ShieldCheck size={40} className="text-[#15803d]" />,
      title: "Safe Adventures",
      desc: "Verified routes and premium gear for every trek and canyon journey."
    },
    {
      icon: <IndianRupee size={40} className="text-[#15803d]" />,
      title: "Clear Pricing",
      desc: "No hidden costs. Every rupee spent is an investment in your peace."
    }
  ];

  return (
    <section id="trust" className="py-40 bg-white border-y border-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {features.map((f, i) => (
            <div key={i} className="text-center group">
              <div className="mb-10 flex justify-center transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="p-6 rounded-3xl bg-gray-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 32, className: "transition-colors" })}
                </div>
              </div>
              <h3 className="text-xl font-display font-black mb-6 tracking-tight text-[#020617] uppercase tracking-[0.1em]">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm px-4">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
