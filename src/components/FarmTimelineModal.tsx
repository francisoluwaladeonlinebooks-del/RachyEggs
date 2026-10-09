import React from 'react';
import { X, Clock, Sun, Sparkles, CheckCircle2 } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/farmData';

interface FarmTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export const FarmTimelineModal: React.FC<FarmTimelineModalProps> = ({
  isOpen,
  onClose,
  onOrderNow
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-2xl w-full p-6 sm:p-8 rounded-xs shadow-2xl relative text-stone-900 dark:text-stone-100 my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-stone-200 dark:border-stone-800 pb-4 mb-6">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Sun className="w-4 h-4 text-amber-500" />
            <span>Rachy Fresh Eggs · The Rachy Brand Operations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif">
            The Daily Farm Collection &amp; Dispatch Journey
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-serif mt-1">
            How we collect, grade, and deliver 30-egg crates across Lokoja before midday.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-stone-200 dark:before:bg-stone-800">
          {TIMELINE_EVENTS.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-5 pl-8">
              <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-red-600 border-2 border-white dark:border-stone-900" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-red-700 dark:text-red-400 bg-red-50 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {item.time}
                  </span>
                  <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Freshness Gastronomy Callout */}
        <div className="mt-8 p-4 bg-amber-50 dark:bg-stone-900 rounded-xs border border-amber-200 dark:border-stone-800 text-xs font-serif space-y-2">
          <h5 className="font-bold text-stone-900 dark:text-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" /> Why Freshness Matters in Nigeria:
          </h5>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            In warm tropical climates, eggs left sitting in poorly ventilated market stalls quickly lose moisture, causing yolk sacs to rupture and egg whites to turn watery. Rachy Fresh Eggs collects at dawn and stores eggs in shaded, temperature-managed rooms before dispatch—ensuring deep golden yolks, firm whites, and prolonged kitchen shelf-life.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOrderNow();
            }}
            className="flex-1 py-3 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md cursor-pointer"
          >
            Order Fresh Crates Now
          </button>
          <button
            onClick={onClose}
            className="py-3 px-6 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            Back to Site
          </button>
        </div>
      </div>
    </div>
  );
};
