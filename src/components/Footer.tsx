import React from 'react';
import { ArrowUp, Instagram, Twitter, Youtube, Compass, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-neutral-900 transition-colors duration-300 relative">
      
      {/* Scroll-to-top floating vector */}
      <div className="absolute right-6 sm:right-12 -top-6">
        <button
          onClick={handleScrollToTop}
          className="bg-brand-gold hover:bg-white text-black p-4 rounded-full shadow-lg hover:-translate-y-1.5 transition-all cursor-pointer flex items-center justify-center border-2 border-black"
          title="Back to Top"
        >
          <ArrowUp size={16} className="animate-pulse" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900 text-left">
          
          {/* Column 1: About FYTNI (4 Span) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-3xl font-black tracking-[0.2em] text-white">
              FYTNI
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Welcome to FYTNI, a modern fashion destination created for individuals who believe clothing is more than just fabric—it's a statement of confidence, personality, and lifestyle.
            </p>
            
            {/* Social Channels */}
            <div className="flex space-x-4 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-450 hover:bg-brand-gold hover:text-black transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#tiktok" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-450 hover:bg-brand-gold hover:text-black transition-colors font-bold text-xs">
                d
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-450 hover:bg-brand-gold hover:text-black transition-colors">
                <Twitter size={15} />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-450 hover:bg-brand-gold hover:text-black transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Category links (2 Span) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-sans font-bold text-xs tracking-widest text-brand-gold uppercase">
              SHOP DEPT
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-neutral-400 font-light uppercase tracking-wider">
              <li><a href="#men-collection" className="hover:text-white transition-colors">Men's Wardrobe</a></li>
              <li><a href="#women-collection" className="hover:text-white transition-colors">Women's Wardrobe</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Column 3: Collection links (3 Span) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans font-bold text-xs tracking-widest text-brand-gold uppercase">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-neutral-400 font-light uppercase tracking-wider">
              <li><a href="#collections" className="hover:text-white transition-colors">Signature Heavy Oversized Tees</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">French Terry Knitted Hoodies</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Mandarin Premium Long Sleeves</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Satin Pleated Slip Dresses</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Ribbed Sculpt Tops & Co-ords</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us Helpdesk info (3 Span) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans font-bold text-xs tracking-widest text-brand-gold uppercase">
              CLIENT SUPPORT
            </h4>
            <ul className="space-y-3 font-sans text-xs text-neutral-400 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span>742 Fashion Boulevard, Suite 50, Los Angeles, CA 90015</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-gold flex-shrink-0" />
                <span>support@fytni.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-gold flex-shrink-0" />
                <span>+1 (800) 555-FYTNI</span>
              </li>
              <li className="text-[10px] text-neutral-500 border-t border-neutral-900 pt-2 uppercase font-mono">
                📞 Active hours: Mon - Fri | 9AM - 6PM PST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 font-mono tracking-wider space-y-4 sm:space-y-0">
          <p>© 2026 FYTNI Co. Wear Confidence. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>/</span>
            <a href="#terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
