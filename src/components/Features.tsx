import React from 'react';
import { Sparkles, TrendingUp, Smile, Percent } from 'lucide-react';
import { FEATURES } from '../data';

// Helper to resolve dynamically matched icon names
const iconMap: { [key: string]: React.ComponentType<{ className?: string, size?: number }> } = {
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Smile: Smile,
  Percent: Percent
};

export default function Features() {
  return (
    <section className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Bento Card */}
        <div className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Title structure */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="font-mono text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">
              WHY FYTNI STANDS OUT
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight uppercase">
              Crafted for Dynamic Confidence
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
          </div>

          {/* Features list grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => {
              const IconComponent = iconMap[feature.iconName] || Sparkles;
              
              return (
                <div
                  key={feature.id}
                  className="group relative bg-[#f9f9f9] dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-neutral-800/80 hover:border-brand-gold dark:hover:border-brand-gold/60 hover:shadow-md transition-all duration-300 flex flex-col text-left overflow-hidden"
                >
                  {/* Floating ambient index number */}
                  <div className="absolute top-4 right-6 font-mono text-5xl font-black text-gray-200/50 dark:text-neutral-900/40 group-hover:text-brand-gold/10 transition-colors select-none">
                    0{idx + 1}
                  </div>

                  {/* Styled icon bubble */}
                  <div className="w-11 h-11 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-black transition-all duration-300 shadow">
                    <IconComponent size={18} />
                  </div>

                  {/* Texts descriptors */}
                  <h3 className="font-sans font-bold text-sm text-gray-950 dark:text-white mb-3 tracking-wide uppercase">
                    {feature.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-neutral-450 leading-relaxed font-light">
                    {feature.description}
                  </p>

                  {/* Tiny bottom hover border line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
