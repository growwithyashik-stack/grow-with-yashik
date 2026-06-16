import React, { useState, useEffect } from 'react';
import { X, Star, Minus, Plus, Check, Truck, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}: QuickViewModalProps) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  // Sync state if product changes
  useEffect(() => {
    setActiveImage(product.images[0]);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
    setQuantity(1);
    setAddedMessage(false);
  }, [product]);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddSubmit = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Dark backdrop blur */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />

        {/* Modal Window Wrapper */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white dark:bg-[#121212] rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full border dark:border-neutral-800 animate-fadeIn">
          {/* Close Trigger Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white p-2 bg-gray-50 dark:bg-neutral-900 rounded-full cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Left Column: Image Stage */}
            <div className="flex flex-col space-y-4">
              <div className="aspect-[3/4] w-full bg-gray-50 dark:bg-neutral-900 rounded-lg overflow-hidden border dark:border-neutral-800">
                <img
                  src={activeImage}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Dynamic Thumbnail Selection Options */}
              <div className="grid grid-cols-2 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-[4/3] rounded overflow-hidden border-2 transition-all ${
                      activeImage === img
                        ? 'border-brand-gold ring-2 ring-brand-gold/20'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} thumbnail ${idx}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Configurations Info */}
            <div className="flex flex-col space-y-5">
              <div>
                <p className="font-mono text-xs text-brand-gold dark:text-brand-gold font-bold uppercase tracking-widest">
                  FYTNI / {product.subcategory}
                </p>
                <h2 className="font-serif text-2xl font-black text-gray-900 dark:text-white tracking-wide mt-1">
                  {product.title}
                </h2>
                
                {/* Visual Pricing */}
                <div className="flex items-center space-x-4 mt-2">
                  <span className="font-mono text-2xl font-black text-gray-950 dark:text-gray-100">
                    ${product.price ? product.price.toFixed(2) : ''}
                  </span>
                  
                  {/* Performance ratings */}
                  <div className="flex items-center space-x-1 border-l border-gray-200 dark:border-neutral-850 pl-4 py-1">
                    <div className="flex text-brand-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={star <= Math.floor(product.rating) ? 'fill-brand-gold' : 'text-gray-300 dark:text-neutral-700'}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                      ({product.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-gray-100 dark:border-neutral-900 py-3">
                <p className="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Configuration selection dots */}
              <div>
                <span className="block text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-2">
                  1. SELECT COLOR
                </span>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-7 h-7 rounded-full border shadow-inner transition-all flex items-center justify-center ${
                        selectedColor === color
                          ? 'ring-4 ring-brand-gold ring-offset-2 dark:ring-offset-neutral-900'
                          : 'border-gray-200 dark:border-neutral-700 hover:scale-105'
                      }`}
                      title={color}
                    >
                      {selectedColor === color && (
                        <Check size={12} className={`${color === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Configuration selector buttons */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="block text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                    2. SELECT SIZE
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 hover:underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-10 h-10 flex items-center justify-center font-bold text-xs transition-all border ${
                        selectedSize === sz
                          ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-md'
                          : 'border-gray-200 dark:border-neutral-800 text-gray-800 dark:text-gray-200 hover:border-black dark:hover:border-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive volume quantities */}
              <div>
                <span className="block text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-2">
                  3. SELECTION QUANTITY
                </span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-200 dark:border-neutral-850 bg-gray-50 dark:bg-neutral-900 rounded p-1">
                    <button
                      onClick={handleDecreaseQuantity}
                      className="p-1 px-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-mono font-bold text-sm text-gray-900 dark:text-white w-8 text-center bg-transparent">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncreaseQuantity}
                      className="p-1 px-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 border rounded transition-all flex-shrink-0 ${
                      isWishlisted
                        ? 'border-brand-gold bg-brand-gold/10 text-black dark:text-white'
                        : 'border-gray-200 dark:border-neutral-800 text-gray-500 hover:border-black dark:hover:border-white'
                    }`}
                    title={isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  >
                    <span className="font-sans text-xs font-bold uppercase tracking-wide">
                      {isWishlisted ? 'Saved' : 'Save To Wishlist'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Purchase submission action btn */}
              <div className="flex flex-col space-y-2 mt-4">
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAddSubmit}
                  className="w-full bg-black text-white dark:bg-white dark:text-black py-4 font-sans font-extrabold text-sm uppercase tracking-[0.2em] hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-black hover:text-black shadow-lg transition-all duration-300 active:scale-[0.98]"
                >
                  {addedMessage ? "ITEM ADDED SECURELY!" : "ADD TO SHOPPING BAG"}
                </button>

                {addedMessage && (
                  <p className="text-center text-xs text-green-600 dark:text-green-400 font-bold animate-pulse">
                    ✨ Bag successfully updated with your customizations.
                  </p>
                )}
              </div>

              {/* Informative service tags */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-neutral-900 pt-3 mt-1">
                <div className="flex items-center gap-1.5">
                  <Truck size={14} className="text-brand-gold" />
                  <span>Fast shipping in 24 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-gold" />
                  <span>Secure checkout encryption</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
