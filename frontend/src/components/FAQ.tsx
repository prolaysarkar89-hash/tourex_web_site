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
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0f172a] mb-4">
              Common <span className="text-[#15803d]">Questions.</span>
            </h2>
            <p className="text-[#4b5563]">Everything you need to know about planning your North Bengal escape with Tourex.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group border rounded-3xl transition-all duration-300 ${
                  activeIndex === index ? 'border-[#15803d] bg-green-50/30' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    activeIndex === index ? 'text-[#15803d]' : 'text-[#0f172a]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-[#15803d]' : 'text-gray-400'
                  }`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-[#4b5563] leading-relaxed">
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