import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  wishlistItemsCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({
  cartItemsCount,
  wishlistItemsCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { label: 'Shop Men', href: '#men-collection' },
    { label: 'Shop Women', href: '#women-collection' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Why FYTNI', href: '#why-fytni' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-[#0B0B0B] border-b border-gray-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 dark:text-white hover:text-brand-gold dark:hover:text-brand-gold p-2 cursor-pointer transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Luxury Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-3xl font-black tracking-[0.2em] text-black dark:text-white hover:text-brand-gold dark:hover:text-brand-gold transition-colors duration-300">
              FYTNI
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-medium text-sm text-gray-800 dark:text-gray-200 tracking-wider hover:text-brand-gold dark:hover:text-brand-gold transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Elegant Search Toggle and Field */}
            <div className="relative flex items-center">
              {showSearchInput && (
                <input
                  id="navbar-search-input"
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-40 sm:w-56 px-3 py-1.5 mr-2 font-sans text-sm text-black dark:text-white bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded focus:outline-none focus:border-black dark:focus:border-brand-gold transition-all duration-300"
                  autoFocus
                />
              )}
              <button
                id="search-toggle-btn"
                onClick={() => {
                  setShowSearchInput(!showSearchInput);
                  if (showSearchInput) onSearchChange('');
                }}
                className="text-gray-800 dark:text-gray-200 hover:text-brand-gold dark:hover:text-brand-gold p-2 cursor-pointer transition-colors"
                aria-label="Search"
              >
                {showSearchInput ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

            {/* Dark Mode Switcher */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="text-gray-800 dark:text-gray-200 hover:text-brand-gold dark:hover:text-brand-gold p-2 cursor-pointer transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Wishlist Icon with Counter */}
            <button
              id="wishlist-drawer-toggle"
              onClick={onOpenWishlist}
              className="relative text-gray-800 dark:text-gray-200 hover:text-brand-gold dark:hover:text-brand-gold p-2 cursor-pointer transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-[#0B0B0B] animate-pulse">
                  {wishlistItemsCount}
                </span>
              )}
            </button>

            {/* Shop Cart Icon with Counter */}
            <button
              id="cart-drawer-toggle"
              onClick={onOpenCart}
              className="relative text-gray-800 dark:text-gray-200 hover:text-brand-gold dark:hover:text-brand-gold p-2 cursor-pointer transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-[#0B0B0B]">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B0B0B] border-t border-gray-100 dark:border-neutral-900 px-4 pt-2 pb-6 space-y-4 shadow-xl transform origin-top transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-medium text-base text-gray-900 dark:text-gray-100 hover:text-brand-gold dark:hover:text-brand-gold py-2 border-b border-gray-50 dark:border-neutral-900 tracking-wider transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
