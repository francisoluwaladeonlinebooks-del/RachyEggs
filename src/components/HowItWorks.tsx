import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  SelectStampIcon, 
  ScheduleStampIcon, 
  DeliveredStampIcon 
} from './Icons';
import { EDITORIAL_CARDS } from '../data/farmData';
import { BookOpen, X, ChefHat, Clock, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof EDITORIAL_CARDS[0] | null>(null);

  return (
    <section 
      id="how-it-works"
      className="w-full bg-[#fbf8f1] dark:bg-[#1c1a17] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Decorative vintage border line */}
      <div className="max-w-xs mx-auto flex items-center justify-center gap-3 mb-6">
        <div className="h-[1px] bg-stone-300 dark:bg-stone-700 flex-1" />
        <span className="text-stone-400 dark:text-stone-500 text-xs">✦ ✦ ✦</span>
        <div className="h-[1px] bg-stone-300 dark:bg-stone-700 flex-1" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading matching design image */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.16em] text-stone-900 dark:text-stone-100 uppercase mb-4"
        >
          HOW IT WORKS
        </motion.h2>

        {/* Descriptive paragraph directly matching mockup */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          Rachy Fresh Eggs operates a seamless farm-to-door distribution system across Lokoja and regional trade routes. From daily dawn gathering to precision weight grading into 30-egg crates, we ensure families, provision stores, supermarkets, and commercial caterers receive peak nutritional freshness with zero breakage.
        </motion.p>

        {/* 3 Step Columns with vintage emblems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 mb-16 sm:mb-20">
          
          {/* Step 1: SELECT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-4 transform transition-transform group-hover:scale-105 duration-300">
              <SelectStampIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-2">
              SELECT
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-[13px] leading-relaxed max-w-xs font-serif">
              Select your crate size: Small (₦5,500), Medium (₦6,500), or Jumbo (₦8,000). Every crate contains 30 freshly gathered farm eggs in heavy-duty molded trays.
            </p>
          </motion.div>

          {/* Step 2: SCHEDULE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-4 transform transition-transform group-hover:scale-105 duration-300">
              <ScheduleStampIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-2">
              SCHEDULE
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-[13px] leading-relaxed max-w-xs font-serif">
              Schedule immediate same-day Lokoja doorstep delivery, or book a recurring wholesale schedule for your bakery, hotel, or retail provision store.
            </p>
          </motion.div>

          {/* Step 3: DELIVERED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-4 transform transition-transform group-hover:scale-105 duration-300">
              <DeliveredStampIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-2">
              DELIVERED
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-[13px] leading-relaxed max-w-xs font-serif">
              Transported in padded carriers with our Zero-Crack Guarantee directly to your shop, restaurant, or home kitchen across Kogi State and interstate routes.
            </p>
          </motion.div>

        </div>

        {/* Two Editorial Cards (Matching the two photos in the mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {EDITORIAL_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              onClick={() => setSelectedArticle(card)}
              className="group relative overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
            >
              {/* Photo Frame */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-200 dark:bg-stone-800">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
                    {card.category}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-serif leading-snug drop-shadow-sm">
                    {card.title}
                  </h4>
                  <p className="text-xs text-stone-200 line-clamp-1 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="p-4 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {card.readTime}
                </span>
                <span className="font-semibold text-red-700 dark:text-red-400 group-hover:underline flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Story & Recipe
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Recipe / Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-800 dark:hover:text-stone-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-semibold tracking-wider uppercase mb-1">
              <ChefHat className="w-4 h-4" />
              <span>{selectedArticle.category}</span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
              {selectedArticle.title}
            </h3>
            <p className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-4">
              {selectedArticle.subtitle} · Shields Poultry Farm Kitchen Notes
            </p>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-48 object-cover mb-4 rounded-xs border border-stone-200 dark:border-stone-800"
            />

            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
              {selectedArticle.description}
            </p>

            <div className="bg-amber-50 dark:bg-stone-800/60 p-3 rounded-xs border-l-4 border-amber-600 mb-5 text-xs text-stone-700 dark:text-stone-300">
              <span className="font-bold flex items-center gap-1 text-stone-900 dark:text-amber-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Farm Fresh Kitchen Rule:
              </span>
              Freshly collected eggs (under 72 hours old) contain thick albumen that cushions the yolk. When whipping whites for soufflés or meringues, bring eggs to room temperature for 20 minutes before separating.
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Close Story
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
