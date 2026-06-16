import React from 'react';
import { X, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onQuickView,
  onAddToCart,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Drawer Stage Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#0E0E0E] text-black dark:text-white flex flex-col shadow-2xl border-l dark:border-neutral-900 animate-slideLeft">
          
          {/* Header */}
          <div className="h-20 px-6 border-b border-gray-100 dark:border-neutral-900 flex justify-between items-center bg-gray-55 dark:bg-neutral-950/40">
            <div className="flex items-center space-x-2.5">
              <Heart size={20} className="text-brand-gold fill-brand-gold animate-pulse" />
              <h2 className="font-serif text-lg font-black tracking-wider uppercase">WISHLIST</h2>
              <span className="font-mono text-xs bg-brand-gold text-black py-0.5 px-2 rounded-full font-bold">
                {wishlist.length}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black dark:hover:text-white p-2 rounded-full cursor-pointer transition-colors"
              aria-label="Close Wishlist"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
                <Heart size={48} className="text-gray-300 dark:text-neutral-700 stroke-1" />
                <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-gray-800 dark:text-gray-200">Wishlist empty</h3>
                <p className="font-sans text-xs text-gray-500 max-w-xs mx-auto">
                  Save your absolute favorite products to keep track of their availability and order at any moment.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center space-x-1 border border-black dark:border-white py-2 px-6 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                >
                  <span>BROWSE STORES</span>
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-neutral-900">
                {wishlist.map((product) => (
                  <div key={product.id} className="py-4 flex space-x-4 animate-fadeIn">
                    
                    {/* Image stage */}
                    <div className="w-16 aspect-[3/4] bg-gray-55 dark:bg-neutral-900 border dark:border-neutral-850 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta options and interactions */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-sans font-bold text-xs text-gray-900 dark:text-white line-clamp-1 tracking-wide uppercase">
                            {product.title}
                          </h4>
                          <button
                            onClick={() => onRemoveFromWishlist(product)}
                            className="text-gray-400 hover:text-red-500 p-1"
                            title="Unsave product"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <p className="font-mono text-xs font-bold text-brand-gold mt-0.5">${product.price.toFixed(2)}</p>
                        <p className="text-[10px] text-gray-450 mt-1 dark:text-neutral-500">Sizes available: {product.sizes.join(', ')}</p>
                      </div>

                      {/* Moving or viewing products */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => {
                            onAddToCart(product, product.sizes[0], product.colors[0]);
                            onRemoveFromWishlist(product);
                          }}
                          className="flex-1 bg-black text-white dark:bg-white dark:text-black py-2 px-3 text-[10px] font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-black dark:hover:bg-brand-gold dark:hover:text-black transition-colors flex items-center justify-center gap-1"
                        >
                          <ShoppingCart size={11} />
                          Add to Bag
                        </button>
                        <button
                          onClick={() => onQuickView(product)}
                          className="p-2 border border-gray-200 dark:border-neutral-850 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white rounded text-xs transition-colors"
                          title="View items"
                        >
                          <Eye size={12} />
                        </button>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="h-16 border-t border-gray-100 dark:border-neutral-900 px-6 flex items-center bg-gray-55 dark:bg-neutral-950/20 text-xs text-gray-400 text-center justify-center">
            📌 Wishlists persist dynamically in your active browser session.
          </div>

        </div>
      </div>
    </div>
  );
}
