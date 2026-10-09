import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Store, 
  ChefHat, 
  ShoppingBag, 
  Send, 
  CheckCircle2, 
  Calculator, 
  MessageSquare,
  ShieldCheck,
  TrendingDown,
  Truck
} from 'lucide-react';
import { WHOLESALE_TIERS, BUSINESS_INFO } from '../data/farmData';

export const WholesaleOrders: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Jumbo'>('Medium');
  const [crateCount, setCrateCount] = useState<number>(25);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [inquiryForm, setInquiryForm] = useState({
    businessName: '',
    contactPerson: '',
    businessType: 'Retail Provision Store',
    phone: '',
    email: '',
    deliveryLocation: 'Lokoja (Ganaja/Lokongoma)',
    frequency: 'Weekly Recurring Supply',
    notes: ''
  });

  // Calculate pricing
  const unitPrices = {
    Small: 5500,
    Medium: 6500,
    Jumbo: 8000
  };

  const basePrice = unitPrices[selectedSize];
  const discountRate = crateCount >= 50 ? 0.08 : crateCount >= 10 ? 0.05 : 0;
  const unitWholesalePrice = basePrice * (1 - discountRate);
  const totalWholesale = unitWholesalePrice * crateCount;
  const standardTotal = basePrice * crateCount;
  const totalSaved = standardTotal - totalWholesale;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryForm({
        businessName: '',
        contactPerson: '',
        businessType: 'Retail Provision Store',
        phone: '',
        email: '',
        deliveryLocation: 'Lokoja (Ganaja/Lokongoma)',
        frequency: 'Weekly Recurring Supply',
        notes: ''
      });
      setFormSubmitted(false);
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Rachy Fresh Eggs (The Rachy Brand), I would like to place a wholesale inquiry for ${crateCount} crates of ${selectedSize} Size Fresh Eggs in Lokoja / Kogi State.`
  );

  return (
    <section id="wholesale" className="w-full bg-[#fbf8f1] dark:bg-[#161413] py-16 sm:py-20 md:py-24 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-700 dark:text-red-400 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
            B2B Commercial Distribution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.14em] text-stone-900 dark:text-stone-100 uppercase">
            WHOLESALE ORDERS &amp; BULK SUPPLY
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
            Supplying retailers, provision stores, market traders, supermarkets, restaurants, hotels, bakeries, and bulk buyers with high-volume, reliable egg crates.
          </p>
        </div>

        {/* 3 Wholesale Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {WHOLESALE_TIERS.map((tier, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xs shadow-xs text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400 block mb-1">
                  Volume Tier {idx + 1}
                </span>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
                  {tier.tier}
                </h3>
                <div className="text-sm font-bold text-red-700 dark:text-red-400 mb-3">
                  {tier.crates} · {tier.priceNote}
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif mb-4">
                  {tier.discount}
                </p>

                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400 font-serif mb-6">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in the ${tier.tier} (${tier.crates}) for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Wholesale Cost Calculator & Quote Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Wholesale Cost Estimator (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-xs text-left shadow-sm">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Calculator className="w-4 h-4" />
              <span>Instant Wholesale Estimator</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-4">
              Calculate Your Order Volume
            </h3>

            {/* Size Selector */}
            <div className="space-y-1.5 mb-4">
              <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400">
                1. Select Egg Size (30 Eggs/Crate)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Small', 'Medium', 'Jumbo'] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-2 text-xs font-bold uppercase rounded-xs border transition-colors cursor-pointer text-center ${
                      selectedSize === sz
                        ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'
                        : 'border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {sz} (₦{unitPrices[sz].toLocaleString()})
                  </button>
                ))}
              </div>
            </div>

            {/* Crate volume slider */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold uppercase text-stone-600 dark:text-stone-400">
                  2. Number of Crates:
                </label>
                <span className="text-base font-bold font-serif text-red-700 dark:text-red-400">
                  {crateCount} Crates ({crateCount * 30} Eggs)
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={crateCount}
                onChange={(e) => setCrateCount(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400">
                <span>5 Crates</span>
                <span>50 Crates (Distributor)</span>
                <span>200 Crates (Truckload)</span>
              </div>
            </div>

            {/* Estimator calculation results */}
            <div className="p-4 bg-[#faf7f2] dark:bg-stone-800/80 rounded-xs border border-stone-200 dark:border-stone-700/80 space-y-2 font-serif text-xs mb-6">
              <div className="flex justify-between">
                <span>Standard Unit Rate:</span>
                <span>₦{basePrice.toLocaleString()} / crate</span>
              </div>
              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span>Wholesale Discount ({(discountRate * 100).toFixed(0)}%):</span>
                  <span>-₦{totalSaved.toLocaleString()} total</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Effective Crate Price:</span>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  ₦{Math.round(unitWholesalePrice).toLocaleString()} / crate
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 dark:text-stone-100 pt-2 border-t border-stone-300 dark:border-stone-700">
                <span>Estimated Order Total:</span>
                <span className="text-base text-red-700 dark:text-red-400">
                  ₦{Math.round(totalWholesale).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Order This Estimate via WhatsApp
            </a>
          </div>

          {/* Right: Institutional Contract Inquiries Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-xs text-left shadow-sm">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Building2 className="w-4 h-4" />
              <span>Commercial Partner Application</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
              Request a Commercial Supply Contract
            </h3>
            <p className="text-xs text-stone-500 font-serif mb-6">
              Bakeries, supermarkets, hotels, and provision stores can register for priority morning deliveries and credit terms.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center text-emerald-700 dark:text-emerald-400 space-y-2">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                <h4 className="text-lg font-bold font-serif">Wholesale Inquiry Received!</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm mx-auto font-serif">
                  A representative from Rachy Fresh Eggs (The Rachy Brand) will contact you within 2 hours to confirm your supply schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Business or Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Delight Bakery"
                      value={inquiryForm.businessName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, businessName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mrs. Adebayo"
                      value={inquiryForm.contactPerson}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Business Category *
                    </label>
                    <select
                      value={inquiryForm.businessType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, businessType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    >
                      <option value="Retail Provision Store">Retail Provision Store</option>
                      <option value="Market Trader / Stall">Market Trader / Open Market</option>
                      <option value="Commercial Bakery">Commercial Bakery / Confectionery</option>
                      <option value="Supermarket / Grocery">Supermarket / Grocery Chain</option>
                      <option value="Hotel / Restaurant / Canteen">Hotel / Restaurant / Eatery</option>
                      <option value="Institutional Caterer">School / Hospital / Event Caterer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803..."
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lokongoma Phase 2, Lokoja"
                      value={inquiryForm.deliveryLocation}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, deliveryLocation: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Supply Frequency
                    </label>
                    <select
                      value={inquiryForm.frequency}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, frequency: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                    >
                      <option value="Daily Early Morning Supply">Daily Early Morning Supply</option>
                      <option value="Weekly (1 to 2 times a week)">Weekly (1 to 2 times a week)</option>
                      <option value="Bi-Weekly Bulk Restock">Bi-Weekly Bulk Restock</option>
                      <option value="One-time Special Event Order">One-time Special Event Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Specific Requirements or Crate Mix (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. We require 40 Jumbo crates and 20 Medium crates every Monday morning."
                    value={inquiryForm.notes}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-stone-900 dark:text-stone-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Wholesale Application
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
