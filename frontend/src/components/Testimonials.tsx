import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const reviews = [
    {
      name: "Bhaskar Paul",
      role: "Travel Enthusiast, Jalpaiguri",
      text: "Exploring Kaffergaon with Tourex felt like stepping into a hidden paradise above the clouds. The peaceful mountain views, cozy village vibes, and refreshing nature made every moment unforgettable. A perfect getaway to reconnect with nature and yourself.",
      img: "/images/Bhaskar.jpeg"
    },
    {
      name: "Sudipa Jana",
      role: "Govt. Employee, Kolkata",
      text: "Exploring Yelbong River Canyon with Tourex was an experience I’ll never forget. From the scenic trails to the peaceful river views, every moment felt perfectly curated and deeply refreshing. A true escape into nature.",
      img: "/images/sudipa-jana.jpg.jpeg"
    },
    {
      name: "Irfan Ali",
      role: "Finance Services",
      text: "Exploring Jhandi with Tourex was a truly peaceful and refreshing experience. From the breathtaking sunrise views to the calm forest surroundings, every moment felt magical and perfectly planned. A beautiful escape from the busy city life.",
      img: "/images/Irfan.jpeg"
    },
    {
      name: "Jayraz Sarkar",
      role: "IT Services",
      text: "Exploring Lava with Tourex was an absolutely refreshing experience. Surrounded by misty hills, peaceful monasteries, and beautiful pine forests, every moment felt calm and unforgettable. A perfectly planned getaway for anyone looking to relax and reconnect with nature.",
      img: "/images/Jayraz.jpeg"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tight text-[#0f172a]">
          Voices of the <span className="text-[#15803d]">Escape</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
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
