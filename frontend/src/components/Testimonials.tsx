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
    <section id="testimonials" className="section-padding bg-sky">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Trusted by <span className="text-primary">Adventurers</span>
          </h2>
          <p className="text-lg text-text-body">
            Hear from the people who escaped the ordinary and discovered the soul of North Bengal with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="card-premium flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-sky-100 transition-colors duration-500">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="relative mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src={r.img} 
                    alt={r.name} 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-text-body leading-relaxed mb-6 text-base italic">
                  &quot;{r.text}&quot;
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold text-text-primary tracking-tight">{r.name}</h4>
                <p className="text-sm text-primary font-semibold mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
