import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Bhaskar Paul",
      role: "Travel Enthusiast, Jalpaiguri",
      text: "Exploring Kaffergaon with Tourex felt like stepping into a hidden paradise above the clouds. The peaceful mountain views, cozy village vibes, and refreshing nature made every moment unforgettable.",
      img: "/images/Bhaskar.jpeg"
    },
    {
      name: "Sudipa Jana",
      role: "Govt. Employee, Kolkata",
      text: "Exploring Yelbong River Canyon with Tourex was an experience I’ll never forget. From the scenic trails to the peaceful river views, every moment felt perfectly curated and deeply refreshing.",
      img: "/images/sudipa-jana.jpg.jpeg"
    },
    {
      name: "Irfan Ali",
      role: "Finance Services",
      text: "Exploring Jhandi with Tourex was a truly peaceful and refreshing experience. From the breathtaking sunrise views to the calm forest surroundings, every moment felt magical and perfectly planned.",
      img: "/images/Irfan.jpeg"
    },
    {
      name: "Jayraz Sarkar",
      role: "IT Services",
      text: "Exploring Lava with Tourex was an absolutely refreshing experience. Surrounded by misty hills, peaceful monasteries, and beautiful pine forests, every moment felt calm and unforgettable.",
      img: "/images/Jayraz.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-[#0f172a] mb-6">
            Trusted by <span className="text-[#15803d]">Adventurers</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Hear from the people who escaped the ordinary and discovered the soul of North Bengal with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 rounded-3xl border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-green-100 transition-colors duration-500">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="relative mb-8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-slate-50 ring-offset-0 group-hover:ring-green-50 transition-all duration-500">
                  <Image 
                    src={r.img} 
                    alt={r.name} 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-slate-600 leading-relaxed mb-8 text-[1.05rem] font-medium">
                  &quot;{r.text}&quot;
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold text-[#0f172a] tracking-tight">{r.name}</h4>
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest mt-1 opacity-80">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
