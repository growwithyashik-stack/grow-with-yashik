import React, { useState, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, Grid, Archive, Search, Heart, ShoppingBag, X } from 'lucide-react';

// Data and types imports
import { Product, CartItem } from './types';
import { PRODUCTS } from './data';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import MissionVision from './components/MissionVision';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';

export default function App() {
  // --- Core States ---
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('fytni_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('fytni_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('fytni_theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'men' | 'women'>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [activeFilterStatus, setActiveFilterStatus] = useState<'all' | 'new' | 'best'>('all');

  // Drawer management
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // App-level feedback toast
  const [toastMessage, setToastMessage] = useState('');

  // --- Effects ---
  // Sync core elements with local storage
  useEffect(() => {
    localStorage.setItem('fytni_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('fytni_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Synchronize CSS Dark Mode state classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('fytni_theme', theme);
  }, [theme]);

  // Toast notifier trigger
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // --- Theme Toggle ---
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // --- Cart Actions ---
  const handleAddToCart = (product: Product, size: string, color: string, quantity = 1) => {
    setCart((prevCart) => {
      // Create a unique Cartesian key for combination: ID + Size + Color
      const combinationId = `${product.id}-${size}-${color}`;
      const existing = prevCart.find((item) => item.id === combinationId);

      if (existing) {
        triggerToast(`Added another ${product.title} to your bag!`);
        return prevCart.map((item) =>
          item.id === combinationId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      triggerToast(`Added ${product.title} to your bag!`);
      return [
        ...prevCart,
        {
          id: combinationId,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity,
        },
      ];
    });
  };

  const handleUpdateQuantity = (combinationId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(combinationId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === combinationId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (combinationId: string) => {
    setCart((prevCart) => {
      const match = prevCart.find((item) => item.id === combinationId);
      if (match) {
        triggerToast(`Removed ${match.product.title} from bag.`);
      }
      return prevCart.filter((item) => item.id !== combinationId);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // --- Wishlist Actions ---
  const handleToggleWishlist = (product: Product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);

    if (isWishlisted) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      triggerToast(`Removed ${product.title} from wishlist.`);
    } else {
      setWishlist((prev) => [...prev, product]);
      triggerToast(`Saved ${product.title} to wishlist!`);
    }
  };

  // --- Scroll & Navigation Actions ---
  const handleScrollToCollection = (category: 'men' | 'women' | 'all') => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
    setActiveFilterStatus('all');

    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Dynamic Filtering Logic ---
  // Subcategories specific to current selected category
  const menSubcategories = ['T-Shirts', 'Oversized Tees', 'Hoodies', 'Shirts', 'Joggers'];
  const womenSubcategories = ['Tops', 'Dresses', 'Co-ords', 'Casual Wear', 'Fashion Essentials'];

  const availableSubcategories =
    selectedCategory === 'men'
      ? menSubcategories
      : selectedCategory === 'women'
      ? womenSubcategories
      : [...new Set([...menSubcategories, ...womenSubcategories])];

  // Filtering Products array
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Search Query mapping
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(query);
      const matchSub = product.subcategory.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      if (!matchTitle && !matchSub && !matchDesc) return false;
    }

    // 2. Main Category Filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // 3. Subcategory Filter
    if (selectedSubcategory !== 'all' && product.subcategory !== selectedSubcategory) {
      return false;
    }

    // 4. Status Filter (New Arrivals vs Best Sellers)
    if (activeFilterStatus === 'new' && !product.isNew) {
      return false;
    }
    if (activeFilterStatus === 'best' && !product.isBest) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#080808] text-black dark:text-white font-sans transition-colors duration-300 relative">
      
      {/* 1. Global Floating Active Feedbacks Toast bar */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-black text-white dark:bg-white dark:text-black py-3.5 px-6 rounded-lg shadow-2xl flex items-center space-x-3 border dark:border-neutral-850 animate-slideUp font-sans text-xs font-bold uppercase tracking-wider">
          <Sparkles size={14} className="text-brand-gold animate-spin" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage('')} className="ml-2 hover:text-brand-gold">
            <X size={14} />
          </button>
        </div>
      )}

      {/* 2. Responsive Header Navigation bar */}
      <Navbar
        cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistItemsCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() !== '') {
            // Auto scroll down to collections when searching so user can see live results!
            const el = document.getElementById('collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        theme={theme}
        toggleTheme={handleToggleTheme}
      />

      {/* 3. Hero Visual Section */}
      <Hero onScrollToCollection={handleScrollToCollection} />

      {/* 4. About Brand Section */}
      <AboutSection />

      {/* 5. Features Section */}
      <Features />

      {/* 6. Main Interactive Stores / Collections catalog section */}
      <section id="collections" className="py-8 bg-[#f9f9f9] dark:bg-[#080808] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Bento Grid catalog box */}
          <div className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 shadow-sm">
            
            {/* Header Title alignment */}
            <div className="text-center space-y-3 mb-12">
              <span className="font-mono text-xs text-brand-gold font-bold tracking-[0.25em] uppercase">
                THE FYTNI SHOWROOM
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight uppercase">
                Explore Our Collections
              </h2>
              <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-lg mx-auto font-light">
                Filter through pristine garments to find exactly what speaks your styling. Click on any card for detailed fabric compositions.
              </p>
              <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
            </div>

          {/* Catalog Operations bar (Toggles, Category, Status) */}
          <div className="space-y-6 mb-12 border-b border-gray-100 dark:border-neutral-900 pb-8">
            
            {/* Primary Category Filters row */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              
              <div className="flex bg-gray-50 dark:bg-neutral-950 p-1 rounded-lg border dark:border-neutral-850">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                  }}
                  className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all rounded-md ${
                    selectedCategory === 'all'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-gray-550 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  All Wardrobe
                </button>
                <button
                  id="filter-category-men"
                  onClick={() => {
                    setSelectedCategory('men');
                    setSelectedSubcategory('all');
                  }}
                  className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all rounded-md ${
                    selectedCategory === 'men'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-gray-550 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Men's Collection
                </button>
                <button
                  id="filter-category-women"
                  onClick={() => {
                    setSelectedCategory('women');
                    setSelectedSubcategory('all');
                  }}
                  className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all rounded-md ${
                    selectedCategory === 'women'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-gray-550 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Women's Collection
                </button>
              </div>

              {/* Status Filter pill badges */}
              <div className="flex items-center space-x-2.5">
                <button
                  id="filter-status-all"
                  onClick={() => setActiveFilterStatus('all')}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-all rounded-full ${
                    activeFilterStatus === 'all'
                      ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                      : 'border-gray-200 dark:border-neutral-850 text-gray-550 dark:text-neutral-400 hover:border-black dark:hover:border-white'
                  }`}
                >
                  Show All Items
                </button>
                <button
                  id="filter-status-new"
                  onClick={() => setActiveFilterStatus('new')}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-all rounded-full ${
                    activeFilterStatus === 'new'
                      ? 'border-brand-gold bg-brand-gold/10 text-[#d4af37]'
                      : 'border-gray-200 dark:border-neutral-850 text-gray-550 dark:text-neutral-400 hover:border-brand-gold'
                  }`}
                >
                  ★ New Arrivals
                </button>
                <button
                  id="filter-status-best"
                  onClick={() => setActiveFilterStatus('best')}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-all rounded-full ${
                    activeFilterStatus === 'best'
                      ? 'border-black bg-gray-50 text-black dark:border-white dark:text-white dark:bg-neutral-900'
                      : 'border-gray-200 dark:border-neutral-850 text-gray-550 dark:text-neutral-400 hover:border-black dark:hover:border-white'
                  }`}
                >
                  🔥 Best Sellers
                </button>
              </div>
            </div>

            {/* Subcategory Tags list section */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-1 flex-shrink-0">
                <SlidersHorizontal size={13} />
                Sub-Type:
              </span>
              
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedSubcategory === 'all'
                    ? 'bg-brand-gold text-black'
                    : 'bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800'
                }`}
              >
                All Sub-Types
              </button>

              {availableSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors flex-shrink-0 ${
                    selectedSubcategory === sub
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

          </div>

          {/* 7. Active Filtering Information / Results Count placeholder */}
          <div className="flex justify-between items-center mb-6 text-xs text-gray-500 font-mono">
            <div>
              Active View Filters:{' '}
              <span className="font-bold text-black dark:text-white uppercase">
                {selectedCategory} / {selectedSubcategory} / Tag: {activeFilterStatus}
              </span>
            </div>
            <div>
              Showing <span className="font-bold text-black dark:text-white">{filteredProducts.length}</span> luxury designs
            </div>
          </div>

          {/* Condition: if results are 0 */}
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-gray-205 dark:border-neutral-800 rounded-xl space-y-4 max-w-md mx-auto">
              <Archive size={40} className="mx-auto text-gray-300 dark:text-neutral-700" />
              <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">No products match</h3>
              <p className="font-sans text-xs text-gray-500 px-6 font-light">
                We couldn't locate any clothes corresponding to those precise filters. Reset values to explore our standard catalogue elements.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setActiveFilterStatus('all');
                }}
                className="bg-black hover:bg-brand-gold hover:text-black text-white dark:bg-white dark:text-black dark:hover:bg-brand-gold py-2 px-6 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            /* Main dynamic Products grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedQuickViewProduct(p)}
                  onAddToCart={(p, sz, cl) => handleAddToCart(p, sz, cl)}
                  onToggleWishlist={handleToggleWishlist}
                  isWishlisted={wishlist.some((item) => item.id === product.id)}
                />
              ))}
            </div>
          )}

          </div>
        </div>
      </section>

      {/* 8. Why Choose FYTNI block */}
      <WhyChoose />

      {/* 9. Mission & Vision splits block */}
      <MissionVision />

      {/* 10. Testimonials block */}
      <Testimonials />

      {/* 11. Interactive Newsletter subscription form */}
      <Newsletter />

      {/* 12. Complete luxury branding Footer section styling */}
      <Footer />

      {/* --- DRAWERS AND OVERLAYS --- */}
      
      {/* Dynamic Products specifications overview overlay */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedQuickViewProduct ? wishlist.some((item) => item.id === selectedQuickViewProduct.id) : false}
      />

      {/* Shopping Cart Drawer slide out overlay */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist drawer slide out overlay */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onQuickView={(p) => {
          setSelectedQuickViewProduct(p);
          setWishlistOpen(false); // Close drawer to highlight visual specifications stage
        }}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
