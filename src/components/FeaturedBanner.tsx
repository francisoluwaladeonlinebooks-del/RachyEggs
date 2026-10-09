import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sun, Sparkles } from 'lucide-react';

interface FeaturedBannerProps {
  onReadMore: () => void;
}

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ onReadMore }) => {
  return (
    <section className="w-full bg-[#c91a1a] text-white overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[440px] sm:min-h-[480px]">
        
        {/* Left Half: Fresh Eggs Cracked into Cast Iron Skillet (Exact image from design) */}
        <div className="relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh eggs sizzling in cast iron skillet"
            loading="lazy"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:hidden" />
          
          {/* Subtle farm timestamp tag */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[11px] px-3 py-1 font-serif rounded-xs flex items-center gap-1.5 border border-white/20">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Gathered 5:00 AM Today · Cooked with Pride</span>
          </div>
        </div>

        {/* Right Half: Solid Rich Red Banner with White Typography (Exact mockup reproduction) */}
        <div className="bg-[#c91a1a] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-left relative">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Under The Rachy Brand · Lokoja, Nigeria</span>
            </div>

            {/* Heading matching design image */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-brand tracking-[0.14em] text-white uppercase mb-6 leading-tight">
              RACHY FRESH EGGS
            </h2>

            {/* Paragraph 1 matching mockup */}
            <p className="text-stone-100 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed mb-4 opacity-95">
              Operating under The Rachy Brand, we specialize in the direct supply and commercial distribution of premium fresh eggs across retail and wholesale sectors. Every crate provides 30 hand-selected, high-protein eggs with strong shells and deep golden yolks.
            </p>

            {/* Paragraph 2 matching mockup */}
            <p className="text-stone-100 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed mb-8 opacity-90">
              Headquartered in Lokoja, Kogi State, we serve households, market retailers, supermarkets, hotels, and bakeries with guaranteed on-time delivery and unbeatable commercial terms.
            </p>

            {/* "READ MORE >" button (White capsule button with chevron matching mockup) */}
            <div>
              <button
                onClick={onReadMore}
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 active:bg-stone-200 text-stone-900 font-bold text-xs tracking-[0.16em] uppercase px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                aria-label="Read more about our morning collection timeline and farm story"
              >
                <span>READ MORE</span>
                <ChevronRight className="w-4 h-4 text-[#c91a1a]" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
