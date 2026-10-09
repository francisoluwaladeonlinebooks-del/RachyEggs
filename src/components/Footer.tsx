import React, { useState } from 'react';
import { 
  QualitySealBadge, 
  VisaBadge, 
  MastercardBadge, 
  PaypalBadge 
} from './Icons';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Check, 
  ShieldCheck, 
  Lock,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/farmData';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
  onOpenTraceability: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenCookies,
  onOpenTraceability
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubmitted(false);
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-[#f4eee1] dark:bg-[#141210] border-t border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-300 transition-colors duration-200">
      
      {/* 4 Column Main Content (Matching design image layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Guarantee of Quality Stamp + Social Icons (Exact design) */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-4 text-stone-900 dark:text-stone-100">
              <QualitySealBadge className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-xs" />
            </div>

            {/* Social Icons matching design image (round bordered buttons) */}
            <div className="flex items-center gap-2 mt-2">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((network) => (
                <a
                  key={network}
                  href={`#${network.toLowerCase()}`}
                  className="w-8 h-8 rounded-full border border-stone-400 dark:border-stone-600 hover:border-red-600 dark:hover:border-red-400 text-stone-600 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  aria-label={`Visit our ${network} page`}
                  onClick={(e) => e.preventDefault()}
                >
                  {network[0]}
                </a>
              ))}
            </div>

            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-4 max-w-xs font-serif">
              Rachy Fresh Eggs operates under The Rachy Brand. Dedicated to high-protein nourishment, zero shell breakage, and honest farm-gate prices.
            </p>
          </div>

          {/* Column 2: CONTACT US (Exact layout & details from image) */}
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-4 pb-1 border-b border-stone-300 dark:border-stone-700">
              CONTACT US
            </h4>
            
            <ul className="space-y-3.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Rachy Fresh Eggs Hub</span>
                  <span>No. 20 Queensland Hotel, Phase 2</span>
                  <span className="block">Lokoja, Kogi State, Nigeria</span>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors font-sans"
                >
                  Phone: {BUSINESS_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors font-sans truncate"
                >
                  Email: {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-stone-300 dark:border-stone-800">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Rachy Fresh Eggs, I have an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                Chat with Lokoja Sales on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 3: SIGN UP FOR NEWSLETTER (Matching design image) */}
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-4 pb-1 border-b border-stone-300 dark:border-stone-700">
              SIGN UP FOR NEWSLETTER
            </h4>

            <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 leading-relaxed font-serif">
              Stay informed on crate price alerts, wholesale seasonal discounts, and weekly supply schedules.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter Phone or Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 px-4 text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  newsletterSubmitted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c91a1a] hover:bg-red-700 text-white'
                }`}
              >
                {newsletterSubmitted ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    SUBSCRIBED!
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3" />
                    SUBSCRIBE
                  </>
                )}
              </button>
            </form>

            {/* Payment method icons matching mockup + Nigerian gateways */}
            <div className="mt-5 pt-3 border-t border-stone-300 dark:border-stone-800 flex flex-wrap items-center gap-2">
              <span className="px-1.5 py-0.5 bg-emerald-800 text-white rounded text-[10px] font-bold">
                PAYSTACK
              </span>
              <span className="px-1.5 py-0.5 bg-blue-800 text-white rounded text-[10px] font-bold">
                BANK TRANSFER
              </span>
              <VisaBadge />
              <MastercardBadge />
              <span className="text-[10px] text-stone-400 dark:text-stone-500 font-sans ml-1 flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5" /> SSL 256-Bit
              </span>
            </div>
          </div>

          {/* Column 4: QUICK LINKS (Pages requested by user) */}
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold font-brand tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase mb-4 pb-1 border-b border-stone-300 dark:border-stone-700">
              WEBSITE PAGES
            </h4>

            <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400 font-serif">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('wholesale')} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer font-bold text-red-700 dark:text-red-400"
                >
                  Wholesale Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>

            {/* Privacy & Compliance Quick Links */}
            <div className="mt-5 pt-3 border-t border-stone-300 dark:border-stone-800 space-y-1 text-[11px] text-stone-500 dark:text-stone-400">
              <button 
                onClick={onOpenPrivacy}
                className="block hover:underline text-left cursor-pointer"
              >
                Privacy &amp; CCPA/NDPR Policy
              </button>
              <button 
                onClick={onOpenCookies}
                className="block hover:underline text-left cursor-pointer"
              >
                Cookie Preferences
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#ebe3d3] dark:bg-[#0c0b0a] border-t border-stone-300 dark:border-stone-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-600 dark:text-stone-400 gap-2 font-serif">
          <div>
            © 2026 Rachy Fresh Eggs (under The Rachy Brand). All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Lokoja, Kogi State</span>
            <span>·</span>
            <span>Retail &amp; Wholesale Supply</span>
            <span>·</span>
            <span>Zero-Crack Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
