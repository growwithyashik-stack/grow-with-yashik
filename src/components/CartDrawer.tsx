import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Tag, ChevronRight, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0); // decimal percentage e.g. 0.20
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [addressSaved, setAddressSaved] = useState(false);

  // Calculate items sum
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  
  // Free shipping over $150
  const freeShippingThreshold = 150;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 15;
  const discountAmount = subtotal * promoDiscount;
  const total = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = promoCode.trim().toUpperCase();
    if (normalized === 'FYTNI20' || normalized === 'VIPCONFIDENCE') {
      setPromoApplied(true);
      setPromoDiscount(0.20);
      setPromoMessage('20% discount applied successfully!');
    } else if (normalized === 'WELCOME10') {
      setPromoApplied(true);
      setPromoDiscount(0.10);
      setPromoMessage('10% new customer coupon applied!');
    } else {
      setPromoApplied(false);
      setPromoDiscount(0);
      setPromoMessage('Invalid voucher code. Try FYTNI20');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutSuccess(true);
  };

  const handleResetCheckout = () => {
    setIsCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Drawer Stage Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#0E0E0E] text-black dark:text-white flex flex-col shadow-2xl border-l dark:border-neutral-900 animate-slideLeft">
          
          {/* Header */}
          <div className="h-20 px-6 border-b border-gray-100 dark:border-neutral-900 flex justify-between items-center bg-gray-50 dark:bg-neutral-950/40">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag size={20} className="text-brand-gold" />
              <h2 className="font-serif text-lg font-black tracking-wider uppercase">YOUR BAG</h2>
              <span className="font-mono text-xs bg-black dark:bg-white text-white dark:text-black py-0.5 px-2 bg-opacity-90 rounded-full font-bold">
                {cartItems.length}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black dark:hover:text-white p-2 rounded-full cursor-pointer transition-colors"
              aria-label="Close Cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Dynamic state container if checkout is successful */}
          {isCheckoutSuccess ? (
            <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col items-center justify-center text-center space-y-6">
              <CheckCircle size={64} className="text-brand-gold animate-bounce" />
              <h3 className="font-serif text-2xl font-black tracking-wider">ORDER RECEIVED!</h3>
              
              <div className="bg-gray-55 dark:bg-neutral-900 p-5 rounded-lg border dark:border-neutral-800 w-full text-left space-y-3 font-sans text-sm">
                <p className="font-bold border-b border-gray-150 dark:border-neutral-850 pb-2 flex justify-between">
                  <span>Tracking Code:</span>
                  <span className="font-mono text-brand-gold uppercase">#FT-{Math.floor(100000 + Math.random() * 900000)}</span>
                </p>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs text-gray-700 dark:text-gray-300">
                    <span className="line-clamp-1">{item.product.title} (x{item.quantity})</span>
                    <span className="font-mono font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="border-t border-gray-150 dark:border-neutral-850 pt-2 text-xs space-y-1">
                  {promoApplied && (
                    <p className="flex justify-between text-green-500">
                      <span>Promo Discount (20%):</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </p>
                  )}
                  <p className="flex justify-between text-gray-500">
                    <span>Shipping:</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost}`}</span>
                  </p>
                  <p className="flex justify-between font-bold text-sm text-black dark:text-white pt-1">
                    <span>Final Total paid:</span>
                    <span className="text-brand-gold">${total.toFixed(2)}</span>
                  </p>
                </div>
              </div>

              <div className="w-full text-xs text-gray-500 flex flex-col space-y-2">
                <p>🚀 High-five! A confirmation receipt has been dispatched. Order will pack in our facility in under 24 hours.</p>
                <p>Free standard courier shipping estimated arrival in 2-3 business days.</p>
              </div>

              <button
                onClick={handleResetCheckout}
                className="w-full bg-black text-white dark:bg-white dark:text-black py-4 font-sans font-bold text-xs tracking-widest uppercase hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-black transition-all"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                
                {/* 1. Free Shipping Progressive Meter */}
                {cartItems.length > 0 && (
                  <div className="bg-gray-50 dark:bg-neutral-900 border dark:border-neutral-850 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between text-xs">
                      {subtotal >= freeShippingThreshold ? (
                        <span className="text-green-600 dark:text-green-400 font-bold">✨ You qualified for FREE WORLDWIDE SHIPPING!</span>
                      ) : (
                        <span>
                          Spend <strong className="font-mono">${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for <strong>FREE SHIPPING</strong>.
                        </span>
                      )}
                      <span className="font-mono font-bold">${subtotal.toFixed(2)}/${freeShippingThreshold}.00</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                        className="bg-brand-gold dark:bg-white h-full transition-all duration-700 ease-out"
                      />
                    </div>
                  </div>
                )}

                {/* 2. Empty Condition state */}
                {cartItems.length === 0 ? (
                  <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag size={48} className="text-gray-300 dark:text-neutral-700 stroke-1" />
                    <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-gray-800 dark:text-gray-200">Bag is empty</h3>
                    <p className="font-sans text-xs text-gray-500 max-w-xs mx-auto">
                      Explore our Men's & Women's trending collections to find your custom confidence statement.
                    </p>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center space-x-1 border border-black dark:border-white py-2 px-6 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                    >
                      <span>BROWSE STORES</span>
                    </button>
                  </div>
                ) : (
                  /* 3. Rendered list */
                  <div className="divide-y divide-gray-100 dark:divide-neutral-900">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex space-x-4 animate-fadeIn">
                        {/* Mini preview thumbnail */}
                        <div className="w-20 aspect-[3/4] bg-gray-50 dark:bg-neutral-900 border dark:border-neutral-850 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Text descriptions */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-sans font-bold text-xs text-gray-900 dark:text-white line-clamp-2 pr-2 tracking-wide uppercase">
                                {item.product.title}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>

                            {/* Applied custom specifications */}
                            <div className="flex flex-wrap gap-2 mt-1 text-[11px] text-gray-500 font-medium">
                              <span className="bg-gray-100 dark:bg-neutral-900 py-0.5 px-2 uppercase rounded">
                                Size: {item.selectedSize}
                              </span>
                              <span className="bg-gray-100 dark:bg-neutral-900 py-0.5 px-2 rounded flex items-center gap-1">
                                Color: 
                                <span
                                  style={{ backgroundColor: item.selectedColor }}
                                  className="w-2.5 h-2.5 rounded-full inline-block border dark:border-neutral-600"
                                />
                              </span>
                            </div>
                          </div>

                          {/* Dynamic cost calculating and quantities */}
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border border-gray-200 dark:border-neutral-850 bg-gray-50 dark:bg-neutral-950 rounded p-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 px-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                              >
                                <Minus size={11} />
                              </button>
                              <span className="font-mono text-xs font-bold w-6 text-center text-gray-900 dark:text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 px-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                              >
                                <Plus size={11} />
                              </button>
                            </div>

                            <span className="font-mono text-sm font-bold text-gray-950 dark:text-gray-50">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Cost Footer summary panel */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-150 dark:border-neutral-900 bg-gray-50 dark:bg-neutral-950/60 p-6 space-y-4">
                  {/* Coupon entry field */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag size={13} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        id="promo-code-input"
                        type="text"
                        placeholder="PROMO CODE (e.g. FYTNI20)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-gray-200 dark:border-neutral-850 bg-white dark:bg-neutral-900 text-xs focus:outline-none focus:border-black dark:focus:border-brand-gold rounded font-mono uppercase"
                      />
                    </div>
                    <button
                      id="promo-code-apply-btn"
                      type="submit"
                      className="bg-black text-white dark:bg-white dark:text-black px-4 text-xs font-bold uppercase hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-black tracking-wider transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {promoMessage && (
                    <p className={`text-[11px] font-semibold ${promoApplied ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                      {promoMessage}
                    </p>
                  )}

                  {/* Calculations Details column */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600 dark:text-gray-450">
                      <span>Subtotal</span>
                      <span className="font-mono font-semibold text-black dark:text-white">${subtotal.toFixed(2)}</span>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between text-green-600 dark:text-green-400">
                        <span>Voucher Promo Applied</span>
                        <span className="font-mono font-semibold">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-600 dark:text-gray-450">
                      <span>Dynamic Standard Shipping</span>
                      <span className="font-mono font-semibold text-black dark:text-white">
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 dark:border-neutral-850 pt-2 flex justify-between font-extrabold text-base text-gray-900 dark:text-white">
                      <span>Total Invoice</span>
                      <span className="font-mono text-brand-gold">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Express Checkout Trigger button */}
                  <button
                    id="checkout-trigger-btn"
                    onClick={handleCheckout}
                    className="w-full bg-black text-white dark:bg-white dark:text-black py-4 font-sans font-extrabold text-xs uppercase tracking-[0.2em] hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-black hover:text-black shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>PLACE ORDER SECURELY</span>
                    <ChevronRight size={14} />
                  </button>

                  <p className="text-[10px] text-center text-gray-400">
                    🔒 SSL Encrypted processing. Complete 30-day money back guarantee.
                  </p>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
