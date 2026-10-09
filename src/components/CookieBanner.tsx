import React, { useState } from 'react';
import { CookiePreferences } from '../types';
import { ShieldCheck, Settings, Check, X } from 'lucide-react';

interface CookieBannerProps {
  preferences: CookiePreferences;
  onSavePreferences: (prefs: CookiePreferences) => void;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  preferences,
  onSavePreferences,
  onOpenPrivacy
}) => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [customPrefs, setCustomPrefs] = useState({
    necessary: true,
    analytics: preferences.analytics,
    functional: preferences.functional,
    marketing: preferences.marketing
  });

  if (preferences.hasConsented) return null;

  const handleAcceptAll = () => {
    onSavePreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      hasConsented: true
    });
  };

  const handleRejectNonEssential = () => {
    onSavePreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      hasConsented: true
    });
  };

  const handleSaveCustom = () => {
    onSavePreferences({
      ...customPrefs,
      necessary: true,
      hasConsented: true
    });
  };

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-200 border-t border-stone-800 p-4 sm:p-6 shadow-2xl animate-fadeIn"
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        
        {/* Notice text */}
        <div className="max-w-3xl text-left">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>GDPR & CCPA Privacy Compliance</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-serif">
            We use strictly necessary cookies to ensure secure order dispatch and cart functionality. With your consent, we also utilize anonymized performance cookies to refine local delivery routes. Under GDPR & CCPA, you have full control over your personal data.
          </p>
          <div className="mt-1">
            <button
              onClick={onOpenPrivacy}
              className="text-[11px] text-amber-400 hover:underline font-sans cursor-pointer"
            >
              Read full Privacy Policy & CCPA Rights &rarr;
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
          {!showCustomize ? (
            <>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-xs font-bold tracking-wider uppercase border border-stone-600 hover:border-stone-400 rounded-xs transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>

              <button
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 text-xs font-bold tracking-wider uppercase border border-stone-600 hover:border-stone-400 rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                Customize
              </button>

              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 text-xs font-bold tracking-wider uppercase bg-[#c91a1a] hover:bg-red-700 text-white rounded-xs shadow-md transition-colors cursor-pointer"
              >
                Accept All Cookies
              </button>
            </>
          ) : (
            <div className="w-full bg-stone-800 p-4 rounded-xs border border-stone-700 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span>Granular Privacy Options</span>
                <button onClick={() => setShowCustomize(false)} className="text-stone-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                <label className="flex items-center gap-2 opacity-80 cursor-not-allowed">
                  <input type="checkbox" checked disabled className="rounded text-red-600" />
                  <span>Strictly Necessary (Required)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={customPrefs.analytics} 
                    onChange={(e) => setCustomPrefs({ ...customPrefs, analytics: e.target.checked })} 
                    className="rounded text-red-600"
                  />
                  <span>Analytics & Performance</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={customPrefs.marketing} 
                    onChange={(e) => setCustomPrefs({ ...customPrefs, marketing: e.target.checked })} 
                    className="rounded text-red-600"
                  />
                  <span>Marketing Preferences</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={handleSaveCustom}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xs cursor-pointer"
                >
                  Save Choices
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
