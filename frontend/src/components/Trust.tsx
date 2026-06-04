import React from 'react';
import { ShieldCheck, Compass, Clock, CreditCard, LucideIcon, Award } from 'lucide-react';

interface TrustFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const Trust = () => {
  const features: TrustFeature[] = [
    {
      icon: Award,
      title: "Verified Partners",
      desc: "Connect directly with trusted local guides and certified transport operators."
    },
    {
      icon: ShieldCheck,
      title: "Safe Booking",
      desc: "Secure payment processes and verified itineraries for worry-free travel."
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      desc: "No hidden costs. Every price is upfront and all-inclusive of stated services."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Our local experts are available around the clock to assist you during your journey."
    }
  ];

  return (
    <section id="trust" className="section-padding bg-white border-y border-slate-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-8 p-6 rounded-2xl bg-sky text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">{f.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
