import React from 'react';
import { Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="our-story" className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Bento Card Wrapper */}
        <div className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-md transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Premium Layered Editorial Images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gray-55 dark:bg-neutral-900 rounded-2xl overflow-hidden border dark:border-neutral-850 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop"
                    alt="Tailoring design detail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square bg-gray-55 dark:bg-neutral-900 rounded-2xl overflow-hidden border dark:border-neutral-850 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop"
                    alt="Sneakers fashion details"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div className="aspect-square bg-gray-55 dark:bg-neutral-900 rounded-2xl overflow-hidden border dark:border-neutral-850 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&auto=format&fit=crop"
                    alt="Overcoat details"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-55 dark:bg-neutral-900 rounded-2xl overflow-hidden border dark:border-neutral-850 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1509631159647-0177331693ae?q=80&w=400&auto=format&fit=crop"
                    alt="Fashion model walk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Accent gold graphic ribbon */}
              <div className="absolute -bottom-4 right-12 w-28 h-28 border-r-2 border-b-2 border-brand-gold/40 rounded-br-3xl pointer-events-none" />
            </div>

            {/* Right Column: Narrative content blocks */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="space-y-2">
                <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-widest block">
                  MEET OUR BRAND
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight leading-tight uppercase">
                  Fashion That Speaks Your Style
                </h2>
              </div>

              <div className="font-sans text-sm sm:text-base text-gray-600 dark:text-neutral-350 space-y-5 leading-relaxed font-light">
                <p>
                  Welcome to <strong className="text-black dark:text-white font-semibold">FYTNI</strong>, a modern fashion destination created for individuals who believe clothing is more than just fabric—it's a statement of confidence, personality, and lifestyle.
                </p>
                <p>
                  At FYTNI, we bring together premium-quality apparel, contemporary designs, and exceptional comfort to help you express your unique style every day.
                </p>
                <p>
                  Our collections combine fashion-forward trends with timeless elegance, ensuring every piece fits perfectly into your wardrobe.
                </p>
              </div>

              {/* Large styled quotation block for professional Zara-vibe layouts */}
              <div className="bg-gray-50 dark:bg-neutral-900/60 p-6 rounded-2xl border-l-4 border-brand-gold relative">
                <Quote className="absolute right-4 bottom-4 text-gray-200 dark:text-neutral-850 w-16 h-16 pointer-events-none" />
                <p className="font-sans text-xs sm:text-sm italic text-gray-800 dark:text-gray-200 leading-relaxed mb-1 relative z-10">
                  "We don't create pieces to blend in. We design assets to build self-confidence. What you wear writes your silent, most powerful first impression."
                </p>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-brand-gold uppercase block mt-2">
                  — FYTNI DESIGN TEAM
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
