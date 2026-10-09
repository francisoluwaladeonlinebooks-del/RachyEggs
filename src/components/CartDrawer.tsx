import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  appliedPromo: string | null;
  onApplyPromo: (code: string) => { success: boolean; message: string };
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedPromo,
  onApplyPromo,
}) => {
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 25 || subtotal === 0 ? 0 : 3.50;
  const total = Math.max(0, subtotal - discount + shipping);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCodeInput.trim()) return;
    const res = onApplyPromo(promoCodeInput.trim());
    setPromoFeedback(res.message);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-[#181614] h-full shadow-2xl flex flex-col text-stone-900 dark:text-stone-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-[#faf7f2] dark:bg-[#1f1d1a]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            <h3 className="text-base font-bold font-serif tracking-wider uppercase">
              Your Farm Basket ({cartItems.reduce((c, i) => c + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-5 py-2.5 bg-amber-50 dark:bg-stone-900 border-b border-amber-200/50 dark:border-stone-800 text-[11px] text-stone-700 dark:text-stone-300">
          {cartItems.reduce((c, i) => c + i.quantity, 0) >= 5 ? (
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              ✓ Free Lokoja Metro Doorstep Delivery unlocked (5+ Crates)!
            </span>
          ) : (
            <span>
              Add <strong className="text-red-700 dark:text-red-400">{5 - cartItems.reduce((c, i) => c + i.quantity, 0)} more crates</strong> for free Lokoja doorstep delivery.
            </span>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-400 mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg text-stone-700 dark:text-stone-300">
                Your egg crate basket is empty
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto font-serif">
                Select Small (₦5,500), Medium (₦6,500), or Jumbo (₦8,000) crates to schedule supply.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#c91a1a] text-white text-xs font-bold uppercase tracking-widest rounded-xs"
              >
                Browse Our Egg Crates
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3.5 p-3 rounded-xs border border-stone-200 dark:border-stone-800 bg-[#fdfbf7] dark:bg-stone-900/60"
              >
                {/* Thumb */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-full object-cover border border-stone-200 dark:border-stone-700 shrink-0 self-center"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs font-bold font-serif text-stone-900 dark:text-stone-100 truncate">
                      {item.product.name}
                    </h5>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-[10px] text-amber-700 dark:text-amber-400 block font-sans font-semibold">
                    Size: {item.product.size} · 30 eggs per crate
                  </span>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-800">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold font-sans">
                        {item.quantity} {item.quantity === 1 ? 'crate' : 'crates'}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold font-serif text-stone-900 dark:text-stone-100">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Calculations */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-[#faf7f2] dark:bg-[#1a1816] space-y-3">
            {/* Promo code bar */}
            <form onSubmit={handlePromoSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Promo code (e.g. RACHY10)"
                  value={promoCodeInput}
                  onChange={(e) => setPromoCodeInput(e.target.value)}
                  className="w-full pl-7 pr-2 py-1.5 text-xs uppercase bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm"
                />
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2 top-2" />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 text-xs font-bold bg-stone-800 dark:bg-stone-700 text-white rounded-sm hover:bg-stone-900"
              >
                Apply
              </button>
            </form>
            {promoFeedback && (
              <p className="text-[11px] text-amber-700 dark:text-amber-400">{promoFeedback}</p>
            )}

            {/* Calculations */}
            <div className="space-y-1 text-xs text-stone-600 dark:text-stone-400 font-serif">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.reduce((c, i) => c + i.quantity, 0)} Crates)</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Farm Promo (10%)</span>
                  <span>-₦{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Lokoja Dispatch Delivery</span>
                <span>{shipping === 0 ? 'FREE' : `₦${(shipping * 300).toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold font-serif text-stone-900 dark:text-stone-100 pt-1 border-t border-stone-200 dark:border-stone-800">
                <span>Total Amount Due</span>
                <span>₦{(subtotal - discount + (shipping === 0 ? 0 : 1000)).toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onProceedToCheckout}
              className="w-full py-3 bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Delivery Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 dark:text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>30 Eggs/Crate · Zero-Crack Guarantee · Pay on Delivery / Bank Transfer</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
