"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the best time to visit North Bengal and Dooars?",
      answer: "The best time to visit is from October to May. For jungle safaris in Dooars, November to March is ideal. Note that forests are closed from June 15 to September 15 due to monsoon and breeding season."
    },
    {
      question: "Do you provide customized tour packages from Siliguri?",
      answer: "Yes, we specialize in 100% customized tour packages starting from Siliguri. Whether you are looking for a luxury retreat, a budget family trip, or an adventurous solo trek, we tailor every detail to your needs."
    },
    {
      question: "How do I book a jungle safari in Lataguri or Gorumara?",
      answer: "We handle all safari bookings as part of our packages. You just need to provide valid ID proof, and we will arrange the permits, Gypsy, and guide for Gorumara or Jaldapara National Park."
    },
    {
      question: "Is Bhutan open for Indian tourists and what are the requirements?",
      answer: "Yes, Bhutan is open. Indian tourists need a valid passport or Voter ID card. A Sustainable Development Fee (SDF) is applicable. We help process all permits and documentation seamlessly."
    },
    {
      question: "What kind of transport do you provide for Sikkim and Darjeeling tours?",
      answer: "We provide private, well-maintained vehicles like Innova, Xylo, or Swift Dzire. Our drivers are local experts who know the hilly terrain of Darjeeling and Sikkim perfectly, ensuring a safe and cinematic journey."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-40 bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-green-700 font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Concierge</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-[#020617] mb-8 tracking-tighter">
              Common <span className="italic font-normal text-green-800">Questions.</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">Everything you need to know about planning your next transformation with the Tourex Collective.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group border-b border-gray-100 transition-all duration-500 ${
                  activeIndex === index ? 'bg-gray-50/50' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-10 px-6 text-left"
                >
                  <span className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors duration-500 ${
                    activeIndex === index ? 'text-green-800' : 'text-[#020617]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${
                    activeIndex === index ? 'rotate-180 text-green-800' : 'text-gray-300'
                  }`}>
                    <ChevronDown size={28} strokeWidth={1.5} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-12 text-gray-500 text-lg leading-relaxed font-medium max-w-3xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;