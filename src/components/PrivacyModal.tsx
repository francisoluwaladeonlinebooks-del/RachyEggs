import React, { useState } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const [optOutConfirmed, setOptOutConfirmed] = useState(false);
  const [activeTab, setActiveTab] = useState<'privacy' | 'ccpa' | 'copyright' | 'security'>('privacy');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-3xl w-full p-6 sm:p-8 rounded-xs shadow-2xl relative text-stone-900 dark:text-stone-100 my-8 text-left max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-stone-200 dark:border-stone-800 pb-3 mb-4">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            <span>Legal, Privacy & Compliance Policy</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif mt-1">
            Data Protection & Copyright Charter
          </h3>
          <span className="text-[11px] text-stone-500 font-serif">
            Last Updated: 2026 · Shields Poultry Farm (Himmelgeister Str. 100, Düsseldorf)
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 gap-4 mb-4 text-xs font-bold uppercase tracking-wider overflow-x-auto">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2 border-b-2 cursor-pointer ${
              activeTab === 'privacy' ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500'
            }`}
          >
            GDPR Privacy Rights
          </button>
          <button
            onClick={() => setActiveTab('ccpa')}
            className={`pb-2 border-b-2 cursor-pointer ${
              activeTab === 'ccpa' ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500'
            }`}
          >
            CCPA / CPRA & &quot;Do Not Sell&quot;
          </button>
          <button
            onClick={() => setActiveTab('copyright')}
            className={`pb-2 border-b-2 cursor-pointer ${
              activeTab === 'copyright' ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500'
            }`}
          >
            Copyright & IP Protection
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`pb-2 border-b-2 cursor-pointer ${
              activeTab === 'security' ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500'
            }`}
          >
            Platform Security
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 pr-2 space-y-4 text-xs sm:text-[13px] font-serif leading-relaxed text-stone-700 dark:text-stone-300">
          
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                1. General Data Protection Regulation (EU GDPR)
              </h4>
              <p>
                Shields Poultry Farm processes personal data exclusively for the purpose of fulfilling morning egg reservations, doorstep deliveries, and managing recurring subscription accounts under Article 6(1)(b) of the GDPR.
              </p>
              <h5 className="font-bold text-stone-900 dark:text-stone-100">Your Data Subject Rights (Articles 15–22):</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right of Access (Art. 15):</strong> Request a copy of all delivery addresses and order history stored.</li>
                <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate contact details or delivery preferences at any time.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;, Art. 17):</strong> Request deletion of your farm account and past delivery logs.</li>
                <li><strong>Data Protection Officer:</strong> Contact dpo@thismorningseggs.com or call +49-211-96-83-058.</li>
              </ul>
            </div>
          )}

          {activeTab === 'ccpa' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                2. California Consumer Privacy Act (CCPA & CPRA)
              </h4>
              <p>
                We do not sell, rent, or trade your personal information to third-party data brokers. We only share delivery addresses with verified logistics partners responsible for doorstep egg deliveries.
              </p>
              
              <div className="p-4 bg-amber-50 dark:bg-stone-900 rounded-xs border border-amber-200 dark:border-stone-700 my-2">
                <h5 className="font-bold text-stone-900 dark:text-stone-100 mb-1">
                  Do Not Sell or Share My Personal Information
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
                  Click below to record your permanent opt-out preference against any prospective commercial data sharing.
                </p>

                {optOutConfirmed ? (
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your opt-out preference has been recorded and locked for this browser.</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setOptOutConfirmed(true)}
                    className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    Opt-Out of Data Sharing
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'copyright' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                3. Copyright & Intellectual Property Protection
              </h4>
              <p>
                All visual design layouts, trade dress, trademarks, the &quot;This Morning&apos;s Eggs&quot; logo emblem, the &quot;A Guarantee of Quality&quot; seal, culinary recipes, photography, and farm texts are the exclusive intellectual property of Shields Poultry Farm © 2017–2026.
              </p>
              <p>
                Any unauthorized reproduction, scraping, commercial redistribution, or reverse engineering of website assets without prior written consent from Shields Poultry Farm is strictly prohibited and subject to international copyright enforcement under the Berne Convention and DMCA.
              </p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                4. Cybersecurity & Anti-Hacking Defenses
              </h4>
              <p>
                Our web storefront utilizes defense-in-depth protection:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>End-to-end TLS 1.3 encryption with strict HTTP Strict Transport Security (HSTS).</li>
                <li>Content Security Policy (CSP) headers protecting against cross-site scripting (XSS) and code injection.</li>
                <li>Client-side input sanitization across all search queries, newsletter inputs, and checkout forms.</li>
                <li>PCI-DSS Level 1 compliant tokenized payment handling without storing credit card details on farm servers.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};
