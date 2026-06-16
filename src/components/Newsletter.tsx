import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [newArrivals, setNewArrivals] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    setErrorMessage('');
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxuriously Curving Floating Bento Card Container */}
        <div className="relative bg-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden transition-all duration-300 border border-neutral-900/60 shadow-lg">
          
          {/* Dynamic Gold accents ambient gradient effects */}
          <div className="absolute w-80 h-80 -top-24 -left-20 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-80 h-80 -bottom-24 -right-20 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid Pattern mask overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-brand-gold">
                <Sparkles size={11} className="animate-spin text-brand-gold" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">THE FYTNI SOCIETY</span>
              </div>
              
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase">
                Stay Ahead of Trends
              </h2>
              
              <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
                Subscribe to our newsletter to receive secret <strong>FYTNI</strong> drops, private wardrobe lookbooks, and <strong>20% OFF</strong> your very first purchase.
              </p>
            </div>

            {isSubscribed ? (
              <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl animate-fadeIn space-y-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-black mx-auto">
                  <Check size={24} />
                </div>
                
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-brand-gold">WELCOME TO THE LIST</h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-300">
                  Check your inbox shortly! We just dispatched your custom <strong>20% discount code</strong> (code: <strong>FYTNI20</strong> or <strong>VIPCONFIDENCE</strong>) to your email address.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-lg mx-auto space-y-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                    <input
                      id="newsletter-email-input"
                      type="email"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      className="w-full pl-11 pr-4 py-4 bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-800 rounded-full focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-xs sm:text-sm font-light"
                    />
                  </div>
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="bg-white text-black hover:bg-brand-gold px-8 py-4 font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all rounded-full cursor-pointer active:scale-95"
                  >
                    JOIN THE SOCIETY
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-left text-xs sm:text-sm text-red-400 font-bold tracking-wide">
                    ⚠️ {errorMessage}
                  </p>
                )}

                {/* Config subscription preferences checkbox layout */}
                <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs text-neutral-400">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      id="newsletter-opt-offers"
                      type="checkbox"
                      checked={specialOffers}
                      onChange={(e) => setSpecialOffers(e.target.checked)}
                      className="rounded border-neutral-800 bg-neutral-900 text-brand-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
                    />
                    <span>Include special offers</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      id="newsletter-opt-arrivals"
                      type="checkbox"
                      checked={newArrivals}
                      onChange={(e) => setNewArrivals(e.target.checked)}
                      className="rounded border-neutral-800 bg-neutral-900 text-brand-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
                    />
                    <span>New arrivals updates</span>
                  </label>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
