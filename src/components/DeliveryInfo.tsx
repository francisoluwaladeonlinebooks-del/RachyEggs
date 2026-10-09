import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  Navigation,
  Globe2
} from 'lucide-react';
import { DELIVERY_ZONES, BUSINESS_INFO } from '../data/farmData';

export const DeliveryInfo: React.FC = () => {
  return (
    <section id="delivery" className="w-full bg-[#f8f4eb] dark:bg-[#181614] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-700 dark:text-red-400 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
            Logistics &amp; Fulfillment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.14em] text-stone-900 dark:text-stone-100 uppercase">
            DELIVERY INFORMATION
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
            Headquartered in Lokoja, Kogi State with structured logistics serving households, local commercial outlets, and national trade corridors.
          </p>
        </div>

        {/* 3 Delivery Corridors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {DELIVERY_ZONES.map((zone, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xs shadow-xs text-left"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400 block mb-1">
                {zone.coverage}
              </span>
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
                {zone.zone}
              </h3>

              <div className="space-y-3 text-xs text-stone-600 dark:text-stone-400 font-serif mb-4">
                <div>
                  <strong className="block text-stone-900 dark:text-stone-200">Key Coverage Areas:</strong>
                  <span>{zone.areas}</span>
                </div>
                <div>
                  <strong className="block text-stone-900 dark:text-stone-200">Delivery Timing:</strong>
                  <span>{zone.timing}</span>
                </div>
                <div>
                  <strong className="block text-stone-900 dark:text-stone-200">Delivery Rate:</strong>
                  <span className="text-red-700 dark:text-red-400 font-bold">{zone.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Crate Handling & Zero Breakage Policy */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-xs shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>The Rachy Brand Zero-Crack Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-3">
                How We Protect Every Single Egg In Transit
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-4">
                Fresh eggs are delicate living cargo. At Rachy Fresh Eggs, all 30-egg crates are packed in heavy-gauge pressed pulp trays designed with individual shock pockets. In the rare event of transit damage, we provide immediate crate replacement or cash credit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30 Eggs per heavy-duty crate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strapped stacking for transit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Same-day Lokoja dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Waybill tracking for interstate bulk</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#faf7f2] dark:bg-stone-800/80 rounded-xs border border-stone-300 dark:border-stone-700 space-y-4">
              <h4 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                Daily Delivery Schedule Windows
              </h4>
              <div className="space-y-3 text-xs font-serif text-stone-700 dark:text-stone-300">
                <div className="flex items-start gap-2.5 pb-2 border-b border-stone-200 dark:border-stone-700">
                  <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Morning Shift (07:00 AM – 11:30 AM):</strong>
                    <p className="text-[11px] text-stone-500">Ideal for bakeries, breakfast canteens, provision stores, and supermarkets restocking for morning trade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-2 border-b border-stone-200 dark:border-stone-700">
                  <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Afternoon Shift (01:00 PM – 05:30 PM):</strong>
                    <p className="text-[11px] text-stone-500">Scheduled drops for restaurants, evening Shawarma vendors, households, and weekend bulk restocks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Interstate Truckloads (By Pre-Booking):</strong>
                    <p className="text-[11px] text-stone-500">Departs Lokoja junction hubs to Abuja, Lagos, Benin, and Minna for commercial distributors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
