import React, { useState } from 'react';
import { X, Check, ShoppingBag, Star, PackageCheck, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-2xl w-full p-6 sm:p-8 rounded-xs shadow-2xl relative text-stone-900 dark:text-stone-100 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Round product photo matching image */}
          <div className="flex flex-col items-center">
            <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full p-2.5 border-2 border-stone-200 dark:border-stone-700 bg-[#fbf8f1] dark:bg-stone-800 shadow-md overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center mt-3">
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase font-sans">
                Size Available: {product.size}
              </span>
              <span className="text-[10px] text-stone-500 font-serif block">
                Standard Molded Pulp Crate · 30 Eggs
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="text-left space-y-3">
            <div className="flex items-center gap-1.5 text-amber-500 text-xs">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold text-stone-900 dark:text-stone-100">{product.rating}</span>
              <span className="text-stone-500 font-serif">({product.reviewCount} verified reviews)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <PackageCheck className="w-4 h-4" />
              <span>Category: {product.category} · 30 Eggs / Crate</span>
            </div>

            <div className="text-2xl font-bold font-serif text-[#c91a1a]">
              ₦{product.price.toLocaleString()} <span className="text-xs text-stone-500 font-normal">/ crate</span>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              {product.description}
            </p>

            <div className="p-2.5 bg-amber-50/70 dark:bg-stone-800/80 rounded-xs border border-amber-200/80 dark:border-stone-700 text-[11px] font-serif">
              <strong>Recommended for:</strong> {product.bestFor}
            </div>

            {/* Nutrition panel */}
            <div className="p-3 bg-[#faf7f2] dark:bg-stone-800/60 rounded-xs border border-stone-200 dark:border-stone-700/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Nutritional Quality Profile
              </span>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-serif">
                <div>
                  <strong className="block text-stone-900 dark:text-stone-100">{product.nutrition.protein}</strong>
                  <span className="text-stone-500 text-[10px]">Protein</span>
                </div>
                <div>
                  <strong className="block text-stone-900 dark:text-stone-100">{product.nutrition.choline}</strong>
                  <span className="text-stone-500 text-[10px]">Choline</span>
                </div>
                <div>
                  <strong className="block text-stone-900 dark:text-stone-100">{product.nutrition.omega3}</strong>
                  <span className="text-stone-500 text-[10px]">Omega-3</span>
                </div>
                <div>
                  <strong className="block text-stone-900 dark:text-stone-100">{product.nutrition.vitaminD}</strong>
                  <span className="text-stone-500 text-[10px]">Vitamin D</span>
                </div>
              </div>
            </div>

            {/* Quantity and Order */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center border border-stone-300 dark:border-stone-700 rounded-xs bg-white dark:bg-stone-800">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-xs hover:bg-stone-100 dark:hover:bg-stone-700"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold">{qty} {qty === 1 ? 'crate' : 'crates'}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-xs hover:bg-stone-100 dark:hover:bg-stone-700"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  added ? 'bg-emerald-600' : 'bg-[#c91a1a] hover:bg-red-700'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Basket!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add Crates to Basket
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
