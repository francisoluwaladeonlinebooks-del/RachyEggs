import React from 'react';
import { motion } from 'motion/react';
import { QualitySealBadge } from './Icons';
import { ShieldCheck, Award, Heart, CheckCircle2, Search, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/farmData';

interface QualityStandardsProps {
  onOpenTraceability: () => void;
}

export const QualityStandards: React.FC<QualityStandardsProps> = ({ onOpenTraceability }) => {
  const standards = [
    {
      title: 'Healthy Layer Nutrition & Purity',
      desc: 'Our layers are fed nutrient-fortified grains rich in essential calcium, amino acids, and plant proteins to guarantee hard, crack-resistant shells.',
      icon: Heart,
    },
    {
      title: 'Precision Size Grading',
      desc: 'Eggs are strictly weighed and sorted into Small (₦5,500), Medium (₦6,500), and Jumbo (₦8,000) crates. Uniformity in every 30-egg tray.',
      icon: Award,
    },
    {
      title: 'Dawn Farm Collection in Lokoja',
      desc: 'Harvested early in the morning before tropical sun heat can degrade albumen viscosity, locking in natural freshness and rich golden yolks.',
      icon: ShieldCheck,
    },
    {
      title: 'Zero-Crack Transportation Guarantee',
      desc: 'Nested in shock-absorbing molded pulp trays. If any eggs arrive broken on our delivery run, we provide instant crate replacement.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="quality" className="w-full bg-[#fbf8f1] dark:bg-[#151312] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-red-700 dark:text-red-400 text-xs font-bold tracking-[0.2em] uppercase">
              The Rachy Brand Standard
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.16em] text-stone-900 dark:text-stone-100 uppercase">
            A GUARANTEE OF QUALITY
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
            From sunrise gathering in Lokoja to stringent 30-egg crate inspection, Rachy Fresh Eggs delivers superior protein and unmatched culinary performance.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Seal & Quality Statement */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-8 bg-[#f5ede0] dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-xs shadow-inner">
            <QualitySealBadge className="w-40 h-40 sm:w-48 sm:h-48 text-stone-900 dark:text-stone-100 mb-6" />
            <h3 className="text-lg font-bold font-brand tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-2">
              THE RACHY BRAND PROMISE
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif leading-relaxed mb-6 max-w-sm">
              &quot;We are committed to providing Nigerian homes, market retailers, supermarkets, and commercial bakeries with the freshest, most dependable eggs at fair prices.&quot;
            </p>
            <span className="text-[11px] font-bold tracking-widest uppercase text-stone-800 dark:text-stone-300">
              — Management, The Rachy Brand
            </span>
          </div>

          {/* Right 4 Standard Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/80 rounded-xs text-left shadow-xs hover:border-red-600/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-serif">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Traceability / Batch Callout Box */}
        <div className="bg-[#221f1d] dark:bg-[#0f0e0d] text-white p-6 sm:p-8 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-stone-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Crate Traceability &amp; Verification</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-brand tracking-wider">
              Verify Your Rachy Fresh Eggs Crate Batch
            </h4>
            <p className="text-xs text-stone-400 max-w-xl font-serif mt-1">
              Every wholesale dispatch is stamped with a dispatch lot code (e.g., <code className="text-amber-300">RFE-LKJ-01</code>). Verify collection date and layer health standards online.
            </p>
          </div>

          <button
            onClick={onOpenTraceability}
            className="shrink-0 px-6 py-3 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            Verify Crate Batch
          </button>
        </div>

      </div>
    </section>
  );
};
