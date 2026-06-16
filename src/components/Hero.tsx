import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToCollection: (category: 'men' | 'women' | 'all') => void;
}

export default function Hero({ onScrollToCollection }: HeroProps) {
  return (
    <div className="py-6 sm:py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Hero Card */}
        <div className="relative min-h-[75vh] md:min-h-[80vh] bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl md:rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group flex flex-col lg:flex-row items-stretch">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          {/* Left Block: Narrative & CTAs inside Bento styling */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 text-left">
            <div className="inline-flex self-start items-center space-x-2 border border-black/10 dark:border-white/10 px-3.5 py-1.5 rounded-full bg-[#f9f9f9]/80 dark:bg-neutral-900/60 backdrop-blur-sm shadow-sm mb-6">
              <Sparkles size={12} className="text-brand-gold animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-neutral-800 dark:text-gray-200 uppercase">
                SPRING / SUMMER EXCLUSIVES 2026
              </span>
            </div>

            <div className="space-y-4">
              <span className="text-brand-gold dark:text-[#D4AF37] font-bold tracking-[0.2em] text-[11px] sm:text-xs uppercase block">SS/2026 Collection</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black dark:text-white leading-[1.05] tracking-tight">
                Wear Confidence.<br />
                <span className="font-serif italic font-light text-brand-gold">Define Your Style.</span>
              </h1>
              
              <p className="font-sans text-xs sm:text-sm md:text-base text-gray-500 dark:text-neutral-400 max-w-lg font-light leading-relaxed">
                Discover premium fashion designed for modern lifestyles. Trend-driven collections, ultimate self-expression, and contemporary tailoring.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-8">
              <button
                onClick={() => onScrollToCollection('men')}
                className="flex-1 text-center bg-black hover:scale-105 active:scale-95 text-white dark:bg-white dark:text-black py-4 px-6 text-xs font-bold tracking-widest uppercase transition-all rounded-full shadow-lg"
              >
                Shop Men
              </button>
              <button
                onClick={() => onScrollToCollection('women')}
                className="flex-1 text-center bg-transparent border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white py-4 px-6 text-xs font-bold tracking-widest uppercase transition-all rounded-full active:scale-95"
              >
                Shop Women
              </button>
            </div>

            {/* Micro details indicators */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-gray-100 dark:border-neutral-850/60">
              <div>
                <p className="font-display text-xl sm:text-2xl font-black text-black dark:text-white">99.8%</p>
                <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase mt-0.5">Satisfaction</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-black text-black dark:text-white">100%</p>
                <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase mt-0.5">Organic Cotton</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-black text-black dark:text-white">24H</p>
                <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase mt-0.5">Dispatched</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Background Visual Split (Vibrant and Modern) */}
          <div className="lg:w-2/5 xl:w-[45%] min-h-[300px] lg:min-h-full relative overflow-hidden bg-gray-100 dark:bg-neutral-900">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-110"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000')" }}
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white dark:from-[#121212] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden sm:block">
              <span className="font-mono text-[9px] tracking-[0.25em] font-bold uppercase text-brand-gold">
                HIGH STREET STYLE
              </span>
              <p className="font-serif text-xs italic tracking-wide mt-1">
                "FYTNI is a silent declaration of personality. Wear elegance."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
