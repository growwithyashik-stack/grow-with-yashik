import React from 'react';
import { Layers, Compass, Maximize2, DollarSign, ShieldCheck, Truck, Headphones, Award } from 'lucide-react';
import { WHY_CHOOSE_BENEFITS } from '../data';

const iconMap: { [key: string]: React.ComponentType<{ className?: string, size?: number }> } = {
  Layers: Layers,
  Compass: Compass,
  Maximize2: Maximize2,
  DollarSign: DollarSign,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
  Headphones: Headphones,
  Award: Award
};

export default function WhyChoose() {
  return (
    <section id="why-fytni" className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bento Section card */}
        <div className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Title Alignments */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="font-mono text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">
              WHY COUTURIERS CHOOSE US
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight uppercase">
              The FYTNI Styling Signature
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-lg mx-auto font-light">
              Crafting a seamless retail journey from GOTS-vetted sustainable fabrics straight to your mailbox in ultra-secure luxury boxing.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
          </div>

          {/* Benefits Grid list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_BENEFITS.map((benefit) => {
              const IconComponent = iconMap[benefit.iconName] || Layers;
              
              return (
                <div
                  key={benefit.id}
                  className="group flex flex-col p-6 sm:p-7 bg-[#f9f9f9] dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-neutral-800/80 hover:bg-white dark:hover:bg-[#202020] hover:shadow-md hover:border-brand-gold dark:hover:border-brand-gold/60 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Visual Accent bubble */}
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-900 shadow-sm border dark:border-neutral-800 flex items-center justify-center text-black dark:text-white group-hover:bg-brand-gold group-hover:text-black transition-colors duration-300 mb-5 inline-flex">
                    <IconComponent size={14} />
                  </div>

                  <h3 className="font-sans font-bold text-xs text-gray-950 dark:text-white mb-2 uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-400 dark:text-neutral-450 leading-relaxed font-light">
                    {benefit.description}
                  </p>

                  {/* Styled structural frame border effect */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-brand-gold/30 rounded-tr-xl transition-all" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
