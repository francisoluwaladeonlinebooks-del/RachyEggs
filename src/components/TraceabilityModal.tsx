import React, { useState } from 'react';
import { X, Search, ShieldCheck, CheckCircle2, Clock, MapPin, Feather, Heart } from 'lucide-react';

interface TraceabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TraceabilityModal: React.FC<TraceabilityModalProps> = ({ isOpen, onClose }) => {
  const [lotCode, setLotCode] = useState('RFE-LKJ-01');
  const [result, setResult] = useState<any>({
    code: 'RFE-LKJ-01',
    gatherDate: 'Gathered Today at 05:30 AM',
    flock: 'Golden Layer Flock Alpha (Under The Rachy Brand)',
    pastureZone: 'Lokoja Commercial Farm Hub (Kogi State)',
    crateStandard: '30 Fresh Eggs per Molded Pulp Crate',
    feedPurity: 'Calcium & Protein Fortified Maize & Soy Grains',
    airCellDepth: 'Grade AA (Fresh Dense Albumen, Deep Golden Yolk)',
    inspector: 'Quality Control Lead (The Rachy Brand)',
    status: 'Verified Authentic & Fresh'
  });

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lotCode.trim()) return;

    setResult({
      code: lotCode.toUpperCase().trim(),
      gatherDate: 'Morning Harvest Today at 05:30 AM',
      flock: 'Certified Layers (The Rachy Brand - Flock 2)',
      pastureZone: 'Lokoja Distribution Center - Kogi State',
      crateStandard: '30 Eggs per Standard Heavy-Duty Crate',
      feedPurity: 'Premium Feed Fortified with Vitamin D & Calcium',
      airCellDepth: 'Commercial Grade AA (Strong Shell Membrane)',
      inspector: 'Dispatch Quality Auditor',
      status: 'Verified Authentic & Fresh'
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-xl w-full p-6 sm:p-8 rounded-xs shadow-2xl relative text-stone-900 dark:text-stone-100 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-stone-200 dark:border-stone-800 pb-3 mb-5">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Rachy Fresh Eggs Batch Verification</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif">
            Verify Your Crate Origin &amp; Date
          </h3>
          <p className="text-xs text-stone-500 font-serif mt-1">
            Check the lot code printed on your delivery receipt or crate label.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleLookup} className="flex gap-2 mb-6">
          <input
            type="text"
            required
            placeholder="e.g. RFE-LKJ-01"
            value={lotCode}
            onChange={(e) => setLotCode(e.target.value)}
            className="flex-1 px-3 py-2 text-xs uppercase font-mono bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            Verify Batch
          </button>
        </form>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-6 font-serif">
          <span>Try sample codes:</span>
          {['RFE-LKJ-01', 'RFE-LKJ-02', 'RFE-KOGI-05'].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLotCode(code)}
              className="text-red-700 dark:text-red-400 hover:underline font-mono"
            >
              {code}
            </button>
          ))}
        </div>

        {/* Traceability Result Card */}
        {result && (
          <div className="p-4 sm:p-5 bg-[#faf7f2] dark:bg-stone-900 rounded-xs border border-stone-300 dark:border-stone-800 space-y-3 font-serif text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
              <span className="font-mono font-bold text-sm text-[#c91a1a]">
                BATCH #{result.code}
              </span>
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {result.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700 dark:text-stone-300">
              <div>
                <span className="text-[10px] text-stone-400 uppercase font-sans font-bold block">
                  Harvest Time
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {result.gatherDate}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-stone-400 uppercase font-sans font-bold block">
                  Location &amp; Hub
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {result.pastureZone}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-stone-400 uppercase font-sans font-bold block">
                  Layer Flock
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Feather className="w-3.5 h-3.5 text-amber-600" />
                  {result.flock}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-stone-400 uppercase font-sans font-bold block">
                  Packaging Standard
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Heart className="w-3.5 h-3.5 text-emerald-500" />
                  {result.crateStandard}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 flex justify-between">
              <span>Quality Check: {result.airCellDepth}</span>
              <span>Auditor: {result.inspector}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
