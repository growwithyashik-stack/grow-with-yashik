import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic side-by-side structures as Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Our Mission */}
          <div className="group bg-white dark:bg-[#121212] p-8 sm:p-12 rounded-3xl border border-gray-100 dark:border-neutral-850 hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                <Target size={22} />
              </div>
              <h3 className="font-sans text-2xl font-black text-gray-950 dark:text-white uppercase tracking-wider">
                OUR MISSION
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-neutral-350 leading-relaxed font-light">
              To make high-quality, stylish, and comfortable fashion accessible to everyone while empowering people to express themselves confidently through fashion.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-850/60 flex items-center text-[10px] font-mono tracking-widest text-gray-400 dark:text-neutral-500 uppercase">
              ✨ INSPIRING SELF-EXPRESSION DYNAMICALLY
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="group bg-white dark:bg-[#121212] p-8 sm:p-12 rounded-3xl border border-gray-100 dark:border-neutral-850 hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-black dark:bg-white" />
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center">
                <Eye size={22} />
              </div>
              <h3 className="font-sans text-2xl font-black text-gray-950 dark:text-white uppercase tracking-wider">
                OUR VISION
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-neutral-350 leading-relaxed font-light">
              To become a leading fashion brand recognized for innovation, quality, and customer satisfaction while inspiring confidence through style.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-850/60 flex items-center text-[10px] font-mono tracking-widest text-gray-400 dark:text-neutral-500 uppercase">
              🌐 A GLOBAL BLUEPRINT FOR HIGH-END STYLE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
