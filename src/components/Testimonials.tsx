import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bento Section card */}
        <div className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Title Block */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="font-mono text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">
              STREET CREDIBILITY
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight uppercase">
              CONFIDENT WHISPERS
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
          </div>

          {/* Testimonials Static Grid as Bento tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-[#f9f9f9] dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:bg-white dark:hover:bg-[#202020] hover:shadow-md hover:border-brand-gold dark:hover:border-brand-gold/60 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Giant elegant background quotation mark */}
                <Quote className="absolute right-6 top-6 text-gray-200 dark:text-neutral-800/40 w-12 h-12 stroke-1 group-hover:scale-125 group-hover:text-brand-gold/20 transition-all pointer-events-none" />

                <div>
                  {/* Yellow star vectors */}
                  <div className="flex text-brand-gold space-x-1 mb-6 relative z-10">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(testimonial.rating) ? 'fill-brand-gold text-brand-gold' : 'text-gray-200 dark:text-neutral-750'}
                      />
                    ))}
                  </div>

                  {/* Main Client comment */}
                  <p className="font-sans text-xs sm:text-sm text-gray-550 dark:text-neutral-400 leading-relaxed font-light italic mb-6 relative z-10">
                    "{testimonial.comment}"
                  </p>
                </div>

                {/* Client Profile details */}
                <div className="flex items-center space-x-4 border-t border-gray-150 dark:border-neutral-800/60 pt-5 mt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/40 flex-shrink-0 bg-gray-105">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-sans font-bold text-xs text-gray-950 dark:text-white uppercase tracking-wider">
                      {testimonial.name}
                    </h4>
                    <p className="font-mono text-[9px] text-gray-400 uppercase mt-0.5 tracking-wide dark:text-neutral-550 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
