import React from 'react';
import { RoosterEmblem } from './Icons';
import { Sun, Heart, Sparkles, Building2, Globe2, Target, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/farmData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#faf7f2] dark:bg-[#1a1816] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-700 dark:text-red-400 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
            Our Identity &amp; Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.14em] text-stone-900 dark:text-stone-100 uppercase">
            ABOUT RACHY FRESH EGGS
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
            Operating under <strong>The Rachy Brand</strong> · Based in Lokoja, Kogi State, Nigeria with nationwide and international supply ambitions.
          </p>
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Imagery Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xs overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80"
                alt="Poultry farm operations and healthy egg layers"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                  Lokoja Strategic Crossroads
                </span>
                <p className="text-sm font-serif italic mt-0.5">
                  Positioned at the confluence of the Niger &amp; Benue rivers to power seamless trade North and South.
                </p>
              </div>
            </div>

            {/* Overlapping small badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 p-4 rounded-xs shadow-xl items-center gap-3 max-w-xs">
              <RoosterEmblem className="w-10 h-10 text-stone-900 dark:text-stone-100 shrink-0" />
              <div>
                <span className="block text-xs font-bold font-serif text-stone-900 dark:text-stone-100">
                  The Rachy Brand
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400 font-serif">
                  Excellence in agribusiness, customer trust, and bulk commercial distribution.
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Freshness You Can Trust, Value You Can Count On
            </h3>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              <strong>Rachy Fresh Eggs</strong> (under The Rachy Brand) was established to solve a critical supply challenge in Nigerian communities: providing access to consistent, freshly collected, unbroken farm eggs at honest, predictable prices.
            </p>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              From our operational base in <strong>Lokoja, Kogi State</strong>, we bridge the gap between poultry production and diverse consumer markets. Whether you need a single crate of Medium eggs for your family breakfast or 200 crates of Jumbo eggs delivered weekly to your bakery or supermarket chain, we guarantee dependable fulfillment.
            </p>

            {/* Target Audience Showcase */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 block mb-2">
                Who We Proudly Serve:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-serif text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Individuals &amp; Households</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Retailers &amp; Provision Stores</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Market Traders &amp; Stalls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Supermarkets &amp; Marts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Restaurants, Eateries &amp; Hotels</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Commercial Bakeries &amp; Caterers</span>
                </div>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 rounded-xs">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-xs font-serif mb-1">
                  <Target className="w-4 h-4 text-red-600" />
                  <span>Strict Quality Grading</span>
                </div>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 font-serif">
                  Every crate strictly contains 30 eggs accurately sized into Small, Medium, or Jumbo crates.
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 rounded-xs">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-xs font-serif mb-1">
                  <Globe2 className="w-4 h-4 text-amber-500" />
                  <span>National Expansion</span>
                </div>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 font-serif">
                  Expanding beyond Kogi State to Abuja, Lagos, and national corridors with long-term export goals.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
