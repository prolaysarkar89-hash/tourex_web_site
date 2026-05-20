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
    <section id="trust" className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="text-center group">
              <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <h3 className="text-2xl font-display font-black mb-4 tracking-tight text-[#0f172a]">{f.title}</h3>
              <p className="text-[#4b5563] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
