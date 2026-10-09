import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Check } from 'lucide-react';
import { RoosterEmblem } from './Icons';
import { Product } from '../types';

interface OurProductsProps {
  products: Product[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onQuickView: (product: Product) => void;
  searchFilter?: string;
}

export const OurProducts: React.FC<OurProductsProps> = ({
  products,
  onAddToCart,
  onQuickView,
  searchFilter = ''
}) => {
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Filter based on search query
  const filteredProducts = products.filter((p) => {
    const matchesSearch = searchFilter === '' || 
      p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.size.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesSearch;
  });

  const handleOrderNow = (product: Product) => {
    onAddToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section 
      id="products" 
      className="w-full bg-[#faf7f2] dark:bg-[#181614] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors duration-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Chicken Icon & Title (Exact mockup layout) */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <RoosterEmblem className="w-8 h-8 text-stone-800 dark:text-stone-200 mb-2 opacity-90" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.16em] text-stone-900 dark:text-stone-100 uppercase">
            OUR PRODUCTS
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mb-4" />
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-xl font-serif">
            All eggs are sold in standardized crates containing <strong>30 fresh eggs per crate</strong>. Carefully graded by size and shell density to ensure optimal quality for households, retailers, and bakeries.
          </p>

          {/* Category kicker */}
          <div className="mt-2 text-xs font-semibold text-amber-700 dark:text-amber-400 tracking-wider uppercase font-sans">
            Category: Fresh Eggs · Available for Retail &amp; Wholesale Supply
          </div>
        </div>

        {/* Products Grid (Showcasing Small ₦5,500, Medium ₦6,500, Jumbo ₦8,000) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-stone-500">
            No egg crate sizes match your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
            {filteredProducts.map((product, idx) => {
              const isAdded = addedProductId === product.id;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group relative p-6 bg-white/70 dark:bg-stone-900/60 rounded-xs border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  {/* Circular Product Container (Exact visual from design mockup) */}
                  <div className="relative mb-5">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-2 border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm group-hover:shadow-md transition-all duration-300 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-108"
                      />

                      {/* Quick View Hover Button */}
                      <button
                        onClick={() => onQuickView(product)}
                        className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-200 rounded-full cursor-pointer"
                        aria-label={`Quick view details for ${product.name}`}
                      >
                        <span className="bg-white/90 text-stone-900 text-[11px] font-bold px-3 py-1 rounded shadow-md flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          View Crate Specs
                        </span>
                      </button>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute -top-1 right-2 text-[10px] uppercase font-bold tracking-widest text-red-700 dark:text-red-400 bg-amber-100 dark:bg-stone-800 px-2 py-0.5 rounded border border-amber-300 dark:border-stone-600 shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mb-1">
                    {product.name}
                  </h3>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 font-semibold mb-2">
                    <span>Size: {product.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.quantityPerCrate}</span>
                  </div>

                  {/* Description subtitle */}
                  <p className="text-[12px] sm:text-[13px] text-stone-500 dark:text-stone-400 leading-snug max-w-[240px] mb-5 font-serif">
                    {product.subtitle}
                  </p>

                  {/* Action Row: Red "ORDER NOW" button + "₦Price" (Matching exact layout from mockup) */}
                  <div className="flex items-center justify-center gap-3 mt-auto w-full pt-2 border-t border-stone-200/60 dark:border-stone-800/60">
                    <button
                      onClick={() => handleOrderNow(product)}
                      className={`text-[11px] font-bold tracking-widest uppercase px-4 py-2 shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white transform hover:-translate-y-0.5'
                      }`}
                      aria-label={`Order ${product.name} for ₦${product.price.toLocaleString()}`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          ADDED!
                        </>
                      ) : (
                        'ORDER NOW'
                      )}
                    </button>

                    {/* Price in clean black serif font matching image */}
                    <span className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <span className="text-[10px] text-stone-400 dark:text-stone-500 mt-2 font-sans">
                    Per Crate (30 Eggs) · Wholesale discounts on 10+ crates
                  </span>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
