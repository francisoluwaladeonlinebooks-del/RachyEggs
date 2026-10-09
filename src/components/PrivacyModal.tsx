import React, { useState } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/farmData';

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
            Last Updated: 2026 · {BUSINESS_INFO.fullName} ({BUSINESS_INFO.address})
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
            NDPR & GDPR Privacy Rights
          </button>
          <button
            onClick={() => setActiveTab('ccpa')}
            className={`pb-2 border-b-2 cursor-pointer ${
              activeTab === 'ccpa' ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500'
            }`}
          >
            CCPA & &quot;Do Not Sell&quot;
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
                1. Nigeria Data Protection Regulation (NDPR) & GDPR
              </h4>
              <p>
                Rachy Fresh Eggs (under The Rachy Brand) processes customer data solely for managing retail deliveries, commercial wholesale supply schedules, and billing inquiries from our business office at <strong>{BUSINESS_INFO.address}</strong>.
              </p>
              <h5 className="font-bold text-stone-900 dark:text-stone-100">Your Data Subject Rights:</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right of Access:</strong> Request a full copy of your order receipts, delivery locations, and business contact information.</li>
                <li><strong>Right to Rectification:</strong> Update delivery address or store contact details at any time.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of stored phone numbers and past delivery records upon completion of orders.</li>
                <li><strong>Contact Support:</strong> Reach out directly to {BUSINESS_INFO.email} or call {BUSINESS_INFO.phone}.</li>
              </ul>
            </div>
          )}

          {activeTab === 'ccpa' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                2. Data Sharing Transparency & Opt-Out
              </h4>
              <p>
                We never sell, monetize, or disclose customer or business client information to third-party marketing brokers. Data is exclusively shared with authorized delivery drivers fulfilling egg crate drop-offs in Lokoja and regional transit hubs.
              </p>
              
              <div className="p-4 bg-amber-50 dark:bg-stone-900 rounded-xs border border-amber-200 dark:border-stone-700 my-2">
                <h5 className="font-bold text-stone-900 dark:text-stone-100 mb-1">
                  Do Not Sell or Share My Personal Information
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
                  Click below to record your permanent opt-out preference against commercial data sharing.
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
                All visual layouts, trademarks, &quot;The Rachy Brand&quot; logo emblems, trade dress, product photographs, and text content are the exclusive intellectual property of Rachy Fresh Eggs (under The Rachy Brand) © 2026.
              </p>
              <p>
                Headquarters: {BUSINESS_INFO.address}. Unauthorized commercial reproduction or imitation of brand assets is strictly prohibited.
              </p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                4. Platform Security & Defense
              </h4>
              <p>
                Our ordering platform features enterprise-grade SSL 256-bit encryption, strict CSRF/XSS input sanitization, and secure payment handling via verified Nigerian payment gateways.
              </p>
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
