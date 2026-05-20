import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const reviews = [
    {
      name: "Arjun Mehta",
      role: "Software Engineer, Kolkata",
      text: "Yelbong was surreal. I&apos;ve never seen such raw beauty so close to home. Tourex made the logistics invisible so I could just focus on the canyon.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sudipa Jana",
      role: "Govt. Employee, Kolkata",
      text: "Exploring Yelbong River Canyon with Tourex was an experience I’ll never forget. From the scenic trails to the peaceful river views, every moment felt perfectly curated and deeply refreshing. A true escape into nature.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tight text-[#0f172a]">
          Voices of the <span className="text-[#15803d]">Escape</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-500 hover:shadow-xl hover:border-green-700/30">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image 
                  src={r.img} 
                  alt={r.name} 
                  fill
                  className="rounded-full border-2 border-green-700 object-cover" 
                />
              </div>
              <div>
                <p className="text-xl text-[#4b5563] italic mb-6 leading-relaxed">&quot;{r.text}&quot;</p>
                <h4 className="text-lg font-bold text-[#0f172a]">{r.name}</h4>
                <p className="text-sm text-green-700 font-medium uppercase tracking-widest mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
