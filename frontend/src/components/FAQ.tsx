import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Tourex different from other travel agencies?",
      answer: "We focus on 'Experiences over Tours'. Our team consists of local explorers from North Bengal who curate offbeat, cinematic escapes that aren't found on generic portals."
    },
    {
      question: "How do I book a trip with Tourex?",
      answer: "Simply click on 'View Journey' or any WhatsApp button. You'll be connected to our AI Support or a travel expert who will help you customize and confirm your escape instantly."
    },
    {
      question: "Is North Bengal safe for solo travelers?",
      answer: "Absolutely. We specialize in safe, local-led experiences. Whether you're canyoning in Yelbong or staying in a remote Kalimpong village, we ensure 24/7 support."
    },
    {
      question: "Can I customize the existing packages?",
      answer: "Yes! All our journeys are flexible. We can recalibrate the duration, budget, and activities based on your personal preferences."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gray-50 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best time to visit Dooars?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October to March is the best time to visit Dooars for jungle safaris and pleasant weather."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book a Darjeeling tour package with Tourex?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book directly via our WhatsApp support or by clicking the 'View Journey' buttons on our curated Darjeeling packages."
                }
              },
              {
                "@type": "Question",
                "name": "Does Tourex provide tour operators in Siliguri?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Tourex is a leading travel agency based in Siliguri, providing expert local guides and operators for North Bengal and Sikkim."
                }
              }
            ]
          })
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight text-[#0f172a]">
            Common <span className="text-[#15803d]">Questions</span>
          </h2>
          <p className="text-[#4b5563] text-xl max-w-2xl mx-auto">Everything you need to know before you escape the city.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">{faq.question}</h3>
              <p className="text-[#4b5563] leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
