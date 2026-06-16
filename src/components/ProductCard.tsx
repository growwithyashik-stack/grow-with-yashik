import React, { useState } from 'react';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const activeImage = hovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-[#121212] transition-all duration-300 border border-transparent hover:border-gray-150 dark:hover:border-neutral-800 rounded-lg overflow-hidden shadow-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] w-full bg-gray-100 dark:bg-neutral-900 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={activeImage}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Fashion Tags (New / Best Seller) */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
          {product.isNew && (
            <span className="inline-flex px-2.5 py-1 text-[10px] font-bold text-white bg-black dark:bg-brand-gold dark:text-black tracking-widest uppercase">
              NEW ARRIVAL
            </span>
          )}
          {product.isBest && (
            <span className="inline-flex px-2.5 py-1 text-[10px] font-bold text-black bg-white border border-black dark:bg-white tracking-widest uppercase shadow-sm">
              BEST SELLER
            </span>
          )}
        </div>

        {/* Quick Action Overlay (Desktop Only) */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex flex-col space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {/* Quick Size Selections on Card */}
            <div className="flex justify-center space-x-1.5 bg-white/90 dark:bg-black/90 p-1.5 rounded backdrop-blur-sm">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`text-xs w-7 h-7 flex items-center justify-center font-bold transition-all rounded ${
                    selectedSize === sz
                      ? 'bg-black text-white dark:bg-brand-gold dark:text-black'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-800'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product, selectedSize, selectedColor);
                }}
                className="flex-1 bg-black text-white dark:bg-white dark:text-black py-2.5 px-3 text-xs font-bold tracking-widest hover:bg-brand-gold hover:text-black dark:hover:bg-brand-gold dark:hover:text-black uppercase flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <ShoppingCart size={13} />
                Quick Add
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="bg-white text-black dark:bg-neutral-900 dark:text-white p-2.5 hover:bg-brand-gold hover:text-black dark:hover:bg-brand-gold dark:hover:text-black shadow-md border border-gray-100 dark:border-neutral-800 transition-colors flex items-center justify-center"
                title="Quick View Details"
              >
                <Eye size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Hover Wishlist Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full shadow-md z-15 transition-all ${
            isWishlisted
              ? 'bg-brand-gold text-black animate-bounce'
              : 'bg-white/80 dark:bg-neutral-900/80 text-gray-700 dark:text-gray-350 hover:bg-white dark:hover:bg-neutral-800'
          }`}
          aria-label="Add to Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? 'black' : 'none'} className="transition-colors" />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <p className="font-mono text-[11px] text-gray-400 tracking-wider dark:text-neutral-500 uppercase">{product.subcategory}</p>
          <div className="flex items-center space-x-1">
            <Star size={12} className="fill-brand-gold text-brand-gold" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{product.rating}</span>
          </div>
        </div>

        <h3 className="font-sans font-semibold text-[14px] text-gray-900 dark:text-white group-hover:text-brand-gold dark:group-hover:text-brand-gold tracking-wide transition-colors line-clamp-1 mb-2 cursor-pointer" onClick={() => onQuickView(product)}>
          {product.title}
        </h3>

        {/* Selected Color indicators */}
        <div className="flex items-center space-x-1.5 mb-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(color);
              }}
              style={{ backgroundColor: color }}
              className={`w-3.5 h-3.5 rounded-full border ${
                selectedColor === color
                  ? 'ring-2 ring-brand-gold ring-offset-1 dark:ring-offset-neutral-900'
                  : 'border-gray-300 dark:border-neutral-700'
              }`}
              title={color}
            />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-mono font-bold text-base text-black dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          
          {/* Mobile view action: Visible quick add buttons as mobile doesn't hover */}
          <div className="md:hidden flex space-x-1">
            <button
              onClick={() => onAddToCart(product, selectedSize, selectedColor)}
              className="bg-black text-white dark:bg-white dark:text-black p-2 hover:bg-brand-gold hover:text-black dark:hover:bg-brand-gold dark:hover:text-black transition-all"
              title="Add to Cart"
            >
              <ShoppingCart size={14} />
            </button>
            <button
              onClick={() => onQuickView(product)}
              className="bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200 p-2 transition-all"
              title="Quick Specifications"
            >
              <Eye size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
